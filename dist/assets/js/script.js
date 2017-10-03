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
	
	var _toggleElement = __webpack_require__(7);
	
	var _toggleElement2 = _interopRequireDefault(_toggleElement);
	
	var _accordion = __webpack_require__(8);
	
	var _accordion2 = _interopRequireDefault(_accordion);
	
	var _choicesSelect = __webpack_require__(11);
	
	var _choicesSelect2 = _interopRequireDefault(_choicesSelect);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	dom.whenReady(function () {
	    (0, _moduleLoader2.default)({
	        domModules: (0, _domModuleLoader2.default)({
	            toggleElement: _toggleElement2.default,
	            accordion: _accordion2.default,
	            choicesSelect: _choicesSelect2.default
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
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instances = [];
	var IS_ACTIVE = 'is-active';
	
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
	         * Toggle element depending if already active or not
	         */
	
	    }, {
	        key: 'toggleElement',
	        value: function toggleElement() {
	            if ((0, _domOps.hasClass)(this.element, IS_ACTIVE)) {
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
	            (0, _domOps.addClass)(this.element, IS_ACTIVE);
	        }
	
	        /**
	         * Handle the element closing
	         */
	
	    }, {
	        key: 'closeElement',
	        value: function closeElement() {
	            (0, _domOps.removeClass)(this.element, IS_ACTIVE);
	        }
	
	        /**
	         * Handle the closing of all other elements
	         */
	
	    }, {
	        key: 'closeAllElements',
	        value: function closeAllElements() {
	            this.allElements.forEach(function (el) {
	                (0, _domOps.removeClass)(el, IS_ACTIVE);
	            });
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(9);
	
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
/* 9 */
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
	var Delegate = __webpack_require__(10);
	
	module.exports = function(root) {
	  return new Delegate(root);
	};
	
	module.exports.Delegate = Delegate;


/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _choices = __webpack_require__(12);
	
	var _choices2 = _interopRequireDefault(_choices);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instances = [];
	
	var ChoicesSelect = function () {
	
	    /**
	     * ChoicesSelect constructor.
	     * Wraps `choices.js` for a dynamic and feature rich select dropdown.
	     * Binds to a typical html select dropdown.
	     *
	     * @param {Object} select The select html element to bind to
	     *
	     * @return {void}
	     */
	    function ChoicesSelect(select) {
	        _classCallCheck(this, ChoicesSelect);
	
	        this.select = select;
	
	        var defaultOption = this.select.dataset.default || '';
	        var disabled = this.select.getAttribute('disabled') || false;
	        var _select$dataset = this.select.dataset,
	            containerOuterClass = _select$dataset.containerOuterClass,
	            containerInnerClass = _select$dataset.containerInnerClass;
	
	
	        var options = void 0;
	        try {
	            options = JSON.parse(this.select.dataset.options);
	        } catch (e) {
	            options = [];
	        }
	
	        this.choices = new _choices2.default(this.select, {
	            searchPlaceholderValue: 'Search',
	            searchFields: 'customProperties.description',
	            itemSelectText: '',
	            classNames: {
	                containerOuter: 'choices choices-select ' + (containerOuterClass || ''),
	                containerInner: 'choices__inner ' + (containerInnerClass || ''),
	                openState: 'choices-select--is-open'
	            }
	        });
	
	        this.choices.setChoices(options, 'value', 'label', false);
	        this.choices.setValueByChoice(defaultOption);
	
	        if (disabled) {
	            this.choices.disable();
	        }
	    }
	
	    /**
	     * Destroy the choices instance.
	     *
	     * @return {void}
	     */
	
	
	    _createClass(ChoicesSelect, [{
	        key: 'destroy',
	        value: function destroy() {
	            this.choices.destroy();
	        }
	    }]);
	
	    return ChoicesSelect;
	}();
	
	exports.default = {
	    init: function init(select) {
	        instances.push(new ChoicesSelect(select));
	    },
	    destroy: function destroy() {
	        instances.forEach(function (instance) {
	            return instance.destroy();
	        });
	        instances = [];
	    }
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/*! choices.js v3.0.2 | (c) 2017 Josh Johnson | https://github.com/jshjohnson/Choices#readme */ 
	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Choices=t():e.Choices=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return e[n].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var i={};return t.m=e,t.c=i,t.p="/assets/scripts/dist/",t(0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),c=i(2),l=n(c),h=i(3),u=n(h),d=i(4),f=n(d),p=i(30),v=i(31);i(32);var m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[data-choice]",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r(this,e),(0,v.isType)("String",t)){var n=document.querySelectorAll(t);if(n.length>1)for(var s=1;s<n.length;s++){var o=n[s];new e(o,i)}}var a={silent:!1,items:[],choices:[],renderChoiceLimit:-1,maxItemCount:-1,addItems:!0,removeItems:!0,removeItemButton:!1,editItems:!1,duplicateItems:!0,delimiter:",",paste:!0,searchEnabled:!0,searchChoices:!0,searchFloor:1,searchResultLimit:4,searchFields:["label","value"],position:"auto",resetScrollPosition:!0,regexFilter:null,shouldSort:!0,shouldSortItems:!1,sortFilter:v.sortByAlpha,placeholder:!0,placeholderValue:null,searchPlaceholderValue:null,prependValue:null,appendValue:null,renderSelectedChoices:"auto",loadingText:"Loading...",noResultsText:"No results found",noChoicesText:"No choices to choose from",itemSelectText:"Press to select",addItemText:function(e){return'Press Enter to add <b>"'+e+'"</b>'},maxItemText:function(e){return"Only "+e+" values can be added."},uniqueItemText:"Only unique values can be added.",classNames:{containerOuter:"choices",containerInner:"choices__inner",input:"choices__input",inputCloned:"choices__input--cloned",list:"choices__list",listItems:"choices__list--multiple",listSingle:"choices__list--single",listDropdown:"choices__list--dropdown",item:"choices__item",itemSelectable:"choices__item--selectable",itemDisabled:"choices__item--disabled",itemChoice:"choices__item--choice",placeholder:"choices__placeholder",group:"choices__group",groupHeading:"choices__heading",button:"choices__button",activeState:"is-active",focusState:"is-focused",openState:"is-open",disabledState:"is-disabled",highlightedState:"is-highlighted",hiddenState:"is-hidden",flippedState:"is-flipped",loadingState:"is-loading",noResults:"has-no-results",noChoices:"has-no-choices"},fuseOptions:{include:"score"},callbackOnInit:null,callbackOnCreateTemplates:null};if(this.idNames={itemChoice:"item-choice"},this.config=(0,v.extend)(a,i),"auto"!==this.config.renderSelectedChoices&&"always"!==this.config.renderSelectedChoices&&(this.config.silent||console.warn("renderSelectedChoices: Possible values are 'auto' and 'always'. Falling back to 'auto'."),this.config.renderSelectedChoices="auto"),this.store=new f.default(this.render),this.initialised=!1,this.currentState={},this.prevState={},this.currentValue="",this.element=t,this.passedElement=(0,v.isType)("String",t)?document.querySelector(t):t,!this.passedElement)return void(this.config.silent||console.error("Passed element not found"));this.isTextElement="text"===this.passedElement.type,this.isSelectOneElement="select-one"===this.passedElement.type,this.isSelectMultipleElement="select-multiple"===this.passedElement.type,this.isSelectElement=this.isSelectOneElement||this.isSelectMultipleElement,this.isValidElementType=this.isTextElement||this.isSelectElement,this.isIe11=!(!navigator.userAgent.match(/Trident/)||!navigator.userAgent.match(/rv[ :]11/)),this.isScrollingOnIe=!1,this.config.shouldSortItems===!0&&this.isSelectOneElement&&(this.config.silent||console.warn("shouldSortElements: Type of passed element is 'select-one', falling back to false.")),this.highlightPosition=0,this.canSearch=this.config.searchEnabled,this.placeholder=!1,this.isSelectOneElement||(this.placeholder=!!this.config.placeholder&&(this.config.placeholderValue||this.passedElement.getAttribute("placeholder"))),this.presetChoices=this.config.choices,this.presetItems=this.config.items,this.passedElement.value&&(this.presetItems=this.presetItems.concat(this.passedElement.value.split(this.config.delimiter))),this.baseId=(0,v.generateId)(this.passedElement,"choices-"),this.render=this.render.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onClick=this._onClick.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onMouseOver=this._onMouseOver.bind(this),this._onPaste=this._onPaste.bind(this),this._onInput=this._onInput.bind(this),this.wasTap=!0;var c="classList"in document.documentElement;c||this.config.silent||console.error("Choices: Your browser doesn't support Choices");var l=(0,v.isElement)(this.passedElement)&&this.isValidElementType;if(l){if("active"===this.passedElement.getAttribute("data-choice"))return;this.init()}else this.config.silent||console.error("Incompatible input passed")}return a(e,[{key:"init",value:function(){if(this.initialised!==!0){var e=this.config.callbackOnInit;this.initialised=!0,this._createTemplates(),this._createInput(),this.store.subscribe(this.render),this.render(),this._addEventListeners(),e&&(0,v.isType)("Function",e)&&e.call(this)}}},{key:"destroy",value:function(){if(this.initialised!==!1){this._removeEventListeners(),this.passedElement.classList.remove(this.config.classNames.input,this.config.classNames.hiddenState),this.passedElement.removeAttribute("tabindex");var e=this.passedElement.getAttribute("data-choice-orig-style");Boolean(e)?(this.passedElement.removeAttribute("data-choice-orig-style"),this.passedElement.setAttribute("style",e)):this.passedElement.removeAttribute("style"),this.passedElement.removeAttribute("aria-hidden"),this.passedElement.removeAttribute("data-choice"),this.passedElement.value=this.passedElement.value,this.containerOuter.parentNode.insertBefore(this.passedElement,this.containerOuter),this.containerOuter.parentNode.removeChild(this.containerOuter),this.clearStore(),this.config.templates=null,this.initialised=!1}}},{key:"renderGroups",value:function(e,t,i){var n=this,s=i||document.createDocumentFragment(),o=this.config.sortFilter;return this.config.shouldSort&&e.sort(o),e.forEach(function(e){var i=t.filter(function(t){return n.isSelectOneElement?t.groupId===e.id:t.groupId===e.id&&!t.selected});if(i.length>=1){var o=n._getTemplate("choiceGroup",e);s.appendChild(o),n.renderChoices(i,s,!0)}}),s}},{key:"renderChoices",value:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=t||document.createDocumentFragment(),r=this.config,a=r.renderSelectedChoices,c=r.searchResultLimit,l=r.renderChoiceLimit,h=this.isSearching?v.sortByScore:this.config.sortFilter,u=function(e){var t="auto"!==a||(i.isSelectOneElement||!e.selected);if(t){var n=i._getTemplate("choice",e);s.appendChild(n)}},d=e;"auto"!==a||this.isSelectOneElement||(d=e.filter(function(e){return!e.selected}));var f=d.reduce(function(e,t){return t.placeholder?e.placeholderChoices.push(t):e.normalChoices.push(t),e},{placeholderChoices:[],normalChoices:[]}),p=f.placeholderChoices,m=f.normalChoices;(this.config.shouldSort||this.isSearching)&&m.sort(h);var g=d.length,y=[].concat(o(p),o(m));this.isSearching?g=c:l>0&&!n&&(g=l);for(var b=0;b<g;b++)y[b]&&u(y[b]);return s}},{key:"renderItems",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=i||document.createDocumentFragment();if(this.config.shouldSortItems&&!this.isSelectOneElement&&e.sort(this.config.sortFilter),this.isTextElement){var s=this.store.getItemsReducedToValues(e),o=s.join(this.config.delimiter);this.passedElement.setAttribute("value",o),this.passedElement.value=o}else{var r=document.createDocumentFragment();e.forEach(function(e){var i=t._getTemplate("option",e);r.appendChild(i)}),this.passedElement.innerHTML="",this.passedElement.appendChild(r)}return e.forEach(function(e){var i=t._getTemplate("item",e);n.appendChild(i)}),n}},{key:"render",value:function(){if(this.currentState=this.store.getState(),this.currentState!==this.prevState){if((this.currentState.choices!==this.prevState.choices||this.currentState.groups!==this.prevState.groups||this.currentState.items!==this.prevState.items)&&this.isSelectElement){var e=this.store.getGroupsFilteredByActive(),t=this.store.getChoicesFilteredByActive(),i=document.createDocumentFragment();this.choiceList.innerHTML="",this.config.resetScrollPosition&&(this.choiceList.scrollTop=0),e.length>=1&&this.isSearching!==!0?i=this.renderGroups(e,t,i):t.length>=1&&(i=this.renderChoices(t,i));var n=this.store.getItemsFilteredByActive(),s=this._canAddItem(n,this.input.value);if(i.childNodes&&i.childNodes.length>0)s.response?(this.choiceList.appendChild(i),this._highlightChoice()):this.choiceList.appendChild(this._getTemplate("notice",s.notice));else{var o=void 0,r=void 0;this.isSearching?(r=(0,v.isType)("Function",this.config.noResultsText)?this.config.noResultsText():this.config.noResultsText,o=this._getTemplate("notice",r,"no-results")):(r=(0,v.isType)("Function",this.config.noChoicesText)?this.config.noChoicesText():this.config.noChoicesText,o=this._getTemplate("notice",r,"no-choices")),this.choiceList.appendChild(o)}}if(this.currentState.items!==this.prevState.items){var a=this.store.getItemsFilteredByActive();if(this.itemList.innerHTML="",a&&a){var c=this.renderItems(a);c.childNodes&&this.itemList.appendChild(c)}}this.prevState=this.currentState}}},{key:"highlightItem",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)return this;var i=e.id,n=e.groupId,s=n>=0?this.store.getGroupById(n):null;return this.store.dispatch((0,p.highlightItem)(i,!0)),t&&(s&&s.value?(0,v.triggerEvent)(this.passedElement,"highlightItem",{id:i,value:e.value,label:e.label,groupValue:s.value}):(0,v.triggerEvent)(this.passedElement,"highlightItem",{id:i,value:e.value,label:e.label})),this}},{key:"unhighlightItem",value:function(e){if(!e)return this;var t=e.id,i=e.groupId,n=i>=0?this.store.getGroupById(i):null;return this.store.dispatch((0,p.highlightItem)(t,!1)),n&&n.value?(0,v.triggerEvent)(this.passedElement,"unhighlightItem",{id:t,value:e.value,label:e.label,groupValue:n.value}):(0,v.triggerEvent)(this.passedElement,"unhighlightItem",{id:t,value:e.value,label:e.label}),this}},{key:"highlightAll",value:function(){var e=this,t=this.store.getItems();return t.forEach(function(t){e.highlightItem(t)}),this}},{key:"unhighlightAll",value:function(){var e=this,t=this.store.getItems();return t.forEach(function(t){e.unhighlightItem(t)}),this}},{key:"removeItemsByValue",value:function(e){var t=this;if(!e||!(0,v.isType)("String",e))return this;var i=this.store.getItemsFilteredByActive();return i.forEach(function(i){i.value===e&&t._removeItem(i)}),this}},{key:"removeActiveItems",value:function(e){var t=this,i=this.store.getItemsFilteredByActive();return i.forEach(function(i){i.active&&e!==i.id&&t._removeItem(i)}),this}},{key:"removeHighlightedItems",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.store.getItemsFilteredByActive();return i.forEach(function(i){i.highlighted&&i.active&&(e._removeItem(i),t&&e._triggerChange(i.value))}),this}},{key:"showDropdown",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=document.body,i=document.documentElement,n=Math.max(t.scrollHeight,t.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight);this.containerOuter.classList.add(this.config.classNames.openState),this.containerOuter.setAttribute("aria-expanded","true"),this.dropdown.classList.add(this.config.classNames.activeState),this.dropdown.setAttribute("aria-expanded","true");var s=this.dropdown.getBoundingClientRect(),o=Math.ceil(s.top+window.scrollY+this.dropdown.offsetHeight),r=!1;return"auto"===this.config.position?r=o>=n:"top"===this.config.position&&(r=!0),r&&this.containerOuter.classList.add(this.config.classNames.flippedState),e&&this.canSearch&&document.activeElement!==this.input&&this.input.focus(),(0,v.triggerEvent)(this.passedElement,"showDropdown",{}),this}},{key:"hideDropdown",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.containerOuter.classList.contains(this.config.classNames.flippedState);return this.containerOuter.classList.remove(this.config.classNames.openState),this.containerOuter.setAttribute("aria-expanded","false"),this.dropdown.classList.remove(this.config.classNames.activeState),this.dropdown.setAttribute("aria-expanded","false"),t&&this.containerOuter.classList.remove(this.config.classNames.flippedState),e&&this.canSearch&&document.activeElement===this.input&&this.input.blur(),(0,v.triggerEvent)(this.passedElement,"hideDropdown",{}),this}},{key:"toggleDropdown",value:function(){var e=this.dropdown.classList.contains(this.config.classNames.activeState);return e?this.hideDropdown():this.showDropdown(!0),this}},{key:"getValue",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.store.getItemsFilteredByActive(),n=[];return i.forEach(function(i){e.isTextElement?n.push(t?i.value:i):i.active&&n.push(t?i.value:i)}),this.isSelectOneElement?n[0]:n}},{key:"setValue",value:function(e){var t=this;if(this.initialised===!0){var i=[].concat(o(e)),n=function(e){var i=(0,v.getType)(e);if("Object"===i){if(!e.value)return;t.isTextElement?t._addItem(e.value,e.label,e.id,void 0,e.customProperties,e.placeholder):t._addChoice(e.value,e.label,!0,!1,-1,e.customProperties,e.placeholder)}else"String"===i&&(t.isTextElement?t._addItem(e):t._addChoice(e,e,!0,!1,-1,null))};i.length>1?i.forEach(function(e){n(e)}):n(i[0])}return this}},{key:"setValueByChoice",value:function(e){var t=this;if(!this.isTextElement){var i=this.store.getChoices(),n=(0,v.isType)("Array",e)?e:[e];n.forEach(function(e){var n=i.find(function(t){return t.value===e});n?n.selected?t.config.silent||console.warn("Attempting to select choice already selected"):t._addItem(n.value,n.label,n.id,n.groupId,n.customProperties,n.placeholder,n.keyCode):t.config.silent||console.warn("Attempting to select choice that does not exist")})}return this}},{key:"setChoices",value:function(e,t,i){var n=this,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(this.initialised===!0&&this.isSelectElement){if(!(0,v.isType)("Array",e)||!t)return this;s&&this._clearChoices(),e&&e.length&&(this.containerOuter.classList.remove(this.config.classNames.loadingState),e.forEach(function(e){e.choices?n._addGroup(e,e.id||null,t,i):n._addChoice(e[t],e[i],e.selected,e.disabled,void 0,e.customProperties,e.placeholder)}))}return this}},{key:"clearStore",value:function(){return this.store.dispatch((0,p.clearAll)()),this}},{key:"clearInput",value:function(){return this.input.value&&(this.input.value=""),this.isSelectOneElement||this._setInputWidth(),!this.isTextElement&&this.config.searchEnabled&&(this.isSearching=!1,this.store.dispatch((0,p.activateChoices)(!0))),this}},{key:"enable",value:function(){if(this.initialised){this.passedElement.disabled=!1;var e=this.containerOuter.classList.contains(this.config.classNames.disabledState);e&&(this._addEventListeners(),this.passedElement.removeAttribute("disabled"),this.input.removeAttribute("disabled"),this.containerOuter.classList.remove(this.config.classNames.disabledState),this.containerOuter.removeAttribute("aria-disabled"),this.isSelectOneElement&&this.containerOuter.setAttribute("tabindex","0"))}return this}},{key:"disable",value:function(){if(this.initialised){this.passedElement.disabled=!0;var e=!this.containerOuter.classList.contains(this.config.classNames.disabledState);e&&(this._removeEventListeners(),this.passedElement.setAttribute("disabled",""),this.input.setAttribute("disabled",""),this.containerOuter.classList.add(this.config.classNames.disabledState),this.containerOuter.setAttribute("aria-disabled","true"),this.isSelectOneElement&&this.containerOuter.setAttribute("tabindex","-1"))}return this}},{key:"ajax",value:function(e){var t=this;return this.initialised===!0&&this.isSelectElement&&(requestAnimationFrame(function(){t._handleLoadingState(!0)}),e(this._ajaxCallback())),this}},{key:"_triggerChange",value:function(e){e&&(0,v.triggerEvent)(this.passedElement,"change",{value:e})}},{key:"_handleButtonAction",value:function(e,t){if(e&&t&&this.config.removeItems&&this.config.removeItemButton){var i=t.parentNode.getAttribute("data-id"),n=e.find(function(e){return e.id===parseInt(i,10)});this._removeItem(n),this._triggerChange(n.value),this.isSelectOneElement&&this._selectPlaceholderChoice()}}},{key:"_selectPlaceholderChoice",value:function(){var e=this.store.getPlaceholderChoice();e&&(this._addItem(e.value,e.label,e.id,e.groupId,null,e.placeholder),this._triggerChange(e.value))}},{key:"_handleItemAction",value:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e&&t&&this.config.removeItems&&!this.isSelectOneElement){var s=t.getAttribute("data-id");e.forEach(function(e){e.id!==parseInt(s,10)||e.highlighted?n||e.highlighted&&i.unhighlightItem(e):i.highlightItem(e)}),document.activeElement!==this.input&&this.input.focus()}}},{key:"_handleChoiceAction",value:function(e,t){if(e&&t){var i=t.getAttribute("data-id"),n=this.store.getChoiceById(i),s=e[0]&&e[0].keyCode?e[0].keyCode:null,o=this.dropdown.classList.contains(this.config.classNames.activeState);if(n.keyCode=s,(0,v.triggerEvent)(this.passedElement,"choice",{choice:n}),n&&!n.selected&&!n.disabled){var r=this._canAddItem(e,n.value);r.response&&(this._addItem(n.value,n.label,n.id,n.groupId,n.customProperties,n.placeholder,n.keyCode),this._triggerChange(n.value))}this.clearInput(),o&&this.isSelectOneElement&&(this.hideDropdown(),this.containerOuter.focus())}}},{key:"_handleBackspace",value:function(e){if(this.config.removeItems&&e){var t=e[e.length-1],i=e.some(function(e){return e.highlighted});this.config.editItems&&!i&&t?(this.input.value=t.value,this._setInputWidth(),this._removeItem(t),this._triggerChange(t.value)):(i||this.highlightItem(t,!1),this.removeHighlightedItems(!0))}}},{key:"_canAddItem",value:function(e,t){var i=!0,n=(0,v.isType)("Function",this.config.addItemText)?this.config.addItemText(t):this.config.addItemText;(this.isSelectMultipleElement||this.isTextElement)&&this.config.maxItemCount>0&&this.config.maxItemCount<=e.length&&(i=!1,n=(0,v.isType)("Function",this.config.maxItemText)?this.config.maxItemText(this.config.maxItemCount):this.config.maxItemText),this.isTextElement&&this.config.addItems&&i&&this.config.regexFilter&&(i=this._regexFilter(t));var s=!e.some(function(e){return(0,v.isType)("String",t)?e.value===t.trim():e.value===t});return s||this.config.duplicateItems||this.isSelectOneElement||!i||(i=!1,n=(0,v.isType)("Function",this.config.uniqueItemText)?this.config.uniqueItemText(t):this.config.uniqueItemText),{response:i,notice:n}}},{key:"_handleLoadingState",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.itemList.querySelector("."+this.config.classNames.placeholder);e?(this.containerOuter.classList.add(this.config.classNames.loadingState),this.containerOuter.setAttribute("aria-busy","true"),this.isSelectOneElement?t?t.innerHTML=this.config.loadingText:(t=this._getTemplate("placeholder",this.config.loadingText),this.itemList.appendChild(t)):this.input.placeholder=this.config.loadingText):(this.containerOuter.classList.remove(this.config.classNames.loadingState),this.isSelectOneElement?t.innerHTML=this.placeholder||"":this.input.placeholder=this.placeholder||"")}},{key:"_ajaxCallback",value:function(){var e=this;return function(t,i,n){if(t&&i){var s=(0,v.isType)("Object",t)?[t]:t;s&&(0,v.isType)("Array",s)&&s.length?(e._handleLoadingState(!1),s.forEach(function(t){if(t.choices){var s=t.id||null;e._addGroup(t,s,i,n)}else e._addChoice(t[i],t[n],t.selected,t.disabled,void 0,t.customProperties,t.placeholder)}),e.isSelectOneElement&&e._selectPlaceholderChoice()):e._handleLoadingState(!1),e.containerOuter.removeAttribute("aria-busy")}}}},{key:"_searchChoices",value:function(e){var t=(0,v.isType)("String",e)?e.trim():e,i=(0,v.isType)("String",this.currentValue)?this.currentValue.trim():this.currentValue;if(t.length>=1&&t!==i+" "){var n=this.store.getSearchableChoices(),s=t,o=(0,v.isType)("Array",this.config.searchFields)?this.config.searchFields:[this.config.searchFields],r=Object.assign(this.config.fuseOptions,{keys:o}),a=new l.default(n,r),c=a.search(s);return this.currentValue=t,this.highlightPosition=0,this.isSearching=!0,this.store.dispatch((0,p.filterChoices)(c)),c.length}return 0}},{key:"_handleSearch",value:function(e){if(e){var t=this.store.getChoices(),i=t.some(function(e){return!e.active});if(this.input===document.activeElement)if(e&&e.length>=this.config.searchFloor){var n=0;this.config.searchChoices&&(n=this._searchChoices(e)),(0,v.triggerEvent)(this.passedElement,"search",{value:e,resultCount:n})}else i&&(this.isSearching=!1,this.store.dispatch((0,p.activateChoices)(!0)))}}},{key:"_addEventListeners",value:function(){document.addEventListener("keyup",this._onKeyUp),document.addEventListener("keydown",this._onKeyDown),document.addEventListener("click",this._onClick),document.addEventListener("touchmove",this._onTouchMove),document.addEventListener("touchend",this._onTouchEnd),document.addEventListener("mousedown",this._onMouseDown),document.addEventListener("mouseover",this._onMouseOver),this.isSelectOneElement&&(this.containerOuter.addEventListener("focus",this._onFocus),this.containerOuter.addEventListener("blur",this._onBlur)),this.input.addEventListener("input",this._onInput),this.input.addEventListener("paste",this._onPaste),this.input.addEventListener("focus",this._onFocus),this.input.addEventListener("blur",this._onBlur)}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("keydown",this._onKeyDown),document.removeEventListener("click",this._onClick),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("mousedown",this._onMouseDown),document.removeEventListener("mouseover",this._onMouseOver),this.isSelectOneElement&&(this.containerOuter.removeEventListener("focus",this._onFocus),this.containerOuter.removeEventListener("blur",this._onBlur)),this.input.removeEventListener("input",this._onInput),this.input.removeEventListener("paste",this._onPaste),this.input.removeEventListener("focus",this._onFocus),this.input.removeEventListener("blur",this._onBlur)}},{key:"_setInputWidth",value:function(){this.placeholder?this.input.value&&this.input.value.length>=this.placeholder.length/1.25&&(this.input.style.width=(0,v.getWidthOfInput)(this.input)):this.input.style.width=(0,v.getWidthOfInput)(this.input)}},{key:"_onKeyDown",value:function(e){var t,i=this;if(e.target===this.input||this.containerOuter.contains(e.target)){var n=e.target,o=this.store.getItemsFilteredByActive(),r=this.input===document.activeElement,a=this.dropdown.classList.contains(this.config.classNames.activeState),c=this.itemList&&this.itemList.children,l=String.fromCharCode(e.keyCode),h=46,u=8,d=13,f=65,p=27,m=38,g=40,y=33,b=34,E=e.ctrlKey||e.metaKey;this.isTextElement||!/[a-zA-Z0-9-_ ]/.test(l)||a||this.showDropdown(!0),this.canSearch=this.config.searchEnabled;var _=function(){E&&c&&(i.canSearch=!1,i.config.removeItems&&!i.input.value&&i.input===document.activeElement&&i.highlightAll())},S=function(){if(i.isTextElement&&n.value){var t=i.input.value,s=i._canAddItem(o,t);s.response&&(a&&i.hideDropdown(),i._addItem(t),i._triggerChange(t),i.clearInput())}if(n.hasAttribute("data-button")&&(i._handleButtonAction(o,n),e.preventDefault()),a){e.preventDefault();var r=i.dropdown.querySelector("."+i.config.classNames.highlightedState);r&&(o[0]&&(o[0].keyCode=d),i._handleChoiceAction(o,r))}else i.isSelectOneElement&&(a||(i.showDropdown(!0),e.preventDefault()))},I=function(){a&&(i.toggleDropdown(),i.containerOuter.focus())},w=function(){if(a||i.isSelectOneElement){a||i.showDropdown(!0),i.canSearch=!1;var t=e.keyCode===g||e.keyCode===b?1:-1,n=e.metaKey||e.keyCode===b||e.keyCode===y,s=void 0;if(n)s=t>0?Array.from(i.dropdown.querySelectorAll("[data-choice-selectable]")).pop():i.dropdown.querySelector("[data-choice-selectable]");else{var o=i.dropdown.querySelector("."+i.config.classNames.highlightedState);s=o?(0,v.getAdjacentEl)(o,"[data-choice-selectable]",t):i.dropdown.querySelector("[data-choice-selectable]")}s&&((0,v.isScrolledIntoView)(s,i.choiceList,t)||i._scrollToChoice(s,t),i._highlightChoice(s)),e.preventDefault()}},T=function(){!r||e.target.value||i.isSelectOneElement||(i._handleBackspace(o),e.preventDefault())},C=(t={},s(t,f,_),s(t,d,S),s(t,p,I),s(t,m,w),s(t,y,w),s(t,g,w),s(t,b,w),s(t,u,T),s(t,h,T),t);C[e.keyCode]&&C[e.keyCode]()}}},{key:"_onKeyUp",value:function(e){if(e.target===this.input){var t=this.input.value,i=this.store.getItemsFilteredByActive(),n=this._canAddItem(i,t);if(this.isTextElement){var s=this.dropdown.classList.contains(this.config.classNames.activeState);if(t){if(n.notice){var o=this._getTemplate("notice",n.notice);this.dropdown.innerHTML=o.outerHTML}n.response===!0?s||this.showDropdown():!n.notice&&s&&this.hideDropdown()}else s&&this.hideDropdown()}else{var r=46,a=8;e.keyCode!==r&&e.keyCode!==a||e.target.value?this.canSearch&&n.response&&this._handleSearch(this.input.value):!this.isTextElement&&this.isSearching&&(this.isSearching=!1,this.store.dispatch((0,p.activateChoices)(!0)))}this.canSearch=this.config.searchEnabled}}},{key:"_onInput",value:function(){this.isSelectOneElement||this._setInputWidth()}},{key:"_onTouchMove",value:function(){this.wasTap===!0&&(this.wasTap=!1)}},{key:"_onTouchEnd",value:function(e){var t=e.target||e.touches[0].target,i=this.dropdown.classList.contains(this.config.classNames.activeState);this.wasTap===!0&&this.containerOuter.contains(t)&&(t!==this.containerOuter&&t!==this.containerInner||this.isSelectOneElement||(this.isTextElement?document.activeElement!==this.input&&this.input.focus():i||this.showDropdown(!0)),e.stopPropagation()),this.wasTap=!0}},{key:"_onMouseDown",value:function(e){var t=e.target;if(t===this.choiceList&&this.isIe11&&(this.isScrollingOnIe=!0),this.containerOuter.contains(t)&&t!==this.input){var i=void 0,n=this.store.getItemsFilteredByActive(),s=e.shiftKey;(i=(0,v.findAncestorByAttrName)(t,"data-button"))?this._handleButtonAction(n,i):(i=(0,v.findAncestorByAttrName)(t,"data-item"))?this._handleItemAction(n,i,s):(i=(0,v.findAncestorByAttrName)(t,"data-choice"))&&this._handleChoiceAction(n,i),e.preventDefault()}}},{key:"_onClick",value:function(e){var t=e.target,i=this.dropdown.classList.contains(this.config.classNames.activeState),n=this.store.getItemsFilteredByActive();if(this.containerOuter.contains(t))t.hasAttribute("data-button")&&this._handleButtonAction(n,t),i?this.isSelectOneElement&&t!==this.input&&!this.dropdown.contains(t)&&this.hideDropdown(!0):this.isTextElement?document.activeElement!==this.input&&this.input.focus():this.canSearch?this.showDropdown(!0):(this.showDropdown(),this.containerOuter.focus());else{var s=n.some(function(e){return e.highlighted});s&&this.unhighlightAll(),this.containerOuter.classList.remove(this.config.classNames.focusState),i&&this.hideDropdown()}}},{key:"_onMouseOver",value:function(e){(e.target===this.dropdown||this.dropdown.contains(e.target))&&e.target.hasAttribute("data-choice")&&this._highlightChoice(e.target)}},{key:"_onPaste",value:function(e){e.target!==this.input||this.config.paste||e.preventDefault()}},{key:"_onFocus",value:function(e){var t=this,i=e.target;if(this.containerOuter.contains(i)){var n=this.dropdown.classList.contains(this.config.classNames.activeState),s={text:function(){i===t.input&&t.containerOuter.classList.add(t.config.classNames.focusState)},"select-one":function(){t.containerOuter.classList.add(t.config.classNames.focusState),i===t.input&&(n||t.showDropdown())},"select-multiple":function(){i===t.input&&(t.containerOuter.classList.add(t.config.classNames.focusState),n||t.showDropdown(!0))}};s[this.passedElement.type]()}}},{key:"_onBlur",value:function(e){var t=this,i=e.target;if(this.containerOuter.contains(i)&&!this.isScrollingOnIe){var n=this.store.getItemsFilteredByActive(),s=this.dropdown.classList.contains(this.config.classNames.activeState),o=n.some(function(e){return e.highlighted}),r={text:function(){i===t.input&&(t.containerOuter.classList.remove(t.config.classNames.focusState),o&&t.unhighlightAll(),s&&t.hideDropdown())},"select-one":function(){t.containerOuter.classList.remove(t.config.classNames.focusState),i===t.containerOuter&&s&&!t.canSearch&&t.hideDropdown(),i===t.input&&s&&t.hideDropdown()},"select-multiple":function(){i===t.input&&(t.containerOuter.classList.remove(t.config.classNames.focusState),s&&t.hideDropdown(),o&&t.unhighlightAll())}};r[this.passedElement.type]()}else this.isScrollingOnIe=!1,this.input.focus()}},{key:"_regexFilter",value:function(e){if(!e)return!1;var t=this.config.regexFilter,i=new RegExp(t.source,"i");return i.test(e)}},{key:"_scrollToChoice",value:function(e,t){var i=this;if(e){var n=this.choiceList.offsetHeight,s=e.offsetHeight,o=e.offsetTop+s,r=this.choiceList.scrollTop+n,a=t>0?this.choiceList.scrollTop+o-r:e.offsetTop,c=function e(){var n=4,s=i.choiceList.scrollTop,o=!1,r=void 0,c=void 0;t>0?(r=(a-s)/n,c=r>1?r:1,i.choiceList.scrollTop=s+c,s<a&&(o=!0)):(r=(s-a)/n,c=r>1?r:1,i.choiceList.scrollTop=s-c,s>a&&(o=!0)),o&&requestAnimationFrame(function(i){e(i,a,t)})};requestAnimationFrame(function(e){c(e,a,t)})}}},{key:"_highlightChoice",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=Array.from(this.dropdown.querySelectorAll("[data-choice-selectable]")),n=t;if(i&&i.length){var s=Array.from(this.dropdown.querySelectorAll("."+this.config.classNames.highlightedState));s.forEach(function(t){t.classList.remove(e.config.classNames.highlightedState),t.setAttribute("aria-selected","false")}),n?this.highlightPosition=i.indexOf(n):(n=i.length>this.highlightPosition?i[this.highlightPosition]:i[i.length-1],n||(n=i[0])),n.classList.add(this.config.classNames.highlightedState),n.setAttribute("aria-selected","true"),this.containerOuter.setAttribute("aria-activedescendant",n.id)}}},{key:"_addItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,a=(0,v.isType)("String",e)?e.trim():e,c=r,l=this.store.getItems(),h=t||a,u=parseInt(i,10)||-1,d=n>=0?this.store.getGroupById(n):null,f=l?l.length+1:1;return this.config.prependValue&&(a=this.config.prependValue+a.toString()),this.config.appendValue&&(a+=this.config.appendValue.toString()),this.store.dispatch((0,p.addItem)(a,h,f,u,n,s,o,c)),this.isSelectOneElement&&this.removeActiveItems(f),d&&d.value?(0,v.triggerEvent)(this.passedElement,"addItem",{
	id:f,value:a,label:h,groupValue:d.value,keyCode:c}):(0,v.triggerEvent)(this.passedElement,"addItem",{id:f,value:a,label:h,keyCode:c}),this}},{key:"_removeItem",value:function(e){if(!e||!(0,v.isType)("Object",e))return this;var t=e.id,i=e.value,n=e.label,s=e.choiceId,o=e.groupId,r=o>=0?this.store.getGroupById(o):null;return this.store.dispatch((0,p.removeItem)(t,s)),r&&r.value?(0,v.triggerEvent)(this.passedElement,"removeItem",{id:t,value:i,label:n,groupValue:r.value}):(0,v.triggerEvent)(this.passedElement,"removeItem",{id:t,value:i,label:n}),this}},{key:"_addChoice",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,r=arguments.length>6&&void 0!==arguments[6]&&arguments[6],a=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;if("undefined"!=typeof e&&null!==e){var c=this.store.getChoices(),l=t||e,h=c?c.length+1:1,u=this.baseId+"-"+this.idNames.itemChoice+"-"+h;this.store.dispatch((0,p.addChoice)(e,l,h,s,n,u,o,r,a)),i&&this._addItem(e,l,h,void 0,o,r,a)}}},{key:"_clearChoices",value:function(){this.store.dispatch((0,p.clearChoices)())}},{key:"_addGroup",value:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"label",o=(0,v.isType)("Object",e)?e.choices:Array.from(e.getElementsByTagName("OPTION")),r=t?t:Math.floor((new Date).valueOf()*Math.random()),a=!!e.disabled&&e.disabled;o?(this.store.dispatch((0,p.addGroup)(e.label,r,!0,a)),o.forEach(function(e){var t=e.disabled||e.parentNode&&e.parentNode.disabled;i._addChoice(e[n],(0,v.isType)("Object",e)?e[s]:e.innerHTML,e.selected,t,r,e.customProperties,e.placeholder)})):this.store.dispatch((0,p.addGroup)(e.label,e.id,!1,e.disabled))}},{key:"_getTemplate",value:function(e){if(!e)return null;for(var t=this.config.templates,i=arguments.length,n=Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];return t[e].apply(t,n)}},{key:"_createTemplates",value:function(){var e=this,t=this.config.classNames,i={containerOuter:function(i){return(0,v.strToEl)('\n          <div\n            class="'+t.containerOuter+'"\n            '+(e.isSelectElement?e.config.searchEnabled?'role="combobox" aria-autocomplete="list"':'role="listbox"':"")+'\n            data-type="'+e.passedElement.type+'"\n            '+(e.isSelectOneElement?'tabindex="0"':"")+'\n            aria-haspopup="true"\n            aria-expanded="false"\n            dir="'+i+'"\n            >\n          </div>\n        ')},containerInner:function(){return(0,v.strToEl)('\n          <div class="'+t.containerInner+'"></div>\n        ')},itemList:function(){var i,n=(0,u.default)(t.list,(i={},s(i,t.listSingle,e.isSelectOneElement),s(i,t.listItems,!e.isSelectOneElement),i));return(0,v.strToEl)('\n          <div class="'+n+'"></div>\n        ')},placeholder:function(e){return(0,v.strToEl)('\n          <div class="'+t.placeholder+'">\n            '+e+"\n          </div>\n        ")},item:function(i){var n,o=(0,u.default)(t.item,(n={},s(n,t.highlightedState,i.highlighted),s(n,t.itemSelectable,!i.highlighted),s(n,t.placeholder,i.placeholder),n));if(e.config.removeItemButton){var r;return o=(0,u.default)(t.item,(r={},s(r,t.highlightedState,i.highlighted),s(r,t.itemSelectable,!i.disabled),s(r,t.placeholder,i.placeholder),r)),(0,v.strToEl)('\n            <div\n              class="'+o+'"\n              data-item\n              data-id="'+i.id+'"\n              data-value="'+i.value+'"\n              data-deletable\n              '+(i.active?'aria-selected="true"':"")+"\n              "+(i.disabled?'aria-disabled="true"':"")+"\n              >\n              "+i.label+'<!--\n           --><button\n                type="button"\n                class="'+t.button+'"\n                data-button\n                aria-label="Remove item: \''+i.value+"'\"\n                >\n                Remove item\n              </button>\n            </div>\n          ")}return(0,v.strToEl)('\n          <div\n            class="'+o+'"\n            data-item\n            data-id="'+i.id+'"\n            data-value="'+i.value+'"\n            '+(i.active?'aria-selected="true"':"")+"\n            "+(i.disabled?'aria-disabled="true"':"")+"\n            >\n            "+i.label+"\n          </div>\n        ")},choiceList:function(){return(0,v.strToEl)('\n          <div\n            class="'+t.list+'"\n            dir="ltr"\n            role="listbox"\n            '+(e.isSelectOneElement?"":'aria-multiselectable="true"')+"\n            >\n          </div>\n        ")},choiceGroup:function(e){var i=(0,u.default)(t.group,s({},t.itemDisabled,e.disabled));return(0,v.strToEl)('\n          <div\n            class="'+i+'"\n            data-group\n            data-id="'+e.id+'"\n            data-value="'+e.value+'"\n            role="group"\n            '+(e.disabled?'aria-disabled="true"':"")+'\n            >\n            <div class="'+t.groupHeading+'">'+e.value+"</div>\n          </div>\n        ")},choice:function(i){var n,o=(0,u.default)(t.item,t.itemChoice,(n={},s(n,t.itemDisabled,i.disabled),s(n,t.itemSelectable,!i.disabled),s(n,t.placeholder,i.placeholder),n));return(0,v.strToEl)('\n          <div\n            class="'+o+'"\n            data-select-text="'+e.config.itemSelectText+'"\n            data-choice\n            data-id="'+i.id+'"\n            data-value="'+i.value+'"\n            '+(i.disabled?'data-choice-disabled aria-disabled="true"':"data-choice-selectable")+'\n            id="'+i.elementId+'"\n            '+(i.groupId>0?'role="treeitem"':'role="option"')+"\n            >\n            "+i.label+"\n          </div>\n        ")},input:function(){var e=(0,u.default)(t.input,t.inputCloned);return(0,v.strToEl)('\n          <input\n            type="text"\n            class="'+e+'"\n            autocomplete="off"\n            autocapitalize="off"\n            spellcheck="false"\n            role="textbox"\n            aria-autocomplete="list"\n            >\n        ')},dropdown:function(){var e=(0,u.default)(t.list,t.listDropdown);return(0,v.strToEl)('\n          <div\n            class="'+e+'"\n            aria-expanded="false"\n            >\n          </div>\n        ')},notice:function(e){var i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=(0,u.default)(t.item,t.itemChoice,(i={},s(i,t.noResults,"no-results"===n),s(i,t.noChoices,"no-choices"===n),i));return(0,v.strToEl)('\n          <div class="'+o+'">\n            '+e+"\n          </div>\n        ")},option:function(e){return(0,v.strToEl)('\n          <option value="'+e.value+'" selected>'+e.label+"</option>\n        ")}},n=this.config.callbackOnCreateTemplates,o={};n&&(0,v.isType)("Function",n)&&(o=n.call(this,v.strToEl)),this.config.templates=(0,v.extend)(i,o)}},{key:"_createInput",value:function(){var e=this,t=this.passedElement.getAttribute("dir")||"ltr",i=this._getTemplate("containerOuter",t),n=this._getTemplate("containerInner"),s=this._getTemplate("itemList"),o=this._getTemplate("choiceList"),r=this._getTemplate("input"),a=this._getTemplate("dropdown");this.containerOuter=i,this.containerInner=n,this.input=r,this.choiceList=o,this.itemList=s,this.dropdown=a,this.passedElement.classList.add(this.config.classNames.input,this.config.classNames.hiddenState),this.passedElement.tabIndex="-1";var c=this.passedElement.getAttribute("style");if(Boolean(c)&&this.passedElement.setAttribute("data-choice-orig-style",c),this.passedElement.setAttribute("style","display:none;"),this.passedElement.setAttribute("aria-hidden","true"),this.passedElement.setAttribute("data-choice","active"),(0,v.wrap)(this.passedElement,n),(0,v.wrap)(n,i),this.isSelectOneElement?r.placeholder=this.config.searchPlaceholderValue||"":this.placeholder&&(r.placeholder=this.placeholder,r.style.width=(0,v.getWidthOfInput)(r)),this.config.addItems||this.disable(),i.appendChild(n),i.appendChild(a),n.appendChild(s),this.isTextElement||a.appendChild(o),this.isSelectMultipleElement||this.isTextElement?n.appendChild(r):this.canSearch&&a.insertBefore(r,a.firstChild),this.isSelectElement){var l=Array.from(this.passedElement.getElementsByTagName("OPTGROUP"));if(this.highlightPosition=0,this.isSearching=!1,l&&l.length)l.forEach(function(t){e._addGroup(t,t.id||null)});else{var h=Array.from(this.passedElement.options),u=this.config.sortFilter,d=this.presetChoices;h.forEach(function(e){d.push({value:e.value,label:e.innerHTML,selected:e.selected,disabled:e.disabled||e.parentNode.disabled,placeholder:e.hasAttribute("placeholder")})}),this.config.shouldSort&&d.sort(u);var f=d.some(function(e){return e.selected});d.forEach(function(t,i){if(e.isSelectOneElement){var n=f||!f&&i>0;e._addChoice(t.value,t.label,!n||t.selected,!!n&&t.disabled,void 0,t.customProperties,t.placeholder)}else e._addChoice(t.value,t.label,t.selected,t.disabled,void 0,t.customProperties,t.placeholder)})}}else this.isTextElement&&this.presetItems.forEach(function(t){var i=(0,v.getType)(t);if("Object"===i){if(!t.value)return;e._addItem(t.value,t.label,t.id,void 0,t.customProperties,t.placeholder)}else"String"===i&&e._addItem(t)})}}]),e}();e.exports=m},function(e,t,i){!function(t){"use strict";function i(){console.log.apply(console,arguments)}function n(e,t){var i;this.list=e,this.options=t=t||{};for(i in a)a.hasOwnProperty(i)&&("boolean"==typeof a[i]?this.options[i]=i in t?t[i]:a[i]:this.options[i]=t[i]||a[i])}function s(e,t,i){var n,r,a,c,l,h;if(t){if(a=t.indexOf("."),a!==-1?(n=t.slice(0,a),r=t.slice(a+1)):n=t,c=e[n],null!==c&&void 0!==c)if(r||"string"!=typeof c&&"number"!=typeof c)if(o(c))for(l=0,h=c.length;l<h;l++)s(c[l],r,i);else r&&s(c,r,i);else i.push(c)}else i.push(e);return i}function o(e){return"[object Array]"===Object.prototype.toString.call(e)}function r(e,t){t=t||{},this.options=t,this.options.location=t.location||r.defaultOptions.location,this.options.distance="distance"in t?t.distance:r.defaultOptions.distance,this.options.threshold="threshold"in t?t.threshold:r.defaultOptions.threshold,this.options.maxPatternLength=t.maxPatternLength||r.defaultOptions.maxPatternLength,this.pattern=t.caseSensitive?e:e.toLowerCase(),this.patternLen=e.length,this.patternLen<=this.options.maxPatternLength&&(this.matchmask=1<<this.patternLen-1,this.patternAlphabet=this._calculatePatternAlphabet())}var a={id:null,caseSensitive:!1,include:[],shouldSort:!0,searchFn:r,sortFn:function(e,t){return e.score-t.score},getFn:s,keys:[],verbose:!1,tokenize:!1,matchAllTokens:!1,tokenSeparator:/ +/g,minMatchCharLength:1,findAllMatches:!1};n.VERSION="2.7.3",n.prototype.set=function(e){return this.list=e,e},n.prototype.search=function(e){this.options.verbose&&i("\nSearch term:",e,"\n"),this.pattern=e,this.results=[],this.resultMap={},this._keyMap=null,this._prepareSearchers(),this._startSearch(),this._computeScore(),this._sort();var t=this._format();return t},n.prototype._prepareSearchers=function(){var e=this.options,t=this.pattern,i=e.searchFn,n=t.split(e.tokenSeparator),s=0,o=n.length;if(this.options.tokenize)for(this.tokenSearchers=[];s<o;s++)this.tokenSearchers.push(new i(n[s],e));this.fullSeacher=new i(t,e)},n.prototype._startSearch=function(){var e,t,i,n,s=this.options,o=s.getFn,r=this.list,a=r.length,c=this.options.keys,l=c.length,h=null;if("string"==typeof r[0])for(i=0;i<a;i++)this._analyze("",r[i],i,i);else for(this._keyMap={},i=0;i<a;i++)for(h=r[i],n=0;n<l;n++){if(e=c[n],"string"!=typeof e){if(t=1-e.weight||1,this._keyMap[e.name]={weight:t},e.weight<=0||e.weight>1)throw new Error("Key weight has to be > 0 and <= 1");e=e.name}else this._keyMap[e]={weight:1};this._analyze(e,o(h,e,[]),h,i)}},n.prototype._analyze=function(e,t,n,s){var r,a,c,l,h,u,d,f,p,v,m,g,y,b,E,_=this.options,S=!1;if(void 0!==t&&null!==t){a=[];var I=0;if("string"==typeof t){if(r=t.split(_.tokenSeparator),_.verbose&&i("---------\nKey:",e),this.options.tokenize){for(b=0;b<this.tokenSearchers.length;b++){for(f=this.tokenSearchers[b],_.verbose&&i("Pattern:",f.pattern),p=[],g=!1,E=0;E<r.length;E++){v=r[E],m=f.search(v);var w={};m.isMatch?(w[v]=m.score,S=!0,g=!0,a.push(m.score)):(w[v]=1,this.options.matchAllTokens||a.push(1)),p.push(w)}g&&I++,_.verbose&&i("Token scores:",p)}for(l=a[0],u=a.length,b=1;b<u;b++)l+=a[b];l/=u,_.verbose&&i("Token score average:",l)}d=this.fullSeacher.search(t),_.verbose&&i("Full text score:",d.score),h=d.score,void 0!==l&&(h=(h+l)/2),_.verbose&&i("Score average:",h),y=!this.options.tokenize||!this.options.matchAllTokens||I>=this.tokenSearchers.length,_.verbose&&i("Check Matches",y),(S||d.isMatch)&&y&&(c=this.resultMap[s],c?c.output.push({key:e,score:h,matchedIndices:d.matchedIndices}):(this.resultMap[s]={item:n,output:[{key:e,score:h,matchedIndices:d.matchedIndices}]},this.results.push(this.resultMap[s])))}else if(o(t))for(b=0;b<t.length;b++)this._analyze(e,t[b],n,s)}},n.prototype._computeScore=function(){var e,t,n,s,o,r,a,c,l,h=this._keyMap,u=this.results;for(this.options.verbose&&i("\n\nComputing score:\n"),e=0;e<u.length;e++){for(n=0,s=u[e].output,o=s.length,c=1,t=0;t<o;t++)r=s[t].score,a=h?h[s[t].key].weight:1,l=r*a,1!==a?c=Math.min(c,l):(n+=l,s[t].nScore=l);1===c?u[e].score=n/o:u[e].score=c,this.options.verbose&&i(u[e])}},n.prototype._sort=function(){var e=this.options;e.shouldSort&&(e.verbose&&i("\n\nSorting...."),this.results.sort(e.sortFn))},n.prototype._format=function(){var e,t,n,s,o=this.options,r=o.getFn,a=[],c=this.results,l=o.include;for(o.verbose&&i("\n\nOutput:\n\n",c),n=o.id?function(e){c[e].item=r(c[e].item,o.id,[])[0]}:function(){},s=function(e){var t,i,n,s,o,r=c[e];if(l.length>0){if(t={item:r.item},l.indexOf("matches")!==-1)for(n=r.output,t.matches=[],i=0;i<n.length;i++)s=n[i],o={indices:s.matchedIndices},s.key&&(o.key=s.key),t.matches.push(o);l.indexOf("score")!==-1&&(t.score=c[e].score)}else t=r.item;return t},e=0,t=c.length;e<t;e++)n(e),a.push(s(e));return a},r.defaultOptions={location:0,distance:100,threshold:.6,maxPatternLength:32},r.prototype._calculatePatternAlphabet=function(){var e={},t=0;for(t=0;t<this.patternLen;t++)e[this.pattern.charAt(t)]=0;for(t=0;t<this.patternLen;t++)e[this.pattern.charAt(t)]|=1<<this.pattern.length-t-1;return e},r.prototype._bitapScore=function(e,t){var i=e/this.patternLen,n=Math.abs(this.options.location-t);return this.options.distance?i+n/this.options.distance:n?1:i},r.prototype.search=function(e){var t,i,n,s,o,r,a,c,l,h,u,d,f,p,v,m,g,y,b,E,_,S,I,w=this.options;if(e=w.caseSensitive?e:e.toLowerCase(),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};if(this.patternLen>w.maxPatternLength){if(y=e.match(new RegExp(this.pattern.replace(w.tokenSeparator,"|"))),b=!!y)for(_=[],t=0,S=y.length;t<S;t++)I=y[t],_.push([e.indexOf(I),I.length-1]);return{isMatch:b,score:b?.5:1,matchedIndices:_}}for(s=w.findAllMatches,o=w.location,n=e.length,r=w.threshold,a=e.indexOf(this.pattern,o),E=[],t=0;t<n;t++)E[t]=0;for(a!=-1&&(r=Math.min(this._bitapScore(0,a),r),a=e.lastIndexOf(this.pattern,o+this.patternLen),a!=-1&&(r=Math.min(this._bitapScore(0,a),r))),a=-1,m=1,g=[],h=this.patternLen+n,t=0;t<this.patternLen;t++){for(c=0,l=h;c<l;)this._bitapScore(t,o+l)<=r?c=l:h=l,l=Math.floor((h-c)/2+c);for(h=l,u=Math.max(1,o-l+1),d=s?n:Math.min(o+l,n)+this.patternLen,f=Array(d+2),f[d+1]=(1<<t)-1,i=d;i>=u;i--)if(v=this.patternAlphabet[e.charAt(i-1)],v&&(E[i-1]=1),f[i]=(f[i+1]<<1|1)&v,0!==t&&(f[i]|=(p[i+1]|p[i])<<1|1|p[i+1]),f[i]&this.matchmask&&(m=this._bitapScore(t,i-1),m<=r)){if(r=m,a=i-1,g.push(a),a<=o)break;u=Math.max(1,2*o-a)}if(this._bitapScore(t+1,o)>r)break;p=f}return _=this._getMatchedIndices(E),{isMatch:a>=0,score:0===m?.001:m,matchedIndices:_}},r.prototype._getMatchedIndices=function(e){for(var t,i=[],n=-1,s=-1,o=0,r=e.length;o<r;o++)t=e[o],t&&n===-1?n=o:t||n===-1||(s=o-1,s-n+1>=this.options.minMatchCharLength&&i.push([n,s]),n=-1);return e[o-1]&&o-1-n+1>=this.options.minMatchCharLength&&i.push([n,o-1]),i},e.exports=n}(this)},function(e,t,i){var n,s;!function(){"use strict";function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n))e.push(i.apply(null,n));else if("object"===s)for(var r in n)o.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=i:(n=[],s=function(){return i}.apply(t,n),!(void 0!==s&&(e.exports=s)))}()},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=i(5),c=i(26),l=n(c),h=function(){function e(){o(this,e),this.store=(0,a.createStore)(l.default,window.devToolsExtension?window.devToolsExtension():void 0)}return r(e,[{key:"getState",value:function(){return this.store.getState()}},{key:"dispatch",value:function(e){this.store.dispatch(e)}},{key:"subscribe",value:function(e){this.store.subscribe(e)}},{key:"getItems",value:function(){var e=this.store.getState();return e.items}},{key:"getItemsFilteredByActive",value:function(){var e=this.getItems(),t=e.filter(function(e){return e.active===!0},[]);return t}},{key:"getItemsReducedToValues",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getItems(),t=e.reduce(function(e,t){return e.push(t.value),e},[]);return t}},{key:"getChoices",value:function(){var e=this.store.getState();return e.choices}},{key:"getChoicesFilteredByActive",value:function(){var e=this.getChoices(),t=e.filter(function(e){return e.active===!0});return t}},{key:"getChoicesFilteredBySelectable",value:function(){var e=this.getChoices(),t=e.filter(function(e){return e.disabled!==!0});return t}},{key:"getSearchableChoices",value:function(){var e=this.getChoicesFilteredBySelectable();return e.filter(function(e){return e.placeholder!==!0})}},{key:"getChoiceById",value:function(e){if(e){var t=this.getChoicesFilteredByActive(),i=t.find(function(t){return t.id===parseInt(e,10)});return i}return!1}},{key:"getGroups",value:function(){var e=this.store.getState();return e.groups}},{key:"getGroupsFilteredByActive",value:function(){var e=this.getGroups(),t=this.getChoices(),i=e.filter(function(e){var i=e.active===!0&&e.disabled===!1,n=t.some(function(e){return e.active===!0&&e.disabled===!1});return i&&n},[]);return i}},{key:"getGroupById",value:function(e){var t=this.getGroups(),i=t.find(function(t){return t.id===e});return i}},{key:"getPlaceholderChoice",value:function(){var e=this.getChoices(),t=[].concat(s(e)).reverse().find(function(e){return e.placeholder===!0});return t}}]),e}();t.default=h,e.exports=h},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var s=i(6),o=n(s),r=i(21),a=n(r),c=i(23),l=n(c),h=i(24),u=n(h),d=i(25),f=n(d),p=i(22);n(p);t.createStore=o.default,t.combineReducers=a.default,t.bindActionCreators=l.default,t.applyMiddleware=u.default,t.compose=f.default},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t,i){function n(){g===m&&(g=m.slice())}function o(){return v}function a(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return n(),g.push(e),function(){if(t){t=!1,n();var i=g.indexOf(e);g.splice(i,1)}}}function h(e){if(!(0,r.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(y)throw new Error("Reducers may not dispatch actions.");try{y=!0,v=p(v,e)}finally{y=!1}for(var t=m=g,i=0;i<t.length;i++)t[i]();return e}function u(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");p=e,h({type:l.INIT})}function d(){var e,t=a;return e={subscribe:function(e){function i(){e.next&&e.next(o())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");i();var n=t(i);return{unsubscribe:n}}},e[c.default]=function(){return this},e}var f;if("function"==typeof t&&"undefined"==typeof i&&(i=t,t=void 0),"undefined"!=typeof i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(s)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var p=e,v=t,m=[],g=m,y=!1;return h({type:l.INIT}),f={dispatch:h,subscribe:a,getState:o,replaceReducer:u},f[c.default]=d,f}t.__esModule=!0,t.ActionTypes=void 0,t.default=s;var o=i(7),r=n(o),a=i(17),c=n(a),l=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t,i){function n(e){if(!r(e)||s(e)!=a)return!1;var t=o(e);if(null===t)return!0;var i=u.call(t,"constructor")&&t.constructor;return"function"==typeof i&&i instanceof i&&h.call(i)==d}var s=i(8),o=i(14),r=i(16),a="[object Object]",c=Function.prototype,l=Object.prototype,h=c.toString,u=l.hasOwnProperty,d=h.call(Object);e.exports=n},function(e,t,i){function n(e){return null==e?void 0===e?c:a:l&&l in Object(e)?o(e):r(e)}var s=i(9),o=i(12),r=i(13),a="[object Null]",c="[object Undefined]",l=s?s.toStringTag:void 0;e.exports=n},function(e,t,i){var n=i(10),s=n.Symbol;e.exports=s},function(e,t,i){var n=i(11),s="object"==typeof self&&self&&self.Object===Object&&self,o=n||s||Function("return this")();e.exports=o},function(e,t){(function(t){var i="object"==typeof t&&t&&t.Object===Object&&t;e.exports=i}).call(t,function(){return this}())},function(e,t,i){function n(e){var t=r.call(e,c),i=e[c];try{e[c]=void 0;var n=!0}catch(e){}var s=a.call(e);return n&&(t?e[c]=i:delete e[c]),s}var s=i(9),o=Object.prototype,r=o.hasOwnProperty,a=o.toString,c=s?s.toStringTag:void 0;e.exports=n},function(e,t){function i(e){return s.call(e)}var n=Object.prototype,s=n.toString;e.exports=i},function(e,t,i){var n=i(15),s=n(Object.getPrototypeOf,Object);e.exports=s},function(e,t){function i(e,t){return function(i){return e(t(i))}}e.exports=i},function(e,t){function i(e){return null!=e&&"object"==typeof e}e.exports=i},function(e,t,i){e.exports=i(18)},function(e,t,i){(function(e,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,r=i(20),a=s(r);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof e?e:n;var c=(0,a.default)(o);t.default=c}).call(t,function(){return this}(),i(19)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t){"use strict";function i(e){var t,i=e.Symbol;return"function"==typeof i?i.observable?t=i.observable:(t=i("observable"),i.observable=t):t="@@observable",t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var i=t&&t.type,n=i&&'"'+i.toString()+'"'||"an action";return"Given action "+n+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function o(e){Object.keys(e).forEach(function(t){var i=e[t],n=i(void 0,{type:a.ActionTypes.INIT});if("undefined"==typeof n)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var s="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof i(void 0,{type:s}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function r(e){for(var t=Object.keys(e),i={},n=0;n<t.length;n++){var r=t[n];"function"==typeof e[r]&&(i[r]=e[r])}var a,c=Object.keys(i);try{o(i)}catch(e){a=e}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];if(a)throw a;for(var n=!1,o={},r=0;r<c.length;r++){var l=c[r],h=i[l],u=e[l],d=h(u,t);if("undefined"==typeof d){var f=s(l,t);throw new Error(f)}o[l]=d,n=n||d!==u}return n?o:e}}t.__esModule=!0,t.default=r;var a=i(6),c=i(7),l=(n(c),i(22));n(l)},function(e,t){"use strict";function i(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}t.__esModule=!0,t.default=i},function(e,t){"use strict";function i(e,t){return function(){return t(e.apply(void 0,arguments))}}function n(e,t){if("function"==typeof e)return i(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),s={},o=0;o<n.length;o++){var r=n[o],a=e[r];"function"==typeof a&&(s[r]=i(a,t))}return s}t.__esModule=!0,t.default=n},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return function(i,n,s){var r=e(i,n,s),c=r.dispatch,l=[],h={getState:r.getState,dispatch:function(e){return c(e)}};return l=t.map(function(e){return e(h)}),c=a.default.apply(void 0,l)(r.dispatch),o({},r,{dispatch:c})}}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=s;var r=i(25),a=n(r)},function(e,t){"use strict";function i(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];var n=t[t.length-1],s=t.slice(0,-1);return function(){return s.reduceRight(function(e,t){return t(e)},n.apply(void 0,arguments))}}t.__esModule=!0,t.default=i},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(5),o=i(27),r=n(o),a=i(28),c=n(a),l=i(29),h=n(l),u=(0,s.combineReducers)({items:r.default,groups:c.default,choices:h.default}),d=function(e,t){var i=e;return"CLEAR_ALL"===t.type&&(i=void 0),u(i,t)};t.default=d},function(e,t){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_ITEM":var n=[].concat(i(e),[{id:t.id,choiceId:t.choiceId,groupId:t.groupId,value:t.value,label:t.label,active:!0,highlighted:!1,customProperties:t.customProperties,placeholder:t.placeholder||!1,keyCode:null}]);return n.map(function(e){return e.highlighted&&(e.highlighted=!1),e});case"REMOVE_ITEM":return e.map(function(e){return e.id===t.id&&(e.active=!1),e});case"HIGHLIGHT_ITEM":return e.map(function(e){return e.id===t.id&&(e.highlighted=t.highlighted),e});default:return e}};t.default=n},function(e,t){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_GROUP":return[].concat(i(e),[{id:t.id,value:t.value,active:t.active,disabled:t.disabled}]);case"CLEAR_CHOICES":return e.groups=[];default:return e}};t.default=n},function(e,t){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_CHOICE":return[].concat(i(e),[{id:t.id,elementId:t.elementId,groupId:t.groupId,value:t.value,label:t.label||t.value,disabled:t.disabled||!1,selected:!1,active:!0,score:9999,customProperties:t.customProperties,placeholder:t.placeholder||!1,keyCode:null}]);case"ADD_ITEM":var n=e;return t.activateOptions&&(n=e.map(function(e){return e.active=t.active,e})),t.choiceId>-1&&(n=e.map(function(e){return e.id===parseInt(t.choiceId,10)&&(e.selected=!0),e})),n;case"REMOVE_ITEM":return t.choiceId>-1?e.map(function(e){return e.id===parseInt(t.choiceId,10)&&(e.selected=!1),e}):e;case"FILTER_CHOICES":var s=t.results,o=e.map(function(e){return e.active=s.some(function(t){return t.item.id===e.id&&(e.score=t.score,!0)}),e});return o;case"ACTIVATE_CHOICES":return e.map(function(e){return e.active=t.active,e});case"CLEAR_CHOICES":return e.choices=[];default:return e}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addItem=function(e,t,i,n,s,o,r,a){return{type:"ADD_ITEM",value:e,label:t,id:i,choiceId:n,groupId:s,customProperties:o,placeholder:r,keyCode:a}},t.removeItem=function(e,t){return{type:"REMOVE_ITEM",id:e,choiceId:t}},t.highlightItem=function(e,t){return{type:"HIGHLIGHT_ITEM",id:e,highlighted:t}},t.addChoice=function(e,t,i,n,s,o,r,a,c){return{type:"ADD_CHOICE",value:e,label:t,id:i,groupId:n,disabled:s,elementId:o,customProperties:r,placeholder:a,keyCode:c}},t.filterChoices=function(e){return{type:"FILTER_CHOICES",results:e}},t.activateChoices=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:"ACTIVATE_CHOICES",active:e}},t.clearChoices=function(){return{type:"CLEAR_CHOICES"}},t.addGroup=function(e,t,i,n){return{type:"ADD_GROUP",value:e,id:t,active:i,disabled:n}},t.clearAll=function(){return{type:"CLEAR_ALL"}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=(t.capitalise=function(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})},t.generateChars=function(e){for(var t="",i=0;i<e;i++){var n=a(0,36);t+=n.toString(36)}return t}),s=(t.generateId=function(e,t){var i=e.id||e.name&&e.name+"-"+n(2)||n(4);return i=i.replace(/(:|\.|\[|\]|,)/g,""),i=t+i},t.getType=function(e){return Object.prototype.toString.call(e).slice(8,-1)}),o=t.isType=function(e,t){var i=s(t);return void 0!==t&&null!==t&&i===e},r=(t.isNode=function(e){return"object"===("undefined"==typeof Node?"undefined":i(Node))?e instanceof Node:e&&"object"===("undefined"==typeof e?"undefined":i(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},t.isElement=function(e){return"object"===("undefined"==typeof HTMLElement?"undefined":i(HTMLElement))?e instanceof HTMLElement:e&&"object"===("undefined"==typeof e?"undefined":i(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName},t.extend=function e(){for(var t={},i=arguments.length,n=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o("Object",i[n])?t[n]=e(!0,t[n],i[n]):t[n]=i[n])},s=0;s<i;s++){var r=arguments[s];o("Object",r)&&n(r)}return t},t.whichTransitionEvent=function(){var e,t=document.createElement("fakeelement"),i={transition:"transitionend",
	OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]},t.whichAnimationEvent=function(){var e,t=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}),a=(t.getParentsUntil=function(e,t,i){for(var n=[];e&&e!==document;e=e.parentNode){if(t){var s=t.charAt(0);if("."===s&&e.classList.contains(t.substr(1)))break;if("#"===s&&e.id===t.substr(1))break;if("["===s&&e.hasAttribute(t.substr(1,t.length-1)))break;if(e.tagName.toLowerCase()===t)break}if(i){var o=i.charAt(0);"."===o&&e.classList.contains(i.substr(1))&&n.push(e),"#"===o&&e.id===i.substr(1)&&n.push(e),"["===o&&e.hasAttribute(i.substr(1,i.length-1))&&n.push(e),e.tagName.toLowerCase()===i&&n.push(e)}else n.push(e)}return 0===n.length?null:n},t.wrap=function(e,t){return t=t||document.createElement("div"),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t.appendChild(e)},t.getSiblings=function(e){for(var t=[],i=e.parentNode.firstChild;i;i=i.nextSibling)1===i.nodeType&&i!==e&&t.push(i);return t},t.findAncestor=function(e,t){for(;(e=e.parentElement)&&!e.classList.contains(t););return e},t.findAncestorByAttrName=function(e,t){for(var i=e;i;){if(i.hasAttribute(t))return i;i=i.parentElement}return null},t.debounce=function(e,t,i){var n;return function(){var s=this,o=arguments,r=function(){n=null,i||e.apply(s,o)},a=i&&!n;clearTimeout(n),n=setTimeout(r,t),a&&e.apply(s,o)}},t.getElemDistance=function(e){var t=0;if(e.offsetParent)do t+=e.offsetTop,e=e.offsetParent;while(e);return t>=0?t:0},t.getElementOffset=function(e,t){var i=t;return i>1&&(i=1),i>0&&(i=0),Math.max(e.offsetHeight*i)},t.getAdjacentEl=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e&&t){var n=e.parentNode.parentNode,s=Array.from(n.querySelectorAll(t)),o=s.indexOf(e),r=i>0?1:-1;return s[o+r]}},t.getScrollPosition=function(e){return"bottom"===e?Math.max((window.scrollY||window.pageYOffset)+(window.innerHeight||document.documentElement.clientHeight)):window.scrollY||window.pageYOffset},t.isInView=function(e,t,i){return this.getScrollPosition(t)>this.getElemDistance(e)+this.getElementOffset(e,i)},t.isScrolledIntoView=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e){var n=void 0;return n=i>0?t.scrollTop+t.offsetHeight>=e.offsetTop+e.offsetHeight:e.offsetTop>=t.scrollTop}},t.stripHTML=function(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""},t.addAnimation=function(e,t){var i=r(),n=function n(){e.classList.remove(t),e.removeEventListener(i,n,!1)};e.classList.add(t),e.addEventListener(i,n,!1)},t.getRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e)+e)}),c=t.strToEl=function(){var e=document.createElement("div");return function(t){var i=t.trim(),n=void 0;for(e.innerHTML=i,n=e.children[0];e.firstChild;)e.removeChild(e.firstChild);return n}}();t.getWidthOfInput=function(e){var t=e.value||e.placeholder,i=e.offsetWidth;if(t){var n=c("<span>"+t+"</span>");if(n.style.position="absolute",n.style.padding="0",n.style.top="-9999px",n.style.left="-9999px",n.style.width="auto",n.style.whiteSpace="pre",document.body.contains(e)&&window.getComputedStyle){var s=window.getComputedStyle(e);s&&(n.style.fontSize=s.fontSize,n.style.fontFamily=s.fontFamily,n.style.fontWeight=s.fontWeight,n.style.fontStyle=s.fontStyle,n.style.letterSpacing=s.letterSpacing,n.style.textTransform=s.textTransform,n.style.padding=s.padding)}document.body.appendChild(n),t&&n.offsetWidth!==e.offsetWidth&&(i=n.offsetWidth+4),document.body.removeChild(n)}return i+"px"},t.sortByAlpha=function(e,t){var i=(e.label||e.value).toLowerCase(),n=(t.label||t.value).toLowerCase();return i<n?-1:i>n?1:0},t.sortByScore=function(e,t){return e.score-t.score},t.triggerEvent=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0});return e.dispatchEvent(n)}},function(e,t){"use strict";!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}Array.from||(Array.from=function(){var e=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},i=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},n=Math.pow(2,53)-1,s=function(e){var t=i(e);return Math.min(Math.max(t,0),n)};return function(e){var i=this,n=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var o,r=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof r){if(!t(r))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(o=arguments[2])}for(var a,c=s(n.length),l=t(i)?Object(new i(c)):new Array(c),h=0;h<c;)a=n[h],r?l[h]="undefined"==typeof o?r(a,h):r.call(o,a,h):l[h]=a,h+=1;return l.length=c,l}}()),Array.prototype.find||(Array.prototype.find=function(e){if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,i=Object(this),n=i.length>>>0,s=arguments[1],o=0;o<n;o++)if(t=i[o],e.call(s,t,o,i))return t}),e.prototype=window.Event.prototype,window.CustomEvent=e}()}])});
	//# sourceMappingURL=choices.min.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map