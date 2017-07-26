/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _moduleLoader = __webpack_require__(2);
	
	var _moduleLoader2 = _interopRequireDefault(_moduleLoader);
	
	var _domModuleLoader = __webpack_require__(4);
	
	var _domModuleLoader2 = _interopRequireDefault(_domModuleLoader);
	
	var _domOps = __webpack_require__(5);
	
	var dom = _interopRequireWildcard(_domOps);
	
	__webpack_require__(6);
	
	var _modal = __webpack_require__(7);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _ajaxForm = __webpack_require__(9);
	
	var _ajaxForm2 = _interopRequireDefault(_ajaxForm);
	
	var _formFields = __webpack_require__(19);
	
	var _formFields2 = _interopRequireDefault(_formFields);
	
	var _toggleAccordionPanel = __webpack_require__(21);
	
	var _toggleAccordionPanel2 = _interopRequireDefault(_toggleAccordionPanel);
	
	var _toggleElement = __webpack_require__(22);
	
	var _toggleElement2 = _interopRequireDefault(_toggleElement);
	
	var _gallerySimple = __webpack_require__(23);
	
	var _gallerySimple2 = _interopRequireDefault(_gallerySimple);
	
	var _accordion = __webpack_require__(24);
	
	var _accordion2 = _interopRequireDefault(_accordion);
	
	var _headerNav = __webpack_require__(25);
	
	var _headerNav2 = _interopRequireDefault(_headerNav);
	
	var _carousel = __webpack_require__(26);
	
	var _carousel2 = _interopRequireDefault(_carousel);
	
	var _addressLookup = __webpack_require__(45);
	
	var addressLookup = _interopRequireWildcard(_addressLookup);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.initAutocomplete = addressLookup.initAutocomplete;
	window.geolocate = addressLookup.geolocate;
	window.fillInAddress = addressLookup.fillInAddress;
	
	dom.whenReady(function () {
	    (0, _moduleLoader2.default)({
	        formFields: _formFields2.default,
	        domModules: (0, _domModuleLoader2.default)({
	            modal: _modal2.default,
	            ajaxForm: _ajaxForm2.default,
	            toggleAccordionPanel: _toggleAccordionPanel2.default,
	            toggleElement: _toggleElement2.default,
	            gallerySimple: _gallerySimple2.default,
	            headerNav: _headerNav2.default,
	            accordion: _accordion2.default,
	            carousel: _carousel2.default,
	            addressLookup: addressLookup
	        })
	    });
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 1.1.20170427
	 *
	 * By Eli Grey, http://eligrey.com
	 * License: Dedicated to the public domain.
	 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
	 */
	
	/*global self, document, DOMException */
	
	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
	
	if ("document" in window.self) {
	
	// Full polyfill for browsers with no classList support
	// Including IE < Edge missing SVGElement.classList
	if (!("classList" in document.createElement("_")) 
		|| document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {
	
	(function (view) {
	
	"use strict";
	
	if (!('Element' in view)) return;
	
	var
		  classListProp = "classList"
		, protoProp = "prototype"
		, elemCtrProto = view.Element[protoProp]
		, objCtr = Object
		, strTrim = String[protoProp].trim || function () {
			return this.replace(/^\s+|\s+$/g, "");
		}
		, arrIndexOf = Array[protoProp].indexOf || function (item) {
			var
				  i = 0
				, len = this.length
			;
			for (; i < len; i++) {
				if (i in this && this[i] === item) {
					return i;
				}
			}
			return -1;
		}
		// Vendors: please allow content code to instantiate DOMExceptions
		, DOMEx = function (type, message) {
			this.name = type;
			this.code = DOMException[type];
			this.message = message;
		}
		, checkTokenAndGetIndex = function (classList, token) {
			if (token === "") {
				throw new DOMEx(
					  "SYNTAX_ERR"
					, "An invalid or illegal string was specified"
				);
			}
			if (/\s/.test(token)) {
				throw new DOMEx(
					  "INVALID_CHARACTER_ERR"
					, "String contains an invalid character"
				);
			}
			return arrIndexOf.call(classList, token);
		}
		, ClassList = function (elem) {
			var
				  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
				, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
				, i = 0
				, len = classes.length
			;
			for (; i < len; i++) {
				this.push(classes[i]);
			}
			this._updateClassName = function () {
				elem.setAttribute("class", this.toString());
			};
		}
		, classListProto = ClassList[protoProp] = []
		, classListGetter = function () {
			return new ClassList(this);
		}
	;
	// Most DOMException implementations don't allow calling DOMException's toString()
	// on non-DOMExceptions. Error's toString() is sufficient here.
	DOMEx[protoProp] = Error[protoProp];
	classListProto.item = function (i) {
		return this[i] || null;
	};
	classListProto.contains = function (token) {
		token += "";
		return checkTokenAndGetIndex(this, token) !== -1;
	};
	classListProto.add = function () {
		var
			  tokens = arguments
			, i = 0
			, l = tokens.length
			, token
			, updated = false
		;
		do {
			token = tokens[i] + "";
			if (checkTokenAndGetIndex(this, token) === -1) {
				this.push(token);
				updated = true;
			}
		}
		while (++i < l);
	
		if (updated) {
			this._updateClassName();
		}
	};
	classListProto.remove = function () {
		var
			  tokens = arguments
			, i = 0
			, l = tokens.length
			, token
			, updated = false
			, index
		;
		do {
			token = tokens[i] + "";
			index = checkTokenAndGetIndex(this, token);
			while (index !== -1) {
				this.splice(index, 1);
				updated = true;
				index = checkTokenAndGetIndex(this, token);
			}
		}
		while (++i < l);
	
		if (updated) {
			this._updateClassName();
		}
	};
	classListProto.toggle = function (token, force) {
		token += "";
	
		var
			  result = this.contains(token)
			, method = result ?
				force !== true && "remove"
			:
				force !== false && "add"
		;
	
		if (method) {
			this[method](token);
		}
	
		if (force === true || force === false) {
			return force;
		} else {
			return !result;
		}
	};
	classListProto.toString = function () {
		return this.join(" ");
	};
	
	if (objCtr.defineProperty) {
		var classListPropDesc = {
			  get: classListGetter
			, enumerable: true
			, configurable: true
		};
		try {
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		} catch (ex) { // IE 8 doesn't support enumerable:true
			// adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
			// modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
			if (ex.number === undefined || ex.number === -0x7FF5EC54) {
				classListPropDesc.enumerable = false;
				objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
			}
		}
	} else if (objCtr[protoProp].__defineGetter__) {
		elemCtrProto.__defineGetter__(classListProp, classListGetter);
	}
	
	}(window.self));
	
	}
	
	// There is full or partial native classList support, so just check if we need
	// to normalize the add/remove and toggle APIs.
	
	(function () {
		"use strict";
	
		var testElement = document.createElement("_");
	
		testElement.classList.add("c1", "c2");
	
		// Polyfill for IE 10/11 and Firefox <26, where classList.add and
		// classList.remove exist but support only one argument at a time.
		if (!testElement.classList.contains("c2")) {
			var createMethod = function(method) {
				var original = DOMTokenList.prototype[method];
	
				DOMTokenList.prototype[method] = function(token) {
					var i, len = arguments.length;
	
					for (i = 0; i < len; i++) {
						token = arguments[i];
						original.call(this, token);
					}
				};
			};
			createMethod('add');
			createMethod('remove');
		}
	
		testElement.classList.toggle("c3", false);
	
		// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
		// support the second argument.
		if (testElement.classList.contains("c3")) {
			var _toggle = DOMTokenList.prototype.toggle;
	
			DOMTokenList.prototype.toggle = function(token, force) {
				if (1 in arguments && !this.contains(token) === !force) {
					return force;
				} else {
					return _toggle.call(this, token);
				}
			};
	
		}
	
		testElement = null;
	}());
	
	}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	    Module system
	
	    All modules export `init` methods.
	
	    Persistent modules:
	        - Can be initialised once per page.
	        - Can optionally export a `refresh` method.
	        - Are maintained between page transitions.
	*/
	
	// Other imports
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _podPointUtils = __webpack_require__(3);
	
	var pageActive = false;
	var modules = {};
	
	function init(newModules) {
	    modules = newModules;
	
	    (0, _podPointUtils.each)(modules, function (module) {
	        if (module.init) {
	            module.init();
	        }
	    });
	
	    pageActive = true;
	}
	
	function reload() {
	    (0, _podPointUtils.each)(modules, function (module) {
	        if (module.hasOwnProperty('refresh')) {
	            module.refresh();
	        }
	    });
	}
	
	exports['default'] = function (newModules) {
	    if (pageActive) {
	        reload();
	    } else {
	        init(newModules);
	    }
	};
	
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.each = each;
	exports.throttle = throttle;
	exports.whenCalm = whenCalm;
	function each(props, callback) {
	    if (!props) {
	        return;
	    }
	
	    var keys = Object.keys(props),
	        numKeys = keys.length;
	
	    for (var i = 0; i < numKeys; i++) {
	        var key = keys[i],
	            prop = props[key];
	
	        if (callback(prop, key, props) === false) {
	            break;
	        }
	    }
	}
	
	function throttle(callback) {
	    var limit = arguments.length <= 1 || arguments[1] === undefined ? 35 : arguments[1];
	
	    var wait = false;
	
	    return function () {
	        if (!wait) {
	            callback();
	            wait = true;
	
	            setTimeout(function () {
	                wait = false;
	            }, limit);
	        }
	    };
	}
	
	function whenCalm(callback) {
	    var timeout = arguments.length <= 1 || arguments[1] === undefined ? 250 : arguments[1];
	
	    var timer = undefined;
	
	    return function () {
	        clearTimeout(timer);
	
	        timer = setTimeout(function () {
	            callback();
	        }, timeout);
	    };
	}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	    DOM module handler, compatible with @pod-point/module-loader
	
	    All modules export `init` methods.
	
	    DOM modules:
	        - Can be initialised multiple times per page.
	        - Can optionally export a `destory` method.
	        - Are destroyed between page transitions.
	        - Initialised by adding the imported module name to an element's
	            `data-js-module` attribute. Multiple names can be added and are
	            space-delimited.
	*/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _podPointDomOps = __webpack_require__(5);
	
	var DATA_TAG = 'data-js-module';
	
	var activeModules = [];
	var domModules = {};
	var definedDataTag = '';
	
	function init() {
	    var moduleElements = (0, _podPointDomOps.nodesToArray)((0, _podPointDomOps.select)('[' + definedDataTag + ']'));
	
	    activeModules = [];
	
	    if (moduleElements) {
	        moduleElements.forEach(function (element) {
	            var modulesToLoad = element.getAttribute(definedDataTag).split(' ');
	
	            modulesToLoad.forEach(function (name) {
	                var module = domModules[name];
	
	                if (module && module.init) {
	                    module.init(element);
	                    activeModules.push(module);
	                }
	            });
	        });
	    }
	}
	
	function refresh() {
	    activeModules.forEach(function (module) {
	        if (module.hasOwnProperty('destroy')) {
	            module.destroy();
	        }
	    });
	
	    init();
	}
	
	exports['default'] = function (modules) {
	    var dataTag = arguments.length <= 1 || arguments[1] === undefined ? DATA_TAG : arguments[1];
	
	    domModules = modules;
	    definedDataTag = dataTag;
	    return { init: init, refresh: refresh };
	};
	
	module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.select = select;
	exports.selectFirst = selectFirst;
	exports.selectById = selectById;
	exports.closest = closest;
	exports.nextElement = nextElement;
	exports.parent = parent;
	exports.child = child;
	exports.create = create;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.appendChild = appendChild;
	exports.removeChild = removeChild;
	exports.clone = clone;
	exports.insertBefore = insertBefore;
	exports.insertAfter = insertAfter;
	exports.insertStart = insertStart;
	exports.insertEnd = insertEnd;
	exports.empty = empty;
	exports.hasClass = hasClass;
	exports.matches = matches;
	exports.nodesToArray = nodesToArray;
	exports.whenReady = whenReady;
	/*
	    ==============================================================
	    SELECTION
	    ==============================================================
	*/
	function select(selector) {
	    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	
	    var selection = root.querySelectorAll(selector);
	
	    return selection.length ? selection : null;
	}
	
	function selectFirst(selector) {
	    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	
	    return root.querySelector(selector);
	}
	
	function selectById(id) {
	    return document.getElementById(id);
	}
	
	/*
	    ==============================================================
	    TRAVERSAL
	    ==============================================================
	*/
	
	function closest(element, selector) {
	    var closest;
	
	    while (!closest) {
	        if (matches(element, selector)) {
	            closest = element;
	        }
	
	        element = parent(element);
	
	        if (!element || element === document) {
	            break;
	        }
	    }
	
	    return closest;
	}
	
	function nextElement(element) {
	    return element.nextElementSibling;
	}
	
	function parent(element) {
	    return element.parentNode;
	}
	
	// Currently undocumented - `select` performs this operation
	function child(element, selector) {
	    return element.querySelectorAll(selector);
	}
	
	/*
	    ==============================================================
	    MANIPULATION
	    ==============================================================
	*/
	function create() {
	    var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
	
	    return document.createElement(tag);
	}
	
	function addClass(element, className) {
	    nodesToArray(element).forEach(function (node) {
	        return node.classList.add(className);
	    });
	}
	
	function removeClass(element, className) {
	    nodesToArray(element).forEach(function (node) {
	        return node.classList.remove(className);
	    });
	}
	
	function appendChild(host, element) {
	    host.appendChild(element);
	}
	
	function removeChild(host, element) {
	    host.removeChild(element);
	}
	
	function clone(element) {
	    return element.cloneNode(true);
	}
	
	function insertBefore(element, html) {
	    element.insertAdjacentHTML('beforebegin', html);
	}
	
	function insertAfter(element, html) {
	    element.insertAdjacentHTML('afterend', html);
	}
	
	function insertStart(element, html) {
	    element.insertAdjacentHTML('afterbegin', html);
	}
	
	function insertEnd(element, html) {
	    element.insertAdjacentHTML('beforeend', html);
	}
	
	function empty(element) {
	    nodesToArray(element).forEach(function (node) {
	        while (node.firstChild) {
	            node.removeChild(node.firstChild);
	        }
	    });
	}
	
	/*
	    ==============================================================
	    IDENTIFICATION
	    ==============================================================
	*/
	
	function hasClass(element, className) {
	    var hasClass = true;
	    nodesToArray(element).forEach(function (node) {
	        if (!node.classList.contains(className)) {
	            hasClass = false;
	        }
	    });
	    return hasClass;
	}
	
	function matches(element, selector) {
	    return (element.matches || element.matchesSelector || element.msMatchesSelector).call(element, selector);
	}
	
	/*
	    ==============================================================
	    HELPERS
	    ==============================================================
	*/
	
	function nodesToArray(nodes) {
	    if (!nodes || nodes.length === 0) {
	        return false;
	    } else {
	        return nodes.length ? [].slice.call(nodes) : [nodes];
	    }
	}
	
	function whenReady(callback) {
	    if (document.readyState != 'loading' && document.body != null) {
	        callback();
	    } else {
	        document.addEventListener('DOMContentLoaded', callback);
	    }
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _domOps = __webpack_require__(5);
	
	window.defineSizeAndDevice = function () {
	    window.isTouchDevice = 'ontouchstart' in document.documentElement;
	    var winWidth = window.innerWidth;
	    var winWidthMedium = 800;
	    window.isMobileSize = winWidth < winWidthMedium;
	
	    window.isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
	    window.isIE10OrBelow = navigator.userAgent.indexOf('MSIE') >= 0;
	
	    window.onload = function () {
	        if (window.isTouchDevice) {
	            (0, _domOps.addClass)(document.body, 'is-touch');
	        } else {
	            (0, _domOps.addClass)(document.body, 'is-desktop');
	        }
	    };
	};
	window.defineSizeAndDevice();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domOps = __webpack_require__(5);
	
	var _utilities = __webpack_require__(8);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instances = [];
	var MODAL_OPEN = 'is-modal-open';
	
	var Modal = function () {
	
	    /**
	     * Creates a new modal window
	     *
	     * @param {element}
	     */
	    function Modal(element) {
	        _classCallCheck(this, Modal);
	
	        this.openButton = element;
	        var modalID = this.openButton.getAttribute('data-modal');
	        this.modal = document.querySelector('#' + modalID);
	        this.closeButton = this.modal.querySelector('.modal-close');
	        this.video = this.modal.querySelector('.video-wrapper iframe');
	
	        this.bindEvents();
	    }
	
	    /**
	     * Binds the event listeners from the elements
	     */
	
	
	    _createClass(Modal, [{
	        key: 'bindEvents',
	        value: function bindEvents() {
	            var _this = this;
	
	            this.openButton.addEventListener('click', function () {
	                _this.openModal();
	            });
	
	            this.closeButton.addEventListener('click', function (event) {
	                event.preventDefault();
	                _this.closeModal();
	            });
	
	            this.modal.addEventListener('click', function (event) {
	                if (event.target === _this.modal) {
	                    _this.closeModal();
	                }
	            });
	
	            document.body.addEventListener('keyup', function (event) {
	                if (event.keyCode === 27) {
	                    _this.closeModal();
	                }
	            });
	        }
	
	        /**
	         * Handle the modal opening
	         *
	         * @param {event}
	         */
	
	    }, {
	        key: 'doModal',
	        value: function doModal(event) {
	            event.preventDefault();
	
	            if ((0, _utilities.isVisible)(this.modal)) {
	                this.closeModal();
	            } else {
	                this.openModal();
	            }
	        }
	
	        /**
	         * Handle the modal opening
	         */
	
	    }, {
	        key: 'openModal',
	        value: function openModal() {
	            (0, _domOps.addClass)(document.documentElement, MODAL_OPEN);
	            (0, _utilities.show)(this.modal);
	
	            if (this.video) {
	                (0, _utilities.loadVideo)(this.video, true);
	            }
	
	            var overlay = document.createElement('div');
	            overlay.className = 'modal-overlay';
	            document.body.appendChild(overlay);
	        }
	
	        /**
	         * Handle the modal closing
	         */
	
	    }, {
	        key: 'closeModal',
	        value: function closeModal() {
	            (0, _domOps.removeClass)(document.documentElement, MODAL_OPEN);
	            (0, _utilities.hide)(this.modal);
	
	            if (this.video) {
	                (0, _utilities.loadVideo)(this.video, false);
	            }
	
	            var overlay = document.querySelector('.modal-overlay');
	            if (overlay !== null) {
	                document.body.removeChild(overlay);
	            }
	        }
	
	        /**
	         * Unbinds the event listeners from the elements
	         */
	
	    }, {
	        key: 'unbindEvents',
	        value: function unbindEvents() {
	            this.openListener.destroy();
	            this.closeListener.destroy();
	            this.overlayListener.destroy();
	            this.windowListener.destroy();
	        }
	    }]);
	
	    return Modal;
	}();
	
	exports.default = {
	    init: function init(element) {
	        instances.push(new Modal(element));
	    },
	
	    destroy: function destroy() {
	        instances.forEach(function (instance) {
	            return instance.unbindEvents();
	        });
	        instances = [];
	    }
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.show = show;
	exports.hide = hide;
	exports.isHidden = isHidden;
	exports.isVisible = isVisible;
	exports.disableOrEnableButton = disableOrEnableButton;
	exports.addItemToCookie = addItemToCookie;
	exports.readItemFromCookie = readItemFromCookie;
	exports.deleteItemFromCookie = deleteItemFromCookie;
	exports.openPanel = openPanel;
	exports.closePanel = closePanel;
	exports.allRadiosSelected = allRadiosSelected;
	exports.aRadioContains = aRadioContains;
	exports.getRandomInt = getRandomInt;
	exports.roundNumberTo = roundNumberTo;
	exports.loadVideo = loadVideo;
	exports.registerEvent = registerEvent;
	exports.removeEvents = removeEvents;
	
	var _domOps = __webpack_require__(5);
	
	var IS_OPEN = 'is-open';
	
	/**
	 * Remove hidden class from element, showing it via CSS
	 *
	 * @param {element}
	 */
	function show(element) {
	    element.classList.remove('hidden');
	}
	
	/**
	 * Apply hidden class to element, hiding it via CSS
	 *
	 * @param {element}
	 */
	function hide(element) {
	    element.classList.add('hidden');
	}
	
	/**
	 * Check if an element is hidden (by CSS)
	 *
	 * @param {element}
	 * @returns {boolean} is hidden
	 */
	function isHidden(element) {
	    return element.classList.contains('hidden');
	}
	
	/**
	 * Check if an element is visible (isn't hidden by CSS)
	 *
	 * @param {element}
	 * @returns {boolean} is visible
	 */
	function isVisible(element) {
	    return !isHidden(element);
	}
	
	/**
	 * Disable or enable button element
	 *
	 * @param {element} button
	 * @param {boolean} disable
	 */
	function disableOrEnableButton(element, disable) {
	    var button = element;
	    if (disable) {
	        button.disabled = true;
	        button.classList.add('is-disabled');
	    } else {
	        button.disabled = false;
	        button.classList.remove('is-disabled');
	    }
	}
	
	/**
	 * Add item to cookie
	 *
	 * @param {string} name of cookie
	 * @param {obj} value of cookie
	 */
	function addItemToCookie(name, value) {
	    var cookie = [name + '=' + JSON.stringify(value)];
	    document.cookie = cookie;
	}
	
	/**
	 * Read item from cookie
	 *
	 * @param {string} name of cookie
	 * @returns {obj} result
	 */
	function readItemFromCookie(name) {
	    var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
	    if (result) result = JSON.parse(result[1]);
	    return result;
	}
	
	/**
	 * Delete item from cookie
	 *
	 * @param {string} name of cookie
	 */
	function deleteItemFromCookie(name) {
	    var domain = window.location.host.toString();
	    var expiry = '01-Jan-1970 00:00:01 GMT';
	    document.cookie = name + '=; expires=' + expiry + '; path=/; domain=.' + domain;
	}
	
	/**
	 * Open panel
	 *
	 * @param {element} panel
	 */
	function openPanel(panel) {
	    var panelId = panel.getAttribute('id');
	    var toggleIcon = document.querySelector('[data-toggle-icon="' + panelId + '"]');
	
	    panel.classList.add(IS_OPEN);
	    if (toggleIcon) {
	        toggleIcon.classList.add('rotate');
	    }
	}
	
	/**
	 * Close panel
	 *
	 * @param {element} panel
	 */
	function closePanel(panel) {
	    var panelId = panel.getAttribute('id');
	    var toggleIcon = document.querySelector('[data-toggle-icon="' + panelId + '"]');
	
	    panel.classList.remove(IS_OPEN);
	    if (toggleIcon) {
	        toggleIcon.classList.remove('rotate');
	    }
	}
	
	/**
	 * All radios selected
	 *
	 * @param {nodeList} radio wrap elements
	 * @return {boolean} all radios have been selected
	 */
	function allRadiosSelected(radiosWraps) {
	    var numberOfRadioGroups = (0, _domOps.nodesToArray)(radiosWraps).length;
	    var numberOfRadiosSelected = 0;
	
	    radiosWraps.forEach(function (radiosWrap) {
	        var checkedRadios = (0, _domOps.nodesToArray)(radiosWrap.querySelectorAll('input[type="radio"]:checked'));
	        if (checkedRadios.length === 1) {
	            numberOfRadiosSelected += 1;
	        }
	    });
	    return numberOfRadioGroups === numberOfRadiosSelected;
	}
	
	/**
	 * A radio contains a class
	 *
	 * @param {nodeList} radios
	 * @param {string} the class
	 * @return {boolean} a radio contains the specified class
	 */
	function aRadioContains(radios, specifiedClass) {
	    var containsClass = false;
	    radios.forEach(function (radio) {
	        if (radio.checked) {
	            if (radio.classList.contains(specifiedClass)) {
	                containsClass = true;
	            }
	        }
	    });
	    return containsClass;
	}
	
	/**
	 * Get random integar
	 *
	 * @param {integar} min
	 * @param {integar} max
	 * @return {integar} a random integar between the specified min and max
	 */
	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	/**
	 * Round number to
	 *
	 * @param {integar} number
	 * @param {integar} number to round to
	 * @return {integar} a number rounded to the specified number
	 */
	function roundNumberTo(num, roundTo) {
	    var resto = num % roundTo;
	    return resto <= roundTo / 2 ? num - resto : num + roundTo - resto;
	}
	
	/**
	 * Load or destroy video by replacing the src from the data-src
	 *
	 * @param {element} video
	 * @param {boolean} load video
	 */
	function loadVideo(videoEl, load) {
	    var videoSrc = videoEl.getAttribute('data-src');
	
	    if (load) {
	        videoEl.setAttribute('src', videoSrc);
	    } else {
	        videoEl.setAttribute('src', '');
	    }
	}
	
	/**
	 * Register an event in order to later on remove the event
	 *
	 * @param {array} events array
	 * @param {element} element
	 * @param {string} event name
	 * @param {func} listener
	 */
	function registerEvent(eventsArray, element, eventName, listener) {
	    eventsArray.push({ element: element, eventName: eventName, listener: listener });
	}
	
	/**
	 * Remove the events from the events array
	 *
	 * @param {array} events array
	 * @param {callback} callback
	 */
	function removeEvents(eventsArray) {
	    eventsArray.forEach(function (eventObj) {
	        var element = eventObj.element,
	            eventName = eventObj.eventName,
	            listener = eventObj.listener;
	
	        element.removeEventListener(eventName, listener);
	    });
	}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(10);
	
	var _superagent = __webpack_require__(12);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	var _progressButton = __webpack_require__(18);
	
	var _progressButton2 = _interopRequireDefault(_progressButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instances = [];
	
	var AjaxForm = function () {
	
	    /**
	     * Create a new AJAX form
	     *
	     * @param {element} form
	     */
	    function AjaxForm(form) {
	        _classCallCheck(this, AjaxForm);
	
	        this.form = form;
	        this.button = _progressButton2.default.create(form.querySelector('button[type="submit"]'));
	        this.requestInProgress = false;
	
	        this.bindEvents();
	    }
	
	    /**
	     * Handle the form submission
	     */
	
	
	    _createClass(AjaxForm, [{
	        key: 'submitForm',
	        value: function submitForm() {
	            var _this = this;
	
	            this.requestInProgress = true;
	            this.button.handleLoading();
	
	            _superagent2.default.post(this.form.action).type('form').send(this.form).end(function (error, response) {
	                _this.requestInProgress = false;
	
	                if (response && response.ok) {
	                    _this.button.handleComplete(true);
	                } else {
	                    _this.button.handleComplete(false);
	                }
	            });
	        }
	
	        /**
	         * Bind any event listeners to the elements
	         */
	
	    }, {
	        key: 'bindEvents',
	        value: function bindEvents() {
	            var _this2 = this;
	
	            this.listener = new _domDelegate.Delegate(this.form);
	
	            this.listener.on('submit', function (event) {
	                event.preventDefault();
	
	                if (!_this2.requestInProgress) {
	                    _this2.submitForm();
	                }
	            });
	        }
	
	        /**
	         * Unbinds the event listeners from the elements
	         */
	
	    }, {
	        key: 'unbindEvents',
	        value: function unbindEvents() {
	            this.listener.destroy();
	        }
	    }]);
	
	    return AjaxForm;
	}();
	
	exports.default = {
	    init: function init(form) {
	        instances.push(new AjaxForm(form));
	    },
	
	    destroy: function destroy() {
	        instances.forEach(function (instance) {
	            return instance.unbindEvents();
	        });
	        instances = [];
	    }
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/*jshint browser:true, node:true*/
	
	'use strict';
	
	/**
	 * @preserve Create and manage a DOM event delegator.
	 *
	 * @version 0.3.0
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
	var Delegate = __webpack_require__(11);
	
	module.exports = function(root) {
	  return new Delegate(root);
	};
	
	module.exports.Delegate = Delegate;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/*jshint browser:true, node:true*/
	
	'use strict';
	
	module.exports = Delegate;
	
	/**
	 * DOM event delegator
	 *
	 * The delegator will listen
	 * for events that bubble up
	 * to the root node.
	 *
	 * @constructor
	 * @param {Node|string} [root] The root node or a selector string matching the root node
	 */
	function Delegate(root) {
	
	  /**
	   * Maintain a map of listener
	   * lists, keyed by event name.
	   *
	   * @type Object
	   */
	  this.listenerMap = [{}, {}];
	  if (root) {
	    this.root(root);
	  }
	
	  /** @type function() */
	  this.handle = Delegate.prototype.handle.bind(this);
	}
	
	/**
	 * Start listening for events
	 * on the provided DOM element
	 *
	 * @param  {Node|string} [root] The root node or a selector string matching the root node
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.root = function(root) {
	  var listenerMap = this.listenerMap;
	  var eventType;
	
	  // Remove master event listeners
	  if (this.rootElement) {
	    for (eventType in listenerMap[1]) {
	      if (listenerMap[1].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, true);
	      }
	    }
	    for (eventType in listenerMap[0]) {
	      if (listenerMap[0].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, false);
	      }
	    }
	  }
	
	  // If no root or root is not
	  // a dom node, then remove internal
	  // root reference and exit here
	  if (!root || !root.addEventListener) {
	    if (this.rootElement) {
	      delete this.rootElement;
	    }
	    return this;
	  }
	
	  /**
	   * The root node at which
	   * listeners are attached.
	   *
	   * @type Node
	   */
	  this.rootElement = root;
	
	  // Set up master event listeners
	  for (eventType in listenerMap[1]) {
	    if (listenerMap[1].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, true);
	    }
	  }
	  for (eventType in listenerMap[0]) {
	    if (listenerMap[0].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, false);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * @param {string} eventType
	 * @returns boolean
	 */
	Delegate.prototype.captureForType = function(eventType) {
	  return ['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(eventType) !== -1;
	};
	
	/**
	 * Attach a handler to one
	 * event for all elements
	 * that match the selector,
	 * now or in the future
	 *
	 * The handler function receives
	 * three arguments: the DOM event
	 * object, the node that matched
	 * the selector while the event
	 * was bubbling and a reference
	 * to itself. Within the handler,
	 * 'this' is equal to the second
	 * argument.
	 *
	 * The node that actually received
	 * the event can be accessed via
	 * 'event.target'.
	 *
	 * @param {string} eventType Listen for these events
	 * @param {string|undefined} selector Only handle events on elements matching this selector, if undefined match root element
	 * @param {function()} handler Handler function - event data passed here will be in event.data
	 * @param {Object} [eventData] Data to pass in event.data
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.on = function(eventType, selector, handler, useCapture) {
	  var root, listenerMap, matcher, matcherParam;
	
	  if (!eventType) {
	    throw new TypeError('Invalid event type: ' + eventType);
	  }
	
	  // handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }
	
	  // Fallback to sensible defaults
	  // if useCapture not set
	  if (useCapture === undefined) {
	    useCapture = this.captureForType(eventType);
	  }
	
	  if (typeof handler !== 'function') {
	    throw new TypeError('Handler must be a type of Function');
	  }
	
	  root = this.rootElement;
	  listenerMap = this.listenerMap[useCapture ? 1 : 0];
	
	  // Add master handler for type if not created yet
	  if (!listenerMap[eventType]) {
	    if (root) {
	      root.addEventListener(eventType, this.handle, useCapture);
	    }
	    listenerMap[eventType] = [];
	  }
	
	  if (!selector) {
	    matcherParam = null;
	
	    // COMPLEX - matchesRoot needs to have access to
	    // this.rootElement, so bind the function to this.
	    matcher = matchesRoot.bind(this);
	
	  // Compile a matcher for the given selector
	  } else if (/^[a-z]+$/i.test(selector)) {
	    matcherParam = selector;
	    matcher = matchesTag;
	  } else if (/^#[a-z0-9\-_]+$/i.test(selector)) {
	    matcherParam = selector.slice(1);
	    matcher = matchesId;
	  } else {
	    matcherParam = selector;
	    matcher = matches;
	  }
	
	  // Add to the list of listeners
	  listenerMap[eventType].push({
	    selector: selector,
	    handler: handler,
	    matcher: matcher,
	    matcherParam: matcherParam
	  });
	
	  return this;
	};
	
	/**
	 * Remove an event handler
	 * for elements that match
	 * the selector, forever
	 *
	 * @param {string} [eventType] Remove handlers for events matching this type, considering the other parameters
	 * @param {string} [selector] If this parameter is omitted, only handlers which match the other two will be removed
	 * @param {function()} [handler] If this parameter is omitted, only handlers which match the previous two will be removed
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.off = function(eventType, selector, handler, useCapture) {
	  var i, listener, listenerMap, listenerList, singleEventType;
	
	  // Handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }
	
	  // If useCapture not set, remove
	  // all event listeners
	  if (useCapture === undefined) {
	    this.off(eventType, selector, handler, true);
	    this.off(eventType, selector, handler, false);
	    return this;
	  }
	
	  listenerMap = this.listenerMap[useCapture ? 1 : 0];
	  if (!eventType) {
	    for (singleEventType in listenerMap) {
	      if (listenerMap.hasOwnProperty(singleEventType)) {
	        this.off(singleEventType, selector, handler);
	      }
	    }
	
	    return this;
	  }
	
	  listenerList = listenerMap[eventType];
	  if (!listenerList || !listenerList.length) {
	    return this;
	  }
	
	  // Remove only parameter matches
	  // if specified
	  for (i = listenerList.length - 1; i >= 0; i--) {
	    listener = listenerList[i];
	
	    if ((!selector || selector === listener.selector) && (!handler || handler === listener.handler)) {
	      listenerList.splice(i, 1);
	    }
	  }
	
	  // All listeners removed
	  if (!listenerList.length) {
	    delete listenerMap[eventType];
	
	    // Remove the main handler
	    if (this.rootElement) {
	      this.rootElement.removeEventListener(eventType, this.handle, useCapture);
	    }
	  }
	
	  return this;
	};
	
	
	/**
	 * Handle an arbitrary event.
	 *
	 * @param {Event} event
	 */
	Delegate.prototype.handle = function(event) {
	  var i, l, type = event.type, root, phase, listener, returned, listenerList = [], target, /** @const */ EVENTIGNORE = 'ftLabsDelegateIgnore';
	
	  if (event[EVENTIGNORE] === true) {
	    return;
	  }
	
	  target = event.target;
	
	  // Hardcode value of Node.TEXT_NODE
	  // as not defined in IE8
	  if (target.nodeType === 3) {
	    target = target.parentNode;
	  }
	
	  root = this.rootElement;
	
	  phase = event.eventPhase || ( event.target !== event.currentTarget ? 3 : 2 );
	  
	  switch (phase) {
	    case 1: //Event.CAPTURING_PHASE:
	      listenerList = this.listenerMap[1][type];
	    break;
	    case 2: //Event.AT_TARGET:
	      if (this.listenerMap[0] && this.listenerMap[0][type]) listenerList = listenerList.concat(this.listenerMap[0][type]);
	      if (this.listenerMap[1] && this.listenerMap[1][type]) listenerList = listenerList.concat(this.listenerMap[1][type]);
	    break;
	    case 3: //Event.BUBBLING_PHASE:
	      listenerList = this.listenerMap[0][type];
	    break;
	  }
	
	  // Need to continuously check
	  // that the specific list is
	  // still populated in case one
	  // of the callbacks actually
	  // causes the list to be destroyed.
	  l = listenerList.length;
	  while (target && l) {
	    for (i = 0; i < l; i++) {
	      listener = listenerList[i];
	
	      // Bail from this loop if
	      // the length changed and
	      // no more listeners are
	      // defined between i and l.
	      if (!listener) {
	        break;
	      }
	
	      // Check for match and fire
	      // the event if there's one
	      //
	      // TODO:MCG:20120117: Need a way
	      // to check if event#stopImmediatePropagation
	      // was called. If so, break both loops.
	      if (listener.matcher.call(target, listener.matcherParam, target)) {
	        returned = this.fire(event, target, listener);
	      }
	
	      // Stop propagation to subsequent
	      // callbacks if the callback returned
	      // false
	      if (returned === false) {
	        event[EVENTIGNORE] = true;
	        event.preventDefault();
	        return;
	      }
	    }
	
	    // TODO:MCG:20120117: Need a way to
	    // check if event#stopPropagation
	    // was called. If so, break looping
	    // through the DOM. Stop if the
	    // delegation root has been reached
	    if (target === root) {
	      break;
	    }
	
	    l = listenerList.length;
	    target = target.parentElement;
	  }
	};
	
	/**
	 * Fire a listener on a target.
	 *
	 * @param {Event} event
	 * @param {Node} target
	 * @param {Object} listener
	 * @returns {boolean}
	 */
	Delegate.prototype.fire = function(event, target, listener) {
	  return listener.handler.call(target, event, target);
	};
	
	/**
	 * Check whether an element
	 * matches a generic selector.
	 *
	 * @type function()
	 * @param {string} selector A CSS selector
	 */
	var matches = (function(el) {
	  if (!el) return;
	  var p = el.prototype;
	  return (p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector);
	}(Element));
	
	/**
	 * Check whether an element
	 * matches a tag selector.
	 *
	 * Tags are NOT case-sensitive,
	 * except in XML (and XML-based
	 * languages such as XHTML).
	 *
	 * @param {string} tagName The tag name to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesTag(tagName, element) {
	  return tagName.toLowerCase() === element.tagName.toLowerCase();
	}
	
	/**
	 * Check whether an element
	 * matches the root.
	 *
	 * @param {?String} selector In this case this is always passed through as null and not used
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesRoot(selector, element) {
	  /*jshint validthis:true*/
	  if (this.rootElement === window) return element === document;
	  return this.rootElement === element;
	}
	
	/**
	 * Check whether the ID of
	 * the element in 'this'
	 * matches the given ID.
	 *
	 * IDs are case-sensitive.
	 *
	 * @param {string} id The ID to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesId(id, element) {
	  return id === element.id;
	}
	
	/**
	 * Short hand for off()
	 * and root(), ie both
	 * with no parameters
	 *
	 * @return void
	 */
	Delegate.prototype.destroy = function() {
	  this.off();
	  this.root();
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Emitter = __webpack_require__(13);
	var reduce = __webpack_require__(14);
	var requestBase = __webpack_require__(15);
	var isObject = __webpack_require__(16);
	
	/**
	 * Root reference for iframes.
	 */
	
	var root;
	if (typeof window !== 'undefined') { // Browser window
	  root = window;
	} else if (typeof self !== 'undefined') { // Web Worker
	  root = self;
	} else { // Other environments
	  root = this;
	}
	
	/**
	 * Noop.
	 */
	
	function noop(){};
	
	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isHost(obj) {
	  var str = {}.toString.call(obj);
	
	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}
	
	/**
	 * Expose `request`.
	 */
	
	var request = module.exports = __webpack_require__(17).bind(null, Request);
	
	/**
	 * Determine XHR.
	 */
	
	request.getXHR = function () {
	  if (root.XMLHttpRequest
	      && (!root.location || 'file:' != root.location.protocol
	          || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  return false;
	};
	
	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */
	
	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };
	
	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */
	
	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    if (null != obj[key]) {
	      pushEncodedKeyValuePair(pairs, key, obj[key]);
	        }
	      }
	  return pairs.join('&');
	}
	
	/**
	 * Helps 'serialize' with serializing arrays.
	 * Mutates the pairs array.
	 *
	 * @param {Array} pairs
	 * @param {String} key
	 * @param {Mixed} val
	 */
	
	function pushEncodedKeyValuePair(pairs, key, val) {
	  if (Array.isArray(val)) {
	    return val.forEach(function(v) {
	      pushEncodedKeyValuePair(pairs, key, v);
	    });
	  }
	  pairs.push(encodeURIComponent(key)
	    + '=' + encodeURIComponent(val));
	}
	
	/**
	 * Expose serialization method.
	 */
	
	 request.serializeObject = serialize;
	
	 /**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */
	
	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var parts;
	  var pair;
	
	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    parts = pair.split('=');
	    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	  }
	
	  return obj;
	}
	
	/**
	 * Expose parser.
	 */
	
	request.parseString = parseString;
	
	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */
	
	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};
	
	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */
	
	 request.serialize = {
	   'application/x-www-form-urlencoded': serialize,
	   'application/json': JSON.stringify
	 };
	
	 /**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */
	
	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};
	
	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;
	
	  lines.pop(); // trailing CRLF
	
	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }
	
	  return fields;
	}
	
	/**
	 * Check if `mime` is json or has +json structured syntax suffix.
	 *
	 * @param {String} mime
	 * @return {Boolean}
	 * @api private
	 */
	
	function isJSON(mime) {
	  return /[\/+]json\b/.test(mime);
	}
	
	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */
	
	function type(str){
	  return str.split(/ *; */).shift();
	};
	
	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function params(str){
	  return reduce(str.split(/ *; */), function(obj, str){
	    var parts = str.split(/ *= */)
	      , key = parts.shift()
	      , val = parts.shift();
	
	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};
	
	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */
	
	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
	     ? this.xhr.responseText
	     : null;
	  this.statusText = this.req.xhr.statusText;
	  this.setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this.setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD'
	    ? this.parseBody(this.text ? this.text : this.xhr.response)
	    : null;
	}
	
	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */
	
	Response.prototype.get = function(field){
	  return this.header[field.toLowerCase()];
	};
	
	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */
	
	Response.prototype.setHeaderProperties = function(header){
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);
	
	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};
	
	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */
	
	Response.prototype.parseBody = function(str){
	  var parse = request.parse[this.type];
	  if (!parse && isJSON(this.type)) {
	    parse = request.parse['application/json'];
	  }
	  return parse && str && (str.length || str instanceof Object)
	    ? parse(str)
	    : null;
	};
	
	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */
	
	Response.prototype.setStatusProperties = function(status){
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }
	
	  var type = status / 100 | 0;
	
	  // status / class
	  this.status = this.statusCode = status;
	  this.statusType = type;
	
	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = (4 == type || 5 == type)
	    ? this.toError()
	    : false;
	
	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};
	
	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */
	
	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;
	
	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;
	
	  return err;
	};
	
	/**
	 * Expose `Response`.
	 */
	
	request.Response = Response;
	
	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */
	
	function Request(method, url) {
	  var self = this;
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {}; // preserves header name case
	  this._header = {}; // coerces header names to lowercase
	  this.on('end', function(){
	    var err = null;
	    var res = null;
	
	    try {
	      res = new Response(self);
	    } catch(e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      // issue #675: return the raw response if the response parsing fails
	      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
	      // issue #876: return the http status code if the response parsing fails
	      err.statusCode = self.xhr && self.xhr.status ? self.xhr.status : null;
	      return self.callback(err);
	    }
	
	    self.emit('response', res);
	
	    if (err) {
	      return self.callback(err, res);
	    }
	
	    if (res.status >= 200 && res.status < 300) {
	      return self.callback(err, res);
	    }
	
	    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	    new_err.original = err;
	    new_err.response = res;
	    new_err.status = res.status;
	
	    self.callback(new_err, res);
	  });
	}
	
	/**
	 * Mixin `Emitter` and `requestBase`.
	 */
	
	Emitter(Request.prototype);
	for (var key in requestBase) {
	  Request.prototype[key] = requestBase[key];
	}
	
	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */
	
	Request.prototype.abort = function(){
	  if (this.aborted) return;
	  this.aborted = true;
	  this.xhr && this.xhr.abort();
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};
	
	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set responseType to `val`. Presently valid responseTypes are 'blob' and 
	 * 'arraybuffer'.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .responseType('blob')
	 *        .end(callback);
	 *
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.responseType = function(val){
	  this._responseType = val;
	  return this;
	};
	
	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @param {Object} options with 'type' property 'auto' or 'basic' (default 'basic')
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.auth = function(user, pass, options){
	  if (!options) {
	    options = {
	      type: 'basic'
	    }
	  }
	
	  switch (options.type) {
	    case 'basic':
	      var str = btoa(user + ':' + pass);
	      this.set('Authorization', 'Basic ' + str);
	    break;
	
	    case 'auto':
	      this.username = user;
	      this.password = pass;
	    break;
	  }
	  return this;
	};
	
	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/
	
	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};
	
	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.attach = function(field, file, filename){
	  this._getFormData().append(field, file, filename || file.name);
	  return this;
	};
	
	Request.prototype._getFormData = function(){
	  if (!this._formData) {
	    this._formData = new root.FormData();
	  }
	  return this._formData;
	};
	
	/**
	 * Send `data` as the request body, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"}')
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	  *      request.post('/user')
	  *        .send('name=tobi')
	  *        .send('species=ferret')
	  *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.send = function(data){
	  var obj = isObject(data);
	  var type = this._header['content-type'];
	
	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    if (!type) this.type('form');
	    type = this._header['content-type'];
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }
	
	  if (!obj || isHost(data)) return this;
	  if (!type) this.type('json');
	  return this;
	};
	
	/**
	 * @deprecated
	 */
	Response.prototype.parse = function serialize(fn){
	  if (root.console) {
	    console.warn("Client-side parse() method has been renamed to serialize(). This method is not compatible with superagent v2.0");
	  }
	  this.serialize(fn);
	  return this;
	};
	
	Response.prototype.serialize = function serialize(fn){
	  this._parser = fn;
	  return this;
	};
	
	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */
	
	Request.prototype.callback = function(err, res){
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};
	
	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */
	
	Request.prototype.crossDomainError = function(){
	  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
	  err.crossDomain = true;
	
	  err.status = this.status;
	  err.method = this.method;
	  err.url = this.url;
	
	  this.callback(err);
	};
	
	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */
	
	Request.prototype.timeoutError = function(){
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};
	
	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */
	
	Request.prototype.withCredentials = function(){
	  this._withCredentials = true;
	  return this;
	};
	
	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.end = function(fn){
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var query = this._query.join('&');
	  var timeout = this._timeout;
	  var data = this._formData || this._data;
	
	  // store callback
	  this._callback = fn || noop;
	
	  // state change
	  xhr.onreadystatechange = function(){
	    if (4 != xhr.readyState) return;
	
	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try { status = xhr.status } catch(e) { status = 0; }
	
	    if (0 == status) {
	      if (self.timedout) return self.timeoutError();
	      if (self.aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };
	
	  // progress
	  var handleProgress = function(e){
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    e.direction = 'download';
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    xhr.onprogress = handleProgress;
	  }
	  try {
	    if (xhr.upload && this.hasListeners('progress')) {
	      xhr.upload.onprogress = handleProgress;
	    }
	  } catch(e) {
	    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	    // Reported here:
	    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	  }
	
	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }
	
	  // querystring
	  if (query) {
	    query = request.serializeObject(query);
	    this.url += ~this.url.indexOf('?')
	      ? '&' + query
	      : '?' + query;
	  }
	
	  // initiate request
	  if (this.username && this.password) {
	    xhr.open(this.method, this.url, true, this.username, this.password);
	  } else {
	    xhr.open(this.method, this.url, true);
	  }
	
	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;
	
	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
	    // serialize stuff
	    var contentType = this._header['content-type'];
	    var serialize = this._parser || request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
	    if (serialize) data = serialize(data);
	  }
	
	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }
	
	  if (this._responseType) {
	    xhr.responseType = this._responseType;
	  }
	
	  // send stuff
	  this.emit('request', this);
	
	  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
	  // We need null here if data is undefined
	  xhr.send(typeof data !== 'undefined' ? data : null);
	  return this;
	};
	
	
	/**
	 * Expose `Request`.
	 */
	
	request.Request = Request;
	
	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.get = function(url, data, fn){
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.head = function(url, data, fn){
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	function del(url, fn){
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};
	
	request['del'] = del;
	request['delete'] = del;
	
	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.patch = function(url, data, fn){
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.post = function(url, data, fn){
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.put = function(url, data, fn){
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	if (true) {
	  module.exports = Emitter;
	}
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	
	/**
	 * Reduce `arr` with `fn`.
	 *
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Mixed} initial
	 *
	 * TODO: combatible error handling?
	 */
	
	module.exports = function(arr, fn, initial){  
	  var idx = 0;
	  var len = arr.length;
	  var curr = arguments.length == 3
	    ? initial
	    : arr[idx++];
	
	  while (idx < len) {
	    curr = fn.call(null, curr, arr[idx], ++idx, arr);
	  }
	  
	  return curr;
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module of mixed-in functions shared between node and client code
	 */
	var isObject = __webpack_require__(16);
	
	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */
	
	exports.clearTimeout = function _clearTimeout(){
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};
	
	/**
	 * Force given parser
	 *
	 * Sets the body parser no matter type.
	 *
	 * @param {Function}
	 * @api public
	 */
	
	exports.parse = function parse(fn){
	  this._parser = fn;
	  return this;
	};
	
	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */
	
	exports.timeout = function timeout(ms){
	  this._timeout = ms;
	  return this;
	};
	
	/**
	 * Faux promise support
	 *
	 * @param {Function} fulfill
	 * @param {Function} reject
	 * @return {Request}
	 */
	
	exports.then = function then(fulfill, reject) {
	  return this.end(function(err, res) {
	    err ? reject(err) : fulfill(res);
	  });
	}
	
	/**
	 * Allow for extension
	 */
	
	exports.use = function use(fn) {
	  fn(this);
	  return this;
	}
	
	
	/**
	 * Get request header `field`.
	 * Case-insensitive.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */
	
	exports.get = function(field){
	  return this._header[field.toLowerCase()];
	};
	
	/**
	 * Get case-insensitive header `field` value.
	 * This is a deprecated internal API. Use `.get(field)` instead.
	 *
	 * (getHeader is no longer used internally by the superagent code base)
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 * @deprecated
	 */
	
	exports.getHeader = exports.get;
	
	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 * Case-insensitive.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	exports.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};
	
	/**
	 * Remove header `field`.
	 * Case-insensitive.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 */
	exports.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};
	
	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File|Buffer|fs.ReadStream} val
	 * @return {Request} for chaining
	 * @api public
	 */
	exports.field = function(name, val) {
	  this._getFormData().append(name, val);
	  return this;
	};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject(obj) {
	  return null != obj && 'object' == typeof obj;
	}
	
	module.exports = isObject;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	// The node and browser modules expose versions of this with the
	// appropriate constructor function bound as first argument
	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */
	
	function request(RequestConstructor, method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new RequestConstructor('GET', method).end(url);
	  }
	
	  // url first
	  if (2 == arguments.length) {
	    return new RequestConstructor('GET', method);
	  }
	
	  return new RequestConstructor(method, url);
	}
	
	module.exports = request;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domOps = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var IS_LOADING = 'is-loading';
	var IS_COMPLETE = 'is-complete';
	
	var ProgressButton = function () {
	
	    /**
	     * Create a new progress button
	     *
	     * @param {element} button
	     */
	    function ProgressButton(button) {
	        _classCallCheck(this, ProgressButton);
	
	        this.button = button;
	    }
	
	    /**
	     * Handle the button in a loading state
	     */
	
	
	    _createClass(ProgressButton, [{
	        key: 'handleLoading',
	        value: function handleLoading() {
	            this.button.setAttribute('disabled', true);
	            (0, _domOps.addClass)(this.button, IS_LOADING);
	        }
	
	        /**
	         * Handle the button on success
	         *
	         * @param {boolean} success
	         */
	
	    }, {
	        key: 'handleComplete',
	        value: function handleComplete(success) {
	            (0, _domOps.removeClass)(this.button, IS_LOADING);
	
	            if (success) {
	                this.button.removeAttribute('disabled');
	                (0, _domOps.addClass)(this.button, IS_COMPLETE);
	            }
	        }
	    }]);
	
	    return ProgressButton;
	}();
	
	exports.default = {
	    create: function create(button) {
	        return new ProgressButton(button);
	    }
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(10);
	
	var _domOps = __webpack_require__(5);
	
	var _validationRules = __webpack_require__(20);
	
	var _utilities = __webpack_require__(8);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HAS_CONTENT = 'has-content';
	var HAS_ERROR = 'has-error';
	var HAS_FOCUS = 'has-focus';
	
	var errorMessages = {
	    required: 'This is a required field',
	    email: 'Please enter a valid email'
	};
	
	var FormFields = function () {
	    function FormFields() {
	        var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
	
	        _classCallCheck(this, FormFields);
	
	        FormFields.bindEvents(root);
	        FormFields.checkAllFieldsForContent();
	    }
	
	    _createClass(FormFields, null, [{
	        key: 'checkAllFieldsForContent',
	        value: function checkAllFieldsForContent() {
	            var wrapper = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
	
	            var fields = (0, _domOps.nodesToArray)(wrapper.querySelectorAll('input, select'));
	
	            if (fields.length) {
	                fields.forEach(function (field) {
	                    return FormFields.checkForContent(field);
	                });
	            }
	        }
	    }, {
	        key: 'checkForContent',
	        value: function checkForContent(element) {
	            var container = FormFields.getInputContainer(element);
	            var callback = element.value ? _domOps.addClass : _domOps.removeClass;
	
	            callback(container, HAS_CONTENT);
	        }
	    }, {
	        key: 'checkIfRequired',
	        value: function checkIfRequired(element) {
	            return element.getAttribute('required') !== null && (0, _utilities.isVisible)(element);
	        }
	    }, {
	        key: 'errorPlacement',
	        value: function errorPlacement(element, errorElWithMessage) {
	            if (element.tagName === 'SELECT') {
	                (0, _domOps.insertAfter)(element.parentNode, errorElWithMessage);
	            } else {
	                (0, _domOps.insertAfter)(element, errorElWithMessage);
	            }
	        }
	    }, {
	        key: 'addErrorMessage',
	        value: function addErrorMessage(element, errorMessage) {
	            var formFieldContainer = FormFields.getFieldContainer(element);
	            var errorEl = formFieldContainer.querySelector('.form__error');
	
	            if (errorEl === null) {
	                var errorElWithMessage = '<span class="form__error">' + errorMessage + '</span>';
	                FormFields.errorPlacement(element, errorElWithMessage);
	            } else {
	                errorEl.innerHTML = errorMessage;
	            }
	        }
	    }, {
	        key: 'checkFieldForError',
	        value: function checkFieldForError(element) {
	            if (FormFields.checkIfRequired(element)) {
	                var passedValidation = (0, _validationRules.required)(element);
	
	                if (passedValidation) {
	                    FormFields.checkSpecificValidation(element);
	                } else {
	                    FormFields.addError(element, errorMessages.required);
	                }
	            }
	        }
	    }, {
	        key: 'addError',
	        value: function addError(element, errorMessage) {
	            var formFieldContainer = FormFields.getFieldContainer(element);
	            (0, _domOps.addClass)(FormFields.getFieldContainer(element), HAS_ERROR);
	            FormFields.addErrorMessage(element, errorMessage);
	            (0, _utilities.show)(formFieldContainer.querySelector('.form__error'));
	        }
	    }, {
	        key: 'removeError',
	        value: function removeError(element) {
	            var formFieldContainer = FormFields.getFieldContainer(element);
	            (0, _domOps.removeClass)(FormFields.getFieldContainer(element), HAS_ERROR);
	            var errorEl = formFieldContainer.querySelector('.form__error');
	            if (errorEl) {
	                (0, _utilities.hide)(errorEl);
	            }
	        }
	    }, {
	        key: 'checkSpecificValidation',
	        value: function checkSpecificValidation(element) {
	            if (element.type === 'email') {
	                var passedValidation = (0, _validationRules.email)(element);
	                if (!passedValidation) {
	                    FormFields.addError(element, errorMessages.email);
	                } else {
	                    FormFields.removeError(element);
	                }
	            } else {
	                FormFields.removeError(element);
	            }
	        }
	    }, {
	        key: 'submitIfNoErrors',
	        value: function submitIfNoErrors(form) {
	            var fields = (0, _domOps.nodesToArray)(form.querySelectorAll('input, select'));
	
	            if (fields.length) {
	                fields.forEach(function (field) {
	                    return FormFields.checkFieldForError(field);
	                });
	            }
	
	            var errors = (0, _domOps.nodesToArray)(form.querySelectorAll('.has-error').length);
	            if (errors < 1) {
	                form.submit();
	            }
	        }
	    }, {
	        key: 'bindEvents',
	        value: function bindEvents(root) {
	            var _this = this;
	
	            var listener = new _domDelegate.Delegate(root);
	
	            // Listen to change because of password managers etc
	            listener.on('change', 'input, textarea, select', function (event, element) {
	                FormFields.checkForContent(element);
	                FormFields.checkFieldForError(element);
	                FormFields.giveFocus(element);
	            });
	
	            // Text input focus handler
	            listener.on('focus', 'input, textarea', function (event, element) {
	                return FormFields.giveFocus(element);
	            });
	
	            // Text input focusout handler
	            listener.on('focusout', 'input, textarea, select', function (event, element) {
	                FormFields.checkForContent(element);
	                FormFields.checkFieldForError(element);
	                FormFields.removeFocus(element);
	            });
	
	            listener.on('input', 'textarea', function (event, element) {
	                var scrollHeight = element.scrollHeight;
	                var formEl = element;
	
	                if (scrollHeight > parseInt(window.getComputedStyle(formEl, null).height, 0)) {
	                    formEl.style.height = scrollHeight + 'px';
	                }
	            });
	
	            // On form submit
	            listener.on('submit', 'form', function (event, element) {
	                event.preventDefault();
	                _this.submitIfNoErrors(element);
	            });
	        }
	    }, {
	        key: 'getFieldContainer',
	        value: function getFieldContainer(element) {
	            return (0, _domOps.closest)(element, '.form__group');
	        }
	    }, {
	        key: 'getInputContainer',
	        value: function getInputContainer(element) {
	            return element.parentNode;
	        }
	    }, {
	        key: 'removeFocus',
	        value: function removeFocus(element) {
	            (0, _domOps.removeClass)(FormFields.getInputContainer(element), HAS_FOCUS);
	        }
	    }, {
	        key: 'giveFocus',
	        value: function giveFocus(element) {
	            (0, _domOps.addClass)(FormFields.getInputContainer(element), HAS_FOCUS);
	        }
	    }]);
	
	    return FormFields;
	}();
	
	exports.default = {
	    init: function init() {
	        new FormFields(); // eslint-disable-line no-new
	    }
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.required = required;
	exports.email = email;
	/**
	 * Rule for required fields
	 *
	 * @param {element}
	 * @return {boolean} passed validation
	 */
	function required(element) {
	  return element.value === '';
	}
	
	/**
	 * Rule for email fields
	 *
	 * @param {element}
	 * @return {boolean} passed validation
	 */
	function email(element) {
	  var re = /(\w+)@(\w+)\.[a-zA-Z]/g;
	  var emailValue = element.value;
	  return re.test(emailValue);
	}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(10);
	
	var _domOps = __webpack_require__(5);
	
	var _utilities = __webpack_require__(8);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instances = [];
	var IS_OPEN = 'is-open';
	
	var ToggleAccordionPanel = function () {
	
	    /**
	     * Creates a new toggle panel
	     *
	     * @param {element}
	     */
	    function ToggleAccordionPanel(element) {
	        _classCallCheck(this, ToggleAccordionPanel);
	
	        this.panel = element;
	        this.panelId = element.getAttribute('id');
	
	        var toggleIconSelector = '[data-toggle-icon="' + this.panelId + '"]';
	        var toggleButtonsSelector = '[data-toggle-panel="' + this.panelId + '"]';
	        var openButtonsSelector = '[data-open-panel="' + this.panelId + '"]';
	        var closeButtonsSelector = '[data-close-panel="' + this.panelId + '"]';
	        var radioOpenButtonsSelector = '[data-radio-open-panel="' + this.panelId + '"]';
	        var radioCloseButtonsSelector = '[data-radio-close-panel="' + this.panelId + '"]';
	        var inputOpenButtonsSelector = '[data-input-open-panel="' + this.panelId + '"]';
	        var selectToggleButtonsSelector = '[data-select-toggle-panel="' + this.panelId + '"]';
	
	        this.toggleIcon = document.querySelector(toggleIconSelector);
	        this.toggleButtons = (0, _domOps.nodesToArray)(document.querySelectorAll(toggleButtonsSelector)) || [];
	        this.openButtons = (0, _domOps.nodesToArray)(document.querySelectorAll(openButtonsSelector)) || [];
	        this.closeButtons = (0, _domOps.nodesToArray)(document.querySelectorAll(closeButtonsSelector)) || [];
	        this.radioOpenButtons = (0, _domOps.nodesToArray)(document.querySelectorAll(radioOpenButtonsSelector)) || [];
	        this.radioCloseButtons = (0, _domOps.nodesToArray)(document.querySelectorAll(radioCloseButtonsSelector)) || [];
	        this.inputOpenButtons = (0, _domOps.nodesToArray)(document.querySelectorAll(inputOpenButtonsSelector)) || [];
	
	        this.selectToggleButtons = (0, _domOps.nodesToArray)(document.querySelectorAll(selectToggleButtonsSelector)) || [];
	
	        this.bindEvents();
	    }
	
	    /**
	     * Binds the event listeners from the elements
	     */
	
	
	    _createClass(ToggleAccordionPanel, [{
	        key: 'bindEvents',
	        value: function bindEvents() {
	            var _this = this;
	
	            this.toggleListeners = [];
	            this.toggleButtons.forEach(function (toggleButton) {
	                var toggleListener = new _domDelegate.Delegate(toggleButton);
	                _this.toggleListeners.push(toggleListener);
	                toggleListener.on('click', function (event) {
	                    event.preventDefault();
	                    _this.togglePanel();
	                });
	            });
	
	            this.openListeners = [];
	            this.openButtons.forEach(function (openButton) {
	                var openListener = new _domDelegate.Delegate(openButton);
	                _this.openListeners.push(openListener);
	                openListener.on('click', function (event) {
	                    event.preventDefault();
	                    (0, _utilities.openPanel)(_this.panel);
	                });
	            });
	
	            this.closeListeners = [];
	            this.closeButtons.forEach(function (closeButton) {
	                var closeListener = new _domDelegate.Delegate(closeButton);
	                _this.closeListeners.push(closeListener);
	                closeListener.on('click', function (event) {
	                    event.preventDefault();
	                    (0, _utilities.closePanel)(_this.panel);
	                });
	            });
	
	            this.radioOpenListeners = [];
	            this.radioOpenButtons.forEach(function (radioOpenButton) {
	                var radioOpenListener = new _domDelegate.Delegate(radioOpenButton);
	                _this.radioOpenListeners.push(radioOpenListener);
	                radioOpenListener.on('change', function (event) {
	                    event.preventDefault();
	                    (0, _utilities.openPanel)(_this.panel);
	                });
	            });
	
	            this.radioCloseListeners = [];
	            this.radioCloseButtons.forEach(function (radioCloseButton) {
	                var radioCloseListener = new _domDelegate.Delegate(radioCloseButton);
	                _this.radioCloseListeners.push(radioCloseListener);
	                radioCloseListener.on('change', function (event) {
	                    event.preventDefault();
	                    (0, _utilities.closePanel)(_this.panel);
	                });
	            });
	
	            this.inputOpenListeners = [];
	            this.inputOpenButtons.forEach(function (inputOpenButton) {
	                var inputOpenListener = new _domDelegate.Delegate(inputOpenButton);
	                _this.inputOpenListeners.push(inputOpenListener);
	                inputOpenListener.on('focus', function () {
	                    return (0, _utilities.openPanel)(_this.panel);
	                });
	            });
	
	            this.selectToggleListeners = [];
	            this.selectToggleButtons.forEach(function (selectToggleButton) {
	                var selectToggleListener = new _domDelegate.Delegate(selectToggleButton);
	                _this.selectToggleListeners.push(selectToggleListener);
	                selectToggleListener.on('change', function (event, element) {
	                    var selectedVal = element.options[element.selectedIndex].value;
	
	                    if (selectedVal === 'other') {
	                        (0, _utilities.openPanel)(_this.panel);
	                    } else {
	                        (0, _utilities.closePanel)(_this.panel);
	                    }
	                });
	            });
	        }
	
	        /**
	         * Toggle panel depending if already open or not
	         */
	
	    }, {
	        key: 'togglePanel',
	        value: function togglePanel() {
	            var panelIsVisible = (0, _domOps.hasClass)(this.panel, IS_OPEN);
	
	            if (panelIsVisible) {
	                (0, _utilities.closePanel)(this.panel);
	            } else {
	                (0, _utilities.openPanel)(this.panel);
	            }
	        }
	
	        /**
	         * Unbinds the event listeners from the elements
	         */
	
	    }, {
	        key: 'unbindEvents',
	        value: function unbindEvents() {
	            this.toggleListeners.forEach(function (toggleListener) {
	                return toggleListener.destroy();
	            });
	            this.openListeners.forEach(function (openListener) {
	                return openListener.destroy();
	            });
	            this.closeListeners.forEach(function (closeListener) {
	                return closeListener.destroy();
	            });
	            this.radioOpenListeners.forEach(function (radioOpenListener) {
	                return radioOpenListener.destroy();
	            });
	            this.radioCloseListeners.forEach(function (radioCloseListener) {
	                return radioCloseListener.destroy();
	            });
	            this.inputOpenListeners.forEach(function (inputOpenListener) {
	                return inputOpenListener.destroy();
	            });
	        }
	    }]);
	
	    return ToggleAccordionPanel;
	}();
	
	exports.default = {
	    init: function init(element) {
	        instances.push(new ToggleAccordionPanel(element));
	    },
	
	    destroy: function destroy() {
	        instances.forEach(function (instance) {
	            return instance.unbindEvents();
	        });
	        instances = [];
	    }
	};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domOps = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instances = [];
	var IS_OPEN = 'fade-in';
	
	var ToggleElement = function () {
	
	    /**
	     * Creates a new toggle element
	     *
	     * @param {element}
	     */
	    function ToggleElement(element) {
	        _classCallCheck(this, ToggleElement);
	
	        this.element = element;
	        this.elementId = element.getAttribute('id');
	
	        var toggleButtonsSelector = '[data-toggle-el="' + this.elementId + '"]';
	        var openButtonsSelector = '[data-open-el="' + this.elementId + '"]';
	        var closeButtonsSelector = '[data-close-el="' + this.elementId + '"]';
	        var allElementsSelector = '[data-js-module="toggleElement"]';
	
	        this.toggleButtons = (0, _domOps.nodesToArray)(document.querySelectorAll(toggleButtonsSelector)) || [];
	        this.openButtons = (0, _domOps.nodesToArray)(document.querySelectorAll(openButtonsSelector)) || [];
	        this.closeButtons = (0, _domOps.nodesToArray)(document.querySelectorAll(closeButtonsSelector)) || [];
	
	        this.allElements = (0, _domOps.nodesToArray)(document.querySelectorAll(allElementsSelector));
	
	        this.elementIsVisible = false;
	
	        this.bindEvents();
	    }
	
	    /**
	     * Binds the event listeners from the elements
	     */
	
	
	    _createClass(ToggleElement, [{
	        key: 'bindEvents',
	        value: function bindEvents() {
	            var _this = this;
	
	            this.toggleButtons.forEach(function (toggleButton) {
	                toggleButton.addEventListener('click', function (event) {
	                    event.preventDefault();
	                    _this.toggleElement();
	                });
	            });
	
	            this.openButtons.forEach(function (openButton) {
	                openButton.addEventListener('click', function (event) {
	                    event.preventDefault();
	                    _this.openElement();
	                });
	            });
	
	            this.closeButtons.forEach(function (closeButton) {
	                closeButton.addEventListener('click', function (event) {
	                    event.preventDefault();
	                    _this.closeElement();
	                });
	            });
	        }
	
	        /**
	         * Unbinds the event listeners from the elements
	         */
	
	    }, {
	        key: 'unbindEvents',
	        value: function unbindEvents() {
	            this.toggleListeners.forEach(function (toggleListener) {
	                return toggleListener.destroy();
	            });
	            this.openListeners.forEach(function (openListener) {
	                return openListener.destroy();
	            });
	            this.closeListeners.forEach(function (closeListener) {
	                return closeListener.destroy();
	            });
	        }
	
	        /**
	         * Toggle element depending if already open or not
	         */
	
	    }, {
	        key: 'toggleElement',
	        value: function toggleElement() {
	            if (this.elementIsVisible) {
	                this.closeElement();
	            } else {
	                this.openElement();
	            }
	        }
	
	        /**
	         * Handle the element opening
	         */
	
	    }, {
	        key: 'openElement',
	        value: function openElement() {
	            this.closeAllElements();
	            this.elementIsVisible = true;
	            this.element.classList.remove('hidden');
	            this.element.classList.add(IS_OPEN);
	        }
	
	        /**
	         * Handle the element closing
	         */
	
	    }, {
	        key: 'closeElement',
	        value: function closeElement() {
	            this.element.classList.add('hidden');
	            this.element.classList.remove(IS_OPEN);
	            this.elementIsVisible = false;
	        }
	
	        /**
	         * Handle the closing of all other elements
	         */
	
	    }, {
	        key: 'closeAllElements',
	        value: function closeAllElements() {
	            this.allElements.forEach(function (el) {
	                el.classList.add('hidden');
	                el.classList.remove(IS_OPEN);
	            });
	            this.elementIsVisible = false;
	        }
	    }]);
	
	    return ToggleElement;
	}();
	
	exports.default = {
	    init: function init(element) {
	        instances.push(new ToggleElement(element));
	    },
	
	    destroy: function destroy() {
	        instances.forEach(function (instance) {
	            return instance.unbindEvents();
	        });
	        instances = [];
	    }
	};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(10);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instances = [];
	
	var GallerySimple = function () {
	
	    /**
	     * Creates a gallery element
	     *
	     * @param {element}
	     */
	    function GallerySimple(element) {
	        _classCallCheck(this, GallerySimple);
	
	        this.element = element;
	        this.getFirstThumbnail();
	        this.bindEvents();
	    }
	
	    /**
	     * Get first thumbnail and pass to function to display as the main image
	     */
	
	
	    _createClass(GallerySimple, [{
	        key: 'getFirstThumbnail',
	        value: function getFirstThumbnail() {
	            var firstThumbnail = this.element.querySelector('.gallery-simple__thumbnails li .thumbnail');
	            this.displayThumbnailAsImage(firstThumbnail);
	        }
	
	        /**
	         * Bind any event listeners to the elements.
	         */
	
	    }, {
	        key: 'bindEvents',
	        value: function bindEvents() {
	            var _this = this;
	
	            this.listener = new _domDelegate.Delegate(this.element);
	
	            this.listener.on('click', 'li .thumbnail', function (event, thumbnail) {
	                event.preventDefault();
	                _this.displayThumbnailAsImage(thumbnail);
	            });
	        }
	
	        /**
	         * Unbinds the event listeners from the elements
	         */
	
	    }, {
	        key: 'unbindEvents',
	        value: function unbindEvents() {
	            this.listener.destroy();
	        }
	
	        /**
	         * Display thumbnail as main image
	         * @param {element} thumbnail
	         */
	
	    }, {
	        key: 'displayThumbnailAsImage',
	        value: function displayThumbnailAsImage(thumbnail) {
	            var thumbnailSrc = thumbnail.querySelector('img').src;
	            var mainImage = this.element.querySelector('.gallery-simple__image');
	
	            mainImage.src = thumbnailSrc;
	        }
	    }]);
	
	    return GallerySimple;
	}();
	
	exports.default = {
	    init: function init(element) {
	        instances.push(new GallerySimple(element));
	    },
	
	    destroy: function destroy() {
	        instances.forEach(function (instance) {
	            return instance.unbindEvents();
	        });
	        instances = [];
	    }
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(10);
	
	var _domOps = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instances = [];
	
	var IS_OPEN = 'is-open';
	var MOBILE_ONLY = 'accordion--only-mobile';
	
	var Accordion = function () {
	
	    /**
	     * Creates a new accordion element
	     *
	     * @param {element}
	     */
	    function Accordion(element) {
	        _classCallCheck(this, Accordion);
	
	        this.element = element;
	        this.accordionIsMobileOnly = (0, _domOps.hasClass)(this.element, MOBILE_ONLY);
	        this.bindEvents();
	    }
	
	    /**
	     * Binds the event listeners from the elements
	     */
	
	
	    _createClass(Accordion, [{
	        key: 'bindEvents',
	        value: function bindEvents() {
	            var _this = this;
	
	            this.listener = new _domDelegate.Delegate(this.element);
	
	            this.listener.on('click', 'dt', function (event, element) {
	                if (_this.accordionIsMobileOnly && window.isMobileSize || _this.accordionIsMobileOnly !== true) {
	                    _this.toggleAccordion(element);
	                }
	            });
	        }
	
	        /**
	         * Unbinds the event listeners from the elements
	         */
	
	    }, {
	        key: 'unbindEvents',
	        value: function unbindEvents() {
	            this.listener.destroy();
	        }
	
	        /**
	         * Toggles the accordion.
	         *
	         * @param {element} element to toggle
	         */
	
	    }, {
	        key: 'toggleAccordion',
	        value: function toggleAccordion(element) {
	            if ((0, _domOps.hasClass)(element, IS_OPEN)) {
	                (0, _domOps.removeClass)(element, IS_OPEN);
	            } else {
	                var allDtEls = (0, _domOps.nodesToArray)(this.element.querySelectorAll('dt'));
	                allDtEls.forEach(function (dt) {
	                    return (0, _domOps.removeClass)(dt, IS_OPEN);
	                });
	                var closestDt = (0, _domOps.closest)(element, 'dt');
	                (0, _domOps.addClass)(closestDt, IS_OPEN);
	            }
	        }
	    }]);
	
	    return Accordion;
	}();
	
	exports.default = {
	    init: function init(element) {
	        instances.push(new Accordion(element));
	    },
	
	    destroy: function destroy() {
	        instances.forEach(function (instance) {
	            return instance.unbindEvents();
	        });
	        instances = [];
	    }
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domOps = __webpack_require__(5);
	
	var _domDelegate = __webpack_require__(10);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instances = [];
	
	var NAV_OPEN = 'nav-open';
	var SUBNAV_OPEN = 'sub-nav-open';
	
	var navIsOpen = false;
	
	var HeaderNav = function () {
	
	    /**
	     * Creates a new header nav element
	     *
	     * @param element
	     */
	    function HeaderNav(element) {
	        _classCallCheck(this, HeaderNav);
	
	        this.element = element;
	        this.navicon = this.element.querySelector('.navicon');
	        this.nav = this.element.querySelector('.global-nav');
	        this.navOverlay = document.querySelector('.global-nav-overlay');
	
	        this.bindEvents();
	    }
	
	    /**
	     * Binds the event listeners from the elements
	     */
	
	
	    _createClass(HeaderNav, [{
	        key: 'bindEvents',
	        value: function bindEvents() {
	            var _this = this;
	
	            this.naviconListener = new _domDelegate.Delegate(this.navicon);
	
	            this.naviconListener.on('click', function (event) {
	                _this.toggleNav(event);
	            });
	
	            this.navListener = new _domDelegate.Delegate(this.nav);
	
	            this.navListener.on('click', '.has-sub-nav > .nav-link', function (event, clickedElement) {
	                _this.toggleSubNav(event, clickedElement);
	            });
	
	            this.navOverlayListener = new _domDelegate.Delegate(this.navOverlay);
	
	            this.navOverlayListener.on('click', function () {
	                _this.closeSubNavs();
	            });
	        }
	
	        /**
	         * Toggles the nav
	         *
	         * @param {event}
	         */
	
	    }, {
	        key: 'toggleNav',
	        value: function toggleNav(event) {
	            event.preventDefault();
	
	            if (navIsOpen) {
	                navIsOpen = false;
	                (0, _domOps.removeClass)(this.element, NAV_OPEN);
	            } else {
	                navIsOpen = true;
	                (0, _domOps.addClass)(this.element, NAV_OPEN);
	            }
	        }
	
	        /**
	         * Closes all sub navs
	         */
	
	    }, {
	        key: 'closeSubNavs',
	        value: function closeSubNavs() {
	            var openSubNavs = (0, _domOps.nodesToArray)((0, _domOps.select)('.has-sub-nav.sub-nav-open'));
	            if (openSubNavs.length) {
	                openSubNavs.forEach(function (openSubNav) {
	                    (0, _domOps.removeClass)(openSubNav, SUBNAV_OPEN);
	                });
	                this.showOverlay(false);
	            }
	        }
	
	        /**
	         * Toggles the sub nav
	         *
	         * @param {event} the click
	         * @param {element} the clicked element
	         */
	
	    }, {
	        key: 'toggleSubNav',
	        value: function toggleSubNav(event, clickedElement) {
	            event.preventDefault();
	            var subNavLi = (0, _domOps.closest)(clickedElement, 'li');
	            var subNavIsOpen = (0, _domOps.closest)(clickedElement, '.has-sub-nav.sub-nav-open');
	            if (subNavIsOpen == null) {
	                this.closeSubNavs();
	                (0, _domOps.addClass)(subNavLi, SUBNAV_OPEN);
	                this.showOverlay(true);
	            } else {
	                (0, _domOps.removeClass)(subNavLi, SUBNAV_OPEN);
	                this.showOverlay(false);
	            }
	        }
	
	        /**
	         * Shows the overlay if it's desktop size
	         *
	         * @param {boolean} show overlay
	         */
	
	    }, {
	        key: 'showOverlay',
	        value: function showOverlay(_showOverlay) {
	            if (window.isMobileSize) return;
	
	            if (_showOverlay) {
	                (0, _domOps.addClass)(this.navOverlay, NAV_OPEN);
	                (0, _domOps.addClass)(document.documentElement, 'is-nav-open');
	            } else {
	                (0, _domOps.removeClass)(this.navOverlay, NAV_OPEN);
	                (0, _domOps.removeClass)(document.documentElement, 'is-nav-open');
	            }
	        }
	
	        /**
	         * Unbinds the event listeners from the elements
	         */
	
	    }, {
	        key: 'unbindEvents',
	        value: function unbindEvents() {
	            this.naviconListener.destroy();
	            this.navListener.destroy();
	        }
	    }]);
	
	    return HeaderNav;
	}();
	
	exports.default = {
	    init: function init(element) {
	        instances.push(new HeaderNav(element));
	    },
	
	    destroy: function destroy() {
	        instances.forEach(function (instance) {
	            return instance.unbindEvents();
	        });
	        instances = [];
	    }
	};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _flickity = __webpack_require__(27);
	
	var _flickity2 = _interopRequireDefault(_flickity);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instances = [];
	
	var Carousel = function () {
	
	    /**
	     * Create a new carousel element
	     *
	     * @param {element} select wrapper
	     */
	    function Carousel(element) {
	        _classCallCheck(this, Carousel);
	
	        this.element = element;
	        this.initFlickity();
	    }
	
	    /**
	     * Initialise a Flickity carousel
	     */
	
	
	    _createClass(Carousel, [{
	        key: 'initFlickity',
	        value: function initFlickity() {
	            this.carousel = new _flickity2.default(this.element, {
	                contain: true
	            });
	        }
	
	        /**
	         * Destroy Flickity carousel
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            this.carousel.destroy();
	        }
	    }]);
	
	    return Carousel;
	}();
	
	exports.default = {
	    init: function init(element) {
	        instances.push(new Carousel(element));
	    },
	
	    destroy: function destroy() {
	        instances.forEach(function (instance) {
	            return instance.destroy();
	        });
	        instances = [];
	    }
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Flickity v2.0.9
	 * Touch, responsive, flickable carousels
	 *
	 * Licensed GPLv3 for open source use
	 * or Flickity Commercial License for commercial use
	 *
	 * http://flickity.metafizzy.co
	 * Copyright 2017 Metafizzy
	 */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(28),
	      __webpack_require__(36),
	      __webpack_require__(39),
	      __webpack_require__(41),
	      __webpack_require__(42),
	      __webpack_require__(43),
	      __webpack_require__(44)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      require('./flickity'),
	      require('./drag'),
	      require('./prev-next-button'),
	      require('./page-dots'),
	      require('./player'),
	      require('./add-remove-cell'),
	      require('./lazyload')
	    );
	  }
	
	})( window, function factory( Flickity ) {
	  /*jshint strict: false*/
	  return Flickity;
	});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity main
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(29),
	      __webpack_require__(30),
	      __webpack_require__(31),
	      __webpack_require__(33),
	      __webpack_require__(34),
	      __webpack_require__(35)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter, getSize, utils, Cell, Slide, animatePrototype ) {
	      return factory( window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('ev-emitter'),
	      require('get-size'),
	      require('fizzy-ui-utils'),
	      require('./cell'),
	      require('./slide'),
	      require('./animate')
	    );
	  } else {
	    // browser global
	    var _Flickity = window.Flickity;
	
	    window.Flickity = factory(
	      window,
	      window.EvEmitter,
	      window.getSize,
	      window.fizzyUIUtils,
	      _Flickity.Cell,
	      _Flickity.Slide,
	      _Flickity.animatePrototype
	    );
	  }
	
	}( window, function factory( window, EvEmitter, getSize,
	  utils, Cell, Slide, animatePrototype ) {
	
	'use strict';
	
	// vars
	var jQuery = window.jQuery;
	var getComputedStyle = window.getComputedStyle;
	var console = window.console;
	
	function moveElements( elems, toElem ) {
	  elems = utils.makeArray( elems );
	  while ( elems.length ) {
	    toElem.appendChild( elems.shift() );
	  }
	}
	
	// -------------------------- Flickity -------------------------- //
	
	// globally unique identifiers
	var GUID = 0;
	// internal store of all Flickity intances
	var instances = {};
	
	function Flickity( element, options ) {
	  var queryElement = utils.getQueryElement( element );
	  if ( !queryElement ) {
	    if ( console ) {
	      console.error( 'Bad element for Flickity: ' + ( queryElement || element ) );
	    }
	    return;
	  }
	  this.element = queryElement;
	  // do not initialize twice on same element
	  if ( this.element.flickityGUID ) {
	    var instance = instances[ this.element.flickityGUID ];
	    instance.option( options );
	    return instance;
	  }
	
	  // add jQuery
	  if ( jQuery ) {
	    this.$element = jQuery( this.element );
	  }
	  // options
	  this.options = utils.extend( {}, this.constructor.defaults );
	  this.option( options );
	
	  // kick things off
	  this._create();
	}
	
	Flickity.defaults = {
	  accessibility: true,
	  // adaptiveHeight: false,
	  cellAlign: 'center',
	  // cellSelector: undefined,
	  // contain: false,
	  freeScrollFriction: 0.075, // friction when free-scrolling
	  friction: 0.28, // friction when selecting
	  namespaceJQueryEvents: true,
	  // initialIndex: 0,
	  percentPosition: true,
	  resize: true,
	  selectedAttraction: 0.025,
	  setGallerySize: true
	  // watchCSS: false,
	  // wrapAround: false
	};
	
	// hash of methods triggered on _create()
	Flickity.createMethods = [];
	
	var proto = Flickity.prototype;
	// inherit EventEmitter
	utils.extend( proto, EvEmitter.prototype );
	
	proto._create = function() {
	  // add id for Flickity.data
	  var id = this.guid = ++GUID;
	  this.element.flickityGUID = id; // expando
	  instances[ id ] = this; // associate via id
	  // initial properties
	  this.selectedIndex = 0;
	  // how many frames slider has been in same position
	  this.restingFrames = 0;
	  // initial physics properties
	  this.x = 0;
	  this.velocity = 0;
	  this.originSide = this.options.rightToLeft ? 'right' : 'left';
	  // create viewport & slider
	  this.viewport = document.createElement('div');
	  this.viewport.className = 'flickity-viewport';
	  this._createSlider();
	
	  if ( this.options.resize || this.options.watchCSS ) {
	    window.addEventListener( 'resize', this );
	  }
	
	  Flickity.createMethods.forEach( function( method ) {
	    this[ method ]();
	  }, this );
	
	  if ( this.options.watchCSS ) {
	    this.watchCSS();
	  } else {
	    this.activate();
	  }
	
	};
	
	/**
	 * set options
	 * @param {Object} opts
	 */
	proto.option = function( opts ) {
	  utils.extend( this.options, opts );
	};
	
	proto.activate = function() {
	  if ( this.isActive ) {
	    return;
	  }
	  this.isActive = true;
	  this.element.classList.add('flickity-enabled');
	  if ( this.options.rightToLeft ) {
	    this.element.classList.add('flickity-rtl');
	  }
	
	  this.getSize();
	  // move initial cell elements so they can be loaded as cells
	  var cellElems = this._filterFindCellElements( this.element.children );
	  moveElements( cellElems, this.slider );
	  this.viewport.appendChild( this.slider );
	  this.element.appendChild( this.viewport );
	  // get cells from children
	  this.reloadCells();
	
	  if ( this.options.accessibility ) {
	    // allow element to focusable
	    this.element.tabIndex = 0;
	    // listen for key presses
	    this.element.addEventListener( 'keydown', this );
	  }
	
	  this.emitEvent('activate');
	
	  var index;
	  var initialIndex = this.options.initialIndex;
	  if ( this.isInitActivated ) {
	    index = this.selectedIndex;
	  } else if ( initialIndex !== undefined ) {
	    index = this.cells[ initialIndex ] ? initialIndex : 0;
	  } else {
	    index = 0;
	  }
	  // select instantly
	  this.select( index, false, true );
	  // flag for initial activation, for using initialIndex
	  this.isInitActivated = true;
	};
	
	// slider positions the cells
	proto._createSlider = function() {
	  // slider element does all the positioning
	  var slider = document.createElement('div');
	  slider.className = 'flickity-slider';
	  slider.style[ this.originSide ] = 0;
	  this.slider = slider;
	};
	
	proto._filterFindCellElements = function( elems ) {
	  return utils.filterFindElements( elems, this.options.cellSelector );
	};
	
	// goes through all children
	proto.reloadCells = function() {
	  // collection of item elements
	  this.cells = this._makeCells( this.slider.children );
	  this.positionCells();
	  this._getWrapShiftCells();
	  this.setGallerySize();
	};
	
	/**
	 * turn elements into Flickity.Cells
	 * @param {Array or NodeList or HTMLElement} elems
	 * @returns {Array} items - collection of new Flickity Cells
	 */
	proto._makeCells = function( elems ) {
	  var cellElems = this._filterFindCellElements( elems );
	
	  // create new Flickity for collection
	  var cells = cellElems.map( function( cellElem ) {
	    return new Cell( cellElem, this );
	  }, this );
	
	  return cells;
	};
	
	proto.getLastCell = function() {
	  return this.cells[ this.cells.length - 1 ];
	};
	
	proto.getLastSlide = function() {
	  return this.slides[ this.slides.length - 1 ];
	};
	
	// positions all cells
	proto.positionCells = function() {
	  // size all cells
	  this._sizeCells( this.cells );
	  // position all cells
	  this._positionCells( 0 );
	};
	
	/**
	 * position certain cells
	 * @param {Integer} index - which cell to start with
	 */
	proto._positionCells = function( index ) {
	  index = index || 0;
	  // also measure maxCellHeight
	  // start 0 if positioning all cells
	  this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
	  var cellX = 0;
	  // get cellX
	  if ( index > 0 ) {
	    var startCell = this.cells[ index - 1 ];
	    cellX = startCell.x + startCell.size.outerWidth;
	  }
	  var len = this.cells.length;
	  for ( var i=index; i < len; i++ ) {
	    var cell = this.cells[i];
	    cell.setPosition( cellX );
	    cellX += cell.size.outerWidth;
	    this.maxCellHeight = Math.max( cell.size.outerHeight, this.maxCellHeight );
	  }
	  // keep track of cellX for wrap-around
	  this.slideableWidth = cellX;
	  // slides
	  this.updateSlides();
	  // contain slides target
	  this._containSlides();
	  // update slidesWidth
	  this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
	};
	
	/**
	 * cell.getSize() on multiple cells
	 * @param {Array} cells
	 */
	proto._sizeCells = function( cells ) {
	  cells.forEach( function( cell ) {
	    cell.getSize();
	  });
	};
	
	// --------------------------  -------------------------- //
	
	proto.updateSlides = function() {
	  this.slides = [];
	  if ( !this.cells.length ) {
	    return;
	  }
	
	  var slide = new Slide( this );
	  this.slides.push( slide );
	  var isOriginLeft = this.originSide == 'left';
	  var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';
	
	  var canCellFit = this._getCanCellFit();
	
	  this.cells.forEach( function( cell, i ) {
	    // just add cell if first cell in slide
	    if ( !slide.cells.length ) {
	      slide.addCell( cell );
	      return;
	    }
	
	    var slideWidth = ( slide.outerWidth - slide.firstMargin ) +
	      ( cell.size.outerWidth - cell.size[ nextMargin ] );
	
	    if ( canCellFit.call( this, i, slideWidth ) ) {
	      slide.addCell( cell );
	    } else {
	      // doesn't fit, new slide
	      slide.updateTarget();
	
	      slide = new Slide( this );
	      this.slides.push( slide );
	      slide.addCell( cell );
	    }
	  }, this );
	  // last slide
	  slide.updateTarget();
	  // update .selectedSlide
	  this.updateSelectedSlide();
	};
	
	proto._getCanCellFit = function() {
	  var groupCells = this.options.groupCells;
	  if ( !groupCells ) {
	    return function() {
	      return false;
	    };
	  } else if ( typeof groupCells == 'number' ) {
	    // group by number. 3 -> [0,1,2], [3,4,5], ...
	    var number = parseInt( groupCells, 10 );
	    return function( i ) {
	      return ( i % number ) !== 0;
	    };
	  }
	  // default, group by width of slide
	  // parse '75%
	  var percentMatch = typeof groupCells == 'string' &&
	    groupCells.match(/^(\d+)%$/);
	  var percent = percentMatch ? parseInt( percentMatch[1], 10 ) / 100 : 1;
	  return function( i, slideWidth ) {
	    return slideWidth <= ( this.size.innerWidth + 1 ) * percent;
	  };
	};
	
	// alias _init for jQuery plugin .flickity()
	proto._init =
	proto.reposition = function() {
	  this.positionCells();
	  this.positionSliderAtSelected();
	};
	
	proto.getSize = function() {
	  this.size = getSize( this.element );
	  this.setCellAlign();
	  this.cursorPosition = this.size.innerWidth * this.cellAlign;
	};
	
	var cellAlignShorthands = {
	  // cell align, then based on origin side
	  center: {
	    left: 0.5,
	    right: 0.5
	  },
	  left: {
	    left: 0,
	    right: 1
	  },
	  right: {
	    right: 0,
	    left: 1
	  }
	};
	
	proto.setCellAlign = function() {
	  var shorthand = cellAlignShorthands[ this.options.cellAlign ];
	  this.cellAlign = shorthand ? shorthand[ this.originSide ] : this.options.cellAlign;
	};
	
	proto.setGallerySize = function() {
	  if ( this.options.setGallerySize ) {
	    var height = this.options.adaptiveHeight && this.selectedSlide ?
	      this.selectedSlide.height : this.maxCellHeight;
	    this.viewport.style.height = height + 'px';
	  }
	};
	
	proto._getWrapShiftCells = function() {
	  // only for wrap-around
	  if ( !this.options.wrapAround ) {
	    return;
	  }
	  // unshift previous cells
	  this._unshiftCells( this.beforeShiftCells );
	  this._unshiftCells( this.afterShiftCells );
	  // get before cells
	  // initial gap
	  var gapX = this.cursorPosition;
	  var cellIndex = this.cells.length - 1;
	  this.beforeShiftCells = this._getGapCells( gapX, cellIndex, -1 );
	  // get after cells
	  // ending gap between last cell and end of gallery viewport
	  gapX = this.size.innerWidth - this.cursorPosition;
	  // start cloning at first cell, working forwards
	  this.afterShiftCells = this._getGapCells( gapX, 0, 1 );
	};
	
	proto._getGapCells = function( gapX, cellIndex, increment ) {
	  // keep adding cells until the cover the initial gap
	  var cells = [];
	  while ( gapX > 0 ) {
	    var cell = this.cells[ cellIndex ];
	    if ( !cell ) {
	      break;
	    }
	    cells.push( cell );
	    cellIndex += increment;
	    gapX -= cell.size.outerWidth;
	  }
	  return cells;
	};
	
	// ----- contain ----- //
	
	// contain cell targets so no excess sliding
	proto._containSlides = function() {
	  if ( !this.options.contain || this.options.wrapAround || !this.cells.length ) {
	    return;
	  }
	  var isRightToLeft = this.options.rightToLeft;
	  var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
	  var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
	  var contentWidth = this.slideableWidth - this.getLastCell().size[ endMargin ];
	  // content is less than gallery size
	  var isContentSmaller = contentWidth < this.size.innerWidth;
	  // bounds
	  var beginBound = this.cursorPosition + this.cells[0].size[ beginMargin ];
	  var endBound = contentWidth - this.size.innerWidth * ( 1 - this.cellAlign );
	  // contain each cell target
	  this.slides.forEach( function( slide ) {
	    if ( isContentSmaller ) {
	      // all cells fit inside gallery
	      slide.target = contentWidth * this.cellAlign;
	    } else {
	      // contain to bounds
	      slide.target = Math.max( slide.target, beginBound );
	      slide.target = Math.min( slide.target, endBound );
	    }
	  }, this );
	};
	
	// -----  ----- //
	
	/**
	 * emits events via eventEmitter and jQuery events
	 * @param {String} type - name of event
	 * @param {Event} event - original event
	 * @param {Array} args - extra arguments
	 */
	proto.dispatchEvent = function( type, event, args ) {
	  var emitArgs = event ? [ event ].concat( args ) : args;
	  this.emitEvent( type, emitArgs );
	
	  if ( jQuery && this.$element ) {
	    // default trigger with type if no event
	    type += this.options.namespaceJQueryEvents ? '.flickity' : '';
	    var $event = type;
	    if ( event ) {
	      // create jQuery event
	      var jQEvent = jQuery.Event( event );
	      jQEvent.type = type;
	      $event = jQEvent;
	    }
	    this.$element.trigger( $event, args );
	  }
	};
	
	// -------------------------- select -------------------------- //
	
	/**
	 * @param {Integer} index - index of the slide
	 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
	 * @param {Boolean} isInstant - will immediately set position at selected cell
	 */
	proto.select = function( index, isWrap, isInstant ) {
	  if ( !this.isActive ) {
	    return;
	  }
	  index = parseInt( index, 10 );
	  this._wrapSelect( index );
	
	  if ( this.options.wrapAround || isWrap ) {
	    index = utils.modulo( index, this.slides.length );
	  }
	  // bail if invalid index
	  if ( !this.slides[ index ] ) {
	    return;
	  }
	  this.selectedIndex = index;
	  this.updateSelectedSlide();
	  if ( isInstant ) {
	    this.positionSliderAtSelected();
	  } else {
	    this.startAnimation();
	  }
	  if ( this.options.adaptiveHeight ) {
	    this.setGallerySize();
	  }
	
	  this.dispatchEvent('select');
	  // old v1 event name, remove in v3
	  this.dispatchEvent('cellSelect');
	};
	
	// wraps position for wrapAround, to move to closest slide. #113
	proto._wrapSelect = function( index ) {
	  var len = this.slides.length;
	  var isWrapping = this.options.wrapAround && len > 1;
	  if ( !isWrapping ) {
	    return index;
	  }
	  var wrapIndex = utils.modulo( index, len );
	  // go to shortest
	  var delta = Math.abs( wrapIndex - this.selectedIndex );
	  var backWrapDelta = Math.abs( ( wrapIndex + len ) - this.selectedIndex );
	  var forewardWrapDelta = Math.abs( ( wrapIndex - len ) - this.selectedIndex );
	  if ( !this.isDragSelect && backWrapDelta < delta ) {
	    index += len;
	  } else if ( !this.isDragSelect && forewardWrapDelta < delta ) {
	    index -= len;
	  }
	  // wrap position so slider is within normal area
	  if ( index < 0 ) {
	    this.x -= this.slideableWidth;
	  } else if ( index >= len ) {
	    this.x += this.slideableWidth;
	  }
	};
	
	proto.previous = function( isWrap, isInstant ) {
	  this.select( this.selectedIndex - 1, isWrap, isInstant );
	};
	
	proto.next = function( isWrap, isInstant ) {
	  this.select( this.selectedIndex + 1, isWrap, isInstant );
	};
	
	proto.updateSelectedSlide = function() {
	  var slide = this.slides[ this.selectedIndex ];
	  // selectedIndex could be outside of slides, if triggered before resize()
	  if ( !slide ) {
	    return;
	  }
	  // unselect previous selected slide
	  this.unselectSelectedSlide();
	  // update new selected slide
	  this.selectedSlide = slide;
	  slide.select();
	  this.selectedCells = slide.cells;
	  this.selectedElements = slide.getCellElements();
	  // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
	  // Remove in v3?
	  this.selectedCell = slide.cells[0];
	  this.selectedElement = this.selectedElements[0];
	};
	
	proto.unselectSelectedSlide = function() {
	  if ( this.selectedSlide ) {
	    this.selectedSlide.unselect();
	  }
	};
	
	/**
	 * select slide from number or cell element
	 * @param {Element or Number} elem
	 */
	proto.selectCell = function( value, isWrap, isInstant ) {
	  // get cell
	  var cell;
	  if ( typeof value == 'number' ) {
	    cell = this.cells[ value ];
	  } else {
	    // use string as selector
	    if ( typeof value == 'string' ) {
	      value = this.element.querySelector( value );
	    }
	    // get cell from element
	    cell = this.getCell( value );
	  }
	  // select slide that has cell
	  for ( var i=0; cell && i < this.slides.length; i++ ) {
	    var slide = this.slides[i];
	    var index = slide.cells.indexOf( cell );
	    if ( index != -1 ) {
	      this.select( i, isWrap, isInstant );
	      return;
	    }
	  }
	};
	
	// -------------------------- get cells -------------------------- //
	
	/**
	 * get Flickity.Cell, given an Element
	 * @param {Element} elem
	 * @returns {Flickity.Cell} item
	 */
	proto.getCell = function( elem ) {
	  // loop through cells to get the one that matches
	  for ( var i=0; i < this.cells.length; i++ ) {
	    var cell = this.cells[i];
	    if ( cell.element == elem ) {
	      return cell;
	    }
	  }
	};
	
	/**
	 * get collection of Flickity.Cells, given Elements
	 * @param {Element, Array, NodeList} elems
	 * @returns {Array} cells - Flickity.Cells
	 */
	proto.getCells = function( elems ) {
	  elems = utils.makeArray( elems );
	  var cells = [];
	  elems.forEach( function( elem ) {
	    var cell = this.getCell( elem );
	    if ( cell ) {
	      cells.push( cell );
	    }
	  }, this );
	  return cells;
	};
	
	/**
	 * get cell elements
	 * @returns {Array} cellElems
	 */
	proto.getCellElements = function() {
	  return this.cells.map( function( cell ) {
	    return cell.element;
	  });
	};
	
	/**
	 * get parent cell from an element
	 * @param {Element} elem
	 * @returns {Flickit.Cell} cell
	 */
	proto.getParentCell = function( elem ) {
	  // first check if elem is cell
	  var cell = this.getCell( elem );
	  if ( cell ) {
	    return cell;
	  }
	  // try to get parent cell elem
	  elem = utils.getParent( elem, '.flickity-slider > *' );
	  return this.getCell( elem );
	};
	
	/**
	 * get cells adjacent to a slide
	 * @param {Integer} adjCount - number of adjacent slides
	 * @param {Integer} index - index of slide to start
	 * @returns {Array} cells - array of Flickity.Cells
	 */
	proto.getAdjacentCellElements = function( adjCount, index ) {
	  if ( !adjCount ) {
	    return this.selectedSlide.getCellElements();
	  }
	  index = index === undefined ? this.selectedIndex : index;
	
	  var len = this.slides.length;
	  if ( 1 + ( adjCount * 2 ) >= len ) {
	    return this.getCellElements();
	  }
	
	  var cellElems = [];
	  for ( var i = index - adjCount; i <= index + adjCount ; i++ ) {
	    var slideIndex = this.options.wrapAround ? utils.modulo( i, len ) : i;
	    var slide = this.slides[ slideIndex ];
	    if ( slide ) {
	      cellElems = cellElems.concat( slide.getCellElements() );
	    }
	  }
	  return cellElems;
	};
	
	// -------------------------- events -------------------------- //
	
	proto.uiChange = function() {
	  this.emitEvent('uiChange');
	};
	
	proto.childUIPointerDown = function( event ) {
	  this.emitEvent( 'childUIPointerDown', [ event ] );
	};
	
	// ----- resize ----- //
	
	proto.onresize = function() {
	  this.watchCSS();
	  this.resize();
	};
	
	utils.debounceMethod( Flickity, 'onresize', 150 );
	
	proto.resize = function() {
	  if ( !this.isActive ) {
	    return;
	  }
	  this.getSize();
	  // wrap values
	  if ( this.options.wrapAround ) {
	    this.x = utils.modulo( this.x, this.slideableWidth );
	  }
	  this.positionCells();
	  this._getWrapShiftCells();
	  this.setGallerySize();
	  this.emitEvent('resize');
	  // update selected index for group slides, instant
	  // TODO: position can be lost between groups of various numbers
	  var selectedElement = this.selectedElements && this.selectedElements[0];
	  this.selectCell( selectedElement, false, true );
	};
	
	// watches the :after property, activates/deactivates
	proto.watchCSS = function() {
	  var watchOption = this.options.watchCSS;
	  if ( !watchOption ) {
	    return;
	  }
	
	  var afterContent = getComputedStyle( this.element, ':after' ).content;
	  // activate if :after { content: 'flickity' }
	  if ( afterContent.indexOf('flickity') != -1 ) {
	    this.activate();
	  } else {
	    this.deactivate();
	  }
	};
	
	// ----- keydown ----- //
	
	// go previous/next if left/right keys pressed
	proto.onkeydown = function( event ) {
	  // only work if element is in focus
	  if ( !this.options.accessibility ||
	    ( document.activeElement && document.activeElement != this.element ) ) {
	    return;
	  }
	
	  if ( event.keyCode == 37 ) {
	    // go left
	    var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
	    this.uiChange();
	    this[ leftMethod ]();
	  } else if ( event.keyCode == 39 ) {
	    // go right
	    var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
	    this.uiChange();
	    this[ rightMethod ]();
	  }
	};
	
	// -------------------------- destroy -------------------------- //
	
	// deactivate all Flickity functionality, but keep stuff available
	proto.deactivate = function() {
	  if ( !this.isActive ) {
	    return;
	  }
	  this.element.classList.remove('flickity-enabled');
	  this.element.classList.remove('flickity-rtl');
	  // destroy cells
	  this.cells.forEach( function( cell ) {
	    cell.destroy();
	  });
	  this.unselectSelectedSlide();
	  this.element.removeChild( this.viewport );
	  // move child elements back into element
	  moveElements( this.slider.children, this.element );
	  if ( this.options.accessibility ) {
	    this.element.removeAttribute('tabIndex');
	    this.element.removeEventListener( 'keydown', this );
	  }
	  // set flags
	  this.isActive = false;
	  this.emitEvent('deactivate');
	};
	
	proto.destroy = function() {
	  this.deactivate();
	  window.removeEventListener( 'resize', this );
	  this.emitEvent('destroy');
	  if ( jQuery && this.$element ) {
	    jQuery.removeData( this.element, 'flickity' );
	  }
	  delete this.element.flickityGUID;
	  delete instances[ this.guid ];
	};
	
	// -------------------------- prototype -------------------------- //
	
	utils.extend( proto, animatePrototype );
	
	// -------------------------- extras -------------------------- //
	
	/**
	 * get Flickity instance from element
	 * @param {Element} elem
	 * @returns {Flickity}
	 */
	Flickity.data = function( elem ) {
	  elem = utils.getQueryElement( elem );
	  var id = elem && elem.flickityGUID;
	  return id && instances[ id ];
	};
	
	utils.htmlInit( Flickity, 'flickity' );
	
	if ( jQuery && jQuery.bridget ) {
	  jQuery.bridget( 'flickity', Flickity );
	}
	
	// set internal jQuery, for Webpack + jQuery v3, #478
	Flickity.setJQuery = function( jq ) {
	  jQuery = jq;
	};
	
	Flickity.Cell = Cell;
	
	return Flickity;
	
	}));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * EvEmitter v1.1.0
	 * Lil' event emitter
	 * MIT License
	 */
	
	/* jshint unused: true, undef: true, strict: true */
	
	( function( global, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, window */
	  if ( true ) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory();
	  } else {
	    // Browser globals
	    global.EvEmitter = factory();
	  }
	
	}( typeof window != 'undefined' ? window : this, function() {
	
	"use strict";
	
	function EvEmitter() {}
	
	var proto = EvEmitter.prototype;
	
	proto.on = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // set events hash
	  var events = this._events = this._events || {};
	  // set listeners array
	  var listeners = events[ eventName ] = events[ eventName ] || [];
	  // only add once
	  if ( listeners.indexOf( listener ) == -1 ) {
	    listeners.push( listener );
	  }
	
	  return this;
	};
	
	proto.once = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // add event
	  this.on( eventName, listener );
	  // set once flag
	  // set onceEvents hash
	  var onceEvents = this._onceEvents = this._onceEvents || {};
	  // set onceListeners object
	  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
	  // set flag
	  onceListeners[ listener ] = true;
	
	  return this;
	};
	
	proto.off = function( eventName, listener ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var index = listeners.indexOf( listener );
	  if ( index != -1 ) {
	    listeners.splice( index, 1 );
	  }
	
	  return this;
	};
	
	proto.emitEvent = function( eventName, args ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  // copy over to avoid interference if .off() in listener
	  listeners = listeners.slice(0);
	  args = args || [];
	  // once stuff
	  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];
	
	  for ( var i=0; i < listeners.length; i++ ) {
	    var listener = listeners[i]
	    var isOnce = onceListeners && onceListeners[ listener ];
	    if ( isOnce ) {
	      // remove listener
	      // remove before trigger to prevent recursion
	      this.off( eventName, listener );
	      // unset once flag
	      delete onceListeners[ listener ];
	    }
	    // trigger listener
	    listener.apply( this, args );
	  }
	
	  return this;
	};
	
	proto.allOff = function() {
	  delete this._events;
	  delete this._onceEvents;
	};
	
	return EvEmitter;
	
	}));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * getSize v2.0.2
	 * measure size of elements
	 * MIT license
	 */
	
	/*jshint browser: true, strict: true, undef: true, unused: true */
	/*global define: false, module: false, console: false */
	
	( function( window, factory ) {
	  'use strict';
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return factory();
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.getSize = factory();
	  }
	
	})( window, function factory() {
	'use strict';
	
	// -------------------------- helpers -------------------------- //
	
	// get a number from a string, not a percentage
	function getStyleSize( value ) {
	  var num = parseFloat( value );
	  // not a percent like '100%', and a number
	  var isValid = value.indexOf('%') == -1 && !isNaN( num );
	  return isValid && num;
	}
	
	function noop() {}
	
	var logError = typeof console == 'undefined' ? noop :
	  function( message ) {
	    console.error( message );
	  };
	
	// -------------------------- measurements -------------------------- //
	
	var measurements = [
	  'paddingLeft',
	  'paddingRight',
	  'paddingTop',
	  'paddingBottom',
	  'marginLeft',
	  'marginRight',
	  'marginTop',
	  'marginBottom',
	  'borderLeftWidth',
	  'borderRightWidth',
	  'borderTopWidth',
	  'borderBottomWidth'
	];
	
	var measurementsLength = measurements.length;
	
	function getZeroSize() {
	  var size = {
	    width: 0,
	    height: 0,
	    innerWidth: 0,
	    innerHeight: 0,
	    outerWidth: 0,
	    outerHeight: 0
	  };
	  for ( var i=0; i < measurementsLength; i++ ) {
	    var measurement = measurements[i];
	    size[ measurement ] = 0;
	  }
	  return size;
	}
	
	// -------------------------- getStyle -------------------------- //
	
	/**
	 * getStyle, get style of element, check for Firefox bug
	 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	 */
	function getStyle( elem ) {
	  var style = getComputedStyle( elem );
	  if ( !style ) {
	    logError( 'Style returned ' + style +
	      '. Are you running this code in a hidden iframe on Firefox? ' +
	      'See http://bit.ly/getsizebug1' );
	  }
	  return style;
	}
	
	// -------------------------- setup -------------------------- //
	
	var isSetup = false;
	
	var isBoxSizeOuter;
	
	/**
	 * setup
	 * check isBoxSizerOuter
	 * do on first getSize() rather than on page load for Firefox bug
	 */
	function setup() {
	  // setup once
	  if ( isSetup ) {
	    return;
	  }
	  isSetup = true;
	
	  // -------------------------- box sizing -------------------------- //
	
	  /**
	   * WebKit measures the outer-width on style.width on border-box elems
	   * IE & Firefox<29 measures the inner-width
	   */
	  var div = document.createElement('div');
	  div.style.width = '200px';
	  div.style.padding = '1px 2px 3px 4px';
	  div.style.borderStyle = 'solid';
	  div.style.borderWidth = '1px 2px 3px 4px';
	  div.style.boxSizing = 'border-box';
	
	  var body = document.body || document.documentElement;
	  body.appendChild( div );
	  var style = getStyle( div );
	
	  getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize( style.width ) == 200;
	  body.removeChild( div );
	
	}
	
	// -------------------------- getSize -------------------------- //
	
	function getSize( elem ) {
	  setup();
	
	  // use querySeletor if elem is string
	  if ( typeof elem == 'string' ) {
	    elem = document.querySelector( elem );
	  }
	
	  // do not proceed on non-objects
	  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
	    return;
	  }
	
	  var style = getStyle( elem );
	
	  // if hidden, everything is 0
	  if ( style.display == 'none' ) {
	    return getZeroSize();
	  }
	
	  var size = {};
	  size.width = elem.offsetWidth;
	  size.height = elem.offsetHeight;
	
	  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
	
	  // get all measurements
	  for ( var i=0; i < measurementsLength; i++ ) {
	    var measurement = measurements[i];
	    var value = style[ measurement ];
	    var num = parseFloat( value );
	    // any 'auto', 'medium' value will be 0
	    size[ measurement ] = !isNaN( num ) ? num : 0;
	  }
	
	  var paddingWidth = size.paddingLeft + size.paddingRight;
	  var paddingHeight = size.paddingTop + size.paddingBottom;
	  var marginWidth = size.marginLeft + size.marginRight;
	  var marginHeight = size.marginTop + size.marginBottom;
	  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
	  var borderHeight = size.borderTopWidth + size.borderBottomWidth;
	
	  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
	
	  // overwrite width and height if we can get it from style
	  var styleWidth = getStyleSize( style.width );
	  if ( styleWidth !== false ) {
	    size.width = styleWidth +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
	  }
	
	  var styleHeight = getStyleSize( style.height );
	  if ( styleHeight !== false ) {
	    size.height = styleHeight +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
	  }
	
	  size.innerWidth = size.width - ( paddingWidth + borderWidth );
	  size.innerHeight = size.height - ( paddingHeight + borderHeight );
	
	  size.outerWidth = size.width + marginWidth;
	  size.outerHeight = size.height + marginHeight;
	
	  return size;
	}
	
	return getSize;
	
	});


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Fizzy UI utils v2.0.5
	 * MIT license
	 */
	
	/*jshint browser: true, undef: true, unused: true, strict: true */
	
	( function( window, factory ) {
	  // universal module definition
	  /*jshint strict: false */ /*globals define, module, require */
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(32)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( matchesSelector ) {
	      return factory( window, matchesSelector );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('desandro-matches-selector')
	    );
	  } else {
	    // browser global
	    window.fizzyUIUtils = factory(
	      window,
	      window.matchesSelector
	    );
	  }
	
	}( window, function factory( window, matchesSelector ) {
	
	'use strict';
	
	var utils = {};
	
	// ----- extend ----- //
	
	// extends objects
	utils.extend = function( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	};
	
	// ----- modulo ----- //
	
	utils.modulo = function( num, div ) {
	  return ( ( num % div ) + div ) % div;
	};
	
	// ----- makeArray ----- //
	
	// turn element or nodeList into an array
	utils.makeArray = function( obj ) {
	  var ary = [];
	  if ( Array.isArray( obj ) ) {
	    // use object if already an array
	    ary = obj;
	  } else if ( obj && typeof obj == 'object' &&
	    typeof obj.length == 'number' ) {
	    // convert nodeList to array
	    for ( var i=0; i < obj.length; i++ ) {
	      ary.push( obj[i] );
	    }
	  } else {
	    // array of single index
	    ary.push( obj );
	  }
	  return ary;
	};
	
	// ----- removeFrom ----- //
	
	utils.removeFrom = function( ary, obj ) {
	  var index = ary.indexOf( obj );
	  if ( index != -1 ) {
	    ary.splice( index, 1 );
	  }
	};
	
	// ----- getParent ----- //
	
	utils.getParent = function( elem, selector ) {
	  while ( elem.parentNode && elem != document.body ) {
	    elem = elem.parentNode;
	    if ( matchesSelector( elem, selector ) ) {
	      return elem;
	    }
	  }
	};
	
	// ----- getQueryElement ----- //
	
	// use element as selector string
	utils.getQueryElement = function( elem ) {
	  if ( typeof elem == 'string' ) {
	    return document.querySelector( elem );
	  }
	  return elem;
	};
	
	// ----- handleEvent ----- //
	
	// enable .ontype to trigger from .addEventListener( elem, 'type' )
	utils.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};
	
	// ----- filterFindElements ----- //
	
	utils.filterFindElements = function( elems, selector ) {
	  // make array of elems
	  elems = utils.makeArray( elems );
	  var ffElems = [];
	
	  elems.forEach( function( elem ) {
	    // check that elem is an actual element
	    if ( !( elem instanceof HTMLElement ) ) {
	      return;
	    }
	    // add elem if no selector
	    if ( !selector ) {
	      ffElems.push( elem );
	      return;
	    }
	    // filter & find items if we have a selector
	    // filter
	    if ( matchesSelector( elem, selector ) ) {
	      ffElems.push( elem );
	    }
	    // find children
	    var childElems = elem.querySelectorAll( selector );
	    // concat childElems to filterFound array
	    for ( var i=0; i < childElems.length; i++ ) {
	      ffElems.push( childElems[i] );
	    }
	  });
	
	  return ffElems;
	};
	
	// ----- debounceMethod ----- //
	
	utils.debounceMethod = function( _class, methodName, threshold ) {
	  // original method
	  var method = _class.prototype[ methodName ];
	  var timeoutName = methodName + 'Timeout';
	
	  _class.prototype[ methodName ] = function() {
	    var timeout = this[ timeoutName ];
	    if ( timeout ) {
	      clearTimeout( timeout );
	    }
	    var args = arguments;
	
	    var _this = this;
	    this[ timeoutName ] = setTimeout( function() {
	      method.apply( _this, args );
	      delete _this[ timeoutName ];
	    }, threshold || 100 );
	  };
	};
	
	// ----- docReady ----- //
	
	utils.docReady = function( callback ) {
	  var readyState = document.readyState;
	  if ( readyState == 'complete' || readyState == 'interactive' ) {
	    // do async to allow for other scripts to run. metafizzy/flickity#441
	    setTimeout( callback );
	  } else {
	    document.addEventListener( 'DOMContentLoaded', callback );
	  }
	};
	
	// ----- htmlInit ----- //
	
	// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
	utils.toDashed = function( str ) {
	  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
	    return $1 + '-' + $2;
	  }).toLowerCase();
	};
	
	var console = window.console;
	/**
	 * allow user to initialize classes via [data-namespace] or .js-namespace class
	 * htmlInit( Widget, 'widgetName' )
	 * options are parsed from data-namespace-options
	 */
	utils.htmlInit = function( WidgetClass, namespace ) {
	  utils.docReady( function() {
	    var dashedNamespace = utils.toDashed( namespace );
	    var dataAttr = 'data-' + dashedNamespace;
	    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
	    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
	    var elems = utils.makeArray( dataAttrElems )
	      .concat( utils.makeArray( jsDashElems ) );
	    var dataOptionsAttr = dataAttr + '-options';
	    var jQuery = window.jQuery;
	
	    elems.forEach( function( elem ) {
	      var attr = elem.getAttribute( dataAttr ) ||
	        elem.getAttribute( dataOptionsAttr );
	      var options;
	      try {
	        options = attr && JSON.parse( attr );
	      } catch ( error ) {
	        // log error, do not initialize
	        if ( console ) {
	          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
	          ': ' + error );
	        }
	        return;
	      }
	      // initialize
	      var instance = new WidgetClass( elem, options );
	      // make available via $().data('namespace')
	      if ( jQuery ) {
	        jQuery.data( elem, namespace, instance );
	      }
	    });
	
	  });
	};
	
	// -----  ----- //
	
	return utils;
	
	}));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * matchesSelector v2.0.2
	 * matchesSelector( element, '.selector' )
	 * MIT license
	 */
	
	/*jshint browser: true, strict: true, undef: true, unused: true */
	
	( function( window, factory ) {
	  /*global define: false, module: false */
	  'use strict';
	  // universal module definition
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.matchesSelector = factory();
	  }
	
	}( window, function factory() {
	  'use strict';
	
	  var matchesMethod = ( function() {
	    var ElemProto = window.Element.prototype;
	    // check for the standard method name first
	    if ( ElemProto.matches ) {
	      return 'matches';
	    }
	    // check un-prefixed
	    if ( ElemProto.matchesSelector ) {
	      return 'matchesSelector';
	    }
	    // check vendor prefixes
	    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];
	
	    for ( var i=0; i < prefixes.length; i++ ) {
	      var prefix = prefixes[i];
	      var method = prefix + 'MatchesSelector';
	      if ( ElemProto[ method ] ) {
	        return method;
	      }
	    }
	  })();
	
	  return function matchesSelector( elem, selector ) {
	    return elem[ matchesMethod ]( selector );
	  };
	
	}));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity.Cell
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(30)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( getSize ) {
	      return factory( window, getSize );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('get-size')
	    );
	  } else {
	    // browser global
	    window.Flickity = window.Flickity || {};
	    window.Flickity.Cell = factory(
	      window,
	      window.getSize
	    );
	  }
	
	}( window, function factory( window, getSize ) {
	
	'use strict';
	
	function Cell( elem, parent ) {
	  this.element = elem;
	  this.parent = parent;
	
	  this.create();
	}
	
	var proto = Cell.prototype;
	
	proto.create = function() {
	  this.element.style.position = 'absolute';
	  this.x = 0;
	  this.shift = 0;
	};
	
	proto.destroy = function() {
	  // reset style
	  this.element.style.position = '';
	  var side = this.parent.originSide;
	  this.element.style[ side ] = '';
	};
	
	proto.getSize = function() {
	  this.size = getSize( this.element );
	};
	
	proto.setPosition = function( x ) {
	  this.x = x;
	  this.updateTarget();
	  this.renderPosition( x );
	};
	
	// setDefaultTarget v1 method, backwards compatibility, remove in v3
	proto.updateTarget = proto.setDefaultTarget = function() {
	  var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
	  this.target = this.x + this.size[ marginProperty ] +
	    this.size.width * this.parent.cellAlign;
	};
	
	proto.renderPosition = function( x ) {
	  // render position of cell with in slider
	  var side = this.parent.originSide;
	  this.element.style[ side ] = this.parent.getPositionValue( x );
	};
	
	/**
	 * @param {Integer} factor - 0, 1, or -1
	**/
	proto.wrapShift = function( shift ) {
	  this.shift = shift;
	  this.renderPosition( this.x + this.parent.slideableWidth * shift );
	};
	
	proto.remove = function() {
	  this.element.parentNode.removeChild( this.element );
	};
	
	return Cell;
	
	}));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// slide
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.Flickity = window.Flickity || {};
	    window.Flickity.Slide = factory();
	  }
	
	}( window, function factory() {
	'use strict';
	
	function Slide( parent ) {
	  this.parent = parent;
	  this.isOriginLeft = parent.originSide == 'left';
	  this.cells = [];
	  this.outerWidth = 0;
	  this.height = 0;
	}
	
	var proto = Slide.prototype;
	
	proto.addCell = function( cell ) {
	  this.cells.push( cell );
	  this.outerWidth += cell.size.outerWidth;
	  this.height = Math.max( cell.size.outerHeight, this.height );
	  // first cell stuff
	  if ( this.cells.length == 1 ) {
	    this.x = cell.x; // x comes from first cell
	    var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
	    this.firstMargin = cell.size[ beginMargin ];
	  }
	};
	
	proto.updateTarget = function() {
	  var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
	  var lastCell = this.getLastCell();
	  var lastMargin = lastCell ? lastCell.size[ endMargin ] : 0;
	  var slideWidth = this.outerWidth - ( this.firstMargin + lastMargin );
	  this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
	};
	
	proto.getLastCell = function() {
	  return this.cells[ this.cells.length - 1 ];
	};
	
	proto.select = function() {
	  this.changeSelectedClass('add');
	};
	
	proto.unselect = function() {
	  this.changeSelectedClass('remove');
	};
	
	proto.changeSelectedClass = function( method ) {
	  this.cells.forEach( function( cell ) {
	    cell.element.classList[ method ]('is-selected');
	  });
	};
	
	proto.getCellElements = function() {
	  return this.cells.map( function( cell ) {
	    return cell.element;
	  });
	};
	
	return Slide;
	
	}));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// animate
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(31)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( utils ) {
	      return factory( window, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    window.Flickity = window.Flickity || {};
	    window.Flickity.animatePrototype = factory(
	      window,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, utils ) {
	
	'use strict';
	
	// -------------------------- requestAnimationFrame -------------------------- //
	
	// get rAF, prefixed, if present
	var requestAnimationFrame = window.requestAnimationFrame ||
	  window.webkitRequestAnimationFrame;
	
	// fallback to setTimeout
	var lastTime = 0;
	if ( !requestAnimationFrame )  {
	  requestAnimationFrame = function( callback ) {
	    var currTime = new Date().getTime();
	    var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
	    var id = setTimeout( callback, timeToCall );
	    lastTime = currTime + timeToCall;
	    return id;
	  };
	}
	
	// -------------------------- animate -------------------------- //
	
	var proto = {};
	
	proto.startAnimation = function() {
	  if ( this.isAnimating ) {
	    return;
	  }
	
	  this.isAnimating = true;
	  this.restingFrames = 0;
	  this.animate();
	};
	
	proto.animate = function() {
	  this.applyDragForce();
	  this.applySelectedAttraction();
	
	  var previousX = this.x;
	
	  this.integratePhysics();
	  this.positionSlider();
	  this.settle( previousX );
	  // animate next frame
	  if ( this.isAnimating ) {
	    var _this = this;
	    requestAnimationFrame( function animateFrame() {
	      _this.animate();
	    });
	  }
	};
	
	
	var transformProperty = ( function () {
	  var style = document.documentElement.style;
	  if ( typeof style.transform == 'string' ) {
	    return 'transform';
	  }
	  return 'WebkitTransform';
	})();
	
	proto.positionSlider = function() {
	  var x = this.x;
	  // wrap position around
	  if ( this.options.wrapAround && this.cells.length > 1 ) {
	    x = utils.modulo( x, this.slideableWidth );
	    x = x - this.slideableWidth;
	    this.shiftWrapCells( x );
	  }
	
	  x = x + this.cursorPosition;
	  // reverse if right-to-left and using transform
	  x = this.options.rightToLeft && transformProperty ? -x : x;
	  var value = this.getPositionValue( x );
	  // use 3D tranforms for hardware acceleration on iOS
	  // but use 2D when settled, for better font-rendering
	  this.slider.style[ transformProperty ] = this.isAnimating ?
	    'translate3d(' + value + ',0,0)' : 'translateX(' + value + ')';
	
	  // scroll event
	  var firstSlide = this.slides[0];
	  if ( firstSlide ) {
	    var positionX = -this.x - firstSlide.target;
	    var progress = positionX / this.slidesWidth;
	    this.dispatchEvent( 'scroll', null, [ progress, positionX ] );
	  }
	};
	
	proto.positionSliderAtSelected = function() {
	  if ( !this.cells.length ) {
	    return;
	  }
	  this.x = -this.selectedSlide.target;
	  this.positionSlider();
	};
	
	proto.getPositionValue = function( position ) {
	  if ( this.options.percentPosition ) {
	    // percent position, round to 2 digits, like 12.34%
	    return ( Math.round( ( position / this.size.innerWidth ) * 10000 ) * 0.01 )+ '%';
	  } else {
	    // pixel positioning
	    return Math.round( position ) + 'px';
	  }
	};
	
	proto.settle = function( previousX ) {
	  // keep track of frames where x hasn't moved
	  if ( !this.isPointerDown && Math.round( this.x * 100 ) == Math.round( previousX * 100 ) ) {
	    this.restingFrames++;
	  }
	  // stop animating if resting for 3 or more frames
	  if ( this.restingFrames > 2 ) {
	    this.isAnimating = false;
	    delete this.isFreeScrolling;
	    // render position with translateX when settled
	    this.positionSlider();
	    this.dispatchEvent('settle');
	  }
	};
	
	proto.shiftWrapCells = function( x ) {
	  // shift before cells
	  var beforeGap = this.cursorPosition + x;
	  this._shiftCells( this.beforeShiftCells, beforeGap, -1 );
	  // shift after cells
	  var afterGap = this.size.innerWidth - ( x + this.slideableWidth + this.cursorPosition );
	  this._shiftCells( this.afterShiftCells, afterGap, 1 );
	};
	
	proto._shiftCells = function( cells, gap, shift ) {
	  for ( var i=0; i < cells.length; i++ ) {
	    var cell = cells[i];
	    var cellShift = gap > 0 ? shift : 0;
	    cell.wrapShift( cellShift );
	    gap -= cell.size.outerWidth;
	  }
	};
	
	proto._unshiftCells = function( cells ) {
	  if ( !cells || !cells.length ) {
	    return;
	  }
	  for ( var i=0; i < cells.length; i++ ) {
	    cells[i].wrapShift( 0 );
	  }
	};
	
	// -------------------------- physics -------------------------- //
	
	proto.integratePhysics = function() {
	  this.x += this.velocity;
	  this.velocity *= this.getFrictionFactor();
	};
	
	proto.applyForce = function( force ) {
	  this.velocity += force;
	};
	
	proto.getFrictionFactor = function() {
	  return 1 - this.options[ this.isFreeScrolling ? 'freeScrollFriction' : 'friction' ];
	};
	
	proto.getRestingPosition = function() {
	  // my thanks to Steven Wittens, who simplified this math greatly
	  return this.x + this.velocity / ( 1 - this.getFrictionFactor() );
	};
	
	proto.applyDragForce = function() {
	  if ( !this.isPointerDown ) {
	    return;
	  }
	  // change the position to drag position by applying force
	  var dragVelocity = this.dragX - this.x;
	  var dragForce = dragVelocity - this.velocity;
	  this.applyForce( dragForce );
	};
	
	proto.applySelectedAttraction = function() {
	  // do not attract if pointer down or no cells
	  if ( this.isPointerDown || this.isFreeScrolling || !this.cells.length ) {
	    return;
	  }
	  var distance = this.selectedSlide.target * -1 - this.x;
	  var force = distance * this.options.selectedAttraction;
	  this.applyForce( force );
	};
	
	return proto;
	
	}));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// drag
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(28),
	      __webpack_require__(37),
	      __webpack_require__(31)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, Unidragger, utils ) {
	      return factory( window, Flickity, Unidragger, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('unidragger'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    window.Flickity = factory(
	      window,
	      window.Flickity,
	      window.Unidragger,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, Flickity, Unidragger, utils ) {
	
	'use strict';
	
	// ----- defaults ----- //
	
	utils.extend( Flickity.defaults, {
	  draggable: true,
	  dragThreshold: 3,
	});
	
	// ----- create ----- //
	
	Flickity.createMethods.push('_createDrag');
	
	// -------------------------- drag prototype -------------------------- //
	
	var proto = Flickity.prototype;
	utils.extend( proto, Unidragger.prototype );
	proto._touchActionValue = 'pan-y';
	
	// --------------------------  -------------------------- //
	
	var isTouch = 'createTouch' in document;
	var isTouchmoveScrollCanceled = false;
	
	proto._createDrag = function() {
	  this.on( 'activate', this.bindDrag );
	  this.on( 'uiChange', this._uiChangeDrag );
	  this.on( 'childUIPointerDown', this._childUIPointerDownDrag );
	  this.on( 'deactivate', this.unbindDrag );
	  // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
	  // #457, RubaXa/Sortable#973
	  if ( isTouch && !isTouchmoveScrollCanceled ) {
	    window.addEventListener( 'touchmove', function() {});
	    isTouchmoveScrollCanceled = true;
	  }
	};
	
	proto.bindDrag = function() {
	  if ( !this.options.draggable || this.isDragBound ) {
	    return;
	  }
	  this.element.classList.add('is-draggable');
	  this.handles = [ this.viewport ];
	  this.bindHandles();
	  this.isDragBound = true;
	};
	
	proto.unbindDrag = function() {
	  if ( !this.isDragBound ) {
	    return;
	  }
	  this.element.classList.remove('is-draggable');
	  this.unbindHandles();
	  delete this.isDragBound;
	};
	
	proto._uiChangeDrag = function() {
	  delete this.isFreeScrolling;
	};
	
	proto._childUIPointerDownDrag = function( event ) {
	  event.preventDefault();
	  this.pointerDownFocus( event );
	};
	
	// -------------------------- pointer events -------------------------- //
	
	// nodes that have text fields
	var cursorNodes = {
	  TEXTAREA: true,
	  INPUT: true,
	  OPTION: true,
	};
	
	// input types that do not have text fields
	var clickTypes = {
	  radio: true,
	  checkbox: true,
	  button: true,
	  submit: true,
	  image: true,
	  file: true,
	};
	
	proto.pointerDown = function( event, pointer ) {
	  // dismiss inputs with text fields. #403, #404
	  var isCursorInput = cursorNodes[ event.target.nodeName ] &&
	    !clickTypes[ event.target.type ];
	  if ( isCursorInput ) {
	    // reset pointerDown logic
	    this.isPointerDown = false;
	    delete this.pointerIdentifier;
	    return;
	  }
	
	  this._dragPointerDown( event, pointer );
	
	  // kludge to blur focused inputs in dragger
	  var focused = document.activeElement;
	  if ( focused && focused.blur && focused != this.element &&
	    // do not blur body for IE9 & 10, #117
	    focused != document.body ) {
	    focused.blur();
	  }
	  this.pointerDownFocus( event );
	  // stop if it was moving
	  this.dragX = this.x;
	  this.viewport.classList.add('is-pointer-down');
	  // bind move and end events
	  this._bindPostStartEvents( event );
	  // track scrolling
	  this.pointerDownScroll = getScrollPosition();
	  window.addEventListener( 'scroll', this );
	
	  this.dispatchEvent( 'pointerDown', event, [ pointer ] );
	};
	
	proto.pointerDownFocus = function( event ) {
	  // focus element, if not touch, and its not an input or select
	  var canPointerDown = getCanPointerDown( event );
	  if ( !this.options.accessibility || canPointerDown ) {
	    return;
	  }
	  var prevScrollY = window.pageYOffset;
	  this.element.focus();
	  // hack to fix scroll jump after focus, #76
	  if ( window.pageYOffset != prevScrollY ) {
	    window.scrollTo( window.pageXOffset, prevScrollY );
	  }
	};
	
	var touchStartEvents = {
	  touchstart: true,
	  pointerdown: true,
	};
	
	var focusNodes = {
	  INPUT: true,
	  SELECT: true,
	};
	
	function getCanPointerDown( event ) {
	  var isTouchStart = touchStartEvents[ event.type ];
	  var isFocusNode = focusNodes[ event.target.nodeName ];
	  return isTouchStart || isFocusNode;
	}
	
	proto.canPreventDefaultOnPointerDown = function( event ) {
	  // prevent default, unless touchstart or input
	  var canPointerDown = getCanPointerDown( event );
	  return !canPointerDown;
	};
	
	// ----- move ----- //
	
	proto.hasDragStarted = function( moveVector ) {
	  return Math.abs( moveVector.x ) > this.options.dragThreshold;
	};
	
	// ----- up ----- //
	
	proto.pointerUp = function( event, pointer ) {
	  delete this.isTouchScrolling;
	  this.viewport.classList.remove('is-pointer-down');
	  this.dispatchEvent( 'pointerUp', event, [ pointer ] );
	  this._dragPointerUp( event, pointer );
	};
	
	proto.pointerDone = function() {
	  window.removeEventListener( 'scroll', this );
	  delete this.pointerDownScroll;
	};
	
	// -------------------------- dragging -------------------------- //
	
	proto.dragStart = function( event, pointer ) {
	  this.dragStartPosition = this.x;
	  this.startAnimation();
	  window.removeEventListener( 'scroll', this );
	  this.dispatchEvent( 'dragStart', event, [ pointer ] );
	};
	
	proto.pointerMove = function( event, pointer ) {
	  var moveVector = this._dragPointerMove( event, pointer );
	  this.dispatchEvent( 'pointerMove', event, [ pointer, moveVector ] );
	  this._dragMove( event, pointer, moveVector );
	};
	
	proto.dragMove = function( event, pointer, moveVector ) {
	  event.preventDefault();
	
	  this.previousDragX = this.dragX;
	  // reverse if right-to-left
	  var direction = this.options.rightToLeft ? -1 : 1;
	  var dragX = this.dragStartPosition + moveVector.x * direction;
	
	  if ( !this.options.wrapAround && this.slides.length ) {
	    // slow drag
	    var originBound = Math.max( -this.slides[0].target, this.dragStartPosition );
	    dragX = dragX > originBound ? ( dragX + originBound ) * 0.5 : dragX;
	    var endBound = Math.min( -this.getLastSlide().target, this.dragStartPosition );
	    dragX = dragX < endBound ? ( dragX + endBound ) * 0.5 : dragX;
	  }
	
	  this.dragX = dragX;
	
	  this.dragMoveTime = new Date();
	  this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
	};
	
	proto.dragEnd = function( event, pointer ) {
	  if ( this.options.freeScroll ) {
	    this.isFreeScrolling = true;
	  }
	  // set selectedIndex based on where flick will end up
	  var index = this.dragEndRestingSelect();
	
	  if ( this.options.freeScroll && !this.options.wrapAround ) {
	    // if free-scroll & not wrap around
	    // do not free-scroll if going outside of bounding slides
	    // so bounding slides can attract slider, and keep it in bounds
	    var restingX = this.getRestingPosition();
	    this.isFreeScrolling = -restingX > this.slides[0].target &&
	      -restingX < this.getLastSlide().target;
	  } else if ( !this.options.freeScroll && index == this.selectedIndex ) {
	    // boost selection if selected index has not changed
	    index += this.dragEndBoostSelect();
	  }
	  delete this.previousDragX;
	  // apply selection
	  // TODO refactor this, selecting here feels weird
	  // HACK, set flag so dragging stays in correct direction
	  this.isDragSelect = this.options.wrapAround;
	  this.select( index );
	  delete this.isDragSelect;
	  this.dispatchEvent( 'dragEnd', event, [ pointer ] );
	};
	
	proto.dragEndRestingSelect = function() {
	  var restingX = this.getRestingPosition();
	  // how far away from selected slide
	  var distance = Math.abs( this.getSlideDistance( -restingX, this.selectedIndex ) );
	  // get closet resting going up and going down
	  var positiveResting = this._getClosestResting( restingX, distance, 1 );
	  var negativeResting = this._getClosestResting( restingX, distance, -1 );
	  // use closer resting for wrap-around
	  var index = positiveResting.distance < negativeResting.distance ?
	    positiveResting.index : negativeResting.index;
	  return index;
	};
	
	/**
	 * given resting X and distance to selected cell
	 * get the distance and index of the closest cell
	 * @param {Number} restingX - estimated post-flick resting position
	 * @param {Number} distance - distance to selected cell
	 * @param {Integer} increment - +1 or -1, going up or down
	 * @returns {Object} - { distance: {Number}, index: {Integer} }
	 */
	proto._getClosestResting = function( restingX, distance, increment ) {
	  var index = this.selectedIndex;
	  var minDistance = Infinity;
	  var condition = this.options.contain && !this.options.wrapAround ?
	    // if contain, keep going if distance is equal to minDistance
	    function( d, md ) { return d <= md; } : function( d, md ) { return d < md; };
	  while ( condition( distance, minDistance ) ) {
	    // measure distance to next cell
	    index += increment;
	    minDistance = distance;
	    distance = this.getSlideDistance( -restingX, index );
	    if ( distance === null ) {
	      break;
	    }
	    distance = Math.abs( distance );
	  }
	  return {
	    distance: minDistance,
	    // selected was previous index
	    index: index - increment
	  };
	};
	
	/**
	 * measure distance between x and a slide target
	 * @param {Number} x
	 * @param {Integer} index - slide index
	 */
	proto.getSlideDistance = function( x, index ) {
	  var len = this.slides.length;
	  // wrap around if at least 2 slides
	  var isWrapAround = this.options.wrapAround && len > 1;
	  var slideIndex = isWrapAround ? utils.modulo( index, len ) : index;
	  var slide = this.slides[ slideIndex ];
	  if ( !slide ) {
	    return null;
	  }
	  // add distance for wrap-around slides
	  var wrap = isWrapAround ? this.slideableWidth * Math.floor( index / len ) : 0;
	  return x - ( slide.target + wrap );
	};
	
	proto.dragEndBoostSelect = function() {
	  // do not boost if no previousDragX or dragMoveTime
	  if ( this.previousDragX === undefined || !this.dragMoveTime ||
	    // or if drag was held for 100 ms
	    new Date() - this.dragMoveTime > 100 ) {
	    return 0;
	  }
	
	  var distance = this.getSlideDistance( -this.dragX, this.selectedIndex );
	  var delta = this.previousDragX - this.dragX;
	  if ( distance > 0 && delta > 0 ) {
	    // boost to next if moving towards the right, and positive velocity
	    return 1;
	  } else if ( distance < 0 && delta < 0 ) {
	    // boost to previous if moving towards the left, and negative velocity
	    return -1;
	  }
	  return 0;
	};
	
	// ----- staticClick ----- //
	
	proto.staticClick = function( event, pointer ) {
	  // get clickedCell, if cell was clicked
	  var clickedCell = this.getParentCell( event.target );
	  var cellElem = clickedCell && clickedCell.element;
	  var cellIndex = clickedCell && this.cells.indexOf( clickedCell );
	  this.dispatchEvent( 'staticClick', event, [ pointer, cellElem, cellIndex ] );
	};
	
	// ----- scroll ----- //
	
	proto.onscroll = function() {
	  var scroll = getScrollPosition();
	  var scrollMoveX = this.pointerDownScroll.x - scroll.x;
	  var scrollMoveY = this.pointerDownScroll.y - scroll.y;
	  // cancel click/tap if scroll is too much
	  if ( Math.abs( scrollMoveX ) > 3 || Math.abs( scrollMoveY ) > 3 ) {
	    this._pointerDone();
	  }
	};
	
	// ----- utils ----- //
	
	function getScrollPosition() {
	  return {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  };
	}
	
	// -----  ----- //
	
	return Flickity;
	
	}));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Unidragger v2.2.3
	 * Draggable base class
	 * MIT license
	 */
	
	/*jshint browser: true, unused: true, undef: true, strict: true */
	
	( function( window, factory ) {
	  // universal module definition
	  /*jshint strict: false */ /*globals define, module, require */
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(38)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Unipointer ) {
	      return factory( window, Unipointer );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('unipointer')
	    );
	  } else {
	    // browser global
	    window.Unidragger = factory(
	      window,
	      window.Unipointer
	    );
	  }
	
	}( window, function factory( window, Unipointer ) {
	
	'use strict';
	
	// -------------------------- Unidragger -------------------------- //
	
	function Unidragger() {}
	
	// inherit Unipointer & EvEmitter
	var proto = Unidragger.prototype = Object.create( Unipointer.prototype );
	
	// ----- bind start ----- //
	
	proto.bindHandles = function() {
	  this._bindHandles( true );
	};
	
	proto.unbindHandles = function() {
	  this._bindHandles( false );
	};
	
	/**
	 * works as unbinder, as you can .bindHandles( false ) to unbind
	 * @param {Boolean} isBind - will unbind if falsey
	 */
	proto._bindHandles = function( isBind ) {
	  // munge isBind, default to true
	  isBind = isBind === undefined ? true : !!isBind;
	  // bind each handle
	  var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';
	  for ( var i=0; i < this.handles.length; i++ ) {
	    var handle = this.handles[i];
	    this._bindStartEvent( handle, isBind );
	    handle[ bindMethod ]( 'click', this );
	    // touch-action: none to override browser touch gestures
	    // metafizzy/flickity#540
	    if ( window.PointerEvent ) {
	      handle.style.touchAction = isBind ? this._touchActionValue : '';
	    }
	  }
	};
	
	// prototype so it can be overwriteable by Flickity
	proto._touchActionValue = 'none';
	
	// ----- start event ----- //
	
	/**
	 * pointer start
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerDown = function( event, pointer ) {
	  // dismiss range sliders
	  if ( event.target.nodeName == 'INPUT' && event.target.type == 'range' ) {
	    // reset pointerDown logic
	    this.isPointerDown = false;
	    delete this.pointerIdentifier;
	    return;
	  }
	
	  this._dragPointerDown( event, pointer );
	  // kludge to blur focused inputs in dragger
	  var focused = document.activeElement;
	  if ( focused && focused.blur ) {
	    focused.blur();
	  }
	  // bind move and end events
	  this._bindPostStartEvents( event );
	  this.emitEvent( 'pointerDown', [ event, pointer ] );
	};
	
	// base pointer down logic
	proto._dragPointerDown = function( event, pointer ) {
	  // track to see when dragging starts
	  this.pointerDownPoint = Unipointer.getPointerPoint( pointer );
	
	  var canPreventDefault = this.canPreventDefaultOnPointerDown( event, pointer );
	  if ( canPreventDefault ) {
	    event.preventDefault();
	  }
	};
	
	// overwriteable method so Flickity can prevent for scrolling
	proto.canPreventDefaultOnPointerDown = function( event ) {
	  // prevent default, unless touchstart or <select>
	  return event.target.nodeName != 'SELECT';
	};
	
	// ----- move event ----- //
	
	/**
	 * drag move
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerMove = function( event, pointer ) {
	  var moveVector = this._dragPointerMove( event, pointer );
	  this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
	  this._dragMove( event, pointer, moveVector );
	};
	
	// base pointer move logic
	proto._dragPointerMove = function( event, pointer ) {
	  var movePoint = Unipointer.getPointerPoint( pointer );
	  var moveVector = {
	    x: movePoint.x - this.pointerDownPoint.x,
	    y: movePoint.y - this.pointerDownPoint.y
	  };
	  // start drag if pointer has moved far enough to start drag
	  if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
	    this._dragStart( event, pointer );
	  }
	  return moveVector;
	};
	
	// condition if pointer has moved far enough to start drag
	proto.hasDragStarted = function( moveVector ) {
	  return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
	};
	
	
	// ----- end event ----- //
	
	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerUp = function( event, pointer ) {
	  this.emitEvent( 'pointerUp', [ event, pointer ] );
	  this._dragPointerUp( event, pointer );
	};
	
	proto._dragPointerUp = function( event, pointer ) {
	  if ( this.isDragging ) {
	    this._dragEnd( event, pointer );
	  } else {
	    // pointer didn't move enough for drag to start
	    this._staticClick( event, pointer );
	  }
	};
	
	// -------------------------- drag -------------------------- //
	
	// dragStart
	proto._dragStart = function( event, pointer ) {
	  this.isDragging = true;
	  this.dragStartPoint = Unipointer.getPointerPoint( pointer );
	  // prevent clicks
	  this.isPreventingClicks = true;
	
	  this.dragStart( event, pointer );
	};
	
	proto.dragStart = function( event, pointer ) {
	  this.emitEvent( 'dragStart', [ event, pointer ] );
	};
	
	// dragMove
	proto._dragMove = function( event, pointer, moveVector ) {
	  // do not drag if not dragging yet
	  if ( !this.isDragging ) {
	    return;
	  }
	
	  this.dragMove( event, pointer, moveVector );
	};
	
	proto.dragMove = function( event, pointer, moveVector ) {
	  event.preventDefault();
	  this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
	};
	
	// dragEnd
	proto._dragEnd = function( event, pointer ) {
	  // set flags
	  this.isDragging = false;
	  // re-enable clicking async
	  setTimeout( function() {
	    delete this.isPreventingClicks;
	  }.bind( this ) );
	
	  this.dragEnd( event, pointer );
	};
	
	proto.dragEnd = function( event, pointer ) {
	  this.emitEvent( 'dragEnd', [ event, pointer ] );
	};
	
	// ----- onclick ----- //
	
	// handle all clicks and prevent clicks when dragging
	proto.onclick = function( event ) {
	  if ( this.isPreventingClicks ) {
	    event.preventDefault();
	  }
	};
	
	// ----- staticClick ----- //
	
	// triggered after pointer down & up with no/tiny movement
	proto._staticClick = function( event, pointer ) {
	  // ignore emulated mouse up clicks
	  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
	    return;
	  }
	
	  // allow click in <input>s and <textarea>s
	  var nodeName = event.target.nodeName;
	  if ( nodeName == 'INPUT' || nodeName == 'TEXTAREA' ) {
	    event.target.focus();
	  }
	  this.staticClick( event, pointer );
	
	  // set flag for emulated clicks 300ms after touchend
	  if ( event.type != 'mouseup' ) {
	    this.isIgnoringMouseUp = true;
	    // reset flag after 300ms
	    setTimeout( function() {
	      delete this.isIgnoringMouseUp;
	    }.bind( this ), 400 );
	  }
	};
	
	proto.staticClick = function( event, pointer ) {
	  this.emitEvent( 'staticClick', [ event, pointer ] );
	};
	
	// ----- utils ----- //
	
	Unidragger.getPointerPoint = Unipointer.getPointerPoint;
	
	// -----  ----- //
	
	return Unidragger;
	
	}));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Unipointer v2.2.0
	 * base class for doing one thing with pointer event
	 * MIT license
	 */
	
	/*jshint browser: true, undef: true, unused: true, strict: true */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /*global define, module, require */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(29)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter ) {
	      return factory( window, EvEmitter );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('ev-emitter')
	    );
	  } else {
	    // browser global
	    window.Unipointer = factory(
	      window,
	      window.EvEmitter
	    );
	  }
	
	}( window, function factory( window, EvEmitter ) {
	
	'use strict';
	
	function noop() {}
	
	function Unipointer() {}
	
	// inherit EvEmitter
	var proto = Unipointer.prototype = Object.create( EvEmitter.prototype );
	
	proto.bindStartEvent = function( elem ) {
	  this._bindStartEvent( elem, true );
	};
	
	proto.unbindStartEvent = function( elem ) {
	  this._bindStartEvent( elem, false );
	};
	
	/**
	 * works as unbinder, as you can ._bindStart( false ) to unbind
	 * @param {Boolean} isBind - will unbind if falsey
	 */
	proto._bindStartEvent = function( elem, isBind ) {
	  // munge isBind, default to true
	  isBind = isBind === undefined ? true : !!isBind;
	  var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';
	
	  if ( window.PointerEvent ) {
	    // Pointer Events. Chrome 55, IE11, Edge 14
	    elem[ bindMethod ]( 'pointerdown', this );
	  } else {
	    // listen for both, for devices like Chrome Pixel
	    elem[ bindMethod ]( 'mousedown', this );
	    elem[ bindMethod ]( 'touchstart', this );
	  }
	};
	
	// trigger handler methods for events
	proto.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};
	
	// returns the touch that we're keeping track of
	proto.getTouch = function( touches ) {
	  for ( var i=0; i < touches.length; i++ ) {
	    var touch = touches[i];
	    if ( touch.identifier == this.pointerIdentifier ) {
	      return touch;
	    }
	  }
	};
	
	// ----- start event ----- //
	
	proto.onmousedown = function( event ) {
	  // dismiss clicks from right or middle buttons
	  var button = event.button;
	  if ( button && ( button !== 0 && button !== 1 ) ) {
	    return;
	  }
	  this._pointerDown( event, event );
	};
	
	proto.ontouchstart = function( event ) {
	  this._pointerDown( event, event.changedTouches[0] );
	};
	
	proto.onpointerdown = function( event ) {
	  this._pointerDown( event, event );
	};
	
	/**
	 * pointer start
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto._pointerDown = function( event, pointer ) {
	  // dismiss other pointers
	  if ( this.isPointerDown ) {
	    return;
	  }
	
	  this.isPointerDown = true;
	  // save pointer identifier to match up touch events
	  this.pointerIdentifier = pointer.pointerId !== undefined ?
	    // pointerId for pointer events, touch.indentifier for touch events
	    pointer.pointerId : pointer.identifier;
	
	  this.pointerDown( event, pointer );
	};
	
	proto.pointerDown = function( event, pointer ) {
	  this._bindPostStartEvents( event );
	  this.emitEvent( 'pointerDown', [ event, pointer ] );
	};
	
	// hash of events to be bound after start event
	var postStartEvents = {
	  mousedown: [ 'mousemove', 'mouseup' ],
	  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
	  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
	};
	
	proto._bindPostStartEvents = function( event ) {
	  if ( !event ) {
	    return;
	  }
	  // get proper events to match start event
	  var events = postStartEvents[ event.type ];
	  // bind events to node
	  events.forEach( function( eventName ) {
	    window.addEventListener( eventName, this );
	  }, this );
	  // save these arguments
	  this._boundPointerEvents = events;
	};
	
	proto._unbindPostStartEvents = function() {
	  // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
	  if ( !this._boundPointerEvents ) {
	    return;
	  }
	  this._boundPointerEvents.forEach( function( eventName ) {
	    window.removeEventListener( eventName, this );
	  }, this );
	
	  delete this._boundPointerEvents;
	};
	
	// ----- move event ----- //
	
	proto.onmousemove = function( event ) {
	  this._pointerMove( event, event );
	};
	
	proto.onpointermove = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerMove( event, event );
	  }
	};
	
	proto.ontouchmove = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerMove( event, touch );
	  }
	};
	
	/**
	 * pointer move
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerMove = function( event, pointer ) {
	  this.pointerMove( event, pointer );
	};
	
	// public
	proto.pointerMove = function( event, pointer ) {
	  this.emitEvent( 'pointerMove', [ event, pointer ] );
	};
	
	// ----- end event ----- //
	
	
	proto.onmouseup = function( event ) {
	  this._pointerUp( event, event );
	};
	
	proto.onpointerup = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerUp( event, event );
	  }
	};
	
	proto.ontouchend = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerUp( event, touch );
	  }
	};
	
	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerUp = function( event, pointer ) {
	  this._pointerDone();
	  this.pointerUp( event, pointer );
	};
	
	// public
	proto.pointerUp = function( event, pointer ) {
	  this.emitEvent( 'pointerUp', [ event, pointer ] );
	};
	
	// ----- pointer done ----- //
	
	// triggered on pointer up & pointer cancel
	proto._pointerDone = function() {
	  // reset properties
	  this.isPointerDown = false;
	  delete this.pointerIdentifier;
	  // remove events
	  this._unbindPostStartEvents();
	  this.pointerDone();
	};
	
	proto.pointerDone = noop;
	
	// ----- pointer cancel ----- //
	
	proto.onpointercancel = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerCancel( event, event );
	  }
	};
	
	proto.ontouchcancel = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerCancel( event, touch );
	  }
	};
	
	/**
	 * pointer cancel
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerCancel = function( event, pointer ) {
	  this._pointerDone();
	  this.pointerCancel( event, pointer );
	};
	
	// public
	proto.pointerCancel = function( event, pointer ) {
	  this.emitEvent( 'pointerCancel', [ event, pointer ] );
	};
	
	// -----  ----- //
	
	// utility function for getting x/y coords from event
	Unipointer.getPointerPoint = function( pointer ) {
	  return {
	    x: pointer.pageX,
	    y: pointer.pageY
	  };
	};
	
	// -----  ----- //
	
	return Unipointer;
	
	}));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// prev/next buttons
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(28),
	      __webpack_require__(40),
	      __webpack_require__(31)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, TapListener, utils ) {
	      return factory( window, Flickity, TapListener, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('tap-listener'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    factory(
	      window,
	      window.Flickity,
	      window.TapListener,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, Flickity, TapListener, utils ) {
	'use strict';
	
	var svgURI = 'http://www.w3.org/2000/svg';
	
	// -------------------------- PrevNextButton -------------------------- //
	
	function PrevNextButton( direction, parent ) {
	  this.direction = direction;
	  this.parent = parent;
	  this._create();
	}
	
	PrevNextButton.prototype = new TapListener();
	
	PrevNextButton.prototype._create = function() {
	  // properties
	  this.isEnabled = true;
	  this.isPrevious = this.direction == -1;
	  var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
	  this.isLeft = this.direction == leftDirection;
	
	  var element = this.element = document.createElement('button');
	  element.className = 'flickity-prev-next-button';
	  element.className += this.isPrevious ? ' previous' : ' next';
	  // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
	  element.setAttribute( 'type', 'button' );
	  // init as disabled
	  this.disable();
	
	  element.setAttribute( 'aria-label', this.isPrevious ? 'previous' : 'next' );
	
	  // create arrow
	  var svg = this.createSVG();
	  element.appendChild( svg );
	  // events
	  this.on( 'tap', this.onTap );
	  this.parent.on( 'select', this.update.bind( this ) );
	  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
	};
	
	PrevNextButton.prototype.activate = function() {
	  this.bindTap( this.element );
	  // click events from keyboard
	  this.element.addEventListener( 'click', this );
	  // add to DOM
	  this.parent.element.appendChild( this.element );
	};
	
	PrevNextButton.prototype.deactivate = function() {
	  // remove from DOM
	  this.parent.element.removeChild( this.element );
	  // do regular TapListener destroy
	  TapListener.prototype.destroy.call( this );
	  // click events from keyboard
	  this.element.removeEventListener( 'click', this );
	};
	
	PrevNextButton.prototype.createSVG = function() {
	  var svg = document.createElementNS( svgURI, 'svg');
	  svg.setAttribute( 'viewBox', '0 0 100 100' );
	  var path = document.createElementNS( svgURI, 'path');
	  var pathMovements = getArrowMovements( this.parent.options.arrowShape );
	  path.setAttribute( 'd', pathMovements );
	  path.setAttribute( 'class', 'arrow' );
	  // rotate arrow
	  if ( !this.isLeft ) {
	    path.setAttribute( 'transform', 'translate(100, 100) rotate(180) ' );
	  }
	  svg.appendChild( path );
	  return svg;
	};
	
	// get SVG path movmement
	function getArrowMovements( shape ) {
	  // use shape as movement if string
	  if ( typeof shape == 'string' ) {
	    return shape;
	  }
	  // create movement string
	  return 'M ' + shape.x0 + ',50' +
	    ' L ' + shape.x1 + ',' + ( shape.y1 + 50 ) +
	    ' L ' + shape.x2 + ',' + ( shape.y2 + 50 ) +
	    ' L ' + shape.x3 + ',50 ' +
	    ' L ' + shape.x2 + ',' + ( 50 - shape.y2 ) +
	    ' L ' + shape.x1 + ',' + ( 50 - shape.y1 ) +
	    ' Z';
	}
	
	PrevNextButton.prototype.onTap = function() {
	  if ( !this.isEnabled ) {
	    return;
	  }
	  this.parent.uiChange();
	  var method = this.isPrevious ? 'previous' : 'next';
	  this.parent[ method ]();
	};
	
	PrevNextButton.prototype.handleEvent = utils.handleEvent;
	
	PrevNextButton.prototype.onclick = function() {
	  // only allow clicks from keyboard
	  var focused = document.activeElement;
	  if ( focused && focused == this.element ) {
	    this.onTap();
	  }
	};
	
	// -----  ----- //
	
	PrevNextButton.prototype.enable = function() {
	  if ( this.isEnabled ) {
	    return;
	  }
	  this.element.disabled = false;
	  this.isEnabled = true;
	};
	
	PrevNextButton.prototype.disable = function() {
	  if ( !this.isEnabled ) {
	    return;
	  }
	  this.element.disabled = true;
	  this.isEnabled = false;
	};
	
	PrevNextButton.prototype.update = function() {
	  // index of first or last slide, if previous or next
	  var slides = this.parent.slides;
	  // enable is wrapAround and at least 2 slides
	  if ( this.parent.options.wrapAround && slides.length > 1 ) {
	    this.enable();
	    return;
	  }
	  var lastIndex = slides.length ? slides.length - 1 : 0;
	  var boundIndex = this.isPrevious ? 0 : lastIndex;
	  var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
	  this[ method ]();
	};
	
	PrevNextButton.prototype.destroy = function() {
	  this.deactivate();
	};
	
	// -------------------------- Flickity prototype -------------------------- //
	
	utils.extend( Flickity.defaults, {
	  prevNextButtons: true,
	  arrowShape: {
	    x0: 10,
	    x1: 60, y1: 50,
	    x2: 70, y2: 40,
	    x3: 30
	  }
	});
	
	Flickity.createMethods.push('_createPrevNextButtons');
	var proto = Flickity.prototype;
	
	proto._createPrevNextButtons = function() {
	  if ( !this.options.prevNextButtons ) {
	    return;
	  }
	
	  this.prevButton = new PrevNextButton( -1, this );
	  this.nextButton = new PrevNextButton( 1, this );
	
	  this.on( 'activate', this.activatePrevNextButtons );
	};
	
	proto.activatePrevNextButtons = function() {
	  this.prevButton.activate();
	  this.nextButton.activate();
	  this.on( 'deactivate', this.deactivatePrevNextButtons );
	};
	
	proto.deactivatePrevNextButtons = function() {
	  this.prevButton.deactivate();
	  this.nextButton.deactivate();
	  this.off( 'deactivate', this.deactivatePrevNextButtons );
	};
	
	// --------------------------  -------------------------- //
	
	Flickity.PrevNextButton = PrevNextButton;
	
	return Flickity;
	
	}));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Tap listener v2.0.0
	 * listens to taps
	 * MIT license
	 */
	
	/*jshint browser: true, unused: true, undef: true, strict: true */
	
	( function( window, factory ) {
	  // universal module definition
	  /*jshint strict: false*/ /*globals define, module, require */
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(38)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Unipointer ) {
	      return factory( window, Unipointer );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('unipointer')
	    );
	  } else {
	    // browser global
	    window.TapListener = factory(
	      window,
	      window.Unipointer
	    );
	  }
	
	}( window, function factory( window, Unipointer ) {
	
	'use strict';
	
	// --------------------------  TapListener -------------------------- //
	
	function TapListener( elem ) {
	  this.bindTap( elem );
	}
	
	// inherit Unipointer & EventEmitter
	var proto = TapListener.prototype = Object.create( Unipointer.prototype );
	
	/**
	 * bind tap event to element
	 * @param {Element} elem
	 */
	proto.bindTap = function( elem ) {
	  if ( !elem ) {
	    return;
	  }
	  this.unbindTap();
	  this.tapElement = elem;
	  this._bindStartEvent( elem, true );
	};
	
	proto.unbindTap = function() {
	  if ( !this.tapElement ) {
	    return;
	  }
	  this._bindStartEvent( this.tapElement, true );
	  delete this.tapElement;
	};
	
	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerUp = function( event, pointer ) {
	  // ignore emulated mouse up clicks
	  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
	    return;
	  }
	
	  var pointerPoint = Unipointer.getPointerPoint( pointer );
	  var boundingRect = this.tapElement.getBoundingClientRect();
	  var scrollX = window.pageXOffset;
	  var scrollY = window.pageYOffset;
	  // calculate if pointer is inside tapElement
	  var isInside = pointerPoint.x >= boundingRect.left + scrollX &&
	    pointerPoint.x <= boundingRect.right + scrollX &&
	    pointerPoint.y >= boundingRect.top + scrollY &&
	    pointerPoint.y <= boundingRect.bottom + scrollY;
	  // trigger callback if pointer is inside element
	  if ( isInside ) {
	    this.emitEvent( 'tap', [ event, pointer ] );
	  }
	
	  // set flag for emulated clicks 300ms after touchend
	  if ( event.type != 'mouseup' ) {
	    this.isIgnoringMouseUp = true;
	    // reset flag after 300ms
	    var _this = this;
	    setTimeout( function() {
	      delete _this.isIgnoringMouseUp;
	    }, 400 );
	  }
	};
	
	proto.destroy = function() {
	  this.pointerDone();
	  this.unbindTap();
	};
	
	// -----  ----- //
	
	return TapListener;
	
	}));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// page dots
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(28),
	      __webpack_require__(40),
	      __webpack_require__(31)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, TapListener, utils ) {
	      return factory( window, Flickity, TapListener, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('tap-listener'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    factory(
	      window,
	      window.Flickity,
	      window.TapListener,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, Flickity, TapListener, utils ) {
	
	// -------------------------- PageDots -------------------------- //
	
	'use strict';
	
	function PageDots( parent ) {
	  this.parent = parent;
	  this._create();
	}
	
	PageDots.prototype = new TapListener();
	
	PageDots.prototype._create = function() {
	  // create holder element
	  this.holder = document.createElement('ol');
	  this.holder.className = 'flickity-page-dots';
	  // create dots, array of elements
	  this.dots = [];
	  // events
	  this.on( 'tap', this.onTap );
	  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
	};
	
	PageDots.prototype.activate = function() {
	  this.setDots();
	  this.bindTap( this.holder );
	  // add to DOM
	  this.parent.element.appendChild( this.holder );
	};
	
	PageDots.prototype.deactivate = function() {
	  // remove from DOM
	  this.parent.element.removeChild( this.holder );
	  TapListener.prototype.destroy.call( this );
	};
	
	PageDots.prototype.setDots = function() {
	  // get difference between number of slides and number of dots
	  var delta = this.parent.slides.length - this.dots.length;
	  if ( delta > 0 ) {
	    this.addDots( delta );
	  } else if ( delta < 0 ) {
	    this.removeDots( -delta );
	  }
	};
	
	PageDots.prototype.addDots = function( count ) {
	  var fragment = document.createDocumentFragment();
	  var newDots = [];
	  while ( count ) {
	    var dot = document.createElement('li');
	    dot.className = 'dot';
	    fragment.appendChild( dot );
	    newDots.push( dot );
	    count--;
	  }
	  this.holder.appendChild( fragment );
	  this.dots = this.dots.concat( newDots );
	};
	
	PageDots.prototype.removeDots = function( count ) {
	  // remove from this.dots collection
	  var removeDots = this.dots.splice( this.dots.length - count, count );
	  // remove from DOM
	  removeDots.forEach( function( dot ) {
	    this.holder.removeChild( dot );
	  }, this );
	};
	
	PageDots.prototype.updateSelected = function() {
	  // remove selected class on previous
	  if ( this.selectedDot ) {
	    this.selectedDot.className = 'dot';
	  }
	  // don't proceed if no dots
	  if ( !this.dots.length ) {
	    return;
	  }
	  this.selectedDot = this.dots[ this.parent.selectedIndex ];
	  this.selectedDot.className = 'dot is-selected';
	};
	
	PageDots.prototype.onTap = function( event ) {
	  var target = event.target;
	  // only care about dot clicks
	  if ( target.nodeName != 'LI' ) {
	    return;
	  }
	
	  this.parent.uiChange();
	  var index = this.dots.indexOf( target );
	  this.parent.select( index );
	};
	
	PageDots.prototype.destroy = function() {
	  this.deactivate();
	};
	
	Flickity.PageDots = PageDots;
	
	// -------------------------- Flickity -------------------------- //
	
	utils.extend( Flickity.defaults, {
	  pageDots: true
	});
	
	Flickity.createMethods.push('_createPageDots');
	
	var proto = Flickity.prototype;
	
	proto._createPageDots = function() {
	  if ( !this.options.pageDots ) {
	    return;
	  }
	  this.pageDots = new PageDots( this );
	  // events
	  this.on( 'activate', this.activatePageDots );
	  this.on( 'select', this.updateSelectedPageDots );
	  this.on( 'cellChange', this.updatePageDots );
	  this.on( 'resize', this.updatePageDots );
	  this.on( 'deactivate', this.deactivatePageDots );
	};
	
	proto.activatePageDots = function() {
	  this.pageDots.activate();
	};
	
	proto.updateSelectedPageDots = function() {
	  this.pageDots.updateSelected();
	};
	
	proto.updatePageDots = function() {
	  this.pageDots.setDots();
	};
	
	proto.deactivatePageDots = function() {
	  this.pageDots.deactivate();
	};
	
	// -----  ----- //
	
	Flickity.PageDots = PageDots;
	
	return Flickity;
	
	}));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// player & autoPlay
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(29),
	      __webpack_require__(31),
	      __webpack_require__(28)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter, utils, Flickity ) {
	      return factory( EvEmitter, utils, Flickity );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      require('ev-emitter'),
	      require('fizzy-ui-utils'),
	      require('./flickity')
	    );
	  } else {
	    // browser global
	    factory(
	      window.EvEmitter,
	      window.fizzyUIUtils,
	      window.Flickity
	    );
	  }
	
	}( window, function factory( EvEmitter, utils, Flickity ) {
	
	'use strict';
	
	// -------------------------- Page Visibility -------------------------- //
	// https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API
	
	var hiddenProperty, visibilityEvent;
	if ( 'hidden' in document ) {
	  hiddenProperty = 'hidden';
	  visibilityEvent = 'visibilitychange';
	} else if ( 'webkitHidden' in document ) {
	  hiddenProperty = 'webkitHidden';
	  visibilityEvent = 'webkitvisibilitychange';
	}
	
	// -------------------------- Player -------------------------- //
	
	function Player( parent ) {
	  this.parent = parent;
	  this.state = 'stopped';
	  // visibility change event handler
	  if ( visibilityEvent ) {
	    this.onVisibilityChange = function() {
	      this.visibilityChange();
	    }.bind( this );
	    this.onVisibilityPlay = function() {
	      this.visibilityPlay();
	    }.bind( this );
	  }
	}
	
	Player.prototype = Object.create( EvEmitter.prototype );
	
	// start play
	Player.prototype.play = function() {
	  if ( this.state == 'playing' ) {
	    return;
	  }
	  // do not play if page is hidden, start playing when page is visible
	  var isPageHidden = document[ hiddenProperty ];
	  if ( visibilityEvent && isPageHidden ) {
	    document.addEventListener( visibilityEvent, this.onVisibilityPlay );
	    return;
	  }
	
	  this.state = 'playing';
	  // listen to visibility change
	  if ( visibilityEvent ) {
	    document.addEventListener( visibilityEvent, this.onVisibilityChange );
	  }
	  // start ticking
	  this.tick();
	};
	
	Player.prototype.tick = function() {
	  // do not tick if not playing
	  if ( this.state != 'playing' ) {
	    return;
	  }
	
	  var time = this.parent.options.autoPlay;
	  // default to 3 seconds
	  time = typeof time == 'number' ? time : 3000;
	  var _this = this;
	  // HACK: reset ticks if stopped and started within interval
	  this.clear();
	  this.timeout = setTimeout( function() {
	    _this.parent.next( true );
	    _this.tick();
	  }, time );
	};
	
	Player.prototype.stop = function() {
	  this.state = 'stopped';
	  this.clear();
	  // remove visibility change event
	  if ( visibilityEvent ) {
	    document.removeEventListener( visibilityEvent, this.onVisibilityChange );
	  }
	};
	
	Player.prototype.clear = function() {
	  clearTimeout( this.timeout );
	};
	
	Player.prototype.pause = function() {
	  if ( this.state == 'playing' ) {
	    this.state = 'paused';
	    this.clear();
	  }
	};
	
	Player.prototype.unpause = function() {
	  // re-start play if paused
	  if ( this.state == 'paused' ) {
	    this.play();
	  }
	};
	
	// pause if page visibility is hidden, unpause if visible
	Player.prototype.visibilityChange = function() {
	  var isPageHidden = document[ hiddenProperty ];
	  this[ isPageHidden ? 'pause' : 'unpause' ]();
	};
	
	Player.prototype.visibilityPlay = function() {
	  this.play();
	  document.removeEventListener( visibilityEvent, this.onVisibilityPlay );
	};
	
	// -------------------------- Flickity -------------------------- //
	
	utils.extend( Flickity.defaults, {
	  pauseAutoPlayOnHover: true
	});
	
	Flickity.createMethods.push('_createPlayer');
	var proto = Flickity.prototype;
	
	proto._createPlayer = function() {
	  this.player = new Player( this );
	
	  this.on( 'activate', this.activatePlayer );
	  this.on( 'uiChange', this.stopPlayer );
	  this.on( 'pointerDown', this.stopPlayer );
	  this.on( 'deactivate', this.deactivatePlayer );
	};
	
	proto.activatePlayer = function() {
	  if ( !this.options.autoPlay ) {
	    return;
	  }
	  this.player.play();
	  this.element.addEventListener( 'mouseenter', this );
	};
	
	// Player API, don't hate the ... thanks I know where the door is
	
	proto.playPlayer = function() {
	  this.player.play();
	};
	
	proto.stopPlayer = function() {
	  this.player.stop();
	};
	
	proto.pausePlayer = function() {
	  this.player.pause();
	};
	
	proto.unpausePlayer = function() {
	  this.player.unpause();
	};
	
	proto.deactivatePlayer = function() {
	  this.player.stop();
	  this.element.removeEventListener( 'mouseenter', this );
	};
	
	// ----- mouseenter/leave ----- //
	
	// pause auto-play on hover
	proto.onmouseenter = function() {
	  if ( !this.options.pauseAutoPlayOnHover ) {
	    return;
	  }
	  this.player.pause();
	  this.element.addEventListener( 'mouseleave', this );
	};
	
	// resume auto-play on hover off
	proto.onmouseleave = function() {
	  this.player.unpause();
	  this.element.removeEventListener( 'mouseleave', this );
	};
	
	// -----  ----- //
	
	Flickity.Player = Player;
	
	return Flickity;
	
	}));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// add, remove cell
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(28),
	      __webpack_require__(31)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, utils ) {
	      return factory( window, Flickity, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    factory(
	      window,
	      window.Flickity,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, Flickity, utils ) {
	
	'use strict';
	
	// append cells to a document fragment
	function getCellsFragment( cells ) {
	  var fragment = document.createDocumentFragment();
	  cells.forEach( function( cell ) {
	    fragment.appendChild( cell.element );
	  });
	  return fragment;
	}
	
	// -------------------------- add/remove cell prototype -------------------------- //
	
	var proto = Flickity.prototype;
	
	/**
	 * Insert, prepend, or append cells
	 * @param {Element, Array, NodeList} elems
	 * @param {Integer} index
	 */
	proto.insert = function( elems, index ) {
	  var cells = this._makeCells( elems );
	  if ( !cells || !cells.length ) {
	    return;
	  }
	  var len = this.cells.length;
	  // default to append
	  index = index === undefined ? len : index;
	  // add cells with document fragment
	  var fragment = getCellsFragment( cells );
	  // append to slider
	  var isAppend = index == len;
	  if ( isAppend ) {
	    this.slider.appendChild( fragment );
	  } else {
	    var insertCellElement = this.cells[ index ].element;
	    this.slider.insertBefore( fragment, insertCellElement );
	  }
	  // add to this.cells
	  if ( index === 0 ) {
	    // prepend, add to start
	    this.cells = cells.concat( this.cells );
	  } else if ( isAppend ) {
	    // append, add to end
	    this.cells = this.cells.concat( cells );
	  } else {
	    // insert in this.cells
	    var endCells = this.cells.splice( index, len - index );
	    this.cells = this.cells.concat( cells ).concat( endCells );
	  }
	
	  this._sizeCells( cells );
	
	  var selectedIndexDelta = index > this.selectedIndex ? 0 : cells.length;
	  this._cellAddedRemoved( index, selectedIndexDelta );
	};
	
	proto.append = function( elems ) {
	  this.insert( elems, this.cells.length );
	};
	
	proto.prepend = function( elems ) {
	  this.insert( elems, 0 );
	};
	
	/**
	 * Remove cells
	 * @param {Element, Array, NodeList} elems
	 */
	proto.remove = function( elems ) {
	  var cells = this.getCells( elems );
	  var selectedIndexDelta = 0;
	  var len = cells.length;
	  var i, cell;
	  // calculate selectedIndexDelta, easier if done in seperate loop
	  for ( i=0; i < len; i++ ) {
	    cell = cells[i];
	    var wasBefore = this.cells.indexOf( cell ) < this.selectedIndex;
	    selectedIndexDelta -= wasBefore ? 1 : 0;
	  }
	
	  for ( i=0; i < len; i++ ) {
	    cell = cells[i];
	    cell.remove();
	    // remove item from collection
	    utils.removeFrom( this.cells, cell );
	  }
	
	  if ( cells.length ) {
	    // update stuff
	    this._cellAddedRemoved( 0, selectedIndexDelta );
	  }
	};
	
	// updates when cells are added or removed
	proto._cellAddedRemoved = function( changedCellIndex, selectedIndexDelta ) {
	  // TODO this math isn't perfect with grouped slides
	  selectedIndexDelta = selectedIndexDelta || 0;
	  this.selectedIndex += selectedIndexDelta;
	  this.selectedIndex = Math.max( 0, Math.min( this.slides.length - 1, this.selectedIndex ) );
	
	  this.cellChange( changedCellIndex, true );
	  // backwards compatibility
	  this.emitEvent( 'cellAddedRemoved', [ changedCellIndex, selectedIndexDelta ] );
	};
	
	/**
	 * logic to be run after a cell's size changes
	 * @param {Element} elem - cell's element
	 */
	proto.cellSizeChange = function( elem ) {
	  var cell = this.getCell( elem );
	  if ( !cell ) {
	    return;
	  }
	  cell.getSize();
	
	  var index = this.cells.indexOf( cell );
	  this.cellChange( index );
	};
	
	/**
	 * logic any time a cell is changed: added, removed, or size changed
	 * @param {Integer} changedCellIndex - index of the changed cell, optional
	 */
	proto.cellChange = function( changedCellIndex, isPositioningSlider ) {
	  var prevSlideableWidth = this.slideableWidth;
	  this._positionCells( changedCellIndex );
	  this._getWrapShiftCells();
	  this.setGallerySize();
	  this.emitEvent( 'cellChange', [ changedCellIndex ] );
	  // position slider
	  if ( this.options.freeScroll ) {
	    // shift x by change in slideableWidth
	    // TODO fix position shifts when prepending w/ freeScroll
	    var deltaX = prevSlideableWidth - this.slideableWidth;
	    this.x += deltaX * this.cellAlign;
	    this.positionSlider();
	  } else {
	    // do not position slider after lazy load
	    if ( isPositioningSlider ) {
	      this.positionSliderAtSelected();
	    }
	    this.select( this.selectedIndex );
	  }
	};
	
	// -----  ----- //
	
	return Flickity;
	
	}));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// lazyload
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(28),
	      __webpack_require__(31)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, utils ) {
	      return factory( window, Flickity, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    factory(
	      window,
	      window.Flickity,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, Flickity, utils ) {
	'use strict';
	
	Flickity.createMethods.push('_createLazyload');
	var proto = Flickity.prototype;
	
	proto._createLazyload = function() {
	  this.on( 'select', this.lazyLoad );
	};
	
	proto.lazyLoad = function() {
	  var lazyLoad = this.options.lazyLoad;
	  if ( !lazyLoad ) {
	    return;
	  }
	  // get adjacent cells, use lazyLoad option for adjacent count
	  var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
	  var cellElems = this.getAdjacentCellElements( adjCount );
	  // get lazy images in those cells
	  var lazyImages = [];
	  cellElems.forEach( function( cellElem ) {
	    var lazyCellImages = getCellLazyImages( cellElem );
	    lazyImages = lazyImages.concat( lazyCellImages );
	  });
	  // load lazy images
	  lazyImages.forEach( function( img ) {
	    new LazyLoader( img, this );
	  }, this );
	};
	
	function getCellLazyImages( cellElem ) {
	  // check if cell element is lazy image
	  if ( cellElem.nodeName == 'IMG' &&
	    cellElem.getAttribute('data-flickity-lazyload') ) {
	    return [ cellElem ];
	  }
	  // select lazy images in cell
	  var imgs = cellElem.querySelectorAll('img[data-flickity-lazyload]');
	  return utils.makeArray( imgs );
	}
	
	// -------------------------- LazyLoader -------------------------- //
	
	/**
	 * class to handle loading images
	 */
	function LazyLoader( img, flickity ) {
	  this.img = img;
	  this.flickity = flickity;
	  this.load();
	}
	
	LazyLoader.prototype.handleEvent = utils.handleEvent;
	
	LazyLoader.prototype.load = function() {
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  // load image
	  this.img.src = this.img.getAttribute('data-flickity-lazyload');
	  // remove attr
	  this.img.removeAttribute('data-flickity-lazyload');
	};
	
	LazyLoader.prototype.onload = function( event ) {
	  this.complete( event, 'flickity-lazyloaded' );
	};
	
	LazyLoader.prototype.onerror = function( event ) {
	  this.complete( event, 'flickity-lazyerror' );
	};
	
	LazyLoader.prototype.complete = function( event, className ) {
	  // unbind events
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	
	  var cell = this.flickity.getParentCell( this.img );
	  var cellElem = cell && cell.element;
	  this.flickity.cellSizeChange( cellElem );
	
	  this.img.classList.add( className );
	  this.flickity.dispatchEvent( 'lazyLoad', event, cellElem );
	};
	
	// -----  ----- //
	
	Flickity.LazyLoader = LazyLoader;
	
	return Flickity;
	
	}));


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _utilities = __webpack_require__(8);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	}); /* global google */
	
	
	var autocomplete = void 0;
	var componentForm = {
	    street_number: 'short_name',
	    route: 'long_name',
	    locality: 'long_name',
	    administrative_area_level_1: 'short_name',
	    country: 'long_name',
	    postal_code: 'short_name'
	};
	
	var fillInAddress = function fillInAddress() {
	    // Get the place details from the autocomplete object.
	    var placeAddressComponents = autocomplete.getPlace().address_components;
	
	    Object.entries(componentForm).map(function (key) {
	        // eslint-disable-line array-callback-return
	        var formFieldName = key[0];
	        document.getElementById(formFieldName).value = '';
	        document.getElementById(formFieldName).disabled = false;
	    });
	
	    // Get each component of the address from the place details
	    // and fill the corresponding field on the form.
	    placeAddressComponents.map(function (key) {
	        // eslint-disable-line array-callback-return
	        var addressType = key.types[0];
	        if (componentForm[addressType]) {
	            var val = key[componentForm[addressType]];
	            document.getElementById(addressType).value = val;
	        }
	    });
	
	    (0, _utilities.openPanel)(document.getElementById('address'));
	};
	
	var initAutocomplete = function initAutocomplete() {
	    // Create the autocomplete object, restricting the search to geographical
	    // location types.
	    autocomplete = new google.maps.places.Autocomplete(
	    /** @type {!HTMLInputElement} */document.getElementById('autocomplete'), { types: ['geocode'] });
	
	    // When the user selects an address from the dropdown, populate the address
	    // fields in the form.
	    autocomplete.addListener('place_changed', fillInAddress);
	};
	
	// Bias the autocomplete object to the user's geographical location,
	// as supplied by the browser's 'navigator.geolocation' object.
	var geolocate = function geolocate() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(function (position) {
	            var geolocation = {
	                lat: position.coords.latitude,
	                lng: position.coords.longitude
	            };
	            var circle = new google.maps.Circle({
	                center: geolocation,
	                radius: position.coords.accuracy
	            });
	            autocomplete.setBounds(circle.getBounds());
	        });
	    }
	};
	
	exports.initAutocomplete = initAutocomplete;
	exports.fillInAddress = fillInAddress;
	exports.geolocate = geolocate;

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map