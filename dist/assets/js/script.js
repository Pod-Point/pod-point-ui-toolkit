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
	
	var _accordion = __webpack_require__(23);
	
	var _accordion2 = _interopRequireDefault(_accordion);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	dom.whenReady(function () {
	    (0, _moduleLoader2.default)({
	        formFields: _formFields2.default,
	        domModules: (0, _domModuleLoader2.default)({
	            modal: _modal2.default,
	            ajaxForm: _ajaxForm2.default,
	            toggleAccordionPanel: _toggleAccordionPanel2.default,
	            toggleElement: _toggleElement2.default,
	            accordion: _accordion2.default
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
	        this.closeButton = this.modal.querySelector('.modal__close');
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

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map