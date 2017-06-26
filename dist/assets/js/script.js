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
	
	var _moduleLoader = __webpack_require__(1);
	
	var _moduleLoader2 = _interopRequireDefault(_moduleLoader);
	
	var _domModuleLoader = __webpack_require__(3);
	
	var _domModuleLoader2 = _interopRequireDefault(_domModuleLoader);
	
	var _domOps = __webpack_require__(4);
	
	var dom = _interopRequireWildcard(_domOps);
	
	__webpack_require__(5);
	
	var _modal = __webpack_require__(6);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _ajaxForm = __webpack_require__(10);
	
	var _ajaxForm2 = _interopRequireDefault(_ajaxForm);
	
	var _formFields = __webpack_require__(18);
	
	var _formFields2 = _interopRequireDefault(_formFields);
	
	var _toggleAccordionPanel = __webpack_require__(19);
	
	var _toggleAccordionPanel2 = _interopRequireDefault(_toggleAccordionPanel);
	
	var _toggleElement = __webpack_require__(20);
	
	var _toggleElement2 = _interopRequireDefault(_toggleElement);
	
	var _gallerySimple = __webpack_require__(21);
	
	var _gallerySimple2 = _interopRequireDefault(_gallerySimple);
	
	var _accordion = __webpack_require__(22);
	
	var _accordion2 = _interopRequireDefault(_accordion);
	
	var _headerNav = __webpack_require__(23);
	
	var _headerNav2 = _interopRequireDefault(_headerNav);
	
	var _carousel = __webpack_require__(24);
	
	var _carousel2 = _interopRequireDefault(_carousel);
	
	var _flipCounter = __webpack_require__(43);
	
	var _flipCounter2 = _interopRequireDefault(_flipCounter);
	
	var _evMap = __webpack_require__(45);
	
	var _evMap2 = _interopRequireDefault(_evMap);
	
	var _addressLookup = __webpack_require__(50);
	
	var addressLookup = _interopRequireWildcard(_addressLookup);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(51);
	
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
	            addressLookup: addressLookup,
	            flipCounter: _flipCounter2.default,
	            evMap: _evMap2.default
	        })
	    });
	});
	
	// function debounce(callback, wait, context = this) {
	//     let timeout = null;
	//     let callbackArgs = null;
	//     const later = () => callback.apply(context, callbackArgs);
	
	//     return () => {
	//         callbackArgs = arguments;
	//         clearTimeout(timeout);
	//         timeout = setTimeout(later, wait);
	//     };
	// }
	// const handleResize = debounce((e) => {
	//     loadModules();
	// }, 100);
	
	// window.addEventListener('resize', handleResize)

/***/ }),
/* 1 */
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
	
	var _podPointUtils = __webpack_require__(2);
	
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
/* 2 */
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
/* 3 */
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
	
	var _podPointDomOps = __webpack_require__(4);
	
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
/* 4 */
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
	    var root = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];
	
	    var selection = root.querySelectorAll(selector);
	
	    return selection.length ? selection : null;
	}
	
	function selectFirst(selector) {
	    var root = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];
	
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
	    var tag = arguments.length <= 0 || arguments[0] === undefined ? 'div' : arguments[0];
	
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
	    if (document.readyState != 'loading') {
	        callback();
	    } else {
	        document.addEventListener('DOMContentLoaded', callback);
	    }
	}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _domOps = __webpack_require__(4);
	
	var defineSizeAndDevice = function defineSizeAndDevice() {
	    window.isTouchDevice = 'ontouchstart' in document.documentElement;
	    var winWidthMedium = 800;
	    var winWidth = window.innerWidth;
	    window.isMobileSize = winWidth < winWidthMedium;
	    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	    var isIE10 = document.body.style.msTouchAction != undefined;
	    window.onload = function () {
	        if (window.isTouchDevice) {
	            (0, _domOps.addClass)(document.body, 'is-touch');
	        } else {
	            (0, _domOps.addClass)(document.body, 'is-desktop');
	        }
	        if (isIE11 || isIE10) {
	            (0, _domOps.addClass)(document.documentElement, 'ie');
	        }
	    };
	};
	
	defineSizeAndDevice();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(7);
	
	var _domOps = __webpack_require__(4);
	
	var _utilities = __webpack_require__(9);
	
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
	
	            this.openListener = new _domDelegate.Delegate(this.openButton);
	
	            this.openListener.on('click', function () {
	                _this.openModal();
	            });
	
	            this.closeListener = new _domDelegate.Delegate(this.closeButton);
	
	            this.closeListener.on('click', function (event) {
	                event.preventDefault();
	                _this.closeModal();
	            });
	
	            this.overlayListener = new _domDelegate.Delegate(this.modal);
	
	            this.overlayListener.on('click', function (event) {
	                if (event.target === _this.modal) {
	                    _this.closeModal();
	                }
	            });
	
	            this.windowListener = new _domDelegate.Delegate(document.body);
	
	            this.windowListener.on('keyup', function (event) {
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
/* 7 */
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
	var Delegate = __webpack_require__(8);
	
	module.exports = function(root) {
	  return new Delegate(root);
	};
	
	module.exports.Delegate = Delegate;


/***/ }),
/* 8 */
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
/* 9 */
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
	
	var _domOps = __webpack_require__(4);
	
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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(7);
	
	var _superagent = __webpack_require__(11);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	var _progressButton = __webpack_require__(17);
	
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Emitter = __webpack_require__(12);
	var reduce = __webpack_require__(13);
	var requestBase = __webpack_require__(14);
	var isObject = __webpack_require__(15);
	
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
	
	var request = module.exports = __webpack_require__(16).bind(null, Request);
	
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
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module of mixed-in functions shared between node and client code
	 */
	var isObject = __webpack_require__(15);
	
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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domOps = __webpack_require__(4);
	
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(7);
	
	var _domOps = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HAS_CONTENT = 'has-content';
	var HAS_ERROR = 'has-error';
	var HAS_FOCUS = 'has-focus';
	
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
	            var inputs = (0, _domOps.nodesToArray)((0, _domOps.select)('input'));
	
	            if (inputs.length) {
	                inputs.forEach(function (input) {
	                    return FormFields.checkForContent(input);
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
	        key: 'checkForErrors',
	        value: function checkForErrors(element) {
	            (0, _domOps.removeClass)(FormFields.getInputContainer(element), HAS_ERROR);
	        }
	    }, {
	        key: 'bindEvents',
	        value: function bindEvents(root) {
	            var listener = new _domDelegate.Delegate(root);
	
	            // Listen to change because of password managers etc
	            listener.on('change', 'input, textarea', function (event, element) {
	                FormFields.checkForContent(element);
	                FormFields.checkForErrors(element);
	                FormFields.giveFocus(element);
	            });
	
	            // Text input focus handler
	            listener.on('focus', 'input, textarea', function (event, element) {
	                return FormFields.giveFocus(element);
	            });
	
	            // Text input focusout handler
	            listener.on('focusout', 'input, textarea', function (event, element) {
	                FormFields.checkForContent(element);
	                FormFields.checkForErrors(element);
	                FormFields.removeFocus(element);
	            });
	
	            listener.on('input', 'textarea', function (event, element) {
	                var scrollHeight = element.scrollHeight;
	                var formEl = element;
	
	                if (scrollHeight > parseInt(window.getComputedStyle(formEl, null).height, 0)) {
	                    formEl.style.height = scrollHeight + 'px';
	                }
	            });
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(7);
	
	var _domOps = __webpack_require__(4);
	
	var _utilities = __webpack_require__(9);
	
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(7);
	
	var _domOps = __webpack_require__(4);
	
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
	
	            this.toggleListeners = [];
	            this.toggleButtons.forEach(function (toggleButton) {
	                var toggleListener = new _domDelegate.Delegate(toggleButton);
	                _this.toggleListeners.push(toggleListener);
	                toggleListener.on('click', function (event) {
	                    event.preventDefault();
	                    _this.toggleElement();
	                });
	            });
	
	            this.openListeners = [];
	            this.openButtons.forEach(function (openButton) {
	                var openListener = new _domDelegate.Delegate(openButton);
	                _this.openListeners.push(openListener);
	                openListener.on('click', function (event) {
	                    event.preventDefault();
	                    _this.openElement();
	                });
	            });
	
	            this.closeListeners = [];
	            this.closeButtons.forEach(function (closeButton) {
	                var closeListener = new _domDelegate.Delegate(closeButton);
	                _this.closeListeners.push(closeListener);
	                closeListener.on('click', function (event) {
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(7);
	
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
	            var firstThumbnail = this.element.querySelector('.gallery-simple__thumbnails li a');
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
	
	            this.listener.on('click', 'li a', function (event, thumbnail) {
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domDelegate = __webpack_require__(7);
	
	var _domOps = __webpack_require__(4);
	
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
	
	            if (this.accordionIsMobileOnly && window.isMobileSize || this.accordionIsMobileOnly !== true) {
	                this.listener.on('click', 'dt', function (event, element) {
	                    _this.toggleAccordion(element);
	                });
	            }
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
	                (0, _domOps.addClass)(element.closest('dt'), IS_OPEN);
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _domOps = __webpack_require__(4);
	
	var _domDelegate = __webpack_require__(7);
	
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
	
	            this.navListener.on('click', '.has-sub-nav > a', function (event, clickedElement) {
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
	            var subNavLi = clickedElement.closest('li');
	            var subNavIsOpen = clickedElement.closest('.has-sub-nav.sub-nav-open');
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _flickity = __webpack_require__(25);
	
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Flickity v2.0.7
	 * Touch, responsive, flickable carousels
	 *
	 * Licensed GPLv3 for open source use
	 * or Flickity Commercial License for commercial use
	 *
	 * http://flickity.metafizzy.co
	 * Copyright 2016 Metafizzy
	 */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(26),
	      __webpack_require__(34),
	      __webpack_require__(37),
	      __webpack_require__(39),
	      __webpack_require__(40),
	      __webpack_require__(41),
	      __webpack_require__(42)
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity main
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(27),
	      __webpack_require__(28),
	      __webpack_require__(29),
	      __webpack_require__(31),
	      __webpack_require__(32),
	      __webpack_require__(33)
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
/* 27 */
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
	  var i = 0;
	  var listener = listeners[i];
	  args = args || [];
	  // once stuff
	  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];
	
	  while ( listener ) {
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
	    // get next listener
	    i += isOnce ? 0 : 1;
	    listener = listeners[i];
	  }
	
	  return this;
	};
	
	proto.allOff =
	proto.removeAllListeners = function() {
	  delete this._events;
	  delete this._onceEvents;
	};
	
	return EvEmitter;
	
	}));


/***/ }),
/* 28 */
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
/* 29 */
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
	      __webpack_require__(30)
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
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity.Cell
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(28)
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
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// animate
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(29)
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// drag
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(26),
	      __webpack_require__(35),
	      __webpack_require__(29)
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
	
	var touchStartEvents = {
	  touchstart: true,
	  MSPointerDown: true
	};
	
	var focusNodes = {
	  INPUT: true,
	  SELECT: true
	};
	
	proto.pointerDownFocus = function( event ) {
	  // focus element, if not touch, and its not an input or select
	  if ( !this.options.accessibility || touchStartEvents[ event.type ] ||
	      focusNodes[ event.target.nodeName ] ) {
	    return;
	  }
	  var prevScrollY = window.pageYOffset;
	  this.element.focus();
	  // hack to fix scroll jump after focus, #76
	  if ( window.pageYOffset != prevScrollY ) {
	    window.scrollTo( window.pageXOffset, prevScrollY );
	  }
	};
	
	proto.canPreventDefaultOnPointerDown = function( event ) {
	  // prevent default, unless touchstart or <select>
	  var isTouchstart = event.type == 'touchstart';
	  var targetNodeName = event.target.nodeName;
	  return !isTouchstart && targetNodeName != 'SELECT';
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Unidragger v2.2.1
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
	      __webpack_require__(36)
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
	  }
	};
	
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
/* 36 */
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
	      __webpack_require__(27)
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// prev/next buttons
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(26),
	      __webpack_require__(38),
	      __webpack_require__(29)
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
/* 38 */
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
	      __webpack_require__(36)
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// page dots
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(26),
	      __webpack_require__(38),
	      __webpack_require__(29)
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// player & autoPlay
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(27),
	      __webpack_require__(29),
	      __webpack_require__(26)
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// add, remove cell
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(26),
	      __webpack_require__(29)
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// lazyload
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(26),
	      __webpack_require__(29)
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global Tick */
	
	
	var _domOps = __webpack_require__(4);
	
	__webpack_require__(44);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instances = [];
	var LOADED = 'loaded';
	
	var FlipCounter = function () {
	
	    /**
	     * Creates a new flip counter element
	     *
	     * @param {element}
	     */
	    function FlipCounter(element) {
	        _classCallCheck(this, FlipCounter);
	
	        this.element = element;
	        this.createTickCounter();
	    }
	
	    /**
	     * Creates a new flip counter element with options
	     */
	
	
	    _createClass(FlipCounter, [{
	        key: 'createTickCounter',
	        value: function createTickCounter() {
	            var element = this.element;
	            var stat = parseInt(element.getAttribute('data-stat'), 0);
	            var flipCounterSections = document.querySelectorAll('.flip-counter-section');
	
	            var tick = Tick.DOM.create(element, {
	                value: stat,
	                view: {
	                    children: [{
	                        root: 'div',
	                        layout: 'horizontal',
	                        repeat: true,
	                        children: [{
	                            view: 'flip'
	                        }]
	                    }]
	                },
	                didInit: function didInit() {
	                    setTimeout(function () {
	                        flipCounterSections.forEach(function (item) {
	                            return (0, _domOps.addClass)(item, LOADED);
	                        });
	                    }, 1500);
	                }
	            });
	
	            Tick.helper.interval(function () {
	                stat += Math.round(Math.random());
	                tick.value = stat;
	            }, 2500);
	        }
	    }]);
	
	    return FlipCounter;
	}();
	
	exports.default = {
	    init: function init(element) {
	        instances.push(new FlipCounter(element));
	    }
	};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function () {
		'use strict';
	
		if (!Array.prototype.fill) {
			Object.defineProperty(Array.prototype, 'fill', {
				value: function value(_value) {
	
					// Steps 1-2.
					if (this == null) {
						throw new TypeError('this is null or not defined');
					}
	
					var O = Object(this);
	
					// Steps 3-5.
					var len = O.length >>> 0;
	
					// Steps 6-7.
					var start = arguments[1];
					var relativeStart = start >> 0;
	
					// Step 8.
					var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);
	
					// Steps 9-10.
					var end = arguments[2];
					var relativeEnd = end === undefined ? len : end >> 0;
	
					// Step 11.
					var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);
	
					// Step 12.
					while (k < final) {
						O[k] = _value;
						k++;
					}
	
					// Step 13.
					return O;
				}
			});
		}
	
		if (!Array.prototype.find) {
			Object.defineProperty(Array.prototype, 'find', {
				value: function value(predicate) {
					if (this == null) {
						throw new TypeError('Array.prototype.find called on null or undefined');
					}
					if (typeof predicate !== 'function') {
						throw new TypeError('predicate must be a function');
					}
					var list = Object(this);
					var length = list.length >>> 0;
					var thisArg = arguments[1];
	
					for (var i = 0; i !== length; i++) {
						if (predicate.call(thisArg, this[i], i, list)) {
							return this[i];
						}
					}
					return undefined;
				}
			});
		}
	
		// Production steps of ECMA-262, Edition 6, 22.1.2.1
		if (!Array.from) {
			Array.from = function () {
				var toStr = Object.prototype.toString;
				var isCallable = function isCallable(fn) {
					return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
				};
				var toInteger = function toInteger(value) {
					var number = Number(value);
					if (isNaN(number)) {
						return 0;
					}
					if (number === 0 || !isFinite(number)) {
						return number;
					}
					return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
				};
				var maxSafeInteger = Math.pow(2, 53) - 1;
				var toLength = function toLength(value) {
					var len = toInteger(value);
					return Math.min(Math.max(len, 0), maxSafeInteger);
				};
	
				// The length property of the from method is 1.
				return function from(arrayLike /*, mapFn, thisArg */) {
					// 1. Let C be the this value.
					var C = this;
	
					// 2. Let items be ToObject(arrayLike).
					var items = Object(arrayLike);
	
					// 3. ReturnIfAbrupt(items).
					if (arrayLike == null) {
						throw new TypeError("Array.from requires an array-like object - not null or undefined");
					}
	
					// 4. If mapfn is undefined, then let mapping be false.
					var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
					var T;
					if (typeof mapFn !== 'undefined') {
						// 5. else
						// 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
						if (!isCallable(mapFn)) {
							throw new TypeError('Array.from: when provided, the second argument must be a function');
						}
	
						// 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
						if (arguments.length > 2) {
							T = arguments[2];
						}
					}
	
					// 10. Let lenValue be Get(items, "length").
					// 11. Let len be ToLength(lenValue).
					var len = toLength(items.length);
	
					// 13. If IsConstructor(C) is true, then
					// 13. a. Let A be the result of calling the [[Construct]] internal method
					// of C with an argument list containing the single item len.
					// 14. a. Else, Let A be ArrayCreate(len).
					var A = isCallable(C) ? Object(new C(len)) : new Array(len);
	
					// 16. Let k be 0.
					var k = 0;
					// 17. Repeat, while k < len… (also steps a - h)
					var kValue;
					while (k < len) {
						kValue = items[k];
						if (mapFn) {
							A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
						} else {
							A[k] = kValue;
						}
						k += 1;
					}
					// 18. Let putStatus be Put(A, "length", len, true).
					A.length = len;
					// 20. Return A.
					return A;
				};
			}();
		}
	
		Array.prototype.includes = Array.prototype.includes || function (searchElement, fromIndex) {
			if (!this) {
				throw new TypeError('Array.prototype.includes called on null or undefined');
			}
	
			if (fromIndex === undefined) {
				var i = this.length;
				while (i--) {
					if (this[i] === searchElement) {
						return true;
					}
				}
			} else {
				var i = fromIndex,
				    len = this.length;
				while (i++ !== len) {
					// Addittion on hardware will perform as fast as, if not faster than subtraction
					if (this[i] === searchElement) {
						return true;
					}
				}
			}
			return false;
		};
	
		/**
	  * These polyfills are required for using Tick on IE 11
	  */
		if (typeof Object.assign != 'function') {
			Object.assign = function (target, varArgs) {
				// .length of function is 2
				if (target == null) {
					// TypeError if undefined or null
					throw new TypeError('Cannot convert undefined or null to object');
				}
	
				var to = Object(target);
	
				for (var index = 1; index < arguments.length; index++) {
					var nextSource = arguments[index];
	
					if (nextSource != null) {
						// Skip over if undefined or null
						for (var nextKey in nextSource) {
							// Avoid bugs when hasOwnProperty is shadowed
							if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
								to[nextKey] = nextSource[nextKey];
							}
						}
					}
				}
				return to;
			};
		}
	
		// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
		if (!Object.keys) {
			Object.keys = function () {
				var hasOwnProperty = Object.prototype.hasOwnProperty,
				    hasDontEnumBug = !{ toString: null }.propertyIsEnumerable('toString'),
				    dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
				    dontEnumsLength = dontEnums.length;
	
				return function (obj) {
					if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && (typeof obj !== 'function' || obj === null)) {
						throw new TypeError('Object.keys called on non-object');
					}
	
					var result = [],
					    prop,
					    i;
	
					for (prop in obj) {
						if (hasOwnProperty.call(obj, prop)) {
							result.push(prop);
						}
					}
	
					if (hasDontEnumBug) {
						for (i = 0; i < dontEnumsLength; i++) {
							if (hasOwnProperty.call(obj, dontEnums[i])) {
								result.push(dontEnums[i]);
							}
						}
					}
					return result;
				};
			}();
		}
	})();
	/*
	 * Tick v1.4.0 - Counters Made Easy
	 * Copyright (c) 2017 PQINA - http://tickcounterplugin.com
	 */
	!function (t, e) {
		"use strict";
		t.Tick || (t.Tick = []), t.Tick.push(["view", "flip", function () {
			if (!t) var t = {};var a = function a(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
			},
			    r = function () {
				function t(t, e) {
					for (var a = 0; a < e.length; a++) {
						var r = e[a];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
					}
				}return function (e, a, r) {
					return a && t(e.prototype, a), r && t(e, r), e;
				};
			}(),
			    i = function i() {
				var t = arguments.length > 0 && arguments[0] !== e ? arguments[0] : API,
				    i = t.DOM,
				    n = (t.Animation.animate, t.Extension),
				    o = t.Date.performance,
				    s = t.View,
				    l = s.rooter,
				    c = s.destroyer,
				    p = s.drawer,
				    f = s.updater,
				    u = s.styler,
				    h = (n.getExtension(n.Type.EASING_FUNCTION, "ease-in-cubic"), n.getExtension(n.Type.EASING_FUNCTION, "ease-out-cubic")),
				    d = n.getExtension(n.Type.EASING_FUNCTION, "ease-out-sine"),
				    k = function k(t) {
					if (t.isInitialValue()) {
						t.root.textContent = "", t.spacer = i.create("span", "tick-flip-spacer"), t.root.appendChild(t.spacer);var e = i.create("span", "tick-flip-shadow-top tick-flip-shadow tick-flip-front"),
						    a = i.create("span", "tick-flip-shadow-bottom tick-flip-shadow tick-flip-back");t.root.appendChild(e), t.root.appendChild(a), t.shadowCard = i.create("span", "tick-flip-card-shadow"), t.root.appendChild(t.shadowCard);
					}if (t.spacer.textContent = t.value, !t.isInitialValue() && !i.visible(t.root)) return void t.cards.forEach(function (e) {
						e.back = t.value, e.front = t.value;
					});var r = t.cards[t.cards.length - 1];if (r && (r.waiting = !1, r.offset = o(), r.back = t.value), t.isInitialValue()) {
						var s = new v();s.back = t.value, s.offset = null, s.progress = 1, t.root.insertBefore(s.root, t.root.firstChild), t.cards.push(s);
					}var l = new v();if (l.offset = null, l.progress = 0, l.visual_progress = 0, l.waiting = !0, l.front = t.value, l.rotate(-1), t.root.insertBefore(l.root, t.root.firstChild), t.cards.push(l), !t.animating) {
						t.animating = !0;var c = n.getExtension(n.Type.EASING_FUNCTION, t.style.flipEasing),
						    p = function f() {
							var e = t.cards.filter(function (t) {
								return !t.done && !t.waiting;
							});if (0 === e.length) return void (t.animating = !1);e.forEach(function (e) {
								null !== e.offset && (e.progress = (o() - e.offset) / t.style.flipDuration), e.progress >= 1 && (e.progress = 1, e.done = !0), e.visual_progress = c(e.progress);
							});var a = .01;e.reverse().forEach(function (t, r) {
								var i = e[r - 1];i && t.visual_progress <= i.visual_progress && (t.visual_progress = i.visual_progress + a);
							}), e.reverse(), t.cards.forEach(function (e, a) {
								var r = 1 - 2 * Math.abs(e.visual_progress - .5),
								    i = 1 - (e.visual_progress - .5) / .5;e.shadowFront = r, e.highlightBack = i;var n = t.cards[a + 1];n && e.visual_progress > .5 && e.visual_progress > 0 && (e.shadowBack = h(n.visual_progress));
							}), e.forEach(function (t, e) {
								var a = t.visual_progress;a > .5 && !t.done ? t.root.style.zIndex = 10 + e : t.root.style.removeProperty("z-index"), t.rotate(a * -180);
							});var r = 0,
							    n = 1;e.forEach(function (t) {
								var e = Math.abs(t.visual_progress - .5);e < n && (n = e, r = t.visual_progress);
							});var s = d(r < .5 ? r / .5 : (1 - r) / .5);t.shadowCard.style.opacity = s, i.transform(t.shadowCard, "scaleY", s), t.cards.filter(function (t) {
								return t.done;
							}).slice(0, -1).forEach(function (e) {
								t.cards = t.cards.filter(function (t) {
									return t !== e;
								}), t.root.removeChild(e.root);
							}), requestAnimationFrame(f);
						};p();
					}
				},
				    v = function () {
					function t() {
						a(this, t), this._root = i.create("span", "tick-flip-card");var e = i.create("span", "tick-flip-panel-front tick-flip-front tick-flip-panel"),
						    r = i.create("span", "tick-flip-panel-front-text"),
						    n = i.create("span", "tick-flip-panel-text-wrapper");r.appendChild(n);var o = i.create("span", "tick-flip-panel-front-shadow");e.appendChild(r), e.appendChild(o);var s = i.create("span", "tick-flip-panel-back tick-flip-back tick-flip-panel"),
						    l = i.create("span", "tick-flip-panel-back-text"),
						    c = i.create("span", "tick-flip-panel-text-wrapper");l.appendChild(c);var p = i.create("span", "tick-flip-panel-back-highlight"),
						    f = i.create("span", "tick-flip-panel-back-shadow");s.appendChild(l), s.appendChild(p), s.appendChild(f), this._root.appendChild(e), this._root.appendChild(s), this._front = e, this._back = s, this._shadowFront = o, this._shadowBack = f, this._highlightBack = p, this._textBack = c, this._textFront = n, this._frontValue = null, this._backValue = null;
					}return r(t, [{ key: "rotate", value: function value(t) {
							this._front.style.transform = "rotateX(" + t + "deg)", this._back.style.transform = "rotateX(" + (-180 + t) + "deg)";
						} }, { key: "root", get: function get() {
							return this._root;
						} }, { key: "front", set: function set(t) {
							this._frontValue = t, this._textFront.textContent = t;
						}, get: function get() {
							return this._frontValue;
						} }, { key: "back", set: function set(t) {
							this._backValue = t, this._textBack.textContent = t;
						}, get: function get() {
							return this._backValue;
						} }, { key: "highlightBack", set: function set(t) {
							this._highlightBack.style.opacity = t;
						} }, { key: "shadowBack", set: function set(t) {
							this._shadowBack.style.opacity = t;
						} }, { key: "shadowFront", set: function set(t) {
							this._shadowFront.style.opacity = t;
						} }]), t;
				}();return function (t) {
					var e = { cards: [], lastCard: null, initialCard: null, shadowAbove: null, shadowBelow: null, shadowCard: null, currentValue: null, lastValue: null, front: null, back: null };return p(e, k), Object.assign({}, l(e, t, "flip"), f(e), u(e, { flipDuration: 800, flipEasing: "ease-out-bounce" }), c(e));
				};
			};return t.exports = i, t.exports.identifier = { name: "flip", type: "view" }, t.exports;
		}()]);
	}(window);
	/*
	 * Tick v1.4.0 - Counters Made Easy
	 * Copyright (c) 2017 PQINA - http://tickcounterplugin.com
	 */
	!function (t, n, e) {
		"use strict";
		if (t && "MutationObserver" in t && "requestAnimationFrame" in t) {
			var r = function () {
				if (!t) var t = {};var n = { FONT: "font", VIEW: "view", TRANSFORM: "transform", EASING_FUNCTION: "easing-function", TRANSITION: "transition" },
				    r = {};r[n.FONT] = {}, r[n.VIEW] = {}, r[n.TRANSFORM] = {}, r[n.EASING_FUNCTION] = {}, r[n.TRANSITION] = {};var i = function i(t, n) {
					if (!r[t]) return null;for (var e in n) {
						if (n.hasOwnProperty(e)) {
							if (r[t][e]) return null;r[t][e] = n[e];
						}
					}
				},
				    o = function o(t, n, e) {
					if (!r[t]) throw "Can't add extension with type of \"" + t + '", "' + t + '" is not a valid extension type. The following types are valid: ' + Le(r);if (!/^[-a-z]+$/.test(n)) throw "Can't add extension with name \"" + n + '", "' + n + '" is contains invalid characters. Only lowercase alphabetical characters and dashes are allowed.';if (r[t][n]) throw "Can't add extension with name \"" + n + '", "' + n + '" is already added.';r[t][n] = e;
				},
				    u = function u(t, n) {
					if (!r[t]) throw "Can't get extension with type of \"" + t + '", "' + t + '" is not a valid extension type. The following types are available: ' + Le(r);if (!r[t][n]) throw "Can't get extension with name \"" + n + '", "' + n + '" is not available. The following extensions are available: ' + Le(r[t]);return r[t][n];
				},
				    a = 1,
				    l = 1e3,
				    s = 6e4,
				    c = 36e5,
				    f = 864e5,
				    d = 6048e5,
				    h = 2628e6,
				    v = 31536e6,
				    p = { Week: d, Day: f, Hour: c, Minute: s, Second: l, Millisecond: a, Month: h, Year: v },
				    m = ["Januari", "Februari", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];for (var g in p) {
					if (p.hasOwnProperty(g)) {
						var y = p[g];y === a ? (p.mi = y, p.ms = y) : y === h ? p.M = y : p[g.charAt(0).toLowerCase()] = y, p[g.toLowerCase()] = y, p[g.toLowerCase() + "s"] = y;
					}
				}var w = { Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6, Sunday: 0 },
				    A = { M: 1, y: 12 },
				    b = function b(t) {
					var n = new XMLHttpRequest(),
					    e = Date.now();n.open("HEAD", location + "?noCache=" + e), n.setRequestHeader("Content-Type", "text/html"), n.setRequestHeader("Cache-Control", "no-cache"), n.onload = function () {
						var r = .5 * (e - Date.now()),
						    i = new Date(n.getResponseHeader("Date"));t(new Date(i.getTime() + r));
					}, n.send();
				},
				    M = function M(t) {
					return t instanceof Date;
				},
				    _ = function _(t, n) {
					return t.setHours(n[0] || 0, n[1] || 0, n[2] || 0, n[3] || 0), t;
				},
				    D = function D(t, n) {
					var e = t.getDay(),
					    r = n - e;return t.setDate(t.getDate() + r), t;
				},
				    E = function E(t, n) {
					var e = L(t.getMonth() + 1, t.getFullYear());return n = "last" === n ? e : Math.max(1, Math.min(e, n)), t.setDate(n), t;
				},
				    N = function N(t, n) {
					return t.setMonth(m.map(function (t) {
						return t.toLowerCase();
					}).indexOf(n)), t;
				},
				    R = function R(t) {
					var n = 6e4 * new Date().getTimezoneOffset();if ("Z" === t) return n;var e = t.match(/\+|-|[\d]{2}|[\d]{2}/g),
					    r = "-" === e.shift() ? -1 : 1,
					    i = parseInt(e[0], 10),
					    o = parseInt(e[1], 10);return r * (36e5 * i + 6e4 * o) + n;
				},
				    S = function S(t) {
					return new Date(Date.now() + t);
				},
				    O = function O(t, n) {
					return new Date(t.getTime() + n);
				},
				    T = function T(t, n) {
					return t.toDateString() === n.toDateString();
				},
				    I = function I(t, n) {
					return t.getTime() === n.getTime();
				},
				    L = function L(t, n) {
					return new Date(n, t, 0).getDate();
				},
				    C = function C(t) {
					return t.match(/(Z)|([+\-][0-9]{2}:?[0-9]*$)/g) ? new Date(t) : (t += t.indexOf("T") !== -1 ? "Z" : "", x(new Date(t)));
				},
				    x = function x(t) {
					return new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
				},
				    U = function U(t, n) {
					return n.map(function (n) {
						var e = p[n],
						    r = Math.max(0, Math.floor(t / e));return t %= e, r;
					});
				},
				    F = function F(t, n, e) {
					var r = n - t,
					    i = !1;if (r < 0) {
						r = t - n;var o = [n, t];t = o[0], n = o[1], i = !0;
					}e || (e = ["d", "h", "m"]);var u = e.indexOf("m");"y" !== e[u - 1] && "d" !== e[u + 1] || (e[u].key = "M");var a = void 0,
					    l = void 0,
					    s = void 0,
					    c = e.includes("y"),
					    f = e.includes("M");(f || c) && (a = new Date(t.valueOf() + r), l = G(a, t), s = f ? Math.floor(l) : 12 * Math.floor(l / 12), r = a.valueOf() - q(z(t), s).valueOf());var d = e.map(function (t) {
						if ("y" === t || "M" === t) {
							var n = Math.max(0, Math.floor(l / A[t]));return l -= n * A[t], n;
						}var e = p[t],
						    i = Math.max(0, Math.floor(r / e));return r %= e, i;
					});return i ? d.map(function (t) {
						return t > 0 ? -t : t;
					}) : d;
				},
				    P = function P() {
					for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) {
						n[r] = arguments[r];
					}if ("number" == typeof n[0] && "string" == typeof n[1]) {
						if (!p[n[1]]) throw '"' + n[1] + '" is not a valid amount.';return n[0] * p[n[1]];
					}return M(n[0]) ? F.apply(e, n) : "number" == typeof n[0] && Array.isArray(n[1]) ? U.apply(e, n) : null;
				},
				    k = function k() {
					return new Date();
				},
				    z = function z(t) {
					return new Date(t.valueOf());
				},
				    q = function q(t, n) {
					return t.setMonth(t.getMonth() + n), t;
				},
				    G = function G(t, n) {
					var e = 12 * (n.getFullYear() - t.getFullYear()) + (n.getMonth() - t.getMonth()),
					    r = q(z(t), e),
					    i = void 0,
					    o = void 0;return n - r < 0 ? (i = q(z(t), e - 1), o = (n - r) / (r - i)) : (i = q(z(t), e + 1), o = (n - r) / (i - r)), -(e + o);
				},
				    Y = function Y(t) {
					return { destroy: function destroy() {
							t.destroyed = !0, t.frame && cancelAnimationFrame(t.frame), t.styleObserver && t.styleObserver.disconnect(), t.didResizeWindow && window.removeEventListener("resize", t.didResizeWindow), t.root && t.root.parentNode && t.root.parentNode.removeChild(t.root);
						} };
				},
				    j = function j(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : document.createElement("span"),
					    r = arguments.length > 2 && arguments[2] !== e ? arguments[2] : null;return t.root = n, t.aligned = null, t.destroyed = !1, n && r && (t.root.classList.add("tick-" + r), t.root.setAttribute("data-view", r)), n && n.dataset.layout && (t.align = (n.dataset.layout.match(/left|right|center/) || [])[0] || "left"), { appendTo: function appendTo(n) {
							var r = arguments.length > 1 && arguments[1] !== e ? arguments[1] : "last";if (!(!t.root || t.root && t.root.parentNode)) {
								if ("last" === r) return void (n.childNodes.length && n.childNodes[n.childNodes.length - 1].nodeType === Node.TEXT_NODE ? n.insertBefore(t.root, n.childNodes[n.childNodes.length - 1]) : n.appendChild(t.root));"first" === r && (0 === n.childNodes.length ? n.appendChild(t.root) : 0 === n.children.length && n.childNodes.length ? n.insertBefore(t.root, n.childNodes[n.childNodes.length - 1]) : n.insertBefore(t.root, n.children[0])), "string" != typeof r && n.insertBefore(t.root, r);
							}
						} };
				},
				    H = function H(t, n) {
					return t.definition = n, { setDefinition: function setDefinition(n) {
							t.definition = n;
						} };
				},
				    W = function W(t, n, e) {
					t.frame = null, t.dirty = function () {
						cancelAnimationFrame(t.frame), t.frame = requestAnimationFrame(function () {
							n(t, e);
						});
					};
				},
				    $ = function $(t) {
					return t.value = null, t.valueUpdateCount = 0, t.isInitialValue = function () {
						return t.valueUpdateCount <= 1;
					}, { update: function update(n) {
							Se(t.value, n) || (t.value = n, t.valueUpdateCount++, t.dirty());
						} };
				},
				    Z = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
					return typeof t === 'undefined' ? 'undefined' : _typeof(t);
				} : function (t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === 'undefined' ? 'undefined' : _typeof(t);
				},
				    B = function B(t, n) {
					if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
				},
				    V = function () {
					function t(t, n) {
						for (var e = 0; e < n.length; e++) {
							var r = n[e];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
						}
					}return function (n, e, r) {
						return e && t(n.prototype, e), r && t(n, r), n;
					};
				}(),
				    X = Object.assign || function (t) {
					for (var n = 1; n < arguments.length; n++) {
						var e = arguments[n];for (var r in e) {
							Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
						}
					}return t;
				},
				    J = function J(t) {
					if (Array.isArray(t)) {
						for (var n = 0, e = Array(t.length); n < t.length; n++) {
							e[n] = t[n];
						}return e;
					}return Array.from(t);
				},
				    K = function K(t, n) {
					var r = (t.definition || []).concat();"right" === t.align && r.reverse();var i = Array.isArray(t.value) ? t.value.concat() : "object" === Z(t.value) ? be(t.value) : t.value;r.forEach(function (e) {
						if (!e.presenter) {
							if (t.update = n(e), !e.presenter) return;e.presenter.appendTo(t.root);
						}
					}), r.filter(function (t) {
						return t.presenter !== e;
					}).forEach(function (n) {
						Array.isArray(i) && t.valueMapping ? t.update(n, "indexes" === t.valueMapping ? "right" === t.align ? i.pop() : i.shift() : i) : n.key && i[n.key] !== e ? t.update(n, i[n.key]) : t.update(n, i);
					});
				},
				    Q = function Q(t, n, e) {
					var r = { valueMapping: null };if (t && t.dataset.valueMapping) {
						var i = ["none", "indexes"],
						    o = t.dataset.valueMapping;r.valueMapping = i.indexOf(o) !== -1 ? o : null;
					}return W(r, K, e), Object.assign({}, j(r, t), $(r), H(r, n), Y(r));
				},
				    tt = function tt(t, n) {
					var e = Me(Array.isArray(t.value) ? t.value : (t.value + "").split(""));if ("right" === t.align && e.reverse(), t.definitions.length > e.length) for (; t.definitions.length > e.length;) {
						var r = t.definitions.pop();r.presenter.destroy();
					}e.forEach(function (e, r) {
						var i = t.definitions[r];i || (i = t.definitions[r] = $n(t.definition), t.update = n(i), i.presenter.appendTo(t.root, "right" === t.align ? "first" : "last"));
					}), e.forEach(function (n, e) {
						return t.update(t.definitions[e], n);
					});
				},
				    nt = function nt(t, n, e) {
					var r = { definitions: [] };return W(r, tt, e), Object.assign({}, j(r, t), $(r), H(r, n), Y(r));
				},
				    et = "undefined" == typeof document ? null : function () {
					for (var t = ["webkit", "Moz", "ms", "O"], n = 0, e = t.length, r = void 0, i = document.createElement("div").style; n < e; n++) {
						if (r = t[n] + "Transform", r in i) return t[n];
					}return null;
				}(),
				    rt = function rt(t, n) {
					var e = document.createElement(t);return n && (e.className = n), e;
				},
				    it = function it(t, n, e) {
					var r = new MutationObserver(function (r) {
						n.forEach(function (i) {
							r.filter(function (t) {
								return n.includes(t.attributeName);
							}).length && e(t.getAttribute(i));
						});
					});return r.observe(t, { attributes: !0 }), r;
				},
				    ot = function ot(t) {
					return t instanceof HTMLElement;
				},
				    ut = function ut(t, n) {
					t.style.transformOrigin = n;
				},
				    at = function at(t, n, r) {
					var i = arguments.length > 3 && arguments[3] !== e ? arguments[3] : "";t.transforms || (t.transforms = []);var o = t.transforms.find(function (t) {
						return t.name === n;
					});o ? o.value = r : t.transforms.push({ name: n, value: r, unit: i }), lt(t, t.transforms);
				},
				    lt = function lt(t, n) {
					t.style.transform = n.map(function (t) {
						return t.name + "(" + t.value + t.unit + ")";
					}).join(" ");
				},
				    st = function st(t) {
					var n = t.getBoundingClientRect();return !(n.bottom < 0) && !(n.top > window.scrollY + window.innerHeight);
				},
				    ct = function ct(t) {
					return "string" == typeof t ? "true" === t : t;
				},
				    ft = function ft(t) {
					return t.charAt(0).toUpperCase() + t.slice(1);
				},
				    dt = function dt(t) {
					return t.trim();
				},
				    ht = {},
				    vt = function vt(t, n) {
					var e = n.toString();return ht[e] || (ht[e] = {}), ht[e][t] || (ht[e][t] = n(t)), ht[e][t];
				},
				    pt = new RegExp("^[0-9]+$"),
				    mt = new RegExp("^(true|false)$"),
				    gt = new RegExp("^[0-9.]+$"),
				    yt = new RegExp("color"),
				    wt = new RegExp("shadow"),
				    At = new RegExp("^(follow-gradient|horizontal-gradient|vertical-gradient)"),
				    bt = new RegExp("^[.0-9]+(?:ms|s){1}$"),
				    Mt = new RegExp("^transition-?(?:in|out)?$"),
				    _t = new RegExp("^url\\("),
				    Dt = function Dt(t) {
					return t ? parseFloat(t) * (/ms$/.test(t) ? 1 : 1e3) : 0;
				},
				    Et = function Et(t) {
					return t.match(/[a-z]+(?:\(.*?\))?\s?(?:origin\(.*?\))?\s?(?:[a-z]+\(.*?\))?[ .a-z-0-9]*/g).map(Nt);
				},
				    Nt = function Nt(t) {
					var n = t.match(/([a-z]+(?:\(.*?\))?)\s?(?:origin\((.*?)\))?\s?([a-z]+(?:\(.*?\))?)?\s?(?:([.0-9ms]+)?\s?(?:(ease-[a-z-]+))?\s?([.0-9ms]+)?)?/),
					    r = ee(n[1]),
					    i = e,
					    o = e,
					    u = e,
					    a = e,
					    l = e;return n.slice(2).filter(function (t) {
						return "undefined" != typeof t;
					}).forEach(function (t) {
						bt.test(t) ? "undefined" == typeof o ? o = Dt(t) : a = Dt(t) : / /.test(t) ? i = t : /^ease-[a-z-]+$/.test(t) ? u = t : /^[a-z]+/.test(t) && (l = ee(t));
					}), l && (o = e, u = e), { name: r.name, parameters: r.parameters, duration: o, ease: u, delay: a, origin: i, resolver: l };
				},
				    Rt = function Rt(t) {
					var n = t.match(/follow-gradient|horizontal-gradient|vertical-gradient/)[0],
					    e = t.substr(n.length).match(/(?:transparent|rgb\(.*?\)|hsl\(.*?\)|hsla\(.*?\)|rgba\(.*?\)|[a-z]+|#[abcdefABCDEF\d]+)\s?(?:[\d]{1,3}%?)?/g).map(Ot);return { type: n, colors: e };
				},
				    St = /\s([\d]{1,3})%?$/,
				    Ot = function Ot(t) {
					var n = t.match(St);return { offset: n ? parseFloat(n[1]) / 100 : null, value: It(t.replace(St, "")) };
				},
				    Tt = "undefined" == typeof document ? function (t) {
					return 0;
				} : function (t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : document.body;if (0 == t) return 0;var r = document.createElement("span");return r.style.cssText = "position:absolute;padding:0;visibility:hidden;margin-top:" + t, n.appendChild(r), requestAnimationFrame(function () {
						r.parentNode.removeChild(r);
					}), parseInt(window.getComputedStyle(r).marginTop, 10);
				},
				    It = "undefined" == typeof document ? function (t) {
					return t;
				} : function (t) {
					if ("transparent" === t) return "rgba(0,0,0,0)";var n = document.createElement("span");return n.style.cssText = "position:absolute;visibility:hidden;color:" + t, document.body.appendChild(n), requestAnimationFrame(function () {
						n.parentNode.removeChild(n);
					}), window.getComputedStyle(n).getPropertyValue("color");
				},
				    Lt = function Lt(t) {
					return "string" != typeof t ? t : t.match(/([-.\d]+(?:%|ms|s|deg|cm|em|ch|ex|q|in|mm|pc|pt|px|vh|vw|vmin|vmax)?)|[%#A-Za-z0-9,.()]+/g);
				},
				    Ct = function Ct(t) {
					var n = t.match(/url\((.*?)\)/g).map(function (t) {
						return t.substring(4, t.length - 1);
					});return 1 === n.length ? n[0] : n;
				},
				    xt = function xt(t) {
					return t.trim().split("-").map(function (t, n) {
						return n > 0 ? ft(t) : t;
					}).join("");
				},
				    Ut = function Ut(t, n) {
					return mt.test(t) ? ct(t) : pt.test(t) ? parseInt(t, 10) : gt.test(t) ? parseFloat(t) : _t.test(t) ? Ct(t) : yt.test(n) ? At.test(t) ? vt(t, Rt) : vt(t, It) : wt.test(n) ? vt(t, Lt) : Mt.test(n) ? "none" === t ? t : vt(t, Et) : t;
				},
				    Ft = function Ft(t) {
					var n = t.split(":").map(dt),
					    e = xt(n[0]),
					    r = Ut(n[1], n[0]);return e && null !== r && "undefined" != typeof r ? { property: e, value: r } : null;
				},
				    Pt = function Pt(t) {
					return t.split(";").filter(function (t) {
						return t.trim().length;
					}).map(Ft).filter(function (t) {
						return null !== t;
					}).reduce(function (t, n) {
						return t[n.property] = n.value, t;
					}, {});
				},
				    kt = function kt(t) {
					return t;
				},
				    zt = function zt(t) {
					return -1 * Math.cos(t * (Math.PI / 2)) + 1;
				},
				    qt = function qt(t) {
					return Math.sin(t * (Math.PI / 2));
				},
				    Gt = function Gt(t) {
					return -.5 * (Math.cos(Math.PI * t) - 1);
				},
				    Yt = function Yt(t) {
					return t * t;
				},
				    jt = function jt(t) {
					return t * (2 - t);
				},
				    Ht = function Ht(t) {
					return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
				},
				    Wt = function Wt(t) {
					return t * t * t;
				},
				    $t = function $t(t) {
					var n = t - 1;return n * n * n + 1;
				},
				    Zt = function Zt(t) {
					return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
				},
				    Bt = function Bt(t) {
					return t * t * t * t;
				},
				    Vt = function Vt(t) {
					return 1 - --t * t * t * t;
				},
				    Xt = function Xt(t) {
					return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
				},
				    Jt = function Jt(t) {
					return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
				},
				    Kt = function Kt(t) {
					return 1 === t ? 1 : -Math.pow(2, -10 * t) + 1;
				},
				    Qt = function Qt(t) {
					if (0 === t || 1 === t) return t;var n = 2 * t,
					    e = n - 1;return n < 1 ? .5 * Math.pow(2, 10 * e) : .5 * (-Math.pow(2, -10 * e) + 2);
				},
				    tn = function tn(t) {
					var n = t / 1;return -1 * (Math.sqrt(1 - n * t) - 1);
				},
				    nn = function nn(t) {
					var n = t - 1;return Math.sqrt(1 - n * n);
				},
				    en = function en(t) {
					var n = 2 * t,
					    e = n - 2;return n < 1 ? -.5 * (Math.sqrt(1 - n * n) - 1) : .5 * (Math.sqrt(1 - e * e) + 1);
				},
				    rn = function rn(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : 1.70158,
					    r = t / 1;return r * r * ((n + 1) * r - n);
				},
				    on = function on(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : 1.70158,
					    r = t / 1 - 1;return r * r * ((n + 1) * r + n) + 1;
				},
				    un = function un(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : 1.70158,
					    r = 2 * t,
					    i = r - 2,
					    o = 1.525 * n;return r < 1 ? .5 * r * r * ((o + 1) * r - o) : .5 * (i * i * ((o + 1) * i + o) + 2);
				},
				    an = function an(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : .7,
					    r = 1 - n,
					    i = 2 * t;if (0 === t || 1 === t) return t;var o = r / (2 * Math.PI) * Math.asin(1);return Math.pow(2, -10 * i) * Math.sin((i - o) * (2 * Math.PI) / r) + 1;
				},
				    ln = function ln(t) {
					var n = t / 1;if (n < 1 / 2.75) return 7.5625 * n * n;if (n < 2 / 2.75) {
						var e = n - 1.5 / 2.75;return 7.5625 * e * e + .75;
					}if (n < 2.5 / 2.75) {
						var r = n - 2.25 / 2.75;return 7.5625 * r * r + .9375;
					}var i = n - 2.625 / 2.75;return 7.5625 * i * i + .984375;
				},
				    sn = { "ease-linear": kt, "ease-in-sine": zt, "ease-out-sine": qt, "ease-in-out-sine": Gt, "ease-in-cubic": Wt, "ease-out-cubic": $t, "ease-in-out-cubic": Zt, "ease-in-circ": tn, "ease-out-circ": nn, "ease-in-out-circ": en, "ease-in-quad": Yt, "ease-out-quad": jt, "ease-in-out-quad": Ht, "ease-in-quart": Bt, "ease-out-quart": Vt, "ease-in-out-quart": Xt, "ease-in-expo": Jt, "ease-out-expo": Kt, "ease-in-out-expo": Qt, "ease-in-back": rn, "ease-out-back": on, "ease-in-out-back": un, "ease-out-elastic": an, "ease-out-bounce": ln };i(n.EASING_FUNCTION, sn);var cn = function cn(t, n) {
					var r = arguments.length > 2 && arguments[2] !== e ? arguments[2] : 500,
					    i = arguments.length > 3 && arguments[3] !== e ? arguments[3] : kt,
					    o = arguments.length > 4 && arguments[4] !== e ? arguments[4] : 0;return fn(function (n) {
						t(i(n));
					}, n, r, o);
				},
				    fn = function fn(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : null,
					    r = arguments.length > 2 && arguments[2] !== e ? arguments[2] : 500,
					    i = arguments.length > 3 && arguments[3] !== e ? arguments[3] : 0;if (!t) return null;var o = null,
					    u = void 0,
					    a = null,
					    l = function s(e) {
						return null === o && (o = e), u = e - o - i, u < r ? (t(u >= 0 ? u / r : 0), a = requestAnimationFrame(s), null) : (t(1), void (n && n()));
					};return l(Ne()), function () {
						cancelAnimationFrame(a);
					};
				},
				    dn = function dn() {
					var t = 24,
					    n = 1e3 / t,
					    e = null,
					    r = { velocity: 0, origin: 0, position: 0, destination: 1 },
					    i = function i() {
						cancelAnimationFrame(e);
					},
					    o = function o(t, _o, u, a) {
						i(), null === u ? r.destination = _o : (r.position = _o, r.destination = u, r.velocity = 0), r.origin = r.position;var l = null,
						    s = function c(o) {
							e = requestAnimationFrame(c), l || (l = o);var u = o - l;u <= n || (l = o - u % n, a(r, i), t(r.position));
						};s(Ne());
					};return { cancel: i, translate: o };
				},
				    hn = function hn(t) {
					for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) {
						r[i - 1] = arguments[i];
					}var o = dn(),
					    u = { update: null, cancel: o.cancel };return "arrive" === t ? u.update = vn.apply(e, [o.translate].concat(r)) : "spring" === t ? u.update = mn.apply(e, [o.translate].concat(r)) : "step" === t && (u.update = pn.apply(e, [o.translate].concat(r))), u;
				},
				    vn = function vn(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : 1,
					    r = arguments.length > 2 && arguments[2] !== e ? arguments[2] : .01;return function (i) {
						var o = arguments.length > 1 && arguments[1] !== e ? arguments[1] : null,
						    u = arguments.length > 2 && arguments[2] !== e ? arguments[2] : null;t(i, o, u, function (t, e) {
							var i = t.destination - t.position,
							    o = t.origin + .5 * (t.destination - t.origin);t.velocity += 2 * (-(o - t.origin) + i) * r, t.position += t.velocity < 0 ? Math.max(t.velocity, -n) : Math.min(t.velocity, n), (t.origin < t.destination && t.position >= t.destination || t.origin >= t.destination && t.position <= t.destination) && (e(), t.velocity = 0, t.position = t.destination);
						});
					};
				},
				    pn = function pn(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : .01;return function (r) {
						var i = arguments.length > 1 && arguments[1] !== e ? arguments[1] : null,
						    o = arguments.length > 2 && arguments[2] !== e ? arguments[2] : null;t(r, i, o, function (t, e) {
							t.velocity = n, t.position += t.velocity, (t.origin < t.destination && t.position >= t.destination || t.origin >= t.destination && t.position <= t.destination) && (e(), t.velocity = 0, t.position = t.destination);
						});
					};
				},
				    mn = function mn(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : .5,
					    r = arguments.length > 2 && arguments[2] !== e ? arguments[2] : .75,
					    i = arguments.length > 3 && arguments[3] !== e ? arguments[3] : 10;return function (o) {
						var u = arguments.length > 1 && arguments[1] !== e ? arguments[1] : null,
						    a = arguments.length > 2 && arguments[2] !== e ? arguments[2] : null;t(o, u, a, function (t, e) {
							var o = -(t.position - t.destination) * n;t.velocity += o / i, t.position += t.velocity, t.velocity *= r, gn(t.position, t.destination, t.velocity) && (e(), t.position = t.destination, t.velocity = 0);
						});
					};
				},
				    gn = function gn(t, n, r) {
					var i = arguments.length > 3 && arguments[3] !== e ? arguments[3] : .001;return Math.abs(t - n) < i && Math.abs(r) < i;
				},
				    yn = function yn(t) {
					var n = t.map(function (t) {
						return An(wn(t.name, t.parameters, t.ease), t.origin, t.duration, t.delay);
					});return function (t, e, r) {
						if (!ot(t)) return !1;var i = n.length;n.forEach(function (n) {
							n(t, e, function () {
								i--, !i && r && r(t);
							});
						});
					};
				},
				    wn = function wn(t, r, i) {
					var o = i ? u(n.EASING_FUNCTION, i) : i,
					    a = u(n.TRANSITION, t);return function (t, n, i) {
						a.apply(e, [t, i, n, o].concat(J(r)));
					};
				},
				    An = function An(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : "50% 50% 0",
					    r = arguments.length > 2 && arguments[2] !== e ? arguments[2] : 500,
					    i = arguments[3];return function (o) {
						var u = arguments.length > 1 && arguments[1] !== e ? arguments[1] : 1,
						    a = arguments[2];ut(o, n), fn(function (n) {
							t(o, u, n);
						}, a, r, i);
					};
				},
				    bn = function bn(t) {
					return u(n.TRANSITION, t.name).apply(e, J(t.parameters || []));
				},
				    Mn = function Mn(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : {};return t.lastAppliedStyles = null, _n(t, n, t.root.dataset.style), t.styleObserver = it(t.root, ["data-style"], function (e) {
						_n(t, n, e);
					}), { setStyle: function setStyle(e) {
							_n(t, n, e);
						} };
				},
				    _n = function _n(t, n, e) {
					if (t.lastAppliedStyles !== e) {
						t.lastAppliedStyles = e, t.style = e ? ve(n, Pt(e)) : n;var r = [],
						    i = [];t.style.transitionIn && t.style.transitionIn.length ? (r = t.style.transitionIn, i = t.style.transitionOut) : t.style.transition && "none" !== t.style.transition && t.style.transition.forEach(function (t) {
							var n = bn(t);r = r.concat(n.intro), i = i.concat(n.outro);
						}), r && i && (t.transitionIn = yn(r), t.transitionOut = yn(i), t.skipToTransitionInEnd = yn(r.map(Dn)), t.skipToTransitionOutEnd = yn(i.map(Dn))), t.dirty();
					}
				},
				    Dn = function Dn(t) {
					var n = be(t);return n.duration = 0, n.delay = 0, n;
				},
				    En = function En(t) {
					t.didResizeWindow = function () {
						t.dirty();
					}, window.addEventListener("resize", t.didResizeWindow);
				},
				    Nn = function Nn(t) {
					return t[et + "BackingStorePixelRatio"] || t.backingStorePixelRatio || 1;
				},
				    Rn = function Rn() {
					return window.devicePixelRatio || 1;
				},
				    Sn = function Sn(t) {
					var n = t.getContext("2d");n.clearRect(0, 0, t.width, t.height);
				},
				    On = { text: function text() {
						return function (t) {
							var n = {};return W(n, function (t) {
								t.root.setAttribute("data-value", t.value), t.root.textContent = t.value;
							}), Object.assign({}, j(n, t, "text"), $(n), Y(n));
						};
					} };i(n.VIEW, On);var Tn = function Tn() {
					return { Extension: { Type: n, getExtension: u }, Utils: { toPixels: Tt, toColor: It }, Canvas: { clear: Sn, getDevicePixelRatio: Rn, getBackingStoreRatio: Nn }, DOM: { visible: st, create: rt, transform: at }, Animation: { animate: cn }, Data: { request: Re }, Date: { performance: Ne }, View: { rooter: j, drawer: W, updater: $, styler: Mn, grouper: H, resizer: En, destroyer: Y } };
				},
				    In = function In(t, n, e) {
					return Q(t, n, e);
				},
				    Ln = function Ln(t, n, e) {
					return nt(t, n, e);
				},
				    Cn = function Cn(t, e, r) {
					var i = u(n.VIEW, t);return i ? i(Tn())(e, r) : null;
				},
				    xn = function xn(t, n) {
					return "-" === t[n] && ">" === t[n + 1];
				},
				    Un = function Un(t) {
					return "'" === t || '"' === t;
				},
				    Fn = function Fn(t) {
					return "," === t;
				},
				    Pn = function Pn(t) {
					return "(" === t;
				},
				    kn = function kn(t) {
					return ")" === t;
				},
				    zn = function zn(t) {
					return 0 !== t.trim().length;
				},
				    qn = function qn(t, n) {
					return t.push(n.trim());
				},
				    Gn = function Gn(t, n) {
					return zn(n) ? (qn(t, n), "") : n;
				},
				    Yn = function Yn(t, n) {
					return t.length && n.push(t.length > 1 ? t.concat() : t[0]), [];
				},
				    jn = function pi(t, n, e) {
					for (var r = "", i = [], o = null, u = !1; t < n.length;) {
						var a = n[t];if (Pn(a)) {
							u = !1;var l = [r.trim()];t = pi(t + 1, n, l), a = n[t], i.push(l), r = "";
						} else {
							if (kn(a)) return u && r.trim().length && (i.push([r.trim()]), r = "", u = !1), zn(r) && qn(i, r), i = Yn(i, e), t + 1;null !== o && a !== o ? r += a : a === o ? (i.push(r), r = "", o = null) : Un(a) ? (r = "", o = a) : xn(n, t) ? (u = !0, r.trim().length && (i.push([r.trim()]), r = ""), t += 2) : Fn(a) ? (u && r.trim().length && (i.push([r.trim()]), r = "", u = !1), i = Yn(i, e), r = Gn(e, r)) : r += a, t++;
						}
					}return (u && r.trim().length || !u && r.trim().length && !i.length) && (i.push([r.trim()]), r = ""), Yn(i, e), Gn(e, r), t;
				},
				    Hn = function Hn(t) {
					var n = [];return jn(0, t, n), n;
				},
				    Wn = function Wn(t) {
					return t.children && t.children.length;
				},
				    $n = function mi(t) {
					var n = {};for (var e in t) {
						t.hasOwnProperty(e) && ("root" !== e ? "children" !== e ? "repeat" !== e ? n[e] = t[e] : n[e] = null === t[e] ? null : mi(t[e]) : n[e] = null === t[e] ? null : t[e].map(mi) : n[e] = t[e].cloneNode());
					}return n.presenter = null, n;
				},
				    Zn = { root: null, key: null, view: null, presenter: null, transform: null, layout: null, style: null, repeat: null, children: null },
				    Bn = function gi(t) {
					return Array.from(t).map(function (t) {
						var n = ve(Zn, { root: t });for (var e in t.dataset) {
							t.dataset.hasOwnProperty(e) && "undefined" != typeof n[e] && (n[e] = t.dataset[e]);
						}return n.repeat ? (n.repeat = gi(t.children).pop(), Array.from(t.children).forEach(function (t) {
							t.parentNode.removeChild(t);
						})) : t.children.length && (n.children = gi(t.children)), n;
					});
				},
				    Vn = function yi(t) {
					return t.map(function (t) {
						return t = ve(Zn, t), "string" == typeof t.root ? t.root = document.createElement(t.root) : t.root = document.createElement("span"), t.view ? (t.root.dataset.view = t.view, t.style && (t.root.dataset.style = t.style), t.repeat = null) : (t.layout && (t.root.dataset.layout = t.layout), t.repeat ? (t.root.dataset.repeat = !0, t.repeat = yi(t.children).pop()) : t.children && (t.children = yi(t.children), t.children.forEach(function (n) {
							t.root.appendChild(n.root);
						}))), t;
					});
				},
				    Xn = function Xn(t, n) {
					var e = void 0;return t.repeat ? e = Ln(t.root, t.repeat, n) : "string" == typeof t.view ? e = Cn(t.view, t.root, t.style) : Wn(t) && (e = In(t.root, t.children, n)), e;
				},
				    Jn = function Jn(t) {
					var n = function n(_n2, e) {
						_n2.transform(e, function (t) {
							_n2.presenter.update(t);
						}, t);
					},
					    e = function r(e) {
						return e.presenter = Xn(e, r), e.transform = te(e.transform, t), n;
					};return e(t.baseDefinition);
				},
				    Kn = function Kn(t) {
					for (var n = arguments.length, e = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) {
						e[r - 1] = arguments[r];
					}return function (n, r) {
						function i(n, o) {
							return e.length <= n ? void r(o) : void e[n](o, Qn(i, [n + 1]), t);
						}i(0, n);
					};
				},
				    Qn = function Qn(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : [],
					    r = arguments[2];return function () {
						var e = Array.from(n);return Array.prototype.push.apply(e, arguments), t.apply(r, e);
					};
				},
				    te = function te(t, n) {
					if (!t) return function (t, n) {
						return n(t);
					};if ("function" == typeof t) return t;var e = Hn("transform(" + (/^[a-z]+$/.test(t) ? t + "()" : t) + ")");return ne(e, n);
				},
				    ne = function wi(t, r) {
					var i = t.map(function (t) {
						var i = t.shift(),
						    o = u(n.TRANSFORM, i) || function (t, n, e) {
							n(t);
						},
						    a = t.map(function (t) {
							return Array.isArray(t) ? "string" == typeof t[0] ? wi([t], r) : wi(t, r) : de(t);
						});return o.apply(e, J(a));
					});return Kn.apply(e, [r].concat(J(i)));
				},
				    ee = function ee(t) {
					var n = t.match(/[a-z]+/)[0],
					    e = re(t.substring(n.length));return { name: n, parameters: e };
				},
				    re = function re(t) {
					return (t.match(/('.+?')|(".+?")|(\[.+?])|([.:\-\d\sa-zA-Z]+%?)/g) || []).map(ye).filter(function (t) {
						return t.length;
					}).map(de);
				},
				    ie = function ie(t) {
					return t.substring(1, t.length - 1);
				},
				    oe = /^([\d]{4}-[\d]{1,2}-[\d]{1,2})/,
				    ue = /^(true|false)$/,
				    ae = /^[\a-zA-Z]+$/,
				    le = /^0[\d]+/,
				    se = /^('|")/,
				    ce = /^-?(?:\d+)?(?:\.|0\.)?[\d]+$/,
				    fe = /^(\[)/,
				    de = function de(t) {
					return ue.test(t) ? "true" === t : fe.test(t) ? re(ie(t)) : oe.test(t) ? C(t) : se.test(t) ? ie(t) : ae.test(t) || le.test(t) ? t : ce.test(t) ? parseFloat(t) : t;
				},
				    he = function he(t) {
					var n = (t + "").match(/(-?[.\d]+)(%|ms|s|deg|cm|em|ch|ex|q|in|mm|pc|pt|px|vh|vw|vmin|vmax)?/);return { value: parseFloat(n[1]), units: n[2] };
				},
				    ve = function ve(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : {},
					    r = void 0,
					    i = {};for (r in t) {
						t.hasOwnProperty(r) && (i[r] = "undefined" == typeof n[r] ? t[r] : n[r]);
					}return i;
				},
				    pe = function pe(t) {
					var n = window,
					    e = t.split(".");return e.forEach(function (t, r) {
						n[e[r]] && (n = n[e[r]]);
					}), n !== window ? n : null;
				},
				    me = function me(t) {
					return (/^(?:[\w]+\s?:\s?[\w.]+,\s?)+(?:[\w]+\s?:\s?[\w.]+)$/g.test(t) ? t.match(/(?:(\w+)\s?:\s?([\w.]+))/g).reduce(function (t, n) {
							var e = n.split(":");return t[e[0]] = de(e[1]), t;
						}, {}) : de(t)
					);
				},
				    ge = function ge(t) {
					return parseInt(t, 10);
				},
				    ye = function ye(t) {
					return t.trim();
				},
				    we = function we(t) {
					return t.charAt(0).toUpperCase() + t.slice(1);
				},
				    Ae = function Ae(t) {
					return t.replace(/-./g, function (t) {
						return t.charAt(1).toUpperCase();
					});
				},
				    be = function be(t) {
					return "object" === ("undefined" == typeof t ? "undefined" : Z(t)) && null !== t ? JSON.parse(JSON.stringify(t)) : t;
				},
				    Me = function Me(t) {
					return t.slice();
				},
				    _e = function _e() {
					var t = arguments.length > 0 && arguments[0] !== e ? arguments[0] : 0,
					    n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : 1;return t + Math.random() * (n - t);
				},
				    De = function De(t) {
					for (var n = [], e = 0; e < t; e++) {
						n.push(e);
					}return n;
				},
				    Ee = function Ee(t) {
					for (var n = t.length; n; n--) {
						var e = Math.floor(Math.random() * n),
						    r = [t[e], t[n - 1]];t[n - 1] = r[0], t[e] = r[1];
					}
				},
				    Ne = function Ne() {
					return window.performance.now();
				},
				    Re = function Re(t, n, e, r) {
					var i = new XMLHttpRequest();r && r(i), i.open("GET", t, !0), i.onload = function () {
						n(i.response);
					}, e && (i.onerror = function () {
						e(i, i.status);
					}), i.send();
				},
				    Se = function Se(t, n) {
					return Oe(t) ? Te(t, n) : Array.isArray(t) ? Ie(t, n) : t === n;
				},
				    Oe = function Oe(t) {
					return t === Object(t);
				},
				    Te = function Te(t, n) {
					for (var e in t) {
						if (!n.hasOwnProperty(e) || t[e] !== n[e]) return !1;
					}return !0;
				},
				    Ie = function Ie(t, n) {
					return t.length == n.length && t.every(function (t, e) {
						return t === n[e];
					});
				},
				    Le = function Le(t) {
					return Object.keys(t).map(function (t) {
						return '"' + t + '"';
					}).join(", ");
				},
				    Ce = function () {
					function t() {
						var n = arguments.length > 0 && arguments[0] !== e ? arguments[0] : {},
						    r = arguments.length > 1 && arguments[1] !== e ? arguments[1] : document.createElement("div");B(this, t), this._options = ve(t.options(), n), this._element = r, this._value = null, this._observer = null, this._viewDefinition = null, this._constants = null, this._presets = null, this._didInit = null, this._didDestroy = null, this._willDestroy = null, this._didUpdate = null, this._init();
					}return V(t, [{ key: "isRootElement", value: function value(t) {
							return this._element === t;
						} }, { key: "setConstant", value: function value(t, n) {
							this._constants[t] = n;
						} }, { key: "getConstants", value: function value() {
							return this._constants;
						} }, { key: "getConstant", value: function value(t) {
							return this._constants[t];
						} }, { key: "setPreset", value: function value(t, n) {
							this._presets[t] = n;
						} }, { key: "getPreset", value: function value(t) {
							return this._presets[t];
						} }, { key: "destroy", value: function value() {
							this._willDestroy(this), this._observer.disconnect(), this.baseDefinition.presenter.destroy(), this._didDestroy(this);
						} }, { key: "_init", value: function value() {
							var t = this;this._viewDefinition = this._options.view, this._willDestroy = this._options.willDestroy, this._didDestroy = this._options.didDestroy, this._didInit = this._options.didInit, this._didUpdate = this._options.didUpdate, this._value = this._options.value, this._presets = this._options.presets, this._constants = this._options.constants, this._element.classList.contains("tick") || this._element.classList.add("tick"), this._observer = it(this._element, ["data-value"], function (n) {
								t.value = n;
							}), this._viewDefinition.root !== this._element && (Array.from(this._viewDefinition.root.children).forEach(function (n) {
								t._element.appendChild(n);
							}), this._viewDefinition.root = this._element), this._viewDefinition.view || this._viewDefinition.children || (this._viewDefinition.view = "text"), this._updater = Jn(this), this._didInit(this, this.value), null !== this.value && this._update(this.value), this._element.dataset.state = "initialised";
						} }, { key: "_update", value: function value(t) {
							this._updater(this.baseDefinition, t), this._didUpdate(this, t);
						} }, { key: "baseDefinition", get: function get() {
							return this._viewDefinition;
						} }, { key: "root", get: function get() {
							return this._element;
						} }, { key: "value", get: function get() {
							return this._value;
						}, set: function set(t) {
							this._value = "string" == typeof t ? me(t) : t, this._update(t);
						} }], [{ key: "options", value: function value() {
							return { constants: ke(), presets: ze(), value: null, view: null, didInit: function didInit(t) {}, didUpdate: function didUpdate(t, n) {}, willDestroy: function willDestroy(t) {}, didDestroy: function didDestroy(t) {} };
						} }]), t;
				}(),
				    xe = function xe(t, n, e, r) {
					return { label: 1 === t ? n : e, progress: t / r, value: t };
				},
				    Ue = [],
				    Fe = function Fe(t, n) {
					qe[t] = n;
				},
				    Pe = function Pe(t, n) {
					Ge[t] = n;
				},
				    ke = function ke() {
					return qe;
				},
				    ze = function ze() {
					return Ge;
				},
				    qe = { YEAR_PLURAL: "Years", YEAR_SINGULAR: "Year", MONTH_PLURAL: "Months", MONTH_SINGULAR: "Month", WEEK_PLURAL: "Weeks", WEEK_SINGULAR: "Week", DAY_PLURAL: "Days", DAY_SINGULAR: "Day", HOUR_PLURAL: "Hours", HOUR_SINGULAR: "Hour", MINUTE_PLURAL: "Minutes", MINUTE_SINGULAR: "Minute", SECOND_PLURAL: "Seconds", SECOND_SINGULAR: "Second", MILLISECOND_PLURAL: "Milliseconds", MILLISECOND_SINGULAR: "Millisecond" },
				    Ge = { y: function y(t, n) {
						return xe(t, n.YEAR_SINGULAR, n.YEAR_PLURAL, 10);
					}, M: function M(t, n) {
						return xe(t, n.MONTH_SINGULAR, n.MONTH_PLURAL, 12);
					}, w: function w(t, n) {
						return xe(t, n.WEEK_SINGULAR, n.WEEK_PLURAL, 52);
					}, d: function d(t, n) {
						return xe(t, n.DAY_SINGULAR, n.DAY_PLURAL, 365);
					}, h: function h(t, n) {
						return xe(t, n.HOUR_SINGULAR, n.HOUR_PLURAL, 24);
					}, m: function m(t, n) {
						return xe(t, n.MINUTE_SINGULAR, n.MINUTE_PLURAL, 60);
					}, s: function s(t, n) {
						return xe(t, n.SECOND_SINGULAR, n.SECOND_PLURAL, 60);
					}, mi: function mi(t, n) {
						return xe(t, n.MILLISECOND_SINGULAR, n.MILLISECOND_PLURAL, 1e3);
					} },
				    Ye = { value: me, didInit: pe, didUpdate: pe, didDestroy: pe, willDestroy: pe },
				    je = function je(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : {},
					    r = arguments.length > 2 && arguments[2] !== e ? arguments[2] : {},
					    i = t.dataset,
					    o = { meta: {} };for (var u in i) {
						if (i.hasOwnProperty(u)) {
							var a = n[u],
							    l = i[u];a && (l = a(l), l = null === l ? be(r[u]) : l, o[u] = l);
						}
					}return o;
				},
				    He = function He(t, n) {
					for (var e = 0, r = t.length; e < r; e++) {
						if (t[e].isRootElement(n)) return e;
					}return -1;
				},
				    We = function We(t) {
					var n = void 0,
					    e = void 0,
					    r = void 0,
					    i = [];for (n = t.querySelectorAll(".tick:not([data-state])"), r = n.length; r--;) {
						e = n[r], i.push(Be(e));
					}return i;
				},
				    $e = function $e(t) {
					var n = Ue.filter(function (n) {
						return n.isRootElement(t);
					});return n ? n[0] : null;
				},
				    Ze = function Ze() {
					return X({}, Ce.options(), { constants: X({}, qe), presets: X({}, Ge) });
				},
				    Be = function Be() {
					var t = arguments.length > 0 && arguments[0] !== e ? arguments[0] : e,
					    n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : e;if (t && !ot(t) && (n = t, t = e), !t || !$e(t)) {
						n && n.view && (n.view = Vn([n.view])[0]), !n && t && (n = je(t, Ye, Ze())), t && (n || (n = {}), n.view || (n.view = Bn([t])[0]));var r = new Ce(n, t);return Ue.push(r), r;
					}
				},
				    Ve = function Ve(t) {
					var n = He(Ue, t);return !(n < 0) && (Ue[n].destroy(), Ue.splice(n, 1), !0);
				},
				    Xe = function Xe(t) {
					return function () {
						setTimeout(t, 0);
					};
				},
				    Je = function Je() {
					return Date.now();
				},
				    Ke = function Ke(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : 1e3,
					    r = arguments.length > 2 && arguments[2] !== e ? arguments[2] : {},
					    i = ve({ autostart: !0 }, r),
					    o = null,
					    u = null,
					    a = null,
					    l = 0,
					    s = null,
					    c = !1,
					    f = null,
					    d = function d() {
						return c;
					},
					    h = function h() {
						return null !== u;
					},
					    v = function v() {
						return document.hidden;
					},
					    p = function S() {
						var e = Je(),
						    r = o - e,
						    i = n + r;o = e + i;var a = e - u - l + r;t(a), f = setTimeout(S, i);
					},
					    m = function m() {
						if (d()) return void A();if (!h()) {
							if (u = Je(), setTimeout(function () {
								t(0);
							}, 0), N(), v()) return void _();o = Je() + n, f = setTimeout(function () {
								p();
							}, n);
						}
					},
					    g = function g() {
						clearTimeout(f), f = null, u = null, o = null, a = null, l = 0, s = null, c = !1, E();
					},
					    y = function y() {
						g(), m();
					},
					    w = function w() {
						h() && !v() && (c = !0, E(), b());
					},
					    A = function A() {
						d() && h() && !v() && (c = !1, N(), M());
					},
					    b = function b() {
						clearTimeout(f), a = Je(), s = o - a;
					},
					    M = function M() {
						l += Je() - a, a = null, o = Je() + s, f = setTimeout(function () {
							p();
						}, s);
					},
					    _ = function _() {
						b();
					},
					    D = function D() {
						h() && M();
					},
					    E = function E() {
						document.removeEventListener("visibilitychange", R);
					},
					    N = function N() {
						document.addEventListener("visibilitychange", R);
					},
					    R = function R() {
						v() ? _() : D();
					};return i.autostart && m(), { start: m, stop: Xe(g), reset: Xe(y), pause: Xe(w), resume: A };
				},
				    Qe = function Qe(t) {
					/^[\d]+/.test(t) || (t = "1 " + t);var n = t.split(" ");return parseFloat(n[0]) * p[n[1].toLowerCase()];
				},
				    tr = function tr(t, n) {
					return _(t, n.split(":").map(ge));
				},
				    nr = function nr(t, n) {
					var e = n.match(/januari|februari|march|april|may|june|july|august|september|october|november|december|[\d]+th|\dst|\dnd|first|last|at\s[\d]+(?::[\d]+)?(?::[\d]+)?/g);
					if (e.length > 1) {
						var r = "";e.forEach(function (t) {
							r = n.split(t)[1] || "";
						});var i = r.trim().match(/wait\s[\d]+\s[a-z]+/);i && e.push(i[0]);
					}var o = e.reduce(function (n, e) {
						return (/([\d]+th|\dst|\dnd|first|last)/.test(e) && (n.day = /^[\d]/.test(e) ? parseInt(e, 10) : "first" === e ? 1 : e), /^at/.test(e) ? n.time = tr(z(t), e.substr(3)) : /wait/.test(e) ? n.idle = Qe(e.substr(5)) : /^[\a-zA-Z]+$/.test(e) && (n.month = e), n
						);
					}, { idle: null, day: null, month: null, time: null, date: null, dist: null, wait: !1 });if (o.time) {
						o.time.setDate(1), o.time = N(o.time, o.month), o.time = E(o.time, o.day);var u = o.time - t,
						    a = 0;if (u < 0 && (a = u, o.time.setFullYear(o.time.getFullYear() + 1), u = o.time - t), null !== o.idle && a + o.idle > 0) return o.wait = !0, o;o.dist = u;
					} else {
						o.time = z(t), o.time.setDate(1), o.time = N(o.time, o.month), o.time = E(o.time, o.day);var l = or(o.time, n);if (l.wait) return o;o.time = z(T(t, o.time) && l.date ? l.date : l.from);var s = o.time - t;s < 0 && (o.time = z(l.from), o.time.setFullYear(o.time.getFullYear() + 1), s = o.time - t), o.dist = s;
					}return o.date = z(o.time), o;
				},
				    er = function er(t, n) {
					var e = n.match(/[\d]+th|\dst|\dnd|first|last|at\s[\d]+(?::[\d]+)?(?::[\d]+)?/g);if (e.length > 1) {
						var r = "";e.forEach(function (t) {
							r = n.split(t)[1] || "";
						});var i = r.trim().match(/wait\s[\d]+\s[a-z]+/);i && e.push(i[0]);
					}var o = e.reduce(function (n, e) {
						return (/([\d]+th|\dst|\dnd|first|last)/.test(e) && (n.day = /^[\d]/.test(e) ? parseInt(e, 10) : "first" === e ? 1 : e), /^at/.test(e) ? n.time = tr(z(t), e.substr(3)) : /wait/.test(e) && (n.idle = Qe(e.substr(5))), n
						);
					}, { idle: null, day: null, time: null, date: null, dist: null, wait: !1 });if (o.time) {
						o.time = E(o.time, o.day);var u = o.time - t,
						    a = 0;if (u < 0 && (a = u, o.time.setDate(1), o.time.setMonth(o.time.getMonth() + 1), E(o.time, o.day), u = o.time - t), null !== o.idle && a + o.idle > 0) return o.wait = !0, o;o.dist = u;
					} else {
						o.time = E(z(t), o.day);var l = or(o.time, n);if (l.wait) return o;o.time = z(T(t, o.time) && l.date ? l.date : l.from);var s = o.time - t;s < 0 && (o.time = z(l.from), o.time.setDate(1), o.time.setMonth(o.time.getMonth() + 1), E(o.time, o.day), s = o.time - t), o.dist = s;
					}return o.date = z(o.time), o;
				},
				    rr = function rr(t, n) {
					var e = n.match(/(?:mon|tues|wednes|thurs|fri|satur|sun)day|at\s[\d]+(?::[\d]+)?(?::[\d]+)?/g);if (e.length > 1) {
						var r = "";e.forEach(function (t) {
							r = n.split(t)[1] || "";
						});var i = r.trim().match(/wait\s[\d]+\s[a-z]+/);i && e.push(i[0]);
					}var o = e.reduce(function (n, e) {
						return (/(?:mon|tues|wednes|thurs|fri|satur|sun)day/.test(e) && (n.day = w[we(e)]), /^at/.test(e) ? n.time = tr(z(t), e.substr(3)) : /wait/.test(e) && (n.idle = Qe(e.substr(5))), n
						);
					}, { idle: null, day: null, time: null, date: null, dist: null, wait: !1 });if (o.time) {
						o.time = D(o.time, o.day);var u = o.time - t;if (u < 0 && (o.time.setDate(o.time.getDate() + 7), u = o.time - t), null !== o.idle && u >= p.Week - o.idle) return o.wait = !0, o;o.dist = u;
					} else {
						o.time = D(z(t), o.day);var a = or(o.time, n);if (a.wait) return o;o.time = z(T(t, o.time) && a.date ? a.date : a.from);var l = o.time - t;l < 0 && o.time.setDate(o.time.getDate() + 7), o.dist = l;
					}return o.date = z(o.time), o;
				},
				    ir = function ir(t, n) {
					var e = n.match(/([\d]+(?::[\d]+)?(?::[\d]+)?)|(wait\s[\d]+\s[a-z]+)/g),
					    r = e.reduce(function (n, e) {
						return (/^[\d]/.test(e) ? n.time = tr(z(t), e) : /wait/.test(e) && (n.idle = Qe(e.substr(5))), n
						);
					}, { idle: null, time: null, date: null, wait: !1, dist: null }),
					    i = r.time - t;return i < 0 && (r.time.setDate(r.time.getDate() + 1), i = r.time - t), null !== r.idle && i >= p.Day - r.idle ? (r.wait = !0, r) : (r.dist = i, r.date = z(r.time), r);
				},
				    or = function or(t, n) {
					var e = n.match(/((?:[\d]+\s)?(?:hours|hour|minutes|minute|seconds|second))|((?:from|till)\s[\d]+(?::[\d]+)?(?::[\d]+)?)|(wait\s[\d]+\s[a-z]+)/g),
					    r = e.reduce(function (t, n) {
						return (/from/.test(n) ? t.from = tr(t.from, n.split(" ")[1]) : /till/.test(n) ? t.till = tr(t.till, n.split(" ")[1]) : /wait/.test(n) ? t.idle = Qe(n.substr(5)) : /hours|hour|minutes|minute|seconds|second/.test(n) && (t.interval = Qe(n)), t
						);
					}, { idle: null, interval: null, date: null, dist: null, wait: !1, from: tr(z(t), "0"), till: tr(z(t), "23:59:59:999") });if (t < r.from || t >= r.till) return r;if (r.interval > r.till - r.from) return r;var i = t - r.from,
					    o = r.interval - i % r.interval;return null !== r.idle && o >= r.interval - r.idle ? (r.wait = !0, r) : (r.dist = o, r.date = new Date(t.getTime() + r.dist), r);
				},
				    ur = function ur(t, n) {
					return (/januari|februari|march|april|may|june|july|august|september|october|november|december/.test(n) ? nr(t, n) : /month/.test(n) ? er(t, n) : /(?:mon|tues|wednes|thurs|fri|satur|sun)day/.test(n) ? rr(t, n) : /day at/.test(n) ? ir(t, n) : /hours|hour|minutes|minute|seconds|second/.test(n) ? or(t, n) : null
					);
				},
				    ar = function ar(t, n) {
					var e = null;return n.split(",").map(ye).map(function (n) {
						return ur(t, n);
					}).filter(function (t) {
						return null !== t && null !== t.date;
					}).reduce(function (t, n) {
						return e = n.dist, (!t || n.dist < e) && (t = n.date), t;
					}, null);
				},
				    lr = function lr(t, n) {
					return t === !0 ? void b(function (t) {
						n(t.getTime() - k().getTime());
					}) : "string" == typeof t ? void n(C(t).getTime() - k().getTime()) : void setTimeout(function () {
						n(0);
					}, 0);
				},
				    sr = { format: ["d", "h", "m", "s"], cascade: !0, server: null, interval: 1e3 },
				    cr = function cr(t) {
					return X({ complete: !1, offset: null, value: null, timer: null, onload: function onload() {}, onupdate: function onupdate(t) {} }, t);
				},
				    fr = function fr(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : {};if ("number" != typeof t) throw 'Can\'t start counter, the "milliseconds" parameter is required';n = ve({ units: "seconds", target: 0, amount: 1e3, interval: 1e3 }, n);var r = n.target,
					    i = t,
					    o = cr({ target: r, onended: function onended() {} });return setTimeout(function () {
						var e = function e(_e2) {
							return i = t - _e2 / n.interval * n.amount, i <= r ? (o.value = n.target, o.onupdate(o.value / p[n.units]), o.timer.stop(), void o.onended()) : (o.value = i, void o.onupdate(o.value / p[n.units]));
						};o.timer = Ke(e, n.interval, { autostart: !1 }), o.complete = !0, o.onload(), o.timer.start();
					}, 0), o;
				},
				    dr = function dr(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : {};if ("undefined" == typeof t) throw 'Can\'t start counter, the "due" parameter is required';n = ve(sr, n);var r = M(t) ? t : C(t),
					    i = cr({ due: z(r), onended: function onended() {} });return lr(n.server, function (t) {
						i.offset = t;var e = function e() {
							var e = S(t);return r - e <= 0 ? (i.value = new Array(n.format.length).fill(0), i.onupdate(i.value), i.timer.stop(), void i.onended()) : (i.value = F(e, r, n.format, n.cascade), void i.onupdate(i.value));
						};i.timer = Ke(e, n.interval, { autostart: !1 }), i.complete = !0, i.onload(), i.timer.start();
					}), i;
				},
				    hr = function hr(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : {};if ("undefined" == typeof t) throw 'Can\'t start counter, the "since" parameter is required';n = ve(sr, n);var r = M(t) ? t : C(t),
					    i = cr({ since: z(r) });return lr(n.server, function (t) {
						i.offset = t;var e = function e() {
							var e = S(t);i.value = F(r, e, n.format, n.cascade), i.onupdate(i.value);
						};i.timer = Ke(e, n.interval, { autostart: !1 }), i.complete = !0, i.onload(), i.timer.start();
					}), i;
				},
				    vr = function vr(t) {
					var n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : {};if ("string" != typeof t) throw 'Can\'t start scheduler, "schedule" is a required parameter';n = ve(X({}, sr, { timezone: null }), n);var r = n.timezone ? R(n.timezone) : null,
					    i = cr({ waiting: null, nextScheduledDate: null, previouslyScheduledDate: null, onrepeat: function onrepeat(t, n) {}, onresume: function onresume(t) {}, onwait: function onwait(t) {} }),
					    o = e,
					    u = null;return lr(n.server, function (a) {
						i.offset = a;var l = function l() {
							var l = S(a);return null !== r && (l = O(l, r)), u = ar(l, t), i.waiting = null === u, i.waiting ? (i.value = new Array(n.format.length).fill(0), i.nextScheduledDate && (i.previouslyScheduledDate = z(i.nextScheduledDate)), i.nextScheduledDate = null === u ? null : z(u), void i.onwait(i.previouslyScheduledDate ? z(i.previouslyScheduledDate) : null)) : (i.nextScheduledDate = z(u), null === o && i.onresume(z(u)), (null === o || o !== e && !I(o, u)) && (i.onrepeat(z(u), o ? z(o) : null), o && (i.previouslyScheduledDate = z(o))), o = z(u), i.value = F(l, u, n.format, n.cascade), void i.onupdate(i.value));
						};i.timer = Ke(l, n.interval, { autostart: !1 }), i.complete = !0, i.onload(), i.timer.start();
					}), i;
				},
				    pr = function pr() {
					var t = window;if ("undefined" == typeof t) return !1;var n = t.CSS && t.CSS.supports,
					    e = !!t.MSInputMethodContext && !!document.documentMode,
					    r = n && CSS.supports("transform", "translateX(0)"),
					    i = ["MutationObserver", "requestAnimationFrame"];return e || n && r && !!i.filter(function (n) {
						return n in t;
					}).length;
				},
				    mr = function mr() {
					for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) {
						n[e] = arguments[e];
					}return function (t, e) {
						var r = [],
						    i = t;n.forEach(function (t, o) {
							t(i, function (t) {
								r[o] = t, o === n.length - 1 && e(1 === r.length ? r[0] : r);
							});
						});
					};
				},
				    gr = function gr() {
					var t = arguments.length > 0 && arguments[0] !== e ? arguments[0] : "",
					    n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : "left";return function (e, r) {
						return r(t.length > ("" + e).length ? "left" === n ? ("" + t + e).slice(-t.length) : ("" + e + t).substring(0, t.length) : e);
					};
				},
				    yr = function yr(t) {
					return function (n, e) {
						return e(n + t);
					};
				},
				    wr = function wr() {
					return function (t, n) {
						return n(Math.abs(t));
					};
				},
				    Ar = function Ar(t) {
					return function (n, e) {
						return e(t);
					};
				},
				    br = function br(t) {
					return function (n, e) {
						return e(n % t);
					};
				},
				    Mr = function Mr(t) {
					return function (n, e) {
						return e(n - t);
					};
				},
				    _r = function _r(t, n) {
					return function (e, r) {
						return r((e + "").replace(new RegExp("." === t ? "\\" + t : t, "g"), n));
					};
				},
				    Dr = function Dr() {
					var t = arguments.length > 0 && arguments[0] !== e ? arguments[0] : 0;return function (n, e) {
						return e(t ? n.toFixed(t) : Math.round(n));
					};
				},
				    Er = function Er() {
					return function (t, n) {
						return n(Math.floor(t));
					};
				},
				    Nr = function Nr() {
					return function (t, n) {
						return n(Math.ceil(t));
					};
				},
				    Rr = function Rr() {
					var t = arguments.length > 0 && arguments[0] !== e ? arguments[0] : 0,
					    n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : 100;return function (e, r) {
						return r((parseFloat(e) - t) / (n - t));
					};
				},
				    Sr = function Sr(t) {
					return function (n, e) {
						return e(n * t);
					};
				},
				    Or = function Or(t) {
					return function (n, e) {
						return e(n / t);
					};
				},
				    Tr = function Tr(t) {
					return function (n, e) {
						return e(t.replace(/\$0/gi, n));
					};
				},
				    Ir = function Ir() {
					var t = arguments.length > 0 && arguments[0] !== e ? arguments[0] : "";return function (n, e) {
						return e((n + "").split(t));
					};
				},
				    Lr = function Lr(t, n) {
					return function (e, r) {
						return r(1 === e ? t : n);
					};
				},
				    Cr = function Cr() {
					var t = arguments.length > 0 && arguments[0] !== e ? arguments[0] : 0,
					    n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : 1;return function (e, r) {
						return r(Math.min(Math.max(e, t), n));
					};
				},
				    xr = function xr() {
					return function (t, n) {
						return n(Array.isArray(t) ? t.reverse() : (t + "").split("").reverse().join(""));
					};
				},
				    Ur = function Ur(t, n) {
					var r = arguments.length > 2 && arguments[2] !== e && arguments[2],
					    i = null,
					    o = null,
					    u = null;return function (e, a) {
						return e = parseFloat(e), null === i ? (i = e, void a(e)) : (r && null !== o && i === e && (u.cancel(), u = null), u ? u.update(a, e) : (u = hn("arrive", t, n), u.update(a, i, e)), void (o = e));
					};
				},
				    Fr = function Fr(t, n, e) {
					var r = null,
					    i = null;return function (o, u) {
						return o = parseFloat(o), null === r ? (r = o, void u(o)) : void (i ? i.update(u, o) : (i = hn("spring", t, n, e), i.update(u, r, o)));
					};
				},
				    Pr = function Pr() {
					var t = arguments.length > 0 && arguments[0] !== e ? arguments[0] : "rtl",
					    n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : 50,
					    r = arguments.length > 2 && arguments[2] !== e ? arguments[2] : 50,
					    i = null;return function (e, o) {
						if (!i) return i = Me(e), void o(Me(i));i = "rtl" === t ? i.slice(i.length - e.length, i.length) : i.slice(0, e.length);var u = De(e.length);"random" === t && Ee(u), "rtl" === t && u.reverse();var a = function l() {
							kr(u.shift(), i, e, o), u.length && setTimeout(l, _e(n, r));
						};a();
					};
				},
				    kr = function kr(t, n, e, r) {
					n[t] = e[t], r(Me(n));
				},
				    zr = function zr() {
					var t = arguments.length > 0 && arguments[0] !== e ? arguments[0] : ".",
					    n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : ",",
					    r = arguments.length > 2 && arguments[2] !== e ? arguments[2] : 2;return function (e, i) {
						i((e < 0 ? "-" : "") + parseFloat(Math.abs(e)).toFixed(r).replace(/./g, function (e, r, i) {
							return "." === e ? t : r && (i.length - r) % 3 === 0 ? n + e : e;
						}));
					};
				},
				    qr = function qr() {
					var t = arguments.length > 0 && arguments[0] !== e ? arguments[0] : 0,
					    n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : 100,
					    r = Rr(t, n);return function (t, n) {
						r(t, function (t) {
							n(100 * t);
						});
					};
				},
				    Gr = function Gr(t) {
					var n = null,
					    e = null,
					    r = null;return function (i, o) {
						return i = parseFloat(i), null === n ? (n = i, void o(i)) : (null !== e && n === i && (r.cancel(), r = null), r ? r.update(o, i) : (r = hn("step", t), r.update(o, n, i)), void (e = i));
					};
				},
				    Yr = function Yr() {
					return function (t, n) {
						return n((t + "").toUpperCase());
					};
				},
				    jr = function jr() {
					return function (t, n) {
						return n((t + "").toLowerCase());
					};
				},
				    Hr = function Hr() {
					for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) {
						n[e] = arguments[e];
					}return function (t, e) {
						return e(U(t, n));
					};
				},
				    Wr = function Wr() {
					for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) {
						n[e] = arguments[e];
					}return function (t, e) {
						var r = {};t.forEach(function (t, e) {
							r[n[e]] = t;
						}), e(r);
					};
				},
				    $r = function $r(t) {
					return function (n, e) {
						var r = [],
						    i = n;i.forEach(function (n, o) {
							t(n, function (t) {
								r[o] = t, o === i.length - 1 && e(r.concat());
							});
						});
					};
				},
				    Zr = function Zr() {
					for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) {
						n[e] = arguments[e];
					}return function (t, e) {
						var r = Array.isArray(t) ? t : [t],
						    i = [],
						    o = n.length;r.forEach(function (t, u) {
							n[u % o](t, function (t) {
								i[u] = t, u === r.length - 1 && e(i);
							});
						});
					};
				},
				    Br = function Br() {
					return function (t, n) {
						return n(t);
					};
				},
				    Vr = function Vr(t, n) {
					return function (e, r) {
						return r((e + "").substring(t, n));
					};
				},
				    Xr = function Xr(t) {
					var r = arguments.length > 1 && arguments[1] !== e ? arguments[1] : "ease-linear",
					    i = arguments[2];t = Dt(t);var o = u(n.EASING_FUNCTION, r),
					    a = null,
					    l = null;return function (n, e) {
						if (n = parseFloat(n), a && a(), null === l || n === l) return l = n, void e(n);var r = n,
						    u = l,
						    s = r - u;a = cn(function (t) {
							e(u + t * s);
						}, function () {
							a = null;
						}, t, o, i), l = n;
					};
				},
				    Jr = function Jr() {
					for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) {
						n[e] = arguments[e];
					}return function (t, e, r) {
						return e(t.map(function (t, e) {
							return r.getPreset(n[e])(t, r.getConstants(), r);
						}));
					};
				},
				    Kr = { tween: Xr, value: Ar, input: Br, rotate: Zr, map: $r, transform: mr, upper: Yr, lower: jr, abs: wr, add: yr, subtract: Mr, modulus: br, pad: gr, number: zr, replace: _r, round: Dr, ceil: Nr, floor: Er, fraction: Rr, percentage: qr, multiply: Sr, divide: Or, split: Ir, format: Tr, plural: Lr, limit: Cr, reverse: xr, arrive: Ur, spring: Fr, delay: Pr, step: Gr, keys: Wr, duration: Hr, substring: Vr, preset: Jr };i(n.TRANSFORM, Kr);var Qr = function Qr() {
					var t = arguments.length > 0 && arguments[0] !== e ? arguments[0] : 1,
					    n = arguments[1],
					    r = arguments[2];return { intro: [{ name: "fade", parameters: [0, 1], duration: 1e3 * t, delay: Dt(n) }], outro: [{ name: "fade", parameters: [1, 0], duration: 1e3 * t, delay: Dt(r) }] };
				},
				    ti = function ti() {
					var t = arguments.length > 0 && arguments[0] !== e ? arguments[0] : "y",
					    n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : 1,
					    r = arguments.length > 2 && arguments[2] !== e ? arguments[2] : 1,
					    i = arguments[3],
					    o = arguments[4];return { intro: [{ name: "move", parameters: ["" + 100 * -n, "0%", t], duration: 1e3 * r, delay: Dt(i) }], outro: [{ name: "move", parameters: ["0%", "" + 100 * n, t], duration: 1e3 * r, delay: Dt(o) }] };
				},
				    ni = function ni() {
					var t = arguments.length > 0 && arguments[0] !== e ? arguments[0] : "y",
					    n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : 1,
					    r = arguments.length > 2 && arguments[2] !== e ? arguments[2] : 1,
					    i = arguments[3],
					    o = arguments[4];return { intro: [{ name: "rotate", parameters: [90 * -n + "deg", "0deg", t], duration: 1e3 * r, delay: Dt(i) }], outro: [{ name: "rotate", parameters: ["0deg", 90 * n + "deg", t], duration: 1e3 * r, delay: Dt(o) }] };
				},
				    ei = function ei() {
					var t = arguments.length > 0 && arguments[0] !== e ? arguments[0] : 0,
					    n = arguments.length > 1 && arguments[1] !== e ? arguments[1] : 1,
					    r = arguments[2],
					    i = arguments[3];return { intro: [{ name: "scale", parameters: [t, 1], duration: 1e3 * n, delay: Dt(r) }], outro: [{ name: "scale", parameters: [1, t], duration: 1e3 * n, delay: Dt(i) }] };
				},
				    ri = { x: "translateX", y: "translateY", z: "translateZ" },
				    ii = { x: "rotateX", y: "rotateY", z: "rotateZ" },
				    oi = { both: "scale", x: "scaleX", y: "scaleY" },
				    ui = function ui(t, n, e) {
					return t + (n - t) * e;
				},
				    ai = function ai(t, n, r) {
					var i = arguments.length > 3 && arguments[3] !== e ? arguments[3] : Ht,
					    o = arguments.length > 4 && arguments[4] !== e ? arguments[4] : 0,
					    u = arguments.length > 5 && arguments[5] !== e ? arguments[5] : 1;if (r < 0) {
						var a = [u, o];o = a[0], u = a[1];
					}t.style.opacity = ui(o, u, i(n));
				},
				    li = function li(t, n, r) {
					var i = arguments.length > 3 && arguments[3] !== e ? arguments[3] : Ht,
					    o = arguments.length > 4 && arguments[4] !== e ? arguments[4] : "0",
					    u = arguments.length > 5 && arguments[5] !== e ? arguments[5] : "100%",
					    a = arguments.length > 6 && arguments[6] !== e ? arguments[6] : "y";if (r < 0) {
						var l = [u, o];o = l[0], u = l[1];
					}var s = vt(o, he),
					    c = vt(u, he);at(t, ri[a], ui(s.value, c.value, i(n)), s.units || c.units);
				},
				    si = function si(t, n, r) {
					var i = arguments.length > 3 && arguments[3] !== e ? arguments[3] : Ht,
					    o = arguments.length > 4 && arguments[4] !== e ? arguments[4] : "0",
					    u = arguments.length > 5 && arguments[5] !== e ? arguments[5] : "90deg",
					    a = arguments.length > 6 && arguments[6] !== e ? arguments[6] : "x";if (r < 0) {
						var l = [u, o];o = l[0], u = l[1];
					}var s = vt(o, he),
					    c = vt(u, he);at(t, ii[a], ui(s.value, c.value, i(n)), s.units || c.units);
				},
				    ci = function ci(t, n, r) {
					var i = arguments.length > 3 && arguments[3] !== e ? arguments[3] : Ht,
					    o = arguments.length > 4 && arguments[4] !== e ? arguments[4] : 0,
					    u = arguments.length > 5 && arguments[5] !== e ? arguments[5] : 1,
					    a = arguments.length > 6 && arguments[6] !== e ? arguments[6] : "both";if (r < 0) {
						var l = [u, o];o = l[0], u = l[1];
					}at(t, oi[a], ui(o, u, i(n)));
				},
				    fi = { fade: ai, move: li, rotate: si, scale: ci, crossfade: Qr, swap: ti, revolve: ni, zoom: ei };i(n.TRANSITION, fi);var di = { supported: pr(), options: { setConstant: Fe, setPreset: Pe }, helper: { interval: Ke, date: function date(t) {
							return t ? C(t) : k();
						}, duration: P }, data: { request: Re, poll: function poll(t, n) {
							var r = arguments.length > 2 && arguments[2] !== e ? arguments[2] : 6e4;return Ke(function () {
								Re(t, n);
							}, r);
						} }, DOM: { create: Be, destroy: Ve, parse: We, find: $e }, count: { down: function down() {
							for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) {
								n[r] = arguments[r];
							}if ("number" == typeof n[0] && "string" == typeof n[1]) {
								var i = n[0],
								    o = n[1].toLowerCase();return n.shift(), n[0] = P(i, o), n[1] = n[1] || {}, n[1].units = o, fr.apply(e, n);
							}return "string" == typeof n[0] || M(n[0]) ? dr.apply(e, n) : null;
						}, up: hr, schedule: vr }, plugin: { add: function add(t, n, e) {
							if ("function" == typeof t) {
								var r = t;return o(r.identifier.type, r.identifier.name, r);
							}return o(t, n, e);
						} } },
				    hi = function hi(t) {
					return n.hasOwnProperty(t) ? void (di.plugin[Ae("add-" + n[t])] = function (e, r) {
						o(n[t], e, r);
					}) : "continue";
				};for (var vi in n) {
					hi(vi);
				}return t.exports = di, t.exports;
			}();!function () {
				function e(t) {
					r.plugin.add.apply(null, t);
				}function i() {
					r.DOM.parse(document);
				}r.push = e, n.forEach(e), t.Tick = r, "loading" !== document.readyState ? setTimeout(function () {
					i();
				}, 0) : document.addEventListener("DOMContentLoaded", i);
			}();
		}
	}(window, window.Tick || []);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint class-methods-use-this: ["error", { "exceptMethods": ["ready"] }] */
	
	var _d = __webpack_require__(46);
	
	var d3 = _interopRequireWildcard(_d);
	
	var _topojson = __webpack_require__(47);
	
	var topojson = _interopRequireWildcard(_topojson);
	
	var _utilities = __webpack_require__(9);
	
	var _chargeData = __webpack_require__(48);
	
	var _chargeData2 = _interopRequireDefault(_chargeData);
	
	var _gridmap = __webpack_require__(49);
	
	var _gridmap2 = _interopRequireDefault(_gridmap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var mapConfig = {};
	var instances = [];
	
	var EvMap = function () {
	
	    /**
	     * Create a new Map
	     *
	     * @param {element}
	     */
	    function EvMap(element) {
	        _classCallCheck(this, EvMap);
	
	        if (window.isTouchDevice || window.isMobileSize) {
	            return;
	        }
	
	        mapConfig = {
	            mapID: '#gridmap',
	            mapWidth: 700,
	            mapHeight: 553, // size of the map on the page in pixels
	            mapDotStepSize: 10, // size of the map dots
	            mapDotColour: '#CCCCCC', // fill colour of the dots
	            mapLonLeft: -12.0, // enter the longitude in degrees on left edge of map, by comparing with Google Maps
	            mapLonRight: 16.04, // enter the longitude in degrees on right edge of map
	            mapLatBottom: 47.1, // enter the latitude in degrees on bottom edge of map
	            timeDelay: 6000, // time in milliseconds between new charges appearing on the map
	            s: 2250, // scale
	            t: [300, 2350] };
	
	        this.element = element;
	        this.jsonPath = element.getAttribute('data-json-path');
	        this.mapElement = document.getElementById(mapConfig.mapID);
	        this.markerHolder = document.getElementById('markerHolder');
	        this.markerCircleHolder = document.getElementById('markerCircleHolder');
	        this.markerCircle = document.getElementById('markerCircle');
	        this.kwText = document.getElementById('kw');
	        this.savingText = document.getElementById('saving');
	        this.lastHighlightedDot = [];
	
	        mapConfig.projection = d3.geoAzimuthalEqualArea().scale(mapConfig.s).translate(mapConfig.t).clipAngle(180).precision(1);
	
	        d3.queue().defer(d3.json, this.jsonPath).await(this.ready);
	
	        this.startCharges();
	    }
	
	    /**
	     * Create the map
	     *
	     * @param error
	     * @param eu
	     */
	
	
	    _createClass(EvMap, [{
	        key: 'ready',
	        value: function ready(error, eu) {
	            var features = topojson.feature(eu, eu.objects.europe).features;
	            var data = d3.map();
	            var j = void 0;
	            var len = void 0;
	
	            for (j = 0, len = features.length; j < len; j += 1) {
	                data.set(features[j].id, (0, _utilities.getRandomInt)(1, 5));
	            }
	
	            var chart = (0, _gridmap2.default)().data(data).width(mapConfig.mapWidth).height(mapConfig.mapHeight).key('id').side(mapConfig.mapDotStepSize).projection(mapConfig.projection).features(features).fill(mapConfig.mapDotColour);
	
	            d3.select(mapConfig.mapID).call(chart);
	        }
	
	        /**
	         * Show the marker
	         *
	         * @param x
	         * @param y
	         * @param kw
	         * @param saving
	         */
	
	    }, {
	        key: 'showMarker',
	        value: function showMarker(x, y, kw, saving) {
	            this.lastHighlightedDot = [x, y];
	            this.mapPoint = document.querySelector('circle[cx="' + x + '"][cy="' + y + '"]');
	
	            if (this.mapPoint) {
	                this.mapPoint.classList.add('gridmap-dot-selected');
	
	                this.kwText.innerHTML = kw;
	                this.savingText.innerHTML = saving.toFixed(2);
	
	                this.markerHolder.style.left = x - 50 + 'px';
	                this.markerHolder.style.top = y - 50 + 'px';
	                this.markerHolder.classList.remove('hidden');
	
	                this.markerCircleHolder.classList.add('ev-map-wrap__bulge-appear');
	            } else {
	                this.nextCharge();
	            }
	        }
	
	        /**
	         * Hide the marker
	         */
	
	    }, {
	        key: 'hideMarker',
	        value: function hideMarker() {
	            if (this.lastHighlightedDot[0]) {
	                this.mapPoint = document.querySelector('circle[cx="' + this.lastHighlightedDot[0] + '"][cy="' + this.lastHighlightedDot[1] + '"]');
	                if (this.mapPoint) {
	                    this.mapPoint.classList.remove('gridmap-dot-selected');
	                }
	            }
	
	            this.markerHolder.classList.add('hidden');
	            this.markerCircleHolder.classList.remove('ev-map-wrap__bulge-appear');
	            /* eslint no-void: "off" */
	            void this.markerHolder.offsetWidth; // force DOM reflow to result bulge class
	
	            this.lastHighlightedDot = [];
	        }
	
	        /**
	         * Convert latitude and longitude to a dot on the map
	         * (adapted from http://stackoverflow.com/a/27313080)
	         *
	         * @param latitute
	         * @param longitude
	         * @param kw
	         * @param saving
	         */
	
	    }, {
	        key: 'showChargeOnMap',
	        value: function showChargeOnMap(latitude, longitude, kw, saving) {
	            var mapLonDelta = mapConfig.mapLonRight - mapConfig.mapLonLeft;
	            var mapLatBottomDegree = mapConfig.mapLatBottom * Math.PI / 180;
	
	            var x = (longitude - mapConfig.mapLonLeft) * (mapConfig.mapWidth / mapLonDelta);
	            var latitudeNew = latitude * Math.PI / 180;
	            var worldMapWidth = mapConfig.mapWidth / mapLonDelta * 360 / (2 * Math.PI);
	            var mapOffsetY = worldMapWidth / 2 * Math.log((1 + Math.sin(mapLatBottomDegree)) / (1 - Math.sin(mapLatBottomDegree)));
	            var y = mapConfig.mapHeight - (worldMapWidth / 2 * Math.log((1 + Math.sin(latitudeNew)) / (1 - Math.sin(latitudeNew))) - mapOffsetY);
	
	            var dotX = (0, _utilities.roundNumberTo)(x, mapConfig.mapDotStepSize);
	            var dotY = (0, _utilities.roundNumberTo)(y, mapConfig.mapDotStepSize);
	
	            this.showMarker(dotX, dotY, kw, saving);
	        }
	
	        /**
	         * Get the next charge
	         */
	
	    }, {
	        key: 'nextCharge',
	        value: function nextCharge() {
	            this.hideMarker();
	            var charge = _chargeData2.default.charges[Math.floor(Math.random() * _chargeData2.default.charges.length)];
	            this.showChargeOnMap(charge[0], charge[1], charge[2], charge[3]);
	        }
	
	        /**
	         * Start showing charges on the map
	         */
	
	    }, {
	        key: 'startCharges',
	        value: function startCharges() {
	            this.hideMarker();
	            setInterval(this.nextCharge.bind(this), mapConfig.timeDelay);
	        }
	    }]);
	
	    return EvMap;
	}();
	
	exports.default = {
	    init: function init(element) {
	        instances.push(new EvMap(element));
	    }
	};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// https://d3js.org Version 4.9.1. Copyright 2017 Mike Bostock.
	(function (global, factory) {
		 true ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
		(factory((global.d3 = global.d3 || {})));
	}(this, (function (exports) { 'use strict';
	
	var version = "4.9.1";
	
	var ascending = function(a, b) {
	  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	};
	
	var bisector = function(compare) {
	  if (compare.length === 1) compare = ascendingComparator(compare);
	  return {
	    left: function(a, x, lo, hi) {
	      if (lo == null) lo = 0;
	      if (hi == null) hi = a.length;
	      while (lo < hi) {
	        var mid = lo + hi >>> 1;
	        if (compare(a[mid], x) < 0) lo = mid + 1;
	        else hi = mid;
	      }
	      return lo;
	    },
	    right: function(a, x, lo, hi) {
	      if (lo == null) lo = 0;
	      if (hi == null) hi = a.length;
	      while (lo < hi) {
	        var mid = lo + hi >>> 1;
	        if (compare(a[mid], x) > 0) hi = mid;
	        else lo = mid + 1;
	      }
	      return lo;
	    }
	  };
	};
	
	function ascendingComparator(f) {
	  return function(d, x) {
	    return ascending(f(d), x);
	  };
	}
	
	var ascendingBisect = bisector(ascending);
	var bisectRight = ascendingBisect.right;
	var bisectLeft = ascendingBisect.left;
	
	var pairs = function(array, f) {
	  if (f == null) f = pair;
	  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
	  while (i < n) pairs[i] = f(p, p = array[++i]);
	  return pairs;
	};
	
	function pair(a, b) {
	  return [a, b];
	}
	
	var cross = function(values0, values1, reduce) {
	  var n0 = values0.length,
	      n1 = values1.length,
	      values = new Array(n0 * n1),
	      i0,
	      i1,
	      i,
	      value0;
	
	  if (reduce == null) reduce = pair;
	
	  for (i0 = i = 0; i0 < n0; ++i0) {
	    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
	      values[i] = reduce(value0, values1[i1]);
	    }
	  }
	
	  return values;
	};
	
	var descending = function(a, b) {
	  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	};
	
	var number = function(x) {
	  return x === null ? NaN : +x;
	};
	
	var variance = function(values, valueof) {
	  var n = values.length,
	      m = 0,
	      i = -1,
	      mean = 0,
	      value,
	      delta,
	      sum = 0;
	
	  if (valueof == null) {
	    while (++i < n) {
	      if (!isNaN(value = number(values[i]))) {
	        delta = value - mean;
	        mean += delta / ++m;
	        sum += delta * (value - mean);
	      }
	    }
	  }
	
	  else {
	    while (++i < n) {
	      if (!isNaN(value = number(valueof(values[i], i, values)))) {
	        delta = value - mean;
	        mean += delta / ++m;
	        sum += delta * (value - mean);
	      }
	    }
	  }
	
	  if (m > 1) return sum / (m - 1);
	};
	
	var deviation = function(array, f) {
	  var v = variance(array, f);
	  return v ? Math.sqrt(v) : v;
	};
	
	var extent = function(values, valueof) {
	  var n = values.length,
	      i = -1,
	      value,
	      min,
	      max;
	
	  if (valueof == null) {
	    while (++i < n) { // Find the first comparable value.
	      if ((value = values[i]) != null && value >= value) {
	        min = max = value;
	        while (++i < n) { // Compare the remaining values.
	          if ((value = values[i]) != null) {
	            if (min > value) min = value;
	            if (max < value) max = value;
	          }
	        }
	      }
	    }
	  }
	
	  else {
	    while (++i < n) { // Find the first comparable value.
	      if ((value = valueof(values[i], i, values)) != null && value >= value) {
	        min = max = value;
	        while (++i < n) { // Compare the remaining values.
	          if ((value = valueof(values[i], i, values)) != null) {
	            if (min > value) min = value;
	            if (max < value) max = value;
	          }
	        }
	      }
	    }
	  }
	
	  return [min, max];
	};
	
	var array = Array.prototype;
	
	var slice = array.slice;
	var map = array.map;
	
	var constant = function(x) {
	  return function() {
	    return x;
	  };
	};
	
	var identity = function(x) {
	  return x;
	};
	
	var sequence = function(start, stop, step) {
	  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
	
	  var i = -1,
	      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
	      range = new Array(n);
	
	  while (++i < n) {
	    range[i] = start + i * step;
	  }
	
	  return range;
	};
	
	var e10 = Math.sqrt(50);
	var e5 = Math.sqrt(10);
	var e2 = Math.sqrt(2);
	
	var ticks = function(start, stop, count) {
	  var reverse = stop < start,
	      i = -1,
	      n,
	      ticks,
	      step;
	
	  if (reverse) n = start, start = stop, stop = n;
	
	  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];
	
	  if (step > 0) {
	    start = Math.ceil(start / step);
	    stop = Math.floor(stop / step);
	    ticks = new Array(n = Math.ceil(stop - start + 1));
	    while (++i < n) ticks[i] = (start + i) * step;
	  } else {
	    start = Math.floor(start * step);
	    stop = Math.ceil(stop * step);
	    ticks = new Array(n = Math.ceil(start - stop + 1));
	    while (++i < n) ticks[i] = (start - i) / step;
	  }
	
	  if (reverse) ticks.reverse();
	
	  return ticks;
	};
	
	function tickIncrement(start, stop, count) {
	  var step = (stop - start) / Math.max(0, count),
	      power = Math.floor(Math.log(step) / Math.LN10),
	      error = step / Math.pow(10, power);
	  return power >= 0
	      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
	      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
	}
	
	function tickStep(start, stop, count) {
	  var step0 = Math.abs(stop - start) / Math.max(0, count),
	      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
	      error = step0 / step1;
	  if (error >= e10) step1 *= 10;
	  else if (error >= e5) step1 *= 5;
	  else if (error >= e2) step1 *= 2;
	  return stop < start ? -step1 : step1;
	}
	
	var sturges = function(values) {
	  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
	};
	
	var histogram = function() {
	  var value = identity,
	      domain = extent,
	      threshold = sturges;
	
	  function histogram(data) {
	    var i,
	        n = data.length,
	        x,
	        values = new Array(n);
	
	    for (i = 0; i < n; ++i) {
	      values[i] = value(data[i], i, data);
	    }
	
	    var xz = domain(values),
	        x0 = xz[0],
	        x1 = xz[1],
	        tz = threshold(values, x0, x1);
	
	    // Convert number of thresholds into uniform thresholds.
	    if (!Array.isArray(tz)) {
	      tz = tickStep(x0, x1, tz);
	      tz = sequence(Math.ceil(x0 / tz) * tz, Math.floor(x1 / tz) * tz, tz); // exclusive
	    }
	
	    // Remove any thresholds outside the domain.
	    var m = tz.length;
	    while (tz[0] <= x0) tz.shift(), --m;
	    while (tz[m - 1] > x1) tz.pop(), --m;
	
	    var bins = new Array(m + 1),
	        bin;
	
	    // Initialize bins.
	    for (i = 0; i <= m; ++i) {
	      bin = bins[i] = [];
	      bin.x0 = i > 0 ? tz[i - 1] : x0;
	      bin.x1 = i < m ? tz[i] : x1;
	    }
	
	    // Assign data to bins by value, ignoring any outside the domain.
	    for (i = 0; i < n; ++i) {
	      x = values[i];
	      if (x0 <= x && x <= x1) {
	        bins[bisectRight(tz, x, 0, m)].push(data[i]);
	      }
	    }
	
	    return bins;
	  }
	
	  histogram.value = function(_) {
	    return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), histogram) : value;
	  };
	
	  histogram.domain = function(_) {
	    return arguments.length ? (domain = typeof _ === "function" ? _ : constant([_[0], _[1]]), histogram) : domain;
	  };
	
	  histogram.thresholds = function(_) {
	    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), histogram) : threshold;
	  };
	
	  return histogram;
	};
	
	var threshold = function(values, p, valueof) {
	  if (valueof == null) valueof = number;
	  if (!(n = values.length)) return;
	  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
	  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
	  var n,
	      i = (n - 1) * p,
	      i0 = Math.floor(i),
	      value0 = +valueof(values[i0], i0, values),
	      value1 = +valueof(values[i0 + 1], i0 + 1, values);
	  return value0 + (value1 - value0) * (i - i0);
	};
	
	var freedmanDiaconis = function(values, min, max) {
	  values = map.call(values, number).sort(ascending);
	  return Math.ceil((max - min) / (2 * (threshold(values, 0.75) - threshold(values, 0.25)) * Math.pow(values.length, -1 / 3)));
	};
	
	var scott = function(values, min, max) {
	  return Math.ceil((max - min) / (3.5 * deviation(values) * Math.pow(values.length, -1 / 3)));
	};
	
	var max = function(values, valueof) {
	  var n = values.length,
	      i = -1,
	      value,
	      max;
	
	  if (valueof == null) {
	    while (++i < n) { // Find the first comparable value.
	      if ((value = values[i]) != null && value >= value) {
	        max = value;
	        while (++i < n) { // Compare the remaining values.
	          if ((value = values[i]) != null && value > max) {
	            max = value;
	          }
	        }
	      }
	    }
	  }
	
	  else {
	    while (++i < n) { // Find the first comparable value.
	      if ((value = valueof(values[i], i, values)) != null && value >= value) {
	        max = value;
	        while (++i < n) { // Compare the remaining values.
	          if ((value = valueof(values[i], i, values)) != null && value > max) {
	            max = value;
	          }
	        }
	      }
	    }
	  }
	
	  return max;
	};
	
	var mean = function(values, valueof) {
	  var n = values.length,
	      m = n,
	      i = -1,
	      value,
	      sum = 0;
	
	  if (valueof == null) {
	    while (++i < n) {
	      if (!isNaN(value = number(values[i]))) sum += value;
	      else --m;
	    }
	  }
	
	  else {
	    while (++i < n) {
	      if (!isNaN(value = number(valueof(values[i], i, values)))) sum += value;
	      else --m;
	    }
	  }
	
	  if (m) return sum / m;
	};
	
	var median = function(values, valueof) {
	  var n = values.length,
	      i = -1,
	      value,
	      numbers = [];
	
	  if (valueof == null) {
	    while (++i < n) {
	      if (!isNaN(value = number(values[i]))) {
	        numbers.push(value);
	      }
	    }
	  }
	
	  else {
	    while (++i < n) {
	      if (!isNaN(value = number(valueof(values[i], i, values)))) {
	        numbers.push(value);
	      }
	    }
	  }
	
	  return threshold(numbers.sort(ascending), 0.5);
	};
	
	var merge = function(arrays) {
	  var n = arrays.length,
	      m,
	      i = -1,
	      j = 0,
	      merged,
	      array;
	
	  while (++i < n) j += arrays[i].length;
	  merged = new Array(j);
	
	  while (--n >= 0) {
	    array = arrays[n];
	    m = array.length;
	    while (--m >= 0) {
	      merged[--j] = array[m];
	    }
	  }
	
	  return merged;
	};
	
	var min = function(values, valueof) {
	  var n = values.length,
	      i = -1,
	      value,
	      min;
	
	  if (valueof == null) {
	    while (++i < n) { // Find the first comparable value.
	      if ((value = values[i]) != null && value >= value) {
	        min = value;
	        while (++i < n) { // Compare the remaining values.
	          if ((value = values[i]) != null && min > value) {
	            min = value;
	          }
	        }
	      }
	    }
	  }
	
	  else {
	    while (++i < n) { // Find the first comparable value.
	      if ((value = valueof(values[i], i, values)) != null && value >= value) {
	        min = value;
	        while (++i < n) { // Compare the remaining values.
	          if ((value = valueof(values[i], i, values)) != null && min > value) {
	            min = value;
	          }
	        }
	      }
	    }
	  }
	
	  return min;
	};
	
	var permute = function(array, indexes) {
	  var i = indexes.length, permutes = new Array(i);
	  while (i--) permutes[i] = array[indexes[i]];
	  return permutes;
	};
	
	var scan = function(values, compare) {
	  if (!(n = values.length)) return;
	  var n,
	      i = 0,
	      j = 0,
	      xi,
	      xj = values[j];
	
	  if (compare == null) compare = ascending;
	
	  while (++i < n) {
	    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
	      xj = xi, j = i;
	    }
	  }
	
	  if (compare(xj, xj) === 0) return j;
	};
	
	var shuffle = function(array, i0, i1) {
	  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
	      t,
	      i;
	
	  while (m) {
	    i = Math.random() * m-- | 0;
	    t = array[m + i0];
	    array[m + i0] = array[i + i0];
	    array[i + i0] = t;
	  }
	
	  return array;
	};
	
	var sum = function(values, valueof) {
	  var n = values.length,
	      i = -1,
	      value,
	      sum = 0;
	
	  if (valueof == null) {
	    while (++i < n) {
	      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
	    }
	  }
	
	  else {
	    while (++i < n) {
	      if (value = +valueof(values[i], i, values)) sum += value;
	    }
	  }
	
	  return sum;
	};
	
	var transpose = function(matrix) {
	  if (!(n = matrix.length)) return [];
	  for (var i = -1, m = min(matrix, length), transpose = new Array(m); ++i < m;) {
	    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
	      row[j] = matrix[j][i];
	    }
	  }
	  return transpose;
	};
	
	function length(d) {
	  return d.length;
	}
	
	var zip = function() {
	  return transpose(arguments);
	};
	
	var slice$1 = Array.prototype.slice;
	
	var identity$1 = function(x) {
	  return x;
	};
	
	var top = 1;
	var right = 2;
	var bottom = 3;
	var left = 4;
	var epsilon = 1e-6;
	
	function translateX(x) {
	  return "translate(" + (x + 0.5) + ",0)";
	}
	
	function translateY(y) {
	  return "translate(0," + (y + 0.5) + ")";
	}
	
	function center(scale) {
	  var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
	  if (scale.round()) offset = Math.round(offset);
	  return function(d) {
	    return scale(d) + offset;
	  };
	}
	
	function entering() {
	  return !this.__axis;
	}
	
	function axis(orient, scale) {
	  var tickArguments = [],
	      tickValues = null,
	      tickFormat = null,
	      tickSizeInner = 6,
	      tickSizeOuter = 6,
	      tickPadding = 3,
	      k = orient === top || orient === left ? -1 : 1,
	      x = orient === left || orient === right ? "x" : "y",
	      transform = orient === top || orient === bottom ? translateX : translateY;
	
	  function axis(context) {
	    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
	        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$1) : tickFormat,
	        spacing = Math.max(tickSizeInner, 0) + tickPadding,
	        range = scale.range(),
	        range0 = range[0] + 0.5,
	        range1 = range[range.length - 1] + 0.5,
	        position = (scale.bandwidth ? center : identity$1)(scale.copy()),
	        selection = context.selection ? context.selection() : context,
	        path = selection.selectAll(".domain").data([null]),
	        tick = selection.selectAll(".tick").data(values, scale).order(),
	        tickExit = tick.exit(),
	        tickEnter = tick.enter().append("g").attr("class", "tick"),
	        line = tick.select("line"),
	        text = tick.select("text");
	
	    path = path.merge(path.enter().insert("path", ".tick")
	        .attr("class", "domain")
	        .attr("stroke", "#000"));
	
	    tick = tick.merge(tickEnter);
	
	    line = line.merge(tickEnter.append("line")
	        .attr("stroke", "#000")
	        .attr(x + "2", k * tickSizeInner));
	
	    text = text.merge(tickEnter.append("text")
	        .attr("fill", "#000")
	        .attr(x, k * spacing)
	        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
	
	    if (context !== selection) {
	      path = path.transition(context);
	      tick = tick.transition(context);
	      line = line.transition(context);
	      text = text.transition(context);
	
	      tickExit = tickExit.transition(context)
	          .attr("opacity", epsilon)
	          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform"); });
	
	      tickEnter
	          .attr("opacity", epsilon)
	          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform(p && isFinite(p = p(d)) ? p : position(d)); });
	    }
	
	    tickExit.remove();
	
	    path
	        .attr("d", orient === left || orient == right
	            ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter
	            : "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter);
	
	    tick
	        .attr("opacity", 1)
	        .attr("transform", function(d) { return transform(position(d)); });
	
	    line
	        .attr(x + "2", k * tickSizeInner);
	
	    text
	        .attr(x, k * spacing)
	        .text(format);
	
	    selection.filter(entering)
	        .attr("fill", "none")
	        .attr("font-size", 10)
	        .attr("font-family", "sans-serif")
	        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
	
	    selection
	        .each(function() { this.__axis = position; });
	  }
	
	  axis.scale = function(_) {
	    return arguments.length ? (scale = _, axis) : scale;
	  };
	
	  axis.ticks = function() {
	    return tickArguments = slice$1.call(arguments), axis;
	  };
	
	  axis.tickArguments = function(_) {
	    return arguments.length ? (tickArguments = _ == null ? [] : slice$1.call(_), axis) : tickArguments.slice();
	  };
	
	  axis.tickValues = function(_) {
	    return arguments.length ? (tickValues = _ == null ? null : slice$1.call(_), axis) : tickValues && tickValues.slice();
	  };
	
	  axis.tickFormat = function(_) {
	    return arguments.length ? (tickFormat = _, axis) : tickFormat;
	  };
	
	  axis.tickSize = function(_) {
	    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
	  };
	
	  axis.tickSizeInner = function(_) {
	    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
	  };
	
	  axis.tickSizeOuter = function(_) {
	    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
	  };
	
	  axis.tickPadding = function(_) {
	    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
	  };
	
	  return axis;
	}
	
	function axisTop(scale) {
	  return axis(top, scale);
	}
	
	function axisRight(scale) {
	  return axis(right, scale);
	}
	
	function axisBottom(scale) {
	  return axis(bottom, scale);
	}
	
	function axisLeft(scale) {
	  return axis(left, scale);
	}
	
	var noop = {value: function() {}};
	
	function dispatch() {
	  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
	    if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
	    _[t] = [];
	  }
	  return new Dispatch(_);
	}
	
	function Dispatch(_) {
	  this._ = _;
	}
	
	function parseTypenames(typenames, types) {
	  return typenames.trim().split(/^|\s+/).map(function(t) {
	    var name = "", i = t.indexOf(".");
	    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
	    return {type: t, name: name};
	  });
	}
	
	Dispatch.prototype = dispatch.prototype = {
	  constructor: Dispatch,
	  on: function(typename, callback) {
	    var _ = this._,
	        T = parseTypenames(typename + "", _),
	        t,
	        i = -1,
	        n = T.length;
	
	    // If no callback was specified, return the callback of the given type and name.
	    if (arguments.length < 2) {
	      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
	      return;
	    }
	
	    // If a type was specified, set the callback for the given type and name.
	    // Otherwise, if a null callback was specified, remove callbacks of the given name.
	    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
	    while (++i < n) {
	      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
	      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
	    }
	
	    return this;
	  },
	  copy: function() {
	    var copy = {}, _ = this._;
	    for (var t in _) copy[t] = _[t].slice();
	    return new Dispatch(copy);
	  },
	  call: function(type, that) {
	    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
	    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	  },
	  apply: function(type, that, args) {
	    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	  }
	};
	
	function get(type, name) {
	  for (var i = 0, n = type.length, c; i < n; ++i) {
	    if ((c = type[i]).name === name) {
	      return c.value;
	    }
	  }
	}
	
	function set(type, name, callback) {
	  for (var i = 0, n = type.length; i < n; ++i) {
	    if (type[i].name === name) {
	      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
	      break;
	    }
	  }
	  if (callback != null) type.push({name: name, value: callback});
	  return type;
	}
	
	var xhtml = "http://www.w3.org/1999/xhtml";
	
	var namespaces = {
	  svg: "http://www.w3.org/2000/svg",
	  xhtml: xhtml,
	  xlink: "http://www.w3.org/1999/xlink",
	  xml: "http://www.w3.org/XML/1998/namespace",
	  xmlns: "http://www.w3.org/2000/xmlns/"
	};
	
	var namespace = function(name) {
	  var prefix = name += "", i = prefix.indexOf(":");
	  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
	};
	
	function creatorInherit(name) {
	  return function() {
	    var document = this.ownerDocument,
	        uri = this.namespaceURI;
	    return uri === xhtml && document.documentElement.namespaceURI === xhtml
	        ? document.createElement(name)
	        : document.createElementNS(uri, name);
	  };
	}
	
	function creatorFixed(fullname) {
	  return function() {
	    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
	  };
	}
	
	var creator = function(name) {
	  var fullname = namespace(name);
	  return (fullname.local
	      ? creatorFixed
	      : creatorInherit)(fullname);
	};
	
	var nextId = 0;
	
	function local$1() {
	  return new Local;
	}
	
	function Local() {
	  this._ = "@" + (++nextId).toString(36);
	}
	
	Local.prototype = local$1.prototype = {
	  constructor: Local,
	  get: function(node) {
	    var id = this._;
	    while (!(id in node)) if (!(node = node.parentNode)) return;
	    return node[id];
	  },
	  set: function(node, value) {
	    return node[this._] = value;
	  },
	  remove: function(node) {
	    return this._ in node && delete node[this._];
	  },
	  toString: function() {
	    return this._;
	  }
	};
	
	var matcher = function(selector) {
	  return function() {
	    return this.matches(selector);
	  };
	};
	
	if (typeof document !== "undefined") {
	  var element = document.documentElement;
	  if (!element.matches) {
	    var vendorMatches = element.webkitMatchesSelector
	        || element.msMatchesSelector
	        || element.mozMatchesSelector
	        || element.oMatchesSelector;
	    matcher = function(selector) {
	      return function() {
	        return vendorMatches.call(this, selector);
	      };
	    };
	  }
	}
	
	var matcher$1 = matcher;
	
	var filterEvents = {};
	
	exports.event = null;
	
	if (typeof document !== "undefined") {
	  var element$1 = document.documentElement;
	  if (!("onmouseenter" in element$1)) {
	    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
	  }
	}
	
	function filterContextListener(listener, index, group) {
	  listener = contextListener(listener, index, group);
	  return function(event) {
	    var related = event.relatedTarget;
	    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
	      listener.call(this, event);
	    }
	  };
	}
	
	function contextListener(listener, index, group) {
	  return function(event1) {
	    var event0 = exports.event; // Events can be reentrant (e.g., focus).
	    exports.event = event1;
	    try {
	      listener.call(this, this.__data__, index, group);
	    } finally {
	      exports.event = event0;
	    }
	  };
	}
	
	function parseTypenames$1(typenames) {
	  return typenames.trim().split(/^|\s+/).map(function(t) {
	    var name = "", i = t.indexOf(".");
	    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	    return {type: t, name: name};
	  });
	}
	
	function onRemove(typename) {
	  return function() {
	    var on = this.__on;
	    if (!on) return;
	    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
	      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
	        this.removeEventListener(o.type, o.listener, o.capture);
	      } else {
	        on[++i] = o;
	      }
	    }
	    if (++i) on.length = i;
	    else delete this.__on;
	  };
	}
	
	function onAdd(typename, value, capture) {
	  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
	  return function(d, i, group) {
	    var on = this.__on, o, listener = wrap(value, i, group);
	    if (on) for (var j = 0, m = on.length; j < m; ++j) {
	      if ((o = on[j]).type === typename.type && o.name === typename.name) {
	        this.removeEventListener(o.type, o.listener, o.capture);
	        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
	        o.value = value;
	        return;
	      }
	    }
	    this.addEventListener(typename.type, listener, capture);
	    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
	    if (!on) this.__on = [o];
	    else on.push(o);
	  };
	}
	
	var selection_on = function(typename, value, capture) {
	  var typenames = parseTypenames$1(typename + ""), i, n = typenames.length, t;
	
	  if (arguments.length < 2) {
	    var on = this.node().__on;
	    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
	      for (i = 0, o = on[j]; i < n; ++i) {
	        if ((t = typenames[i]).type === o.type && t.name === o.name) {
	          return o.value;
	        }
	      }
	    }
	    return;
	  }
	
	  on = value ? onAdd : onRemove;
	  if (capture == null) capture = false;
	  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
	  return this;
	};
	
	function customEvent(event1, listener, that, args) {
	  var event0 = exports.event;
	  event1.sourceEvent = exports.event;
	  exports.event = event1;
	  try {
	    return listener.apply(that, args);
	  } finally {
	    exports.event = event0;
	  }
	}
	
	var sourceEvent = function() {
	  var current = exports.event, source;
	  while (source = current.sourceEvent) current = source;
	  return current;
	};
	
	var point = function(node, event) {
	  var svg = node.ownerSVGElement || node;
	
	  if (svg.createSVGPoint) {
	    var point = svg.createSVGPoint();
	    point.x = event.clientX, point.y = event.clientY;
	    point = point.matrixTransform(node.getScreenCTM().inverse());
	    return [point.x, point.y];
	  }
	
	  var rect = node.getBoundingClientRect();
	  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
	};
	
	var mouse = function(node) {
	  var event = sourceEvent();
	  if (event.changedTouches) event = event.changedTouches[0];
	  return point(node, event);
	};
	
	function none() {}
	
	var selector = function(selector) {
	  return selector == null ? none : function() {
	    return this.querySelector(selector);
	  };
	};
	
	var selection_select = function(select) {
	  if (typeof select !== "function") select = selector(select);
	
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
	        if ("__data__" in node) subnode.__data__ = node.__data__;
	        subgroup[i] = subnode;
	      }
	    }
	  }
	
	  return new Selection(subgroups, this._parents);
	};
	
	function empty$1() {
	  return [];
	}
	
	var selectorAll = function(selector) {
	  return selector == null ? empty$1 : function() {
	    return this.querySelectorAll(selector);
	  };
	};
	
	var selection_selectAll = function(select) {
	  if (typeof select !== "function") select = selectorAll(select);
	
	  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        subgroups.push(select.call(node, node.__data__, i, group));
	        parents.push(node);
	      }
	    }
	  }
	
	  return new Selection(subgroups, parents);
	};
	
	var selection_filter = function(match) {
	  if (typeof match !== "function") match = matcher$1(match);
	
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
	      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	        subgroup.push(node);
	      }
	    }
	  }
	
	  return new Selection(subgroups, this._parents);
	};
	
	var sparse = function(update) {
	  return new Array(update.length);
	};
	
	var selection_enter = function() {
	  return new Selection(this._enter || this._groups.map(sparse), this._parents);
	};
	
	function EnterNode(parent, datum) {
	  this.ownerDocument = parent.ownerDocument;
	  this.namespaceURI = parent.namespaceURI;
	  this._next = null;
	  this._parent = parent;
	  this.__data__ = datum;
	}
	
	EnterNode.prototype = {
	  constructor: EnterNode,
	  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
	  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
	  querySelector: function(selector) { return this._parent.querySelector(selector); },
	  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
	};
	
	var constant$1 = function(x) {
	  return function() {
	    return x;
	  };
	};
	
	var keyPrefix = "$"; // Protect against keys like “__proto__”.
	
	function bindIndex(parent, group, enter, update, exit, data) {
	  var i = 0,
	      node,
	      groupLength = group.length,
	      dataLength = data.length;
	
	  // Put any non-null nodes that fit into update.
	  // Put any null nodes into enter.
	  // Put any remaining data into enter.
	  for (; i < dataLength; ++i) {
	    if (node = group[i]) {
	      node.__data__ = data[i];
	      update[i] = node;
	    } else {
	      enter[i] = new EnterNode(parent, data[i]);
	    }
	  }
	
	  // Put any non-null nodes that don’t fit into exit.
	  for (; i < groupLength; ++i) {
	    if (node = group[i]) {
	      exit[i] = node;
	    }
	  }
	}
	
	function bindKey(parent, group, enter, update, exit, data, key) {
	  var i,
	      node,
	      nodeByKeyValue = {},
	      groupLength = group.length,
	      dataLength = data.length,
	      keyValues = new Array(groupLength),
	      keyValue;
	
	  // Compute the key for each node.
	  // If multiple nodes have the same key, the duplicates are added to exit.
	  for (i = 0; i < groupLength; ++i) {
	    if (node = group[i]) {
	      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
	      if (keyValue in nodeByKeyValue) {
	        exit[i] = node;
	      } else {
	        nodeByKeyValue[keyValue] = node;
	      }
	    }
	  }
	
	  // Compute the key for each datum.
	  // If there a node associated with this key, join and add it to update.
	  // If there is not (or the key is a duplicate), add it to enter.
	  for (i = 0; i < dataLength; ++i) {
	    keyValue = keyPrefix + key.call(parent, data[i], i, data);
	    if (node = nodeByKeyValue[keyValue]) {
	      update[i] = node;
	      node.__data__ = data[i];
	      nodeByKeyValue[keyValue] = null;
	    } else {
	      enter[i] = new EnterNode(parent, data[i]);
	    }
	  }
	
	  // Add any remaining nodes that were not bound to data to exit.
	  for (i = 0; i < groupLength; ++i) {
	    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
	      exit[i] = node;
	    }
	  }
	}
	
	var selection_data = function(value, key) {
	  if (!value) {
	    data = new Array(this.size()), j = -1;
	    this.each(function(d) { data[++j] = d; });
	    return data;
	  }
	
	  var bind = key ? bindKey : bindIndex,
	      parents = this._parents,
	      groups = this._groups;
	
	  if (typeof value !== "function") value = constant$1(value);
	
	  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
	    var parent = parents[j],
	        group = groups[j],
	        groupLength = group.length,
	        data = value.call(parent, parent && parent.__data__, j, parents),
	        dataLength = data.length,
	        enterGroup = enter[j] = new Array(dataLength),
	        updateGroup = update[j] = new Array(dataLength),
	        exitGroup = exit[j] = new Array(groupLength);
	
	    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
	
	    // Now connect the enter nodes to their following update node, such that
	    // appendChild can insert the materialized enter node before this node,
	    // rather than at the end of the parent node.
	    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
	      if (previous = enterGroup[i0]) {
	        if (i0 >= i1) i1 = i0 + 1;
	        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
	        previous._next = next || null;
	      }
	    }
	  }
	
	  update = new Selection(update, parents);
	  update._enter = enter;
	  update._exit = exit;
	  return update;
	};
	
	var selection_exit = function() {
	  return new Selection(this._exit || this._groups.map(sparse), this._parents);
	};
	
	var selection_merge = function(selection) {
	
	  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group0[i] || group1[i]) {
	        merge[i] = node;
	      }
	    }
	  }
	
	  for (; j < m0; ++j) {
	    merges[j] = groups0[j];
	  }
	
	  return new Selection(merges, this._parents);
	};
	
	var selection_order = function() {
	
	  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
	    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
	      if (node = group[i]) {
	        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
	        next = node;
	      }
	    }
	  }
	
	  return this;
	};
	
	var selection_sort = function(compare) {
	  if (!compare) compare = ascending$1;
	
	  function compareNode(a, b) {
	    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
	  }
	
	  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        sortgroup[i] = node;
	      }
	    }
	    sortgroup.sort(compareNode);
	  }
	
	  return new Selection(sortgroups, this._parents).order();
	};
	
	function ascending$1(a, b) {
	  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	}
	
	var selection_call = function() {
	  var callback = arguments[0];
	  arguments[0] = this;
	  callback.apply(null, arguments);
	  return this;
	};
	
	var selection_nodes = function() {
	  var nodes = new Array(this.size()), i = -1;
	  this.each(function() { nodes[++i] = this; });
	  return nodes;
	};
	
	var selection_node = function() {
	
	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
	      var node = group[i];
	      if (node) return node;
	    }
	  }
	
	  return null;
	};
	
	var selection_size = function() {
	  var size = 0;
	  this.each(function() { ++size; });
	  return size;
	};
	
	var selection_empty = function() {
	  return !this.node();
	};
	
	var selection_each = function(callback) {
	
	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
	      if (node = group[i]) callback.call(node, node.__data__, i, group);
	    }
	  }
	
	  return this;
	};
	
	function attrRemove(name) {
	  return function() {
	    this.removeAttribute(name);
	  };
	}
	
	function attrRemoveNS(fullname) {
	  return function() {
	    this.removeAttributeNS(fullname.space, fullname.local);
	  };
	}
	
	function attrConstant(name, value) {
	  return function() {
	    this.setAttribute(name, value);
	  };
	}
	
	function attrConstantNS(fullname, value) {
	  return function() {
	    this.setAttributeNS(fullname.space, fullname.local, value);
	  };
	}
	
	function attrFunction(name, value) {
	  return function() {
	    var v = value.apply(this, arguments);
	    if (v == null) this.removeAttribute(name);
	    else this.setAttribute(name, v);
	  };
	}
	
	function attrFunctionNS(fullname, value) {
	  return function() {
	    var v = value.apply(this, arguments);
	    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
	    else this.setAttributeNS(fullname.space, fullname.local, v);
	  };
	}
	
	var selection_attr = function(name, value) {
	  var fullname = namespace(name);
	
	  if (arguments.length < 2) {
	    var node = this.node();
	    return fullname.local
	        ? node.getAttributeNS(fullname.space, fullname.local)
	        : node.getAttribute(fullname);
	  }
	
	  return this.each((value == null
	      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
	      ? (fullname.local ? attrFunctionNS : attrFunction)
	      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
	};
	
	var defaultView = function(node) {
	  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
	      || (node.document && node) // node is a Window
	      || node.defaultView; // node is a Document
	};
	
	function styleRemove(name) {
	  return function() {
	    this.style.removeProperty(name);
	  };
	}
	
	function styleConstant(name, value, priority) {
	  return function() {
	    this.style.setProperty(name, value, priority);
	  };
	}
	
	function styleFunction(name, value, priority) {
	  return function() {
	    var v = value.apply(this, arguments);
	    if (v == null) this.style.removeProperty(name);
	    else this.style.setProperty(name, v, priority);
	  };
	}
	
	var selection_style = function(name, value, priority) {
	  return arguments.length > 1
	      ? this.each((value == null
	            ? styleRemove : typeof value === "function"
	            ? styleFunction
	            : styleConstant)(name, value, priority == null ? "" : priority))
	      : styleValue(this.node(), name);
	};
	
	function styleValue(node, name) {
	  return node.style.getPropertyValue(name)
	      || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
	}
	
	function propertyRemove(name) {
	  return function() {
	    delete this[name];
	  };
	}
	
	function propertyConstant(name, value) {
	  return function() {
	    this[name] = value;
	  };
	}
	
	function propertyFunction(name, value) {
	  return function() {
	    var v = value.apply(this, arguments);
	    if (v == null) delete this[name];
	    else this[name] = v;
	  };
	}
	
	var selection_property = function(name, value) {
	  return arguments.length > 1
	      ? this.each((value == null
	          ? propertyRemove : typeof value === "function"
	          ? propertyFunction
	          : propertyConstant)(name, value))
	      : this.node()[name];
	};
	
	function classArray(string) {
	  return string.trim().split(/^|\s+/);
	}
	
	function classList(node) {
	  return node.classList || new ClassList(node);
	}
	
	function ClassList(node) {
	  this._node = node;
	  this._names = classArray(node.getAttribute("class") || "");
	}
	
	ClassList.prototype = {
	  add: function(name) {
	    var i = this._names.indexOf(name);
	    if (i < 0) {
	      this._names.push(name);
	      this._node.setAttribute("class", this._names.join(" "));
	    }
	  },
	  remove: function(name) {
	    var i = this._names.indexOf(name);
	    if (i >= 0) {
	      this._names.splice(i, 1);
	      this._node.setAttribute("class", this._names.join(" "));
	    }
	  },
	  contains: function(name) {
	    return this._names.indexOf(name) >= 0;
	  }
	};
	
	function classedAdd(node, names) {
	  var list = classList(node), i = -1, n = names.length;
	  while (++i < n) list.add(names[i]);
	}
	
	function classedRemove(node, names) {
	  var list = classList(node), i = -1, n = names.length;
	  while (++i < n) list.remove(names[i]);
	}
	
	function classedTrue(names) {
	  return function() {
	    classedAdd(this, names);
	  };
	}
	
	function classedFalse(names) {
	  return function() {
	    classedRemove(this, names);
	  };
	}
	
	function classedFunction(names, value) {
	  return function() {
	    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
	  };
	}
	
	var selection_classed = function(name, value) {
	  var names = classArray(name + "");
	
	  if (arguments.length < 2) {
	    var list = classList(this.node()), i = -1, n = names.length;
	    while (++i < n) if (!list.contains(names[i])) return false;
	    return true;
	  }
	
	  return this.each((typeof value === "function"
	      ? classedFunction : value
	      ? classedTrue
	      : classedFalse)(names, value));
	};
	
	function textRemove() {
	  this.textContent = "";
	}
	
	function textConstant(value) {
	  return function() {
	    this.textContent = value;
	  };
	}
	
	function textFunction(value) {
	  return function() {
	    var v = value.apply(this, arguments);
	    this.textContent = v == null ? "" : v;
	  };
	}
	
	var selection_text = function(value) {
	  return arguments.length
	      ? this.each(value == null
	          ? textRemove : (typeof value === "function"
	          ? textFunction
	          : textConstant)(value))
	      : this.node().textContent;
	};
	
	function htmlRemove() {
	  this.innerHTML = "";
	}
	
	function htmlConstant(value) {
	  return function() {
	    this.innerHTML = value;
	  };
	}
	
	function htmlFunction(value) {
	  return function() {
	    var v = value.apply(this, arguments);
	    this.innerHTML = v == null ? "" : v;
	  };
	}
	
	var selection_html = function(value) {
	  return arguments.length
	      ? this.each(value == null
	          ? htmlRemove : (typeof value === "function"
	          ? htmlFunction
	          : htmlConstant)(value))
	      : this.node().innerHTML;
	};
	
	function raise() {
	  if (this.nextSibling) this.parentNode.appendChild(this);
	}
	
	var selection_raise = function() {
	  return this.each(raise);
	};
	
	function lower() {
	  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
	}
	
	var selection_lower = function() {
	  return this.each(lower);
	};
	
	var selection_append = function(name) {
	  var create = typeof name === "function" ? name : creator(name);
	  return this.select(function() {
	    return this.appendChild(create.apply(this, arguments));
	  });
	};
	
	function constantNull() {
	  return null;
	}
	
	var selection_insert = function(name, before) {
	  var create = typeof name === "function" ? name : creator(name),
	      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
	  return this.select(function() {
	    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
	  });
	};
	
	function remove() {
	  var parent = this.parentNode;
	  if (parent) parent.removeChild(this);
	}
	
	var selection_remove = function() {
	  return this.each(remove);
	};
	
	var selection_datum = function(value) {
	  return arguments.length
	      ? this.property("__data__", value)
	      : this.node().__data__;
	};
	
	function dispatchEvent(node, type, params) {
	  var window = defaultView(node),
	      event = window.CustomEvent;
	
	  if (typeof event === "function") {
	    event = new event(type, params);
	  } else {
	    event = window.document.createEvent("Event");
	    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
	    else event.initEvent(type, false, false);
	  }
	
	  node.dispatchEvent(event);
	}
	
	function dispatchConstant(type, params) {
	  return function() {
	    return dispatchEvent(this, type, params);
	  };
	}
	
	function dispatchFunction(type, params) {
	  return function() {
	    return dispatchEvent(this, type, params.apply(this, arguments));
	  };
	}
	
	var selection_dispatch = function(type, params) {
	  return this.each((typeof params === "function"
	      ? dispatchFunction
	      : dispatchConstant)(type, params));
	};
	
	var root = [null];
	
	function Selection(groups, parents) {
	  this._groups = groups;
	  this._parents = parents;
	}
	
	function selection() {
	  return new Selection([[document.documentElement]], root);
	}
	
	Selection.prototype = selection.prototype = {
	  constructor: Selection,
	  select: selection_select,
	  selectAll: selection_selectAll,
	  filter: selection_filter,
	  data: selection_data,
	  enter: selection_enter,
	  exit: selection_exit,
	  merge: selection_merge,
	  order: selection_order,
	  sort: selection_sort,
	  call: selection_call,
	  nodes: selection_nodes,
	  node: selection_node,
	  size: selection_size,
	  empty: selection_empty,
	  each: selection_each,
	  attr: selection_attr,
	  style: selection_style,
	  property: selection_property,
	  classed: selection_classed,
	  text: selection_text,
	  html: selection_html,
	  raise: selection_raise,
	  lower: selection_lower,
	  append: selection_append,
	  insert: selection_insert,
	  remove: selection_remove,
	  datum: selection_datum,
	  on: selection_on,
	  dispatch: selection_dispatch
	};
	
	var select = function(selector) {
	  return typeof selector === "string"
	      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
	      : new Selection([[selector]], root);
	};
	
	var selectAll = function(selector) {
	  return typeof selector === "string"
	      ? new Selection([document.querySelectorAll(selector)], [document.documentElement])
	      : new Selection([selector == null ? [] : selector], root);
	};
	
	var touch = function(node, touches, identifier) {
	  if (arguments.length < 3) identifier = touches, touches = sourceEvent().changedTouches;
	
	  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
	    if ((touch = touches[i]).identifier === identifier) {
	      return point(node, touch);
	    }
	  }
	
	  return null;
	};
	
	var touches = function(node, touches) {
	  if (touches == null) touches = sourceEvent().touches;
	
	  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
	    points[i] = point(node, touches[i]);
	  }
	
	  return points;
	};
	
	function nopropagation() {
	  exports.event.stopImmediatePropagation();
	}
	
	var noevent = function() {
	  exports.event.preventDefault();
	  exports.event.stopImmediatePropagation();
	};
	
	var dragDisable = function(view) {
	  var root = view.document.documentElement,
	      selection$$1 = select(view).on("dragstart.drag", noevent, true);
	  if ("onselectstart" in root) {
	    selection$$1.on("selectstart.drag", noevent, true);
	  } else {
	    root.__noselect = root.style.MozUserSelect;
	    root.style.MozUserSelect = "none";
	  }
	};
	
	function yesdrag(view, noclick) {
	  var root = view.document.documentElement,
	      selection$$1 = select(view).on("dragstart.drag", null);
	  if (noclick) {
	    selection$$1.on("click.drag", noevent, true);
	    setTimeout(function() { selection$$1.on("click.drag", null); }, 0);
	  }
	  if ("onselectstart" in root) {
	    selection$$1.on("selectstart.drag", null);
	  } else {
	    root.style.MozUserSelect = root.__noselect;
	    delete root.__noselect;
	  }
	}
	
	var constant$2 = function(x) {
	  return function() {
	    return x;
	  };
	};
	
	function DragEvent(target, type, subject, id, active, x, y, dx, dy, dispatch) {
	  this.target = target;
	  this.type = type;
	  this.subject = subject;
	  this.identifier = id;
	  this.active = active;
	  this.x = x;
	  this.y = y;
	  this.dx = dx;
	  this.dy = dy;
	  this._ = dispatch;
	}
	
	DragEvent.prototype.on = function() {
	  var value = this._.on.apply(this._, arguments);
	  return value === this._ ? this : value;
	};
	
	// Ignore right-click, since that should open the context menu.
	function defaultFilter$1() {
	  return !exports.event.button;
	}
	
	function defaultContainer() {
	  return this.parentNode;
	}
	
	function defaultSubject(d) {
	  return d == null ? {x: exports.event.x, y: exports.event.y} : d;
	}
	
	var drag = function() {
	  var filter = defaultFilter$1,
	      container = defaultContainer,
	      subject = defaultSubject,
	      gestures = {},
	      listeners = dispatch("start", "drag", "end"),
	      active = 0,
	      mousedownx,
	      mousedowny,
	      mousemoving,
	      touchending,
	      clickDistance2 = 0;
	
	  function drag(selection$$1) {
	    selection$$1
	        .on("mousedown.drag", mousedowned)
	        .on("touchstart.drag", touchstarted)
	        .on("touchmove.drag", touchmoved)
	        .on("touchend.drag touchcancel.drag", touchended)
	        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	  }
	
	  function mousedowned() {
	    if (touchending || !filter.apply(this, arguments)) return;
	    var gesture = beforestart("mouse", container.apply(this, arguments), mouse, this, arguments);
	    if (!gesture) return;
	    select(exports.event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
	    dragDisable(exports.event.view);
	    nopropagation();
	    mousemoving = false;
	    mousedownx = exports.event.clientX;
	    mousedowny = exports.event.clientY;
	    gesture("start");
	  }
	
	  function mousemoved() {
	    noevent();
	    if (!mousemoving) {
	      var dx = exports.event.clientX - mousedownx, dy = exports.event.clientY - mousedowny;
	      mousemoving = dx * dx + dy * dy > clickDistance2;
	    }
	    gestures.mouse("drag");
	  }
	
	  function mouseupped() {
	    select(exports.event.view).on("mousemove.drag mouseup.drag", null);
	    yesdrag(exports.event.view, mousemoving);
	    noevent();
	    gestures.mouse("end");
	  }
	
	  function touchstarted() {
	    if (!filter.apply(this, arguments)) return;
	    var touches$$1 = exports.event.changedTouches,
	        c = container.apply(this, arguments),
	        n = touches$$1.length, i, gesture;
	
	    for (i = 0; i < n; ++i) {
	      if (gesture = beforestart(touches$$1[i].identifier, c, touch, this, arguments)) {
	        nopropagation();
	        gesture("start");
	      }
	    }
	  }
	
	  function touchmoved() {
	    var touches$$1 = exports.event.changedTouches,
	        n = touches$$1.length, i, gesture;
	
	    for (i = 0; i < n; ++i) {
	      if (gesture = gestures[touches$$1[i].identifier]) {
	        noevent();
	        gesture("drag");
	      }
	    }
	  }
	
	  function touchended() {
	    var touches$$1 = exports.event.changedTouches,
	        n = touches$$1.length, i, gesture;
	
	    if (touchending) clearTimeout(touchending);
	    touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
	    for (i = 0; i < n; ++i) {
	      if (gesture = gestures[touches$$1[i].identifier]) {
	        nopropagation();
	        gesture("end");
	      }
	    }
	  }
	
	  function beforestart(id, container, point, that, args) {
	    var p = point(container, id), s, dx, dy,
	        sublisteners = listeners.copy();
	
	    if (!customEvent(new DragEvent(drag, "beforestart", s, id, active, p[0], p[1], 0, 0, sublisteners), function() {
	      if ((exports.event.subject = s = subject.apply(that, args)) == null) return false;
	      dx = s.x - p[0] || 0;
	      dy = s.y - p[1] || 0;
	      return true;
	    })) return;
	
	    return function gesture(type) {
	      var p0 = p, n;
	      switch (type) {
	        case "start": gestures[id] = gesture, n = active++; break;
	        case "end": delete gestures[id], --active; // nobreak
	        case "drag": p = point(container, id), n = active; break;
	      }
	      customEvent(new DragEvent(drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [type, that, args]);
	    };
	  }
	
	  drag.filter = function(_) {
	    return arguments.length ? (filter = typeof _ === "function" ? _ : constant$2(!!_), drag) : filter;
	  };
	
	  drag.container = function(_) {
	    return arguments.length ? (container = typeof _ === "function" ? _ : constant$2(_), drag) : container;
	  };
	
	  drag.subject = function(_) {
	    return arguments.length ? (subject = typeof _ === "function" ? _ : constant$2(_), drag) : subject;
	  };
	
	  drag.on = function() {
	    var value = listeners.on.apply(listeners, arguments);
	    return value === listeners ? drag : value;
	  };
	
	  drag.clickDistance = function(_) {
	    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
	  };
	
	  return drag;
	};
	
	var define = function(constructor, factory, prototype) {
	  constructor.prototype = factory.prototype = prototype;
	  prototype.constructor = constructor;
	};
	
	function extend(parent, definition) {
	  var prototype = Object.create(parent.prototype);
	  for (var key in definition) prototype[key] = definition[key];
	  return prototype;
	}
	
	function Color() {}
	
	var darker = 0.7;
	var brighter = 1 / darker;
	
	var reI = "\\s*([+-]?\\d+)\\s*";
	var reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
	var reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
	var reHex3 = /^#([0-9a-f]{3})$/;
	var reHex6 = /^#([0-9a-f]{6})$/;
	var reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$");
	var reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$");
	var reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$");
	var reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$");
	var reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$");
	var reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
	
	var named = {
	  aliceblue: 0xf0f8ff,
	  antiquewhite: 0xfaebd7,
	  aqua: 0x00ffff,
	  aquamarine: 0x7fffd4,
	  azure: 0xf0ffff,
	  beige: 0xf5f5dc,
	  bisque: 0xffe4c4,
	  black: 0x000000,
	  blanchedalmond: 0xffebcd,
	  blue: 0x0000ff,
	  blueviolet: 0x8a2be2,
	  brown: 0xa52a2a,
	  burlywood: 0xdeb887,
	  cadetblue: 0x5f9ea0,
	  chartreuse: 0x7fff00,
	  chocolate: 0xd2691e,
	  coral: 0xff7f50,
	  cornflowerblue: 0x6495ed,
	  cornsilk: 0xfff8dc,
	  crimson: 0xdc143c,
	  cyan: 0x00ffff,
	  darkblue: 0x00008b,
	  darkcyan: 0x008b8b,
	  darkgoldenrod: 0xb8860b,
	  darkgray: 0xa9a9a9,
	  darkgreen: 0x006400,
	  darkgrey: 0xa9a9a9,
	  darkkhaki: 0xbdb76b,
	  darkmagenta: 0x8b008b,
	  darkolivegreen: 0x556b2f,
	  darkorange: 0xff8c00,
	  darkorchid: 0x9932cc,
	  darkred: 0x8b0000,
	  darksalmon: 0xe9967a,
	  darkseagreen: 0x8fbc8f,
	  darkslateblue: 0x483d8b,
	  darkslategray: 0x2f4f4f,
	  darkslategrey: 0x2f4f4f,
	  darkturquoise: 0x00ced1,
	  darkviolet: 0x9400d3,
	  deeppink: 0xff1493,
	  deepskyblue: 0x00bfff,
	  dimgray: 0x696969,
	  dimgrey: 0x696969,
	  dodgerblue: 0x1e90ff,
	  firebrick: 0xb22222,
	  floralwhite: 0xfffaf0,
	  forestgreen: 0x228b22,
	  fuchsia: 0xff00ff,
	  gainsboro: 0xdcdcdc,
	  ghostwhite: 0xf8f8ff,
	  gold: 0xffd700,
	  goldenrod: 0xdaa520,
	  gray: 0x808080,
	  green: 0x008000,
	  greenyellow: 0xadff2f,
	  grey: 0x808080,
	  honeydew: 0xf0fff0,
	  hotpink: 0xff69b4,
	  indianred: 0xcd5c5c,
	  indigo: 0x4b0082,
	  ivory: 0xfffff0,
	  khaki: 0xf0e68c,
	  lavender: 0xe6e6fa,
	  lavenderblush: 0xfff0f5,
	  lawngreen: 0x7cfc00,
	  lemonchiffon: 0xfffacd,
	  lightblue: 0xadd8e6,
	  lightcoral: 0xf08080,
	  lightcyan: 0xe0ffff,
	  lightgoldenrodyellow: 0xfafad2,
	  lightgray: 0xd3d3d3,
	  lightgreen: 0x90ee90,
	  lightgrey: 0xd3d3d3,
	  lightpink: 0xffb6c1,
	  lightsalmon: 0xffa07a,
	  lightseagreen: 0x20b2aa,
	  lightskyblue: 0x87cefa,
	  lightslategray: 0x778899,
	  lightslategrey: 0x778899,
	  lightsteelblue: 0xb0c4de,
	  lightyellow: 0xffffe0,
	  lime: 0x00ff00,
	  limegreen: 0x32cd32,
	  linen: 0xfaf0e6,
	  magenta: 0xff00ff,
	  maroon: 0x800000,
	  mediumaquamarine: 0x66cdaa,
	  mediumblue: 0x0000cd,
	  mediumorchid: 0xba55d3,
	  mediumpurple: 0x9370db,
	  mediumseagreen: 0x3cb371,
	  mediumslateblue: 0x7b68ee,
	  mediumspringgreen: 0x00fa9a,
	  mediumturquoise: 0x48d1cc,
	  mediumvioletred: 0xc71585,
	  midnightblue: 0x191970,
	  mintcream: 0xf5fffa,
	  mistyrose: 0xffe4e1,
	  moccasin: 0xffe4b5,
	  navajowhite: 0xffdead,
	  navy: 0x000080,
	  oldlace: 0xfdf5e6,
	  olive: 0x808000,
	  olivedrab: 0x6b8e23,
	  orange: 0xffa500,
	  orangered: 0xff4500,
	  orchid: 0xda70d6,
	  palegoldenrod: 0xeee8aa,
	  palegreen: 0x98fb98,
	  paleturquoise: 0xafeeee,
	  palevioletred: 0xdb7093,
	  papayawhip: 0xffefd5,
	  peachpuff: 0xffdab9,
	  peru: 0xcd853f,
	  pink: 0xffc0cb,
	  plum: 0xdda0dd,
	  powderblue: 0xb0e0e6,
	  purple: 0x800080,
	  rebeccapurple: 0x663399,
	  red: 0xff0000,
	  rosybrown: 0xbc8f8f,
	  royalblue: 0x4169e1,
	  saddlebrown: 0x8b4513,
	  salmon: 0xfa8072,
	  sandybrown: 0xf4a460,
	  seagreen: 0x2e8b57,
	  seashell: 0xfff5ee,
	  sienna: 0xa0522d,
	  silver: 0xc0c0c0,
	  skyblue: 0x87ceeb,
	  slateblue: 0x6a5acd,
	  slategray: 0x708090,
	  slategrey: 0x708090,
	  snow: 0xfffafa,
	  springgreen: 0x00ff7f,
	  steelblue: 0x4682b4,
	  tan: 0xd2b48c,
	  teal: 0x008080,
	  thistle: 0xd8bfd8,
	  tomato: 0xff6347,
	  turquoise: 0x40e0d0,
	  violet: 0xee82ee,
	  wheat: 0xf5deb3,
	  white: 0xffffff,
	  whitesmoke: 0xf5f5f5,
	  yellow: 0xffff00,
	  yellowgreen: 0x9acd32
	};
	
	define(Color, color, {
	  displayable: function() {
	    return this.rgb().displayable();
	  },
	  toString: function() {
	    return this.rgb() + "";
	  }
	});
	
	function color(format) {
	  var m;
	  format = (format + "").trim().toLowerCase();
	  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
	      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
	      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
	      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
	      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
	      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
	      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
	      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
	      : named.hasOwnProperty(format) ? rgbn(named[format])
	      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
	      : null;
	}
	
	function rgbn(n) {
	  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
	}
	
	function rgba(r, g, b, a) {
	  if (a <= 0) r = g = b = NaN;
	  return new Rgb(r, g, b, a);
	}
	
	function rgbConvert(o) {
	  if (!(o instanceof Color)) o = color(o);
	  if (!o) return new Rgb;
	  o = o.rgb();
	  return new Rgb(o.r, o.g, o.b, o.opacity);
	}
	
	function rgb(r, g, b, opacity) {
	  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
	}
	
	function Rgb(r, g, b, opacity) {
	  this.r = +r;
	  this.g = +g;
	  this.b = +b;
	  this.opacity = +opacity;
	}
	
	define(Rgb, rgb, extend(Color, {
	  brighter: function(k) {
	    k = k == null ? brighter : Math.pow(brighter, k);
	    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
	  },
	  darker: function(k) {
	    k = k == null ? darker : Math.pow(darker, k);
	    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
	  },
	  rgb: function() {
	    return this;
	  },
	  displayable: function() {
	    return (0 <= this.r && this.r <= 255)
	        && (0 <= this.g && this.g <= 255)
	        && (0 <= this.b && this.b <= 255)
	        && (0 <= this.opacity && this.opacity <= 1);
	  },
	  toString: function() {
	    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
	    return (a === 1 ? "rgb(" : "rgba(")
	        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
	        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
	        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
	        + (a === 1 ? ")" : ", " + a + ")");
	  }
	}));
	
	function hsla(h, s, l, a) {
	  if (a <= 0) h = s = l = NaN;
	  else if (l <= 0 || l >= 1) h = s = NaN;
	  else if (s <= 0) h = NaN;
	  return new Hsl(h, s, l, a);
	}
	
	function hslConvert(o) {
	  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
	  if (!(o instanceof Color)) o = color(o);
	  if (!o) return new Hsl;
	  if (o instanceof Hsl) return o;
	  o = o.rgb();
	  var r = o.r / 255,
	      g = o.g / 255,
	      b = o.b / 255,
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      h = NaN,
	      s = max - min,
	      l = (max + min) / 2;
	  if (s) {
	    if (r === max) h = (g - b) / s + (g < b) * 6;
	    else if (g === max) h = (b - r) / s + 2;
	    else h = (r - g) / s + 4;
	    s /= l < 0.5 ? max + min : 2 - max - min;
	    h *= 60;
	  } else {
	    s = l > 0 && l < 1 ? 0 : h;
	  }
	  return new Hsl(h, s, l, o.opacity);
	}
	
	function hsl(h, s, l, opacity) {
	  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
	}
	
	function Hsl(h, s, l, opacity) {
	  this.h = +h;
	  this.s = +s;
	  this.l = +l;
	  this.opacity = +opacity;
	}
	
	define(Hsl, hsl, extend(Color, {
	  brighter: function(k) {
	    k = k == null ? brighter : Math.pow(brighter, k);
	    return new Hsl(this.h, this.s, this.l * k, this.opacity);
	  },
	  darker: function(k) {
	    k = k == null ? darker : Math.pow(darker, k);
	    return new Hsl(this.h, this.s, this.l * k, this.opacity);
	  },
	  rgb: function() {
	    var h = this.h % 360 + (this.h < 0) * 360,
	        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
	        l = this.l,
	        m2 = l + (l < 0.5 ? l : 1 - l) * s,
	        m1 = 2 * l - m2;
	    return new Rgb(
	      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
	      hsl2rgb(h, m1, m2),
	      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
	      this.opacity
	    );
	  },
	  displayable: function() {
	    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
	        && (0 <= this.l && this.l <= 1)
	        && (0 <= this.opacity && this.opacity <= 1);
	  }
	}));
	
	/* From FvD 13.37, CSS Color Module Level 3 */
	function hsl2rgb(h, m1, m2) {
	  return (h < 60 ? m1 + (m2 - m1) * h / 60
	      : h < 180 ? m2
	      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
	      : m1) * 255;
	}
	
	var deg2rad = Math.PI / 180;
	var rad2deg = 180 / Math.PI;
	
	var Kn = 18;
	var Xn = 0.950470;
	var Yn = 1;
	var Zn = 1.088830;
	var t0 = 4 / 29;
	var t1 = 6 / 29;
	var t2 = 3 * t1 * t1;
	var t3 = t1 * t1 * t1;
	
	function labConvert(o) {
	  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
	  if (o instanceof Hcl) {
	    var h = o.h * deg2rad;
	    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
	  }
	  if (!(o instanceof Rgb)) o = rgbConvert(o);
	  var b = rgb2xyz(o.r),
	      a = rgb2xyz(o.g),
	      l = rgb2xyz(o.b),
	      x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
	      y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
	      z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
	  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
	}
	
	function lab(l, a, b, opacity) {
	  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
	}
	
	function Lab(l, a, b, opacity) {
	  this.l = +l;
	  this.a = +a;
	  this.b = +b;
	  this.opacity = +opacity;
	}
	
	define(Lab, lab, extend(Color, {
	  brighter: function(k) {
	    return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
	  },
	  darker: function(k) {
	    return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
	  },
	  rgb: function() {
	    var y = (this.l + 16) / 116,
	        x = isNaN(this.a) ? y : y + this.a / 500,
	        z = isNaN(this.b) ? y : y - this.b / 200;
	    y = Yn * lab2xyz(y);
	    x = Xn * lab2xyz(x);
	    z = Zn * lab2xyz(z);
	    return new Rgb(
	      xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
	      xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
	      xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
	      this.opacity
	    );
	  }
	}));
	
	function xyz2lab(t) {
	  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
	}
	
	function lab2xyz(t) {
	  return t > t1 ? t * t * t : t2 * (t - t0);
	}
	
	function xyz2rgb(x) {
	  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
	}
	
	function rgb2xyz(x) {
	  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
	}
	
	function hclConvert(o) {
	  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
	  if (!(o instanceof Lab)) o = labConvert(o);
	  var h = Math.atan2(o.b, o.a) * rad2deg;
	  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
	}
	
	function hcl(h, c, l, opacity) {
	  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
	}
	
	function Hcl(h, c, l, opacity) {
	  this.h = +h;
	  this.c = +c;
	  this.l = +l;
	  this.opacity = +opacity;
	}
	
	define(Hcl, hcl, extend(Color, {
	  brighter: function(k) {
	    return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
	  },
	  darker: function(k) {
	    return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
	  },
	  rgb: function() {
	    return labConvert(this).rgb();
	  }
	}));
	
	var A = -0.14861;
	var B = +1.78277;
	var C = -0.29227;
	var D = -0.90649;
	var E = +1.97294;
	var ED = E * D;
	var EB = E * B;
	var BC_DA = B * C - D * A;
	
	function cubehelixConvert(o) {
	  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
	  if (!(o instanceof Rgb)) o = rgbConvert(o);
	  var r = o.r / 255,
	      g = o.g / 255,
	      b = o.b / 255,
	      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
	      bl = b - l,
	      k = (E * (g - l) - C * bl) / D,
	      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
	      h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
	  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
	}
	
	function cubehelix(h, s, l, opacity) {
	  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
	}
	
	function Cubehelix(h, s, l, opacity) {
	  this.h = +h;
	  this.s = +s;
	  this.l = +l;
	  this.opacity = +opacity;
	}
	
	define(Cubehelix, cubehelix, extend(Color, {
	  brighter: function(k) {
	    k = k == null ? brighter : Math.pow(brighter, k);
	    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
	  },
	  darker: function(k) {
	    k = k == null ? darker : Math.pow(darker, k);
	    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
	  },
	  rgb: function() {
	    var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
	        l = +this.l,
	        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
	        cosh = Math.cos(h),
	        sinh = Math.sin(h);
	    return new Rgb(
	      255 * (l + a * (A * cosh + B * sinh)),
	      255 * (l + a * (C * cosh + D * sinh)),
	      255 * (l + a * (E * cosh)),
	      this.opacity
	    );
	  }
	}));
	
	function basis(t1, v0, v1, v2, v3) {
	  var t2 = t1 * t1, t3 = t2 * t1;
	  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
	      + (4 - 6 * t2 + 3 * t3) * v1
	      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
	      + t3 * v3) / 6;
	}
	
	var basis$1 = function(values) {
	  var n = values.length - 1;
	  return function(t) {
	    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
	        v1 = values[i],
	        v2 = values[i + 1],
	        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
	        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
	    return basis((t - i / n) * n, v0, v1, v2, v3);
	  };
	};
	
	var basisClosed = function(values) {
	  var n = values.length;
	  return function(t) {
	    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
	        v0 = values[(i + n - 1) % n],
	        v1 = values[i % n],
	        v2 = values[(i + 1) % n],
	        v3 = values[(i + 2) % n];
	    return basis((t - i / n) * n, v0, v1, v2, v3);
	  };
	};
	
	var constant$3 = function(x) {
	  return function() {
	    return x;
	  };
	};
	
	function linear(a, d) {
	  return function(t) {
	    return a + t * d;
	  };
	}
	
	function exponential(a, b, y) {
	  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
	    return Math.pow(a + t * b, y);
	  };
	}
	
	function hue(a, b) {
	  var d = b - a;
	  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$3(isNaN(a) ? b : a);
	}
	
	function gamma(y) {
	  return (y = +y) === 1 ? nogamma : function(a, b) {
	    return b - a ? exponential(a, b, y) : constant$3(isNaN(a) ? b : a);
	  };
	}
	
	function nogamma(a, b) {
	  var d = b - a;
	  return d ? linear(a, d) : constant$3(isNaN(a) ? b : a);
	}
	
	var interpolateRgb = ((function rgbGamma(y) {
	  var color$$1 = gamma(y);
	
	  function rgb$$1(start, end) {
	    var r = color$$1((start = rgb(start)).r, (end = rgb(end)).r),
	        g = color$$1(start.g, end.g),
	        b = color$$1(start.b, end.b),
	        opacity = nogamma(start.opacity, end.opacity);
	    return function(t) {
	      start.r = r(t);
	      start.g = g(t);
	      start.b = b(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }
	
	  rgb$$1.gamma = rgbGamma;
	
	  return rgb$$1;
	}))(1);
	
	function rgbSpline(spline) {
	  return function(colors) {
	    var n = colors.length,
	        r = new Array(n),
	        g = new Array(n),
	        b = new Array(n),
	        i, color$$1;
	    for (i = 0; i < n; ++i) {
	      color$$1 = rgb(colors[i]);
	      r[i] = color$$1.r || 0;
	      g[i] = color$$1.g || 0;
	      b[i] = color$$1.b || 0;
	    }
	    r = spline(r);
	    g = spline(g);
	    b = spline(b);
	    color$$1.opacity = 1;
	    return function(t) {
	      color$$1.r = r(t);
	      color$$1.g = g(t);
	      color$$1.b = b(t);
	      return color$$1 + "";
	    };
	  };
	}
	
	var rgbBasis = rgbSpline(basis$1);
	var rgbBasisClosed = rgbSpline(basisClosed);
	
	var array$1 = function(a, b) {
	  var nb = b ? b.length : 0,
	      na = a ? Math.min(nb, a.length) : 0,
	      x = new Array(nb),
	      c = new Array(nb),
	      i;
	
	  for (i = 0; i < na; ++i) x[i] = interpolateValue(a[i], b[i]);
	  for (; i < nb; ++i) c[i] = b[i];
	
	  return function(t) {
	    for (i = 0; i < na; ++i) c[i] = x[i](t);
	    return c;
	  };
	};
	
	var date = function(a, b) {
	  var d = new Date;
	  return a = +a, b -= a, function(t) {
	    return d.setTime(a + b * t), d;
	  };
	};
	
	var reinterpolate = function(a, b) {
	  return a = +a, b -= a, function(t) {
	    return a + b * t;
	  };
	};
	
	var object = function(a, b) {
	  var i = {},
	      c = {},
	      k;
	
	  if (a === null || typeof a !== "object") a = {};
	  if (b === null || typeof b !== "object") b = {};
	
	  for (k in b) {
	    if (k in a) {
	      i[k] = interpolateValue(a[k], b[k]);
	    } else {
	      c[k] = b[k];
	    }
	  }
	
	  return function(t) {
	    for (k in i) c[k] = i[k](t);
	    return c;
	  };
	};
	
	var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
	var reB = new RegExp(reA.source, "g");
	
	function zero(b) {
	  return function() {
	    return b;
	  };
	}
	
	function one(b) {
	  return function(t) {
	    return b(t) + "";
	  };
	}
	
	var interpolateString = function(a, b) {
	  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
	      am, // current match in a
	      bm, // current match in b
	      bs, // string preceding current number in b, if any
	      i = -1, // index in s
	      s = [], // string constants and placeholders
	      q = []; // number interpolators
	
	  // Coerce inputs to strings.
	  a = a + "", b = b + "";
	
	  // Interpolate pairs of numbers in a & b.
	  while ((am = reA.exec(a))
	      && (bm = reB.exec(b))) {
	    if ((bs = bm.index) > bi) { // a string precedes the next number in b
	      bs = b.slice(bi, bs);
	      if (s[i]) s[i] += bs; // coalesce with previous string
	      else s[++i] = bs;
	    }
	    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
	      if (s[i]) s[i] += bm; // coalesce with previous string
	      else s[++i] = bm;
	    } else { // interpolate non-matching numbers
	      s[++i] = null;
	      q.push({i: i, x: reinterpolate(am, bm)});
	    }
	    bi = reB.lastIndex;
	  }
	
	  // Add remains of b.
	  if (bi < b.length) {
	    bs = b.slice(bi);
	    if (s[i]) s[i] += bs; // coalesce with previous string
	    else s[++i] = bs;
	  }
	
	  // Special optimization for only a single match.
	  // Otherwise, interpolate each of the numbers and rejoin the string.
	  return s.length < 2 ? (q[0]
	      ? one(q[0].x)
	      : zero(b))
	      : (b = q.length, function(t) {
	          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
	          return s.join("");
	        });
	};
	
	var interpolateValue = function(a, b) {
	  var t = typeof b, c;
	  return b == null || t === "boolean" ? constant$3(b)
	      : (t === "number" ? reinterpolate
	      : t === "string" ? ((c = color(b)) ? (b = c, interpolateRgb) : interpolateString)
	      : b instanceof color ? interpolateRgb
	      : b instanceof Date ? date
	      : Array.isArray(b) ? array$1
	      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
	      : reinterpolate)(a, b);
	};
	
	var interpolateRound = function(a, b) {
	  return a = +a, b -= a, function(t) {
	    return Math.round(a + b * t);
	  };
	};
	
	var degrees = 180 / Math.PI;
	
	var identity$2 = {
	  translateX: 0,
	  translateY: 0,
	  rotate: 0,
	  skewX: 0,
	  scaleX: 1,
	  scaleY: 1
	};
	
	var decompose = function(a, b, c, d, e, f) {
	  var scaleX, scaleY, skewX;
	  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
	  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
	  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
	  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
	  return {
	    translateX: e,
	    translateY: f,
	    rotate: Math.atan2(b, a) * degrees,
	    skewX: Math.atan(skewX) * degrees,
	    scaleX: scaleX,
	    scaleY: scaleY
	  };
	};
	
	var cssNode;
	var cssRoot;
	var cssView;
	var svgNode;
	
	function parseCss(value) {
	  if (value === "none") return identity$2;
	  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
	  cssNode.style.transform = value;
	  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
	  cssRoot.removeChild(cssNode);
	  value = value.slice(7, -1).split(",");
	  return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
	}
	
	function parseSvg(value) {
	  if (value == null) return identity$2;
	  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
	  svgNode.setAttribute("transform", value);
	  if (!(value = svgNode.transform.baseVal.consolidate())) return identity$2;
	  value = value.matrix;
	  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
	}
	
	function interpolateTransform(parse, pxComma, pxParen, degParen) {
	
	  function pop(s) {
	    return s.length ? s.pop() + " " : "";
	  }
	
	  function translate(xa, ya, xb, yb, s, q) {
	    if (xa !== xb || ya !== yb) {
	      var i = s.push("translate(", null, pxComma, null, pxParen);
	      q.push({i: i - 4, x: reinterpolate(xa, xb)}, {i: i - 2, x: reinterpolate(ya, yb)});
	    } else if (xb || yb) {
	      s.push("translate(" + xb + pxComma + yb + pxParen);
	    }
	  }
	
	  function rotate(a, b, s, q) {
	    if (a !== b) {
	      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
	      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: reinterpolate(a, b)});
	    } else if (b) {
	      s.push(pop(s) + "rotate(" + b + degParen);
	    }
	  }
	
	  function skewX(a, b, s, q) {
	    if (a !== b) {
	      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: reinterpolate(a, b)});
	    } else if (b) {
	      s.push(pop(s) + "skewX(" + b + degParen);
	    }
	  }
	
	  function scale(xa, ya, xb, yb, s, q) {
	    if (xa !== xb || ya !== yb) {
	      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
	      q.push({i: i - 4, x: reinterpolate(xa, xb)}, {i: i - 2, x: reinterpolate(ya, yb)});
	    } else if (xb !== 1 || yb !== 1) {
	      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
	    }
	  }
	
	  return function(a, b) {
	    var s = [], // string constants and placeholders
	        q = []; // number interpolators
	    a = parse(a), b = parse(b);
	    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
	    rotate(a.rotate, b.rotate, s, q);
	    skewX(a.skewX, b.skewX, s, q);
	    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
	    a = b = null; // gc
	    return function(t) {
	      var i = -1, n = q.length, o;
	      while (++i < n) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    };
	  };
	}
	
	var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
	var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
	
	var rho = Math.SQRT2;
	var rho2 = 2;
	var rho4 = 4;
	var epsilon2 = 1e-12;
	
	function cosh(x) {
	  return ((x = Math.exp(x)) + 1 / x) / 2;
	}
	
	function sinh(x) {
	  return ((x = Math.exp(x)) - 1 / x) / 2;
	}
	
	function tanh(x) {
	  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	}
	
	// p0 = [ux0, uy0, w0]
	// p1 = [ux1, uy1, w1]
	var interpolateZoom = function(p0, p1) {
	  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
	      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
	      dx = ux1 - ux0,
	      dy = uy1 - uy0,
	      d2 = dx * dx + dy * dy,
	      i,
	      S;
	
	  // Special case for u0 ≅ u1.
	  if (d2 < epsilon2) {
	    S = Math.log(w1 / w0) / rho;
	    i = function(t) {
	      return [
	        ux0 + t * dx,
	        uy0 + t * dy,
	        w0 * Math.exp(rho * t * S)
	      ];
	    };
	  }
	
	  // General case.
	  else {
	    var d1 = Math.sqrt(d2),
	        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
	        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
	        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
	        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
	    S = (r1 - r0) / rho;
	    i = function(t) {
	      var s = t * S,
	          coshr0 = cosh(r0),
	          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
	      return [
	        ux0 + u * dx,
	        uy0 + u * dy,
	        w0 * coshr0 / cosh(rho * s + r0)
	      ];
	    };
	  }
	
	  i.duration = S * 1000;
	
	  return i;
	};
	
	function hsl$1(hue$$1) {
	  return function(start, end) {
	    var h = hue$$1((start = hsl(start)).h, (end = hsl(end)).h),
	        s = nogamma(start.s, end.s),
	        l = nogamma(start.l, end.l),
	        opacity = nogamma(start.opacity, end.opacity);
	    return function(t) {
	      start.h = h(t);
	      start.s = s(t);
	      start.l = l(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }
	}
	
	var hsl$2 = hsl$1(hue);
	var hslLong = hsl$1(nogamma);
	
	function lab$1(start, end) {
	  var l = nogamma((start = lab(start)).l, (end = lab(end)).l),
	      a = nogamma(start.a, end.a),
	      b = nogamma(start.b, end.b),
	      opacity = nogamma(start.opacity, end.opacity);
	  return function(t) {
	    start.l = l(t);
	    start.a = a(t);
	    start.b = b(t);
	    start.opacity = opacity(t);
	    return start + "";
	  };
	}
	
	function hcl$1(hue$$1) {
	  return function(start, end) {
	    var h = hue$$1((start = hcl(start)).h, (end = hcl(end)).h),
	        c = nogamma(start.c, end.c),
	        l = nogamma(start.l, end.l),
	        opacity = nogamma(start.opacity, end.opacity);
	    return function(t) {
	      start.h = h(t);
	      start.c = c(t);
	      start.l = l(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }
	}
	
	var hcl$2 = hcl$1(hue);
	var hclLong = hcl$1(nogamma);
	
	function cubehelix$1(hue$$1) {
	  return (function cubehelixGamma(y) {
	    y = +y;
	
	    function cubehelix$$1(start, end) {
	      var h = hue$$1((start = cubehelix(start)).h, (end = cubehelix(end)).h),
	          s = nogamma(start.s, end.s),
	          l = nogamma(start.l, end.l),
	          opacity = nogamma(start.opacity, end.opacity);
	      return function(t) {
	        start.h = h(t);
	        start.s = s(t);
	        start.l = l(Math.pow(t, y));
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }
	
	    cubehelix$$1.gamma = cubehelixGamma;
	
	    return cubehelix$$1;
	  })(1);
	}
	
	var cubehelix$2 = cubehelix$1(hue);
	var cubehelixLong = cubehelix$1(nogamma);
	
	var quantize = function(interpolator, n) {
	  var samples = new Array(n);
	  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
	  return samples;
	};
	
	var frame = 0;
	var timeout = 0;
	var interval = 0;
	var pokeDelay = 1000;
	var taskHead;
	var taskTail;
	var clockLast = 0;
	var clockNow = 0;
	var clockSkew = 0;
	var clock = typeof performance === "object" && performance.now ? performance : Date;
	var setFrame = typeof requestAnimationFrame === "function" ? requestAnimationFrame : function(f) { setTimeout(f, 17); };
	
	function now() {
	  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
	}
	
	function clearNow() {
	  clockNow = 0;
	}
	
	function Timer() {
	  this._call =
	  this._time =
	  this._next = null;
	}
	
	Timer.prototype = timer.prototype = {
	  constructor: Timer,
	  restart: function(callback, delay, time) {
	    if (typeof callback !== "function") throw new TypeError("callback is not a function");
	    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
	    if (!this._next && taskTail !== this) {
	      if (taskTail) taskTail._next = this;
	      else taskHead = this;
	      taskTail = this;
	    }
	    this._call = callback;
	    this._time = time;
	    sleep();
	  },
	  stop: function() {
	    if (this._call) {
	      this._call = null;
	      this._time = Infinity;
	      sleep();
	    }
	  }
	};
	
	function timer(callback, delay, time) {
	  var t = new Timer;
	  t.restart(callback, delay, time);
	  return t;
	}
	
	function timerFlush() {
	  now(); // Get the current time, if not already set.
	  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
	  var t = taskHead, e;
	  while (t) {
	    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
	    t = t._next;
	  }
	  --frame;
	}
	
	function wake() {
	  clockNow = (clockLast = clock.now()) + clockSkew;
	  frame = timeout = 0;
	  try {
	    timerFlush();
	  } finally {
	    frame = 0;
	    nap();
	    clockNow = 0;
	  }
	}
	
	function poke() {
	  var now = clock.now(), delay = now - clockLast;
	  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
	}
	
	function nap() {
	  var t0, t1 = taskHead, t2, time = Infinity;
	  while (t1) {
	    if (t1._call) {
	      if (time > t1._time) time = t1._time;
	      t0 = t1, t1 = t1._next;
	    } else {
	      t2 = t1._next, t1._next = null;
	      t1 = t0 ? t0._next = t2 : taskHead = t2;
	    }
	  }
	  taskTail = t0;
	  sleep(time);
	}
	
	function sleep(time) {
	  if (frame) return; // Soonest alarm already set, or will be.
	  if (timeout) timeout = clearTimeout(timeout);
	  var delay = time - clockNow;
	  if (delay > 24) {
	    if (time < Infinity) timeout = setTimeout(wake, delay);
	    if (interval) interval = clearInterval(interval);
	  } else {
	    if (!interval) clockLast = clockNow, interval = setInterval(poke, pokeDelay);
	    frame = 1, setFrame(wake);
	  }
	}
	
	var timeout$1 = function(callback, delay, time) {
	  var t = new Timer;
	  delay = delay == null ? 0 : +delay;
	  t.restart(function(elapsed) {
	    t.stop();
	    callback(elapsed + delay);
	  }, delay, time);
	  return t;
	};
	
	var interval$1 = function(callback, delay, time) {
	  var t = new Timer, total = delay;
	  if (delay == null) return t.restart(callback, delay, time), t;
	  delay = +delay, time = time == null ? now() : +time;
	  t.restart(function tick(elapsed) {
	    elapsed += total;
	    t.restart(tick, total += delay, time);
	    callback(elapsed);
	  }, delay, time);
	  return t;
	};
	
	var emptyOn = dispatch("start", "end", "interrupt");
	var emptyTween = [];
	
	var CREATED = 0;
	var SCHEDULED = 1;
	var STARTING = 2;
	var STARTED = 3;
	var RUNNING = 4;
	var ENDING = 5;
	var ENDED = 6;
	
	var schedule = function(node, name, id, index, group, timing) {
	  var schedules = node.__transition;
	  if (!schedules) node.__transition = {};
	  else if (id in schedules) return;
	  create(node, id, {
	    name: name,
	    index: index, // For context during callback.
	    group: group, // For context during callback.
	    on: emptyOn,
	    tween: emptyTween,
	    time: timing.time,
	    delay: timing.delay,
	    duration: timing.duration,
	    ease: timing.ease,
	    timer: null,
	    state: CREATED
	  });
	};
	
	function init(node, id) {
	  var schedule = node.__transition;
	  if (!schedule || !(schedule = schedule[id]) || schedule.state > CREATED) throw new Error("too late");
	  return schedule;
	}
	
	function set$1(node, id) {
	  var schedule = node.__transition;
	  if (!schedule || !(schedule = schedule[id]) || schedule.state > STARTING) throw new Error("too late");
	  return schedule;
	}
	
	function get$1(node, id) {
	  var schedule = node.__transition;
	  if (!schedule || !(schedule = schedule[id])) throw new Error("too late");
	  return schedule;
	}
	
	function create(node, id, self) {
	  var schedules = node.__transition,
	      tween;
	
	  // Initialize the self timer when the transition is created.
	  // Note the actual delay is not known until the first callback!
	  schedules[id] = self;
	  self.timer = timer(schedule, 0, self.time);
	
	  function schedule(elapsed) {
	    self.state = SCHEDULED;
	    self.timer.restart(start, self.delay, self.time);
	
	    // If the elapsed delay is less than our first sleep, start immediately.
	    if (self.delay <= elapsed) start(elapsed - self.delay);
	  }
	
	  function start(elapsed) {
	    var i, j, n, o;
	
	    // If the state is not SCHEDULED, then we previously errored on start.
	    if (self.state !== SCHEDULED) return stop();
	
	    for (i in schedules) {
	      o = schedules[i];
	      if (o.name !== self.name) continue;
	
	      // While this element already has a starting transition during this frame,
	      // defer starting an interrupting transition until that transition has a
	      // chance to tick (and possibly end); see d3/d3-transition#54!
	      if (o.state === STARTED) return timeout$1(start);
	
	      // Interrupt the active transition, if any.
	      // Dispatch the interrupt event.
	      if (o.state === RUNNING) {
	        o.state = ENDED;
	        o.timer.stop();
	        o.on.call("interrupt", node, node.__data__, o.index, o.group);
	        delete schedules[i];
	      }
	
	      // Cancel any pre-empted transitions. No interrupt event is dispatched
	      // because the cancelled transitions never started. Note that this also
	      // removes this transition from the pending list!
	      else if (+i < id) {
	        o.state = ENDED;
	        o.timer.stop();
	        delete schedules[i];
	      }
	    }
	
	    // Defer the first tick to end of the current frame; see d3/d3#1576.
	    // Note the transition may be canceled after start and before the first tick!
	    // Note this must be scheduled before the start event; see d3/d3-transition#16!
	    // Assuming this is successful, subsequent callbacks go straight to tick.
	    timeout$1(function() {
	      if (self.state === STARTED) {
	        self.state = RUNNING;
	        self.timer.restart(tick, self.delay, self.time);
	        tick(elapsed);
	      }
	    });
	
	    // Dispatch the start event.
	    // Note this must be done before the tween are initialized.
	    self.state = STARTING;
	    self.on.call("start", node, node.__data__, self.index, self.group);
	    if (self.state !== STARTING) return; // interrupted
	    self.state = STARTED;
	
	    // Initialize the tween, deleting null tween.
	    tween = new Array(n = self.tween.length);
	    for (i = 0, j = -1; i < n; ++i) {
	      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
	        tween[++j] = o;
	      }
	    }
	    tween.length = j + 1;
	  }
	
	  function tick(elapsed) {
	    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
	        i = -1,
	        n = tween.length;
	
	    while (++i < n) {
	      tween[i].call(null, t);
	    }
	
	    // Dispatch the end event.
	    if (self.state === ENDING) {
	      self.on.call("end", node, node.__data__, self.index, self.group);
	      stop();
	    }
	  }
	
	  function stop() {
	    self.state = ENDED;
	    self.timer.stop();
	    delete schedules[id];
	    for (var i in schedules) return; // eslint-disable-line no-unused-vars
	    delete node.__transition;
	  }
	}
	
	var interrupt = function(node, name) {
	  var schedules = node.__transition,
	      schedule,
	      active,
	      empty = true,
	      i;
	
	  if (!schedules) return;
	
	  name = name == null ? null : name + "";
	
	  for (i in schedules) {
	    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
	    active = schedule.state > STARTING && schedule.state < ENDING;
	    schedule.state = ENDED;
	    schedule.timer.stop();
	    if (active) schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group);
	    delete schedules[i];
	  }
	
	  if (empty) delete node.__transition;
	};
	
	var selection_interrupt = function(name) {
	  return this.each(function() {
	    interrupt(this, name);
	  });
	};
	
	function tweenRemove(id, name) {
	  var tween0, tween1;
	  return function() {
	    var schedule = set$1(this, id),
	        tween = schedule.tween;
	
	    // If this node shared tween with the previous node,
	    // just assign the updated shared tween and we’re done!
	    // Otherwise, copy-on-write.
	    if (tween !== tween0) {
	      tween1 = tween0 = tween;
	      for (var i = 0, n = tween1.length; i < n; ++i) {
	        if (tween1[i].name === name) {
	          tween1 = tween1.slice();
	          tween1.splice(i, 1);
	          break;
	        }
	      }
	    }
	
	    schedule.tween = tween1;
	  };
	}
	
	function tweenFunction(id, name, value) {
	  var tween0, tween1;
	  if (typeof value !== "function") throw new Error;
	  return function() {
	    var schedule = set$1(this, id),
	        tween = schedule.tween;
	
	    // If this node shared tween with the previous node,
	    // just assign the updated shared tween and we’re done!
	    // Otherwise, copy-on-write.
	    if (tween !== tween0) {
	      tween1 = (tween0 = tween).slice();
	      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
	        if (tween1[i].name === name) {
	          tween1[i] = t;
	          break;
	        }
	      }
	      if (i === n) tween1.push(t);
	    }
	
	    schedule.tween = tween1;
	  };
	}
	
	var transition_tween = function(name, value) {
	  var id = this._id;
	
	  name += "";
	
	  if (arguments.length < 2) {
	    var tween = get$1(this.node(), id).tween;
	    for (var i = 0, n = tween.length, t; i < n; ++i) {
	      if ((t = tween[i]).name === name) {
	        return t.value;
	      }
	    }
	    return null;
	  }
	
	  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
	};
	
	function tweenValue(transition, name, value) {
	  var id = transition._id;
	
	  transition.each(function() {
	    var schedule = set$1(this, id);
	    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
	  });
	
	  return function(node) {
	    return get$1(node, id).value[name];
	  };
	}
	
	var interpolate$$1 = function(a, b) {
	  var c;
	  return (typeof b === "number" ? reinterpolate
	      : b instanceof color ? interpolateRgb
	      : (c = color(b)) ? (b = c, interpolateRgb)
	      : interpolateString)(a, b);
	};
	
	function attrRemove$1(name) {
	  return function() {
	    this.removeAttribute(name);
	  };
	}
	
	function attrRemoveNS$1(fullname) {
	  return function() {
	    this.removeAttributeNS(fullname.space, fullname.local);
	  };
	}
	
	function attrConstant$1(name, interpolate$$1, value1) {
	  var value00,
	      interpolate0;
	  return function() {
	    var value0 = this.getAttribute(name);
	    return value0 === value1 ? null
	        : value0 === value00 ? interpolate0
	        : interpolate0 = interpolate$$1(value00 = value0, value1);
	  };
	}
	
	function attrConstantNS$1(fullname, interpolate$$1, value1) {
	  var value00,
	      interpolate0;
	  return function() {
	    var value0 = this.getAttributeNS(fullname.space, fullname.local);
	    return value0 === value1 ? null
	        : value0 === value00 ? interpolate0
	        : interpolate0 = interpolate$$1(value00 = value0, value1);
	  };
	}
	
	function attrFunction$1(name, interpolate$$1, value) {
	  var value00,
	      value10,
	      interpolate0;
	  return function() {
	    var value0, value1 = value(this);
	    if (value1 == null) return void this.removeAttribute(name);
	    value0 = this.getAttribute(name);
	    return value0 === value1 ? null
	        : value0 === value00 && value1 === value10 ? interpolate0
	        : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
	  };
	}
	
	function attrFunctionNS$1(fullname, interpolate$$1, value) {
	  var value00,
	      value10,
	      interpolate0;
	  return function() {
	    var value0, value1 = value(this);
	    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
	    value0 = this.getAttributeNS(fullname.space, fullname.local);
	    return value0 === value1 ? null
	        : value0 === value00 && value1 === value10 ? interpolate0
	        : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
	  };
	}
	
	var transition_attr = function(name, value) {
	  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate$$1;
	  return this.attrTween(name, typeof value === "function"
	      ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, "attr." + name, value))
	      : value == null ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname)
	      : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value + ""));
	};
	
	function attrTweenNS(fullname, value) {
	  function tween() {
	    var node = this, i = value.apply(node, arguments);
	    return i && function(t) {
	      node.setAttributeNS(fullname.space, fullname.local, i(t));
	    };
	  }
	  tween._value = value;
	  return tween;
	}
	
	function attrTween(name, value) {
	  function tween() {
	    var node = this, i = value.apply(node, arguments);
	    return i && function(t) {
	      node.setAttribute(name, i(t));
	    };
	  }
	  tween._value = value;
	  return tween;
	}
	
	var transition_attrTween = function(name, value) {
	  var key = "attr." + name;
	  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	  if (value == null) return this.tween(key, null);
	  if (typeof value !== "function") throw new Error;
	  var fullname = namespace(name);
	  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
	};
	
	function delayFunction(id, value) {
	  return function() {
	    init(this, id).delay = +value.apply(this, arguments);
	  };
	}
	
	function delayConstant(id, value) {
	  return value = +value, function() {
	    init(this, id).delay = value;
	  };
	}
	
	var transition_delay = function(value) {
	  var id = this._id;
	
	  return arguments.length
	      ? this.each((typeof value === "function"
	          ? delayFunction
	          : delayConstant)(id, value))
	      : get$1(this.node(), id).delay;
	};
	
	function durationFunction(id, value) {
	  return function() {
	    set$1(this, id).duration = +value.apply(this, arguments);
	  };
	}
	
	function durationConstant(id, value) {
	  return value = +value, function() {
	    set$1(this, id).duration = value;
	  };
	}
	
	var transition_duration = function(value) {
	  var id = this._id;
	
	  return arguments.length
	      ? this.each((typeof value === "function"
	          ? durationFunction
	          : durationConstant)(id, value))
	      : get$1(this.node(), id).duration;
	};
	
	function easeConstant(id, value) {
	  if (typeof value !== "function") throw new Error;
	  return function() {
	    set$1(this, id).ease = value;
	  };
	}
	
	var transition_ease = function(value) {
	  var id = this._id;
	
	  return arguments.length
	      ? this.each(easeConstant(id, value))
	      : get$1(this.node(), id).ease;
	};
	
	var transition_filter = function(match) {
	  if (typeof match !== "function") match = matcher$1(match);
	
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
	      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	        subgroup.push(node);
	      }
	    }
	  }
	
	  return new Transition(subgroups, this._parents, this._name, this._id);
	};
	
	var transition_merge = function(transition) {
	  if (transition._id !== this._id) throw new Error;
	
	  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group0[i] || group1[i]) {
	        merge[i] = node;
	      }
	    }
	  }
	
	  for (; j < m0; ++j) {
	    merges[j] = groups0[j];
	  }
	
	  return new Transition(merges, this._parents, this._name, this._id);
	};
	
	function start(name) {
	  return (name + "").trim().split(/^|\s+/).every(function(t) {
	    var i = t.indexOf(".");
	    if (i >= 0) t = t.slice(0, i);
	    return !t || t === "start";
	  });
	}
	
	function onFunction(id, name, listener) {
	  var on0, on1, sit = start(name) ? init : set$1;
	  return function() {
	    var schedule = sit(this, id),
	        on = schedule.on;
	
	    // If this node shared a dispatch with the previous node,
	    // just assign the updated shared dispatch and we’re done!
	    // Otherwise, copy-on-write.
	    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
	
	    schedule.on = on1;
	  };
	}
	
	var transition_on = function(name, listener) {
	  var id = this._id;
	
	  return arguments.length < 2
	      ? get$1(this.node(), id).on.on(name)
	      : this.each(onFunction(id, name, listener));
	};
	
	function removeFunction(id) {
	  return function() {
	    var parent = this.parentNode;
	    for (var i in this.__transition) if (+i !== id) return;
	    if (parent) parent.removeChild(this);
	  };
	}
	
	var transition_remove = function() {
	  return this.on("end.remove", removeFunction(this._id));
	};
	
	var transition_select = function(select$$1) {
	  var name = this._name,
	      id = this._id;
	
	  if (typeof select$$1 !== "function") select$$1 = selector(select$$1);
	
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	      if ((node = group[i]) && (subnode = select$$1.call(node, node.__data__, i, group))) {
	        if ("__data__" in node) subnode.__data__ = node.__data__;
	        subgroup[i] = subnode;
	        schedule(subgroup[i], name, id, i, subgroup, get$1(node, id));
	      }
	    }
	  }
	
	  return new Transition(subgroups, this._parents, name, id);
	};
	
	var transition_selectAll = function(select$$1) {
	  var name = this._name,
	      id = this._id;
	
	  if (typeof select$$1 !== "function") select$$1 = selectorAll(select$$1);
	
	  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        for (var children = select$$1.call(node, node.__data__, i, group), child, inherit = get$1(node, id), k = 0, l = children.length; k < l; ++k) {
	          if (child = children[k]) {
	            schedule(child, name, id, k, children, inherit);
	          }
	        }
	        subgroups.push(children);
	        parents.push(node);
	      }
	    }
	  }
	
	  return new Transition(subgroups, parents, name, id);
	};
	
	var Selection$1 = selection.prototype.constructor;
	
	var transition_selection = function() {
	  return new Selection$1(this._groups, this._parents);
	};
	
	function styleRemove$1(name, interpolate$$2) {
	  var value00,
	      value10,
	      interpolate0;
	  return function() {
	    var value0 = styleValue(this, name),
	        value1 = (this.style.removeProperty(name), styleValue(this, name));
	    return value0 === value1 ? null
	        : value0 === value00 && value1 === value10 ? interpolate0
	        : interpolate0 = interpolate$$2(value00 = value0, value10 = value1);
	  };
	}
	
	function styleRemoveEnd(name) {
	  return function() {
	    this.style.removeProperty(name);
	  };
	}
	
	function styleConstant$1(name, interpolate$$2, value1) {
	  var value00,
	      interpolate0;
	  return function() {
	    var value0 = styleValue(this, name);
	    return value0 === value1 ? null
	        : value0 === value00 ? interpolate0
	        : interpolate0 = interpolate$$2(value00 = value0, value1);
	  };
	}
	
	function styleFunction$1(name, interpolate$$2, value) {
	  var value00,
	      value10,
	      interpolate0;
	  return function() {
	    var value0 = styleValue(this, name),
	        value1 = value(this);
	    if (value1 == null) value1 = (this.style.removeProperty(name), styleValue(this, name));
	    return value0 === value1 ? null
	        : value0 === value00 && value1 === value10 ? interpolate0
	        : interpolate0 = interpolate$$2(value00 = value0, value10 = value1);
	  };
	}
	
	var transition_style = function(name, value, priority) {
	  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate$$1;
	  return value == null ? this
	          .styleTween(name, styleRemove$1(name, i))
	          .on("end.style." + name, styleRemoveEnd(name))
	      : this.styleTween(name, typeof value === "function"
	          ? styleFunction$1(name, i, tweenValue(this, "style." + name, value))
	          : styleConstant$1(name, i, value + ""), priority);
	};
	
	function styleTween(name, value, priority) {
	  function tween() {
	    var node = this, i = value.apply(node, arguments);
	    return i && function(t) {
	      node.style.setProperty(name, i(t), priority);
	    };
	  }
	  tween._value = value;
	  return tween;
	}
	
	var transition_styleTween = function(name, value, priority) {
	  var key = "style." + (name += "");
	  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	  if (value == null) return this.tween(key, null);
	  if (typeof value !== "function") throw new Error;
	  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
	};
	
	function textConstant$1(value) {
	  return function() {
	    this.textContent = value;
	  };
	}
	
	function textFunction$1(value) {
	  return function() {
	    var value1 = value(this);
	    this.textContent = value1 == null ? "" : value1;
	  };
	}
	
	var transition_text = function(value) {
	  return this.tween("text", typeof value === "function"
	      ? textFunction$1(tweenValue(this, "text", value))
	      : textConstant$1(value == null ? "" : value + ""));
	};
	
	var transition_transition = function() {
	  var name = this._name,
	      id0 = this._id,
	      id1 = newId();
	
	  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        var inherit = get$1(node, id0);
	        schedule(node, name, id1, i, group, {
	          time: inherit.time + inherit.delay + inherit.duration,
	          delay: 0,
	          duration: inherit.duration,
	          ease: inherit.ease
	        });
	      }
	    }
	  }
	
	  return new Transition(groups, this._parents, name, id1);
	};
	
	var id = 0;
	
	function Transition(groups, parents, name, id) {
	  this._groups = groups;
	  this._parents = parents;
	  this._name = name;
	  this._id = id;
	}
	
	function transition(name) {
	  return selection().transition(name);
	}
	
	function newId() {
	  return ++id;
	}
	
	var selection_prototype = selection.prototype;
	
	Transition.prototype = transition.prototype = {
	  constructor: Transition,
	  select: transition_select,
	  selectAll: transition_selectAll,
	  filter: transition_filter,
	  merge: transition_merge,
	  selection: transition_selection,
	  transition: transition_transition,
	  call: selection_prototype.call,
	  nodes: selection_prototype.nodes,
	  node: selection_prototype.node,
	  size: selection_prototype.size,
	  empty: selection_prototype.empty,
	  each: selection_prototype.each,
	  on: transition_on,
	  attr: transition_attr,
	  attrTween: transition_attrTween,
	  style: transition_style,
	  styleTween: transition_styleTween,
	  text: transition_text,
	  remove: transition_remove,
	  tween: transition_tween,
	  delay: transition_delay,
	  duration: transition_duration,
	  ease: transition_ease
	};
	
	function linear$1(t) {
	  return +t;
	}
	
	function quadIn(t) {
	  return t * t;
	}
	
	function quadOut(t) {
	  return t * (2 - t);
	}
	
	function quadInOut(t) {
	  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
	}
	
	function cubicIn(t) {
	  return t * t * t;
	}
	
	function cubicOut(t) {
	  return --t * t * t + 1;
	}
	
	function cubicInOut(t) {
	  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
	}
	
	var exponent = 3;
	
	var polyIn = (function custom(e) {
	  e = +e;
	
	  function polyIn(t) {
	    return Math.pow(t, e);
	  }
	
	  polyIn.exponent = custom;
	
	  return polyIn;
	})(exponent);
	
	var polyOut = (function custom(e) {
	  e = +e;
	
	  function polyOut(t) {
	    return 1 - Math.pow(1 - t, e);
	  }
	
	  polyOut.exponent = custom;
	
	  return polyOut;
	})(exponent);
	
	var polyInOut = (function custom(e) {
	  e = +e;
	
	  function polyInOut(t) {
	    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
	  }
	
	  polyInOut.exponent = custom;
	
	  return polyInOut;
	})(exponent);
	
	var pi = Math.PI;
	var halfPi = pi / 2;
	
	function sinIn(t) {
	  return 1 - Math.cos(t * halfPi);
	}
	
	function sinOut(t) {
	  return Math.sin(t * halfPi);
	}
	
	function sinInOut(t) {
	  return (1 - Math.cos(pi * t)) / 2;
	}
	
	function expIn(t) {
	  return Math.pow(2, 10 * t - 10);
	}
	
	function expOut(t) {
	  return 1 - Math.pow(2, -10 * t);
	}
	
	function expInOut(t) {
	  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
	}
	
	function circleIn(t) {
	  return 1 - Math.sqrt(1 - t * t);
	}
	
	function circleOut(t) {
	  return Math.sqrt(1 - --t * t);
	}
	
	function circleInOut(t) {
	  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
	}
	
	var b1 = 4 / 11;
	var b2 = 6 / 11;
	var b3 = 8 / 11;
	var b4 = 3 / 4;
	var b5 = 9 / 11;
	var b6 = 10 / 11;
	var b7 = 15 / 16;
	var b8 = 21 / 22;
	var b9 = 63 / 64;
	var b0 = 1 / b1 / b1;
	
	function bounceIn(t) {
	  return 1 - bounceOut(1 - t);
	}
	
	function bounceOut(t) {
	  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
	}
	
	function bounceInOut(t) {
	  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
	}
	
	var overshoot = 1.70158;
	
	var backIn = (function custom(s) {
	  s = +s;
	
	  function backIn(t) {
	    return t * t * ((s + 1) * t - s);
	  }
	
	  backIn.overshoot = custom;
	
	  return backIn;
	})(overshoot);
	
	var backOut = (function custom(s) {
	  s = +s;
	
	  function backOut(t) {
	    return --t * t * ((s + 1) * t + s) + 1;
	  }
	
	  backOut.overshoot = custom;
	
	  return backOut;
	})(overshoot);
	
	var backInOut = (function custom(s) {
	  s = +s;
	
	  function backInOut(t) {
	    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
	  }
	
	  backInOut.overshoot = custom;
	
	  return backInOut;
	})(overshoot);
	
	var tau = 2 * Math.PI;
	var amplitude = 1;
	var period = 0.3;
	
	var elasticIn = (function custom(a, p) {
	  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
	
	  function elasticIn(t) {
	    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
	  }
	
	  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
	  elasticIn.period = function(p) { return custom(a, p); };
	
	  return elasticIn;
	})(amplitude, period);
	
	var elasticOut = (function custom(a, p) {
	  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
	
	  function elasticOut(t) {
	    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
	  }
	
	  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
	  elasticOut.period = function(p) { return custom(a, p); };
	
	  return elasticOut;
	})(amplitude, period);
	
	var elasticInOut = (function custom(a, p) {
	  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
	
	  function elasticInOut(t) {
	    return ((t = t * 2 - 1) < 0
	        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
	        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
	  }
	
	  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
	  elasticInOut.period = function(p) { return custom(a, p); };
	
	  return elasticInOut;
	})(amplitude, period);
	
	var defaultTiming = {
	  time: null, // Set on use.
	  delay: 0,
	  duration: 250,
	  ease: cubicInOut
	};
	
	function inherit(node, id) {
	  var timing;
	  while (!(timing = node.__transition) || !(timing = timing[id])) {
	    if (!(node = node.parentNode)) {
	      return defaultTiming.time = now(), defaultTiming;
	    }
	  }
	  return timing;
	}
	
	var selection_transition = function(name) {
	  var id,
	      timing;
	
	  if (name instanceof Transition) {
	    id = name._id, name = name._name;
	  } else {
	    id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
	  }
	
	  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        schedule(node, name, id, i, group, timing || inherit(node, id));
	      }
	    }
	  }
	
	  return new Transition(groups, this._parents, name, id);
	};
	
	selection.prototype.interrupt = selection_interrupt;
	selection.prototype.transition = selection_transition;
	
	var root$1 = [null];
	
	var active = function(node, name) {
	  var schedules = node.__transition,
	      schedule,
	      i;
	
	  if (schedules) {
	    name = name == null ? null : name + "";
	    for (i in schedules) {
	      if ((schedule = schedules[i]).state > SCHEDULED && schedule.name === name) {
	        return new Transition([[node]], root$1, name, +i);
	      }
	    }
	  }
	
	  return null;
	};
	
	var constant$4 = function(x) {
	  return function() {
	    return x;
	  };
	};
	
	var BrushEvent = function(target, type, selection) {
	  this.target = target;
	  this.type = type;
	  this.selection = selection;
	};
	
	function nopropagation$1() {
	  exports.event.stopImmediatePropagation();
	}
	
	var noevent$1 = function() {
	  exports.event.preventDefault();
	  exports.event.stopImmediatePropagation();
	};
	
	var MODE_DRAG = {name: "drag"};
	var MODE_SPACE = {name: "space"};
	var MODE_HANDLE = {name: "handle"};
	var MODE_CENTER = {name: "center"};
	
	var X = {
	  name: "x",
	  handles: ["e", "w"].map(type),
	  input: function(x, e) { return x && [[x[0], e[0][1]], [x[1], e[1][1]]]; },
	  output: function(xy) { return xy && [xy[0][0], xy[1][0]]; }
	};
	
	var Y = {
	  name: "y",
	  handles: ["n", "s"].map(type),
	  input: function(y, e) { return y && [[e[0][0], y[0]], [e[1][0], y[1]]]; },
	  output: function(xy) { return xy && [xy[0][1], xy[1][1]]; }
	};
	
	var XY = {
	  name: "xy",
	  handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(type),
	  input: function(xy) { return xy; },
	  output: function(xy) { return xy; }
	};
	
	var cursors = {
	  overlay: "crosshair",
	  selection: "move",
	  n: "ns-resize",
	  e: "ew-resize",
	  s: "ns-resize",
	  w: "ew-resize",
	  nw: "nwse-resize",
	  ne: "nesw-resize",
	  se: "nwse-resize",
	  sw: "nesw-resize"
	};
	
	var flipX = {
	  e: "w",
	  w: "e",
	  nw: "ne",
	  ne: "nw",
	  se: "sw",
	  sw: "se"
	};
	
	var flipY = {
	  n: "s",
	  s: "n",
	  nw: "sw",
	  ne: "se",
	  se: "ne",
	  sw: "nw"
	};
	
	var signsX = {
	  overlay: +1,
	  selection: +1,
	  n: null,
	  e: +1,
	  s: null,
	  w: -1,
	  nw: -1,
	  ne: +1,
	  se: +1,
	  sw: -1
	};
	
	var signsY = {
	  overlay: +1,
	  selection: +1,
	  n: -1,
	  e: null,
	  s: +1,
	  w: null,
	  nw: -1,
	  ne: -1,
	  se: +1,
	  sw: +1
	};
	
	function type(t) {
	  return {type: t};
	}
	
	// Ignore right-click, since that should open the context menu.
	function defaultFilter() {
	  return !exports.event.button;
	}
	
	function defaultExtent() {
	  var svg = this.ownerSVGElement || this;
	  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
	}
	
	// Like d3.local, but with the name “__brush” rather than auto-generated.
	function local$$1(node) {
	  while (!node.__brush) if (!(node = node.parentNode)) return;
	  return node.__brush;
	}
	
	function empty(extent) {
	  return extent[0][0] === extent[1][0]
	      || extent[0][1] === extent[1][1];
	}
	
	function brushSelection(node) {
	  var state = node.__brush;
	  return state ? state.dim.output(state.selection) : null;
	}
	
	function brushX() {
	  return brush$1(X);
	}
	
	function brushY() {
	  return brush$1(Y);
	}
	
	var brush = function() {
	  return brush$1(XY);
	};
	
	function brush$1(dim) {
	  var extent = defaultExtent,
	      filter = defaultFilter,
	      listeners = dispatch(brush, "start", "brush", "end"),
	      handleSize = 6,
	      touchending;
	
	  function brush(group) {
	    var overlay = group
	        .property("__brush", initialize)
	      .selectAll(".overlay")
	      .data([type("overlay")]);
	
	    overlay.enter().append("rect")
	        .attr("class", "overlay")
	        .attr("pointer-events", "all")
	        .attr("cursor", cursors.overlay)
	      .merge(overlay)
	        .each(function() {
	          var extent = local$$1(this).extent;
	          select(this)
	              .attr("x", extent[0][0])
	              .attr("y", extent[0][1])
	              .attr("width", extent[1][0] - extent[0][0])
	              .attr("height", extent[1][1] - extent[0][1]);
	        });
	
	    group.selectAll(".selection")
	      .data([type("selection")])
	      .enter().append("rect")
	        .attr("class", "selection")
	        .attr("cursor", cursors.selection)
	        .attr("fill", "#777")
	        .attr("fill-opacity", 0.3)
	        .attr("stroke", "#fff")
	        .attr("shape-rendering", "crispEdges");
	
	    var handle = group.selectAll(".handle")
	      .data(dim.handles, function(d) { return d.type; });
	
	    handle.exit().remove();
	
	    handle.enter().append("rect")
	        .attr("class", function(d) { return "handle handle--" + d.type; })
	        .attr("cursor", function(d) { return cursors[d.type]; });
	
	    group
	        .each(redraw)
	        .attr("fill", "none")
	        .attr("pointer-events", "all")
	        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
	        .on("mousedown.brush touchstart.brush", started);
	  }
	
	  brush.move = function(group, selection$$1) {
	    if (group.selection) {
	      group
	          .on("start.brush", function() { emitter(this, arguments).beforestart().start(); })
	          .on("interrupt.brush end.brush", function() { emitter(this, arguments).end(); })
	          .tween("brush", function() {
	            var that = this,
	                state = that.__brush,
	                emit = emitter(that, arguments),
	                selection0 = state.selection,
	                selection1 = dim.input(typeof selection$$1 === "function" ? selection$$1.apply(this, arguments) : selection$$1, state.extent),
	                i = interpolateValue(selection0, selection1);
	
	            function tween(t) {
	              state.selection = t === 1 && empty(selection1) ? null : i(t);
	              redraw.call(that);
	              emit.brush();
	            }
	
	            return selection0 && selection1 ? tween : tween(1);
	          });
	    } else {
	      group
	          .each(function() {
	            var that = this,
	                args = arguments,
	                state = that.__brush,
	                selection1 = dim.input(typeof selection$$1 === "function" ? selection$$1.apply(that, args) : selection$$1, state.extent),
	                emit = emitter(that, args).beforestart();
	
	            interrupt(that);
	            state.selection = selection1 == null || empty(selection1) ? null : selection1;
	            redraw.call(that);
	            emit.start().brush().end();
	          });
	    }
	  };
	
	  function redraw() {
	    var group = select(this),
	        selection$$1 = local$$1(this).selection;
	
	    if (selection$$1) {
	      group.selectAll(".selection")
	          .style("display", null)
	          .attr("x", selection$$1[0][0])
	          .attr("y", selection$$1[0][1])
	          .attr("width", selection$$1[1][0] - selection$$1[0][0])
	          .attr("height", selection$$1[1][1] - selection$$1[0][1]);
	
	      group.selectAll(".handle")
	          .style("display", null)
	          .attr("x", function(d) { return d.type[d.type.length - 1] === "e" ? selection$$1[1][0] - handleSize / 2 : selection$$1[0][0] - handleSize / 2; })
	          .attr("y", function(d) { return d.type[0] === "s" ? selection$$1[1][1] - handleSize / 2 : selection$$1[0][1] - handleSize / 2; })
	          .attr("width", function(d) { return d.type === "n" || d.type === "s" ? selection$$1[1][0] - selection$$1[0][0] + handleSize : handleSize; })
	          .attr("height", function(d) { return d.type === "e" || d.type === "w" ? selection$$1[1][1] - selection$$1[0][1] + handleSize : handleSize; });
	    }
	
	    else {
	      group.selectAll(".selection,.handle")
	          .style("display", "none")
	          .attr("x", null)
	          .attr("y", null)
	          .attr("width", null)
	          .attr("height", null);
	    }
	  }
	
	  function emitter(that, args) {
	    return that.__brush.emitter || new Emitter(that, args);
	  }
	
	  function Emitter(that, args) {
	    this.that = that;
	    this.args = args;
	    this.state = that.__brush;
	    this.active = 0;
	  }
	
	  Emitter.prototype = {
	    beforestart: function() {
	      if (++this.active === 1) this.state.emitter = this, this.starting = true;
	      return this;
	    },
	    start: function() {
	      if (this.starting) this.starting = false, this.emit("start");
	      return this;
	    },
	    brush: function() {
	      this.emit("brush");
	      return this;
	    },
	    end: function() {
	      if (--this.active === 0) delete this.state.emitter, this.emit("end");
	      return this;
	    },
	    emit: function(type) {
	      customEvent(new BrushEvent(brush, type, dim.output(this.state.selection)), listeners.apply, listeners, [type, this.that, this.args]);
	    }
	  };
	
	  function started() {
	    if (exports.event.touches) { if (exports.event.changedTouches.length < exports.event.touches.length) return noevent$1(); }
	    else if (touchending) return;
	    if (!filter.apply(this, arguments)) return;
	
	    var that = this,
	        type = exports.event.target.__data__.type,
	        mode = (exports.event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : (exports.event.altKey ? MODE_CENTER : MODE_HANDLE),
	        signX = dim === Y ? null : signsX[type],
	        signY = dim === X ? null : signsY[type],
	        state = local$$1(that),
	        extent = state.extent,
	        selection$$1 = state.selection,
	        W = extent[0][0], w0, w1,
	        N = extent[0][1], n0, n1,
	        E = extent[1][0], e0, e1,
	        S = extent[1][1], s0, s1,
	        dx,
	        dy,
	        moving,
	        shifting = signX && signY && exports.event.shiftKey,
	        lockX,
	        lockY,
	        point0 = mouse(that),
	        point = point0,
	        emit = emitter(that, arguments).beforestart();
	
	    if (type === "overlay") {
	      state.selection = selection$$1 = [
	        [w0 = dim === Y ? W : point0[0], n0 = dim === X ? N : point0[1]],
	        [e0 = dim === Y ? E : w0, s0 = dim === X ? S : n0]
	      ];
	    } else {
	      w0 = selection$$1[0][0];
	      n0 = selection$$1[0][1];
	      e0 = selection$$1[1][0];
	      s0 = selection$$1[1][1];
	    }
	
	    w1 = w0;
	    n1 = n0;
	    e1 = e0;
	    s1 = s0;
	
	    var group = select(that)
	        .attr("pointer-events", "none");
	
	    var overlay = group.selectAll(".overlay")
	        .attr("cursor", cursors[type]);
	
	    if (exports.event.touches) {
	      group
	          .on("touchmove.brush", moved, true)
	          .on("touchend.brush touchcancel.brush", ended, true);
	    } else {
	      var view = select(exports.event.view)
	          .on("keydown.brush", keydowned, true)
	          .on("keyup.brush", keyupped, true)
	          .on("mousemove.brush", moved, true)
	          .on("mouseup.brush", ended, true);
	
	      dragDisable(exports.event.view);
	    }
	
	    nopropagation$1();
	    interrupt(that);
	    redraw.call(that);
	    emit.start();
	
	    function moved() {
	      var point1 = mouse(that);
	      if (shifting && !lockX && !lockY) {
	        if (Math.abs(point1[0] - point[0]) > Math.abs(point1[1] - point[1])) lockY = true;
	        else lockX = true;
	      }
	      point = point1;
	      moving = true;
	      noevent$1();
	      move();
	    }
	
	    function move() {
	      var t;
	
	      dx = point[0] - point0[0];
	      dy = point[1] - point0[1];
	
	      switch (mode) {
	        case MODE_SPACE:
	        case MODE_DRAG: {
	          if (signX) dx = Math.max(W - w0, Math.min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
	          if (signY) dy = Math.max(N - n0, Math.min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
	          break;
	        }
	        case MODE_HANDLE: {
	          if (signX < 0) dx = Math.max(W - w0, Math.min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
	          else if (signX > 0) dx = Math.max(W - e0, Math.min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
	          if (signY < 0) dy = Math.max(N - n0, Math.min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
	          else if (signY > 0) dy = Math.max(N - s0, Math.min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
	          break;
	        }
	        case MODE_CENTER: {
	          if (signX) w1 = Math.max(W, Math.min(E, w0 - dx * signX)), e1 = Math.max(W, Math.min(E, e0 + dx * signX));
	          if (signY) n1 = Math.max(N, Math.min(S, n0 - dy * signY)), s1 = Math.max(N, Math.min(S, s0 + dy * signY));
	          break;
	        }
	      }
	
	      if (e1 < w1) {
	        signX *= -1;
	        t = w0, w0 = e0, e0 = t;
	        t = w1, w1 = e1, e1 = t;
	        if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
	      }
	
	      if (s1 < n1) {
	        signY *= -1;
	        t = n0, n0 = s0, s0 = t;
	        t = n1, n1 = s1, s1 = t;
	        if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
	      }
	
	      if (state.selection) selection$$1 = state.selection; // May be set by brush.move!
	      if (lockX) w1 = selection$$1[0][0], e1 = selection$$1[1][0];
	      if (lockY) n1 = selection$$1[0][1], s1 = selection$$1[1][1];
	
	      if (selection$$1[0][0] !== w1
	          || selection$$1[0][1] !== n1
	          || selection$$1[1][0] !== e1
	          || selection$$1[1][1] !== s1) {
	        state.selection = [[w1, n1], [e1, s1]];
	        redraw.call(that);
	        emit.brush();
	      }
	    }
	
	    function ended() {
	      nopropagation$1();
	      if (exports.event.touches) {
	        if (exports.event.touches.length) return;
	        if (touchending) clearTimeout(touchending);
	        touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
	        group.on("touchmove.brush touchend.brush touchcancel.brush", null);
	      } else {
	        yesdrag(exports.event.view, moving);
	        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
	      }
	      group.attr("pointer-events", "all");
	      overlay.attr("cursor", cursors.overlay);
	      if (state.selection) selection$$1 = state.selection; // May be set by brush.move (on start)!
	      if (empty(selection$$1)) state.selection = null, redraw.call(that);
	      emit.end();
	    }
	
	    function keydowned() {
	      switch (exports.event.keyCode) {
	        case 16: { // SHIFT
	          shifting = signX && signY;
	          break;
	        }
	        case 18: { // ALT
	          if (mode === MODE_HANDLE) {
	            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
	            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
	            mode = MODE_CENTER;
	            move();
	          }
	          break;
	        }
	        case 32: { // SPACE; takes priority over ALT
	          if (mode === MODE_HANDLE || mode === MODE_CENTER) {
	            if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
	            if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
	            mode = MODE_SPACE;
	            overlay.attr("cursor", cursors.selection);
	            move();
	          }
	          break;
	        }
	        default: return;
	      }
	      noevent$1();
	    }
	
	    function keyupped() {
	      switch (exports.event.keyCode) {
	        case 16: { // SHIFT
	          if (shifting) {
	            lockX = lockY = shifting = false;
	            move();
	          }
	          break;
	        }
	        case 18: { // ALT
	          if (mode === MODE_CENTER) {
	            if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
	            if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
	            mode = MODE_HANDLE;
	            move();
	          }
	          break;
	        }
	        case 32: { // SPACE
	          if (mode === MODE_SPACE) {
	            if (exports.event.altKey) {
	              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
	              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
	              mode = MODE_CENTER;
	            } else {
	              if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
	              if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
	              mode = MODE_HANDLE;
	            }
	            overlay.attr("cursor", cursors[type]);
	            move();
	          }
	          break;
	        }
	        default: return;
	      }
	      noevent$1();
	    }
	  }
	
	  function initialize() {
	    var state = this.__brush || {selection: null};
	    state.extent = extent.apply(this, arguments);
	    state.dim = dim;
	    return state;
	  }
	
	  brush.extent = function(_) {
	    return arguments.length ? (extent = typeof _ === "function" ? _ : constant$4([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), brush) : extent;
	  };
	
	  brush.filter = function(_) {
	    return arguments.length ? (filter = typeof _ === "function" ? _ : constant$4(!!_), brush) : filter;
	  };
	
	  brush.handleSize = function(_) {
	    return arguments.length ? (handleSize = +_, brush) : handleSize;
	  };
	
	  brush.on = function() {
	    var value = listeners.on.apply(listeners, arguments);
	    return value === listeners ? brush : value;
	  };
	
	  return brush;
	}
	
	var cos = Math.cos;
	var sin = Math.sin;
	var pi$1 = Math.PI;
	var halfPi$1 = pi$1 / 2;
	var tau$1 = pi$1 * 2;
	var max$1 = Math.max;
	
	function compareValue(compare) {
	  return function(a, b) {
	    return compare(
	      a.source.value + a.target.value,
	      b.source.value + b.target.value
	    );
	  };
	}
	
	var chord = function() {
	  var padAngle = 0,
	      sortGroups = null,
	      sortSubgroups = null,
	      sortChords = null;
	
	  function chord(matrix) {
	    var n = matrix.length,
	        groupSums = [],
	        groupIndex = sequence(n),
	        subgroupIndex = [],
	        chords = [],
	        groups = chords.groups = new Array(n),
	        subgroups = new Array(n * n),
	        k,
	        x,
	        x0,
	        dx,
	        i,
	        j;
	
	    // Compute the sum.
	    k = 0, i = -1; while (++i < n) {
	      x = 0, j = -1; while (++j < n) {
	        x += matrix[i][j];
	      }
	      groupSums.push(x);
	      subgroupIndex.push(sequence(n));
	      k += x;
	    }
	
	    // Sort groups…
	    if (sortGroups) groupIndex.sort(function(a, b) {
	      return sortGroups(groupSums[a], groupSums[b]);
	    });
	
	    // Sort subgroups…
	    if (sortSubgroups) subgroupIndex.forEach(function(d, i) {
	      d.sort(function(a, b) {
	        return sortSubgroups(matrix[i][a], matrix[i][b]);
	      });
	    });
	
	    // Convert the sum to scaling factor for [0, 2pi].
	    // TODO Allow start and end angle to be specified?
	    // TODO Allow padding to be specified as percentage?
	    k = max$1(0, tau$1 - padAngle * n) / k;
	    dx = k ? padAngle : tau$1 / n;
	
	    // Compute the start and end angle for each group and subgroup.
	    // Note: Opera has a bug reordering object literal properties!
	    x = 0, i = -1; while (++i < n) {
	      x0 = x, j = -1; while (++j < n) {
	        var di = groupIndex[i],
	            dj = subgroupIndex[di][j],
	            v = matrix[di][dj],
	            a0 = x,
	            a1 = x += v * k;
	        subgroups[dj * n + di] = {
	          index: di,
	          subindex: dj,
	          startAngle: a0,
	          endAngle: a1,
	          value: v
	        };
	      }
	      groups[di] = {
	        index: di,
	        startAngle: x0,
	        endAngle: x,
	        value: groupSums[di]
	      };
	      x += dx;
	    }
	
	    // Generate chords for each (non-empty) subgroup-subgroup link.
	    i = -1; while (++i < n) {
	      j = i - 1; while (++j < n) {
	        var source = subgroups[j * n + i],
	            target = subgroups[i * n + j];
	        if (source.value || target.value) {
	          chords.push(source.value < target.value
	              ? {source: target, target: source}
	              : {source: source, target: target});
	        }
	      }
	    }
	
	    return sortChords ? chords.sort(sortChords) : chords;
	  }
	
	  chord.padAngle = function(_) {
	    return arguments.length ? (padAngle = max$1(0, _), chord) : padAngle;
	  };
	
	  chord.sortGroups = function(_) {
	    return arguments.length ? (sortGroups = _, chord) : sortGroups;
	  };
	
	  chord.sortSubgroups = function(_) {
	    return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
	  };
	
	  chord.sortChords = function(_) {
	    return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord) : sortChords && sortChords._;
	  };
	
	  return chord;
	};
	
	var slice$2 = Array.prototype.slice;
	
	var constant$5 = function(x) {
	  return function() {
	    return x;
	  };
	};
	
	var pi$2 = Math.PI;
	var tau$2 = 2 * pi$2;
	var epsilon$1 = 1e-6;
	var tauEpsilon = tau$2 - epsilon$1;
	
	function Path() {
	  this._x0 = this._y0 = // start of current subpath
	  this._x1 = this._y1 = null; // end of current subpath
	  this._ = "";
	}
	
	function path() {
	  return new Path;
	}
	
	Path.prototype = path.prototype = {
	  constructor: Path,
	  moveTo: function(x, y) {
	    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
	  },
	  closePath: function() {
	    if (this._x1 !== null) {
	      this._x1 = this._x0, this._y1 = this._y0;
	      this._ += "Z";
	    }
	  },
	  lineTo: function(x, y) {
	    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
	  },
	  quadraticCurveTo: function(x1, y1, x, y) {
	    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
	  },
	  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
	    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
	  },
	  arcTo: function(x1, y1, x2, y2, r) {
	    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
	    var x0 = this._x1,
	        y0 = this._y1,
	        x21 = x2 - x1,
	        y21 = y2 - y1,
	        x01 = x0 - x1,
	        y01 = y0 - y1,
	        l01_2 = x01 * x01 + y01 * y01;
	
	    // Is the radius negative? Error.
	    if (r < 0) throw new Error("negative radius: " + r);
	
	    // Is this path empty? Move to (x1,y1).
	    if (this._x1 === null) {
	      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
	    }
	
	    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
	    else if (!(l01_2 > epsilon$1)) {}
	
	    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
	    // Equivalently, is (x1,y1) coincident with (x2,y2)?
	    // Or, is the radius zero? Line to (x1,y1).
	    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
	      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
	    }
	
	    // Otherwise, draw an arc!
	    else {
	      var x20 = x2 - x0,
	          y20 = y2 - y0,
	          l21_2 = x21 * x21 + y21 * y21,
	          l20_2 = x20 * x20 + y20 * y20,
	          l21 = Math.sqrt(l21_2),
	          l01 = Math.sqrt(l01_2),
	          l = r * Math.tan((pi$2 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
	          t01 = l / l01,
	          t21 = l / l21;
	
	      // If the start tangent is not coincident with (x0,y0), line to.
	      if (Math.abs(t01 - 1) > epsilon$1) {
	        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
	      }
	
	      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
	    }
	  },
	  arc: function(x, y, r, a0, a1, ccw) {
	    x = +x, y = +y, r = +r;
	    var dx = r * Math.cos(a0),
	        dy = r * Math.sin(a0),
	        x0 = x + dx,
	        y0 = y + dy,
	        cw = 1 ^ ccw,
	        da = ccw ? a0 - a1 : a1 - a0;
	
	    // Is the radius negative? Error.
	    if (r < 0) throw new Error("negative radius: " + r);
	
	    // Is this path empty? Move to (x0,y0).
	    if (this._x1 === null) {
	      this._ += "M" + x0 + "," + y0;
	    }
	
	    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
	    else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) {
	      this._ += "L" + x0 + "," + y0;
	    }
	
	    // Is this arc empty? We’re done.
	    if (!r) return;
	
	    // Does the angle go the wrong way? Flip the direction.
	    if (da < 0) da = da % tau$2 + tau$2;
	
	    // Is this a complete circle? Draw two arcs to complete the circle.
	    if (da > tauEpsilon) {
	      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
	    }
	
	    // Is this arc non-empty? Draw an arc!
	    else if (da > epsilon$1) {
	      this._ += "A" + r + "," + r + ",0," + (+(da >= pi$2)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
	    }
	  },
	  rect: function(x, y, w, h) {
	    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
	  },
	  toString: function() {
	    return this._;
	  }
	};
	
	function defaultSource(d) {
	  return d.source;
	}
	
	function defaultTarget(d) {
	  return d.target;
	}
	
	function defaultRadius(d) {
	  return d.radius;
	}
	
	function defaultStartAngle(d) {
	  return d.startAngle;
	}
	
	function defaultEndAngle(d) {
	  return d.endAngle;
	}
	
	var ribbon = function() {
	  var source = defaultSource,
	      target = defaultTarget,
	      radius = defaultRadius,
	      startAngle = defaultStartAngle,
	      endAngle = defaultEndAngle,
	      context = null;
	
	  function ribbon() {
	    var buffer,
	        argv = slice$2.call(arguments),
	        s = source.apply(this, argv),
	        t = target.apply(this, argv),
	        sr = +radius.apply(this, (argv[0] = s, argv)),
	        sa0 = startAngle.apply(this, argv) - halfPi$1,
	        sa1 = endAngle.apply(this, argv) - halfPi$1,
	        sx0 = sr * cos(sa0),
	        sy0 = sr * sin(sa0),
	        tr = +radius.apply(this, (argv[0] = t, argv)),
	        ta0 = startAngle.apply(this, argv) - halfPi$1,
	        ta1 = endAngle.apply(this, argv) - halfPi$1;
	
	    if (!context) context = buffer = path();
	
	    context.moveTo(sx0, sy0);
	    context.arc(0, 0, sr, sa0, sa1);
	    if (sa0 !== ta0 || sa1 !== ta1) { // TODO sr !== tr?
	      context.quadraticCurveTo(0, 0, tr * cos(ta0), tr * sin(ta0));
	      context.arc(0, 0, tr, ta0, ta1);
	    }
	    context.quadraticCurveTo(0, 0, sx0, sy0);
	    context.closePath();
	
	    if (buffer) return context = null, buffer + "" || null;
	  }
	
	  ribbon.radius = function(_) {
	    return arguments.length ? (radius = typeof _ === "function" ? _ : constant$5(+_), ribbon) : radius;
	  };
	
	  ribbon.startAngle = function(_) {
	    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$5(+_), ribbon) : startAngle;
	  };
	
	  ribbon.endAngle = function(_) {
	    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$5(+_), ribbon) : endAngle;
	  };
	
	  ribbon.source = function(_) {
	    return arguments.length ? (source = _, ribbon) : source;
	  };
	
	  ribbon.target = function(_) {
	    return arguments.length ? (target = _, ribbon) : target;
	  };
	
	  ribbon.context = function(_) {
	    return arguments.length ? ((context = _ == null ? null : _), ribbon) : context;
	  };
	
	  return ribbon;
	};
	
	var prefix = "$";
	
	function Map() {}
	
	Map.prototype = map$1.prototype = {
	  constructor: Map,
	  has: function(key) {
	    return (prefix + key) in this;
	  },
	  get: function(key) {
	    return this[prefix + key];
	  },
	  set: function(key, value) {
	    this[prefix + key] = value;
	    return this;
	  },
	  remove: function(key) {
	    var property = prefix + key;
	    return property in this && delete this[property];
	  },
	  clear: function() {
	    for (var property in this) if (property[0] === prefix) delete this[property];
	  },
	  keys: function() {
	    var keys = [];
	    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
	    return keys;
	  },
	  values: function() {
	    var values = [];
	    for (var property in this) if (property[0] === prefix) values.push(this[property]);
	    return values;
	  },
	  entries: function() {
	    var entries = [];
	    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
	    return entries;
	  },
	  size: function() {
	    var size = 0;
	    for (var property in this) if (property[0] === prefix) ++size;
	    return size;
	  },
	  empty: function() {
	    for (var property in this) if (property[0] === prefix) return false;
	    return true;
	  },
	  each: function(f) {
	    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
	  }
	};
	
	function map$1(object, f) {
	  var map = new Map;
	
	  // Copy constructor.
	  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });
	
	  // Index array by numeric index or specified key function.
	  else if (Array.isArray(object)) {
	    var i = -1,
	        n = object.length,
	        o;
	
	    if (f == null) while (++i < n) map.set(i, object[i]);
	    else while (++i < n) map.set(f(o = object[i], i, object), o);
	  }
	
	  // Convert object to map.
	  else if (object) for (var key in object) map.set(key, object[key]);
	
	  return map;
	}
	
	var nest = function() {
	  var keys = [],
	      sortKeys = [],
	      sortValues,
	      rollup,
	      nest;
	
	  function apply(array, depth, createResult, setResult) {
	    if (depth >= keys.length) return rollup != null
	        ? rollup(array) : (sortValues != null
	        ? array.sort(sortValues)
	        : array);
	
	    var i = -1,
	        n = array.length,
	        key = keys[depth++],
	        keyValue,
	        value,
	        valuesByKey = map$1(),
	        values,
	        result = createResult();
	
	    while (++i < n) {
	      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
	        values.push(value);
	      } else {
	        valuesByKey.set(keyValue, [value]);
	      }
	    }
	
	    valuesByKey.each(function(values, key) {
	      setResult(result, key, apply(values, depth, createResult, setResult));
	    });
	
	    return result;
	  }
	
	  function entries(map, depth) {
	    if (++depth > keys.length) return map;
	    var array, sortKey = sortKeys[depth - 1];
	    if (rollup != null && depth >= keys.length) array = map.entries();
	    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
	    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
	  }
	
	  return nest = {
	    object: function(array) { return apply(array, 0, createObject, setObject); },
	    map: function(array) { return apply(array, 0, createMap, setMap); },
	    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
	    key: function(d) { keys.push(d); return nest; },
	    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
	    sortValues: function(order) { sortValues = order; return nest; },
	    rollup: function(f) { rollup = f; return nest; }
	  };
	};
	
	function createObject() {
	  return {};
	}
	
	function setObject(object, key, value) {
	  object[key] = value;
	}
	
	function createMap() {
	  return map$1();
	}
	
	function setMap(map, key, value) {
	  map.set(key, value);
	}
	
	function Set() {}
	
	var proto = map$1.prototype;
	
	Set.prototype = set$2.prototype = {
	  constructor: Set,
	  has: proto.has,
	  add: function(value) {
	    value += "";
	    this[prefix + value] = value;
	    return this;
	  },
	  remove: proto.remove,
	  clear: proto.clear,
	  values: proto.keys,
	  size: proto.size,
	  empty: proto.empty,
	  each: proto.each
	};
	
	function set$2(object, f) {
	  var set = new Set;
	
	  // Copy constructor.
	  if (object instanceof Set) object.each(function(value) { set.add(value); });
	
	  // Otherwise, assume it’s an array.
	  else if (object) {
	    var i = -1, n = object.length;
	    if (f == null) while (++i < n) set.add(object[i]);
	    else while (++i < n) set.add(f(object[i], i, object));
	  }
	
	  return set;
	}
	
	var keys = function(map) {
	  var keys = [];
	  for (var key in map) keys.push(key);
	  return keys;
	};
	
	var values = function(map) {
	  var values = [];
	  for (var key in map) values.push(map[key]);
	  return values;
	};
	
	var entries = function(map) {
	  var entries = [];
	  for (var key in map) entries.push({key: key, value: map[key]});
	  return entries;
	};
	
	function objectConverter(columns) {
	  return new Function("d", "return {" + columns.map(function(name, i) {
	    return JSON.stringify(name) + ": d[" + i + "]";
	  }).join(",") + "}");
	}
	
	function customConverter(columns, f) {
	  var object = objectConverter(columns);
	  return function(row, i) {
	    return f(object(row), i, columns);
	  };
	}
	
	// Compute unique columns in order of discovery.
	function inferColumns(rows) {
	  var columnSet = Object.create(null),
	      columns = [];
	
	  rows.forEach(function(row) {
	    for (var column in row) {
	      if (!(column in columnSet)) {
	        columns.push(columnSet[column] = column);
	      }
	    }
	  });
	
	  return columns;
	}
	
	var dsv = function(delimiter) {
	  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
	      delimiterCode = delimiter.charCodeAt(0);
	
	  function parse(text, f) {
	    var convert, columns, rows = parseRows(text, function(row, i) {
	      if (convert) return convert(row, i - 1);
	      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
	    });
	    rows.columns = columns;
	    return rows;
	  }
	
	  function parseRows(text, f) {
	    var EOL = {}, // sentinel value for end-of-line
	        EOF = {}, // sentinel value for end-of-file
	        rows = [], // output rows
	        N = text.length,
	        I = 0, // current character index
	        n = 0, // the current line number
	        t, // the current token
	        eol; // is the current token followed by EOL?
	
	    function token() {
	      if (I >= N) return EOF; // special case: end of file
	      if (eol) return eol = false, EOL; // special case: end of line
	
	      // special case: quotes
	      var j = I, c;
	      if (text.charCodeAt(j) === 34) {
	        var i = j;
	        while (i++ < N) {
	          if (text.charCodeAt(i) === 34) {
	            if (text.charCodeAt(i + 1) !== 34) break;
	            ++i;
	          }
	        }
	        I = i + 2;
	        c = text.charCodeAt(i + 1);
	        if (c === 13) {
	          eol = true;
	          if (text.charCodeAt(i + 2) === 10) ++I;
	        } else if (c === 10) {
	          eol = true;
	        }
	        return text.slice(j + 1, i).replace(/""/g, "\"");
	      }
	
	      // common case: find next delimiter or newline
	      while (I < N) {
	        var k = 1;
	        c = text.charCodeAt(I++);
	        if (c === 10) eol = true; // \n
	        else if (c === 13) { eol = true; if (text.charCodeAt(I) === 10) ++I, ++k; } // \r|\r\n
	        else if (c !== delimiterCode) continue;
	        return text.slice(j, I - k);
	      }
	
	      // special case: last token before EOF
	      return text.slice(j);
	    }
	
	    while ((t = token()) !== EOF) {
	      var a = [];
	      while (t !== EOL && t !== EOF) {
	        a.push(t);
	        t = token();
	      }
	      if (f && (a = f(a, n++)) == null) continue;
	      rows.push(a);
	    }
	
	    return rows;
	  }
	
	  function format(rows, columns) {
	    if (columns == null) columns = inferColumns(rows);
	    return [columns.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
	      return columns.map(function(column) {
	        return formatValue(row[column]);
	      }).join(delimiter);
	    })).join("\n");
	  }
	
	  function formatRows(rows) {
	    return rows.map(formatRow).join("\n");
	  }
	
	  function formatRow(row) {
	    return row.map(formatValue).join(delimiter);
	  }
	
	  function formatValue(text) {
	    return text == null ? ""
	        : reFormat.test(text += "") ? "\"" + text.replace(/\"/g, "\"\"") + "\""
	        : text;
	  }
	
	  return {
	    parse: parse,
	    parseRows: parseRows,
	    format: format,
	    formatRows: formatRows
	  };
	};
	
	var csv = dsv(",");
	
	var csvParse = csv.parse;
	var csvParseRows = csv.parseRows;
	var csvFormat = csv.format;
	var csvFormatRows = csv.formatRows;
	
	var tsv = dsv("\t");
	
	var tsvParse = tsv.parse;
	var tsvParseRows = tsv.parseRows;
	var tsvFormat = tsv.format;
	var tsvFormatRows = tsv.formatRows;
	
	var center$1 = function(x, y) {
	  var nodes;
	
	  if (x == null) x = 0;
	  if (y == null) y = 0;
	
	  function force() {
	    var i,
	        n = nodes.length,
	        node,
	        sx = 0,
	        sy = 0;
	
	    for (i = 0; i < n; ++i) {
	      node = nodes[i], sx += node.x, sy += node.y;
	    }
	
	    for (sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i) {
	      node = nodes[i], node.x -= sx, node.y -= sy;
	    }
	  }
	
	  force.initialize = function(_) {
	    nodes = _;
	  };
	
	  force.x = function(_) {
	    return arguments.length ? (x = +_, force) : x;
	  };
	
	  force.y = function(_) {
	    return arguments.length ? (y = +_, force) : y;
	  };
	
	  return force;
	};
	
	var constant$6 = function(x) {
	  return function() {
	    return x;
	  };
	};
	
	var jiggle = function() {
	  return (Math.random() - 0.5) * 1e-6;
	};
	
	var tree_add = function(d) {
	  var x = +this._x.call(null, d),
	      y = +this._y.call(null, d);
	  return add(this.cover(x, y), x, y, d);
	};
	
	function add(tree, x, y, d) {
	  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points
	
	  var parent,
	      node = tree._root,
	      leaf = {data: d},
	      x0 = tree._x0,
	      y0 = tree._y0,
	      x1 = tree._x1,
	      y1 = tree._y1,
	      xm,
	      ym,
	      xp,
	      yp,
	      right,
	      bottom,
	      i,
	      j;
	
	  // If the tree is empty, initialize the root as a leaf.
	  if (!node) return tree._root = leaf, tree;
	
	  // Find the existing leaf for the new point, or add it.
	  while (node.length) {
	    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
	    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
	    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
	  }
	
	  // Is the new point is exactly coincident with the existing point?
	  xp = +tree._x.call(null, node.data);
	  yp = +tree._y.call(null, node.data);
	  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
	
	  // Otherwise, split the leaf node until the old and new point are separated.
	  do {
	    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
	    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
	    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
	  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
	  return parent[j] = node, parent[i] = leaf, tree;
	}
	
	function addAll(data) {
	  var d, i, n = data.length,
	      x,
	      y,
	      xz = new Array(n),
	      yz = new Array(n),
	      x0 = Infinity,
	      y0 = Infinity,
	      x1 = -Infinity,
	      y1 = -Infinity;
	
	  // Compute the points and their extent.
	  for (i = 0; i < n; ++i) {
	    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
	    xz[i] = x;
	    yz[i] = y;
	    if (x < x0) x0 = x;
	    if (x > x1) x1 = x;
	    if (y < y0) y0 = y;
	    if (y > y1) y1 = y;
	  }
	
	  // If there were no (valid) points, inherit the existing extent.
	  if (x1 < x0) x0 = this._x0, x1 = this._x1;
	  if (y1 < y0) y0 = this._y0, y1 = this._y1;
	
	  // Expand the tree to cover the new points.
	  this.cover(x0, y0).cover(x1, y1);
	
	  // Add the new points.
	  for (i = 0; i < n; ++i) {
	    add(this, xz[i], yz[i], data[i]);
	  }
	
	  return this;
	}
	
	var tree_cover = function(x, y) {
	  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points
	
	  var x0 = this._x0,
	      y0 = this._y0,
	      x1 = this._x1,
	      y1 = this._y1;
	
	  // If the quadtree has no extent, initialize them.
	  // Integer extent are necessary so that if we later double the extent,
	  // the existing quadrant boundaries don’t change due to floating point error!
	  if (isNaN(x0)) {
	    x1 = (x0 = Math.floor(x)) + 1;
	    y1 = (y0 = Math.floor(y)) + 1;
	  }
	
	  // Otherwise, double repeatedly to cover.
	  else if (x0 > x || x > x1 || y0 > y || y > y1) {
	    var z = x1 - x0,
	        node = this._root,
	        parent,
	        i;
	
	    switch (i = (y < (y0 + y1) / 2) << 1 | (x < (x0 + x1) / 2)) {
	      case 0: {
	        do parent = new Array(4), parent[i] = node, node = parent;
	        while (z *= 2, x1 = x0 + z, y1 = y0 + z, x > x1 || y > y1);
	        break;
	      }
	      case 1: {
	        do parent = new Array(4), parent[i] = node, node = parent;
	        while (z *= 2, x0 = x1 - z, y1 = y0 + z, x0 > x || y > y1);
	        break;
	      }
	      case 2: {
	        do parent = new Array(4), parent[i] = node, node = parent;
	        while (z *= 2, x1 = x0 + z, y0 = y1 - z, x > x1 || y0 > y);
	        break;
	      }
	      case 3: {
	        do parent = new Array(4), parent[i] = node, node = parent;
	        while (z *= 2, x0 = x1 - z, y0 = y1 - z, x0 > x || y0 > y);
	        break;
	      }
	    }
	
	    if (this._root && this._root.length) this._root = node;
	  }
	
	  // If the quadtree covers the point already, just return.
	  else return this;
	
	  this._x0 = x0;
	  this._y0 = y0;
	  this._x1 = x1;
	  this._y1 = y1;
	  return this;
	};
	
	var tree_data = function() {
	  var data = [];
	  this.visit(function(node) {
	    if (!node.length) do data.push(node.data); while (node = node.next)
	  });
	  return data;
	};
	
	var tree_extent = function(_) {
	  return arguments.length
	      ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
	      : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
	};
	
	var Quad = function(node, x0, y0, x1, y1) {
	  this.node = node;
	  this.x0 = x0;
	  this.y0 = y0;
	  this.x1 = x1;
	  this.y1 = y1;
	};
	
	var tree_find = function(x, y, radius) {
	  var data,
	      x0 = this._x0,
	      y0 = this._y0,
	      x1,
	      y1,
	      x2,
	      y2,
	      x3 = this._x1,
	      y3 = this._y1,
	      quads = [],
	      node = this._root,
	      q,
	      i;
	
	  if (node) quads.push(new Quad(node, x0, y0, x3, y3));
	  if (radius == null) radius = Infinity;
	  else {
	    x0 = x - radius, y0 = y - radius;
	    x3 = x + radius, y3 = y + radius;
	    radius *= radius;
	  }
	
	  while (q = quads.pop()) {
	
	    // Stop searching if this quadrant can’t contain a closer node.
	    if (!(node = q.node)
	        || (x1 = q.x0) > x3
	        || (y1 = q.y0) > y3
	        || (x2 = q.x1) < x0
	        || (y2 = q.y1) < y0) continue;
	
	    // Bisect the current quadrant.
	    if (node.length) {
	      var xm = (x1 + x2) / 2,
	          ym = (y1 + y2) / 2;
	
	      quads.push(
	        new Quad(node[3], xm, ym, x2, y2),
	        new Quad(node[2], x1, ym, xm, y2),
	        new Quad(node[1], xm, y1, x2, ym),
	        new Quad(node[0], x1, y1, xm, ym)
	      );
	
	      // Visit the closest quadrant first.
	      if (i = (y >= ym) << 1 | (x >= xm)) {
	        q = quads[quads.length - 1];
	        quads[quads.length - 1] = quads[quads.length - 1 - i];
	        quads[quads.length - 1 - i] = q;
	      }
	    }
	
	    // Visit this point. (Visiting coincident points isn’t necessary!)
	    else {
	      var dx = x - +this._x.call(null, node.data),
	          dy = y - +this._y.call(null, node.data),
	          d2 = dx * dx + dy * dy;
	      if (d2 < radius) {
	        var d = Math.sqrt(radius = d2);
	        x0 = x - d, y0 = y - d;
	        x3 = x + d, y3 = y + d;
	        data = node.data;
	      }
	    }
	  }
	
	  return data;
	};
	
	var tree_remove = function(d) {
	  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points
	
	  var parent,
	      node = this._root,
	      retainer,
	      previous,
	      next,
	      x0 = this._x0,
	      y0 = this._y0,
	      x1 = this._x1,
	      y1 = this._y1,
	      x,
	      y,
	      xm,
	      ym,
	      right,
	      bottom,
	      i,
	      j;
	
	  // If the tree is empty, initialize the root as a leaf.
	  if (!node) return this;
	
	  // Find the leaf node for the point.
	  // While descending, also retain the deepest parent with a non-removed sibling.
	  if (node.length) while (true) {
	    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
	    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
	    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
	    if (!node.length) break;
	    if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
	  }
	
	  // Find the point to remove.
	  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
	  if (next = node.next) delete node.next;
	
	  // If there are multiple coincident points, remove just the point.
	  if (previous) return (next ? previous.next = next : delete previous.next), this;
	
	  // If this is the root point, remove it.
	  if (!parent) return this._root = next, this;
	
	  // Remove this leaf.
	  next ? parent[i] = next : delete parent[i];
	
	  // If the parent now contains exactly one leaf, collapse superfluous parents.
	  if ((node = parent[0] || parent[1] || parent[2] || parent[3])
	      && node === (parent[3] || parent[2] || parent[1] || parent[0])
	      && !node.length) {
	    if (retainer) retainer[j] = node;
	    else this._root = node;
	  }
	
	  return this;
	};
	
	function removeAll(data) {
	  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
	  return this;
	}
	
	var tree_root = function() {
	  return this._root;
	};
	
	var tree_size = function() {
	  var size = 0;
	  this.visit(function(node) {
	    if (!node.length) do ++size; while (node = node.next)
	  });
	  return size;
	};
	
	var tree_visit = function(callback) {
	  var quads = [], q, node = this._root, child, x0, y0, x1, y1;
	  if (node) quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
	  while (q = quads.pop()) {
	    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
	      var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
	      if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
	      if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
	      if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
	      if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
	    }
	  }
	  return this;
	};
	
	var tree_visitAfter = function(callback) {
	  var quads = [], next = [], q;
	  if (this._root) quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
	  while (q = quads.pop()) {
	    var node = q.node;
	    if (node.length) {
	      var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
	      if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
	      if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
	      if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
	      if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
	    }
	    next.push(q);
	  }
	  while (q = next.pop()) {
	    callback(q.node, q.x0, q.y0, q.x1, q.y1);
	  }
	  return this;
	};
	
	function defaultX(d) {
	  return d[0];
	}
	
	var tree_x = function(_) {
	  return arguments.length ? (this._x = _, this) : this._x;
	};
	
	function defaultY(d) {
	  return d[1];
	}
	
	var tree_y = function(_) {
	  return arguments.length ? (this._y = _, this) : this._y;
	};
	
	function quadtree(nodes, x, y) {
	  var tree = new Quadtree(x == null ? defaultX : x, y == null ? defaultY : y, NaN, NaN, NaN, NaN);
	  return nodes == null ? tree : tree.addAll(nodes);
	}
	
	function Quadtree(x, y, x0, y0, x1, y1) {
	  this._x = x;
	  this._y = y;
	  this._x0 = x0;
	  this._y0 = y0;
	  this._x1 = x1;
	  this._y1 = y1;
	  this._root = undefined;
	}
	
	function leaf_copy(leaf) {
	  var copy = {data: leaf.data}, next = copy;
	  while (leaf = leaf.next) next = next.next = {data: leaf.data};
	  return copy;
	}
	
	var treeProto = quadtree.prototype = Quadtree.prototype;
	
	treeProto.copy = function() {
	  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
	      node = this._root,
	      nodes,
	      child;
	
	  if (!node) return copy;
	
	  if (!node.length) return copy._root = leaf_copy(node), copy;
	
	  nodes = [{source: node, target: copy._root = new Array(4)}];
	  while (node = nodes.pop()) {
	    for (var i = 0; i < 4; ++i) {
	      if (child = node.source[i]) {
	        if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
	        else node.target[i] = leaf_copy(child);
	      }
	    }
	  }
	
	  return copy;
	};
	
	treeProto.add = tree_add;
	treeProto.addAll = addAll;
	treeProto.cover = tree_cover;
	treeProto.data = tree_data;
	treeProto.extent = tree_extent;
	treeProto.find = tree_find;
	treeProto.remove = tree_remove;
	treeProto.removeAll = removeAll;
	treeProto.root = tree_root;
	treeProto.size = tree_size;
	treeProto.visit = tree_visit;
	treeProto.visitAfter = tree_visitAfter;
	treeProto.x = tree_x;
	treeProto.y = tree_y;
	
	function x(d) {
	  return d.x + d.vx;
	}
	
	function y(d) {
	  return d.y + d.vy;
	}
	
	var collide = function(radius) {
	  var nodes,
	      radii,
	      strength = 1,
	      iterations = 1;
	
	  if (typeof radius !== "function") radius = constant$6(radius == null ? 1 : +radius);
	
	  function force() {
	    var i, n = nodes.length,
	        tree,
	        node,
	        xi,
	        yi,
	        ri,
	        ri2;
	
	    for (var k = 0; k < iterations; ++k) {
	      tree = quadtree(nodes, x, y).visitAfter(prepare);
	      for (i = 0; i < n; ++i) {
	        node = nodes[i];
	        ri = radii[node.index], ri2 = ri * ri;
	        xi = node.x + node.vx;
	        yi = node.y + node.vy;
	        tree.visit(apply);
	      }
	    }
	
	    function apply(quad, x0, y0, x1, y1) {
	      var data = quad.data, rj = quad.r, r = ri + rj;
	      if (data) {
	        if (data.index > node.index) {
	          var x = xi - data.x - data.vx,
	              y = yi - data.y - data.vy,
	              l = x * x + y * y;
	          if (l < r * r) {
	            if (x === 0) x = jiggle(), l += x * x;
	            if (y === 0) y = jiggle(), l += y * y;
	            l = (r - (l = Math.sqrt(l))) / l * strength;
	            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
	            node.vy += (y *= l) * r;
	            data.vx -= x * (r = 1 - r);
	            data.vy -= y * r;
	          }
	        }
	        return;
	      }
	      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
	    }
	  }
	
	  function prepare(quad) {
	    if (quad.data) return quad.r = radii[quad.data.index];
	    for (var i = quad.r = 0; i < 4; ++i) {
	      if (quad[i] && quad[i].r > quad.r) {
	        quad.r = quad[i].r;
	      }
	    }
	  }
	
	  function initialize() {
	    if (!nodes) return;
	    var i, n = nodes.length, node;
	    radii = new Array(n);
	    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
	  }
	
	  force.initialize = function(_) {
	    nodes = _;
	    initialize();
	  };
	
	  force.iterations = function(_) {
	    return arguments.length ? (iterations = +_, force) : iterations;
	  };
	
	  force.strength = function(_) {
	    return arguments.length ? (strength = +_, force) : strength;
	  };
	
	  force.radius = function(_) {
	    return arguments.length ? (radius = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : radius;
	  };
	
	  return force;
	};
	
	function index(d) {
	  return d.index;
	}
	
	function find(nodeById, nodeId) {
	  var node = nodeById.get(nodeId);
	  if (!node) throw new Error("missing: " + nodeId);
	  return node;
	}
	
	var link = function(links) {
	  var id = index,
	      strength = defaultStrength,
	      strengths,
	      distance = constant$6(30),
	      distances,
	      nodes,
	      count,
	      bias,
	      iterations = 1;
	
	  if (links == null) links = [];
	
	  function defaultStrength(link) {
	    return 1 / Math.min(count[link.source.index], count[link.target.index]);
	  }
	
	  function force(alpha) {
	    for (var k = 0, n = links.length; k < iterations; ++k) {
	      for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
	        link = links[i], source = link.source, target = link.target;
	        x = target.x + target.vx - source.x - source.vx || jiggle();
	        y = target.y + target.vy - source.y - source.vy || jiggle();
	        l = Math.sqrt(x * x + y * y);
	        l = (l - distances[i]) / l * alpha * strengths[i];
	        x *= l, y *= l;
	        target.vx -= x * (b = bias[i]);
	        target.vy -= y * b;
	        source.vx += x * (b = 1 - b);
	        source.vy += y * b;
	      }
	    }
	  }
	
	  function initialize() {
	    if (!nodes) return;
	
	    var i,
	        n = nodes.length,
	        m = links.length,
	        nodeById = map$1(nodes, id),
	        link;
	
	    for (i = 0, count = new Array(n); i < m; ++i) {
	      link = links[i], link.index = i;
	      if (typeof link.source !== "object") link.source = find(nodeById, link.source);
	      if (typeof link.target !== "object") link.target = find(nodeById, link.target);
	      count[link.source.index] = (count[link.source.index] || 0) + 1;
	      count[link.target.index] = (count[link.target.index] || 0) + 1;
	    }
	
	    for (i = 0, bias = new Array(m); i < m; ++i) {
	      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
	    }
	
	    strengths = new Array(m), initializeStrength();
	    distances = new Array(m), initializeDistance();
	  }
	
	  function initializeStrength() {
	    if (!nodes) return;
	
	    for (var i = 0, n = links.length; i < n; ++i) {
	      strengths[i] = +strength(links[i], i, links);
	    }
	  }
	
	  function initializeDistance() {
	    if (!nodes) return;
	
	    for (var i = 0, n = links.length; i < n; ++i) {
	      distances[i] = +distance(links[i], i, links);
	    }
	  }
	
	  force.initialize = function(_) {
	    nodes = _;
	    initialize();
	  };
	
	  force.links = function(_) {
	    return arguments.length ? (links = _, initialize(), force) : links;
	  };
	
	  force.id = function(_) {
	    return arguments.length ? (id = _, force) : id;
	  };
	
	  force.iterations = function(_) {
	    return arguments.length ? (iterations = +_, force) : iterations;
	  };
	
	  force.strength = function(_) {
	    return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initializeStrength(), force) : strength;
	  };
	
	  force.distance = function(_) {
	    return arguments.length ? (distance = typeof _ === "function" ? _ : constant$6(+_), initializeDistance(), force) : distance;
	  };
	
	  return force;
	};
	
	function x$1(d) {
	  return d.x;
	}
	
	function y$1(d) {
	  return d.y;
	}
	
	var initialRadius = 10;
	var initialAngle = Math.PI * (3 - Math.sqrt(5));
	
	var simulation = function(nodes) {
	  var simulation,
	      alpha = 1,
	      alphaMin = 0.001,
	      alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
	      alphaTarget = 0,
	      velocityDecay = 0.6,
	      forces = map$1(),
	      stepper = timer(step),
	      event = dispatch("tick", "end");
	
	  if (nodes == null) nodes = [];
	
	  function step() {
	    tick();
	    event.call("tick", simulation);
	    if (alpha < alphaMin) {
	      stepper.stop();
	      event.call("end", simulation);
	    }
	  }
	
	  function tick() {
	    var i, n = nodes.length, node;
	
	    alpha += (alphaTarget - alpha) * alphaDecay;
	
	    forces.each(function(force) {
	      force(alpha);
	    });
	
	    for (i = 0; i < n; ++i) {
	      node = nodes[i];
	      if (node.fx == null) node.x += node.vx *= velocityDecay;
	      else node.x = node.fx, node.vx = 0;
	      if (node.fy == null) node.y += node.vy *= velocityDecay;
	      else node.y = node.fy, node.vy = 0;
	    }
	  }
	
	  function initializeNodes() {
	    for (var i = 0, n = nodes.length, node; i < n; ++i) {
	      node = nodes[i], node.index = i;
	      if (isNaN(node.x) || isNaN(node.y)) {
	        var radius = initialRadius * Math.sqrt(i), angle = i * initialAngle;
	        node.x = radius * Math.cos(angle);
	        node.y = radius * Math.sin(angle);
	      }
	      if (isNaN(node.vx) || isNaN(node.vy)) {
	        node.vx = node.vy = 0;
	      }
	    }
	  }
	
	  function initializeForce(force) {
	    if (force.initialize) force.initialize(nodes);
	    return force;
	  }
	
	  initializeNodes();
	
	  return simulation = {
	    tick: tick,
	
	    restart: function() {
	      return stepper.restart(step), simulation;
	    },
	
	    stop: function() {
	      return stepper.stop(), simulation;
	    },
	
	    nodes: function(_) {
	      return arguments.length ? (nodes = _, initializeNodes(), forces.each(initializeForce), simulation) : nodes;
	    },
	
	    alpha: function(_) {
	      return arguments.length ? (alpha = +_, simulation) : alpha;
	    },
	
	    alphaMin: function(_) {
	      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
	    },
	
	    alphaDecay: function(_) {
	      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
	    },
	
	    alphaTarget: function(_) {
	      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
	    },
	
	    velocityDecay: function(_) {
	      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
	    },
	
	    force: function(name, _) {
	      return arguments.length > 1 ? ((_ == null ? forces.remove(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
	    },
	
	    find: function(x, y, radius) {
	      var i = 0,
	          n = nodes.length,
	          dx,
	          dy,
	          d2,
	          node,
	          closest;
	
	      if (radius == null) radius = Infinity;
	      else radius *= radius;
	
	      for (i = 0; i < n; ++i) {
	        node = nodes[i];
	        dx = x - node.x;
	        dy = y - node.y;
	        d2 = dx * dx + dy * dy;
	        if (d2 < radius) closest = node, radius = d2;
	      }
	
	      return closest;
	    },
	
	    on: function(name, _) {
	      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
	    }
	  };
	};
	
	var manyBody = function() {
	  var nodes,
	      node,
	      alpha,
	      strength = constant$6(-30),
	      strengths,
	      distanceMin2 = 1,
	      distanceMax2 = Infinity,
	      theta2 = 0.81;
	
	  function force(_) {
	    var i, n = nodes.length, tree = quadtree(nodes, x$1, y$1).visitAfter(accumulate);
	    for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
	  }
	
	  function initialize() {
	    if (!nodes) return;
	    var i, n = nodes.length, node;
	    strengths = new Array(n);
	    for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
	  }
	
	  function accumulate(quad) {
	    var strength = 0, q, c, x$$1, y$$1, i;
	
	    // For internal nodes, accumulate forces from child quadrants.
	    if (quad.length) {
	      for (x$$1 = y$$1 = i = 0; i < 4; ++i) {
	        if ((q = quad[i]) && (c = q.value)) {
	          strength += c, x$$1 += c * q.x, y$$1 += c * q.y;
	        }
	      }
	      quad.x = x$$1 / strength;
	      quad.y = y$$1 / strength;
	    }
	
	    // For leaf nodes, accumulate forces from coincident quadrants.
	    else {
	      q = quad;
	      q.x = q.data.x;
	      q.y = q.data.y;
	      do strength += strengths[q.data.index];
	      while (q = q.next);
	    }
	
	    quad.value = strength;
	  }
	
	  function apply(quad, x1, _, x2) {
	    if (!quad.value) return true;
	
	    var x$$1 = quad.x - node.x,
	        y$$1 = quad.y - node.y,
	        w = x2 - x1,
	        l = x$$1 * x$$1 + y$$1 * y$$1;
	
	    // Apply the Barnes-Hut approximation if possible.
	    // Limit forces for very close nodes; randomize direction if coincident.
	    if (w * w / theta2 < l) {
	      if (l < distanceMax2) {
	        if (x$$1 === 0) x$$1 = jiggle(), l += x$$1 * x$$1;
	        if (y$$1 === 0) y$$1 = jiggle(), l += y$$1 * y$$1;
	        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
	        node.vx += x$$1 * quad.value * alpha / l;
	        node.vy += y$$1 * quad.value * alpha / l;
	      }
	      return true;
	    }
	
	    // Otherwise, process points directly.
	    else if (quad.length || l >= distanceMax2) return;
	
	    // Limit forces for very close nodes; randomize direction if coincident.
	    if (quad.data !== node || quad.next) {
	      if (x$$1 === 0) x$$1 = jiggle(), l += x$$1 * x$$1;
	      if (y$$1 === 0) y$$1 = jiggle(), l += y$$1 * y$$1;
	      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
	    }
	
	    do if (quad.data !== node) {
	      w = strengths[quad.data.index] * alpha / l;
	      node.vx += x$$1 * w;
	      node.vy += y$$1 * w;
	    } while (quad = quad.next);
	  }
	
	  force.initialize = function(_) {
	    nodes = _;
	    initialize();
	  };
	
	  force.strength = function(_) {
	    return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
	  };
	
	  force.distanceMin = function(_) {
	    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
	  };
	
	  force.distanceMax = function(_) {
	    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
	  };
	
	  force.theta = function(_) {
	    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
	  };
	
	  return force;
	};
	
	var x$2 = function(x) {
	  var strength = constant$6(0.1),
	      nodes,
	      strengths,
	      xz;
	
	  if (typeof x !== "function") x = constant$6(x == null ? 0 : +x);
	
	  function force(alpha) {
	    for (var i = 0, n = nodes.length, node; i < n; ++i) {
	      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
	    }
	  }
	
	  function initialize() {
	    if (!nodes) return;
	    var i, n = nodes.length;
	    strengths = new Array(n);
	    xz = new Array(n);
	    for (i = 0; i < n; ++i) {
	      strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
	    }
	  }
	
	  force.initialize = function(_) {
	    nodes = _;
	    initialize();
	  };
	
	  force.strength = function(_) {
	    return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
	  };
	
	  force.x = function(_) {
	    return arguments.length ? (x = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : x;
	  };
	
	  return force;
	};
	
	var y$2 = function(y) {
	  var strength = constant$6(0.1),
	      nodes,
	      strengths,
	      yz;
	
	  if (typeof y !== "function") y = constant$6(y == null ? 0 : +y);
	
	  function force(alpha) {
	    for (var i = 0, n = nodes.length, node; i < n; ++i) {
	      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
	    }
	  }
	
	  function initialize() {
	    if (!nodes) return;
	    var i, n = nodes.length;
	    strengths = new Array(n);
	    yz = new Array(n);
	    for (i = 0; i < n; ++i) {
	      strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
	    }
	  }
	
	  force.initialize = function(_) {
	    nodes = _;
	    initialize();
	  };
	
	  force.strength = function(_) {
	    return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
	  };
	
	  force.y = function(_) {
	    return arguments.length ? (y = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : y;
	  };
	
	  return force;
	};
	
	// Computes the decimal coefficient and exponent of the specified number x with
	// significant digits p, where x is positive and p is in [1, 21] or undefined.
	// For example, formatDecimal(1.23) returns ["123", 0].
	var formatDecimal = function(x, p) {
	  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
	  var i, coefficient = x.slice(0, i);
	
	  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
	  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
	  return [
	    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
	    +x.slice(i + 1)
	  ];
	};
	
	var exponent$1 = function(x) {
	  return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
	};
	
	var formatGroup = function(grouping, thousands) {
	  return function(value, width) {
	    var i = value.length,
	        t = [],
	        j = 0,
	        g = grouping[0],
	        length = 0;
	
	    while (i > 0 && g > 0) {
	      if (length + g + 1 > width) g = Math.max(1, width - length);
	      t.push(value.substring(i -= g, i + g));
	      if ((length += g + 1) > width) break;
	      g = grouping[j = (j + 1) % grouping.length];
	    }
	
	    return t.reverse().join(thousands);
	  };
	};
	
	var formatNumerals = function(numerals) {
	  return function(value) {
	    return value.replace(/[0-9]/g, function(i) {
	      return numerals[+i];
	    });
	  };
	};
	
	var formatDefault = function(x, p) {
	  x = x.toPrecision(p);
	
	  out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
	    switch (x[i]) {
	      case ".": i0 = i1 = i; break;
	      case "0": if (i0 === 0) i0 = i; i1 = i; break;
	      case "e": break out;
	      default: if (i0 > 0) i0 = 0; break;
	    }
	  }
	
	  return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
	};
	
	var prefixExponent;
	
	var formatPrefixAuto = function(x, p) {
	  var d = formatDecimal(x, p);
	  if (!d) return x + "";
	  var coefficient = d[0],
	      exponent = d[1],
	      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
	      n = coefficient.length;
	  return i === n ? coefficient
	      : i > n ? coefficient + new Array(i - n + 1).join("0")
	      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
	      : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
	};
	
	var formatRounded = function(x, p) {
	  var d = formatDecimal(x, p);
	  if (!d) return x + "";
	  var coefficient = d[0],
	      exponent = d[1];
	  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
	      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
	      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
	};
	
	var formatTypes = {
	  "": formatDefault,
	  "%": function(x, p) { return (x * 100).toFixed(p); },
	  "b": function(x) { return Math.round(x).toString(2); },
	  "c": function(x) { return x + ""; },
	  "d": function(x) { return Math.round(x).toString(10); },
	  "e": function(x, p) { return x.toExponential(p); },
	  "f": function(x, p) { return x.toFixed(p); },
	  "g": function(x, p) { return x.toPrecision(p); },
	  "o": function(x) { return Math.round(x).toString(8); },
	  "p": function(x, p) { return formatRounded(x * 100, p); },
	  "r": formatRounded,
	  "s": formatPrefixAuto,
	  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
	  "x": function(x) { return Math.round(x).toString(16); }
	};
	
	// [[fill]align][sign][symbol][0][width][,][.precision][type]
	var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
	
	function formatSpecifier(specifier) {
	  return new FormatSpecifier(specifier);
	}
	
	formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof
	
	function FormatSpecifier(specifier) {
	  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
	
	  var match,
	      fill = match[1] || " ",
	      align = match[2] || ">",
	      sign = match[3] || "-",
	      symbol = match[4] || "",
	      zero = !!match[5],
	      width = match[6] && +match[6],
	      comma = !!match[7],
	      precision = match[8] && +match[8].slice(1),
	      type = match[9] || "";
	
	  // The "n" type is an alias for ",g".
	  if (type === "n") comma = true, type = "g";
	
	  // Map invalid types to the default format.
	  else if (!formatTypes[type]) type = "";
	
	  // If zero fill is specified, padding goes after sign and before digits.
	  if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";
	
	  this.fill = fill;
	  this.align = align;
	  this.sign = sign;
	  this.symbol = symbol;
	  this.zero = zero;
	  this.width = width;
	  this.comma = comma;
	  this.precision = precision;
	  this.type = type;
	}
	
	FormatSpecifier.prototype.toString = function() {
	  return this.fill
	      + this.align
	      + this.sign
	      + this.symbol
	      + (this.zero ? "0" : "")
	      + (this.width == null ? "" : Math.max(1, this.width | 0))
	      + (this.comma ? "," : "")
	      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
	      + this.type;
	};
	
	var identity$3 = function(x) {
	  return x;
	};
	
	var prefixes = ["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];
	
	var formatLocale = function(locale) {
	  var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity$3,
	      currency = locale.currency,
	      decimal = locale.decimal,
	      numerals = locale.numerals ? formatNumerals(locale.numerals) : identity$3,
	      percent = locale.percent || "%";
	
	  function newFormat(specifier) {
	    specifier = formatSpecifier(specifier);
	
	    var fill = specifier.fill,
	        align = specifier.align,
	        sign = specifier.sign,
	        symbol = specifier.symbol,
	        zero = specifier.zero,
	        width = specifier.width,
	        comma = specifier.comma,
	        precision = specifier.precision,
	        type = specifier.type;
	
	    // Compute the prefix and suffix.
	    // For SI-prefix, the suffix is lazily computed.
	    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
	        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";
	
	    // What format function should we use?
	    // Is this an integer type?
	    // Can this type generate exponential notation?
	    var formatType = formatTypes[type],
	        maybeSuffix = !type || /[defgprs%]/.test(type);
	
	    // Set the default precision if not specified,
	    // or clamp the specified precision to the supported range.
	    // For significant precision, it must be in [1, 21].
	    // For fixed precision, it must be in [0, 20].
	    precision = precision == null ? (type ? 6 : 12)
	        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
	        : Math.max(0, Math.min(20, precision));
	
	    function format(value) {
	      var valuePrefix = prefix,
	          valueSuffix = suffix,
	          i, n, c;
	
	      if (type === "c") {
	        valueSuffix = formatType(value) + valueSuffix;
	        value = "";
	      } else {
	        value = +value;
	
	        // Perform the initial formatting.
	        var valueNegative = value < 0;
	        value = formatType(Math.abs(value), precision);
	
	        // If a negative value rounds to zero during formatting, treat as positive.
	        if (valueNegative && +value === 0) valueNegative = false;
	
	        // Compute the prefix and suffix.
	        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
	        valueSuffix = valueSuffix + (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + (valueNegative && sign === "(" ? ")" : "");
	
	        // Break the formatted value into the integer “value” part that can be
	        // grouped, and fractional or exponential “suffix” part that is not.
	        if (maybeSuffix) {
	          i = -1, n = value.length;
	          while (++i < n) {
	            if (c = value.charCodeAt(i), 48 > c || c > 57) {
	              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
	              value = value.slice(0, i);
	              break;
	            }
	          }
	        }
	      }
	
	      // If the fill character is not "0", grouping is applied before padding.
	      if (comma && !zero) value = group(value, Infinity);
	
	      // Compute the padding.
	      var length = valuePrefix.length + value.length + valueSuffix.length,
	          padding = length < width ? new Array(width - length + 1).join(fill) : "";
	
	      // If the fill character is "0", grouping is applied after padding.
	      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
	
	      // Reconstruct the final output based on the desired alignment.
	      switch (align) {
	        case "<": value = valuePrefix + value + valueSuffix + padding; break;
	        case "=": value = valuePrefix + padding + value + valueSuffix; break;
	        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
	        default: value = padding + valuePrefix + value + valueSuffix; break;
	      }
	
	      return numerals(value);
	    }
	
	    format.toString = function() {
	      return specifier + "";
	    };
	
	    return format;
	  }
	
	  function formatPrefix(specifier, value) {
	    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
	        e = Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))) * 3,
	        k = Math.pow(10, -e),
	        prefix = prefixes[8 + e / 3];
	    return function(value) {
	      return f(k * value) + prefix;
	    };
	  }
	
	  return {
	    format: newFormat,
	    formatPrefix: formatPrefix
	  };
	};
	
	var locale$1;
	
	
	
	defaultLocale({
	  decimal: ".",
	  thousands: ",",
	  grouping: [3],
	  currency: ["$", ""]
	});
	
	function defaultLocale(definition) {
	  locale$1 = formatLocale(definition);
	  exports.format = locale$1.format;
	  exports.formatPrefix = locale$1.formatPrefix;
	  return locale$1;
	}
	
	var precisionFixed = function(step) {
	  return Math.max(0, -exponent$1(Math.abs(step)));
	};
	
	var precisionPrefix = function(step, value) {
	  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))) * 3 - exponent$1(Math.abs(step)));
	};
	
	var precisionRound = function(step, max) {
	  step = Math.abs(step), max = Math.abs(max) - step;
	  return Math.max(0, exponent$1(max) - exponent$1(step)) + 1;
	};
	
	// Adds floating point numbers with twice the normal precision.
	// Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
	// Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
	// 305–363 (1997).
	// Code adapted from GeographicLib by Charles F. F. Karney,
	// http://geographiclib.sourceforge.net/
	
	var adder = function() {
	  return new Adder;
	};
	
	function Adder() {
	  this.reset();
	}
	
	Adder.prototype = {
	  constructor: Adder,
	  reset: function() {
	    this.s = // rounded value
	    this.t = 0; // exact error
	  },
	  add: function(y) {
	    add$1(temp, y, this.t);
	    add$1(this, temp.s, this.s);
	    if (this.s) this.t += temp.t;
	    else this.s = temp.t;
	  },
	  valueOf: function() {
	    return this.s;
	  }
	};
	
	var temp = new Adder;
	
	function add$1(adder, a, b) {
	  var x = adder.s = a + b,
	      bv = x - a,
	      av = x - bv;
	  adder.t = (a - av) + (b - bv);
	}
	
	var epsilon$2 = 1e-6;
	var epsilon2$1 = 1e-12;
	var pi$3 = Math.PI;
	var halfPi$2 = pi$3 / 2;
	var quarterPi = pi$3 / 4;
	var tau$3 = pi$3 * 2;
	
	var degrees$1 = 180 / pi$3;
	var radians = pi$3 / 180;
	
	var abs = Math.abs;
	var atan = Math.atan;
	var atan2 = Math.atan2;
	var cos$1 = Math.cos;
	var ceil = Math.ceil;
	var exp = Math.exp;
	
	var log = Math.log;
	var pow = Math.pow;
	var sin$1 = Math.sin;
	var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
	var sqrt = Math.sqrt;
	var tan = Math.tan;
	
	function acos(x) {
	  return x > 1 ? 0 : x < -1 ? pi$3 : Math.acos(x);
	}
	
	function asin(x) {
	  return x > 1 ? halfPi$2 : x < -1 ? -halfPi$2 : Math.asin(x);
	}
	
	function haversin(x) {
	  return (x = sin$1(x / 2)) * x;
	}
	
	function noop$1() {}
	
	function streamGeometry(geometry, stream) {
	  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
	    streamGeometryType[geometry.type](geometry, stream);
	  }
	}
	
	var streamObjectType = {
	  Feature: function(object, stream) {
	    streamGeometry(object.geometry, stream);
	  },
	  FeatureCollection: function(object, stream) {
	    var features = object.features, i = -1, n = features.length;
	    while (++i < n) streamGeometry(features[i].geometry, stream);
	  }
	};
	
	var streamGeometryType = {
	  Sphere: function(object, stream) {
	    stream.sphere();
	  },
	  Point: function(object, stream) {
	    object = object.coordinates;
	    stream.point(object[0], object[1], object[2]);
	  },
	  MultiPoint: function(object, stream) {
	    var coordinates = object.coordinates, i = -1, n = coordinates.length;
	    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
	  },
	  LineString: function(object, stream) {
	    streamLine(object.coordinates, stream, 0);
	  },
	  MultiLineString: function(object, stream) {
	    var coordinates = object.coordinates, i = -1, n = coordinates.length;
	    while (++i < n) streamLine(coordinates[i], stream, 0);
	  },
	  Polygon: function(object, stream) {
	    streamPolygon(object.coordinates, stream);
	  },
	  MultiPolygon: function(object, stream) {
	    var coordinates = object.coordinates, i = -1, n = coordinates.length;
	    while (++i < n) streamPolygon(coordinates[i], stream);
	  },
	  GeometryCollection: function(object, stream) {
	    var geometries = object.geometries, i = -1, n = geometries.length;
	    while (++i < n) streamGeometry(geometries[i], stream);
	  }
	};
	
	function streamLine(coordinates, stream, closed) {
	  var i = -1, n = coordinates.length - closed, coordinate;
	  stream.lineStart();
	  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
	  stream.lineEnd();
	}
	
	function streamPolygon(coordinates, stream) {
	  var i = -1, n = coordinates.length;
	  stream.polygonStart();
	  while (++i < n) streamLine(coordinates[i], stream, 1);
	  stream.polygonEnd();
	}
	
	var geoStream = function(object, stream) {
	  if (object && streamObjectType.hasOwnProperty(object.type)) {
	    streamObjectType[object.type](object, stream);
	  } else {
	    streamGeometry(object, stream);
	  }
	};
	
	var areaRingSum = adder();
	
	var areaSum = adder();
	var lambda00;
	var phi00;
	var lambda0;
	var cosPhi0;
	var sinPhi0;
	
	var areaStream = {
	  point: noop$1,
	  lineStart: noop$1,
	  lineEnd: noop$1,
	  polygonStart: function() {
	    areaRingSum.reset();
	    areaStream.lineStart = areaRingStart;
	    areaStream.lineEnd = areaRingEnd;
	  },
	  polygonEnd: function() {
	    var areaRing = +areaRingSum;
	    areaSum.add(areaRing < 0 ? tau$3 + areaRing : areaRing);
	    this.lineStart = this.lineEnd = this.point = noop$1;
	  },
	  sphere: function() {
	    areaSum.add(tau$3);
	  }
	};
	
	function areaRingStart() {
	  areaStream.point = areaPointFirst;
	}
	
	function areaRingEnd() {
	  areaPoint(lambda00, phi00);
	}
	
	function areaPointFirst(lambda, phi) {
	  areaStream.point = areaPoint;
	  lambda00 = lambda, phi00 = phi;
	  lambda *= radians, phi *= radians;
	  lambda0 = lambda, cosPhi0 = cos$1(phi = phi / 2 + quarterPi), sinPhi0 = sin$1(phi);
	}
	
	function areaPoint(lambda, phi) {
	  lambda *= radians, phi *= radians;
	  phi = phi / 2 + quarterPi; // half the angular distance from south pole
	
	  // Spherical excess E for a spherical triangle with vertices: south pole,
	  // previous point, current point.  Uses a formula derived from Cagnoli’s
	  // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
	  var dLambda = lambda - lambda0,
	      sdLambda = dLambda >= 0 ? 1 : -1,
	      adLambda = sdLambda * dLambda,
	      cosPhi = cos$1(phi),
	      sinPhi = sin$1(phi),
	      k = sinPhi0 * sinPhi,
	      u = cosPhi0 * cosPhi + k * cos$1(adLambda),
	      v = k * sdLambda * sin$1(adLambda);
	  areaRingSum.add(atan2(v, u));
	
	  // Advance the previous points.
	  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
	}
	
	var area = function(object) {
	  areaSum.reset();
	  geoStream(object, areaStream);
	  return areaSum * 2;
	};
	
	function spherical(cartesian) {
	  return [atan2(cartesian[1], cartesian[0]), asin(cartesian[2])];
	}
	
	function cartesian(spherical) {
	  var lambda = spherical[0], phi = spherical[1], cosPhi = cos$1(phi);
	  return [cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi)];
	}
	
	function cartesianDot(a, b) {
	  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	}
	
	function cartesianCross(a, b) {
	  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
	}
	
	// TODO return a
	function cartesianAddInPlace(a, b) {
	  a[0] += b[0], a[1] += b[1], a[2] += b[2];
	}
	
	function cartesianScale(vector, k) {
	  return [vector[0] * k, vector[1] * k, vector[2] * k];
	}
	
	// TODO return d
	function cartesianNormalizeInPlace(d) {
	  var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
	  d[0] /= l, d[1] /= l, d[2] /= l;
	}
	
	var lambda0$1;
	var phi0;
	var lambda1;
	var phi1;
	var lambda2;
	var lambda00$1;
	var phi00$1;
	var p0;
	var deltaSum = adder();
	var ranges;
	var range;
	
	var boundsStream = {
	  point: boundsPoint,
	  lineStart: boundsLineStart,
	  lineEnd: boundsLineEnd,
	  polygonStart: function() {
	    boundsStream.point = boundsRingPoint;
	    boundsStream.lineStart = boundsRingStart;
	    boundsStream.lineEnd = boundsRingEnd;
	    deltaSum.reset();
	    areaStream.polygonStart();
	  },
	  polygonEnd: function() {
	    areaStream.polygonEnd();
	    boundsStream.point = boundsPoint;
	    boundsStream.lineStart = boundsLineStart;
	    boundsStream.lineEnd = boundsLineEnd;
	    if (areaRingSum < 0) lambda0$1 = -(lambda1 = 180), phi0 = -(phi1 = 90);
	    else if (deltaSum > epsilon$2) phi1 = 90;
	    else if (deltaSum < -epsilon$2) phi0 = -90;
	    range[0] = lambda0$1, range[1] = lambda1;
	  }
	};
	
	function boundsPoint(lambda, phi) {
	  ranges.push(range = [lambda0$1 = lambda, lambda1 = lambda]);
	  if (phi < phi0) phi0 = phi;
	  if (phi > phi1) phi1 = phi;
	}
	
	function linePoint(lambda, phi) {
	  var p = cartesian([lambda * radians, phi * radians]);
	  if (p0) {
	    var normal = cartesianCross(p0, p),
	        equatorial = [normal[1], -normal[0], 0],
	        inflection = cartesianCross(equatorial, normal);
	    cartesianNormalizeInPlace(inflection);
	    inflection = spherical(inflection);
	    var delta = lambda - lambda2,
	        sign$$1 = delta > 0 ? 1 : -1,
	        lambdai = inflection[0] * degrees$1 * sign$$1,
	        phii,
	        antimeridian = abs(delta) > 180;
	    if (antimeridian ^ (sign$$1 * lambda2 < lambdai && lambdai < sign$$1 * lambda)) {
	      phii = inflection[1] * degrees$1;
	      if (phii > phi1) phi1 = phii;
	    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign$$1 * lambda2 < lambdai && lambdai < sign$$1 * lambda)) {
	      phii = -inflection[1] * degrees$1;
	      if (phii < phi0) phi0 = phii;
	    } else {
	      if (phi < phi0) phi0 = phi;
	      if (phi > phi1) phi1 = phi;
	    }
	    if (antimeridian) {
	      if (lambda < lambda2) {
	        if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
	      } else {
	        if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
	      }
	    } else {
	      if (lambda1 >= lambda0$1) {
	        if (lambda < lambda0$1) lambda0$1 = lambda;
	        if (lambda > lambda1) lambda1 = lambda;
	      } else {
	        if (lambda > lambda2) {
	          if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
	        } else {
	          if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
	        }
	      }
	    }
	  } else {
	    ranges.push(range = [lambda0$1 = lambda, lambda1 = lambda]);
	  }
	  if (phi < phi0) phi0 = phi;
	  if (phi > phi1) phi1 = phi;
	  p0 = p, lambda2 = lambda;
	}
	
	function boundsLineStart() {
	  boundsStream.point = linePoint;
	}
	
	function boundsLineEnd() {
	  range[0] = lambda0$1, range[1] = lambda1;
	  boundsStream.point = boundsPoint;
	  p0 = null;
	}
	
	function boundsRingPoint(lambda, phi) {
	  if (p0) {
	    var delta = lambda - lambda2;
	    deltaSum.add(abs(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
	  } else {
	    lambda00$1 = lambda, phi00$1 = phi;
	  }
	  areaStream.point(lambda, phi);
	  linePoint(lambda, phi);
	}
	
	function boundsRingStart() {
	  areaStream.lineStart();
	}
	
	function boundsRingEnd() {
	  boundsRingPoint(lambda00$1, phi00$1);
	  areaStream.lineEnd();
	  if (abs(deltaSum) > epsilon$2) lambda0$1 = -(lambda1 = 180);
	  range[0] = lambda0$1, range[1] = lambda1;
	  p0 = null;
	}
	
	// Finds the left-right distance between two longitudes.
	// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
	// the distance between ±180° to be 360°.
	function angle(lambda0, lambda1) {
	  return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
	}
	
	function rangeCompare(a, b) {
	  return a[0] - b[0];
	}
	
	function rangeContains(range, x) {
	  return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
	}
	
	var bounds = function(feature) {
	  var i, n, a, b, merged, deltaMax, delta;
	
	  phi1 = lambda1 = -(lambda0$1 = phi0 = Infinity);
	  ranges = [];
	  geoStream(feature, boundsStream);
	
	  // First, sort ranges by their minimum longitudes.
	  if (n = ranges.length) {
	    ranges.sort(rangeCompare);
	
	    // Then, merge any ranges that overlap.
	    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
	      b = ranges[i];
	      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
	        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
	        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
	      } else {
	        merged.push(a = b);
	      }
	    }
	
	    // Finally, find the largest gap between the merged ranges.
	    // The final bounding box will be the inverse of this gap.
	    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
	      b = merged[i];
	      if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0$1 = b[0], lambda1 = a[1];
	    }
	  }
	
	  ranges = range = null;
	
	  return lambda0$1 === Infinity || phi0 === Infinity
	      ? [[NaN, NaN], [NaN, NaN]]
	      : [[lambda0$1, phi0], [lambda1, phi1]];
	};
	
	var W0;
	var W1;
	var X0;
	var Y0;
	var Z0;
	var X1;
	var Y1;
	var Z1;
	var X2;
	var Y2;
	var Z2;
	var lambda00$2;
	var phi00$2;
	var x0;
	var y0;
	var z0; // previous point
	
	var centroidStream = {
	  sphere: noop$1,
	  point: centroidPoint,
	  lineStart: centroidLineStart,
	  lineEnd: centroidLineEnd,
	  polygonStart: function() {
	    centroidStream.lineStart = centroidRingStart;
	    centroidStream.lineEnd = centroidRingEnd;
	  },
	  polygonEnd: function() {
	    centroidStream.lineStart = centroidLineStart;
	    centroidStream.lineEnd = centroidLineEnd;
	  }
	};
	
	// Arithmetic mean of Cartesian vectors.
	function centroidPoint(lambda, phi) {
	  lambda *= radians, phi *= radians;
	  var cosPhi = cos$1(phi);
	  centroidPointCartesian(cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi));
	}
	
	function centroidPointCartesian(x, y, z) {
	  ++W0;
	  X0 += (x - X0) / W0;
	  Y0 += (y - Y0) / W0;
	  Z0 += (z - Z0) / W0;
	}
	
	function centroidLineStart() {
	  centroidStream.point = centroidLinePointFirst;
	}
	
	function centroidLinePointFirst(lambda, phi) {
	  lambda *= radians, phi *= radians;
	  var cosPhi = cos$1(phi);
	  x0 = cosPhi * cos$1(lambda);
	  y0 = cosPhi * sin$1(lambda);
	  z0 = sin$1(phi);
	  centroidStream.point = centroidLinePoint;
	  centroidPointCartesian(x0, y0, z0);
	}
	
	function centroidLinePoint(lambda, phi) {
	  lambda *= radians, phi *= radians;
	  var cosPhi = cos$1(phi),
	      x = cosPhi * cos$1(lambda),
	      y = cosPhi * sin$1(lambda),
	      z = sin$1(phi),
	      w = atan2(sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
	  W1 += w;
	  X1 += w * (x0 + (x0 = x));
	  Y1 += w * (y0 + (y0 = y));
	  Z1 += w * (z0 + (z0 = z));
	  centroidPointCartesian(x0, y0, z0);
	}
	
	function centroidLineEnd() {
	  centroidStream.point = centroidPoint;
	}
	
	// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
	// J. Applied Mechanics 42, 239 (1975).
	function centroidRingStart() {
	  centroidStream.point = centroidRingPointFirst;
	}
	
	function centroidRingEnd() {
	  centroidRingPoint(lambda00$2, phi00$2);
	  centroidStream.point = centroidPoint;
	}
	
	function centroidRingPointFirst(lambda, phi) {
	  lambda00$2 = lambda, phi00$2 = phi;
	  lambda *= radians, phi *= radians;
	  centroidStream.point = centroidRingPoint;
	  var cosPhi = cos$1(phi);
	  x0 = cosPhi * cos$1(lambda);
	  y0 = cosPhi * sin$1(lambda);
	  z0 = sin$1(phi);
	  centroidPointCartesian(x0, y0, z0);
	}
	
	function centroidRingPoint(lambda, phi) {
	  lambda *= radians, phi *= radians;
	  var cosPhi = cos$1(phi),
	      x = cosPhi * cos$1(lambda),
	      y = cosPhi * sin$1(lambda),
	      z = sin$1(phi),
	      cx = y0 * z - z0 * y,
	      cy = z0 * x - x0 * z,
	      cz = x0 * y - y0 * x,
	      m = sqrt(cx * cx + cy * cy + cz * cz),
	      w = asin(m), // line weight = angle
	      v = m && -w / m; // area weight multiplier
	  X2 += v * cx;
	  Y2 += v * cy;
	  Z2 += v * cz;
	  W1 += w;
	  X1 += w * (x0 + (x0 = x));
	  Y1 += w * (y0 + (y0 = y));
	  Z1 += w * (z0 + (z0 = z));
	  centroidPointCartesian(x0, y0, z0);
	}
	
	var centroid = function(object) {
	  W0 = W1 =
	  X0 = Y0 = Z0 =
	  X1 = Y1 = Z1 =
	  X2 = Y2 = Z2 = 0;
	  geoStream(object, centroidStream);
	
	  var x = X2,
	      y = Y2,
	      z = Z2,
	      m = x * x + y * y + z * z;
	
	  // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
	  if (m < epsilon2$1) {
	    x = X1, y = Y1, z = Z1;
	    // If the feature has zero length, fall back to arithmetic mean of point vectors.
	    if (W1 < epsilon$2) x = X0, y = Y0, z = Z0;
	    m = x * x + y * y + z * z;
	    // If the feature still has an undefined ccentroid, then return.
	    if (m < epsilon2$1) return [NaN, NaN];
	  }
	
	  return [atan2(y, x) * degrees$1, asin(z / sqrt(m)) * degrees$1];
	};
	
	var constant$7 = function(x) {
	  return function() {
	    return x;
	  };
	};
	
	var compose = function(a, b) {
	
	  function compose(x, y) {
	    return x = a(x, y), b(x[0], x[1]);
	  }
	
	  if (a.invert && b.invert) compose.invert = function(x, y) {
	    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
	  };
	
	  return compose;
	};
	
	function rotationIdentity(lambda, phi) {
	  return [lambda > pi$3 ? lambda - tau$3 : lambda < -pi$3 ? lambda + tau$3 : lambda, phi];
	}
	
	rotationIdentity.invert = rotationIdentity;
	
	function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
	  return (deltaLambda %= tau$3) ? (deltaPhi || deltaGamma ? compose(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
	    : rotationLambda(deltaLambda))
	    : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
	    : rotationIdentity);
	}
	
	function forwardRotationLambda(deltaLambda) {
	  return function(lambda, phi) {
	    return lambda += deltaLambda, [lambda > pi$3 ? lambda - tau$3 : lambda < -pi$3 ? lambda + tau$3 : lambda, phi];
	  };
	}
	
	function rotationLambda(deltaLambda) {
	  var rotation = forwardRotationLambda(deltaLambda);
	  rotation.invert = forwardRotationLambda(-deltaLambda);
	  return rotation;
	}
	
	function rotationPhiGamma(deltaPhi, deltaGamma) {
	  var cosDeltaPhi = cos$1(deltaPhi),
	      sinDeltaPhi = sin$1(deltaPhi),
	      cosDeltaGamma = cos$1(deltaGamma),
	      sinDeltaGamma = sin$1(deltaGamma);
	
	  function rotation(lambda, phi) {
	    var cosPhi = cos$1(phi),
	        x = cos$1(lambda) * cosPhi,
	        y = sin$1(lambda) * cosPhi,
	        z = sin$1(phi),
	        k = z * cosDeltaPhi + x * sinDeltaPhi;
	    return [
	      atan2(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
	      asin(k * cosDeltaGamma + y * sinDeltaGamma)
	    ];
	  }
	
	  rotation.invert = function(lambda, phi) {
	    var cosPhi = cos$1(phi),
	        x = cos$1(lambda) * cosPhi,
	        y = sin$1(lambda) * cosPhi,
	        z = sin$1(phi),
	        k = z * cosDeltaGamma - y * sinDeltaGamma;
	    return [
	      atan2(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
	      asin(k * cosDeltaPhi - x * sinDeltaPhi)
	    ];
	  };
	
	  return rotation;
	}
	
	var rotation = function(rotate) {
	  rotate = rotateRadians(rotate[0] * radians, rotate[1] * radians, rotate.length > 2 ? rotate[2] * radians : 0);
	
	  function forward(coordinates) {
	    coordinates = rotate(coordinates[0] * radians, coordinates[1] * radians);
	    return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
	  }
	
	  forward.invert = function(coordinates) {
	    coordinates = rotate.invert(coordinates[0] * radians, coordinates[1] * radians);
	    return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
	  };
	
	  return forward;
	};
	
	// Generates a circle centered at [0°, 0°], with a given radius and precision.
	function circleStream(stream, radius, delta, direction, t0, t1) {
	  if (!delta) return;
	  var cosRadius = cos$1(radius),
	      sinRadius = sin$1(radius),
	      step = direction * delta;
	  if (t0 == null) {
	    t0 = radius + direction * tau$3;
	    t1 = radius - step / 2;
	  } else {
	    t0 = circleRadius(cosRadius, t0);
	    t1 = circleRadius(cosRadius, t1);
	    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau$3;
	  }
	  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
	    point = spherical([cosRadius, -sinRadius * cos$1(t), -sinRadius * sin$1(t)]);
	    stream.point(point[0], point[1]);
	  }
	}
	
	// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
	function circleRadius(cosRadius, point) {
	  point = cartesian(point), point[0] -= cosRadius;
	  cartesianNormalizeInPlace(point);
	  var radius = acos(-point[1]);
	  return ((-point[2] < 0 ? -radius : radius) + tau$3 - epsilon$2) % tau$3;
	}
	
	var circle = function() {
	  var center = constant$7([0, 0]),
	      radius = constant$7(90),
	      precision = constant$7(6),
	      ring,
	      rotate,
	      stream = {point: point};
	
	  function point(x, y) {
	    ring.push(x = rotate(x, y));
	    x[0] *= degrees$1, x[1] *= degrees$1;
	  }
	
	  function circle() {
	    var c = center.apply(this, arguments),
	        r = radius.apply(this, arguments) * radians,
	        p = precision.apply(this, arguments) * radians;
	    ring = [];
	    rotate = rotateRadians(-c[0] * radians, -c[1] * radians, 0).invert;
	    circleStream(stream, r, p, 1);
	    c = {type: "Polygon", coordinates: [ring]};
	    ring = rotate = null;
	    return c;
	  }
	
	  circle.center = function(_) {
	    return arguments.length ? (center = typeof _ === "function" ? _ : constant$7([+_[0], +_[1]]), circle) : center;
	  };
	
	  circle.radius = function(_) {
	    return arguments.length ? (radius = typeof _ === "function" ? _ : constant$7(+_), circle) : radius;
	  };
	
	  circle.precision = function(_) {
	    return arguments.length ? (precision = typeof _ === "function" ? _ : constant$7(+_), circle) : precision;
	  };
	
	  return circle;
	};
	
	var clipBuffer = function() {
	  var lines = [],
	      line;
	  return {
	    point: function(x, y) {
	      line.push([x, y]);
	    },
	    lineStart: function() {
	      lines.push(line = []);
	    },
	    lineEnd: noop$1,
	    rejoin: function() {
	      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
	    },
	    result: function() {
	      var result = lines;
	      lines = [];
	      line = null;
	      return result;
	    }
	  };
	};
	
	var clipLine = function(a, b, x0, y0, x1, y1) {
	  var ax = a[0],
	      ay = a[1],
	      bx = b[0],
	      by = b[1],
	      t0 = 0,
	      t1 = 1,
	      dx = bx - ax,
	      dy = by - ay,
	      r;
	
	  r = x0 - ax;
	  if (!dx && r > 0) return;
	  r /= dx;
	  if (dx < 0) {
	    if (r < t0) return;
	    if (r < t1) t1 = r;
	  } else if (dx > 0) {
	    if (r > t1) return;
	    if (r > t0) t0 = r;
	  }
	
	  r = x1 - ax;
	  if (!dx && r < 0) return;
	  r /= dx;
	  if (dx < 0) {
	    if (r > t1) return;
	    if (r > t0) t0 = r;
	  } else if (dx > 0) {
	    if (r < t0) return;
	    if (r < t1) t1 = r;
	  }
	
	  r = y0 - ay;
	  if (!dy && r > 0) return;
	  r /= dy;
	  if (dy < 0) {
	    if (r < t0) return;
	    if (r < t1) t1 = r;
	  } else if (dy > 0) {
	    if (r > t1) return;
	    if (r > t0) t0 = r;
	  }
	
	  r = y1 - ay;
	  if (!dy && r < 0) return;
	  r /= dy;
	  if (dy < 0) {
	    if (r > t1) return;
	    if (r > t0) t0 = r;
	  } else if (dy > 0) {
	    if (r < t0) return;
	    if (r < t1) t1 = r;
	  }
	
	  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
	  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
	  return true;
	};
	
	var pointEqual = function(a, b) {
	  return abs(a[0] - b[0]) < epsilon$2 && abs(a[1] - b[1]) < epsilon$2;
	};
	
	function Intersection(point, points, other, entry) {
	  this.x = point;
	  this.z = points;
	  this.o = other; // another intersection
	  this.e = entry; // is an entry?
	  this.v = false; // visited
	  this.n = this.p = null; // next & previous
	}
	
	// A generalized polygon clipping algorithm: given a polygon that has been cut
	// into its visible line segments, and rejoins the segments by interpolating
	// along the clip edge.
	var clipPolygon = function(segments, compareIntersection, startInside, interpolate, stream) {
	  var subject = [],
	      clip = [],
	      i,
	      n;
	
	  segments.forEach(function(segment) {
	    if ((n = segment.length - 1) <= 0) return;
	    var n, p0 = segment[0], p1 = segment[n], x;
	
	    // If the first and last points of a segment are coincident, then treat as a
	    // closed ring. TODO if all rings are closed, then the winding order of the
	    // exterior ring should be checked.
	    if (pointEqual(p0, p1)) {
	      stream.lineStart();
	      for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
	      stream.lineEnd();
	      return;
	    }
	
	    subject.push(x = new Intersection(p0, segment, null, true));
	    clip.push(x.o = new Intersection(p0, null, x, false));
	    subject.push(x = new Intersection(p1, segment, null, false));
	    clip.push(x.o = new Intersection(p1, null, x, true));
	  });
	
	  if (!subject.length) return;
	
	  clip.sort(compareIntersection);
	  link$1(subject);
	  link$1(clip);
	
	  for (i = 0, n = clip.length; i < n; ++i) {
	    clip[i].e = startInside = !startInside;
	  }
	
	  var start = subject[0],
	      points,
	      point;
	
	  while (1) {
	    // Find first unvisited intersection.
	    var current = start,
	        isSubject = true;
	    while (current.v) if ((current = current.n) === start) return;
	    points = current.z;
	    stream.lineStart();
	    do {
	      current.v = current.o.v = true;
	      if (current.e) {
	        if (isSubject) {
	          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
	        } else {
	          interpolate(current.x, current.n.x, 1, stream);
	        }
	        current = current.n;
	      } else {
	        if (isSubject) {
	          points = current.p.z;
	          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
	        } else {
	          interpolate(current.x, current.p.x, -1, stream);
	        }
	        current = current.p;
	      }
	      current = current.o;
	      points = current.z;
	      isSubject = !isSubject;
	    } while (!current.v);
	    stream.lineEnd();
	  }
	};
	
	function link$1(array) {
	  if (!(n = array.length)) return;
	  var n,
	      i = 0,
	      a = array[0],
	      b;
	  while (++i < n) {
	    a.n = b = array[i];
	    b.p = a;
	    a = b;
	  }
	  a.n = b = array[0];
	  b.p = a;
	}
	
	var clipMax = 1e9;
	var clipMin = -clipMax;
	
	// TODO Use d3-polygon’s polygonContains here for the ring check?
	// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?
	
	function clipExtent(x0, y0, x1, y1) {
	
	  function visible(x, y) {
	    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
	  }
	
	  function interpolate(from, to, direction, stream) {
	    var a = 0, a1 = 0;
	    if (from == null
	        || (a = corner(from, direction)) !== (a1 = corner(to, direction))
	        || comparePoint(from, to) < 0 ^ direction > 0) {
	      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
	      while ((a = (a + direction + 4) % 4) !== a1);
	    } else {
	      stream.point(to[0], to[1]);
	    }
	  }
	
	  function corner(p, direction) {
	    return abs(p[0] - x0) < epsilon$2 ? direction > 0 ? 0 : 3
	        : abs(p[0] - x1) < epsilon$2 ? direction > 0 ? 2 : 1
	        : abs(p[1] - y0) < epsilon$2 ? direction > 0 ? 1 : 0
	        : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
	  }
	
	  function compareIntersection(a, b) {
	    return comparePoint(a.x, b.x);
	  }
	
	  function comparePoint(a, b) {
	    var ca = corner(a, 1),
	        cb = corner(b, 1);
	    return ca !== cb ? ca - cb
	        : ca === 0 ? b[1] - a[1]
	        : ca === 1 ? a[0] - b[0]
	        : ca === 2 ? a[1] - b[1]
	        : b[0] - a[0];
	  }
	
	  return function(stream) {
	    var activeStream = stream,
	        bufferStream = clipBuffer(),
	        segments,
	        polygon,
	        ring,
	        x__, y__, v__, // first point
	        x_, y_, v_, // previous point
	        first,
	        clean;
	
	    var clipStream = {
	      point: point,
	      lineStart: lineStart,
	      lineEnd: lineEnd,
	      polygonStart: polygonStart,
	      polygonEnd: polygonEnd
	    };
	
	    function point(x, y) {
	      if (visible(x, y)) activeStream.point(x, y);
	    }
	
	    function polygonInside() {
	      var winding = 0;
	
	      for (var i = 0, n = polygon.length; i < n; ++i) {
	        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
	          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
	          if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
	          else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
	        }
	      }
	
	      return winding;
	    }
	
	    // Buffer geometry within a polygon and then clip it en masse.
	    function polygonStart() {
	      activeStream = bufferStream, segments = [], polygon = [], clean = true;
	    }
	
	    function polygonEnd() {
	      var startInside = polygonInside(),
	          cleanInside = clean && startInside,
	          visible = (segments = merge(segments)).length;
	      if (cleanInside || visible) {
	        stream.polygonStart();
	        if (cleanInside) {
	          stream.lineStart();
	          interpolate(null, null, 1, stream);
	          stream.lineEnd();
	        }
	        if (visible) {
	          clipPolygon(segments, compareIntersection, startInside, interpolate, stream);
	        }
	        stream.polygonEnd();
	      }
	      activeStream = stream, segments = polygon = ring = null;
	    }
	
	    function lineStart() {
	      clipStream.point = linePoint;
	      if (polygon) polygon.push(ring = []);
	      first = true;
	      v_ = false;
	      x_ = y_ = NaN;
	    }
	
	    // TODO rather than special-case polygons, simply handle them separately.
	    // Ideally, coincident intersection points should be jittered to avoid
	    // clipping issues.
	    function lineEnd() {
	      if (segments) {
	        linePoint(x__, y__);
	        if (v__ && v_) bufferStream.rejoin();
	        segments.push(bufferStream.result());
	      }
	      clipStream.point = point;
	      if (v_) activeStream.lineEnd();
	    }
	
	    function linePoint(x, y) {
	      var v = visible(x, y);
	      if (polygon) ring.push([x, y]);
	      if (first) {
	        x__ = x, y__ = y, v__ = v;
	        first = false;
	        if (v) {
	          activeStream.lineStart();
	          activeStream.point(x, y);
	        }
	      } else {
	        if (v && v_) activeStream.point(x, y);
	        else {
	          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
	              b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
	          if (clipLine(a, b, x0, y0, x1, y1)) {
	            if (!v_) {
	              activeStream.lineStart();
	              activeStream.point(a[0], a[1]);
	            }
	            activeStream.point(b[0], b[1]);
	            if (!v) activeStream.lineEnd();
	            clean = false;
	          } else if (v) {
	            activeStream.lineStart();
	            activeStream.point(x, y);
	            clean = false;
	          }
	        }
	      }
	      x_ = x, y_ = y, v_ = v;
	    }
	
	    return clipStream;
	  };
	}
	
	var extent$1 = function() {
	  var x0 = 0,
	      y0 = 0,
	      x1 = 960,
	      y1 = 500,
	      cache,
	      cacheStream,
	      clip;
	
	  return clip = {
	    stream: function(stream) {
	      return cache && cacheStream === stream ? cache : cache = clipExtent(x0, y0, x1, y1)(cacheStream = stream);
	    },
	    extent: function(_) {
	      return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
	    }
	  };
	};
	
	var sum$1 = adder();
	
	var polygonContains = function(polygon, point) {
	  var lambda = point[0],
	      phi = point[1],
	      normal = [sin$1(lambda), -cos$1(lambda), 0],
	      angle = 0,
	      winding = 0;
	
	  sum$1.reset();
	
	  for (var i = 0, n = polygon.length; i < n; ++i) {
	    if (!(m = (ring = polygon[i]).length)) continue;
	    var ring,
	        m,
	        point0 = ring[m - 1],
	        lambda0 = point0[0],
	        phi0 = point0[1] / 2 + quarterPi,
	        sinPhi0 = sin$1(phi0),
	        cosPhi0 = cos$1(phi0);
	
	    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
	      var point1 = ring[j],
	          lambda1 = point1[0],
	          phi1 = point1[1] / 2 + quarterPi,
	          sinPhi1 = sin$1(phi1),
	          cosPhi1 = cos$1(phi1),
	          delta = lambda1 - lambda0,
	          sign$$1 = delta >= 0 ? 1 : -1,
	          absDelta = sign$$1 * delta,
	          antimeridian = absDelta > pi$3,
	          k = sinPhi0 * sinPhi1;
	
	      sum$1.add(atan2(k * sign$$1 * sin$1(absDelta), cosPhi0 * cosPhi1 + k * cos$1(absDelta)));
	      angle += antimeridian ? delta + sign$$1 * tau$3 : delta;
	
	      // Are the longitudes either side of the point’s meridian (lambda),
	      // and are the latitudes smaller than the parallel (phi)?
	      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
	        var arc = cartesianCross(cartesian(point0), cartesian(point1));
	        cartesianNormalizeInPlace(arc);
	        var intersection = cartesianCross(normal, arc);
	        cartesianNormalizeInPlace(intersection);
	        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection[2]);
	        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
	          winding += antimeridian ^ delta >= 0 ? 1 : -1;
	        }
	      }
	    }
	  }
	
	  // First, determine whether the South pole is inside or outside:
	  //
	  // It is inside if:
	  // * the polygon winds around it in a clockwise direction.
	  // * the polygon does not (cumulatively) wind around it, but has a negative
	  //   (counter-clockwise) area.
	  //
	  // Second, count the (signed) number of times a segment crosses a lambda
	  // from the point to the South pole.  If it is zero, then the point is the
	  // same side as the South pole.
	
	  return (angle < -epsilon$2 || angle < epsilon$2 && sum$1 < -epsilon$2) ^ (winding & 1);
	};
	
	var lengthSum = adder();
	var lambda0$2;
	var sinPhi0$1;
	var cosPhi0$1;
	
	var lengthStream = {
	  sphere: noop$1,
	  point: noop$1,
	  lineStart: lengthLineStart,
	  lineEnd: noop$1,
	  polygonStart: noop$1,
	  polygonEnd: noop$1
	};
	
	function lengthLineStart() {
	  lengthStream.point = lengthPointFirst;
	  lengthStream.lineEnd = lengthLineEnd;
	}
	
	function lengthLineEnd() {
	  lengthStream.point = lengthStream.lineEnd = noop$1;
	}
	
	function lengthPointFirst(lambda, phi) {
	  lambda *= radians, phi *= radians;
	  lambda0$2 = lambda, sinPhi0$1 = sin$1(phi), cosPhi0$1 = cos$1(phi);
	  lengthStream.point = lengthPoint;
	}
	
	function lengthPoint(lambda, phi) {
	  lambda *= radians, phi *= radians;
	  var sinPhi = sin$1(phi),
	      cosPhi = cos$1(phi),
	      delta = abs(lambda - lambda0$2),
	      cosDelta = cos$1(delta),
	      sinDelta = sin$1(delta),
	      x = cosPhi * sinDelta,
	      y = cosPhi0$1 * sinPhi - sinPhi0$1 * cosPhi * cosDelta,
	      z = sinPhi0$1 * sinPhi + cosPhi0$1 * cosPhi * cosDelta;
	  lengthSum.add(atan2(sqrt(x * x + y * y), z));
	  lambda0$2 = lambda, sinPhi0$1 = sinPhi, cosPhi0$1 = cosPhi;
	}
	
	var length$1 = function(object) {
	  lengthSum.reset();
	  geoStream(object, lengthStream);
	  return +lengthSum;
	};
	
	var coordinates = [null, null];
	var object$1 = {type: "LineString", coordinates: coordinates};
	
	var distance = function(a, b) {
	  coordinates[0] = a;
	  coordinates[1] = b;
	  return length$1(object$1);
	};
	
	var containsObjectType = {
	  Feature: function(object, point) {
	    return containsGeometry(object.geometry, point);
	  },
	  FeatureCollection: function(object, point) {
	    var features = object.features, i = -1, n = features.length;
	    while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
	    return false;
	  }
	};
	
	var containsGeometryType = {
	  Sphere: function() {
	    return true;
	  },
	  Point: function(object, point) {
	    return containsPoint(object.coordinates, point);
	  },
	  MultiPoint: function(object, point) {
	    var coordinates = object.coordinates, i = -1, n = coordinates.length;
	    while (++i < n) if (containsPoint(coordinates[i], point)) return true;
	    return false;
	  },
	  LineString: function(object, point) {
	    return containsLine(object.coordinates, point);
	  },
	  MultiLineString: function(object, point) {
	    var coordinates = object.coordinates, i = -1, n = coordinates.length;
	    while (++i < n) if (containsLine(coordinates[i], point)) return true;
	    return false;
	  },
	  Polygon: function(object, point) {
	    return containsPolygon(object.coordinates, point);
	  },
	  MultiPolygon: function(object, point) {
	    var coordinates = object.coordinates, i = -1, n = coordinates.length;
	    while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
	    return false;
	  },
	  GeometryCollection: function(object, point) {
	    var geometries = object.geometries, i = -1, n = geometries.length;
	    while (++i < n) if (containsGeometry(geometries[i], point)) return true;
	    return false;
	  }
	};
	
	function containsGeometry(geometry, point) {
	  return geometry && containsGeometryType.hasOwnProperty(geometry.type)
	      ? containsGeometryType[geometry.type](geometry, point)
	      : false;
	}
	
	function containsPoint(coordinates, point) {
	  return distance(coordinates, point) === 0;
	}
	
	function containsLine(coordinates, point) {
	  var ab = distance(coordinates[0], coordinates[1]),
	      ao = distance(coordinates[0], point),
	      ob = distance(point, coordinates[1]);
	  return ao + ob <= ab + epsilon$2;
	}
	
	function containsPolygon(coordinates, point) {
	  return !!polygonContains(coordinates.map(ringRadians), pointRadians(point));
	}
	
	function ringRadians(ring) {
	  return ring = ring.map(pointRadians), ring.pop(), ring;
	}
	
	function pointRadians(point) {
	  return [point[0] * radians, point[1] * radians];
	}
	
	var contains = function(object, point) {
	  return (object && containsObjectType.hasOwnProperty(object.type)
	      ? containsObjectType[object.type]
	      : containsGeometry)(object, point);
	};
	
	function graticuleX(y0, y1, dy) {
	  var y = sequence(y0, y1 - epsilon$2, dy).concat(y1);
	  return function(x) { return y.map(function(y) { return [x, y]; }); };
	}
	
	function graticuleY(x0, x1, dx) {
	  var x = sequence(x0, x1 - epsilon$2, dx).concat(x1);
	  return function(y) { return x.map(function(x) { return [x, y]; }); };
	}
	
	function graticule() {
	  var x1, x0, X1, X0,
	      y1, y0, Y1, Y0,
	      dx = 10, dy = dx, DX = 90, DY = 360,
	      x, y, X, Y,
	      precision = 2.5;
	
	  function graticule() {
	    return {type: "MultiLineString", coordinates: lines()};
	  }
	
	  function lines() {
	    return sequence(ceil(X0 / DX) * DX, X1, DX).map(X)
	        .concat(sequence(ceil(Y0 / DY) * DY, Y1, DY).map(Y))
	        .concat(sequence(ceil(x0 / dx) * dx, x1, dx).filter(function(x) { return abs(x % DX) > epsilon$2; }).map(x))
	        .concat(sequence(ceil(y0 / dy) * dy, y1, dy).filter(function(y) { return abs(y % DY) > epsilon$2; }).map(y));
	  }
	
	  graticule.lines = function() {
	    return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
	  };
	
	  graticule.outline = function() {
	    return {
	      type: "Polygon",
	      coordinates: [
	        X(X0).concat(
	        Y(Y1).slice(1),
	        X(X1).reverse().slice(1),
	        Y(Y0).reverse().slice(1))
	      ]
	    };
	  };
	
	  graticule.extent = function(_) {
	    if (!arguments.length) return graticule.extentMinor();
	    return graticule.extentMajor(_).extentMinor(_);
	  };
	
	  graticule.extentMajor = function(_) {
	    if (!arguments.length) return [[X0, Y0], [X1, Y1]];
	    X0 = +_[0][0], X1 = +_[1][0];
	    Y0 = +_[0][1], Y1 = +_[1][1];
	    if (X0 > X1) _ = X0, X0 = X1, X1 = _;
	    if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
	    return graticule.precision(precision);
	  };
	
	  graticule.extentMinor = function(_) {
	    if (!arguments.length) return [[x0, y0], [x1, y1]];
	    x0 = +_[0][0], x1 = +_[1][0];
	    y0 = +_[0][1], y1 = +_[1][1];
	    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
	    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
	    return graticule.precision(precision);
	  };
	
	  graticule.step = function(_) {
	    if (!arguments.length) return graticule.stepMinor();
	    return graticule.stepMajor(_).stepMinor(_);
	  };
	
	  graticule.stepMajor = function(_) {
	    if (!arguments.length) return [DX, DY];
	    DX = +_[0], DY = +_[1];
	    return graticule;
	  };
	
	  graticule.stepMinor = function(_) {
	    if (!arguments.length) return [dx, dy];
	    dx = +_[0], dy = +_[1];
	    return graticule;
	  };
	
	  graticule.precision = function(_) {
	    if (!arguments.length) return precision;
	    precision = +_;
	    x = graticuleX(y0, y1, 90);
	    y = graticuleY(x0, x1, precision);
	    X = graticuleX(Y0, Y1, 90);
	    Y = graticuleY(X0, X1, precision);
	    return graticule;
	  };
	
	  return graticule
	      .extentMajor([[-180, -90 + epsilon$2], [180, 90 - epsilon$2]])
	      .extentMinor([[-180, -80 - epsilon$2], [180, 80 + epsilon$2]]);
	}
	
	function graticule10() {
	  return graticule()();
	}
	
	var interpolate$1 = function(a, b) {
	  var x0 = a[0] * radians,
	      y0 = a[1] * radians,
	      x1 = b[0] * radians,
	      y1 = b[1] * radians,
	      cy0 = cos$1(y0),
	      sy0 = sin$1(y0),
	      cy1 = cos$1(y1),
	      sy1 = sin$1(y1),
	      kx0 = cy0 * cos$1(x0),
	      ky0 = cy0 * sin$1(x0),
	      kx1 = cy1 * cos$1(x1),
	      ky1 = cy1 * sin$1(x1),
	      d = 2 * asin(sqrt(haversin(y1 - y0) + cy0 * cy1 * haversin(x1 - x0))),
	      k = sin$1(d);
	
	  var interpolate = d ? function(t) {
	    var B = sin$1(t *= d) / k,
	        A = sin$1(d - t) / k,
	        x = A * kx0 + B * kx1,
	        y = A * ky0 + B * ky1,
	        z = A * sy0 + B * sy1;
	    return [
	      atan2(y, x) * degrees$1,
	      atan2(z, sqrt(x * x + y * y)) * degrees$1
	    ];
	  } : function() {
	    return [x0 * degrees$1, y0 * degrees$1];
	  };
	
	  interpolate.distance = d;
	
	  return interpolate;
	};
	
	var identity$4 = function(x) {
	  return x;
	};
	
	var areaSum$1 = adder();
	var areaRingSum$1 = adder();
	var x00;
	var y00;
	var x0$1;
	var y0$1;
	
	var areaStream$1 = {
	  point: noop$1,
	  lineStart: noop$1,
	  lineEnd: noop$1,
	  polygonStart: function() {
	    areaStream$1.lineStart = areaRingStart$1;
	    areaStream$1.lineEnd = areaRingEnd$1;
	  },
	  polygonEnd: function() {
	    areaStream$1.lineStart = areaStream$1.lineEnd = areaStream$1.point = noop$1;
	    areaSum$1.add(abs(areaRingSum$1));
	    areaRingSum$1.reset();
	  },
	  result: function() {
	    var area = areaSum$1 / 2;
	    areaSum$1.reset();
	    return area;
	  }
	};
	
	function areaRingStart$1() {
	  areaStream$1.point = areaPointFirst$1;
	}
	
	function areaPointFirst$1(x, y) {
	  areaStream$1.point = areaPoint$1;
	  x00 = x0$1 = x, y00 = y0$1 = y;
	}
	
	function areaPoint$1(x, y) {
	  areaRingSum$1.add(y0$1 * x - x0$1 * y);
	  x0$1 = x, y0$1 = y;
	}
	
	function areaRingEnd$1() {
	  areaPoint$1(x00, y00);
	}
	
	var x0$2 = Infinity;
	var y0$2 = x0$2;
	var x1 = -x0$2;
	var y1 = x1;
	
	var boundsStream$1 = {
	  point: boundsPoint$1,
	  lineStart: noop$1,
	  lineEnd: noop$1,
	  polygonStart: noop$1,
	  polygonEnd: noop$1,
	  result: function() {
	    var bounds = [[x0$2, y0$2], [x1, y1]];
	    x1 = y1 = -(y0$2 = x0$2 = Infinity);
	    return bounds;
	  }
	};
	
	function boundsPoint$1(x, y) {
	  if (x < x0$2) x0$2 = x;
	  if (x > x1) x1 = x;
	  if (y < y0$2) y0$2 = y;
	  if (y > y1) y1 = y;
	}
	
	// TODO Enforce positive area for exterior, negative area for interior?
	
	var X0$1 = 0;
	var Y0$1 = 0;
	var Z0$1 = 0;
	var X1$1 = 0;
	var Y1$1 = 0;
	var Z1$1 = 0;
	var X2$1 = 0;
	var Y2$1 = 0;
	var Z2$1 = 0;
	var x00$1;
	var y00$1;
	var x0$3;
	var y0$3;
	
	var centroidStream$1 = {
	  point: centroidPoint$1,
	  lineStart: centroidLineStart$1,
	  lineEnd: centroidLineEnd$1,
	  polygonStart: function() {
	    centroidStream$1.lineStart = centroidRingStart$1;
	    centroidStream$1.lineEnd = centroidRingEnd$1;
	  },
	  polygonEnd: function() {
	    centroidStream$1.point = centroidPoint$1;
	    centroidStream$1.lineStart = centroidLineStart$1;
	    centroidStream$1.lineEnd = centroidLineEnd$1;
	  },
	  result: function() {
	    var centroid = Z2$1 ? [X2$1 / Z2$1, Y2$1 / Z2$1]
	        : Z1$1 ? [X1$1 / Z1$1, Y1$1 / Z1$1]
	        : Z0$1 ? [X0$1 / Z0$1, Y0$1 / Z0$1]
	        : [NaN, NaN];
	    X0$1 = Y0$1 = Z0$1 =
	    X1$1 = Y1$1 = Z1$1 =
	    X2$1 = Y2$1 = Z2$1 = 0;
	    return centroid;
	  }
	};
	
	function centroidPoint$1(x, y) {
	  X0$1 += x;
	  Y0$1 += y;
	  ++Z0$1;
	}
	
	function centroidLineStart$1() {
	  centroidStream$1.point = centroidPointFirstLine;
	}
	
	function centroidPointFirstLine(x, y) {
	  centroidStream$1.point = centroidPointLine;
	  centroidPoint$1(x0$3 = x, y0$3 = y);
	}
	
	function centroidPointLine(x, y) {
	  var dx = x - x0$3, dy = y - y0$3, z = sqrt(dx * dx + dy * dy);
	  X1$1 += z * (x0$3 + x) / 2;
	  Y1$1 += z * (y0$3 + y) / 2;
	  Z1$1 += z;
	  centroidPoint$1(x0$3 = x, y0$3 = y);
	}
	
	function centroidLineEnd$1() {
	  centroidStream$1.point = centroidPoint$1;
	}
	
	function centroidRingStart$1() {
	  centroidStream$1.point = centroidPointFirstRing;
	}
	
	function centroidRingEnd$1() {
	  centroidPointRing(x00$1, y00$1);
	}
	
	function centroidPointFirstRing(x, y) {
	  centroidStream$1.point = centroidPointRing;
	  centroidPoint$1(x00$1 = x0$3 = x, y00$1 = y0$3 = y);
	}
	
	function centroidPointRing(x, y) {
	  var dx = x - x0$3,
	      dy = y - y0$3,
	      z = sqrt(dx * dx + dy * dy);
	
	  X1$1 += z * (x0$3 + x) / 2;
	  Y1$1 += z * (y0$3 + y) / 2;
	  Z1$1 += z;
	
	  z = y0$3 * x - x0$3 * y;
	  X2$1 += z * (x0$3 + x);
	  Y2$1 += z * (y0$3 + y);
	  Z2$1 += z * 3;
	  centroidPoint$1(x0$3 = x, y0$3 = y);
	}
	
	function PathContext(context) {
	  this._context = context;
	}
	
	PathContext.prototype = {
	  _radius: 4.5,
	  pointRadius: function(_) {
	    return this._radius = _, this;
	  },
	  polygonStart: function() {
	    this._line = 0;
	  },
	  polygonEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._point = 0;
	  },
	  lineEnd: function() {
	    if (this._line === 0) this._context.closePath();
	    this._point = NaN;
	  },
	  point: function(x, y) {
	    switch (this._point) {
	      case 0: {
	        this._context.moveTo(x, y);
	        this._point = 1;
	        break;
	      }
	      case 1: {
	        this._context.lineTo(x, y);
	        break;
	      }
	      default: {
	        this._context.moveTo(x + this._radius, y);
	        this._context.arc(x, y, this._radius, 0, tau$3);
	        break;
	      }
	    }
	  },
	  result: noop$1
	};
	
	var lengthSum$1 = adder();
	var lengthRing;
	var x00$2;
	var y00$2;
	var x0$4;
	var y0$4;
	
	var lengthStream$1 = {
	  point: noop$1,
	  lineStart: function() {
	    lengthStream$1.point = lengthPointFirst$1;
	  },
	  lineEnd: function() {
	    if (lengthRing) lengthPoint$1(x00$2, y00$2);
	    lengthStream$1.point = noop$1;
	  },
	  polygonStart: function() {
	    lengthRing = true;
	  },
	  polygonEnd: function() {
	    lengthRing = null;
	  },
	  result: function() {
	    var length = +lengthSum$1;
	    lengthSum$1.reset();
	    return length;
	  }
	};
	
	function lengthPointFirst$1(x, y) {
	  lengthStream$1.point = lengthPoint$1;
	  x00$2 = x0$4 = x, y00$2 = y0$4 = y;
	}
	
	function lengthPoint$1(x, y) {
	  x0$4 -= x, y0$4 -= y;
	  lengthSum$1.add(sqrt(x0$4 * x0$4 + y0$4 * y0$4));
	  x0$4 = x, y0$4 = y;
	}
	
	function PathString() {
	  this._string = [];
	}
	
	PathString.prototype = {
	  _radius: 4.5,
	  _circle: circle$1(4.5),
	  pointRadius: function(_) {
	    if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
	    return this;
	  },
	  polygonStart: function() {
	    this._line = 0;
	  },
	  polygonEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._point = 0;
	  },
	  lineEnd: function() {
	    if (this._line === 0) this._string.push("Z");
	    this._point = NaN;
	  },
	  point: function(x, y) {
	    switch (this._point) {
	      case 0: {
	        this._string.push("M", x, ",", y);
	        this._point = 1;
	        break;
	      }
	      case 1: {
	        this._string.push("L", x, ",", y);
	        break;
	      }
	      default: {
	        if (this._circle == null) this._circle = circle$1(this._radius);
	        this._string.push("M", x, ",", y, this._circle);
	        break;
	      }
	    }
	  },
	  result: function() {
	    if (this._string.length) {
	      var result = this._string.join("");
	      this._string = [];
	      return result;
	    } else {
	      return null;
	    }
	  }
	};
	
	function circle$1(radius) {
	  return "m0," + radius
	      + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
	      + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
	      + "z";
	}
	
	var index$1 = function(projection, context) {
	  var pointRadius = 4.5,
	      projectionStream,
	      contextStream;
	
	  function path(object) {
	    if (object) {
	      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
	      geoStream(object, projectionStream(contextStream));
	    }
	    return contextStream.result();
	  }
	
	  path.area = function(object) {
	    geoStream(object, projectionStream(areaStream$1));
	    return areaStream$1.result();
	  };
	
	  path.measure = function(object) {
	    geoStream(object, projectionStream(lengthStream$1));
	    return lengthStream$1.result();
	  };
	
	  path.bounds = function(object) {
	    geoStream(object, projectionStream(boundsStream$1));
	    return boundsStream$1.result();
	  };
	
	  path.centroid = function(object) {
	    geoStream(object, projectionStream(centroidStream$1));
	    return centroidStream$1.result();
	  };
	
	  path.projection = function(_) {
	    return arguments.length ? (projectionStream = _ == null ? (projection = null, identity$4) : (projection = _).stream, path) : projection;
	  };
	
	  path.context = function(_) {
	    if (!arguments.length) return context;
	    contextStream = _ == null ? (context = null, new PathString) : new PathContext(context = _);
	    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
	    return path;
	  };
	
	  path.pointRadius = function(_) {
	    if (!arguments.length) return pointRadius;
	    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
	    return path;
	  };
	
	  return path.projection(projection).context(context);
	};
	
	var clip = function(pointVisible, clipLine, interpolate, start) {
	  return function(rotate, sink) {
	    var line = clipLine(sink),
	        rotatedStart = rotate.invert(start[0], start[1]),
	        ringBuffer = clipBuffer(),
	        ringSink = clipLine(ringBuffer),
	        polygonStarted = false,
	        polygon,
	        segments,
	        ring;
	
	    var clip = {
	      point: point,
	      lineStart: lineStart,
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        clip.point = pointRing;
	        clip.lineStart = ringStart;
	        clip.lineEnd = ringEnd;
	        segments = [];
	        polygon = [];
	      },
	      polygonEnd: function() {
	        clip.point = point;
	        clip.lineStart = lineStart;
	        clip.lineEnd = lineEnd;
	        segments = merge(segments);
	        var startInside = polygonContains(polygon, rotatedStart);
	        if (segments.length) {
	          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
	          clipPolygon(segments, compareIntersection, startInside, interpolate, sink);
	        } else if (startInside) {
	          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
	          sink.lineStart();
	          interpolate(null, null, 1, sink);
	          sink.lineEnd();
	        }
	        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
	        segments = polygon = null;
	      },
	      sphere: function() {
	        sink.polygonStart();
	        sink.lineStart();
	        interpolate(null, null, 1, sink);
	        sink.lineEnd();
	        sink.polygonEnd();
	      }
	    };
	
	    function point(lambda, phi) {
	      var point = rotate(lambda, phi);
	      if (pointVisible(lambda = point[0], phi = point[1])) sink.point(lambda, phi);
	    }
	
	    function pointLine(lambda, phi) {
	      var point = rotate(lambda, phi);
	      line.point(point[0], point[1]);
	    }
	
	    function lineStart() {
	      clip.point = pointLine;
	      line.lineStart();
	    }
	
	    function lineEnd() {
	      clip.point = point;
	      line.lineEnd();
	    }
	
	    function pointRing(lambda, phi) {
	      ring.push([lambda, phi]);
	      var point = rotate(lambda, phi);
	      ringSink.point(point[0], point[1]);
	    }
	
	    function ringStart() {
	      ringSink.lineStart();
	      ring = [];
	    }
	
	    function ringEnd() {
	      pointRing(ring[0][0], ring[0][1]);
	      ringSink.lineEnd();
	
	      var clean = ringSink.clean(),
	          ringSegments = ringBuffer.result(),
	          i, n = ringSegments.length, m,
	          segment,
	          point;
	
	      ring.pop();
	      polygon.push(ring);
	      ring = null;
	
	      if (!n) return;
	
	      // No intersections.
	      if (clean & 1) {
	        segment = ringSegments[0];
	        if ((m = segment.length - 1) > 0) {
	          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
	          sink.lineStart();
	          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
	          sink.lineEnd();
	        }
	        return;
	      }
	
	      // Rejoin connected segments.
	      // TODO reuse ringBuffer.rejoin()?
	      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
	
	      segments.push(ringSegments.filter(validSegment));
	    }
	
	    return clip;
	  };
	};
	
	function validSegment(segment) {
	  return segment.length > 1;
	}
	
	// Intersections are sorted along the clip edge. For both antimeridian cutting
	// and circle clipping, the same comparison is used.
	function compareIntersection(a, b) {
	  return ((a = a.x)[0] < 0 ? a[1] - halfPi$2 - epsilon$2 : halfPi$2 - a[1])
	       - ((b = b.x)[0] < 0 ? b[1] - halfPi$2 - epsilon$2 : halfPi$2 - b[1]);
	}
	
	var clipAntimeridian = clip(
	  function() { return true; },
	  clipAntimeridianLine,
	  clipAntimeridianInterpolate,
	  [-pi$3, -halfPi$2]
	);
	
	// Takes a line and cuts into visible segments. Return values: 0 - there were
	// intersections or the line was empty; 1 - no intersections; 2 - there were
	// intersections, and the first and last segments should be rejoined.
	function clipAntimeridianLine(stream) {
	  var lambda0 = NaN,
	      phi0 = NaN,
	      sign0 = NaN,
	      clean; // no intersections
	
	  return {
	    lineStart: function() {
	      stream.lineStart();
	      clean = 1;
	    },
	    point: function(lambda1, phi1) {
	      var sign1 = lambda1 > 0 ? pi$3 : -pi$3,
	          delta = abs(lambda1 - lambda0);
	      if (abs(delta - pi$3) < epsilon$2) { // line crosses a pole
	        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi$2 : -halfPi$2);
	        stream.point(sign0, phi0);
	        stream.lineEnd();
	        stream.lineStart();
	        stream.point(sign1, phi0);
	        stream.point(lambda1, phi0);
	        clean = 0;
	      } else if (sign0 !== sign1 && delta >= pi$3) { // line crosses antimeridian
	        if (abs(lambda0 - sign0) < epsilon$2) lambda0 -= sign0 * epsilon$2; // handle degeneracies
	        if (abs(lambda1 - sign1) < epsilon$2) lambda1 -= sign1 * epsilon$2;
	        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
	        stream.point(sign0, phi0);
	        stream.lineEnd();
	        stream.lineStart();
	        stream.point(sign1, phi0);
	        clean = 0;
	      }
	      stream.point(lambda0 = lambda1, phi0 = phi1);
	      sign0 = sign1;
	    },
	    lineEnd: function() {
	      stream.lineEnd();
	      lambda0 = phi0 = NaN;
	    },
	    clean: function() {
	      return 2 - clean; // if intersections, rejoin first and last segments
	    }
	  };
	}
	
	function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
	  var cosPhi0,
	      cosPhi1,
	      sinLambda0Lambda1 = sin$1(lambda0 - lambda1);
	  return abs(sinLambda0Lambda1) > epsilon$2
	      ? atan((sin$1(phi0) * (cosPhi1 = cos$1(phi1)) * sin$1(lambda1)
	          - sin$1(phi1) * (cosPhi0 = cos$1(phi0)) * sin$1(lambda0))
	          / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
	      : (phi0 + phi1) / 2;
	}
	
	function clipAntimeridianInterpolate(from, to, direction, stream) {
	  var phi;
	  if (from == null) {
	    phi = direction * halfPi$2;
	    stream.point(-pi$3, phi);
	    stream.point(0, phi);
	    stream.point(pi$3, phi);
	    stream.point(pi$3, 0);
	    stream.point(pi$3, -phi);
	    stream.point(0, -phi);
	    stream.point(-pi$3, -phi);
	    stream.point(-pi$3, 0);
	    stream.point(-pi$3, phi);
	  } else if (abs(from[0] - to[0]) > epsilon$2) {
	    var lambda = from[0] < to[0] ? pi$3 : -pi$3;
	    phi = direction * lambda / 2;
	    stream.point(-lambda, phi);
	    stream.point(0, phi);
	    stream.point(lambda, phi);
	  } else {
	    stream.point(to[0], to[1]);
	  }
	}
	
	var clipCircle = function(radius, delta) {
	  var cr = cos$1(radius),
	      smallRadius = cr > 0,
	      notHemisphere = abs(cr) > epsilon$2; // TODO optimise for this common case
	
	  function interpolate(from, to, direction, stream) {
	    circleStream(stream, radius, delta, direction, from, to);
	  }
	
	  function visible(lambda, phi) {
	    return cos$1(lambda) * cos$1(phi) > cr;
	  }
	
	  // Takes a line and cuts into visible segments. Return values used for polygon
	  // clipping: 0 - there were intersections or the line was empty; 1 - no
	  // intersections 2 - there were intersections, and the first and last segments
	  // should be rejoined.
	  function clipLine(stream) {
	    var point0, // previous point
	        c0, // code for previous point
	        v0, // visibility of previous point
	        v00, // visibility of first point
	        clean; // no intersections
	    return {
	      lineStart: function() {
	        v00 = v0 = false;
	        clean = 1;
	      },
	      point: function(lambda, phi) {
	        var point1 = [lambda, phi],
	            point2,
	            v = visible(lambda, phi),
	            c = smallRadius
	              ? v ? 0 : code(lambda, phi)
	              : v ? code(lambda + (lambda < 0 ? pi$3 : -pi$3), phi) : 0;
	        if (!point0 && (v00 = v0 = v)) stream.lineStart();
	        // Handle degeneracies.
	        // TODO ignore if not clipping polygons.
	        if (v !== v0) {
	          point2 = intersect(point0, point1);
	          if (!point2 || pointEqual(point0, point2) || pointEqual(point1, point2)) {
	            point1[0] += epsilon$2;
	            point1[1] += epsilon$2;
	            v = visible(point1[0], point1[1]);
	          }
	        }
	        if (v !== v0) {
	          clean = 0;
	          if (v) {
	            // outside going in
	            stream.lineStart();
	            point2 = intersect(point1, point0);
	            stream.point(point2[0], point2[1]);
	          } else {
	            // inside going out
	            point2 = intersect(point0, point1);
	            stream.point(point2[0], point2[1]);
	            stream.lineEnd();
	          }
	          point0 = point2;
	        } else if (notHemisphere && point0 && smallRadius ^ v) {
	          var t;
	          // If the codes for two points are different, or are both zero,
	          // and there this segment intersects with the small circle.
	          if (!(c & c0) && (t = intersect(point1, point0, true))) {
	            clean = 0;
	            if (smallRadius) {
	              stream.lineStart();
	              stream.point(t[0][0], t[0][1]);
	              stream.point(t[1][0], t[1][1]);
	              stream.lineEnd();
	            } else {
	              stream.point(t[1][0], t[1][1]);
	              stream.lineEnd();
	              stream.lineStart();
	              stream.point(t[0][0], t[0][1]);
	            }
	          }
	        }
	        if (v && (!point0 || !pointEqual(point0, point1))) {
	          stream.point(point1[0], point1[1]);
	        }
	        point0 = point1, v0 = v, c0 = c;
	      },
	      lineEnd: function() {
	        if (v0) stream.lineEnd();
	        point0 = null;
	      },
	      // Rejoin first and last segments if there were intersections and the first
	      // and last points were visible.
	      clean: function() {
	        return clean | ((v00 && v0) << 1);
	      }
	    };
	  }
	
	  // Intersects the great circle between a and b with the clip circle.
	  function intersect(a, b, two) {
	    var pa = cartesian(a),
	        pb = cartesian(b);
	
	    // We have two planes, n1.p = d1 and n2.p = d2.
	    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
	    var n1 = [1, 0, 0], // normal
	        n2 = cartesianCross(pa, pb),
	        n2n2 = cartesianDot(n2, n2),
	        n1n2 = n2[0], // cartesianDot(n1, n2),
	        determinant = n2n2 - n1n2 * n1n2;
	
	    // Two polar points.
	    if (!determinant) return !two && a;
	
	    var c1 =  cr * n2n2 / determinant,
	        c2 = -cr * n1n2 / determinant,
	        n1xn2 = cartesianCross(n1, n2),
	        A = cartesianScale(n1, c1),
	        B = cartesianScale(n2, c2);
	    cartesianAddInPlace(A, B);
	
	    // Solve |p(t)|^2 = 1.
	    var u = n1xn2,
	        w = cartesianDot(A, u),
	        uu = cartesianDot(u, u),
	        t2 = w * w - uu * (cartesianDot(A, A) - 1);
	
	    if (t2 < 0) return;
	
	    var t = sqrt(t2),
	        q = cartesianScale(u, (-w - t) / uu);
	    cartesianAddInPlace(q, A);
	    q = spherical(q);
	
	    if (!two) return q;
	
	    // Two intersection points.
	    var lambda0 = a[0],
	        lambda1 = b[0],
	        phi0 = a[1],
	        phi1 = b[1],
	        z;
	
	    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;
	
	    var delta = lambda1 - lambda0,
	        polar = abs(delta - pi$3) < epsilon$2,
	        meridian = polar || delta < epsilon$2;
	
	    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;
	
	    // Check that the first point is between a and b.
	    if (meridian
	        ? polar
	          ? phi0 + phi1 > 0 ^ q[1] < (abs(q[0] - lambda0) < epsilon$2 ? phi0 : phi1)
	          : phi0 <= q[1] && q[1] <= phi1
	        : delta > pi$3 ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
	      var q1 = cartesianScale(u, (-w + t) / uu);
	      cartesianAddInPlace(q1, A);
	      return [q, spherical(q1)];
	    }
	  }
	
	  // Generates a 4-bit vector representing the location of a point relative to
	  // the small circle's bounding box.
	  function code(lambda, phi) {
	    var r = smallRadius ? radius : pi$3 - radius,
	        code = 0;
	    if (lambda < -r) code |= 1; // left
	    else if (lambda > r) code |= 2; // right
	    if (phi < -r) code |= 4; // below
	    else if (phi > r) code |= 8; // above
	    return code;
	  }
	
	  return clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi$3, radius - pi$3]);
	};
	
	var transform = function(methods) {
	  return {
	    stream: transformer(methods)
	  };
	};
	
	function transformer(methods) {
	  return function(stream) {
	    var s = new TransformStream;
	    for (var key in methods) s[key] = methods[key];
	    s.stream = stream;
	    return s;
	  };
	}
	
	function TransformStream() {}
	
	TransformStream.prototype = {
	  constructor: TransformStream,
	  point: function(x, y) { this.stream.point(x, y); },
	  sphere: function() { this.stream.sphere(); },
	  lineStart: function() { this.stream.lineStart(); },
	  lineEnd: function() { this.stream.lineEnd(); },
	  polygonStart: function() { this.stream.polygonStart(); },
	  polygonEnd: function() { this.stream.polygonEnd(); }
	};
	
	function fitExtent(projection, extent, object) {
	  var w = extent[1][0] - extent[0][0],
	      h = extent[1][1] - extent[0][1],
	      clip = projection.clipExtent && projection.clipExtent();
	
	  projection
	      .scale(150)
	      .translate([0, 0]);
	
	  if (clip != null) projection.clipExtent(null);
	
	  geoStream(object, projection.stream(boundsStream$1));
	
	  var b = boundsStream$1.result(),
	      k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
	      x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
	      y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
	
	  if (clip != null) projection.clipExtent(clip);
	
	  return projection
	      .scale(k * 150)
	      .translate([x, y]);
	}
	
	function fitSize(projection, size, object) {
	  return fitExtent(projection, [[0, 0], size], object);
	}
	
	var maxDepth = 16;
	var cosMinDistance = cos$1(30 * radians); // cos(minimum angular distance)
	
	var resample = function(project, delta2) {
	  return +delta2 ? resample$1(project, delta2) : resampleNone(project);
	};
	
	function resampleNone(project) {
	  return transformer({
	    point: function(x, y) {
	      x = project(x, y);
	      this.stream.point(x[0], x[1]);
	    }
	  });
	}
	
	function resample$1(project, delta2) {
	
	  function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
	    var dx = x1 - x0,
	        dy = y1 - y0,
	        d2 = dx * dx + dy * dy;
	    if (d2 > 4 * delta2 && depth--) {
	      var a = a0 + a1,
	          b = b0 + b1,
	          c = c0 + c1,
	          m = sqrt(a * a + b * b + c * c),
	          phi2 = asin(c /= m),
	          lambda2 = abs(abs(c) - 1) < epsilon$2 || abs(lambda0 - lambda1) < epsilon$2 ? (lambda0 + lambda1) / 2 : atan2(b, a),
	          p = project(lambda2, phi2),
	          x2 = p[0],
	          y2 = p[1],
	          dx2 = x2 - x0,
	          dy2 = y2 - y0,
	          dz = dy * dx2 - dx * dy2;
	      if (dz * dz / d2 > delta2 // perpendicular projected distance
	          || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
	          || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
	        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
	        stream.point(x2, y2);
	        resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
	      }
	    }
	  }
	  return function(stream) {
	    var lambda00, x00, y00, a00, b00, c00, // first point
	        lambda0, x0, y0, a0, b0, c0; // previous point
	
	    var resampleStream = {
	      point: point,
	      lineStart: lineStart,
	      lineEnd: lineEnd,
	      polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
	      polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
	    };
	
	    function point(x, y) {
	      x = project(x, y);
	      stream.point(x[0], x[1]);
	    }
	
	    function lineStart() {
	      x0 = NaN;
	      resampleStream.point = linePoint;
	      stream.lineStart();
	    }
	
	    function linePoint(lambda, phi) {
	      var c = cartesian([lambda, phi]), p = project(lambda, phi);
	      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
	      stream.point(x0, y0);
	    }
	
	    function lineEnd() {
	      resampleStream.point = point;
	      stream.lineEnd();
	    }
	
	    function ringStart() {
	      lineStart();
	      resampleStream.point = ringPoint;
	      resampleStream.lineEnd = ringEnd;
	    }
	
	    function ringPoint(lambda, phi) {
	      linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
	      resampleStream.point = linePoint;
	    }
	
	    function ringEnd() {
	      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
	      resampleStream.lineEnd = lineEnd;
	      lineEnd();
	    }
	
	    return resampleStream;
	  };
	}
	
	var transformRadians = transformer({
	  point: function(x, y) {
	    this.stream.point(x * radians, y * radians);
	  }
	});
	
	function projection(project) {
	  return projectionMutator(function() { return project; })();
	}
	
	function projectionMutator(projectAt) {
	  var project,
	      k = 150, // scale
	      x = 480, y = 250, // translate
	      dx, dy, lambda = 0, phi = 0, // center
	      deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, projectRotate, // rotate
	      theta = null, preclip = clipAntimeridian, // clip angle
	      x0 = null, y0, x1, y1, postclip = identity$4, // clip extent
	      delta2 = 0.5, projectResample = resample(projectTransform, delta2), // precision
	      cache,
	      cacheStream;
	
	  function projection(point) {
	    point = projectRotate(point[0] * radians, point[1] * radians);
	    return [point[0] * k + dx, dy - point[1] * k];
	  }
	
	  function invert(point) {
	    point = projectRotate.invert((point[0] - dx) / k, (dy - point[1]) / k);
	    return point && [point[0] * degrees$1, point[1] * degrees$1];
	  }
	
	  function projectTransform(x, y) {
	    return x = project(x, y), [x[0] * k + dx, dy - x[1] * k];
	  }
	
	  projection.stream = function(stream) {
	    return cache && cacheStream === stream ? cache : cache = transformRadians(preclip(rotate, projectResample(postclip(cacheStream = stream))));
	  };
	
	  projection.clipAngle = function(_) {
	    return arguments.length ? (preclip = +_ ? clipCircle(theta = _ * radians, 6 * radians) : (theta = null, clipAntimeridian), reset()) : theta * degrees$1;
	  };
	
	  projection.clipExtent = function(_) {
	    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$4) : clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
	  };
	
	  projection.scale = function(_) {
	    return arguments.length ? (k = +_, recenter()) : k;
	  };
	
	  projection.translate = function(_) {
	    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
	  };
	
	  projection.center = function(_) {
	    return arguments.length ? (lambda = _[0] % 360 * radians, phi = _[1] % 360 * radians, recenter()) : [lambda * degrees$1, phi * degrees$1];
	  };
	
	  projection.rotate = function(_) {
	    return arguments.length ? (deltaLambda = _[0] % 360 * radians, deltaPhi = _[1] % 360 * radians, deltaGamma = _.length > 2 ? _[2] % 360 * radians : 0, recenter()) : [deltaLambda * degrees$1, deltaPhi * degrees$1, deltaGamma * degrees$1];
	  };
	
	  projection.precision = function(_) {
	    return arguments.length ? (projectResample = resample(projectTransform, delta2 = _ * _), reset()) : sqrt(delta2);
	  };
	
	  projection.fitExtent = function(extent, object) {
	    return fitExtent(projection, extent, object);
	  };
	
	  projection.fitSize = function(size, object) {
	    return fitSize(projection, size, object);
	  };
	
	  function recenter() {
	    projectRotate = compose(rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma), project);
	    var center = project(lambda, phi);
	    dx = x - center[0] * k;
	    dy = y + center[1] * k;
	    return reset();
	  }
	
	  function reset() {
	    cache = cacheStream = null;
	    return projection;
	  }
	
	  return function() {
	    project = projectAt.apply(this, arguments);
	    projection.invert = project.invert && invert;
	    return recenter();
	  };
	}
	
	function conicProjection(projectAt) {
	  var phi0 = 0,
	      phi1 = pi$3 / 3,
	      m = projectionMutator(projectAt),
	      p = m(phi0, phi1);
	
	  p.parallels = function(_) {
	    return arguments.length ? m(phi0 = _[0] * radians, phi1 = _[1] * radians) : [phi0 * degrees$1, phi1 * degrees$1];
	  };
	
	  return p;
	}
	
	function cylindricalEqualAreaRaw(phi0) {
	  var cosPhi0 = cos$1(phi0);
	
	  function forward(lambda, phi) {
	    return [lambda * cosPhi0, sin$1(phi) / cosPhi0];
	  }
	
	  forward.invert = function(x, y) {
	    return [x / cosPhi0, asin(y * cosPhi0)];
	  };
	
	  return forward;
	}
	
	function conicEqualAreaRaw(y0, y1) {
	  var sy0 = sin$1(y0), n = (sy0 + sin$1(y1)) / 2;
	
	  // Are the parallels symmetrical around the Equator?
	  if (abs(n) < epsilon$2) return cylindricalEqualAreaRaw(y0);
	
	  var c = 1 + sy0 * (2 * n - sy0), r0 = sqrt(c) / n;
	
	  function project(x, y) {
	    var r = sqrt(c - 2 * n * sin$1(y)) / n;
	    return [r * sin$1(x *= n), r0 - r * cos$1(x)];
	  }
	
	  project.invert = function(x, y) {
	    var r0y = r0 - y;
	    return [atan2(x, abs(r0y)) / n * sign(r0y), asin((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
	  };
	
	  return project;
	}
	
	var conicEqualArea = function() {
	  return conicProjection(conicEqualAreaRaw)
	      .scale(155.424)
	      .center([0, 33.6442]);
	};
	
	var albers = function() {
	  return conicEqualArea()
	      .parallels([29.5, 45.5])
	      .scale(1070)
	      .translate([480, 250])
	      .rotate([96, 0])
	      .center([-0.6, 38.7]);
	};
	
	// The projections must have mutually exclusive clip regions on the sphere,
	// as this will avoid emitting interleaving lines and polygons.
	function multiplex(streams) {
	  var n = streams.length;
	  return {
	    point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
	    sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
	    lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
	    lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
	    polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
	    polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
	  };
	}
	
	// A composite projection for the United States, configured by default for
	// 960×500. The projection also works quite well at 960×600 if you change the
	// scale to 1285 and adjust the translate accordingly. The set of standard
	// parallels for each region comes from USGS, which is published here:
	// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
	var albersUsa = function() {
	  var cache,
	      cacheStream,
	      lower48 = albers(), lower48Point,
	      alaska = conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
	      hawaii = conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
	      point, pointStream = {point: function(x, y) { point = [x, y]; }};
	
	  function albersUsa(coordinates) {
	    var x = coordinates[0], y = coordinates[1];
	    return point = null,
	        (lower48Point.point(x, y), point)
	        || (alaskaPoint.point(x, y), point)
	        || (hawaiiPoint.point(x, y), point);
	  }
	
	  albersUsa.invert = function(coordinates) {
	    var k = lower48.scale(),
	        t = lower48.translate(),
	        x = (coordinates[0] - t[0]) / k,
	        y = (coordinates[1] - t[1]) / k;
	    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
	        : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
	        : lower48).invert(coordinates);
	  };
	
	  albersUsa.stream = function(stream) {
	    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
	  };
	
	  albersUsa.precision = function(_) {
	    if (!arguments.length) return lower48.precision();
	    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
	    return reset();
	  };
	
	  albersUsa.scale = function(_) {
	    if (!arguments.length) return lower48.scale();
	    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
	    return albersUsa.translate(lower48.translate());
	  };
	
	  albersUsa.translate = function(_) {
	    if (!arguments.length) return lower48.translate();
	    var k = lower48.scale(), x = +_[0], y = +_[1];
	
	    lower48Point = lower48
	        .translate(_)
	        .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
	        .stream(pointStream);
	
	    alaskaPoint = alaska
	        .translate([x - 0.307 * k, y + 0.201 * k])
	        .clipExtent([[x - 0.425 * k + epsilon$2, y + 0.120 * k + epsilon$2], [x - 0.214 * k - epsilon$2, y + 0.234 * k - epsilon$2]])
	        .stream(pointStream);
	
	    hawaiiPoint = hawaii
	        .translate([x - 0.205 * k, y + 0.212 * k])
	        .clipExtent([[x - 0.214 * k + epsilon$2, y + 0.166 * k + epsilon$2], [x - 0.115 * k - epsilon$2, y + 0.234 * k - epsilon$2]])
	        .stream(pointStream);
	
	    return reset();
	  };
	
	  albersUsa.fitExtent = function(extent, object) {
	    return fitExtent(albersUsa, extent, object);
	  };
	
	  albersUsa.fitSize = function(size, object) {
	    return fitSize(albersUsa, size, object);
	  };
	
	  function reset() {
	    cache = cacheStream = null;
	    return albersUsa;
	  }
	
	  return albersUsa.scale(1070);
	};
	
	function azimuthalRaw(scale) {
	  return function(x, y) {
	    var cx = cos$1(x),
	        cy = cos$1(y),
	        k = scale(cx * cy);
	    return [
	      k * cy * sin$1(x),
	      k * sin$1(y)
	    ];
	  }
	}
	
	function azimuthalInvert(angle) {
	  return function(x, y) {
	    var z = sqrt(x * x + y * y),
	        c = angle(z),
	        sc = sin$1(c),
	        cc = cos$1(c);
	    return [
	      atan2(x * sc, z * cc),
	      asin(z && y * sc / z)
	    ];
	  }
	}
	
	var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
	  return sqrt(2 / (1 + cxcy));
	});
	
	azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
	  return 2 * asin(z / 2);
	});
	
	var azimuthalEqualArea = function() {
	  return projection(azimuthalEqualAreaRaw)
	      .scale(124.75)
	      .clipAngle(180 - 1e-3);
	};
	
	var azimuthalEquidistantRaw = azimuthalRaw(function(c) {
	  return (c = acos(c)) && c / sin$1(c);
	});
	
	azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
	  return z;
	});
	
	var azimuthalEquidistant = function() {
	  return projection(azimuthalEquidistantRaw)
	      .scale(79.4188)
	      .clipAngle(180 - 1e-3);
	};
	
	function mercatorRaw(lambda, phi) {
	  return [lambda, log(tan((halfPi$2 + phi) / 2))];
	}
	
	mercatorRaw.invert = function(x, y) {
	  return [x, 2 * atan(exp(y)) - halfPi$2];
	};
	
	var mercator = function() {
	  return mercatorProjection(mercatorRaw)
	      .scale(961 / tau$3);
	};
	
	function mercatorProjection(project) {
	  var m = projection(project),
	      center = m.center,
	      scale = m.scale,
	      translate = m.translate,
	      clipExtent = m.clipExtent,
	      x0 = null, y0, x1, y1; // clip extent
	
	  m.scale = function(_) {
	    return arguments.length ? (scale(_), reclip()) : scale();
	  };
	
	  m.translate = function(_) {
	    return arguments.length ? (translate(_), reclip()) : translate();
	  };
	
	  m.center = function(_) {
	    return arguments.length ? (center(_), reclip()) : center();
	  };
	
	  m.clipExtent = function(_) {
	    return arguments.length ? ((_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1])), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
	  };
	
	  function reclip() {
	    var k = pi$3 * scale(),
	        t = m(rotation(m.rotate()).invert([0, 0]));
	    return clipExtent(x0 == null
	        ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw
	        ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]]
	        : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
	  }
	
	  return reclip();
	}
	
	function tany(y) {
	  return tan((halfPi$2 + y) / 2);
	}
	
	function conicConformalRaw(y0, y1) {
	  var cy0 = cos$1(y0),
	      n = y0 === y1 ? sin$1(y0) : log(cy0 / cos$1(y1)) / log(tany(y1) / tany(y0)),
	      f = cy0 * pow(tany(y0), n) / n;
	
	  if (!n) return mercatorRaw;
	
	  function project(x, y) {
	    if (f > 0) { if (y < -halfPi$2 + epsilon$2) y = -halfPi$2 + epsilon$2; }
	    else { if (y > halfPi$2 - epsilon$2) y = halfPi$2 - epsilon$2; }
	    var r = f / pow(tany(y), n);
	    return [r * sin$1(n * x), f - r * cos$1(n * x)];
	  }
	
	  project.invert = function(x, y) {
	    var fy = f - y, r = sign(n) * sqrt(x * x + fy * fy);
	    return [atan2(x, abs(fy)) / n * sign(fy), 2 * atan(pow(f / r, 1 / n)) - halfPi$2];
	  };
	
	  return project;
	}
	
	var conicConformal = function() {
	  return conicProjection(conicConformalRaw)
	      .scale(109.5)
	      .parallels([30, 30]);
	};
	
	function equirectangularRaw(lambda, phi) {
	  return [lambda, phi];
	}
	
	equirectangularRaw.invert = equirectangularRaw;
	
	var equirectangular = function() {
	  return projection(equirectangularRaw)
	      .scale(152.63);
	};
	
	function conicEquidistantRaw(y0, y1) {
	  var cy0 = cos$1(y0),
	      n = y0 === y1 ? sin$1(y0) : (cy0 - cos$1(y1)) / (y1 - y0),
	      g = cy0 / n + y0;
	
	  if (abs(n) < epsilon$2) return equirectangularRaw;
	
	  function project(x, y) {
	    var gy = g - y, nx = n * x;
	    return [gy * sin$1(nx), g - gy * cos$1(nx)];
	  }
	
	  project.invert = function(x, y) {
	    var gy = g - y;
	    return [atan2(x, abs(gy)) / n * sign(gy), g - sign(n) * sqrt(x * x + gy * gy)];
	  };
	
	  return project;
	}
	
	var conicEquidistant = function() {
	  return conicProjection(conicEquidistantRaw)
	      .scale(131.154)
	      .center([0, 13.9389]);
	};
	
	function gnomonicRaw(x, y) {
	  var cy = cos$1(y), k = cos$1(x) * cy;
	  return [cy * sin$1(x) / k, sin$1(y) / k];
	}
	
	gnomonicRaw.invert = azimuthalInvert(atan);
	
	var gnomonic = function() {
	  return projection(gnomonicRaw)
	      .scale(144.049)
	      .clipAngle(60);
	};
	
	function scaleTranslate(kx, ky, tx, ty) {
	  return kx === 1 && ky === 1 && tx === 0 && ty === 0 ? identity$4 : transformer({
	    point: function(x, y) {
	      this.stream.point(x * kx + tx, y * ky + ty);
	    }
	  });
	}
	
	var identity$5 = function() {
	  var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, transform = identity$4, // scale, translate and reflect
	      x0 = null, y0, x1, y1, clip = identity$4, // clip extent
	      cache,
	      cacheStream,
	      projection;
	
	  function reset() {
	    cache = cacheStream = null;
	    return projection;
	  }
	
	  return projection = {
	    stream: function(stream) {
	      return cache && cacheStream === stream ? cache : cache = transform(clip(cacheStream = stream));
	    },
	    clipExtent: function(_) {
	      return arguments.length ? (clip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$4) : clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
	    },
	    scale: function(_) {
	      return arguments.length ? (transform = scaleTranslate((k = +_) * sx, k * sy, tx, ty), reset()) : k;
	    },
	    translate: function(_) {
	      return arguments.length ? (transform = scaleTranslate(k * sx, k * sy, tx = +_[0], ty = +_[1]), reset()) : [tx, ty];
	    },
	    reflectX: function(_) {
	      return arguments.length ? (transform = scaleTranslate(k * (sx = _ ? -1 : 1), k * sy, tx, ty), reset()) : sx < 0;
	    },
	    reflectY: function(_) {
	      return arguments.length ? (transform = scaleTranslate(k * sx, k * (sy = _ ? -1 : 1), tx, ty), reset()) : sy < 0;
	    },
	    fitExtent: function(extent, object) {
	      return fitExtent(projection, extent, object);
	    },
	    fitSize: function(size, object) {
	      return fitSize(projection, size, object);
	    }
	  };
	};
	
	function orthographicRaw(x, y) {
	  return [cos$1(y) * sin$1(x), sin$1(y)];
	}
	
	orthographicRaw.invert = azimuthalInvert(asin);
	
	var orthographic = function() {
	  return projection(orthographicRaw)
	      .scale(249.5)
	      .clipAngle(90 + epsilon$2);
	};
	
	function stereographicRaw(x, y) {
	  var cy = cos$1(y), k = 1 + cos$1(x) * cy;
	  return [cy * sin$1(x) / k, sin$1(y) / k];
	}
	
	stereographicRaw.invert = azimuthalInvert(function(z) {
	  return 2 * atan(z);
	});
	
	var stereographic = function() {
	  return projection(stereographicRaw)
	      .scale(250)
	      .clipAngle(142);
	};
	
	function transverseMercatorRaw(lambda, phi) {
	  return [log(tan((halfPi$2 + phi) / 2)), -lambda];
	}
	
	transverseMercatorRaw.invert = function(x, y) {
	  return [-y, 2 * atan(exp(x)) - halfPi$2];
	};
	
	var transverseMercator = function() {
	  var m = mercatorProjection(transverseMercatorRaw),
	      center = m.center,
	      rotate = m.rotate;
	
	  m.center = function(_) {
	    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
	  };
	
	  m.rotate = function(_) {
	    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
	  };
	
	  return rotate([0, 0, 90])
	      .scale(159.155);
	};
	
	function defaultSeparation(a, b) {
	  return a.parent === b.parent ? 1 : 2;
	}
	
	function meanX(children) {
	  return children.reduce(meanXReduce, 0) / children.length;
	}
	
	function meanXReduce(x, c) {
	  return x + c.x;
	}
	
	function maxY(children) {
	  return 1 + children.reduce(maxYReduce, 0);
	}
	
	function maxYReduce(y, c) {
	  return Math.max(y, c.y);
	}
	
	function leafLeft(node) {
	  var children;
	  while (children = node.children) node = children[0];
	  return node;
	}
	
	function leafRight(node) {
	  var children;
	  while (children = node.children) node = children[children.length - 1];
	  return node;
	}
	
	var cluster = function() {
	  var separation = defaultSeparation,
	      dx = 1,
	      dy = 1,
	      nodeSize = false;
	
	  function cluster(root) {
	    var previousNode,
	        x = 0;
	
	    // First walk, computing the initial x & y values.
	    root.eachAfter(function(node) {
	      var children = node.children;
	      if (children) {
	        node.x = meanX(children);
	        node.y = maxY(children);
	      } else {
	        node.x = previousNode ? x += separation(node, previousNode) : 0;
	        node.y = 0;
	        previousNode = node;
	      }
	    });
	
	    var left = leafLeft(root),
	        right = leafRight(root),
	        x0 = left.x - separation(left, right) / 2,
	        x1 = right.x + separation(right, left) / 2;
	
	    // Second walk, normalizing x & y to the desired size.
	    return root.eachAfter(nodeSize ? function(node) {
	      node.x = (node.x - root.x) * dx;
	      node.y = (root.y - node.y) * dy;
	    } : function(node) {
	      node.x = (node.x - x0) / (x1 - x0) * dx;
	      node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
	    });
	  }
	
	  cluster.separation = function(x) {
	    return arguments.length ? (separation = x, cluster) : separation;
	  };
	
	  cluster.size = function(x) {
	    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? null : [dx, dy]);
	  };
	
	  cluster.nodeSize = function(x) {
	    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? [dx, dy] : null);
	  };
	
	  return cluster;
	};
	
	function count(node) {
	  var sum = 0,
	      children = node.children,
	      i = children && children.length;
	  if (!i) sum = 1;
	  else while (--i >= 0) sum += children[i].value;
	  node.value = sum;
	}
	
	var node_count = function() {
	  return this.eachAfter(count);
	};
	
	var node_each = function(callback) {
	  var node = this, current, next = [node], children, i, n;
	  do {
	    current = next.reverse(), next = [];
	    while (node = current.pop()) {
	      callback(node), children = node.children;
	      if (children) for (i = 0, n = children.length; i < n; ++i) {
	        next.push(children[i]);
	      }
	    }
	  } while (next.length);
	  return this;
	};
	
	var node_eachBefore = function(callback) {
	  var node = this, nodes = [node], children, i;
	  while (node = nodes.pop()) {
	    callback(node), children = node.children;
	    if (children) for (i = children.length - 1; i >= 0; --i) {
	      nodes.push(children[i]);
	    }
	  }
	  return this;
	};
	
	var node_eachAfter = function(callback) {
	  var node = this, nodes = [node], next = [], children, i, n;
	  while (node = nodes.pop()) {
	    next.push(node), children = node.children;
	    if (children) for (i = 0, n = children.length; i < n; ++i) {
	      nodes.push(children[i]);
	    }
	  }
	  while (node = next.pop()) {
	    callback(node);
	  }
	  return this;
	};
	
	var node_sum = function(value) {
	  return this.eachAfter(function(node) {
	    var sum = +value(node.data) || 0,
	        children = node.children,
	        i = children && children.length;
	    while (--i >= 0) sum += children[i].value;
	    node.value = sum;
	  });
	};
	
	var node_sort = function(compare) {
	  return this.eachBefore(function(node) {
	    if (node.children) {
	      node.children.sort(compare);
	    }
	  });
	};
	
	var node_path = function(end) {
	  var start = this,
	      ancestor = leastCommonAncestor(start, end),
	      nodes = [start];
	  while (start !== ancestor) {
	    start = start.parent;
	    nodes.push(start);
	  }
	  var k = nodes.length;
	  while (end !== ancestor) {
	    nodes.splice(k, 0, end);
	    end = end.parent;
	  }
	  return nodes;
	};
	
	function leastCommonAncestor(a, b) {
	  if (a === b) return a;
	  var aNodes = a.ancestors(),
	      bNodes = b.ancestors(),
	      c = null;
	  a = aNodes.pop();
	  b = bNodes.pop();
	  while (a === b) {
	    c = a;
	    a = aNodes.pop();
	    b = bNodes.pop();
	  }
	  return c;
	}
	
	var node_ancestors = function() {
	  var node = this, nodes = [node];
	  while (node = node.parent) {
	    nodes.push(node);
	  }
	  return nodes;
	};
	
	var node_descendants = function() {
	  var nodes = [];
	  this.each(function(node) {
	    nodes.push(node);
	  });
	  return nodes;
	};
	
	var node_leaves = function() {
	  var leaves = [];
	  this.eachBefore(function(node) {
	    if (!node.children) {
	      leaves.push(node);
	    }
	  });
	  return leaves;
	};
	
	var node_links = function() {
	  var root = this, links = [];
	  root.each(function(node) {
	    if (node !== root) { // Don’t include the root’s parent, if any.
	      links.push({source: node.parent, target: node});
	    }
	  });
	  return links;
	};
	
	function hierarchy(data, children) {
	  var root = new Node(data),
	      valued = +data.value && (root.value = data.value),
	      node,
	      nodes = [root],
	      child,
	      childs,
	      i,
	      n;
	
	  if (children == null) children = defaultChildren;
	
	  while (node = nodes.pop()) {
	    if (valued) node.value = +node.data.value;
	    if ((childs = children(node.data)) && (n = childs.length)) {
	      node.children = new Array(n);
	      for (i = n - 1; i >= 0; --i) {
	        nodes.push(child = node.children[i] = new Node(childs[i]));
	        child.parent = node;
	        child.depth = node.depth + 1;
	      }
	    }
	  }
	
	  return root.eachBefore(computeHeight);
	}
	
	function node_copy() {
	  return hierarchy(this).eachBefore(copyData);
	}
	
	function defaultChildren(d) {
	  return d.children;
	}
	
	function copyData(node) {
	  node.data = node.data.data;
	}
	
	function computeHeight(node) {
	  var height = 0;
	  do node.height = height;
	  while ((node = node.parent) && (node.height < ++height));
	}
	
	function Node(data) {
	  this.data = data;
	  this.depth =
	  this.height = 0;
	  this.parent = null;
	}
	
	Node.prototype = hierarchy.prototype = {
	  constructor: Node,
	  count: node_count,
	  each: node_each,
	  eachAfter: node_eachAfter,
	  eachBefore: node_eachBefore,
	  sum: node_sum,
	  sort: node_sort,
	  path: node_path,
	  ancestors: node_ancestors,
	  descendants: node_descendants,
	  leaves: node_leaves,
	  links: node_links,
	  copy: node_copy
	};
	
	function Node$2(value) {
	  this._ = value;
	  this.next = null;
	}
	
	var shuffle$1 = function(array) {
	  var i,
	      n = (array = array.slice()).length,
	      head = null,
	      node = head;
	
	  while (n) {
	    var next = new Node$2(array[n - 1]);
	    if (node) node = node.next = next;
	    else node = head = next;
	    array[i] = array[--n];
	  }
	
	  return {
	    head: head,
	    tail: node
	  };
	};
	
	var enclose = function(circles) {
	  return encloseN(shuffle$1(circles), []);
	};
	
	function encloses(a, b) {
	  var dx = b.x - a.x,
	      dy = b.y - a.y,
	      dr = a.r - b.r;
	  return dr * dr + 1e-6 > dx * dx + dy * dy;
	}
	
	// Returns the smallest circle that contains circles L and intersects circles B.
	function encloseN(L, B) {
	  var circle,
	      l0 = null,
	      l1 = L.head,
	      l2,
	      p1;
	
	  switch (B.length) {
	    case 1: circle = enclose1(B[0]); break;
	    case 2: circle = enclose2(B[0], B[1]); break;
	    case 3: circle = enclose3(B[0], B[1], B[2]); break;
	  }
	
	  while (l1) {
	    p1 = l1._, l2 = l1.next;
	    if (!circle || !encloses(circle, p1)) {
	
	      // Temporarily truncate L before l1.
	      if (l0) L.tail = l0, l0.next = null;
	      else L.head = L.tail = null;
	
	      B.push(p1);
	      circle = encloseN(L, B); // Note: reorders L!
	      B.pop();
	
	      // Move l1 to the front of L and reconnect the truncated list L.
	      if (L.head) l1.next = L.head, L.head = l1;
	      else l1.next = null, L.head = L.tail = l1;
	      l0 = L.tail, l0.next = l2;
	
	    } else {
	      l0 = l1;
	    }
	    l1 = l2;
	  }
	
	  L.tail = l0;
	  return circle;
	}
	
	function enclose1(a) {
	  return {
	    x: a.x,
	    y: a.y,
	    r: a.r
	  };
	}
	
	function enclose2(a, b) {
	  var x1 = a.x, y1 = a.y, r1 = a.r,
	      x2 = b.x, y2 = b.y, r2 = b.r,
	      x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1,
	      l = Math.sqrt(x21 * x21 + y21 * y21);
	  return {
	    x: (x1 + x2 + x21 / l * r21) / 2,
	    y: (y1 + y2 + y21 / l * r21) / 2,
	    r: (l + r1 + r2) / 2
	  };
	}
	
	function enclose3(a, b, c) {
	  var x1 = a.x, y1 = a.y, r1 = a.r,
	      x2 = b.x, y2 = b.y, r2 = b.r,
	      x3 = c.x, y3 = c.y, r3 = c.r,
	      a2 = 2 * (x1 - x2),
	      b2 = 2 * (y1 - y2),
	      c2 = 2 * (r2 - r1),
	      d2 = x1 * x1 + y1 * y1 - r1 * r1 - x2 * x2 - y2 * y2 + r2 * r2,
	      a3 = 2 * (x1 - x3),
	      b3 = 2 * (y1 - y3),
	      c3 = 2 * (r3 - r1),
	      d3 = x1 * x1 + y1 * y1 - r1 * r1 - x3 * x3 - y3 * y3 + r3 * r3,
	      ab = a3 * b2 - a2 * b3,
	      xa = (b2 * d3 - b3 * d2) / ab - x1,
	      xb = (b3 * c2 - b2 * c3) / ab,
	      ya = (a3 * d2 - a2 * d3) / ab - y1,
	      yb = (a2 * c3 - a3 * c2) / ab,
	      A = xb * xb + yb * yb - 1,
	      B = 2 * (xa * xb + ya * yb + r1),
	      C = xa * xa + ya * ya - r1 * r1,
	      r = (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A);
	  return {
	    x: xa + xb * r + x1,
	    y: ya + yb * r + y1,
	    r: r
	  };
	}
	
	function place(a, b, c) {
	  var ax = a.x,
	      ay = a.y,
	      da = b.r + c.r,
	      db = a.r + c.r,
	      dx = b.x - ax,
	      dy = b.y - ay,
	      dc = dx * dx + dy * dy;
	  if (dc) {
	    var x = 0.5 + ((db *= db) - (da *= da)) / (2 * dc),
	        y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
	    c.x = ax + x * dx + y * dy;
	    c.y = ay + x * dy - y * dx;
	  } else {
	    c.x = ax + db;
	    c.y = ay;
	  }
	}
	
	function intersects(a, b) {
	  var dx = b.x - a.x,
	      dy = b.y - a.y,
	      dr = a.r + b.r;
	  return dr * dr - 1e-6 > dx * dx + dy * dy;
	}
	
	function distance2(node, x, y) {
	  var a = node._,
	      b = node.next._,
	      ab = a.r + b.r,
	      dx = (a.x * b.r + b.x * a.r) / ab - x,
	      dy = (a.y * b.r + b.y * a.r) / ab - y;
	  return dx * dx + dy * dy;
	}
	
	function Node$1(circle) {
	  this._ = circle;
	  this.next = null;
	  this.previous = null;
	}
	
	function packEnclose(circles) {
	  if (!(n = circles.length)) return 0;
	
	  var a, b, c, n;
	
	  // Place the first circle.
	  a = circles[0], a.x = 0, a.y = 0;
	  if (!(n > 1)) return a.r;
	
	  // Place the second circle.
	  b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
	  if (!(n > 2)) return a.r + b.r;
	
	  // Place the third circle.
	  place(b, a, c = circles[2]);
	
	  // Initialize the weighted centroid.
	  var aa = a.r * a.r,
	      ba = b.r * b.r,
	      ca = c.r * c.r,
	      oa = aa + ba + ca,
	      ox = aa * a.x + ba * b.x + ca * c.x,
	      oy = aa * a.y + ba * b.y + ca * c.y,
	      cx, cy, i, j, k, sj, sk;
	
	  // Initialize the front-chain using the first three circles a, b and c.
	  a = new Node$1(a), b = new Node$1(b), c = new Node$1(c);
	  a.next = c.previous = b;
	  b.next = a.previous = c;
	  c.next = b.previous = a;
	
	  // Attempt to place each remaining circle…
	  pack: for (i = 3; i < n; ++i) {
	    place(a._, b._, c = circles[i]), c = new Node$1(c);
	
	    // Find the closest intersecting circle on the front-chain, if any.
	    // “Closeness” is determined by linear distance along the front-chain.
	    // “Ahead” or “behind” is likewise determined by linear distance.
	    j = b.next, k = a.previous, sj = b._.r, sk = a._.r;
	    do {
	      if (sj <= sk) {
	        if (intersects(j._, c._)) {
	          b = j, a.next = b, b.previous = a, --i;
	          continue pack;
	        }
	        sj += j._.r, j = j.next;
	      } else {
	        if (intersects(k._, c._)) {
	          a = k, a.next = b, b.previous = a, --i;
	          continue pack;
	        }
	        sk += k._.r, k = k.previous;
	      }
	    } while (j !== k.next);
	
	    // Success! Insert the new circle c between a and b.
	    c.previous = a, c.next = b, a.next = b.previous = b = c;
	
	    // Update the weighted centroid.
	    oa += ca = c._.r * c._.r;
	    ox += ca * c._.x;
	    oy += ca * c._.y;
	
	    // Compute the new closest circle pair to the centroid.
	    aa = distance2(a, cx = ox / oa, cy = oy / oa);
	    while ((c = c.next) !== b) {
	      if ((ca = distance2(c, cx, cy)) < aa) {
	        a = c, aa = ca;
	      }
	    }
	    b = a.next;
	  }
	
	  // Compute the enclosing circle of the front chain.
	  a = [b._], c = b; while ((c = c.next) !== b) a.push(c._); c = enclose(a);
	
	  // Translate the circles to put the enclosing circle around the origin.
	  for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;
	
	  return c.r;
	}
	
	var siblings = function(circles) {
	  packEnclose(circles);
	  return circles;
	};
	
	function optional(f) {
	  return f == null ? null : required(f);
	}
	
	function required(f) {
	  if (typeof f !== "function") throw new Error;
	  return f;
	}
	
	function constantZero() {
	  return 0;
	}
	
	var constant$8 = function(x) {
	  return function() {
	    return x;
	  };
	};
	
	function defaultRadius$1(d) {
	  return Math.sqrt(d.value);
	}
	
	var index$2 = function() {
	  var radius = null,
	      dx = 1,
	      dy = 1,
	      padding = constantZero;
	
	  function pack(root) {
	    root.x = dx / 2, root.y = dy / 2;
	    if (radius) {
	      root.eachBefore(radiusLeaf(radius))
	          .eachAfter(packChildren(padding, 0.5))
	          .eachBefore(translateChild(1));
	    } else {
	      root.eachBefore(radiusLeaf(defaultRadius$1))
	          .eachAfter(packChildren(constantZero, 1))
	          .eachAfter(packChildren(padding, root.r / Math.min(dx, dy)))
	          .eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
	    }
	    return root;
	  }
	
	  pack.radius = function(x) {
	    return arguments.length ? (radius = optional(x), pack) : radius;
	  };
	
	  pack.size = function(x) {
	    return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];
	  };
	
	  pack.padding = function(x) {
	    return arguments.length ? (padding = typeof x === "function" ? x : constant$8(+x), pack) : padding;
	  };
	
	  return pack;
	};
	
	function radiusLeaf(radius) {
	  return function(node) {
	    if (!node.children) {
	      node.r = Math.max(0, +radius(node) || 0);
	    }
	  };
	}
	
	function packChildren(padding, k) {
	  return function(node) {
	    if (children = node.children) {
	      var children,
	          i,
	          n = children.length,
	          r = padding(node) * k || 0,
	          e;
	
	      if (r) for (i = 0; i < n; ++i) children[i].r += r;
	      e = packEnclose(children);
	      if (r) for (i = 0; i < n; ++i) children[i].r -= r;
	      node.r = e + r;
	    }
	  };
	}
	
	function translateChild(k) {
	  return function(node) {
	    var parent = node.parent;
	    node.r *= k;
	    if (parent) {
	      node.x = parent.x + k * node.x;
	      node.y = parent.y + k * node.y;
	    }
	  };
	}
	
	var roundNode = function(node) {
	  node.x0 = Math.round(node.x0);
	  node.y0 = Math.round(node.y0);
	  node.x1 = Math.round(node.x1);
	  node.y1 = Math.round(node.y1);
	};
	
	var treemapDice = function(parent, x0, y0, x1, y1) {
	  var nodes = parent.children,
	      node,
	      i = -1,
	      n = nodes.length,
	      k = parent.value && (x1 - x0) / parent.value;
	
	  while (++i < n) {
	    node = nodes[i], node.y0 = y0, node.y1 = y1;
	    node.x0 = x0, node.x1 = x0 += node.value * k;
	  }
	};
	
	var partition = function() {
	  var dx = 1,
	      dy = 1,
	      padding = 0,
	      round = false;
	
	  function partition(root) {
	    var n = root.height + 1;
	    root.x0 =
	    root.y0 = padding;
	    root.x1 = dx;
	    root.y1 = dy / n;
	    root.eachBefore(positionNode(dy, n));
	    if (round) root.eachBefore(roundNode);
	    return root;
	  }
	
	  function positionNode(dy, n) {
	    return function(node) {
	      if (node.children) {
	        treemapDice(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
	      }
	      var x0 = node.x0,
	          y0 = node.y0,
	          x1 = node.x1 - padding,
	          y1 = node.y1 - padding;
	      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
	      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
	      node.x0 = x0;
	      node.y0 = y0;
	      node.x1 = x1;
	      node.y1 = y1;
	    };
	  }
	
	  partition.round = function(x) {
	    return arguments.length ? (round = !!x, partition) : round;
	  };
	
	  partition.size = function(x) {
	    return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
	  };
	
	  partition.padding = function(x) {
	    return arguments.length ? (padding = +x, partition) : padding;
	  };
	
	  return partition;
	};
	
	var keyPrefix$1 = "$";
	var preroot = {depth: -1};
	var ambiguous = {};
	
	function defaultId(d) {
	  return d.id;
	}
	
	function defaultParentId(d) {
	  return d.parentId;
	}
	
	var stratify = function() {
	  var id = defaultId,
	      parentId = defaultParentId;
	
	  function stratify(data) {
	    var d,
	        i,
	        n = data.length,
	        root,
	        parent,
	        node,
	        nodes = new Array(n),
	        nodeId,
	        nodeKey,
	        nodeByKey = {};
	
	    for (i = 0; i < n; ++i) {
	      d = data[i], node = nodes[i] = new Node(d);
	      if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
	        nodeKey = keyPrefix$1 + (node.id = nodeId);
	        nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;
	      }
	    }
	
	    for (i = 0; i < n; ++i) {
	      node = nodes[i], nodeId = parentId(data[i], i, data);
	      if (nodeId == null || !(nodeId += "")) {
	        if (root) throw new Error("multiple roots");
	        root = node;
	      } else {
	        parent = nodeByKey[keyPrefix$1 + nodeId];
	        if (!parent) throw new Error("missing: " + nodeId);
	        if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
	        if (parent.children) parent.children.push(node);
	        else parent.children = [node];
	        node.parent = parent;
	      }
	    }
	
	    if (!root) throw new Error("no root");
	    root.parent = preroot;
	    root.eachBefore(function(node) { node.depth = node.parent.depth + 1; --n; }).eachBefore(computeHeight);
	    root.parent = null;
	    if (n > 0) throw new Error("cycle");
	
	    return root;
	  }
	
	  stratify.id = function(x) {
	    return arguments.length ? (id = required(x), stratify) : id;
	  };
	
	  stratify.parentId = function(x) {
	    return arguments.length ? (parentId = required(x), stratify) : parentId;
	  };
	
	  return stratify;
	};
	
	function defaultSeparation$1(a, b) {
	  return a.parent === b.parent ? 1 : 2;
	}
	
	// function radialSeparation(a, b) {
	//   return (a.parent === b.parent ? 1 : 2) / a.depth;
	// }
	
	// This function is used to traverse the left contour of a subtree (or
	// subforest). It returns the successor of v on this contour. This successor is
	// either given by the leftmost child of v or by the thread of v. The function
	// returns null if and only if v is on the highest level of its subtree.
	function nextLeft(v) {
	  var children = v.children;
	  return children ? children[0] : v.t;
	}
	
	// This function works analogously to nextLeft.
	function nextRight(v) {
	  var children = v.children;
	  return children ? children[children.length - 1] : v.t;
	}
	
	// Shifts the current subtree rooted at w+. This is done by increasing
	// prelim(w+) and mod(w+) by shift.
	function moveSubtree(wm, wp, shift) {
	  var change = shift / (wp.i - wm.i);
	  wp.c -= change;
	  wp.s += shift;
	  wm.c += change;
	  wp.z += shift;
	  wp.m += shift;
	}
	
	// All other shifts, applied to the smaller subtrees between w- and w+, are
	// performed by this function. To prepare the shifts, we have to adjust
	// change(w+), shift(w+), and change(w-).
	function executeShifts(v) {
	  var shift = 0,
	      change = 0,
	      children = v.children,
	      i = children.length,
	      w;
	  while (--i >= 0) {
	    w = children[i];
	    w.z += shift;
	    w.m += shift;
	    shift += w.s + (change += w.c);
	  }
	}
	
	// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
	// returns the specified (default) ancestor.
	function nextAncestor(vim, v, ancestor) {
	  return vim.a.parent === v.parent ? vim.a : ancestor;
	}
	
	function TreeNode(node, i) {
	  this._ = node;
	  this.parent = null;
	  this.children = null;
	  this.A = null; // default ancestor
	  this.a = this; // ancestor
	  this.z = 0; // prelim
	  this.m = 0; // mod
	  this.c = 0; // change
	  this.s = 0; // shift
	  this.t = null; // thread
	  this.i = i; // number
	}
	
	TreeNode.prototype = Object.create(Node.prototype);
	
	function treeRoot(root) {
	  var tree = new TreeNode(root, 0),
	      node,
	      nodes = [tree],
	      child,
	      children,
	      i,
	      n;
	
	  while (node = nodes.pop()) {
	    if (children = node._.children) {
	      node.children = new Array(n = children.length);
	      for (i = n - 1; i >= 0; --i) {
	        nodes.push(child = node.children[i] = new TreeNode(children[i], i));
	        child.parent = node;
	      }
	    }
	  }
	
	  (tree.parent = new TreeNode(null, 0)).children = [tree];
	  return tree;
	}
	
	// Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
	var tree = function() {
	  var separation = defaultSeparation$1,
	      dx = 1,
	      dy = 1,
	      nodeSize = null;
	
	  function tree(root) {
	    var t = treeRoot(root);
	
	    // Compute the layout using Buchheim et al.’s algorithm.
	    t.eachAfter(firstWalk), t.parent.m = -t.z;
	    t.eachBefore(secondWalk);
	
	    // If a fixed node size is specified, scale x and y.
	    if (nodeSize) root.eachBefore(sizeNode);
	
	    // If a fixed tree size is specified, scale x and y based on the extent.
	    // Compute the left-most, right-most, and depth-most nodes for extents.
	    else {
	      var left = root,
	          right = root,
	          bottom = root;
	      root.eachBefore(function(node) {
	        if (node.x < left.x) left = node;
	        if (node.x > right.x) right = node;
	        if (node.depth > bottom.depth) bottom = node;
	      });
	      var s = left === right ? 1 : separation(left, right) / 2,
	          tx = s - left.x,
	          kx = dx / (right.x + s + tx),
	          ky = dy / (bottom.depth || 1);
	      root.eachBefore(function(node) {
	        node.x = (node.x + tx) * kx;
	        node.y = node.depth * ky;
	      });
	    }
	
	    return root;
	  }
	
	  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
	  // applied recursively to the children of v, as well as the function
	  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
	  // node v is placed to the midpoint of its outermost children.
	  function firstWalk(v) {
	    var children = v.children,
	        siblings = v.parent.children,
	        w = v.i ? siblings[v.i - 1] : null;
	    if (children) {
	      executeShifts(v);
	      var midpoint = (children[0].z + children[children.length - 1].z) / 2;
	      if (w) {
	        v.z = w.z + separation(v._, w._);
	        v.m = v.z - midpoint;
	      } else {
	        v.z = midpoint;
	      }
	    } else if (w) {
	      v.z = w.z + separation(v._, w._);
	    }
	    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
	  }
	
	  // Computes all real x-coordinates by summing up the modifiers recursively.
	  function secondWalk(v) {
	    v._.x = v.z + v.parent.m;
	    v.m += v.parent.m;
	  }
	
	  // The core of the algorithm. Here, a new subtree is combined with the
	  // previous subtrees. Threads are used to traverse the inside and outside
	  // contours of the left and right subtree up to the highest common level. The
	  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
	  // superscript o means outside and i means inside, the subscript - means left
	  // subtree and + means right subtree. For summing up the modifiers along the
	  // contour, we use respective variables si+, si-, so-, and so+. Whenever two
	  // nodes of the inside contours conflict, we compute the left one of the
	  // greatest uncommon ancestors using the function ANCESTOR and call MOVE
	  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
	  // Finally, we add a new thread (if necessary).
	  function apportion(v, w, ancestor) {
	    if (w) {
	      var vip = v,
	          vop = v,
	          vim = w,
	          vom = vip.parent.children[0],
	          sip = vip.m,
	          sop = vop.m,
	          sim = vim.m,
	          som = vom.m,
	          shift;
	      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
	        vom = nextLeft(vom);
	        vop = nextRight(vop);
	        vop.a = v;
	        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
	        if (shift > 0) {
	          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
	          sip += shift;
	          sop += shift;
	        }
	        sim += vim.m;
	        sip += vip.m;
	        som += vom.m;
	        sop += vop.m;
	      }
	      if (vim && !nextRight(vop)) {
	        vop.t = vim;
	        vop.m += sim - sop;
	      }
	      if (vip && !nextLeft(vom)) {
	        vom.t = vip;
	        vom.m += sip - som;
	        ancestor = v;
	      }
	    }
	    return ancestor;
	  }
	
	  function sizeNode(node) {
	    node.x *= dx;
	    node.y = node.depth * dy;
	  }
	
	  tree.separation = function(x) {
	    return arguments.length ? (separation = x, tree) : separation;
	  };
	
	  tree.size = function(x) {
	    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
	  };
	
	  tree.nodeSize = function(x) {
	    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
	  };
	
	  return tree;
	};
	
	var treemapSlice = function(parent, x0, y0, x1, y1) {
	  var nodes = parent.children,
	      node,
	      i = -1,
	      n = nodes.length,
	      k = parent.value && (y1 - y0) / parent.value;
	
	  while (++i < n) {
	    node = nodes[i], node.x0 = x0, node.x1 = x1;
	    node.y0 = y0, node.y1 = y0 += node.value * k;
	  }
	};
	
	var phi = (1 + Math.sqrt(5)) / 2;
	
	function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
	  var rows = [],
	      nodes = parent.children,
	      row,
	      nodeValue,
	      i0 = 0,
	      i1 = 0,
	      n = nodes.length,
	      dx, dy,
	      value = parent.value,
	      sumValue,
	      minValue,
	      maxValue,
	      newRatio,
	      minRatio,
	      alpha,
	      beta;
	
	  while (i0 < n) {
	    dx = x1 - x0, dy = y1 - y0;
	
	    // Find the next non-empty node.
	    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
	    minValue = maxValue = sumValue;
	    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
	    beta = sumValue * sumValue * alpha;
	    minRatio = Math.max(maxValue / beta, beta / minValue);
	
	    // Keep adding nodes while the aspect ratio maintains or improves.
	    for (; i1 < n; ++i1) {
	      sumValue += nodeValue = nodes[i1].value;
	      if (nodeValue < minValue) minValue = nodeValue;
	      if (nodeValue > maxValue) maxValue = nodeValue;
	      beta = sumValue * sumValue * alpha;
	      newRatio = Math.max(maxValue / beta, beta / minValue);
	      if (newRatio > minRatio) { sumValue -= nodeValue; break; }
	      minRatio = newRatio;
	    }
	
	    // Position and record the row orientation.
	    rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});
	    if (row.dice) treemapDice(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
	    else treemapSlice(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
	    value -= sumValue, i0 = i1;
	  }
	
	  return rows;
	}
	
	var squarify = ((function custom(ratio) {
	
	  function squarify(parent, x0, y0, x1, y1) {
	    squarifyRatio(ratio, parent, x0, y0, x1, y1);
	  }
	
	  squarify.ratio = function(x) {
	    return custom((x = +x) > 1 ? x : 1);
	  };
	
	  return squarify;
	}))(phi);
	
	var index$3 = function() {
	  var tile = squarify,
	      round = false,
	      dx = 1,
	      dy = 1,
	      paddingStack = [0],
	      paddingInner = constantZero,
	      paddingTop = constantZero,
	      paddingRight = constantZero,
	      paddingBottom = constantZero,
	      paddingLeft = constantZero;
	
	  function treemap(root) {
	    root.x0 =
	    root.y0 = 0;
	    root.x1 = dx;
	    root.y1 = dy;
	    root.eachBefore(positionNode);
	    paddingStack = [0];
	    if (round) root.eachBefore(roundNode);
	    return root;
	  }
	
	  function positionNode(node) {
	    var p = paddingStack[node.depth],
	        x0 = node.x0 + p,
	        y0 = node.y0 + p,
	        x1 = node.x1 - p,
	        y1 = node.y1 - p;
	    if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
	    if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
	    node.x0 = x0;
	    node.y0 = y0;
	    node.x1 = x1;
	    node.y1 = y1;
	    if (node.children) {
	      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
	      x0 += paddingLeft(node) - p;
	      y0 += paddingTop(node) - p;
	      x1 -= paddingRight(node) - p;
	      y1 -= paddingBottom(node) - p;
	      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
	      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
	      tile(node, x0, y0, x1, y1);
	    }
	  }
	
	  treemap.round = function(x) {
	    return arguments.length ? (round = !!x, treemap) : round;
	  };
	
	  treemap.size = function(x) {
	    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
	  };
	
	  treemap.tile = function(x) {
	    return arguments.length ? (tile = required(x), treemap) : tile;
	  };
	
	  treemap.padding = function(x) {
	    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
	  };
	
	  treemap.paddingInner = function(x) {
	    return arguments.length ? (paddingInner = typeof x === "function" ? x : constant$8(+x), treemap) : paddingInner;
	  };
	
	  treemap.paddingOuter = function(x) {
	    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
	  };
	
	  treemap.paddingTop = function(x) {
	    return arguments.length ? (paddingTop = typeof x === "function" ? x : constant$8(+x), treemap) : paddingTop;
	  };
	
	  treemap.paddingRight = function(x) {
	    return arguments.length ? (paddingRight = typeof x === "function" ? x : constant$8(+x), treemap) : paddingRight;
	  };
	
	  treemap.paddingBottom = function(x) {
	    return arguments.length ? (paddingBottom = typeof x === "function" ? x : constant$8(+x), treemap) : paddingBottom;
	  };
	
	  treemap.paddingLeft = function(x) {
	    return arguments.length ? (paddingLeft = typeof x === "function" ? x : constant$8(+x), treemap) : paddingLeft;
	  };
	
	  return treemap;
	};
	
	var binary = function(parent, x0, y0, x1, y1) {
	  var nodes = parent.children,
	      i, n = nodes.length,
	      sum, sums = new Array(n + 1);
	
	  for (sums[0] = sum = i = 0; i < n; ++i) {
	    sums[i + 1] = sum += nodes[i].value;
	  }
	
	  partition(0, n, parent.value, x0, y0, x1, y1);
	
	  function partition(i, j, value, x0, y0, x1, y1) {
	    if (i >= j - 1) {
	      var node = nodes[i];
	      node.x0 = x0, node.y0 = y0;
	      node.x1 = x1, node.y1 = y1;
	      return;
	    }
	
	    var valueOffset = sums[i],
	        valueTarget = (value / 2) + valueOffset,
	        k = i + 1,
	        hi = j - 1;
	
	    while (k < hi) {
	      var mid = k + hi >>> 1;
	      if (sums[mid] < valueTarget) k = mid + 1;
	      else hi = mid;
	    }
	
	    if ((valueTarget - sums[k - 1]) < (sums[k] - valueTarget) && i + 1 < k) --k;
	
	    var valueLeft = sums[k] - valueOffset,
	        valueRight = value - valueLeft;
	
	    if ((x1 - x0) > (y1 - y0)) {
	      var xk = (x0 * valueRight + x1 * valueLeft) / value;
	      partition(i, k, valueLeft, x0, y0, xk, y1);
	      partition(k, j, valueRight, xk, y0, x1, y1);
	    } else {
	      var yk = (y0 * valueRight + y1 * valueLeft) / value;
	      partition(i, k, valueLeft, x0, y0, x1, yk);
	      partition(k, j, valueRight, x0, yk, x1, y1);
	    }
	  }
	};
	
	var sliceDice = function(parent, x0, y0, x1, y1) {
	  (parent.depth & 1 ? treemapSlice : treemapDice)(parent, x0, y0, x1, y1);
	};
	
	var resquarify = ((function custom(ratio) {
	
	  function resquarify(parent, x0, y0, x1, y1) {
	    if ((rows = parent._squarify) && (rows.ratio === ratio)) {
	      var rows,
	          row,
	          nodes,
	          i,
	          j = -1,
	          n,
	          m = rows.length,
	          value = parent.value;
	
	      while (++j < m) {
	        row = rows[j], nodes = row.children;
	        for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
	        if (row.dice) treemapDice(row, x0, y0, x1, y0 += (y1 - y0) * row.value / value);
	        else treemapSlice(row, x0, y0, x0 += (x1 - x0) * row.value / value, y1);
	        value -= row.value;
	      }
	    } else {
	      parent._squarify = rows = squarifyRatio(ratio, parent, x0, y0, x1, y1);
	      rows.ratio = ratio;
	    }
	  }
	
	  resquarify.ratio = function(x) {
	    return custom((x = +x) > 1 ? x : 1);
	  };
	
	  return resquarify;
	}))(phi);
	
	var area$1 = function(polygon) {
	  var i = -1,
	      n = polygon.length,
	      a,
	      b = polygon[n - 1],
	      area = 0;
	
	  while (++i < n) {
	    a = b;
	    b = polygon[i];
	    area += a[1] * b[0] - a[0] * b[1];
	  }
	
	  return area / 2;
	};
	
	var centroid$1 = function(polygon) {
	  var i = -1,
	      n = polygon.length,
	      x = 0,
	      y = 0,
	      a,
	      b = polygon[n - 1],
	      c,
	      k = 0;
	
	  while (++i < n) {
	    a = b;
	    b = polygon[i];
	    k += c = a[0] * b[1] - b[0] * a[1];
	    x += (a[0] + b[0]) * c;
	    y += (a[1] + b[1]) * c;
	  }
	
	  return k *= 3, [x / k, y / k];
	};
	
	// Returns the 2D cross product of AB and AC vectors, i.e., the z-component of
	// the 3D cross product in a quadrant I Cartesian coordinate system (+x is
	// right, +y is up). Returns a positive value if ABC is counter-clockwise,
	// negative if clockwise, and zero if the points are collinear.
	var cross$1 = function(a, b, c) {
	  return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
	};
	
	function lexicographicOrder(a, b) {
	  return a[0] - b[0] || a[1] - b[1];
	}
	
	// Computes the upper convex hull per the monotone chain algorithm.
	// Assumes points.length >= 3, is sorted by x, unique in y.
	// Returns an array of indices into points in left-to-right order.
	function computeUpperHullIndexes(points) {
	  var n = points.length,
	      indexes = [0, 1],
	      size = 2;
	
	  for (var i = 2; i < n; ++i) {
	    while (size > 1 && cross$1(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0) --size;
	    indexes[size++] = i;
	  }
	
	  return indexes.slice(0, size); // remove popped points
	}
	
	var hull = function(points) {
	  if ((n = points.length) < 3) return null;
	
	  var i,
	      n,
	      sortedPoints = new Array(n),
	      flippedPoints = new Array(n);
	
	  for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
	  sortedPoints.sort(lexicographicOrder);
	  for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];
	
	  var upperIndexes = computeUpperHullIndexes(sortedPoints),
	      lowerIndexes = computeUpperHullIndexes(flippedPoints);
	
	  // Construct the hull polygon, removing possible duplicate endpoints.
	  var skipLeft = lowerIndexes[0] === upperIndexes[0],
	      skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1],
	      hull = [];
	
	  // Add upper hull in right-to-l order.
	  // Then add lower hull in left-to-right order.
	  for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
	  for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);
	
	  return hull;
	};
	
	var contains$1 = function(polygon, point) {
	  var n = polygon.length,
	      p = polygon[n - 1],
	      x = point[0], y = point[1],
	      x0 = p[0], y0 = p[1],
	      x1, y1,
	      inside = false;
	
	  for (var i = 0; i < n; ++i) {
	    p = polygon[i], x1 = p[0], y1 = p[1];
	    if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside;
	    x0 = x1, y0 = y1;
	  }
	
	  return inside;
	};
	
	var length$2 = function(polygon) {
	  var i = -1,
	      n = polygon.length,
	      b = polygon[n - 1],
	      xa,
	      ya,
	      xb = b[0],
	      yb = b[1],
	      perimeter = 0;
	
	  while (++i < n) {
	    xa = xb;
	    ya = yb;
	    b = polygon[i];
	    xb = b[0];
	    yb = b[1];
	    xa -= xb;
	    ya -= yb;
	    perimeter += Math.sqrt(xa * xa + ya * ya);
	  }
	
	  return perimeter;
	};
	
	var slice$3 = [].slice;
	
	var noabort = {};
	
	function Queue(size) {
	  this._size = size;
	  this._call =
	  this._error = null;
	  this._tasks = [];
	  this._data = [];
	  this._waiting =
	  this._active =
	  this._ended =
	  this._start = 0; // inside a synchronous task callback?
	}
	
	Queue.prototype = queue.prototype = {
	  constructor: Queue,
	  defer: function(callback) {
	    if (typeof callback !== "function") throw new Error("invalid callback");
	    if (this._call) throw new Error("defer after await");
	    if (this._error != null) return this;
	    var t = slice$3.call(arguments, 1);
	    t.push(callback);
	    ++this._waiting, this._tasks.push(t);
	    poke$1(this);
	    return this;
	  },
	  abort: function() {
	    if (this._error == null) abort(this, new Error("abort"));
	    return this;
	  },
	  await: function(callback) {
	    if (typeof callback !== "function") throw new Error("invalid callback");
	    if (this._call) throw new Error("multiple await");
	    this._call = function(error, results) { callback.apply(null, [error].concat(results)); };
	    maybeNotify(this);
	    return this;
	  },
	  awaitAll: function(callback) {
	    if (typeof callback !== "function") throw new Error("invalid callback");
	    if (this._call) throw new Error("multiple await");
	    this._call = callback;
	    maybeNotify(this);
	    return this;
	  }
	};
	
	function poke$1(q) {
	  if (!q._start) {
	    try { start$1(q); } // let the current task complete
	    catch (e) {
	      if (q._tasks[q._ended + q._active - 1]) abort(q, e); // task errored synchronously
	      else if (!q._data) throw e; // await callback errored synchronously
	    }
	  }
	}
	
	function start$1(q) {
	  while (q._start = q._waiting && q._active < q._size) {
	    var i = q._ended + q._active,
	        t = q._tasks[i],
	        j = t.length - 1,
	        c = t[j];
	    t[j] = end(q, i);
	    --q._waiting, ++q._active;
	    t = c.apply(null, t);
	    if (!q._tasks[i]) continue; // task finished synchronously
	    q._tasks[i] = t || noabort;
	  }
	}
	
	function end(q, i) {
	  return function(e, r) {
	    if (!q._tasks[i]) return; // ignore multiple callbacks
	    --q._active, ++q._ended;
	    q._tasks[i] = null;
	    if (q._error != null) return; // ignore secondary errors
	    if (e != null) {
	      abort(q, e);
	    } else {
	      q._data[i] = r;
	      if (q._waiting) poke$1(q);
	      else maybeNotify(q);
	    }
	  };
	}
	
	function abort(q, e) {
	  var i = q._tasks.length, t;
	  q._error = e; // ignore active callbacks
	  q._data = undefined; // allow gc
	  q._waiting = NaN; // prevent starting
	
	  while (--i >= 0) {
	    if (t = q._tasks[i]) {
	      q._tasks[i] = null;
	      if (t.abort) {
	        try { t.abort(); }
	        catch (e) { /* ignore */ }
	      }
	    }
	  }
	
	  q._active = NaN; // allow notification
	  maybeNotify(q);
	}
	
	function maybeNotify(q) {
	  if (!q._active && q._call) {
	    var d = q._data;
	    q._data = undefined; // allow gc
	    q._call(q._error, d);
	  }
	}
	
	function queue(concurrency) {
	  if (concurrency == null) concurrency = Infinity;
	  else if (!((concurrency = +concurrency) >= 1)) throw new Error("invalid concurrency");
	  return new Queue(concurrency);
	}
	
	var defaultSource$1 = function() {
	  return Math.random();
	};
	
	var uniform = ((function sourceRandomUniform(source) {
	  function randomUniform(min, max) {
	    min = min == null ? 0 : +min;
	    max = max == null ? 1 : +max;
	    if (arguments.length === 1) max = min, min = 0;
	    else max -= min;
	    return function() {
	      return source() * max + min;
	    };
	  }
	
	  randomUniform.source = sourceRandomUniform;
	
	  return randomUniform;
	}))(defaultSource$1);
	
	var normal = ((function sourceRandomNormal(source) {
	  function randomNormal(mu, sigma) {
	    var x, r;
	    mu = mu == null ? 0 : +mu;
	    sigma = sigma == null ? 1 : +sigma;
	    return function() {
	      var y;
	
	      // If available, use the second previously-generated uniform random.
	      if (x != null) y = x, x = null;
	
	      // Otherwise, generate a new x and y.
	      else do {
	        x = source() * 2 - 1;
	        y = source() * 2 - 1;
	        r = x * x + y * y;
	      } while (!r || r > 1);
	
	      return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
	    };
	  }
	
	  randomNormal.source = sourceRandomNormal;
	
	  return randomNormal;
	}))(defaultSource$1);
	
	var logNormal = ((function sourceRandomLogNormal(source) {
	  function randomLogNormal() {
	    var randomNormal = normal.source(source).apply(this, arguments);
	    return function() {
	      return Math.exp(randomNormal());
	    };
	  }
	
	  randomLogNormal.source = sourceRandomLogNormal;
	
	  return randomLogNormal;
	}))(defaultSource$1);
	
	var irwinHall = ((function sourceRandomIrwinHall(source) {
	  function randomIrwinHall(n) {
	    return function() {
	      for (var sum = 0, i = 0; i < n; ++i) sum += source();
	      return sum;
	    };
	  }
	
	  randomIrwinHall.source = sourceRandomIrwinHall;
	
	  return randomIrwinHall;
	}))(defaultSource$1);
	
	var bates = ((function sourceRandomBates(source) {
	  function randomBates(n) {
	    var randomIrwinHall = irwinHall.source(source)(n);
	    return function() {
	      return randomIrwinHall() / n;
	    };
	  }
	
	  randomBates.source = sourceRandomBates;
	
	  return randomBates;
	}))(defaultSource$1);
	
	var exponential$1 = ((function sourceRandomExponential(source) {
	  function randomExponential(lambda) {
	    return function() {
	      return -Math.log(1 - source()) / lambda;
	    };
	  }
	
	  randomExponential.source = sourceRandomExponential;
	
	  return randomExponential;
	}))(defaultSource$1);
	
	var request = function(url, callback) {
	  var request,
	      event = dispatch("beforesend", "progress", "load", "error"),
	      mimeType,
	      headers = map$1(),
	      xhr = new XMLHttpRequest,
	      user = null,
	      password = null,
	      response,
	      responseType,
	      timeout = 0;
	
	  // If IE does not support CORS, use XDomainRequest.
	  if (typeof XDomainRequest !== "undefined"
	      && !("withCredentials" in xhr)
	      && /^(http(s)?:)?\/\//.test(url)) xhr = new XDomainRequest;
	
	  "onload" in xhr
	      ? xhr.onload = xhr.onerror = xhr.ontimeout = respond
	      : xhr.onreadystatechange = function(o) { xhr.readyState > 3 && respond(o); };
	
	  function respond(o) {
	    var status = xhr.status, result;
	    if (!status && hasResponse(xhr)
	        || status >= 200 && status < 300
	        || status === 304) {
	      if (response) {
	        try {
	          result = response.call(request, xhr);
	        } catch (e) {
	          event.call("error", request, e);
	          return;
	        }
	      } else {
	        result = xhr;
	      }
	      event.call("load", request, result);
	    } else {
	      event.call("error", request, o);
	    }
	  }
	
	  xhr.onprogress = function(e) {
	    event.call("progress", request, e);
	  };
	
	  request = {
	    header: function(name, value) {
	      name = (name + "").toLowerCase();
	      if (arguments.length < 2) return headers.get(name);
	      if (value == null) headers.remove(name);
	      else headers.set(name, value + "");
	      return request;
	    },
	
	    // If mimeType is non-null and no Accept header is set, a default is used.
	    mimeType: function(value) {
	      if (!arguments.length) return mimeType;
	      mimeType = value == null ? null : value + "";
	      return request;
	    },
	
	    // Specifies what type the response value should take;
	    // for instance, arraybuffer, blob, document, or text.
	    responseType: function(value) {
	      if (!arguments.length) return responseType;
	      responseType = value;
	      return request;
	    },
	
	    timeout: function(value) {
	      if (!arguments.length) return timeout;
	      timeout = +value;
	      return request;
	    },
	
	    user: function(value) {
	      return arguments.length < 1 ? user : (user = value == null ? null : value + "", request);
	    },
	
	    password: function(value) {
	      return arguments.length < 1 ? password : (password = value == null ? null : value + "", request);
	    },
	
	    // Specify how to convert the response content to a specific type;
	    // changes the callback value on "load" events.
	    response: function(value) {
	      response = value;
	      return request;
	    },
	
	    // Alias for send("GET", …).
	    get: function(data, callback) {
	      return request.send("GET", data, callback);
	    },
	
	    // Alias for send("POST", …).
	    post: function(data, callback) {
	      return request.send("POST", data, callback);
	    },
	
	    // If callback is non-null, it will be used for error and load events.
	    send: function(method, data, callback) {
	      xhr.open(method, url, true, user, password);
	      if (mimeType != null && !headers.has("accept")) headers.set("accept", mimeType + ",*/*");
	      if (xhr.setRequestHeader) headers.each(function(value, name) { xhr.setRequestHeader(name, value); });
	      if (mimeType != null && xhr.overrideMimeType) xhr.overrideMimeType(mimeType);
	      if (responseType != null) xhr.responseType = responseType;
	      if (timeout > 0) xhr.timeout = timeout;
	      if (callback == null && typeof data === "function") callback = data, data = null;
	      if (callback != null && callback.length === 1) callback = fixCallback(callback);
	      if (callback != null) request.on("error", callback).on("load", function(xhr) { callback(null, xhr); });
	      event.call("beforesend", request, xhr);
	      xhr.send(data == null ? null : data);
	      return request;
	    },
	
	    abort: function() {
	      xhr.abort();
	      return request;
	    },
	
	    on: function() {
	      var value = event.on.apply(event, arguments);
	      return value === event ? request : value;
	    }
	  };
	
	  if (callback != null) {
	    if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
	    return request.get(callback);
	  }
	
	  return request;
	};
	
	function fixCallback(callback) {
	  return function(error, xhr) {
	    callback(error == null ? xhr : null);
	  };
	}
	
	function hasResponse(xhr) {
	  var type = xhr.responseType;
	  return type && type !== "text"
	      ? xhr.response // null on error
	      : xhr.responseText; // "" on error
	}
	
	var type$1 = function(defaultMimeType, response) {
	  return function(url, callback) {
	    var r = request(url).mimeType(defaultMimeType).response(response);
	    if (callback != null) {
	      if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
	      return r.get(callback);
	    }
	    return r;
	  };
	};
	
	var html = type$1("text/html", function(xhr) {
	  return document.createRange().createContextualFragment(xhr.responseText);
	});
	
	var json = type$1("application/json", function(xhr) {
	  return JSON.parse(xhr.responseText);
	});
	
	var text = type$1("text/plain", function(xhr) {
	  return xhr.responseText;
	});
	
	var xml = type$1("application/xml", function(xhr) {
	  var xml = xhr.responseXML;
	  if (!xml) throw new Error("parse error");
	  return xml;
	});
	
	var dsv$1 = function(defaultMimeType, parse) {
	  return function(url, row, callback) {
	    if (arguments.length < 3) callback = row, row = null;
	    var r = request(url).mimeType(defaultMimeType);
	    r.row = function(_) { return arguments.length ? r.response(responseOf(parse, row = _)) : row; };
	    r.row(row);
	    return callback ? r.get(callback) : r;
	  };
	};
	
	function responseOf(parse, row) {
	  return function(request$$1) {
	    return parse(request$$1.responseText, row);
	  };
	}
	
	var csv$1 = dsv$1("text/csv", csvParse);
	
	var tsv$1 = dsv$1("text/tab-separated-values", tsvParse);
	
	var array$2 = Array.prototype;
	
	var map$3 = array$2.map;
	var slice$4 = array$2.slice;
	
	var implicit = {name: "implicit"};
	
	function ordinal(range) {
	  var index = map$1(),
	      domain = [],
	      unknown = implicit;
	
	  range = range == null ? [] : slice$4.call(range);
	
	  function scale(d) {
	    var key = d + "", i = index.get(key);
	    if (!i) {
	      if (unknown !== implicit) return unknown;
	      index.set(key, i = domain.push(d));
	    }
	    return range[(i - 1) % range.length];
	  }
	
	  scale.domain = function(_) {
	    if (!arguments.length) return domain.slice();
	    domain = [], index = map$1();
	    var i = -1, n = _.length, d, key;
	    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
	    return scale;
	  };
	
	  scale.range = function(_) {
	    return arguments.length ? (range = slice$4.call(_), scale) : range.slice();
	  };
	
	  scale.unknown = function(_) {
	    return arguments.length ? (unknown = _, scale) : unknown;
	  };
	
	  scale.copy = function() {
	    return ordinal()
	        .domain(domain)
	        .range(range)
	        .unknown(unknown);
	  };
	
	  return scale;
	}
	
	function band() {
	  var scale = ordinal().unknown(undefined),
	      domain = scale.domain,
	      ordinalRange = scale.range,
	      range$$1 = [0, 1],
	      step,
	      bandwidth,
	      round = false,
	      paddingInner = 0,
	      paddingOuter = 0,
	      align = 0.5;
	
	  delete scale.unknown;
	
	  function rescale() {
	    var n = domain().length,
	        reverse = range$$1[1] < range$$1[0],
	        start = range$$1[reverse - 0],
	        stop = range$$1[1 - reverse];
	    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
	    if (round) step = Math.floor(step);
	    start += (stop - start - step * (n - paddingInner)) * align;
	    bandwidth = step * (1 - paddingInner);
	    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
	    var values = sequence(n).map(function(i) { return start + step * i; });
	    return ordinalRange(reverse ? values.reverse() : values);
	  }
	
	  scale.domain = function(_) {
	    return arguments.length ? (domain(_), rescale()) : domain();
	  };
	
	  scale.range = function(_) {
	    return arguments.length ? (range$$1 = [+_[0], +_[1]], rescale()) : range$$1.slice();
	  };
	
	  scale.rangeRound = function(_) {
	    return range$$1 = [+_[0], +_[1]], round = true, rescale();
	  };
	
	  scale.bandwidth = function() {
	    return bandwidth;
	  };
	
	  scale.step = function() {
	    return step;
	  };
	
	  scale.round = function(_) {
	    return arguments.length ? (round = !!_, rescale()) : round;
	  };
	
	  scale.padding = function(_) {
	    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
	  };
	
	  scale.paddingInner = function(_) {
	    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
	  };
	
	  scale.paddingOuter = function(_) {
	    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
	  };
	
	  scale.align = function(_) {
	    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
	  };
	
	  scale.copy = function() {
	    return band()
	        .domain(domain())
	        .range(range$$1)
	        .round(round)
	        .paddingInner(paddingInner)
	        .paddingOuter(paddingOuter)
	        .align(align);
	  };
	
	  return rescale();
	}
	
	function pointish(scale) {
	  var copy = scale.copy;
	
	  scale.padding = scale.paddingOuter;
	  delete scale.paddingInner;
	  delete scale.paddingOuter;
	
	  scale.copy = function() {
	    return pointish(copy());
	  };
	
	  return scale;
	}
	
	function point$1() {
	  return pointish(band().paddingInner(1));
	}
	
	var constant$9 = function(x) {
	  return function() {
	    return x;
	  };
	};
	
	var number$1 = function(x) {
	  return +x;
	};
	
	var unit = [0, 1];
	
	function deinterpolateLinear(a, b) {
	  return (b -= (a = +a))
	      ? function(x) { return (x - a) / b; }
	      : constant$9(b);
	}
	
	function deinterpolateClamp(deinterpolate) {
	  return function(a, b) {
	    var d = deinterpolate(a = +a, b = +b);
	    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
	  };
	}
	
	function reinterpolateClamp(reinterpolate) {
	  return function(a, b) {
	    var r = reinterpolate(a = +a, b = +b);
	    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
	  };
	}
	
	function bimap(domain, range$$1, deinterpolate, reinterpolate) {
	  var d0 = domain[0], d1 = domain[1], r0 = range$$1[0], r1 = range$$1[1];
	  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
	  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
	  return function(x) { return r0(d0(x)); };
	}
	
	function polymap(domain, range$$1, deinterpolate, reinterpolate) {
	  var j = Math.min(domain.length, range$$1.length) - 1,
	      d = new Array(j),
	      r = new Array(j),
	      i = -1;
	
	  // Reverse descending domains.
	  if (domain[j] < domain[0]) {
	    domain = domain.slice().reverse();
	    range$$1 = range$$1.slice().reverse();
	  }
	
	  while (++i < j) {
	    d[i] = deinterpolate(domain[i], domain[i + 1]);
	    r[i] = reinterpolate(range$$1[i], range$$1[i + 1]);
	  }
	
	  return function(x) {
	    var i = bisectRight(domain, x, 1, j) - 1;
	    return r[i](d[i](x));
	  };
	}
	
	function copy(source, target) {
	  return target
	      .domain(source.domain())
	      .range(source.range())
	      .interpolate(source.interpolate())
	      .clamp(source.clamp());
	}
	
	// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
	// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
	function continuous(deinterpolate, reinterpolate) {
	  var domain = unit,
	      range$$1 = unit,
	      interpolate$$1 = interpolateValue,
	      clamp = false,
	      piecewise,
	      output,
	      input;
	
	  function rescale() {
	    piecewise = Math.min(domain.length, range$$1.length) > 2 ? polymap : bimap;
	    output = input = null;
	    return scale;
	  }
	
	  function scale(x) {
	    return (output || (output = piecewise(domain, range$$1, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate$$1)))(+x);
	  }
	
	  scale.invert = function(y) {
	    return (input || (input = piecewise(range$$1, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
	  };
	
	  scale.domain = function(_) {
	    return arguments.length ? (domain = map$3.call(_, number$1), rescale()) : domain.slice();
	  };
	
	  scale.range = function(_) {
	    return arguments.length ? (range$$1 = slice$4.call(_), rescale()) : range$$1.slice();
	  };
	
	  scale.rangeRound = function(_) {
	    return range$$1 = slice$4.call(_), interpolate$$1 = interpolateRound, rescale();
	  };
	
	  scale.clamp = function(_) {
	    return arguments.length ? (clamp = !!_, rescale()) : clamp;
	  };
	
	  scale.interpolate = function(_) {
	    return arguments.length ? (interpolate$$1 = _, rescale()) : interpolate$$1;
	  };
	
	  return rescale();
	}
	
	var tickFormat = function(domain, count, specifier) {
	  var start = domain[0],
	      stop = domain[domain.length - 1],
	      step = tickStep(start, stop, count == null ? 10 : count),
	      precision;
	  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
	  switch (specifier.type) {
	    case "s": {
	      var value = Math.max(Math.abs(start), Math.abs(stop));
	      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
	      return exports.formatPrefix(specifier, value);
	    }
	    case "":
	    case "e":
	    case "g":
	    case "p":
	    case "r": {
	      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
	      break;
	    }
	    case "f":
	    case "%": {
	      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
	      break;
	    }
	  }
	  return exports.format(specifier);
	};
	
	function linearish(scale) {
	  var domain = scale.domain;
	
	  scale.ticks = function(count) {
	    var d = domain();
	    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
	  };
	
	  scale.tickFormat = function(count, specifier) {
	    return tickFormat(domain(), count, specifier);
	  };
	
	  scale.nice = function(count) {
	    if (count == null) count = 10;
	
	    var d = domain(),
	        i0 = 0,
	        i1 = d.length - 1,
	        start = d[i0],
	        stop = d[i1],
	        step;
	
	    if (stop < start) {
	      step = start, start = stop, stop = step;
	      step = i0, i0 = i1, i1 = step;
	    }
	
	    step = tickIncrement(start, stop, count);
	
	    if (step > 0) {
	      start = Math.floor(start / step) * step;
	      stop = Math.ceil(stop / step) * step;
	      step = tickIncrement(start, stop, count);
	    } else if (step < 0) {
	      start = Math.ceil(start * step) / step;
	      stop = Math.floor(stop * step) / step;
	      step = tickIncrement(start, stop, count);
	    }
	
	    if (step > 0) {
	      d[i0] = Math.floor(start / step) * step;
	      d[i1] = Math.ceil(stop / step) * step;
	      domain(d);
	    } else if (step < 0) {
	      d[i0] = Math.ceil(start * step) / step;
	      d[i1] = Math.floor(stop * step) / step;
	      domain(d);
	    }
	
	    return scale;
	  };
	
	  return scale;
	}
	
	function linear$2() {
	  var scale = continuous(deinterpolateLinear, reinterpolate);
	
	  scale.copy = function() {
	    return copy(scale, linear$2());
	  };
	
	  return linearish(scale);
	}
	
	function identity$6() {
	  var domain = [0, 1];
	
	  function scale(x) {
	    return +x;
	  }
	
	  scale.invert = scale;
	
	  scale.domain = scale.range = function(_) {
	    return arguments.length ? (domain = map$3.call(_, number$1), scale) : domain.slice();
	  };
	
	  scale.copy = function() {
	    return identity$6().domain(domain);
	  };
	
	  return linearish(scale);
	}
	
	var nice = function(domain, interval) {
	  domain = domain.slice();
	
	  var i0 = 0,
	      i1 = domain.length - 1,
	      x0 = domain[i0],
	      x1 = domain[i1],
	      t;
	
	  if (x1 < x0) {
	    t = i0, i0 = i1, i1 = t;
	    t = x0, x0 = x1, x1 = t;
	  }
	
	  domain[i0] = interval.floor(x0);
	  domain[i1] = interval.ceil(x1);
	  return domain;
	};
	
	function deinterpolate(a, b) {
	  return (b = Math.log(b / a))
	      ? function(x) { return Math.log(x / a) / b; }
	      : constant$9(b);
	}
	
	function reinterpolate$1(a, b) {
	  return a < 0
	      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
	      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
	}
	
	function pow10(x) {
	  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
	}
	
	function powp(base) {
	  return base === 10 ? pow10
	      : base === Math.E ? Math.exp
	      : function(x) { return Math.pow(base, x); };
	}
	
	function logp(base) {
	  return base === Math.E ? Math.log
	      : base === 10 && Math.log10
	      || base === 2 && Math.log2
	      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
	}
	
	function reflect(f) {
	  return function(x) {
	    return -f(-x);
	  };
	}
	
	function log$1() {
	  var scale = continuous(deinterpolate, reinterpolate$1).domain([1, 10]),
	      domain = scale.domain,
	      base = 10,
	      logs = logp(10),
	      pows = powp(10);
	
	  function rescale() {
	    logs = logp(base), pows = powp(base);
	    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
	    return scale;
	  }
	
	  scale.base = function(_) {
	    return arguments.length ? (base = +_, rescale()) : base;
	  };
	
	  scale.domain = function(_) {
	    return arguments.length ? (domain(_), rescale()) : domain();
	  };
	
	  scale.ticks = function(count) {
	    var d = domain(),
	        u = d[0],
	        v = d[d.length - 1],
	        r;
	
	    if (r = v < u) i = u, u = v, v = i;
	
	    var i = logs(u),
	        j = logs(v),
	        p,
	        k,
	        t,
	        n = count == null ? 10 : +count,
	        z = [];
	
	    if (!(base % 1) && j - i < n) {
	      i = Math.round(i) - 1, j = Math.round(j) + 1;
	      if (u > 0) for (; i < j; ++i) {
	        for (k = 1, p = pows(i); k < base; ++k) {
	          t = p * k;
	          if (t < u) continue;
	          if (t > v) break;
	          z.push(t);
	        }
	      } else for (; i < j; ++i) {
	        for (k = base - 1, p = pows(i); k >= 1; --k) {
	          t = p * k;
	          if (t < u) continue;
	          if (t > v) break;
	          z.push(t);
	        }
	      }
	    } else {
	      z = ticks(i, j, Math.min(j - i, n)).map(pows);
	    }
	
	    return r ? z.reverse() : z;
	  };
	
	  scale.tickFormat = function(count, specifier) {
	    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
	    if (typeof specifier !== "function") specifier = exports.format(specifier);
	    if (count === Infinity) return specifier;
	    if (count == null) count = 10;
	    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
	    return function(d) {
	      var i = d / pows(Math.round(logs(d)));
	      if (i * base < base - 0.5) i *= base;
	      return i <= k ? specifier(d) : "";
	    };
	  };
	
	  scale.nice = function() {
	    return domain(nice(domain(), {
	      floor: function(x) { return pows(Math.floor(logs(x))); },
	      ceil: function(x) { return pows(Math.ceil(logs(x))); }
	    }));
	  };
	
	  scale.copy = function() {
	    return copy(scale, log$1().base(base));
	  };
	
	  return scale;
	}
	
	function raise$1(x, exponent) {
	  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
	}
	
	function pow$1() {
	  var exponent = 1,
	      scale = continuous(deinterpolate, reinterpolate),
	      domain = scale.domain;
	
	  function deinterpolate(a, b) {
	    return (b = raise$1(b, exponent) - (a = raise$1(a, exponent)))
	        ? function(x) { return (raise$1(x, exponent) - a) / b; }
	        : constant$9(b);
	  }
	
	  function reinterpolate(a, b) {
	    b = raise$1(b, exponent) - (a = raise$1(a, exponent));
	    return function(t) { return raise$1(a + b * t, 1 / exponent); };
	  }
	
	  scale.exponent = function(_) {
	    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
	  };
	
	  scale.copy = function() {
	    return copy(scale, pow$1().exponent(exponent));
	  };
	
	  return linearish(scale);
	}
	
	function sqrt$1() {
	  return pow$1().exponent(0.5);
	}
	
	function quantile$$1() {
	  var domain = [],
	      range$$1 = [],
	      thresholds = [];
	
	  function rescale() {
	    var i = 0, n = Math.max(1, range$$1.length);
	    thresholds = new Array(n - 1);
	    while (++i < n) thresholds[i - 1] = threshold(domain, i / n);
	    return scale;
	  }
	
	  function scale(x) {
	    if (!isNaN(x = +x)) return range$$1[bisectRight(thresholds, x)];
	  }
	
	  scale.invertExtent = function(y) {
	    var i = range$$1.indexOf(y);
	    return i < 0 ? [NaN, NaN] : [
	      i > 0 ? thresholds[i - 1] : domain[0],
	      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
	    ];
	  };
	
	  scale.domain = function(_) {
	    if (!arguments.length) return domain.slice();
	    domain = [];
	    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
	    domain.sort(ascending);
	    return rescale();
	  };
	
	  scale.range = function(_) {
	    return arguments.length ? (range$$1 = slice$4.call(_), rescale()) : range$$1.slice();
	  };
	
	  scale.quantiles = function() {
	    return thresholds.slice();
	  };
	
	  scale.copy = function() {
	    return quantile$$1()
	        .domain(domain)
	        .range(range$$1);
	  };
	
	  return scale;
	}
	
	function quantize$1() {
	  var x0 = 0,
	      x1 = 1,
	      n = 1,
	      domain = [0.5],
	      range$$1 = [0, 1];
	
	  function scale(x) {
	    if (x <= x) return range$$1[bisectRight(domain, x, 0, n)];
	  }
	
	  function rescale() {
	    var i = -1;
	    domain = new Array(n);
	    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
	    return scale;
	  }
	
	  scale.domain = function(_) {
	    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
	  };
	
	  scale.range = function(_) {
	    return arguments.length ? (n = (range$$1 = slice$4.call(_)).length - 1, rescale()) : range$$1.slice();
	  };
	
	  scale.invertExtent = function(y) {
	    var i = range$$1.indexOf(y);
	    return i < 0 ? [NaN, NaN]
	        : i < 1 ? [x0, domain[0]]
	        : i >= n ? [domain[n - 1], x1]
	        : [domain[i - 1], domain[i]];
	  };
	
	  scale.copy = function() {
	    return quantize$1()
	        .domain([x0, x1])
	        .range(range$$1);
	  };
	
	  return linearish(scale);
	}
	
	function threshold$1() {
	  var domain = [0.5],
	      range$$1 = [0, 1],
	      n = 1;
	
	  function scale(x) {
	    if (x <= x) return range$$1[bisectRight(domain, x, 0, n)];
	  }
	
	  scale.domain = function(_) {
	    return arguments.length ? (domain = slice$4.call(_), n = Math.min(domain.length, range$$1.length - 1), scale) : domain.slice();
	  };
	
	  scale.range = function(_) {
	    return arguments.length ? (range$$1 = slice$4.call(_), n = Math.min(domain.length, range$$1.length - 1), scale) : range$$1.slice();
	  };
	
	  scale.invertExtent = function(y) {
	    var i = range$$1.indexOf(y);
	    return [domain[i - 1], domain[i]];
	  };
	
	  scale.copy = function() {
	    return threshold$1()
	        .domain(domain)
	        .range(range$$1);
	  };
	
	  return scale;
	}
	
	var t0$1 = new Date;
	var t1$1 = new Date;
	
	function newInterval(floori, offseti, count, field) {
	
	  function interval(date) {
	    return floori(date = new Date(+date)), date;
	  }
	
	  interval.floor = interval;
	
	  interval.ceil = function(date) {
	    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
	  };
	
	  interval.round = function(date) {
	    var d0 = interval(date),
	        d1 = interval.ceil(date);
	    return date - d0 < d1 - date ? d0 : d1;
	  };
	
	  interval.offset = function(date, step) {
	    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
	  };
	
	  interval.range = function(start, stop, step) {
	    var range = [];
	    start = interval.ceil(start);
	    step = step == null ? 1 : Math.floor(step);
	    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
	    do range.push(new Date(+start)); while (offseti(start, step), floori(start), start < stop)
	    return range;
	  };
	
	  interval.filter = function(test) {
	    return newInterval(function(date) {
	      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
	    }, function(date, step) {
	      if (date >= date) while (--step >= 0) while (offseti(date, 1), !test(date)) {} // eslint-disable-line no-empty
	    });
	  };
	
	  if (count) {
	    interval.count = function(start, end) {
	      t0$1.setTime(+start), t1$1.setTime(+end);
	      floori(t0$1), floori(t1$1);
	      return Math.floor(count(t0$1, t1$1));
	    };
	
	    interval.every = function(step) {
	      step = Math.floor(step);
	      return !isFinite(step) || !(step > 0) ? null
	          : !(step > 1) ? interval
	          : interval.filter(field
	              ? function(d) { return field(d) % step === 0; }
	              : function(d) { return interval.count(0, d) % step === 0; });
	    };
	  }
	
	  return interval;
	}
	
	var millisecond = newInterval(function() {
	  // noop
	}, function(date, step) {
	  date.setTime(+date + step);
	}, function(start, end) {
	  return end - start;
	});
	
	// An optimized implementation for this simple case.
	millisecond.every = function(k) {
	  k = Math.floor(k);
	  if (!isFinite(k) || !(k > 0)) return null;
	  if (!(k > 1)) return millisecond;
	  return newInterval(function(date) {
	    date.setTime(Math.floor(date / k) * k);
	  }, function(date, step) {
	    date.setTime(+date + step * k);
	  }, function(start, end) {
	    return (end - start) / k;
	  });
	};
	
	var milliseconds = millisecond.range;
	
	var durationSecond$1 = 1e3;
	var durationMinute$1 = 6e4;
	var durationHour$1 = 36e5;
	var durationDay$1 = 864e5;
	var durationWeek$1 = 6048e5;
	
	var second = newInterval(function(date) {
	  date.setTime(Math.floor(date / durationSecond$1) * durationSecond$1);
	}, function(date, step) {
	  date.setTime(+date + step * durationSecond$1);
	}, function(start, end) {
	  return (end - start) / durationSecond$1;
	}, function(date) {
	  return date.getUTCSeconds();
	});
	
	var seconds = second.range;
	
	var minute = newInterval(function(date) {
	  date.setTime(Math.floor(date / durationMinute$1) * durationMinute$1);
	}, function(date, step) {
	  date.setTime(+date + step * durationMinute$1);
	}, function(start, end) {
	  return (end - start) / durationMinute$1;
	}, function(date) {
	  return date.getMinutes();
	});
	
	var minutes = minute.range;
	
	var hour = newInterval(function(date) {
	  var offset = date.getTimezoneOffset() * durationMinute$1 % durationHour$1;
	  if (offset < 0) offset += durationHour$1;
	  date.setTime(Math.floor((+date - offset) / durationHour$1) * durationHour$1 + offset);
	}, function(date, step) {
	  date.setTime(+date + step * durationHour$1);
	}, function(start, end) {
	  return (end - start) / durationHour$1;
	}, function(date) {
	  return date.getHours();
	});
	
	var hours = hour.range;
	
	var day = newInterval(function(date) {
	  date.setHours(0, 0, 0, 0);
	}, function(date, step) {
	  date.setDate(date.getDate() + step);
	}, function(start, end) {
	  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute$1) / durationDay$1;
	}, function(date) {
	  return date.getDate() - 1;
	});
	
	var days = day.range;
	
	function weekday(i) {
	  return newInterval(function(date) {
	    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
	    date.setHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setDate(date.getDate() + step * 7);
	  }, function(start, end) {
	    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute$1) / durationWeek$1;
	  });
	}
	
	var sunday = weekday(0);
	var monday = weekday(1);
	var tuesday = weekday(2);
	var wednesday = weekday(3);
	var thursday = weekday(4);
	var friday = weekday(5);
	var saturday = weekday(6);
	
	var sundays = sunday.range;
	var mondays = monday.range;
	var tuesdays = tuesday.range;
	var wednesdays = wednesday.range;
	var thursdays = thursday.range;
	var fridays = friday.range;
	var saturdays = saturday.range;
	
	var month = newInterval(function(date) {
	  date.setDate(1);
	  date.setHours(0, 0, 0, 0);
	}, function(date, step) {
	  date.setMonth(date.getMonth() + step);
	}, function(start, end) {
	  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
	}, function(date) {
	  return date.getMonth();
	});
	
	var months = month.range;
	
	var year = newInterval(function(date) {
	  date.setMonth(0, 1);
	  date.setHours(0, 0, 0, 0);
	}, function(date, step) {
	  date.setFullYear(date.getFullYear() + step);
	}, function(start, end) {
	  return end.getFullYear() - start.getFullYear();
	}, function(date) {
	  return date.getFullYear();
	});
	
	// An optimized implementation for this simple case.
	year.every = function(k) {
	  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
	    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
	    date.setMonth(0, 1);
	    date.setHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setFullYear(date.getFullYear() + step * k);
	  });
	};
	
	var years = year.range;
	
	var utcMinute = newInterval(function(date) {
	  date.setUTCSeconds(0, 0);
	}, function(date, step) {
	  date.setTime(+date + step * durationMinute$1);
	}, function(start, end) {
	  return (end - start) / durationMinute$1;
	}, function(date) {
	  return date.getUTCMinutes();
	});
	
	var utcMinutes = utcMinute.range;
	
	var utcHour = newInterval(function(date) {
	  date.setUTCMinutes(0, 0, 0);
	}, function(date, step) {
	  date.setTime(+date + step * durationHour$1);
	}, function(start, end) {
	  return (end - start) / durationHour$1;
	}, function(date) {
	  return date.getUTCHours();
	});
	
	var utcHours = utcHour.range;
	
	var utcDay = newInterval(function(date) {
	  date.setUTCHours(0, 0, 0, 0);
	}, function(date, step) {
	  date.setUTCDate(date.getUTCDate() + step);
	}, function(start, end) {
	  return (end - start) / durationDay$1;
	}, function(date) {
	  return date.getUTCDate() - 1;
	});
	
	var utcDays = utcDay.range;
	
	function utcWeekday(i) {
	  return newInterval(function(date) {
	    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
	    date.setUTCHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setUTCDate(date.getUTCDate() + step * 7);
	  }, function(start, end) {
	    return (end - start) / durationWeek$1;
	  });
	}
	
	var utcSunday = utcWeekday(0);
	var utcMonday = utcWeekday(1);
	var utcTuesday = utcWeekday(2);
	var utcWednesday = utcWeekday(3);
	var utcThursday = utcWeekday(4);
	var utcFriday = utcWeekday(5);
	var utcSaturday = utcWeekday(6);
	
	var utcSundays = utcSunday.range;
	var utcMondays = utcMonday.range;
	var utcTuesdays = utcTuesday.range;
	var utcWednesdays = utcWednesday.range;
	var utcThursdays = utcThursday.range;
	var utcFridays = utcFriday.range;
	var utcSaturdays = utcSaturday.range;
	
	var utcMonth = newInterval(function(date) {
	  date.setUTCDate(1);
	  date.setUTCHours(0, 0, 0, 0);
	}, function(date, step) {
	  date.setUTCMonth(date.getUTCMonth() + step);
	}, function(start, end) {
	  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
	}, function(date) {
	  return date.getUTCMonth();
	});
	
	var utcMonths = utcMonth.range;
	
	var utcYear = newInterval(function(date) {
	  date.setUTCMonth(0, 1);
	  date.setUTCHours(0, 0, 0, 0);
	}, function(date, step) {
	  date.setUTCFullYear(date.getUTCFullYear() + step);
	}, function(start, end) {
	  return end.getUTCFullYear() - start.getUTCFullYear();
	}, function(date) {
	  return date.getUTCFullYear();
	});
	
	// An optimized implementation for this simple case.
	utcYear.every = function(k) {
	  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
	    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
	    date.setUTCMonth(0, 1);
	    date.setUTCHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setUTCFullYear(date.getUTCFullYear() + step * k);
	  });
	};
	
	var utcYears = utcYear.range;
	
	function localDate(d) {
	  if (0 <= d.y && d.y < 100) {
	    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
	    date.setFullYear(d.y);
	    return date;
	  }
	  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
	}
	
	function utcDate(d) {
	  if (0 <= d.y && d.y < 100) {
	    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
	    date.setUTCFullYear(d.y);
	    return date;
	  }
	  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
	}
	
	function newYear(y) {
	  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
	}
	
	function formatLocale$1(locale) {
	  var locale_dateTime = locale.dateTime,
	      locale_date = locale.date,
	      locale_time = locale.time,
	      locale_periods = locale.periods,
	      locale_weekdays = locale.days,
	      locale_shortWeekdays = locale.shortDays,
	      locale_months = locale.months,
	      locale_shortMonths = locale.shortMonths;
	
	  var periodRe = formatRe(locale_periods),
	      periodLookup = formatLookup(locale_periods),
	      weekdayRe = formatRe(locale_weekdays),
	      weekdayLookup = formatLookup(locale_weekdays),
	      shortWeekdayRe = formatRe(locale_shortWeekdays),
	      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
	      monthRe = formatRe(locale_months),
	      monthLookup = formatLookup(locale_months),
	      shortMonthRe = formatRe(locale_shortMonths),
	      shortMonthLookup = formatLookup(locale_shortMonths);
	
	  var formats = {
	    "a": formatShortWeekday,
	    "A": formatWeekday,
	    "b": formatShortMonth,
	    "B": formatMonth,
	    "c": null,
	    "d": formatDayOfMonth,
	    "e": formatDayOfMonth,
	    "H": formatHour24,
	    "I": formatHour12,
	    "j": formatDayOfYear,
	    "L": formatMilliseconds,
	    "m": formatMonthNumber,
	    "M": formatMinutes,
	    "p": formatPeriod,
	    "S": formatSeconds,
	    "U": formatWeekNumberSunday,
	    "w": formatWeekdayNumber,
	    "W": formatWeekNumberMonday,
	    "x": null,
	    "X": null,
	    "y": formatYear,
	    "Y": formatFullYear,
	    "Z": formatZone,
	    "%": formatLiteralPercent
	  };
	
	  var utcFormats = {
	    "a": formatUTCShortWeekday,
	    "A": formatUTCWeekday,
	    "b": formatUTCShortMonth,
	    "B": formatUTCMonth,
	    "c": null,
	    "d": formatUTCDayOfMonth,
	    "e": formatUTCDayOfMonth,
	    "H": formatUTCHour24,
	    "I": formatUTCHour12,
	    "j": formatUTCDayOfYear,
	    "L": formatUTCMilliseconds,
	    "m": formatUTCMonthNumber,
	    "M": formatUTCMinutes,
	    "p": formatUTCPeriod,
	    "S": formatUTCSeconds,
	    "U": formatUTCWeekNumberSunday,
	    "w": formatUTCWeekdayNumber,
	    "W": formatUTCWeekNumberMonday,
	    "x": null,
	    "X": null,
	    "y": formatUTCYear,
	    "Y": formatUTCFullYear,
	    "Z": formatUTCZone,
	    "%": formatLiteralPercent
	  };
	
	  var parses = {
	    "a": parseShortWeekday,
	    "A": parseWeekday,
	    "b": parseShortMonth,
	    "B": parseMonth,
	    "c": parseLocaleDateTime,
	    "d": parseDayOfMonth,
	    "e": parseDayOfMonth,
	    "H": parseHour24,
	    "I": parseHour24,
	    "j": parseDayOfYear,
	    "L": parseMilliseconds,
	    "m": parseMonthNumber,
	    "M": parseMinutes,
	    "p": parsePeriod,
	    "S": parseSeconds,
	    "U": parseWeekNumberSunday,
	    "w": parseWeekdayNumber,
	    "W": parseWeekNumberMonday,
	    "x": parseLocaleDate,
	    "X": parseLocaleTime,
	    "y": parseYear,
	    "Y": parseFullYear,
	    "Z": parseZone,
	    "%": parseLiteralPercent
	  };
	
	  // These recursive directive definitions must be deferred.
	  formats.x = newFormat(locale_date, formats);
	  formats.X = newFormat(locale_time, formats);
	  formats.c = newFormat(locale_dateTime, formats);
	  utcFormats.x = newFormat(locale_date, utcFormats);
	  utcFormats.X = newFormat(locale_time, utcFormats);
	  utcFormats.c = newFormat(locale_dateTime, utcFormats);
	
	  function newFormat(specifier, formats) {
	    return function(date) {
	      var string = [],
	          i = -1,
	          j = 0,
	          n = specifier.length,
	          c,
	          pad,
	          format;
	
	      if (!(date instanceof Date)) date = new Date(+date);
	
	      while (++i < n) {
	        if (specifier.charCodeAt(i) === 37) {
	          string.push(specifier.slice(j, i));
	          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
	          else pad = c === "e" ? " " : "0";
	          if (format = formats[c]) c = format(date, pad);
	          string.push(c);
	          j = i + 1;
	        }
	      }
	
	      string.push(specifier.slice(j, i));
	      return string.join("");
	    };
	  }
	
	  function newParse(specifier, newDate) {
	    return function(string) {
	      var d = newYear(1900),
	          i = parseSpecifier(d, specifier, string += "", 0);
	      if (i != string.length) return null;
	
	      // The am-pm flag is 0 for AM, and 1 for PM.
	      if ("p" in d) d.H = d.H % 12 + d.p * 12;
	
	      // Convert day-of-week and week-of-year to day-of-year.
	      if ("W" in d || "U" in d) {
	        if (!("w" in d)) d.w = "W" in d ? 1 : 0;
	        var day$$1 = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
	        d.m = 0;
	        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day$$1 + 5) % 7 : d.w + d.U * 7 - (day$$1 + 6) % 7;
	      }
	
	      // If a time zone is specified, all fields are interpreted as UTC and then
	      // offset according to the specified time zone.
	      if ("Z" in d) {
	        d.H += d.Z / 100 | 0;
	        d.M += d.Z % 100;
	        return utcDate(d);
	      }
	
	      // Otherwise, all fields are in local time.
	      return newDate(d);
	    };
	  }
	
	  function parseSpecifier(d, specifier, string, j) {
	    var i = 0,
	        n = specifier.length,
	        m = string.length,
	        c,
	        parse;
	
	    while (i < n) {
	      if (j >= m) return -1;
	      c = specifier.charCodeAt(i++);
	      if (c === 37) {
	        c = specifier.charAt(i++);
	        parse = parses[c in pads ? specifier.charAt(i++) : c];
	        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
	      } else if (c != string.charCodeAt(j++)) {
	        return -1;
	      }
	    }
	
	    return j;
	  }
	
	  function parsePeriod(d, string, i) {
	    var n = periodRe.exec(string.slice(i));
	    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	  }
	
	  function parseShortWeekday(d, string, i) {
	    var n = shortWeekdayRe.exec(string.slice(i));
	    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	  }
	
	  function parseWeekday(d, string, i) {
	    var n = weekdayRe.exec(string.slice(i));
	    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	  }
	
	  function parseShortMonth(d, string, i) {
	    var n = shortMonthRe.exec(string.slice(i));
	    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	  }
	
	  function parseMonth(d, string, i) {
	    var n = monthRe.exec(string.slice(i));
	    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	  }
	
	  function parseLocaleDateTime(d, string, i) {
	    return parseSpecifier(d, locale_dateTime, string, i);
	  }
	
	  function parseLocaleDate(d, string, i) {
	    return parseSpecifier(d, locale_date, string, i);
	  }
	
	  function parseLocaleTime(d, string, i) {
	    return parseSpecifier(d, locale_time, string, i);
	  }
	
	  function formatShortWeekday(d) {
	    return locale_shortWeekdays[d.getDay()];
	  }
	
	  function formatWeekday(d) {
	    return locale_weekdays[d.getDay()];
	  }
	
	  function formatShortMonth(d) {
	    return locale_shortMonths[d.getMonth()];
	  }
	
	  function formatMonth(d) {
	    return locale_months[d.getMonth()];
	  }
	
	  function formatPeriod(d) {
	    return locale_periods[+(d.getHours() >= 12)];
	  }
	
	  function formatUTCShortWeekday(d) {
	    return locale_shortWeekdays[d.getUTCDay()];
	  }
	
	  function formatUTCWeekday(d) {
	    return locale_weekdays[d.getUTCDay()];
	  }
	
	  function formatUTCShortMonth(d) {
	    return locale_shortMonths[d.getUTCMonth()];
	  }
	
	  function formatUTCMonth(d) {
	    return locale_months[d.getUTCMonth()];
	  }
	
	  function formatUTCPeriod(d) {
	    return locale_periods[+(d.getUTCHours() >= 12)];
	  }
	
	  return {
	    format: function(specifier) {
	      var f = newFormat(specifier += "", formats);
	      f.toString = function() { return specifier; };
	      return f;
	    },
	    parse: function(specifier) {
	      var p = newParse(specifier += "", localDate);
	      p.toString = function() { return specifier; };
	      return p;
	    },
	    utcFormat: function(specifier) {
	      var f = newFormat(specifier += "", utcFormats);
	      f.toString = function() { return specifier; };
	      return f;
	    },
	    utcParse: function(specifier) {
	      var p = newParse(specifier, utcDate);
	      p.toString = function() { return specifier; };
	      return p;
	    }
	  };
	}
	
	var pads = {"-": "", "_": " ", "0": "0"};
	var numberRe = /^\s*\d+/;
	var percentRe = /^%/;
	var requoteRe = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
	
	function pad(value, fill, width) {
	  var sign = value < 0 ? "-" : "",
	      string = (sign ? -value : value) + "",
	      length = string.length;
	  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
	}
	
	function requote(s) {
	  return s.replace(requoteRe, "\\$&");
	}
	
	function formatRe(names) {
	  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
	}
	
	function formatLookup(names) {
	  var map = {}, i = -1, n = names.length;
	  while (++i < n) map[names[i].toLowerCase()] = i;
	  return map;
	}
	
	function parseWeekdayNumber(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 1));
	  return n ? (d.w = +n[0], i + n[0].length) : -1;
	}
	
	function parseWeekNumberSunday(d, string, i) {
	  var n = numberRe.exec(string.slice(i));
	  return n ? (d.U = +n[0], i + n[0].length) : -1;
	}
	
	function parseWeekNumberMonday(d, string, i) {
	  var n = numberRe.exec(string.slice(i));
	  return n ? (d.W = +n[0], i + n[0].length) : -1;
	}
	
	function parseFullYear(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 4));
	  return n ? (d.y = +n[0], i + n[0].length) : -1;
	}
	
	function parseYear(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
	}
	
	function parseZone(d, string, i) {
	  var n = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(string.slice(i, i + 6));
	  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
	}
	
	function parseMonthNumber(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
	}
	
	function parseDayOfMonth(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.d = +n[0], i + n[0].length) : -1;
	}
	
	function parseDayOfYear(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 3));
	  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
	}
	
	function parseHour24(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.H = +n[0], i + n[0].length) : -1;
	}
	
	function parseMinutes(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.M = +n[0], i + n[0].length) : -1;
	}
	
	function parseSeconds(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.S = +n[0], i + n[0].length) : -1;
	}
	
	function parseMilliseconds(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 3));
	  return n ? (d.L = +n[0], i + n[0].length) : -1;
	}
	
	function parseLiteralPercent(d, string, i) {
	  var n = percentRe.exec(string.slice(i, i + 1));
	  return n ? i + n[0].length : -1;
	}
	
	function formatDayOfMonth(d, p) {
	  return pad(d.getDate(), p, 2);
	}
	
	function formatHour24(d, p) {
	  return pad(d.getHours(), p, 2);
	}
	
	function formatHour12(d, p) {
	  return pad(d.getHours() % 12 || 12, p, 2);
	}
	
	function formatDayOfYear(d, p) {
	  return pad(1 + day.count(year(d), d), p, 3);
	}
	
	function formatMilliseconds(d, p) {
	  return pad(d.getMilliseconds(), p, 3);
	}
	
	function formatMonthNumber(d, p) {
	  return pad(d.getMonth() + 1, p, 2);
	}
	
	function formatMinutes(d, p) {
	  return pad(d.getMinutes(), p, 2);
	}
	
	function formatSeconds(d, p) {
	  return pad(d.getSeconds(), p, 2);
	}
	
	function formatWeekNumberSunday(d, p) {
	  return pad(sunday.count(year(d), d), p, 2);
	}
	
	function formatWeekdayNumber(d) {
	  return d.getDay();
	}
	
	function formatWeekNumberMonday(d, p) {
	  return pad(monday.count(year(d), d), p, 2);
	}
	
	function formatYear(d, p) {
	  return pad(d.getFullYear() % 100, p, 2);
	}
	
	function formatFullYear(d, p) {
	  return pad(d.getFullYear() % 10000, p, 4);
	}
	
	function formatZone(d) {
	  var z = d.getTimezoneOffset();
	  return (z > 0 ? "-" : (z *= -1, "+"))
	      + pad(z / 60 | 0, "0", 2)
	      + pad(z % 60, "0", 2);
	}
	
	function formatUTCDayOfMonth(d, p) {
	  return pad(d.getUTCDate(), p, 2);
	}
	
	function formatUTCHour24(d, p) {
	  return pad(d.getUTCHours(), p, 2);
	}
	
	function formatUTCHour12(d, p) {
	  return pad(d.getUTCHours() % 12 || 12, p, 2);
	}
	
	function formatUTCDayOfYear(d, p) {
	  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
	}
	
	function formatUTCMilliseconds(d, p) {
	  return pad(d.getUTCMilliseconds(), p, 3);
	}
	
	function formatUTCMonthNumber(d, p) {
	  return pad(d.getUTCMonth() + 1, p, 2);
	}
	
	function formatUTCMinutes(d, p) {
	  return pad(d.getUTCMinutes(), p, 2);
	}
	
	function formatUTCSeconds(d, p) {
	  return pad(d.getUTCSeconds(), p, 2);
	}
	
	function formatUTCWeekNumberSunday(d, p) {
	  return pad(utcSunday.count(utcYear(d), d), p, 2);
	}
	
	function formatUTCWeekdayNumber(d) {
	  return d.getUTCDay();
	}
	
	function formatUTCWeekNumberMonday(d, p) {
	  return pad(utcMonday.count(utcYear(d), d), p, 2);
	}
	
	function formatUTCYear(d, p) {
	  return pad(d.getUTCFullYear() % 100, p, 2);
	}
	
	function formatUTCFullYear(d, p) {
	  return pad(d.getUTCFullYear() % 10000, p, 4);
	}
	
	function formatUTCZone() {
	  return "+0000";
	}
	
	function formatLiteralPercent() {
	  return "%";
	}
	
	var locale$2;
	
	
	
	
	
	defaultLocale$1({
	  dateTime: "%x, %X",
	  date: "%-m/%-d/%Y",
	  time: "%-I:%M:%S %p",
	  periods: ["AM", "PM"],
	  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	});
	
	function defaultLocale$1(definition) {
	  locale$2 = formatLocale$1(definition);
	  exports.timeFormat = locale$2.format;
	  exports.timeParse = locale$2.parse;
	  exports.utcFormat = locale$2.utcFormat;
	  exports.utcParse = locale$2.utcParse;
	  return locale$2;
	}
	
	var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
	
	function formatIsoNative(date) {
	  return date.toISOString();
	}
	
	var formatIso = Date.prototype.toISOString
	    ? formatIsoNative
	    : exports.utcFormat(isoSpecifier);
	
	function parseIsoNative(string) {
	  var date = new Date(string);
	  return isNaN(date) ? null : date;
	}
	
	var parseIso = +new Date("2000-01-01T00:00:00.000Z")
	    ? parseIsoNative
	    : exports.utcParse(isoSpecifier);
	
	var durationSecond = 1000;
	var durationMinute = durationSecond * 60;
	var durationHour = durationMinute * 60;
	var durationDay = durationHour * 24;
	var durationWeek = durationDay * 7;
	var durationMonth = durationDay * 30;
	var durationYear = durationDay * 365;
	
	function date$1(t) {
	  return new Date(t);
	}
	
	function number$2(t) {
	  return t instanceof Date ? +t : +new Date(+t);
	}
	
	function calendar(year$$1, month$$1, week, day$$1, hour$$1, minute$$1, second$$1, millisecond$$1, format) {
	  var scale = continuous(deinterpolateLinear, reinterpolate),
	      invert = scale.invert,
	      domain = scale.domain;
	
	  var formatMillisecond = format(".%L"),
	      formatSecond = format(":%S"),
	      formatMinute = format("%I:%M"),
	      formatHour = format("%I %p"),
	      formatDay = format("%a %d"),
	      formatWeek = format("%b %d"),
	      formatMonth = format("%B"),
	      formatYear = format("%Y");
	
	  var tickIntervals = [
	    [second$$1,  1,      durationSecond],
	    [second$$1,  5,  5 * durationSecond],
	    [second$$1, 15, 15 * durationSecond],
	    [second$$1, 30, 30 * durationSecond],
	    [minute$$1,  1,      durationMinute],
	    [minute$$1,  5,  5 * durationMinute],
	    [minute$$1, 15, 15 * durationMinute],
	    [minute$$1, 30, 30 * durationMinute],
	    [  hour$$1,  1,      durationHour  ],
	    [  hour$$1,  3,  3 * durationHour  ],
	    [  hour$$1,  6,  6 * durationHour  ],
	    [  hour$$1, 12, 12 * durationHour  ],
	    [   day$$1,  1,      durationDay   ],
	    [   day$$1,  2,  2 * durationDay   ],
	    [  week,  1,      durationWeek  ],
	    [ month$$1,  1,      durationMonth ],
	    [ month$$1,  3,  3 * durationMonth ],
	    [  year$$1,  1,      durationYear  ]
	  ];
	
	  function tickFormat(date) {
	    return (second$$1(date) < date ? formatMillisecond
	        : minute$$1(date) < date ? formatSecond
	        : hour$$1(date) < date ? formatMinute
	        : day$$1(date) < date ? formatHour
	        : month$$1(date) < date ? (week(date) < date ? formatDay : formatWeek)
	        : year$$1(date) < date ? formatMonth
	        : formatYear)(date);
	  }
	
	  function tickInterval(interval, start, stop, step) {
	    if (interval == null) interval = 10;
	
	    // If a desired tick count is specified, pick a reasonable tick interval
	    // based on the extent of the domain and a rough estimate of tick size.
	    // Otherwise, assume interval is already a time interval and use it.
	    if (typeof interval === "number") {
	      var target = Math.abs(stop - start) / interval,
	          i = bisector(function(i) { return i[2]; }).right(tickIntervals, target);
	      if (i === tickIntervals.length) {
	        step = tickStep(start / durationYear, stop / durationYear, interval);
	        interval = year$$1;
	      } else if (i) {
	        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
	        step = i[1];
	        interval = i[0];
	      } else {
	        step = tickStep(start, stop, interval);
	        interval = millisecond$$1;
	      }
	    }
	
	    return step == null ? interval : interval.every(step);
	  }
	
	  scale.invert = function(y) {
	    return new Date(invert(y));
	  };
	
	  scale.domain = function(_) {
	    return arguments.length ? domain(map$3.call(_, number$2)) : domain().map(date$1);
	  };
	
	  scale.ticks = function(interval, step) {
	    var d = domain(),
	        t0 = d[0],
	        t1 = d[d.length - 1],
	        r = t1 < t0,
	        t;
	    if (r) t = t0, t0 = t1, t1 = t;
	    t = tickInterval(interval, t0, t1, step);
	    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
	    return r ? t.reverse() : t;
	  };
	
	  scale.tickFormat = function(count, specifier) {
	    return specifier == null ? tickFormat : format(specifier);
	  };
	
	  scale.nice = function(interval, step) {
	    var d = domain();
	    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
	        ? domain(nice(d, interval))
	        : scale;
	  };
	
	  scale.copy = function() {
	    return copy(scale, calendar(year$$1, month$$1, week, day$$1, hour$$1, minute$$1, second$$1, millisecond$$1, format));
	  };
	
	  return scale;
	}
	
	var time = function() {
	  return calendar(year, month, sunday, day, hour, minute, second, millisecond, exports.timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
	};
	
	var utcTime = function() {
	  return calendar(utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, millisecond, exports.utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
	};
	
	var colors = function(s) {
	  return s.match(/.{6}/g).map(function(x) {
	    return "#" + x;
	  });
	};
	
	var category10 = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
	
	var category20b = colors("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");
	
	var category20c = colors("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");
	
	var category20 = colors("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");
	
	var cubehelix$3 = cubehelixLong(cubehelix(300, 0.5, 0.0), cubehelix(-240, 0.5, 1.0));
	
	var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.50, 0.8));
	
	var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.50, 0.8));
	
	var rainbow = cubehelix();
	
	var rainbow$1 = function(t) {
	  if (t < 0 || t > 1) t -= Math.floor(t);
	  var ts = Math.abs(t - 0.5);
	  rainbow.h = 360 * t - 100;
	  rainbow.s = 1.5 - 1.5 * ts;
	  rainbow.l = 0.8 - 0.9 * ts;
	  return rainbow + "";
	};
	
	function ramp(range) {
	  var n = range.length;
	  return function(t) {
	    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
	  };
	}
	
	var viridis = ramp(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
	
	var magma = ramp(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
	
	var inferno = ramp(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
	
	var plasma = ramp(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
	
	function sequential(interpolator) {
	  var x0 = 0,
	      x1 = 1,
	      clamp = false;
	
	  function scale(x) {
	    var t = (x - x0) / (x1 - x0);
	    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
	  }
	
	  scale.domain = function(_) {
	    return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
	  };
	
	  scale.clamp = function(_) {
	    return arguments.length ? (clamp = !!_, scale) : clamp;
	  };
	
	  scale.interpolator = function(_) {
	    return arguments.length ? (interpolator = _, scale) : interpolator;
	  };
	
	  scale.copy = function() {
	    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
	  };
	
	  return linearish(scale);
	}
	
	var constant$10 = function(x) {
	  return function constant() {
	    return x;
	  };
	};
	
	var abs$1 = Math.abs;
	var atan2$1 = Math.atan2;
	var cos$2 = Math.cos;
	var max$2 = Math.max;
	var min$1 = Math.min;
	var sin$2 = Math.sin;
	var sqrt$2 = Math.sqrt;
	
	var epsilon$3 = 1e-12;
	var pi$4 = Math.PI;
	var halfPi$3 = pi$4 / 2;
	var tau$4 = 2 * pi$4;
	
	function acos$1(x) {
	  return x > 1 ? 0 : x < -1 ? pi$4 : Math.acos(x);
	}
	
	function asin$1(x) {
	  return x >= 1 ? halfPi$3 : x <= -1 ? -halfPi$3 : Math.asin(x);
	}
	
	function arcInnerRadius(d) {
	  return d.innerRadius;
	}
	
	function arcOuterRadius(d) {
	  return d.outerRadius;
	}
	
	function arcStartAngle(d) {
	  return d.startAngle;
	}
	
	function arcEndAngle(d) {
	  return d.endAngle;
	}
	
	function arcPadAngle(d) {
	  return d && d.padAngle; // Note: optional!
	}
	
	function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
	  var x10 = x1 - x0, y10 = y1 - y0,
	      x32 = x3 - x2, y32 = y3 - y2,
	      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
	  return [x0 + t * x10, y0 + t * y10];
	}
	
	// Compute perpendicular offset line of length rc.
	// http://mathworld.wolfram.com/Circle-LineIntersection.html
	function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
	  var x01 = x0 - x1,
	      y01 = y0 - y1,
	      lo = (cw ? rc : -rc) / sqrt$2(x01 * x01 + y01 * y01),
	      ox = lo * y01,
	      oy = -lo * x01,
	      x11 = x0 + ox,
	      y11 = y0 + oy,
	      x10 = x1 + ox,
	      y10 = y1 + oy,
	      x00 = (x11 + x10) / 2,
	      y00 = (y11 + y10) / 2,
	      dx = x10 - x11,
	      dy = y10 - y11,
	      d2 = dx * dx + dy * dy,
	      r = r1 - rc,
	      D = x11 * y10 - x10 * y11,
	      d = (dy < 0 ? -1 : 1) * sqrt$2(max$2(0, r * r * d2 - D * D)),
	      cx0 = (D * dy - dx * d) / d2,
	      cy0 = (-D * dx - dy * d) / d2,
	      cx1 = (D * dy + dx * d) / d2,
	      cy1 = (-D * dx + dy * d) / d2,
	      dx0 = cx0 - x00,
	      dy0 = cy0 - y00,
	      dx1 = cx1 - x00,
	      dy1 = cy1 - y00;
	
	  // Pick the closer of the two intersection points.
	  // TODO Is there a faster way to determine which intersection to use?
	  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
	
	  return {
	    cx: cx0,
	    cy: cy0,
	    x01: -ox,
	    y01: -oy,
	    x11: cx0 * (r1 / r - 1),
	    y11: cy0 * (r1 / r - 1)
	  };
	}
	
	var arc = function() {
	  var innerRadius = arcInnerRadius,
	      outerRadius = arcOuterRadius,
	      cornerRadius = constant$10(0),
	      padRadius = null,
	      startAngle = arcStartAngle,
	      endAngle = arcEndAngle,
	      padAngle = arcPadAngle,
	      context = null;
	
	  function arc() {
	    var buffer,
	        r,
	        r0 = +innerRadius.apply(this, arguments),
	        r1 = +outerRadius.apply(this, arguments),
	        a0 = startAngle.apply(this, arguments) - halfPi$3,
	        a1 = endAngle.apply(this, arguments) - halfPi$3,
	        da = abs$1(a1 - a0),
	        cw = a1 > a0;
	
	    if (!context) context = buffer = path();
	
	    // Ensure that the outer radius is always larger than the inner radius.
	    if (r1 < r0) r = r1, r1 = r0, r0 = r;
	
	    // Is it a point?
	    if (!(r1 > epsilon$3)) context.moveTo(0, 0);
	
	    // Or is it a circle or annulus?
	    else if (da > tau$4 - epsilon$3) {
	      context.moveTo(r1 * cos$2(a0), r1 * sin$2(a0));
	      context.arc(0, 0, r1, a0, a1, !cw);
	      if (r0 > epsilon$3) {
	        context.moveTo(r0 * cos$2(a1), r0 * sin$2(a1));
	        context.arc(0, 0, r0, a1, a0, cw);
	      }
	    }
	
	    // Or is it a circular or annular sector?
	    else {
	      var a01 = a0,
	          a11 = a1,
	          a00 = a0,
	          a10 = a1,
	          da0 = da,
	          da1 = da,
	          ap = padAngle.apply(this, arguments) / 2,
	          rp = (ap > epsilon$3) && (padRadius ? +padRadius.apply(this, arguments) : sqrt$2(r0 * r0 + r1 * r1)),
	          rc = min$1(abs$1(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
	          rc0 = rc,
	          rc1 = rc,
	          t0,
	          t1;
	
	      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
	      if (rp > epsilon$3) {
	        var p0 = asin$1(rp / r0 * sin$2(ap)),
	            p1 = asin$1(rp / r1 * sin$2(ap));
	        if ((da0 -= p0 * 2) > epsilon$3) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
	        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
	        if ((da1 -= p1 * 2) > epsilon$3) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
	        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
	      }
	
	      var x01 = r1 * cos$2(a01),
	          y01 = r1 * sin$2(a01),
	          x10 = r0 * cos$2(a10),
	          y10 = r0 * sin$2(a10);
	
	      // Apply rounded corners?
	      if (rc > epsilon$3) {
	        var x11 = r1 * cos$2(a11),
	            y11 = r1 * sin$2(a11),
	            x00 = r0 * cos$2(a00),
	            y00 = r0 * sin$2(a00);
	
	        // Restrict the corner radius according to the sector angle.
	        if (da < pi$4) {
	          var oc = da0 > epsilon$3 ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
	              ax = x01 - oc[0],
	              ay = y01 - oc[1],
	              bx = x11 - oc[0],
	              by = y11 - oc[1],
	              kc = 1 / sin$2(acos$1((ax * bx + ay * by) / (sqrt$2(ax * ax + ay * ay) * sqrt$2(bx * bx + by * by))) / 2),
	              lc = sqrt$2(oc[0] * oc[0] + oc[1] * oc[1]);
	          rc0 = min$1(rc, (r0 - lc) / (kc - 1));
	          rc1 = min$1(rc, (r1 - lc) / (kc + 1));
	        }
	      }
	
	      // Is the sector collapsed to a line?
	      if (!(da1 > epsilon$3)) context.moveTo(x01, y01);
	
	      // Does the sector’s outer ring have rounded corners?
	      else if (rc1 > epsilon$3) {
	        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
	        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
	
	        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
	
	        // Have the corners merged?
	        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2$1(t0.y01, t0.x01), atan2$1(t1.y01, t1.x01), !cw);
	
	        // Otherwise, draw the two corners and the ring.
	        else {
	          context.arc(t0.cx, t0.cy, rc1, atan2$1(t0.y01, t0.x01), atan2$1(t0.y11, t0.x11), !cw);
	          context.arc(0, 0, r1, atan2$1(t0.cy + t0.y11, t0.cx + t0.x11), atan2$1(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
	          context.arc(t1.cx, t1.cy, rc1, atan2$1(t1.y11, t1.x11), atan2$1(t1.y01, t1.x01), !cw);
	        }
	      }
	
	      // Or is the outer ring just a circular arc?
	      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
	
	      // Is there no inner ring, and it’s a circular sector?
	      // Or perhaps it’s an annular sector collapsed due to padding?
	      if (!(r0 > epsilon$3) || !(da0 > epsilon$3)) context.lineTo(x10, y10);
	
	      // Does the sector’s inner ring (or point) have rounded corners?
	      else if (rc0 > epsilon$3) {
	        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
	        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
	
	        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
	
	        // Have the corners merged?
	        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2$1(t0.y01, t0.x01), atan2$1(t1.y01, t1.x01), !cw);
	
	        // Otherwise, draw the two corners and the ring.
	        else {
	          context.arc(t0.cx, t0.cy, rc0, atan2$1(t0.y01, t0.x01), atan2$1(t0.y11, t0.x11), !cw);
	          context.arc(0, 0, r0, atan2$1(t0.cy + t0.y11, t0.cx + t0.x11), atan2$1(t1.cy + t1.y11, t1.cx + t1.x11), cw);
	          context.arc(t1.cx, t1.cy, rc0, atan2$1(t1.y11, t1.x11), atan2$1(t1.y01, t1.x01), !cw);
	        }
	      }
	
	      // Or is the inner ring just a circular arc?
	      else context.arc(0, 0, r0, a10, a00, cw);
	    }
	
	    context.closePath();
	
	    if (buffer) return context = null, buffer + "" || null;
	  }
	
	  arc.centroid = function() {
	    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
	        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi$4 / 2;
	    return [cos$2(a) * r, sin$2(a) * r];
	  };
	
	  arc.innerRadius = function(_) {
	    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant$10(+_), arc) : innerRadius;
	  };
	
	  arc.outerRadius = function(_) {
	    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant$10(+_), arc) : outerRadius;
	  };
	
	  arc.cornerRadius = function(_) {
	    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant$10(+_), arc) : cornerRadius;
	  };
	
	  arc.padRadius = function(_) {
	    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant$10(+_), arc) : padRadius;
	  };
	
	  arc.startAngle = function(_) {
	    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$10(+_), arc) : startAngle;
	  };
	
	  arc.endAngle = function(_) {
	    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$10(+_), arc) : endAngle;
	  };
	
	  arc.padAngle = function(_) {
	    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$10(+_), arc) : padAngle;
	  };
	
	  arc.context = function(_) {
	    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
	  };
	
	  return arc;
	};
	
	function Linear(context) {
	  this._context = context;
	}
	
	Linear.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._point = 0;
	  },
	  lineEnd: function() {
	    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	      case 1: this._point = 2; // proceed
	      default: this._context.lineTo(x, y); break;
	    }
	  }
	};
	
	var curveLinear = function(context) {
	  return new Linear(context);
	};
	
	function x$3(p) {
	  return p[0];
	}
	
	function y$3(p) {
	  return p[1];
	}
	
	var line = function() {
	  var x$$1 = x$3,
	      y$$1 = y$3,
	      defined = constant$10(true),
	      context = null,
	      curve = curveLinear,
	      output = null;
	
	  function line(data) {
	    var i,
	        n = data.length,
	        d,
	        defined0 = false,
	        buffer;
	
	    if (context == null) output = curve(buffer = path());
	
	    for (i = 0; i <= n; ++i) {
	      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
	        if (defined0 = !defined0) output.lineStart();
	        else output.lineEnd();
	      }
	      if (defined0) output.point(+x$$1(d, i, data), +y$$1(d, i, data));
	    }
	
	    if (buffer) return output = null, buffer + "" || null;
	  }
	
	  line.x = function(_) {
	    return arguments.length ? (x$$1 = typeof _ === "function" ? _ : constant$10(+_), line) : x$$1;
	  };
	
	  line.y = function(_) {
	    return arguments.length ? (y$$1 = typeof _ === "function" ? _ : constant$10(+_), line) : y$$1;
	  };
	
	  line.defined = function(_) {
	    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$10(!!_), line) : defined;
	  };
	
	  line.curve = function(_) {
	    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
	  };
	
	  line.context = function(_) {
	    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
	  };
	
	  return line;
	};
	
	var area$2 = function() {
	  var x0 = x$3,
	      x1 = null,
	      y0 = constant$10(0),
	      y1 = y$3,
	      defined = constant$10(true),
	      context = null,
	      curve = curveLinear,
	      output = null;
	
	  function area(data) {
	    var i,
	        j,
	        k,
	        n = data.length,
	        d,
	        defined0 = false,
	        buffer,
	        x0z = new Array(n),
	        y0z = new Array(n);
	
	    if (context == null) output = curve(buffer = path());
	
	    for (i = 0; i <= n; ++i) {
	      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
	        if (defined0 = !defined0) {
	          j = i;
	          output.areaStart();
	          output.lineStart();
	        } else {
	          output.lineEnd();
	          output.lineStart();
	          for (k = i - 1; k >= j; --k) {
	            output.point(x0z[k], y0z[k]);
	          }
	          output.lineEnd();
	          output.areaEnd();
	        }
	      }
	      if (defined0) {
	        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
	        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
	      }
	    }
	
	    if (buffer) return output = null, buffer + "" || null;
	  }
	
	  function arealine() {
	    return line().defined(defined).curve(curve).context(context);
	  }
	
	  area.x = function(_) {
	    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$10(+_), x1 = null, area) : x0;
	  };
	
	  area.x0 = function(_) {
	    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$10(+_), area) : x0;
	  };
	
	  area.x1 = function(_) {
	    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant$10(+_), area) : x1;
	  };
	
	  area.y = function(_) {
	    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$10(+_), y1 = null, area) : y0;
	  };
	
	  area.y0 = function(_) {
	    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$10(+_), area) : y0;
	  };
	
	  area.y1 = function(_) {
	    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant$10(+_), area) : y1;
	  };
	
	  area.lineX0 =
	  area.lineY0 = function() {
	    return arealine().x(x0).y(y0);
	  };
	
	  area.lineY1 = function() {
	    return arealine().x(x0).y(y1);
	  };
	
	  area.lineX1 = function() {
	    return arealine().x(x1).y(y0);
	  };
	
	  area.defined = function(_) {
	    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$10(!!_), area) : defined;
	  };
	
	  area.curve = function(_) {
	    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
	  };
	
	  area.context = function(_) {
	    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
	  };
	
	  return area;
	};
	
	var descending$1 = function(a, b) {
	  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	};
	
	var identity$7 = function(d) {
	  return d;
	};
	
	var pie = function() {
	  var value = identity$7,
	      sortValues = descending$1,
	      sort = null,
	      startAngle = constant$10(0),
	      endAngle = constant$10(tau$4),
	      padAngle = constant$10(0);
	
	  function pie(data) {
	    var i,
	        n = data.length,
	        j,
	        k,
	        sum = 0,
	        index = new Array(n),
	        arcs = new Array(n),
	        a0 = +startAngle.apply(this, arguments),
	        da = Math.min(tau$4, Math.max(-tau$4, endAngle.apply(this, arguments) - a0)),
	        a1,
	        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
	        pa = p * (da < 0 ? -1 : 1),
	        v;
	
	    for (i = 0; i < n; ++i) {
	      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
	        sum += v;
	      }
	    }
	
	    // Optionally sort the arcs by previously-computed values or by data.
	    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
	    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });
	
	    // Compute the arcs! They are stored in the original data's order.
	    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
	      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
	        data: data[j],
	        index: i,
	        value: v,
	        startAngle: a0,
	        endAngle: a1,
	        padAngle: p
	      };
	    }
	
	    return arcs;
	  }
	
	  pie.value = function(_) {
	    return arguments.length ? (value = typeof _ === "function" ? _ : constant$10(+_), pie) : value;
	  };
	
	  pie.sortValues = function(_) {
	    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
	  };
	
	  pie.sort = function(_) {
	    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
	  };
	
	  pie.startAngle = function(_) {
	    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$10(+_), pie) : startAngle;
	  };
	
	  pie.endAngle = function(_) {
	    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$10(+_), pie) : endAngle;
	  };
	
	  pie.padAngle = function(_) {
	    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$10(+_), pie) : padAngle;
	  };
	
	  return pie;
	};
	
	var curveRadialLinear = curveRadial(curveLinear);
	
	function Radial(curve) {
	  this._curve = curve;
	}
	
	Radial.prototype = {
	  areaStart: function() {
	    this._curve.areaStart();
	  },
	  areaEnd: function() {
	    this._curve.areaEnd();
	  },
	  lineStart: function() {
	    this._curve.lineStart();
	  },
	  lineEnd: function() {
	    this._curve.lineEnd();
	  },
	  point: function(a, r) {
	    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
	  }
	};
	
	function curveRadial(curve) {
	
	  function radial(context) {
	    return new Radial(curve(context));
	  }
	
	  radial._curve = curve;
	
	  return radial;
	}
	
	function radialLine(l) {
	  var c = l.curve;
	
	  l.angle = l.x, delete l.x;
	  l.radius = l.y, delete l.y;
	
	  l.curve = function(_) {
	    return arguments.length ? c(curveRadial(_)) : c()._curve;
	  };
	
	  return l;
	}
	
	var radialLine$1 = function() {
	  return radialLine(line().curve(curveRadialLinear));
	};
	
	var radialArea = function() {
	  var a = area$2().curve(curveRadialLinear),
	      c = a.curve,
	      x0 = a.lineX0,
	      x1 = a.lineX1,
	      y0 = a.lineY0,
	      y1 = a.lineY1;
	
	  a.angle = a.x, delete a.x;
	  a.startAngle = a.x0, delete a.x0;
	  a.endAngle = a.x1, delete a.x1;
	  a.radius = a.y, delete a.y;
	  a.innerRadius = a.y0, delete a.y0;
	  a.outerRadius = a.y1, delete a.y1;
	  a.lineStartAngle = function() { return radialLine(x0()); }, delete a.lineX0;
	  a.lineEndAngle = function() { return radialLine(x1()); }, delete a.lineX1;
	  a.lineInnerRadius = function() { return radialLine(y0()); }, delete a.lineY0;
	  a.lineOuterRadius = function() { return radialLine(y1()); }, delete a.lineY1;
	
	  a.curve = function(_) {
	    return arguments.length ? c(curveRadial(_)) : c()._curve;
	  };
	
	  return a;
	};
	
	var slice$5 = Array.prototype.slice;
	
	var radialPoint = function(x, y) {
	  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
	};
	
	function linkSource(d) {
	  return d.source;
	}
	
	function linkTarget(d) {
	  return d.target;
	}
	
	function link$2(curve) {
	  var source = linkSource,
	      target = linkTarget,
	      x$$1 = x$3,
	      y$$1 = y$3,
	      context = null;
	
	  function link() {
	    var buffer, argv = slice$5.call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
	    if (!context) context = buffer = path();
	    curve(context, +x$$1.apply(this, (argv[0] = s, argv)), +y$$1.apply(this, argv), +x$$1.apply(this, (argv[0] = t, argv)), +y$$1.apply(this, argv));
	    if (buffer) return context = null, buffer + "" || null;
	  }
	
	  link.source = function(_) {
	    return arguments.length ? (source = _, link) : source;
	  };
	
	  link.target = function(_) {
	    return arguments.length ? (target = _, link) : target;
	  };
	
	  link.x = function(_) {
	    return arguments.length ? (x$$1 = typeof _ === "function" ? _ : constant$10(+_), link) : x$$1;
	  };
	
	  link.y = function(_) {
	    return arguments.length ? (y$$1 = typeof _ === "function" ? _ : constant$10(+_), link) : y$$1;
	  };
	
	  link.context = function(_) {
	    return arguments.length ? ((context = _ == null ? null : _), link) : context;
	  };
	
	  return link;
	}
	
	function curveHorizontal(context, x0, y0, x1, y1) {
	  context.moveTo(x0, y0);
	  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
	}
	
	function curveVertical(context, x0, y0, x1, y1) {
	  context.moveTo(x0, y0);
	  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
	}
	
	function curveRadial$1(context, x0, y0, x1, y1) {
	  var p0 = radialPoint(x0, y0),
	      p1 = radialPoint(x0, y0 = (y0 + y1) / 2),
	      p2 = radialPoint(x1, y0),
	      p3 = radialPoint(x1, y1);
	  context.moveTo(p0[0], p0[1]);
	  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
	}
	
	function linkHorizontal() {
	  return link$2(curveHorizontal);
	}
	
	function linkVertical() {
	  return link$2(curveVertical);
	}
	
	function linkRadial() {
	  var l = link$2(curveRadial$1);
	  l.angle = l.x, delete l.x;
	  l.radius = l.y, delete l.y;
	  return l;
	}
	
	var circle$2 = {
	  draw: function(context, size) {
	    var r = Math.sqrt(size / pi$4);
	    context.moveTo(r, 0);
	    context.arc(0, 0, r, 0, tau$4);
	  }
	};
	
	var cross$2 = {
	  draw: function(context, size) {
	    var r = Math.sqrt(size / 5) / 2;
	    context.moveTo(-3 * r, -r);
	    context.lineTo(-r, -r);
	    context.lineTo(-r, -3 * r);
	    context.lineTo(r, -3 * r);
	    context.lineTo(r, -r);
	    context.lineTo(3 * r, -r);
	    context.lineTo(3 * r, r);
	    context.lineTo(r, r);
	    context.lineTo(r, 3 * r);
	    context.lineTo(-r, 3 * r);
	    context.lineTo(-r, r);
	    context.lineTo(-3 * r, r);
	    context.closePath();
	  }
	};
	
	var tan30 = Math.sqrt(1 / 3);
	var tan30_2 = tan30 * 2;
	
	var diamond = {
	  draw: function(context, size) {
	    var y = Math.sqrt(size / tan30_2),
	        x = y * tan30;
	    context.moveTo(0, -y);
	    context.lineTo(x, 0);
	    context.lineTo(0, y);
	    context.lineTo(-x, 0);
	    context.closePath();
	  }
	};
	
	var ka = 0.89081309152928522810;
	var kr = Math.sin(pi$4 / 10) / Math.sin(7 * pi$4 / 10);
	var kx = Math.sin(tau$4 / 10) * kr;
	var ky = -Math.cos(tau$4 / 10) * kr;
	
	var star = {
	  draw: function(context, size) {
	    var r = Math.sqrt(size * ka),
	        x = kx * r,
	        y = ky * r;
	    context.moveTo(0, -r);
	    context.lineTo(x, y);
	    for (var i = 1; i < 5; ++i) {
	      var a = tau$4 * i / 5,
	          c = Math.cos(a),
	          s = Math.sin(a);
	      context.lineTo(s * r, -c * r);
	      context.lineTo(c * x - s * y, s * x + c * y);
	    }
	    context.closePath();
	  }
	};
	
	var square = {
	  draw: function(context, size) {
	    var w = Math.sqrt(size),
	        x = -w / 2;
	    context.rect(x, x, w, w);
	  }
	};
	
	var sqrt3 = Math.sqrt(3);
	
	var triangle = {
	  draw: function(context, size) {
	    var y = -Math.sqrt(size / (sqrt3 * 3));
	    context.moveTo(0, y * 2);
	    context.lineTo(-sqrt3 * y, -y);
	    context.lineTo(sqrt3 * y, -y);
	    context.closePath();
	  }
	};
	
	var c = -0.5;
	var s = Math.sqrt(3) / 2;
	var k = 1 / Math.sqrt(12);
	var a = (k / 2 + 1) * 3;
	
	var wye = {
	  draw: function(context, size) {
	    var r = Math.sqrt(size / a),
	        x0 = r / 2,
	        y0 = r * k,
	        x1 = x0,
	        y1 = r * k + r,
	        x2 = -x1,
	        y2 = y1;
	    context.moveTo(x0, y0);
	    context.lineTo(x1, y1);
	    context.lineTo(x2, y2);
	    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
	    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
	    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
	    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
	    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
	    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
	    context.closePath();
	  }
	};
	
	var symbols = [
	  circle$2,
	  cross$2,
	  diamond,
	  square,
	  star,
	  triangle,
	  wye
	];
	
	var symbol = function() {
	  var type = constant$10(circle$2),
	      size = constant$10(64),
	      context = null;
	
	  function symbol() {
	    var buffer;
	    if (!context) context = buffer = path();
	    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
	    if (buffer) return context = null, buffer + "" || null;
	  }
	
	  symbol.type = function(_) {
	    return arguments.length ? (type = typeof _ === "function" ? _ : constant$10(_), symbol) : type;
	  };
	
	  symbol.size = function(_) {
	    return arguments.length ? (size = typeof _ === "function" ? _ : constant$10(+_), symbol) : size;
	  };
	
	  symbol.context = function(_) {
	    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
	  };
	
	  return symbol;
	};
	
	var noop$2 = function() {};
	
	function point$2(that, x, y) {
	  that._context.bezierCurveTo(
	    (2 * that._x0 + that._x1) / 3,
	    (2 * that._y0 + that._y1) / 3,
	    (that._x0 + 2 * that._x1) / 3,
	    (that._y0 + 2 * that._y1) / 3,
	    (that._x0 + 4 * that._x1 + x) / 6,
	    (that._y0 + 4 * that._y1 + y) / 6
	  );
	}
	
	function Basis(context) {
	  this._context = context;
	}
	
	Basis.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x0 = this._x1 =
	    this._y0 = this._y1 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function() {
	    switch (this._point) {
	      case 3: point$2(this, this._x1, this._y1); // proceed
	      case 2: this._context.lineTo(this._x1, this._y1); break;
	    }
	    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	      case 1: this._point = 2; break;
	      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
	      default: point$2(this, x, y); break;
	    }
	    this._x0 = this._x1, this._x1 = x;
	    this._y0 = this._y1, this._y1 = y;
	  }
	};
	
	var basis$2 = function(context) {
	  return new Basis(context);
	};
	
	function BasisClosed(context) {
	  this._context = context;
	}
	
	BasisClosed.prototype = {
	  areaStart: noop$2,
	  areaEnd: noop$2,
	  lineStart: function() {
	    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
	    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function() {
	    switch (this._point) {
	      case 1: {
	        this._context.moveTo(this._x2, this._y2);
	        this._context.closePath();
	        break;
	      }
	      case 2: {
	        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
	        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
	        this._context.closePath();
	        break;
	      }
	      case 3: {
	        this.point(this._x2, this._y2);
	        this.point(this._x3, this._y3);
	        this.point(this._x4, this._y4);
	        break;
	      }
	    }
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
	      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
	      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
	      default: point$2(this, x, y); break;
	    }
	    this._x0 = this._x1, this._x1 = x;
	    this._y0 = this._y1, this._y1 = y;
	  }
	};
	
	var basisClosed$1 = function(context) {
	  return new BasisClosed(context);
	};
	
	function BasisOpen(context) {
	  this._context = context;
	}
	
	BasisOpen.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x0 = this._x1 =
	    this._y0 = this._y1 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function() {
	    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0: this._point = 1; break;
	      case 1: this._point = 2; break;
	      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
	      case 3: this._point = 4; // proceed
	      default: point$2(this, x, y); break;
	    }
	    this._x0 = this._x1, this._x1 = x;
	    this._y0 = this._y1, this._y1 = y;
	  }
	};
	
	var basisOpen = function(context) {
	  return new BasisOpen(context);
	};
	
	function Bundle(context, beta) {
	  this._basis = new Basis(context);
	  this._beta = beta;
	}
	
	Bundle.prototype = {
	  lineStart: function() {
	    this._x = [];
	    this._y = [];
	    this._basis.lineStart();
	  },
	  lineEnd: function() {
	    var x = this._x,
	        y = this._y,
	        j = x.length - 1;
	
	    if (j > 0) {
	      var x0 = x[0],
	          y0 = y[0],
	          dx = x[j] - x0,
	          dy = y[j] - y0,
	          i = -1,
	          t;
	
	      while (++i <= j) {
	        t = i / j;
	        this._basis.point(
	          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
	          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
	        );
	      }
	    }
	
	    this._x = this._y = null;
	    this._basis.lineEnd();
	  },
	  point: function(x, y) {
	    this._x.push(+x);
	    this._y.push(+y);
	  }
	};
	
	var bundle = ((function custom(beta) {
	
	  function bundle(context) {
	    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
	  }
	
	  bundle.beta = function(beta) {
	    return custom(+beta);
	  };
	
	  return bundle;
	}))(0.85);
	
	function point$3(that, x, y) {
	  that._context.bezierCurveTo(
	    that._x1 + that._k * (that._x2 - that._x0),
	    that._y1 + that._k * (that._y2 - that._y0),
	    that._x2 + that._k * (that._x1 - x),
	    that._y2 + that._k * (that._y1 - y),
	    that._x2,
	    that._y2
	  );
	}
	
	function Cardinal(context, tension) {
	  this._context = context;
	  this._k = (1 - tension) / 6;
	}
	
	Cardinal.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x0 = this._x1 = this._x2 =
	    this._y0 = this._y1 = this._y2 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function() {
	    switch (this._point) {
	      case 2: this._context.lineTo(this._x2, this._y2); break;
	      case 3: point$3(this, this._x1, this._y1); break;
	    }
	    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
	      case 2: this._point = 3; // proceed
	      default: point$3(this, x, y); break;
	    }
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	
	var cardinal = ((function custom(tension) {
	
	  function cardinal(context) {
	    return new Cardinal(context, tension);
	  }
	
	  cardinal.tension = function(tension) {
	    return custom(+tension);
	  };
	
	  return cardinal;
	}))(0);
	
	function CardinalClosed(context, tension) {
	  this._context = context;
	  this._k = (1 - tension) / 6;
	}
	
	CardinalClosed.prototype = {
	  areaStart: noop$2,
	  areaEnd: noop$2,
	  lineStart: function() {
	    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
	    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function() {
	    switch (this._point) {
	      case 1: {
	        this._context.moveTo(this._x3, this._y3);
	        this._context.closePath();
	        break;
	      }
	      case 2: {
	        this._context.lineTo(this._x3, this._y3);
	        this._context.closePath();
	        break;
	      }
	      case 3: {
	        this.point(this._x3, this._y3);
	        this.point(this._x4, this._y4);
	        this.point(this._x5, this._y5);
	        break;
	      }
	    }
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
	      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
	      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
	      default: point$3(this, x, y); break;
	    }
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	
	var cardinalClosed = ((function custom(tension) {
	
	  function cardinal(context) {
	    return new CardinalClosed(context, tension);
	  }
	
	  cardinal.tension = function(tension) {
	    return custom(+tension);
	  };
	
	  return cardinal;
	}))(0);
	
	function CardinalOpen(context, tension) {
	  this._context = context;
	  this._k = (1 - tension) / 6;
	}
	
	CardinalOpen.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x0 = this._x1 = this._x2 =
	    this._y0 = this._y1 = this._y2 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function() {
	    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0: this._point = 1; break;
	      case 1: this._point = 2; break;
	      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
	      case 3: this._point = 4; // proceed
	      default: point$3(this, x, y); break;
	    }
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	
	var cardinalOpen = ((function custom(tension) {
	
	  function cardinal(context) {
	    return new CardinalOpen(context, tension);
	  }
	
	  cardinal.tension = function(tension) {
	    return custom(+tension);
	  };
	
	  return cardinal;
	}))(0);
	
	function point$4(that, x, y) {
	  var x1 = that._x1,
	      y1 = that._y1,
	      x2 = that._x2,
	      y2 = that._y2;
	
	  if (that._l01_a > epsilon$3) {
	    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
	        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
	    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
	    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
	  }
	
	  if (that._l23_a > epsilon$3) {
	    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
	        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
	    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
	    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
	  }
	
	  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
	}
	
	function CatmullRom(context, alpha) {
	  this._context = context;
	  this._alpha = alpha;
	}
	
	CatmullRom.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x0 = this._x1 = this._x2 =
	    this._y0 = this._y1 = this._y2 = NaN;
	    this._l01_a = this._l12_a = this._l23_a =
	    this._l01_2a = this._l12_2a = this._l23_2a =
	    this._point = 0;
	  },
	  lineEnd: function() {
	    switch (this._point) {
	      case 2: this._context.lineTo(this._x2, this._y2); break;
	      case 3: this.point(this._x2, this._y2); break;
	    }
	    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	
	    if (this._point) {
	      var x23 = this._x2 - x,
	          y23 = this._y2 - y;
	      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	    }
	
	    switch (this._point) {
	      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	      case 1: this._point = 2; break;
	      case 2: this._point = 3; // proceed
	      default: point$4(this, x, y); break;
	    }
	
	    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	
	var catmullRom = ((function custom(alpha) {
	
	  function catmullRom(context) {
	    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
	  }
	
	  catmullRom.alpha = function(alpha) {
	    return custom(+alpha);
	  };
	
	  return catmullRom;
	}))(0.5);
	
	function CatmullRomClosed(context, alpha) {
	  this._context = context;
	  this._alpha = alpha;
	}
	
	CatmullRomClosed.prototype = {
	  areaStart: noop$2,
	  areaEnd: noop$2,
	  lineStart: function() {
	    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
	    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
	    this._l01_a = this._l12_a = this._l23_a =
	    this._l01_2a = this._l12_2a = this._l23_2a =
	    this._point = 0;
	  },
	  lineEnd: function() {
	    switch (this._point) {
	      case 1: {
	        this._context.moveTo(this._x3, this._y3);
	        this._context.closePath();
	        break;
	      }
	      case 2: {
	        this._context.lineTo(this._x3, this._y3);
	        this._context.closePath();
	        break;
	      }
	      case 3: {
	        this.point(this._x3, this._y3);
	        this.point(this._x4, this._y4);
	        this.point(this._x5, this._y5);
	        break;
	      }
	    }
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	
	    if (this._point) {
	      var x23 = this._x2 - x,
	          y23 = this._y2 - y;
	      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	    }
	
	    switch (this._point) {
	      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
	      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
	      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
	      default: point$4(this, x, y); break;
	    }
	
	    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	
	var catmullRomClosed = ((function custom(alpha) {
	
	  function catmullRom(context) {
	    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
	  }
	
	  catmullRom.alpha = function(alpha) {
	    return custom(+alpha);
	  };
	
	  return catmullRom;
	}))(0.5);
	
	function CatmullRomOpen(context, alpha) {
	  this._context = context;
	  this._alpha = alpha;
	}
	
	CatmullRomOpen.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x0 = this._x1 = this._x2 =
	    this._y0 = this._y1 = this._y2 = NaN;
	    this._l01_a = this._l12_a = this._l23_a =
	    this._l01_2a = this._l12_2a = this._l23_2a =
	    this._point = 0;
	  },
	  lineEnd: function() {
	    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	
	    if (this._point) {
	      var x23 = this._x2 - x,
	          y23 = this._y2 - y;
	      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	    }
	
	    switch (this._point) {
	      case 0: this._point = 1; break;
	      case 1: this._point = 2; break;
	      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
	      case 3: this._point = 4; // proceed
	      default: point$4(this, x, y); break;
	    }
	
	    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	
	var catmullRomOpen = ((function custom(alpha) {
	
	  function catmullRom(context) {
	    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
	  }
	
	  catmullRom.alpha = function(alpha) {
	    return custom(+alpha);
	  };
	
	  return catmullRom;
	}))(0.5);
	
	function LinearClosed(context) {
	  this._context = context;
	}
	
	LinearClosed.prototype = {
	  areaStart: noop$2,
	  areaEnd: noop$2,
	  lineStart: function() {
	    this._point = 0;
	  },
	  lineEnd: function() {
	    if (this._point) this._context.closePath();
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    if (this._point) this._context.lineTo(x, y);
	    else this._point = 1, this._context.moveTo(x, y);
	  }
	};
	
	var linearClosed = function(context) {
	  return new LinearClosed(context);
	};
	
	function sign$1(x) {
	  return x < 0 ? -1 : 1;
	}
	
	// Calculate the slopes of the tangents (Hermite-type interpolation) based on
	// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
	// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
	// NOV(II), P. 443, 1990.
	function slope3(that, x2, y2) {
	  var h0 = that._x1 - that._x0,
	      h1 = x2 - that._x1,
	      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
	      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
	      p = (s0 * h1 + s1 * h0) / (h0 + h1);
	  return (sign$1(s0) + sign$1(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
	}
	
	// Calculate a one-sided slope.
	function slope2(that, t) {
	  var h = that._x1 - that._x0;
	  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
	}
	
	// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
	// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
	// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
	function point$5(that, t0, t1) {
	  var x0 = that._x0,
	      y0 = that._y0,
	      x1 = that._x1,
	      y1 = that._y1,
	      dx = (x1 - x0) / 3;
	  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
	}
	
	function MonotoneX(context) {
	  this._context = context;
	}
	
	MonotoneX.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x0 = this._x1 =
	    this._y0 = this._y1 =
	    this._t0 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function() {
	    switch (this._point) {
	      case 2: this._context.lineTo(this._x1, this._y1); break;
	      case 3: point$5(this, this._t0, slope2(this, this._t0)); break;
	    }
	    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    var t1 = NaN;
	
	    x = +x, y = +y;
	    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
	    switch (this._point) {
	      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	      case 1: this._point = 2; break;
	      case 2: this._point = 3; point$5(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
	      default: point$5(this, this._t0, t1 = slope3(this, x, y)); break;
	    }
	
	    this._x0 = this._x1, this._x1 = x;
	    this._y0 = this._y1, this._y1 = y;
	    this._t0 = t1;
	  }
	};
	
	function MonotoneY(context) {
	  this._context = new ReflectContext(context);
	}
	
	(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
	  MonotoneX.prototype.point.call(this, y, x);
	};
	
	function ReflectContext(context) {
	  this._context = context;
	}
	
	ReflectContext.prototype = {
	  moveTo: function(x, y) { this._context.moveTo(y, x); },
	  closePath: function() { this._context.closePath(); },
	  lineTo: function(x, y) { this._context.lineTo(y, x); },
	  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
	};
	
	function monotoneX(context) {
	  return new MonotoneX(context);
	}
	
	function monotoneY(context) {
	  return new MonotoneY(context);
	}
	
	function Natural(context) {
	  this._context = context;
	}
	
	Natural.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x = [];
	    this._y = [];
	  },
	  lineEnd: function() {
	    var x = this._x,
	        y = this._y,
	        n = x.length;
	
	    if (n) {
	      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
	      if (n === 2) {
	        this._context.lineTo(x[1], y[1]);
	      } else {
	        var px = controlPoints(x),
	            py = controlPoints(y);
	        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
	          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
	        }
	      }
	    }
	
	    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
	    this._line = 1 - this._line;
	    this._x = this._y = null;
	  },
	  point: function(x, y) {
	    this._x.push(+x);
	    this._y.push(+y);
	  }
	};
	
	// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
	function controlPoints(x) {
	  var i,
	      n = x.length - 1,
	      m,
	      a = new Array(n),
	      b = new Array(n),
	      r = new Array(n);
	  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
	  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
	  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
	  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
	  a[n - 1] = r[n - 1] / b[n - 1];
	  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
	  b[n - 1] = (x[n] + a[n - 1]) / 2;
	  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
	  return [a, b];
	}
	
	var natural = function(context) {
	  return new Natural(context);
	};
	
	function Step(context, t) {
	  this._context = context;
	  this._t = t;
	}
	
	Step.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x = this._y = NaN;
	    this._point = 0;
	  },
	  lineEnd: function() {
	    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
	    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	      case 1: this._point = 2; // proceed
	      default: {
	        if (this._t <= 0) {
	          this._context.lineTo(this._x, y);
	          this._context.lineTo(x, y);
	        } else {
	          var x1 = this._x * (1 - this._t) + x * this._t;
	          this._context.lineTo(x1, this._y);
	          this._context.lineTo(x1, y);
	        }
	        break;
	      }
	    }
	    this._x = x, this._y = y;
	  }
	};
	
	var step = function(context) {
	  return new Step(context, 0.5);
	};
	
	function stepBefore(context) {
	  return new Step(context, 0);
	}
	
	function stepAfter(context) {
	  return new Step(context, 1);
	}
	
	var none$1 = function(series, order) {
	  if (!((n = series.length) > 1)) return;
	  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
	    s0 = s1, s1 = series[order[i]];
	    for (j = 0; j < m; ++j) {
	      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
	    }
	  }
	};
	
	var none$2 = function(series) {
	  var n = series.length, o = new Array(n);
	  while (--n >= 0) o[n] = n;
	  return o;
	};
	
	function stackValue(d, key) {
	  return d[key];
	}
	
	var stack = function() {
	  var keys = constant$10([]),
	      order = none$2,
	      offset = none$1,
	      value = stackValue;
	
	  function stack(data) {
	    var kz = keys.apply(this, arguments),
	        i,
	        m = data.length,
	        n = kz.length,
	        sz = new Array(n),
	        oz;
	
	    for (i = 0; i < n; ++i) {
	      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
	        si[j] = sij = [0, +value(data[j], ki, j, data)];
	        sij.data = data[j];
	      }
	      si.key = ki;
	    }
	
	    for (i = 0, oz = order(sz); i < n; ++i) {
	      sz[oz[i]].index = i;
	    }
	
	    offset(sz, oz);
	    return sz;
	  }
	
	  stack.keys = function(_) {
	    return arguments.length ? (keys = typeof _ === "function" ? _ : constant$10(slice$5.call(_)), stack) : keys;
	  };
	
	  stack.value = function(_) {
	    return arguments.length ? (value = typeof _ === "function" ? _ : constant$10(+_), stack) : value;
	  };
	
	  stack.order = function(_) {
	    return arguments.length ? (order = _ == null ? none$2 : typeof _ === "function" ? _ : constant$10(slice$5.call(_)), stack) : order;
	  };
	
	  stack.offset = function(_) {
	    return arguments.length ? (offset = _ == null ? none$1 : _, stack) : offset;
	  };
	
	  return stack;
	};
	
	var expand = function(series, order) {
	  if (!((n = series.length) > 0)) return;
	  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
	    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
	    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
	  }
	  none$1(series, order);
	};
	
	var diverging = function(series, order) {
	  if (!((n = series.length) > 1)) return;
	  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
	    for (yp = yn = 0, i = 0; i < n; ++i) {
	      if ((dy = (d = series[order[i]][j])[1] - d[0]) >= 0) {
	        d[0] = yp, d[1] = yp += dy;
	      } else if (dy < 0) {
	        d[1] = yn, d[0] = yn += dy;
	      } else {
	        d[0] = yp;
	      }
	    }
	  }
	};
	
	var silhouette = function(series, order) {
	  if (!((n = series.length) > 0)) return;
	  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
	    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
	    s0[j][1] += s0[j][0] = -y / 2;
	  }
	  none$1(series, order);
	};
	
	var wiggle = function(series, order) {
	  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
	  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
	    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
	      var si = series[order[i]],
	          sij0 = si[j][1] || 0,
	          sij1 = si[j - 1][1] || 0,
	          s3 = (sij0 - sij1) / 2;
	      for (var k = 0; k < i; ++k) {
	        var sk = series[order[k]],
	            skj0 = sk[j][1] || 0,
	            skj1 = sk[j - 1][1] || 0;
	        s3 += skj0 - skj1;
	      }
	      s1 += sij0, s2 += s3 * sij0;
	    }
	    s0[j - 1][1] += s0[j - 1][0] = y;
	    if (s1) y -= s2 / s1;
	  }
	  s0[j - 1][1] += s0[j - 1][0] = y;
	  none$1(series, order);
	};
	
	var ascending$2 = function(series) {
	  var sums = series.map(sum$2);
	  return none$2(series).sort(function(a, b) { return sums[a] - sums[b]; });
	};
	
	function sum$2(series) {
	  var s = 0, i = -1, n = series.length, v;
	  while (++i < n) if (v = +series[i][1]) s += v;
	  return s;
	}
	
	var descending$2 = function(series) {
	  return ascending$2(series).reverse();
	};
	
	var insideOut = function(series) {
	  var n = series.length,
	      i,
	      j,
	      sums = series.map(sum$2),
	      order = none$2(series).sort(function(a, b) { return sums[b] - sums[a]; }),
	      top = 0,
	      bottom = 0,
	      tops = [],
	      bottoms = [];
	
	  for (i = 0; i < n; ++i) {
	    j = order[i];
	    if (top < bottom) {
	      top += sums[j];
	      tops.push(j);
	    } else {
	      bottom += sums[j];
	      bottoms.push(j);
	    }
	  }
	
	  return bottoms.reverse().concat(tops);
	};
	
	var reverse = function(series) {
	  return none$2(series).reverse();
	};
	
	var constant$11 = function(x) {
	  return function() {
	    return x;
	  };
	};
	
	function x$4(d) {
	  return d[0];
	}
	
	function y$4(d) {
	  return d[1];
	}
	
	function RedBlackTree() {
	  this._ = null; // root node
	}
	
	function RedBlackNode(node) {
	  node.U = // parent node
	  node.C = // color - true for red, false for black
	  node.L = // left node
	  node.R = // right node
	  node.P = // previous node
	  node.N = null; // next node
	}
	
	RedBlackTree.prototype = {
	  constructor: RedBlackTree,
	
	  insert: function(after, node) {
	    var parent, grandpa, uncle;
	
	    if (after) {
	      node.P = after;
	      node.N = after.N;
	      if (after.N) after.N.P = node;
	      after.N = node;
	      if (after.R) {
	        after = after.R;
	        while (after.L) after = after.L;
	        after.L = node;
	      } else {
	        after.R = node;
	      }
	      parent = after;
	    } else if (this._) {
	      after = RedBlackFirst(this._);
	      node.P = null;
	      node.N = after;
	      after.P = after.L = node;
	      parent = after;
	    } else {
	      node.P = node.N = null;
	      this._ = node;
	      parent = null;
	    }
	    node.L = node.R = null;
	    node.U = parent;
	    node.C = true;
	
	    after = node;
	    while (parent && parent.C) {
	      grandpa = parent.U;
	      if (parent === grandpa.L) {
	        uncle = grandpa.R;
	        if (uncle && uncle.C) {
	          parent.C = uncle.C = false;
	          grandpa.C = true;
	          after = grandpa;
	        } else {
	          if (after === parent.R) {
	            RedBlackRotateLeft(this, parent);
	            after = parent;
	            parent = after.U;
	          }
	          parent.C = false;
	          grandpa.C = true;
	          RedBlackRotateRight(this, grandpa);
	        }
	      } else {
	        uncle = grandpa.L;
	        if (uncle && uncle.C) {
	          parent.C = uncle.C = false;
	          grandpa.C = true;
	          after = grandpa;
	        } else {
	          if (after === parent.L) {
	            RedBlackRotateRight(this, parent);
	            after = parent;
	            parent = after.U;
	          }
	          parent.C = false;
	          grandpa.C = true;
	          RedBlackRotateLeft(this, grandpa);
	        }
	      }
	      parent = after.U;
	    }
	    this._.C = false;
	  },
	
	  remove: function(node) {
	    if (node.N) node.N.P = node.P;
	    if (node.P) node.P.N = node.N;
	    node.N = node.P = null;
	
	    var parent = node.U,
	        sibling,
	        left = node.L,
	        right = node.R,
	        next,
	        red;
	
	    if (!left) next = right;
	    else if (!right) next = left;
	    else next = RedBlackFirst(right);
	
	    if (parent) {
	      if (parent.L === node) parent.L = next;
	      else parent.R = next;
	    } else {
	      this._ = next;
	    }
	
	    if (left && right) {
	      red = next.C;
	      next.C = node.C;
	      next.L = left;
	      left.U = next;
	      if (next !== right) {
	        parent = next.U;
	        next.U = node.U;
	        node = next.R;
	        parent.L = node;
	        next.R = right;
	        right.U = next;
	      } else {
	        next.U = parent;
	        parent = next;
	        node = next.R;
	      }
	    } else {
	      red = node.C;
	      node = next;
	    }
	
	    if (node) node.U = parent;
	    if (red) return;
	    if (node && node.C) { node.C = false; return; }
	
	    do {
	      if (node === this._) break;
	      if (node === parent.L) {
	        sibling = parent.R;
	        if (sibling.C) {
	          sibling.C = false;
	          parent.C = true;
	          RedBlackRotateLeft(this, parent);
	          sibling = parent.R;
	        }
	        if ((sibling.L && sibling.L.C)
	            || (sibling.R && sibling.R.C)) {
	          if (!sibling.R || !sibling.R.C) {
	            sibling.L.C = false;
	            sibling.C = true;
	            RedBlackRotateRight(this, sibling);
	            sibling = parent.R;
	          }
	          sibling.C = parent.C;
	          parent.C = sibling.R.C = false;
	          RedBlackRotateLeft(this, parent);
	          node = this._;
	          break;
	        }
	      } else {
	        sibling = parent.L;
	        if (sibling.C) {
	          sibling.C = false;
	          parent.C = true;
	          RedBlackRotateRight(this, parent);
	          sibling = parent.L;
	        }
	        if ((sibling.L && sibling.L.C)
	          || (sibling.R && sibling.R.C)) {
	          if (!sibling.L || !sibling.L.C) {
	            sibling.R.C = false;
	            sibling.C = true;
	            RedBlackRotateLeft(this, sibling);
	            sibling = parent.L;
	          }
	          sibling.C = parent.C;
	          parent.C = sibling.L.C = false;
	          RedBlackRotateRight(this, parent);
	          node = this._;
	          break;
	        }
	      }
	      sibling.C = true;
	      node = parent;
	      parent = parent.U;
	    } while (!node.C);
	
	    if (node) node.C = false;
	  }
	};
	
	function RedBlackRotateLeft(tree, node) {
	  var p = node,
	      q = node.R,
	      parent = p.U;
	
	  if (parent) {
	    if (parent.L === p) parent.L = q;
	    else parent.R = q;
	  } else {
	    tree._ = q;
	  }
	
	  q.U = parent;
	  p.U = q;
	  p.R = q.L;
	  if (p.R) p.R.U = p;
	  q.L = p;
	}
	
	function RedBlackRotateRight(tree, node) {
	  var p = node,
	      q = node.L,
	      parent = p.U;
	
	  if (parent) {
	    if (parent.L === p) parent.L = q;
	    else parent.R = q;
	  } else {
	    tree._ = q;
	  }
	
	  q.U = parent;
	  p.U = q;
	  p.L = q.R;
	  if (p.L) p.L.U = p;
	  q.R = p;
	}
	
	function RedBlackFirst(node) {
	  while (node.L) node = node.L;
	  return node;
	}
	
	function createEdge(left, right, v0, v1) {
	  var edge = [null, null],
	      index = edges.push(edge) - 1;
	  edge.left = left;
	  edge.right = right;
	  if (v0) setEdgeEnd(edge, left, right, v0);
	  if (v1) setEdgeEnd(edge, right, left, v1);
	  cells[left.index].halfedges.push(index);
	  cells[right.index].halfedges.push(index);
	  return edge;
	}
	
	function createBorderEdge(left, v0, v1) {
	  var edge = [v0, v1];
	  edge.left = left;
	  return edge;
	}
	
	function setEdgeEnd(edge, left, right, vertex) {
	  if (!edge[0] && !edge[1]) {
	    edge[0] = vertex;
	    edge.left = left;
	    edge.right = right;
	  } else if (edge.left === right) {
	    edge[1] = vertex;
	  } else {
	    edge[0] = vertex;
	  }
	}
	
	// Liang–Barsky line clipping.
	function clipEdge(edge, x0, y0, x1, y1) {
	  var a = edge[0],
	      b = edge[1],
	      ax = a[0],
	      ay = a[1],
	      bx = b[0],
	      by = b[1],
	      t0 = 0,
	      t1 = 1,
	      dx = bx - ax,
	      dy = by - ay,
	      r;
	
	  r = x0 - ax;
	  if (!dx && r > 0) return;
	  r /= dx;
	  if (dx < 0) {
	    if (r < t0) return;
	    if (r < t1) t1 = r;
	  } else if (dx > 0) {
	    if (r > t1) return;
	    if (r > t0) t0 = r;
	  }
	
	  r = x1 - ax;
	  if (!dx && r < 0) return;
	  r /= dx;
	  if (dx < 0) {
	    if (r > t1) return;
	    if (r > t0) t0 = r;
	  } else if (dx > 0) {
	    if (r < t0) return;
	    if (r < t1) t1 = r;
	  }
	
	  r = y0 - ay;
	  if (!dy && r > 0) return;
	  r /= dy;
	  if (dy < 0) {
	    if (r < t0) return;
	    if (r < t1) t1 = r;
	  } else if (dy > 0) {
	    if (r > t1) return;
	    if (r > t0) t0 = r;
	  }
	
	  r = y1 - ay;
	  if (!dy && r < 0) return;
	  r /= dy;
	  if (dy < 0) {
	    if (r > t1) return;
	    if (r > t0) t0 = r;
	  } else if (dy > 0) {
	    if (r < t0) return;
	    if (r < t1) t1 = r;
	  }
	
	  if (!(t0 > 0) && !(t1 < 1)) return true; // TODO Better check?
	
	  if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
	  if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
	  return true;
	}
	
	function connectEdge(edge, x0, y0, x1, y1) {
	  var v1 = edge[1];
	  if (v1) return true;
	
	  var v0 = edge[0],
	      left = edge.left,
	      right = edge.right,
	      lx = left[0],
	      ly = left[1],
	      rx = right[0],
	      ry = right[1],
	      fx = (lx + rx) / 2,
	      fy = (ly + ry) / 2,
	      fm,
	      fb;
	
	  if (ry === ly) {
	    if (fx < x0 || fx >= x1) return;
	    if (lx > rx) {
	      if (!v0) v0 = [fx, y0];
	      else if (v0[1] >= y1) return;
	      v1 = [fx, y1];
	    } else {
	      if (!v0) v0 = [fx, y1];
	      else if (v0[1] < y0) return;
	      v1 = [fx, y0];
	    }
	  } else {
	    fm = (lx - rx) / (ry - ly);
	    fb = fy - fm * fx;
	    if (fm < -1 || fm > 1) {
	      if (lx > rx) {
	        if (!v0) v0 = [(y0 - fb) / fm, y0];
	        else if (v0[1] >= y1) return;
	        v1 = [(y1 - fb) / fm, y1];
	      } else {
	        if (!v0) v0 = [(y1 - fb) / fm, y1];
	        else if (v0[1] < y0) return;
	        v1 = [(y0 - fb) / fm, y0];
	      }
	    } else {
	      if (ly < ry) {
	        if (!v0) v0 = [x0, fm * x0 + fb];
	        else if (v0[0] >= x1) return;
	        v1 = [x1, fm * x1 + fb];
	      } else {
	        if (!v0) v0 = [x1, fm * x1 + fb];
	        else if (v0[0] < x0) return;
	        v1 = [x0, fm * x0 + fb];
	      }
	    }
	  }
	
	  edge[0] = v0;
	  edge[1] = v1;
	  return true;
	}
	
	function clipEdges(x0, y0, x1, y1) {
	  var i = edges.length,
	      edge;
	
	  while (i--) {
	    if (!connectEdge(edge = edges[i], x0, y0, x1, y1)
	        || !clipEdge(edge, x0, y0, x1, y1)
	        || !(Math.abs(edge[0][0] - edge[1][0]) > epsilon$4
	            || Math.abs(edge[0][1] - edge[1][1]) > epsilon$4)) {
	      delete edges[i];
	    }
	  }
	}
	
	function createCell(site) {
	  return cells[site.index] = {
	    site: site,
	    halfedges: []
	  };
	}
	
	function cellHalfedgeAngle(cell, edge) {
	  var site = cell.site,
	      va = edge.left,
	      vb = edge.right;
	  if (site === vb) vb = va, va = site;
	  if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
	  if (site === va) va = edge[1], vb = edge[0];
	  else va = edge[0], vb = edge[1];
	  return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
	}
	
	function cellHalfedgeStart(cell, edge) {
	  return edge[+(edge.left !== cell.site)];
	}
	
	function cellHalfedgeEnd(cell, edge) {
	  return edge[+(edge.left === cell.site)];
	}
	
	function sortCellHalfedges() {
	  for (var i = 0, n = cells.length, cell, halfedges, j, m; i < n; ++i) {
	    if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
	      var index = new Array(m),
	          array = new Array(m);
	      for (j = 0; j < m; ++j) index[j] = j, array[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
	      index.sort(function(i, j) { return array[j] - array[i]; });
	      for (j = 0; j < m; ++j) array[j] = halfedges[index[j]];
	      for (j = 0; j < m; ++j) halfedges[j] = array[j];
	    }
	  }
	}
	
	function clipCells(x0, y0, x1, y1) {
	  var nCells = cells.length,
	      iCell,
	      cell,
	      site,
	      iHalfedge,
	      halfedges,
	      nHalfedges,
	      start,
	      startX,
	      startY,
	      end,
	      endX,
	      endY,
	      cover = true;
	
	  for (iCell = 0; iCell < nCells; ++iCell) {
	    if (cell = cells[iCell]) {
	      site = cell.site;
	      halfedges = cell.halfedges;
	      iHalfedge = halfedges.length;
	
	      // Remove any dangling clipped edges.
	      while (iHalfedge--) {
	        if (!edges[halfedges[iHalfedge]]) {
	          halfedges.splice(iHalfedge, 1);
	        }
	      }
	
	      // Insert any border edges as necessary.
	      iHalfedge = 0, nHalfedges = halfedges.length;
	      while (iHalfedge < nHalfedges) {
	        end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
	        start = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
	        if (Math.abs(endX - startX) > epsilon$4 || Math.abs(endY - startY) > epsilon$4) {
	          halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(site, end,
	              Math.abs(endX - x0) < epsilon$4 && y1 - endY > epsilon$4 ? [x0, Math.abs(startX - x0) < epsilon$4 ? startY : y1]
	              : Math.abs(endY - y1) < epsilon$4 && x1 - endX > epsilon$4 ? [Math.abs(startY - y1) < epsilon$4 ? startX : x1, y1]
	              : Math.abs(endX - x1) < epsilon$4 && endY - y0 > epsilon$4 ? [x1, Math.abs(startX - x1) < epsilon$4 ? startY : y0]
	              : Math.abs(endY - y0) < epsilon$4 && endX - x0 > epsilon$4 ? [Math.abs(startY - y0) < epsilon$4 ? startX : x0, y0]
	              : null)) - 1);
	          ++nHalfedges;
	        }
	      }
	
	      if (nHalfedges) cover = false;
	    }
	  }
	
	  // If there weren’t any edges, have the closest site cover the extent.
	  // It doesn’t matter which corner of the extent we measure!
	  if (cover) {
	    var dx, dy, d2, dc = Infinity;
	
	    for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
	      if (cell = cells[iCell]) {
	        site = cell.site;
	        dx = site[0] - x0;
	        dy = site[1] - y0;
	        d2 = dx * dx + dy * dy;
	        if (d2 < dc) dc = d2, cover = cell;
	      }
	    }
	
	    if (cover) {
	      var v00 = [x0, y0], v01 = [x0, y1], v11 = [x1, y1], v10 = [x1, y0];
	      cover.halfedges.push(
	        edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1,
	        edges.push(createBorderEdge(site, v01, v11)) - 1,
	        edges.push(createBorderEdge(site, v11, v10)) - 1,
	        edges.push(createBorderEdge(site, v10, v00)) - 1
	      );
	    }
	  }
	
	  // Lastly delete any cells with no edges; these were entirely clipped.
	  for (iCell = 0; iCell < nCells; ++iCell) {
	    if (cell = cells[iCell]) {
	      if (!cell.halfedges.length) {
	        delete cells[iCell];
	      }
	    }
	  }
	}
	
	var circlePool = [];
	
	var firstCircle;
	
	function Circle() {
	  RedBlackNode(this);
	  this.x =
	  this.y =
	  this.arc =
	  this.site =
	  this.cy = null;
	}
	
	function attachCircle(arc) {
	  var lArc = arc.P,
	      rArc = arc.N;
	
	  if (!lArc || !rArc) return;
	
	  var lSite = lArc.site,
	      cSite = arc.site,
	      rSite = rArc.site;
	
	  if (lSite === rSite) return;
	
	  var bx = cSite[0],
	      by = cSite[1],
	      ax = lSite[0] - bx,
	      ay = lSite[1] - by,
	      cx = rSite[0] - bx,
	      cy = rSite[1] - by;
	
	  var d = 2 * (ax * cy - ay * cx);
	  if (d >= -epsilon2$2) return;
	
	  var ha = ax * ax + ay * ay,
	      hc = cx * cx + cy * cy,
	      x = (cy * ha - ay * hc) / d,
	      y = (ax * hc - cx * ha) / d;
	
	  var circle = circlePool.pop() || new Circle;
	  circle.arc = arc;
	  circle.site = cSite;
	  circle.x = x + bx;
	  circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom
	
	  arc.circle = circle;
	
	  var before = null,
	      node = circles._;
	
	  while (node) {
	    if (circle.y < node.y || (circle.y === node.y && circle.x <= node.x)) {
	      if (node.L) node = node.L;
	      else { before = node.P; break; }
	    } else {
	      if (node.R) node = node.R;
	      else { before = node; break; }
	    }
	  }
	
	  circles.insert(before, circle);
	  if (!before) firstCircle = circle;
	}
	
	function detachCircle(arc) {
	  var circle = arc.circle;
	  if (circle) {
	    if (!circle.P) firstCircle = circle.N;
	    circles.remove(circle);
	    circlePool.push(circle);
	    RedBlackNode(circle);
	    arc.circle = null;
	  }
	}
	
	var beachPool = [];
	
	function Beach() {
	  RedBlackNode(this);
	  this.edge =
	  this.site =
	  this.circle = null;
	}
	
	function createBeach(site) {
	  var beach = beachPool.pop() || new Beach;
	  beach.site = site;
	  return beach;
	}
	
	function detachBeach(beach) {
	  detachCircle(beach);
	  beaches.remove(beach);
	  beachPool.push(beach);
	  RedBlackNode(beach);
	}
	
	function removeBeach(beach) {
	  var circle = beach.circle,
	      x = circle.x,
	      y = circle.cy,
	      vertex = [x, y],
	      previous = beach.P,
	      next = beach.N,
	      disappearing = [beach];
	
	  detachBeach(beach);
	
	  var lArc = previous;
	  while (lArc.circle
	      && Math.abs(x - lArc.circle.x) < epsilon$4
	      && Math.abs(y - lArc.circle.cy) < epsilon$4) {
	    previous = lArc.P;
	    disappearing.unshift(lArc);
	    detachBeach(lArc);
	    lArc = previous;
	  }
	
	  disappearing.unshift(lArc);
	  detachCircle(lArc);
	
	  var rArc = next;
	  while (rArc.circle
	      && Math.abs(x - rArc.circle.x) < epsilon$4
	      && Math.abs(y - rArc.circle.cy) < epsilon$4) {
	    next = rArc.N;
	    disappearing.push(rArc);
	    detachBeach(rArc);
	    rArc = next;
	  }
	
	  disappearing.push(rArc);
	  detachCircle(rArc);
	
	  var nArcs = disappearing.length,
	      iArc;
	  for (iArc = 1; iArc < nArcs; ++iArc) {
	    rArc = disappearing[iArc];
	    lArc = disappearing[iArc - 1];
	    setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
	  }
	
	  lArc = disappearing[0];
	  rArc = disappearing[nArcs - 1];
	  rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);
	
	  attachCircle(lArc);
	  attachCircle(rArc);
	}
	
	function addBeach(site) {
	  var x = site[0],
	      directrix = site[1],
	      lArc,
	      rArc,
	      dxl,
	      dxr,
	      node = beaches._;
	
	  while (node) {
	    dxl = leftBreakPoint(node, directrix) - x;
	    if (dxl > epsilon$4) node = node.L; else {
	      dxr = x - rightBreakPoint(node, directrix);
	      if (dxr > epsilon$4) {
	        if (!node.R) {
	          lArc = node;
	          break;
	        }
	        node = node.R;
	      } else {
	        if (dxl > -epsilon$4) {
	          lArc = node.P;
	          rArc = node;
	        } else if (dxr > -epsilon$4) {
	          lArc = node;
	          rArc = node.N;
	        } else {
	          lArc = rArc = node;
	        }
	        break;
	      }
	    }
	  }
	
	  createCell(site);
	  var newArc = createBeach(site);
	  beaches.insert(lArc, newArc);
	
	  if (!lArc && !rArc) return;
	
	  if (lArc === rArc) {
	    detachCircle(lArc);
	    rArc = createBeach(lArc.site);
	    beaches.insert(newArc, rArc);
	    newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
	    attachCircle(lArc);
	    attachCircle(rArc);
	    return;
	  }
	
	  if (!rArc) { // && lArc
	    newArc.edge = createEdge(lArc.site, newArc.site);
	    return;
	  }
	
	  // else lArc !== rArc
	  detachCircle(lArc);
	  detachCircle(rArc);
	
	  var lSite = lArc.site,
	      ax = lSite[0],
	      ay = lSite[1],
	      bx = site[0] - ax,
	      by = site[1] - ay,
	      rSite = rArc.site,
	      cx = rSite[0] - ax,
	      cy = rSite[1] - ay,
	      d = 2 * (bx * cy - by * cx),
	      hb = bx * bx + by * by,
	      hc = cx * cx + cy * cy,
	      vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];
	
	  setEdgeEnd(rArc.edge, lSite, rSite, vertex);
	  newArc.edge = createEdge(lSite, site, null, vertex);
	  rArc.edge = createEdge(site, rSite, null, vertex);
	  attachCircle(lArc);
	  attachCircle(rArc);
	}
	
	function leftBreakPoint(arc, directrix) {
	  var site = arc.site,
	      rfocx = site[0],
	      rfocy = site[1],
	      pby2 = rfocy - directrix;
	
	  if (!pby2) return rfocx;
	
	  var lArc = arc.P;
	  if (!lArc) return -Infinity;
	
	  site = lArc.site;
	  var lfocx = site[0],
	      lfocy = site[1],
	      plby2 = lfocy - directrix;
	
	  if (!plby2) return lfocx;
	
	  var hl = lfocx - rfocx,
	      aby2 = 1 / pby2 - 1 / plby2,
	      b = hl / plby2;
	
	  if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
	
	  return (rfocx + lfocx) / 2;
	}
	
	function rightBreakPoint(arc, directrix) {
	  var rArc = arc.N;
	  if (rArc) return leftBreakPoint(rArc, directrix);
	  var site = arc.site;
	  return site[1] === directrix ? site[0] : Infinity;
	}
	
	var epsilon$4 = 1e-6;
	var epsilon2$2 = 1e-12;
	var beaches;
	var cells;
	var circles;
	var edges;
	
	function triangleArea(a, b, c) {
	  return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
	}
	
	function lexicographic(a, b) {
	  return b[1] - a[1]
	      || b[0] - a[0];
	}
	
	function Diagram(sites, extent) {
	  var site = sites.sort(lexicographic).pop(),
	      x,
	      y,
	      circle;
	
	  edges = [];
	  cells = new Array(sites.length);
	  beaches = new RedBlackTree;
	  circles = new RedBlackTree;
	
	  while (true) {
	    circle = firstCircle;
	    if (site && (!circle || site[1] < circle.y || (site[1] === circle.y && site[0] < circle.x))) {
	      if (site[0] !== x || site[1] !== y) {
	        addBeach(site);
	        x = site[0], y = site[1];
	      }
	      site = sites.pop();
	    } else if (circle) {
	      removeBeach(circle.arc);
	    } else {
	      break;
	    }
	  }
	
	  sortCellHalfedges();
	
	  if (extent) {
	    var x0 = +extent[0][0],
	        y0 = +extent[0][1],
	        x1 = +extent[1][0],
	        y1 = +extent[1][1];
	    clipEdges(x0, y0, x1, y1);
	    clipCells(x0, y0, x1, y1);
	  }
	
	  this.edges = edges;
	  this.cells = cells;
	
	  beaches =
	  circles =
	  edges =
	  cells = null;
	}
	
	Diagram.prototype = {
	  constructor: Diagram,
	
	  polygons: function() {
	    var edges = this.edges;
	
	    return this.cells.map(function(cell) {
	      var polygon = cell.halfedges.map(function(i) { return cellHalfedgeStart(cell, edges[i]); });
	      polygon.data = cell.site.data;
	      return polygon;
	    });
	  },
	
	  triangles: function() {
	    var triangles = [],
	        edges = this.edges;
	
	    this.cells.forEach(function(cell, i) {
	      if (!(m = (halfedges = cell.halfedges).length)) return;
	      var site = cell.site,
	          halfedges,
	          j = -1,
	          m,
	          s0,
	          e1 = edges[halfedges[m - 1]],
	          s1 = e1.left === site ? e1.right : e1.left;
	
	      while (++j < m) {
	        s0 = s1;
	        e1 = edges[halfedges[j]];
	        s1 = e1.left === site ? e1.right : e1.left;
	        if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
	          triangles.push([site.data, s0.data, s1.data]);
	        }
	      }
	    });
	
	    return triangles;
	  },
	
	  links: function() {
	    return this.edges.filter(function(edge) {
	      return edge.right;
	    }).map(function(edge) {
	      return {
	        source: edge.left.data,
	        target: edge.right.data
	      };
	    });
	  },
	
	  find: function(x, y, radius) {
	    var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;
	
	    // Use the previously-found cell, or start with an arbitrary one.
	    while (!(cell = that.cells[i1])) if (++i1 >= n) return null;
	    var dx = x - cell.site[0], dy = y - cell.site[1], d2 = dx * dx + dy * dy;
	
	    // Traverse the half-edges to find a closer cell, if any.
	    do {
	      cell = that.cells[i0 = i1], i1 = null;
	      cell.halfedges.forEach(function(e) {
	        var edge = that.edges[e], v = edge.left;
	        if ((v === cell.site || !v) && !(v = edge.right)) return;
	        var vx = x - v[0], vy = y - v[1], v2 = vx * vx + vy * vy;
	        if (v2 < d2) d2 = v2, i1 = v.index;
	      });
	    } while (i1 !== null);
	
	    that._found = i0;
	
	    return radius == null || d2 <= radius * radius ? cell.site : null;
	  }
	};
	
	var voronoi = function() {
	  var x$$1 = x$4,
	      y$$1 = y$4,
	      extent = null;
	
	  function voronoi(data) {
	    return new Diagram(data.map(function(d, i) {
	      var s = [Math.round(x$$1(d, i, data) / epsilon$4) * epsilon$4, Math.round(y$$1(d, i, data) / epsilon$4) * epsilon$4];
	      s.index = i;
	      s.data = d;
	      return s;
	    }), extent);
	  }
	
	  voronoi.polygons = function(data) {
	    return voronoi(data).polygons();
	  };
	
	  voronoi.links = function(data) {
	    return voronoi(data).links();
	  };
	
	  voronoi.triangles = function(data) {
	    return voronoi(data).triangles();
	  };
	
	  voronoi.x = function(_) {
	    return arguments.length ? (x$$1 = typeof _ === "function" ? _ : constant$11(+_), voronoi) : x$$1;
	  };
	
	  voronoi.y = function(_) {
	    return arguments.length ? (y$$1 = typeof _ === "function" ? _ : constant$11(+_), voronoi) : y$$1;
	  };
	
	  voronoi.extent = function(_) {
	    return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
	  };
	
	  voronoi.size = function(_) {
	    return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
	  };
	
	  return voronoi;
	};
	
	var constant$12 = function(x) {
	  return function() {
	    return x;
	  };
	};
	
	function ZoomEvent(target, type, transform) {
	  this.target = target;
	  this.type = type;
	  this.transform = transform;
	}
	
	function Transform(k, x, y) {
	  this.k = k;
	  this.x = x;
	  this.y = y;
	}
	
	Transform.prototype = {
	  constructor: Transform,
	  scale: function(k) {
	    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
	  },
	  translate: function(x, y) {
	    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
	  },
	  apply: function(point) {
	    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
	  },
	  applyX: function(x) {
	    return x * this.k + this.x;
	  },
	  applyY: function(y) {
	    return y * this.k + this.y;
	  },
	  invert: function(location) {
	    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
	  },
	  invertX: function(x) {
	    return (x - this.x) / this.k;
	  },
	  invertY: function(y) {
	    return (y - this.y) / this.k;
	  },
	  rescaleX: function(x) {
	    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
	  },
	  rescaleY: function(y) {
	    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
	  },
	  toString: function() {
	    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	  }
	};
	
	var identity$8 = new Transform(1, 0, 0);
	
	transform$1.prototype = Transform.prototype;
	
	function transform$1(node) {
	  return node.__zoom || identity$8;
	}
	
	function nopropagation$2() {
	  exports.event.stopImmediatePropagation();
	}
	
	var noevent$2 = function() {
	  exports.event.preventDefault();
	  exports.event.stopImmediatePropagation();
	};
	
	// Ignore right-click, since that should open the context menu.
	function defaultFilter$2() {
	  return !exports.event.button;
	}
	
	function defaultExtent$1() {
	  var e = this, w, h;
	  if (e instanceof SVGElement) {
	    e = e.ownerSVGElement || e;
	    w = e.width.baseVal.value;
	    h = e.height.baseVal.value;
	  } else {
	    w = e.clientWidth;
	    h = e.clientHeight;
	  }
	  return [[0, 0], [w, h]];
	}
	
	function defaultTransform() {
	  return this.__zoom || identity$8;
	}
	
	var zoom = function() {
	  var filter = defaultFilter$2,
	      extent = defaultExtent$1,
	      k0 = 0,
	      k1 = Infinity,
	      x0 = -k1,
	      x1 = k1,
	      y0 = x0,
	      y1 = x1,
	      duration = 250,
	      interpolate$$1 = interpolateZoom,
	      gestures = [],
	      listeners = dispatch("start", "zoom", "end"),
	      touchstarting,
	      touchending,
	      touchDelay = 500,
	      wheelDelay = 150,
	      clickDistance2 = 0;
	
	  function zoom(selection$$1) {
	    selection$$1
	        .on("wheel.zoom", wheeled)
	        .on("mousedown.zoom", mousedowned)
	        .on("dblclick.zoom", dblclicked)
	        .on("touchstart.zoom", touchstarted)
	        .on("touchmove.zoom", touchmoved)
	        .on("touchend.zoom touchcancel.zoom", touchended)
	        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
	        .property("__zoom", defaultTransform);
	  }
	
	  zoom.transform = function(collection, transform) {
	    var selection$$1 = collection.selection ? collection.selection() : collection;
	    selection$$1.property("__zoom", defaultTransform);
	    if (collection !== selection$$1) {
	      schedule(collection, transform);
	    } else {
	      selection$$1.interrupt().each(function() {
	        gesture(this, arguments)
	            .start()
	            .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
	            .end();
	      });
	    }
	  };
	
	  zoom.scaleBy = function(selection$$1, k) {
	    zoom.scaleTo(selection$$1, function() {
	      var k0 = this.__zoom.k,
	          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
	      return k0 * k1;
	    });
	  };
	
	  zoom.scaleTo = function(selection$$1, k) {
	    zoom.transform(selection$$1, function() {
	      var e = extent.apply(this, arguments),
	          t0 = this.__zoom,
	          p0 = centroid(e),
	          p1 = t0.invert(p0),
	          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
	      return constrain(translate(scale(t0, k1), p0, p1), e);
	    });
	  };
	
	  zoom.translateBy = function(selection$$1, x, y) {
	    zoom.transform(selection$$1, function() {
	      return constrain(this.__zoom.translate(
	        typeof x === "function" ? x.apply(this, arguments) : x,
	        typeof y === "function" ? y.apply(this, arguments) : y
	      ), extent.apply(this, arguments));
	    });
	  };
	
	  function scale(transform, k) {
	    k = Math.max(k0, Math.min(k1, k));
	    return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
	  }
	
	  function translate(transform, p0, p1) {
	    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
	    return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
	  }
	
	  function constrain(transform, extent) {
	    var dx0 = transform.invertX(extent[0][0]) - x0,
	        dx1 = transform.invertX(extent[1][0]) - x1,
	        dy0 = transform.invertY(extent[0][1]) - y0,
	        dy1 = transform.invertY(extent[1][1]) - y1;
	    return transform.translate(
	      dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
	      dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
	    );
	  }
	
	  function centroid(extent) {
	    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
	  }
	
	  function schedule(transition$$1, transform, center) {
	    transition$$1
	        .on("start.zoom", function() { gesture(this, arguments).start(); })
	        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).end(); })
	        .tween("zoom", function() {
	          var that = this,
	              args = arguments,
	              g = gesture(that, args),
	              e = extent.apply(that, args),
	              p = center || centroid(e),
	              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
	              a = that.__zoom,
	              b = typeof transform === "function" ? transform.apply(that, args) : transform,
	              i = interpolate$$1(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
	          return function(t) {
	            if (t === 1) t = b; // Avoid rounding error on end.
	            else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
	            g.zoom(null, t);
	          };
	        });
	  }
	
	  function gesture(that, args) {
	    for (var i = 0, n = gestures.length, g; i < n; ++i) {
	      if ((g = gestures[i]).that === that) {
	        return g;
	      }
	    }
	    return new Gesture(that, args);
	  }
	
	  function Gesture(that, args) {
	    this.that = that;
	    this.args = args;
	    this.index = -1;
	    this.active = 0;
	    this.extent = extent.apply(that, args);
	  }
	
	  Gesture.prototype = {
	    start: function() {
	      if (++this.active === 1) {
	        this.index = gestures.push(this) - 1;
	        this.emit("start");
	      }
	      return this;
	    },
	    zoom: function(key, transform) {
	      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
	      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
	      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
	      this.that.__zoom = transform;
	      this.emit("zoom");
	      return this;
	    },
	    end: function() {
	      if (--this.active === 0) {
	        gestures.splice(this.index, 1);
	        this.index = -1;
	        this.emit("end");
	      }
	      return this;
	    },
	    emit: function(type) {
	      customEvent(new ZoomEvent(zoom, type, this.that.__zoom), listeners.apply, listeners, [type, this.that, this.args]);
	    }
	  };
	
	  function wheeled() {
	    if (!filter.apply(this, arguments)) return;
	    var g = gesture(this, arguments),
	        t = this.__zoom,
	        k = Math.max(k0, Math.min(k1, t.k * Math.pow(2, -exports.event.deltaY * (exports.event.deltaMode ? 120 : 1) / 500))),
	        p = mouse(this);
	
	    // If the mouse is in the same location as before, reuse it.
	    // If there were recent wheel events, reset the wheel idle timeout.
	    if (g.wheel) {
	      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
	        g.mouse[1] = t.invert(g.mouse[0] = p);
	      }
	      clearTimeout(g.wheel);
	    }
	
	    // If this wheel event won’t trigger a transform change, ignore it.
	    else if (t.k === k) return;
	
	    // Otherwise, capture the mouse point and location at the start.
	    else {
	      g.mouse = [p, t.invert(p)];
	      interrupt(this);
	      g.start();
	    }
	
	    noevent$2();
	    g.wheel = setTimeout(wheelidled, wheelDelay);
	    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent));
	
	    function wheelidled() {
	      g.wheel = null;
	      g.end();
	    }
	  }
	
	  function mousedowned() {
	    if (touchending || !filter.apply(this, arguments)) return;
	    var g = gesture(this, arguments),
	        v = select(exports.event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
	        p = mouse(this),
	        x0 = exports.event.clientX,
	        y0 = exports.event.clientY;
	
	    dragDisable(exports.event.view);
	    nopropagation$2();
	    g.mouse = [p, this.__zoom.invert(p)];
	    interrupt(this);
	    g.start();
	
	    function mousemoved() {
	      noevent$2();
	      if (!g.moved) {
	        var dx = exports.event.clientX - x0, dy = exports.event.clientY - y0;
	        g.moved = dx * dx + dy * dy > clickDistance2;
	      }
	      g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = mouse(g.that), g.mouse[1]), g.extent));
	    }
	
	    function mouseupped() {
	      v.on("mousemove.zoom mouseup.zoom", null);
	      yesdrag(exports.event.view, g.moved);
	      noevent$2();
	      g.end();
	    }
	  }
	
	  function dblclicked() {
	    if (!filter.apply(this, arguments)) return;
	    var t0 = this.__zoom,
	        p0 = mouse(this),
	        p1 = t0.invert(p0),
	        k1 = t0.k * (exports.event.shiftKey ? 0.5 : 2),
	        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, arguments));
	
	    noevent$2();
	    if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0);
	    else select(this).call(zoom.transform, t1);
	  }
	
	  function touchstarted() {
	    if (!filter.apply(this, arguments)) return;
	    var g = gesture(this, arguments),
	        touches$$1 = exports.event.changedTouches,
	        started,
	        n = touches$$1.length, i, t, p;
	
	    nopropagation$2();
	    for (i = 0; i < n; ++i) {
	      t = touches$$1[i], p = touch(this, touches$$1, t.identifier);
	      p = [p, this.__zoom.invert(p), t.identifier];
	      if (!g.touch0) g.touch0 = p, started = true;
	      else if (!g.touch1) g.touch1 = p;
	    }
	
	    // If this is a dbltap, reroute to the (optional) dblclick.zoom handler.
	    if (touchstarting) {
	      touchstarting = clearTimeout(touchstarting);
	      if (!g.touch1) {
	        g.end();
	        p = select(this).on("dblclick.zoom");
	        if (p) p.apply(this, arguments);
	        return;
	      }
	    }
	
	    if (started) {
	      touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
	      interrupt(this);
	      g.start();
	    }
	  }
	
	  function touchmoved() {
	    var g = gesture(this, arguments),
	        touches$$1 = exports.event.changedTouches,
	        n = touches$$1.length, i, t, p, l;
	
	    noevent$2();
	    if (touchstarting) touchstarting = clearTimeout(touchstarting);
	    for (i = 0; i < n; ++i) {
	      t = touches$$1[i], p = touch(this, touches$$1, t.identifier);
	      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
	      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
	    }
	    t = g.that.__zoom;
	    if (g.touch1) {
	      var p0 = g.touch0[0], l0 = g.touch0[1],
	          p1 = g.touch1[0], l1 = g.touch1[1],
	          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
	          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
	      t = scale(t, Math.sqrt(dp / dl));
	      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
	      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
	    }
	    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
	    else return;
	    g.zoom("touch", constrain(translate(t, p, l), g.extent));
	  }
	
	  function touchended() {
	    var g = gesture(this, arguments),
	        touches$$1 = exports.event.changedTouches,
	        n = touches$$1.length, i, t;
	
	    nopropagation$2();
	    if (touchending) clearTimeout(touchending);
	    touchending = setTimeout(function() { touchending = null; }, touchDelay);
	    for (i = 0; i < n; ++i) {
	      t = touches$$1[i];
	      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
	      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
	    }
	    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
	    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
	    else g.end();
	  }
	
	  zoom.filter = function(_) {
	    return arguments.length ? (filter = typeof _ === "function" ? _ : constant$12(!!_), zoom) : filter;
	  };
	
	  zoom.extent = function(_) {
	    return arguments.length ? (extent = typeof _ === "function" ? _ : constant$12([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
	  };
	
	  zoom.scaleExtent = function(_) {
	    return arguments.length ? (k0 = +_[0], k1 = +_[1], zoom) : [k0, k1];
	  };
	
	  zoom.translateExtent = function(_) {
	    return arguments.length ? (x0 = +_[0][0], x1 = +_[1][0], y0 = +_[0][1], y1 = +_[1][1], zoom) : [[x0, y0], [x1, y1]];
	  };
	
	  zoom.duration = function(_) {
	    return arguments.length ? (duration = +_, zoom) : duration;
	  };
	
	  zoom.interpolate = function(_) {
	    return arguments.length ? (interpolate$$1 = _, zoom) : interpolate$$1;
	  };
	
	  zoom.on = function() {
	    var value = listeners.on.apply(listeners, arguments);
	    return value === listeners ? zoom : value;
	  };
	
	  zoom.clickDistance = function(_) {
	    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
	  };
	    
	  return zoom;
	};
	
	exports.version = version;
	exports.bisect = bisectRight;
	exports.bisectRight = bisectRight;
	exports.bisectLeft = bisectLeft;
	exports.ascending = ascending;
	exports.bisector = bisector;
	exports.cross = cross;
	exports.descending = descending;
	exports.deviation = deviation;
	exports.extent = extent;
	exports.histogram = histogram;
	exports.thresholdFreedmanDiaconis = freedmanDiaconis;
	exports.thresholdScott = scott;
	exports.thresholdSturges = sturges;
	exports.max = max;
	exports.mean = mean;
	exports.median = median;
	exports.merge = merge;
	exports.min = min;
	exports.pairs = pairs;
	exports.permute = permute;
	exports.quantile = threshold;
	exports.range = sequence;
	exports.scan = scan;
	exports.shuffle = shuffle;
	exports.sum = sum;
	exports.ticks = ticks;
	exports.tickIncrement = tickIncrement;
	exports.tickStep = tickStep;
	exports.transpose = transpose;
	exports.variance = variance;
	exports.zip = zip;
	exports.axisTop = axisTop;
	exports.axisRight = axisRight;
	exports.axisBottom = axisBottom;
	exports.axisLeft = axisLeft;
	exports.brush = brush;
	exports.brushX = brushX;
	exports.brushY = brushY;
	exports.brushSelection = brushSelection;
	exports.chord = chord;
	exports.ribbon = ribbon;
	exports.nest = nest;
	exports.set = set$2;
	exports.map = map$1;
	exports.keys = keys;
	exports.values = values;
	exports.entries = entries;
	exports.color = color;
	exports.rgb = rgb;
	exports.hsl = hsl;
	exports.lab = lab;
	exports.hcl = hcl;
	exports.cubehelix = cubehelix;
	exports.dispatch = dispatch;
	exports.drag = drag;
	exports.dragDisable = dragDisable;
	exports.dragEnable = yesdrag;
	exports.dsvFormat = dsv;
	exports.csvParse = csvParse;
	exports.csvParseRows = csvParseRows;
	exports.csvFormat = csvFormat;
	exports.csvFormatRows = csvFormatRows;
	exports.tsvParse = tsvParse;
	exports.tsvParseRows = tsvParseRows;
	exports.tsvFormat = tsvFormat;
	exports.tsvFormatRows = tsvFormatRows;
	exports.easeLinear = linear$1;
	exports.easeQuad = quadInOut;
	exports.easeQuadIn = quadIn;
	exports.easeQuadOut = quadOut;
	exports.easeQuadInOut = quadInOut;
	exports.easeCubic = cubicInOut;
	exports.easeCubicIn = cubicIn;
	exports.easeCubicOut = cubicOut;
	exports.easeCubicInOut = cubicInOut;
	exports.easePoly = polyInOut;
	exports.easePolyIn = polyIn;
	exports.easePolyOut = polyOut;
	exports.easePolyInOut = polyInOut;
	exports.easeSin = sinInOut;
	exports.easeSinIn = sinIn;
	exports.easeSinOut = sinOut;
	exports.easeSinInOut = sinInOut;
	exports.easeExp = expInOut;
	exports.easeExpIn = expIn;
	exports.easeExpOut = expOut;
	exports.easeExpInOut = expInOut;
	exports.easeCircle = circleInOut;
	exports.easeCircleIn = circleIn;
	exports.easeCircleOut = circleOut;
	exports.easeCircleInOut = circleInOut;
	exports.easeBounce = bounceOut;
	exports.easeBounceIn = bounceIn;
	exports.easeBounceOut = bounceOut;
	exports.easeBounceInOut = bounceInOut;
	exports.easeBack = backInOut;
	exports.easeBackIn = backIn;
	exports.easeBackOut = backOut;
	exports.easeBackInOut = backInOut;
	exports.easeElastic = elasticOut;
	exports.easeElasticIn = elasticIn;
	exports.easeElasticOut = elasticOut;
	exports.easeElasticInOut = elasticInOut;
	exports.forceCenter = center$1;
	exports.forceCollide = collide;
	exports.forceLink = link;
	exports.forceManyBody = manyBody;
	exports.forceSimulation = simulation;
	exports.forceX = x$2;
	exports.forceY = y$2;
	exports.formatDefaultLocale = defaultLocale;
	exports.formatLocale = formatLocale;
	exports.formatSpecifier = formatSpecifier;
	exports.precisionFixed = precisionFixed;
	exports.precisionPrefix = precisionPrefix;
	exports.precisionRound = precisionRound;
	exports.geoArea = area;
	exports.geoBounds = bounds;
	exports.geoCentroid = centroid;
	exports.geoCircle = circle;
	exports.geoClipExtent = extent$1;
	exports.geoContains = contains;
	exports.geoDistance = distance;
	exports.geoGraticule = graticule;
	exports.geoGraticule10 = graticule10;
	exports.geoInterpolate = interpolate$1;
	exports.geoLength = length$1;
	exports.geoPath = index$1;
	exports.geoAlbers = albers;
	exports.geoAlbersUsa = albersUsa;
	exports.geoAzimuthalEqualArea = azimuthalEqualArea;
	exports.geoAzimuthalEqualAreaRaw = azimuthalEqualAreaRaw;
	exports.geoAzimuthalEquidistant = azimuthalEquidistant;
	exports.geoAzimuthalEquidistantRaw = azimuthalEquidistantRaw;
	exports.geoConicConformal = conicConformal;
	exports.geoConicConformalRaw = conicConformalRaw;
	exports.geoConicEqualArea = conicEqualArea;
	exports.geoConicEqualAreaRaw = conicEqualAreaRaw;
	exports.geoConicEquidistant = conicEquidistant;
	exports.geoConicEquidistantRaw = conicEquidistantRaw;
	exports.geoEquirectangular = equirectangular;
	exports.geoEquirectangularRaw = equirectangularRaw;
	exports.geoGnomonic = gnomonic;
	exports.geoGnomonicRaw = gnomonicRaw;
	exports.geoIdentity = identity$5;
	exports.geoProjection = projection;
	exports.geoProjectionMutator = projectionMutator;
	exports.geoMercator = mercator;
	exports.geoMercatorRaw = mercatorRaw;
	exports.geoOrthographic = orthographic;
	exports.geoOrthographicRaw = orthographicRaw;
	exports.geoStereographic = stereographic;
	exports.geoStereographicRaw = stereographicRaw;
	exports.geoTransverseMercator = transverseMercator;
	exports.geoTransverseMercatorRaw = transverseMercatorRaw;
	exports.geoRotation = rotation;
	exports.geoStream = geoStream;
	exports.geoTransform = transform;
	exports.cluster = cluster;
	exports.hierarchy = hierarchy;
	exports.pack = index$2;
	exports.packSiblings = siblings;
	exports.packEnclose = enclose;
	exports.partition = partition;
	exports.stratify = stratify;
	exports.tree = tree;
	exports.treemap = index$3;
	exports.treemapBinary = binary;
	exports.treemapDice = treemapDice;
	exports.treemapSlice = treemapSlice;
	exports.treemapSliceDice = sliceDice;
	exports.treemapSquarify = squarify;
	exports.treemapResquarify = resquarify;
	exports.interpolate = interpolateValue;
	exports.interpolateArray = array$1;
	exports.interpolateBasis = basis$1;
	exports.interpolateBasisClosed = basisClosed;
	exports.interpolateDate = date;
	exports.interpolateNumber = reinterpolate;
	exports.interpolateObject = object;
	exports.interpolateRound = interpolateRound;
	exports.interpolateString = interpolateString;
	exports.interpolateTransformCss = interpolateTransformCss;
	exports.interpolateTransformSvg = interpolateTransformSvg;
	exports.interpolateZoom = interpolateZoom;
	exports.interpolateRgb = interpolateRgb;
	exports.interpolateRgbBasis = rgbBasis;
	exports.interpolateRgbBasisClosed = rgbBasisClosed;
	exports.interpolateHsl = hsl$2;
	exports.interpolateHslLong = hslLong;
	exports.interpolateLab = lab$1;
	exports.interpolateHcl = hcl$2;
	exports.interpolateHclLong = hclLong;
	exports.interpolateCubehelix = cubehelix$2;
	exports.interpolateCubehelixLong = cubehelixLong;
	exports.quantize = quantize;
	exports.path = path;
	exports.polygonArea = area$1;
	exports.polygonCentroid = centroid$1;
	exports.polygonHull = hull;
	exports.polygonContains = contains$1;
	exports.polygonLength = length$2;
	exports.quadtree = quadtree;
	exports.queue = queue;
	exports.randomUniform = uniform;
	exports.randomNormal = normal;
	exports.randomLogNormal = logNormal;
	exports.randomBates = bates;
	exports.randomIrwinHall = irwinHall;
	exports.randomExponential = exponential$1;
	exports.request = request;
	exports.html = html;
	exports.json = json;
	exports.text = text;
	exports.xml = xml;
	exports.csv = csv$1;
	exports.tsv = tsv$1;
	exports.scaleBand = band;
	exports.scalePoint = point$1;
	exports.scaleIdentity = identity$6;
	exports.scaleLinear = linear$2;
	exports.scaleLog = log$1;
	exports.scaleOrdinal = ordinal;
	exports.scaleImplicit = implicit;
	exports.scalePow = pow$1;
	exports.scaleSqrt = sqrt$1;
	exports.scaleQuantile = quantile$$1;
	exports.scaleQuantize = quantize$1;
	exports.scaleThreshold = threshold$1;
	exports.scaleTime = time;
	exports.scaleUtc = utcTime;
	exports.schemeCategory10 = category10;
	exports.schemeCategory20b = category20b;
	exports.schemeCategory20c = category20c;
	exports.schemeCategory20 = category20;
	exports.interpolateCubehelixDefault = cubehelix$3;
	exports.interpolateRainbow = rainbow$1;
	exports.interpolateWarm = warm;
	exports.interpolateCool = cool;
	exports.interpolateViridis = viridis;
	exports.interpolateMagma = magma;
	exports.interpolateInferno = inferno;
	exports.interpolatePlasma = plasma;
	exports.scaleSequential = sequential;
	exports.creator = creator;
	exports.local = local$1;
	exports.matcher = matcher$1;
	exports.mouse = mouse;
	exports.namespace = namespace;
	exports.namespaces = namespaces;
	exports.select = select;
	exports.selectAll = selectAll;
	exports.selection = selection;
	exports.selector = selector;
	exports.selectorAll = selectorAll;
	exports.style = styleValue;
	exports.touch = touch;
	exports.touches = touches;
	exports.window = defaultView;
	exports.customEvent = customEvent;
	exports.arc = arc;
	exports.area = area$2;
	exports.line = line;
	exports.pie = pie;
	exports.radialArea = radialArea;
	exports.radialLine = radialLine$1;
	exports.linkHorizontal = linkHorizontal;
	exports.linkVertical = linkVertical;
	exports.linkRadial = linkRadial;
	exports.symbol = symbol;
	exports.symbols = symbols;
	exports.symbolCircle = circle$2;
	exports.symbolCross = cross$2;
	exports.symbolDiamond = diamond;
	exports.symbolSquare = square;
	exports.symbolStar = star;
	exports.symbolTriangle = triangle;
	exports.symbolWye = wye;
	exports.curveBasisClosed = basisClosed$1;
	exports.curveBasisOpen = basisOpen;
	exports.curveBasis = basis$2;
	exports.curveBundle = bundle;
	exports.curveCardinalClosed = cardinalClosed;
	exports.curveCardinalOpen = cardinalOpen;
	exports.curveCardinal = cardinal;
	exports.curveCatmullRomClosed = catmullRomClosed;
	exports.curveCatmullRomOpen = catmullRomOpen;
	exports.curveCatmullRom = catmullRom;
	exports.curveLinearClosed = linearClosed;
	exports.curveLinear = curveLinear;
	exports.curveMonotoneX = monotoneX;
	exports.curveMonotoneY = monotoneY;
	exports.curveNatural = natural;
	exports.curveStep = step;
	exports.curveStepAfter = stepAfter;
	exports.curveStepBefore = stepBefore;
	exports.stack = stack;
	exports.stackOffsetExpand = expand;
	exports.stackOffsetDiverging = diverging;
	exports.stackOffsetNone = none$1;
	exports.stackOffsetSilhouette = silhouette;
	exports.stackOffsetWiggle = wiggle;
	exports.stackOrderAscending = ascending$2;
	exports.stackOrderDescending = descending$2;
	exports.stackOrderInsideOut = insideOut;
	exports.stackOrderNone = none$2;
	exports.stackOrderReverse = reverse;
	exports.timeInterval = newInterval;
	exports.timeMillisecond = millisecond;
	exports.timeMilliseconds = milliseconds;
	exports.utcMillisecond = millisecond;
	exports.utcMilliseconds = milliseconds;
	exports.timeSecond = second;
	exports.timeSeconds = seconds;
	exports.utcSecond = second;
	exports.utcSeconds = seconds;
	exports.timeMinute = minute;
	exports.timeMinutes = minutes;
	exports.timeHour = hour;
	exports.timeHours = hours;
	exports.timeDay = day;
	exports.timeDays = days;
	exports.timeWeek = sunday;
	exports.timeWeeks = sundays;
	exports.timeSunday = sunday;
	exports.timeSundays = sundays;
	exports.timeMonday = monday;
	exports.timeMondays = mondays;
	exports.timeTuesday = tuesday;
	exports.timeTuesdays = tuesdays;
	exports.timeWednesday = wednesday;
	exports.timeWednesdays = wednesdays;
	exports.timeThursday = thursday;
	exports.timeThursdays = thursdays;
	exports.timeFriday = friday;
	exports.timeFridays = fridays;
	exports.timeSaturday = saturday;
	exports.timeSaturdays = saturdays;
	exports.timeMonth = month;
	exports.timeMonths = months;
	exports.timeYear = year;
	exports.timeYears = years;
	exports.utcMinute = utcMinute;
	exports.utcMinutes = utcMinutes;
	exports.utcHour = utcHour;
	exports.utcHours = utcHours;
	exports.utcDay = utcDay;
	exports.utcDays = utcDays;
	exports.utcWeek = utcSunday;
	exports.utcWeeks = utcSundays;
	exports.utcSunday = utcSunday;
	exports.utcSundays = utcSundays;
	exports.utcMonday = utcMonday;
	exports.utcMondays = utcMondays;
	exports.utcTuesday = utcTuesday;
	exports.utcTuesdays = utcTuesdays;
	exports.utcWednesday = utcWednesday;
	exports.utcWednesdays = utcWednesdays;
	exports.utcThursday = utcThursday;
	exports.utcThursdays = utcThursdays;
	exports.utcFriday = utcFriday;
	exports.utcFridays = utcFridays;
	exports.utcSaturday = utcSaturday;
	exports.utcSaturdays = utcSaturdays;
	exports.utcMonth = utcMonth;
	exports.utcMonths = utcMonths;
	exports.utcYear = utcYear;
	exports.utcYears = utcYears;
	exports.timeFormatDefaultLocale = defaultLocale$1;
	exports.timeFormatLocale = formatLocale$1;
	exports.isoFormat = formatIso;
	exports.isoParse = parseIso;
	exports.now = now;
	exports.timer = timer;
	exports.timerFlush = timerFlush;
	exports.timeout = timeout$1;
	exports.interval = interval$1;
	exports.transition = transition;
	exports.active = active;
	exports.interrupt = interrupt;
	exports.voronoi = voronoi;
	exports.zoom = zoom;
	exports.zoomTransform = transform$1;
	exports.zoomIdentity = identity$8;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/topojson/topojson Version 3.0.0. Copyright 2017 Mike Bostock.
	(function (global, factory) {
		 true ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
		(factory((global.topojson = global.topojson || {})));
	}(this, (function (exports) { 'use strict';
	
	var identity = function(x) {
	  return x;
	};
	
	var transform = function(transform) {
	  if (transform == null) return identity;
	  var x0,
	      y0,
	      kx = transform.scale[0],
	      ky = transform.scale[1],
	      dx = transform.translate[0],
	      dy = transform.translate[1];
	  return function(input, i) {
	    if (!i) x0 = y0 = 0;
	    var j = 2, n = input.length, output = new Array(n);
	    output[0] = (x0 += input[0]) * kx + dx;
	    output[1] = (y0 += input[1]) * ky + dy;
	    while (j < n) output[j] = input[j], ++j;
	    return output;
	  };
	};
	
	var bbox = function(topology) {
	  var t = transform(topology.transform), key,
	      x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;
	
	  function bboxPoint(p) {
	    p = t(p);
	    if (p[0] < x0) x0 = p[0];
	    if (p[0] > x1) x1 = p[0];
	    if (p[1] < y0) y0 = p[1];
	    if (p[1] > y1) y1 = p[1];
	  }
	
	  function bboxGeometry(o) {
	    switch (o.type) {
	      case "GeometryCollection": o.geometries.forEach(bboxGeometry); break;
	      case "Point": bboxPoint(o.coordinates); break;
	      case "MultiPoint": o.coordinates.forEach(bboxPoint); break;
	    }
	  }
	
	  topology.arcs.forEach(function(arc) {
	    var i = -1, n = arc.length, p;
	    while (++i < n) {
	      p = t(arc[i], i);
	      if (p[0] < x0) x0 = p[0];
	      if (p[0] > x1) x1 = p[0];
	      if (p[1] < y0) y0 = p[1];
	      if (p[1] > y1) y1 = p[1];
	    }
	  });
	
	  for (key in topology.objects) {
	    bboxGeometry(topology.objects[key]);
	  }
	
	  return [x0, y0, x1, y1];
	};
	
	var reverse = function(array, n) {
	  var t, j = array.length, i = j - n;
	  while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
	};
	
	var feature = function(topology, o) {
	  return o.type === "GeometryCollection"
	      ? {type: "FeatureCollection", features: o.geometries.map(function(o) { return feature$1(topology, o); })}
	      : feature$1(topology, o);
	};
	
	function feature$1(topology, o) {
	  var id = o.id,
	      bbox = o.bbox,
	      properties = o.properties == null ? {} : o.properties,
	      geometry = object(topology, o);
	  return id == null && bbox == null ? {type: "Feature", properties: properties, geometry: geometry}
	      : bbox == null ? {type: "Feature", id: id, properties: properties, geometry: geometry}
	      : {type: "Feature", id: id, bbox: bbox, properties: properties, geometry: geometry};
	}
	
	function object(topology, o) {
	  var transformPoint = transform(topology.transform),
	      arcs = topology.arcs;
	
	  function arc(i, points) {
	    if (points.length) points.pop();
	    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
	      points.push(transformPoint(a[k], k));
	    }
	    if (i < 0) reverse(points, n);
	  }
	
	  function point(p) {
	    return transformPoint(p);
	  }
	
	  function line(arcs) {
	    var points = [];
	    for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
	    if (points.length < 2) points.push(points[0]); // This should never happen per the specification.
	    return points;
	  }
	
	  function ring(arcs) {
	    var points = line(arcs);
	    while (points.length < 4) points.push(points[0]); // This may happen if an arc has only two points.
	    return points;
	  }
	
	  function polygon(arcs) {
	    return arcs.map(ring);
	  }
	
	  function geometry(o) {
	    var type = o.type, coordinates;
	    switch (type) {
	      case "GeometryCollection": return {type: type, geometries: o.geometries.map(geometry)};
	      case "Point": coordinates = point(o.coordinates); break;
	      case "MultiPoint": coordinates = o.coordinates.map(point); break;
	      case "LineString": coordinates = line(o.arcs); break;
	      case "MultiLineString": coordinates = o.arcs.map(line); break;
	      case "Polygon": coordinates = polygon(o.arcs); break;
	      case "MultiPolygon": coordinates = o.arcs.map(polygon); break;
	      default: return null;
	    }
	    return {type: type, coordinates: coordinates};
	  }
	
	  return geometry(o);
	}
	
	var stitch = function(topology, arcs) {
	  var stitchedArcs = {},
	      fragmentByStart = {},
	      fragmentByEnd = {},
	      fragments = [],
	      emptyIndex = -1;
	
	  // Stitch empty arcs first, since they may be subsumed by other arcs.
	  arcs.forEach(function(i, j) {
	    var arc = topology.arcs[i < 0 ? ~i : i], t;
	    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
	      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
	    }
	  });
	
	  arcs.forEach(function(i) {
	    var e = ends(i),
	        start = e[0],
	        end = e[1],
	        f, g;
	
	    if (f = fragmentByEnd[start]) {
	      delete fragmentByEnd[f.end];
	      f.push(i);
	      f.end = end;
	      if (g = fragmentByStart[end]) {
	        delete fragmentByStart[g.start];
	        var fg = g === f ? f : f.concat(g);
	        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
	      } else {
	        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
	      }
	    } else if (f = fragmentByStart[end]) {
	      delete fragmentByStart[f.start];
	      f.unshift(i);
	      f.start = start;
	      if (g = fragmentByEnd[start]) {
	        delete fragmentByEnd[g.end];
	        var gf = g === f ? f : g.concat(f);
	        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
	      } else {
	        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
	      }
	    } else {
	      f = [i];
	      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
	    }
	  });
	
	  function ends(i) {
	    var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
	    if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
	    else p1 = arc[arc.length - 1];
	    return i < 0 ? [p1, p0] : [p0, p1];
	  }
	
	  function flush(fragmentByEnd, fragmentByStart) {
	    for (var k in fragmentByEnd) {
	      var f = fragmentByEnd[k];
	      delete fragmentByStart[f.start];
	      delete f.start;
	      delete f.end;
	      f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });
	      fragments.push(f);
	    }
	  }
	
	  flush(fragmentByEnd, fragmentByStart);
	  flush(fragmentByStart, fragmentByEnd);
	  arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]); });
	
	  return fragments;
	};
	
	var mesh = function(topology) {
	  return object(topology, meshArcs.apply(this, arguments));
	};
	
	function meshArcs(topology, object$$1, filter) {
	  var arcs, i, n;
	  if (arguments.length > 1) arcs = extractArcs(topology, object$$1, filter);
	  else for (i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i) arcs[i] = i;
	  return {type: "MultiLineString", arcs: stitch(topology, arcs)};
	}
	
	function extractArcs(topology, object$$1, filter) {
	  var arcs = [],
	      geomsByArc = [],
	      geom;
	
	  function extract0(i) {
	    var j = i < 0 ? ~i : i;
	    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
	  }
	
	  function extract1(arcs) {
	    arcs.forEach(extract0);
	  }
	
	  function extract2(arcs) {
	    arcs.forEach(extract1);
	  }
	
	  function extract3(arcs) {
	    arcs.forEach(extract2);
	  }
	
	  function geometry(o) {
	    switch (geom = o, o.type) {
	      case "GeometryCollection": o.geometries.forEach(geometry); break;
	      case "LineString": extract1(o.arcs); break;
	      case "MultiLineString": case "Polygon": extract2(o.arcs); break;
	      case "MultiPolygon": extract3(o.arcs); break;
	    }
	  }
	
	  geometry(object$$1);
	
	  geomsByArc.forEach(filter == null
	      ? function(geoms) { arcs.push(geoms[0].i); }
	      : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });
	
	  return arcs;
	}
	
	function planarRingArea(ring) {
	  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
	  while (++i < n) a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
	  return Math.abs(area); // Note: doubled area!
	}
	
	var merge = function(topology) {
	  return object(topology, mergeArcs.apply(this, arguments));
	};
	
	function mergeArcs(topology, objects) {
	  var polygonsByArc = {},
	      polygons = [],
	      groups = [];
	
	  objects.forEach(geometry);
	
	  function geometry(o) {
	    switch (o.type) {
	      case "GeometryCollection": o.geometries.forEach(geometry); break;
	      case "Polygon": extract(o.arcs); break;
	      case "MultiPolygon": o.arcs.forEach(extract); break;
	    }
	  }
	
	  function extract(polygon) {
	    polygon.forEach(function(ring) {
	      ring.forEach(function(arc) {
	        (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
	      });
	    });
	    polygons.push(polygon);
	  }
	
	  function area(ring) {
	    return planarRingArea(object(topology, {type: "Polygon", arcs: [ring]}).coordinates[0]);
	  }
	
	  polygons.forEach(function(polygon) {
	    if (!polygon._) {
	      var group = [],
	          neighbors = [polygon];
	      polygon._ = 1;
	      groups.push(group);
	      while (polygon = neighbors.pop()) {
	        group.push(polygon);
	        polygon.forEach(function(ring) {
	          ring.forEach(function(arc) {
	            polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
	              if (!polygon._) {
	                polygon._ = 1;
	                neighbors.push(polygon);
	              }
	            });
	          });
	        });
	      }
	    }
	  });
	
	  polygons.forEach(function(polygon) {
	    delete polygon._;
	  });
	
	  return {
	    type: "MultiPolygon",
	    arcs: groups.map(function(polygons) {
	      var arcs = [], n;
	
	      // Extract the exterior (unique) arcs.
	      polygons.forEach(function(polygon) {
	        polygon.forEach(function(ring) {
	          ring.forEach(function(arc) {
	            if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
	              arcs.push(arc);
	            }
	          });
	        });
	      });
	
	      // Stitch the arcs into one or more rings.
	      arcs = stitch(topology, arcs);
	
	      // If more than one ring is returned,
	      // at most one of these rings can be the exterior;
	      // choose the one with the greatest absolute area.
	      if ((n = arcs.length) > 1) {
	        for (var i = 1, k = area(arcs[0]), ki, t; i < n; ++i) {
	          if ((ki = area(arcs[i])) > k) {
	            t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
	          }
	        }
	      }
	
	      return arcs;
	    })
	  };
	}
	
	var bisect = function(a, x) {
	  var lo = 0, hi = a.length;
	  while (lo < hi) {
	    var mid = lo + hi >>> 1;
	    if (a[mid] < x) lo = mid + 1;
	    else hi = mid;
	  }
	  return lo;
	};
	
	var neighbors = function(objects) {
	  var indexesByArc = {}, // arc index -> array of object indexes
	      neighbors = objects.map(function() { return []; });
	
	  function line(arcs, i) {
	    arcs.forEach(function(a) {
	      if (a < 0) a = ~a;
	      var o = indexesByArc[a];
	      if (o) o.push(i);
	      else indexesByArc[a] = [i];
	    });
	  }
	
	  function polygon(arcs, i) {
	    arcs.forEach(function(arc) { line(arc, i); });
	  }
	
	  function geometry(o, i) {
	    if (o.type === "GeometryCollection") o.geometries.forEach(function(o) { geometry(o, i); });
	    else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
	  }
	
	  var geometryType = {
	    LineString: line,
	    MultiLineString: polygon,
	    Polygon: polygon,
	    MultiPolygon: function(arcs, i) { arcs.forEach(function(arc) { polygon(arc, i); }); }
	  };
	
	  objects.forEach(geometry);
	
	  for (var i in indexesByArc) {
	    for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
	      for (var k = j + 1; k < m; ++k) {
	        var ij = indexes[j], ik = indexes[k], n;
	        if ((n = neighbors[ij])[i = bisect(n, ik)] !== ik) n.splice(i, 0, ik);
	        if ((n = neighbors[ik])[i = bisect(n, ij)] !== ij) n.splice(i, 0, ij);
	      }
	    }
	  }
	
	  return neighbors;
	};
	
	var untransform = function(transform) {
	  if (transform == null) return identity;
	  var x0,
	      y0,
	      kx = transform.scale[0],
	      ky = transform.scale[1],
	      dx = transform.translate[0],
	      dy = transform.translate[1];
	  return function(input, i) {
	    if (!i) x0 = y0 = 0;
	    var j = 2,
	        n = input.length,
	        output = new Array(n),
	        x1 = Math.round((input[0] - dx) / kx),
	        y1 = Math.round((input[1] - dy) / ky);
	    output[0] = x1 - x0, x0 = x1;
	    output[1] = y1 - y0, y0 = y1;
	    while (j < n) output[j] = input[j], ++j;
	    return output;
	  };
	};
	
	var quantize = function(topology, transform) {
	  if (topology.transform) throw new Error("already quantized");
	
	  if (!transform || !transform.scale) {
	    if (!((n = Math.floor(transform)) >= 2)) throw new Error("n must be \u22652");
	    box = topology.bbox || bbox(topology);
	    var x0 = box[0], y0 = box[1], x1 = box[2], y1 = box[3], n;
	    transform = {scale: [x1 - x0 ? (x1 - x0) / (n - 1) : 1, y1 - y0 ? (y1 - y0) / (n - 1) : 1], translate: [x0, y0]};
	  } else {
	    box = topology.bbox;
	  }
	
	  var t = untransform(transform), box, key, inputs = topology.objects, outputs = {};
	
	  function quantizePoint(point) {
	    return t(point);
	  }
	
	  function quantizeGeometry(input) {
	    var output;
	    switch (input.type) {
	      case "GeometryCollection": output = {type: "GeometryCollection", geometries: input.geometries.map(quantizeGeometry)}; break;
	      case "Point": output = {type: "Point", coordinates: quantizePoint(input.coordinates)}; break;
	      case "MultiPoint": output = {type: "MultiPoint", coordinates: input.coordinates.map(quantizePoint)}; break;
	      default: return input;
	    }
	    if (input.id != null) output.id = input.id;
	    if (input.bbox != null) output.bbox = input.bbox;
	    if (input.properties != null) output.properties = input.properties;
	    return output;
	  }
	
	  function quantizeArc(input) {
	    var i = 0, j = 1, n = input.length, p, output = new Array(n); // pessimistic
	    output[0] = t(input[0], 0);
	    while (++i < n) if ((p = t(input[i], i))[0] || p[1]) output[j++] = p; // non-coincident points
	    if (j === 1) output[j++] = [0, 0]; // an arc must have at least two points
	    output.length = j;
	    return output;
	  }
	
	  for (key in inputs) outputs[key] = quantizeGeometry(inputs[key]);
	
	  return {
	    type: "Topology",
	    bbox: box,
	    transform: transform,
	    objects: outputs,
	    arcs: topology.arcs.map(quantizeArc)
	  };
	};
	
	// Computes the bounding box of the specified hash of GeoJSON objects.
	var bounds = function(objects) {
	  var x0 = Infinity,
	      y0 = Infinity,
	      x1 = -Infinity,
	      y1 = -Infinity;
	
	  function boundGeometry(geometry) {
	    if (geometry != null && boundGeometryType.hasOwnProperty(geometry.type)) boundGeometryType[geometry.type](geometry);
	  }
	
	  var boundGeometryType = {
	    GeometryCollection: function(o) { o.geometries.forEach(boundGeometry); },
	    Point: function(o) { boundPoint(o.coordinates); },
	    MultiPoint: function(o) { o.coordinates.forEach(boundPoint); },
	    LineString: function(o) { boundLine(o.arcs); },
	    MultiLineString: function(o) { o.arcs.forEach(boundLine); },
	    Polygon: function(o) { o.arcs.forEach(boundLine); },
	    MultiPolygon: function(o) { o.arcs.forEach(boundMultiLine); }
	  };
	
	  function boundPoint(coordinates) {
	    var x = coordinates[0],
	        y = coordinates[1];
	    if (x < x0) x0 = x;
	    if (x > x1) x1 = x;
	    if (y < y0) y0 = y;
	    if (y > y1) y1 = y;
	  }
	
	  function boundLine(coordinates) {
	    coordinates.forEach(boundPoint);
	  }
	
	  function boundMultiLine(coordinates) {
	    coordinates.forEach(boundLine);
	  }
	
	  for (var key in objects) {
	    boundGeometry(objects[key]);
	  }
	
	  return x1 >= x0 && y1 >= y0 ? [x0, y0, x1, y1] : undefined;
	};
	
	var hashset = function(size, hash, equal, type, empty) {
	  if (arguments.length === 3) {
	    type = Array;
	    empty = null;
	  }
	
	  var store = new type(size = 1 << Math.max(4, Math.ceil(Math.log(size) / Math.LN2))),
	      mask = size - 1;
	
	  for (var i = 0; i < size; ++i) {
	    store[i] = empty;
	  }
	
	  function add(value) {
	    var index = hash(value) & mask,
	        match = store[index],
	        collisions = 0;
	    while (match != empty) {
	      if (equal(match, value)) return true;
	      if (++collisions >= size) throw new Error("full hashset");
	      match = store[index = (index + 1) & mask];
	    }
	    store[index] = value;
	    return true;
	  }
	
	  function has(value) {
	    var index = hash(value) & mask,
	        match = store[index],
	        collisions = 0;
	    while (match != empty) {
	      if (equal(match, value)) return true;
	      if (++collisions >= size) break;
	      match = store[index = (index + 1) & mask];
	    }
	    return false;
	  }
	
	  function values() {
	    var values = [];
	    for (var i = 0, n = store.length; i < n; ++i) {
	      var match = store[i];
	      if (match != empty) values.push(match);
	    }
	    return values;
	  }
	
	  return {
	    add: add,
	    has: has,
	    values: values
	  };
	};
	
	var hashmap = function(size, hash, equal, keyType, keyEmpty, valueType) {
	  if (arguments.length === 3) {
	    keyType = valueType = Array;
	    keyEmpty = null;
	  }
	
	  var keystore = new keyType(size = 1 << Math.max(4, Math.ceil(Math.log(size) / Math.LN2))),
	      valstore = new valueType(size),
	      mask = size - 1;
	
	  for (var i = 0; i < size; ++i) {
	    keystore[i] = keyEmpty;
	  }
	
	  function set(key, value) {
	    var index = hash(key) & mask,
	        matchKey = keystore[index],
	        collisions = 0;
	    while (matchKey != keyEmpty) {
	      if (equal(matchKey, key)) return valstore[index] = value;
	      if (++collisions >= size) throw new Error("full hashmap");
	      matchKey = keystore[index = (index + 1) & mask];
	    }
	    keystore[index] = key;
	    valstore[index] = value;
	    return value;
	  }
	
	  function maybeSet(key, value) {
	    var index = hash(key) & mask,
	        matchKey = keystore[index],
	        collisions = 0;
	    while (matchKey != keyEmpty) {
	      if (equal(matchKey, key)) return valstore[index];
	      if (++collisions >= size) throw new Error("full hashmap");
	      matchKey = keystore[index = (index + 1) & mask];
	    }
	    keystore[index] = key;
	    valstore[index] = value;
	    return value;
	  }
	
	  function get(key, missingValue) {
	    var index = hash(key) & mask,
	        matchKey = keystore[index],
	        collisions = 0;
	    while (matchKey != keyEmpty) {
	      if (equal(matchKey, key)) return valstore[index];
	      if (++collisions >= size) break;
	      matchKey = keystore[index = (index + 1) & mask];
	    }
	    return missingValue;
	  }
	
	  function keys() {
	    var keys = [];
	    for (var i = 0, n = keystore.length; i < n; ++i) {
	      var matchKey = keystore[i];
	      if (matchKey != keyEmpty) keys.push(matchKey);
	    }
	    return keys;
	  }
	
	  return {
	    set: set,
	    maybeSet: maybeSet, // set if unset
	    get: get,
	    keys: keys
	  };
	};
	
	var equalPoint = function(pointA, pointB) {
	  return pointA[0] === pointB[0] && pointA[1] === pointB[1];
	};
	
	// TODO if quantized, use simpler Int32 hashing?
	
	var buffer = new ArrayBuffer(16);
	var floats = new Float64Array(buffer);
	var uints = new Uint32Array(buffer);
	
	var hashPoint = function(point) {
	  floats[0] = point[0];
	  floats[1] = point[1];
	  var hash = uints[0] ^ uints[1];
	  hash = hash << 5 ^ hash >> 7 ^ uints[2] ^ uints[3];
	  return hash & 0x7fffffff;
	};
	
	// Given an extracted (pre-)topology, identifies all of the junctions. These are
	// the points at which arcs (lines or rings) will need to be cut so that each
	// arc is represented uniquely.
	//
	// A junction is a point where at least one arc deviates from another arc going
	// through the same point. For example, consider the point B. If there is a arc
	// through ABC and another arc through CBA, then B is not a junction because in
	// both cases the adjacent point pairs are {A,C}. However, if there is an
	// additional arc ABD, then {A,D} != {A,C}, and thus B becomes a junction.
	//
	// For a closed ring ABCA, the first point A’s adjacent points are the second
	// and last point {B,C}. For a line, the first and last point are always
	// considered junctions, even if the line is closed; this ensures that a closed
	// line is never rotated.
	var join = function(topology) {
	  var coordinates = topology.coordinates,
	      lines = topology.lines,
	      rings = topology.rings,
	      indexes = index(),
	      visitedByIndex = new Int32Array(coordinates.length),
	      leftByIndex = new Int32Array(coordinates.length),
	      rightByIndex = new Int32Array(coordinates.length),
	      junctionByIndex = new Int8Array(coordinates.length),
	      junctionCount = 0, // upper bound on number of junctions
	      i, n,
	      previousIndex,
	      currentIndex,
	      nextIndex;
	
	  for (i = 0, n = coordinates.length; i < n; ++i) {
	    visitedByIndex[i] = leftByIndex[i] = rightByIndex[i] = -1;
	  }
	
	  for (i = 0, n = lines.length; i < n; ++i) {
	    var line = lines[i],
	        lineStart = line[0],
	        lineEnd = line[1];
	    currentIndex = indexes[lineStart];
	    nextIndex = indexes[++lineStart];
	    ++junctionCount, junctionByIndex[currentIndex] = 1; // start
	    while (++lineStart <= lineEnd) {
	      sequence(i, previousIndex = currentIndex, currentIndex = nextIndex, nextIndex = indexes[lineStart]);
	    }
	    ++junctionCount, junctionByIndex[nextIndex] = 1; // end
	  }
	
	  for (i = 0, n = coordinates.length; i < n; ++i) {
	    visitedByIndex[i] = -1;
	  }
	
	  for (i = 0, n = rings.length; i < n; ++i) {
	    var ring = rings[i],
	        ringStart = ring[0] + 1,
	        ringEnd = ring[1];
	    previousIndex = indexes[ringEnd - 1];
	    currentIndex = indexes[ringStart - 1];
	    nextIndex = indexes[ringStart];
	    sequence(i, previousIndex, currentIndex, nextIndex);
	    while (++ringStart <= ringEnd) {
	      sequence(i, previousIndex = currentIndex, currentIndex = nextIndex, nextIndex = indexes[ringStart]);
	    }
	  }
	
	  function sequence(i, previousIndex, currentIndex, nextIndex) {
	    if (visitedByIndex[currentIndex] === i) return; // ignore self-intersection
	    visitedByIndex[currentIndex] = i;
	    var leftIndex = leftByIndex[currentIndex];
	    if (leftIndex >= 0) {
	      var rightIndex = rightByIndex[currentIndex];
	      if ((leftIndex !== previousIndex || rightIndex !== nextIndex)
	        && (leftIndex !== nextIndex || rightIndex !== previousIndex)) {
	        ++junctionCount, junctionByIndex[currentIndex] = 1;
	      }
	    } else {
	      leftByIndex[currentIndex] = previousIndex;
	      rightByIndex[currentIndex] = nextIndex;
	    }
	  }
	
	  function index() {
	    var indexByPoint = hashmap(coordinates.length * 1.4, hashIndex, equalIndex, Int32Array, -1, Int32Array),
	        indexes = new Int32Array(coordinates.length);
	
	    for (var i = 0, n = coordinates.length; i < n; ++i) {
	      indexes[i] = indexByPoint.maybeSet(i, i);
	    }
	
	    return indexes;
	  }
	
	  function hashIndex(i) {
	    return hashPoint(coordinates[i]);
	  }
	
	  function equalIndex(i, j) {
	    return equalPoint(coordinates[i], coordinates[j]);
	  }
	
	  visitedByIndex = leftByIndex = rightByIndex = null;
	
	  var junctionByPoint = hashset(junctionCount * 1.4, hashPoint, equalPoint), j;
	
	  // Convert back to a standard hashset by point for caller convenience.
	  for (i = 0, n = coordinates.length; i < n; ++i) {
	    if (junctionByIndex[j = indexes[i]]) {
	      junctionByPoint.add(coordinates[j]);
	    }
	  }
	
	  return junctionByPoint;
	};
	
	// Given an extracted (pre-)topology, cuts (or rotates) arcs so that all shared
	// point sequences are identified. The topology can then be subsequently deduped
	// to remove exact duplicate arcs.
	var cut = function(topology) {
	  var junctions = join(topology),
	      coordinates = topology.coordinates,
	      lines = topology.lines,
	      rings = topology.rings,
	      next,
	      i, n;
	
	  for (i = 0, n = lines.length; i < n; ++i) {
	    var line = lines[i],
	        lineMid = line[0],
	        lineEnd = line[1];
	    while (++lineMid < lineEnd) {
	      if (junctions.has(coordinates[lineMid])) {
	        next = {0: lineMid, 1: line[1]};
	        line[1] = lineMid;
	        line = line.next = next;
	      }
	    }
	  }
	
	  for (i = 0, n = rings.length; i < n; ++i) {
	    var ring = rings[i],
	        ringStart = ring[0],
	        ringMid = ringStart,
	        ringEnd = ring[1],
	        ringFixed = junctions.has(coordinates[ringStart]);
	    while (++ringMid < ringEnd) {
	      if (junctions.has(coordinates[ringMid])) {
	        if (ringFixed) {
	          next = {0: ringMid, 1: ring[1]};
	          ring[1] = ringMid;
	          ring = ring.next = next;
	        } else { // For the first junction, we can rotate rather than cut.
	          rotateArray(coordinates, ringStart, ringEnd, ringEnd - ringMid);
	          coordinates[ringEnd] = coordinates[ringStart];
	          ringFixed = true;
	          ringMid = ringStart; // restart; we may have skipped junctions
	        }
	      }
	    }
	  }
	
	  return topology;
	};
	
	function rotateArray(array, start, end, offset) {
	  reverse$1(array, start, end);
	  reverse$1(array, start, start + offset);
	  reverse$1(array, start + offset, end);
	}
	
	function reverse$1(array, start, end) {
	  for (var mid = start + ((end-- - start) >> 1), t; start < mid; ++start, --end) {
	    t = array[start], array[start] = array[end], array[end] = t;
	  }
	}
	
	// Given a cut topology, combines duplicate arcs.
	var dedup = function(topology) {
	  var coordinates = topology.coordinates,
	      lines = topology.lines, line,
	      rings = topology.rings, ring,
	      arcCount = lines.length + rings.length,
	      i, n;
	
	  delete topology.lines;
	  delete topology.rings;
	
	  // Count the number of (non-unique) arcs to initialize the hashmap safely.
	  for (i = 0, n = lines.length; i < n; ++i) {
	    line = lines[i]; while (line = line.next) ++arcCount;
	  }
	  for (i = 0, n = rings.length; i < n; ++i) {
	    ring = rings[i]; while (ring = ring.next) ++arcCount;
	  }
	
	  var arcsByEnd = hashmap(arcCount * 2 * 1.4, hashPoint, equalPoint),
	      arcs = topology.arcs = [];
	
	  for (i = 0, n = lines.length; i < n; ++i) {
	    line = lines[i];
	    do {
	      dedupLine(line);
	    } while (line = line.next);
	  }
	
	  for (i = 0, n = rings.length; i < n; ++i) {
	    ring = rings[i];
	    if (ring.next) { // arc is no longer closed
	      do {
	        dedupLine(ring);
	      } while (ring = ring.next);
	    } else {
	      dedupRing(ring);
	    }
	  }
	
	  function dedupLine(arc) {
	    var startPoint,
	        endPoint,
	        startArcs, startArc,
	        endArcs, endArc,
	        i, n;
	
	    // Does this arc match an existing arc in order?
	    if (startArcs = arcsByEnd.get(startPoint = coordinates[arc[0]])) {
	      for (i = 0, n = startArcs.length; i < n; ++i) {
	        startArc = startArcs[i];
	        if (equalLine(startArc, arc)) {
	          arc[0] = startArc[0];
	          arc[1] = startArc[1];
	          return;
	        }
	      }
	    }
	
	    // Does this arc match an existing arc in reverse order?
	    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[1]])) {
	      for (i = 0, n = endArcs.length; i < n; ++i) {
	        endArc = endArcs[i];
	        if (reverseEqualLine(endArc, arc)) {
	          arc[1] = endArc[0];
	          arc[0] = endArc[1];
	          return;
	        }
	      }
	    }
	
	    if (startArcs) startArcs.push(arc); else arcsByEnd.set(startPoint, [arc]);
	    if (endArcs) endArcs.push(arc); else arcsByEnd.set(endPoint, [arc]);
	    arcs.push(arc);
	  }
	
	  function dedupRing(arc) {
	    var endPoint,
	        endArcs,
	        endArc,
	        i, n;
	
	    // Does this arc match an existing line in order, or reverse order?
	    // Rings are closed, so their start point and end point is the same.
	    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0]])) {
	      for (i = 0, n = endArcs.length; i < n; ++i) {
	        endArc = endArcs[i];
	        if (equalRing(endArc, arc)) {
	          arc[0] = endArc[0];
	          arc[1] = endArc[1];
	          return;
	        }
	        if (reverseEqualRing(endArc, arc)) {
	          arc[0] = endArc[1];
	          arc[1] = endArc[0];
	          return;
	        }
	      }
	    }
	
	    // Otherwise, does this arc match an existing ring in order, or reverse order?
	    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0] + findMinimumOffset(arc)])) {
	      for (i = 0, n = endArcs.length; i < n; ++i) {
	        endArc = endArcs[i];
	        if (equalRing(endArc, arc)) {
	          arc[0] = endArc[0];
	          arc[1] = endArc[1];
	          return;
	        }
	        if (reverseEqualRing(endArc, arc)) {
	          arc[0] = endArc[1];
	          arc[1] = endArc[0];
	          return;
	        }
	      }
	    }
	
	    if (endArcs) endArcs.push(arc); else arcsByEnd.set(endPoint, [arc]);
	    arcs.push(arc);
	  }
	
	  function equalLine(arcA, arcB) {
	    var ia = arcA[0], ib = arcB[0],
	        ja = arcA[1], jb = arcB[1];
	    if (ia - ja !== ib - jb) return false;
	    for (; ia <= ja; ++ia, ++ib) if (!equalPoint(coordinates[ia], coordinates[ib])) return false;
	    return true;
	  }
	
	  function reverseEqualLine(arcA, arcB) {
	    var ia = arcA[0], ib = arcB[0],
	        ja = arcA[1], jb = arcB[1];
	    if (ia - ja !== ib - jb) return false;
	    for (; ia <= ja; ++ia, --jb) if (!equalPoint(coordinates[ia], coordinates[jb])) return false;
	    return true;
	  }
	
	  function equalRing(arcA, arcB) {
	    var ia = arcA[0], ib = arcB[0],
	        ja = arcA[1], jb = arcB[1],
	        n = ja - ia;
	    if (n !== jb - ib) return false;
	    var ka = findMinimumOffset(arcA),
	        kb = findMinimumOffset(arcB);
	    for (var i = 0; i < n; ++i) {
	      if (!equalPoint(coordinates[ia + (i + ka) % n], coordinates[ib + (i + kb) % n])) return false;
	    }
	    return true;
	  }
	
	  function reverseEqualRing(arcA, arcB) {
	    var ia = arcA[0], ib = arcB[0],
	        ja = arcA[1], jb = arcB[1],
	        n = ja - ia;
	    if (n !== jb - ib) return false;
	    var ka = findMinimumOffset(arcA),
	        kb = n - findMinimumOffset(arcB);
	    for (var i = 0; i < n; ++i) {
	      if (!equalPoint(coordinates[ia + (i + ka) % n], coordinates[jb - (i + kb) % n])) return false;
	    }
	    return true;
	  }
	
	  // Rings are rotated to a consistent, but arbitrary, start point.
	  // This is necessary to detect when a ring and a rotated copy are dupes.
	  function findMinimumOffset(arc) {
	    var start = arc[0],
	        end = arc[1],
	        mid = start,
	        minimum = mid,
	        minimumPoint = coordinates[mid];
	    while (++mid < end) {
	      var point = coordinates[mid];
	      if (point[0] < minimumPoint[0] || point[0] === minimumPoint[0] && point[1] < minimumPoint[1]) {
	        minimum = mid;
	        minimumPoint = point;
	      }
	    }
	    return minimum - start;
	  }
	
	  return topology;
	};
	
	// Given an array of arcs in absolute (but already quantized!) coordinates,
	// converts to fixed-point delta encoding.
	// This is a destructive operation that modifies the given arcs!
	var delta = function(arcs) {
	  var i = -1,
	      n = arcs.length;
	
	  while (++i < n) {
	    var arc = arcs[i],
	        j = 0,
	        k = 1,
	        m = arc.length,
	        point = arc[0],
	        x0 = point[0],
	        y0 = point[1],
	        x1,
	        y1;
	
	    while (++j < m) {
	      point = arc[j], x1 = point[0], y1 = point[1];
	      if (x1 !== x0 || y1 !== y0) arc[k++] = [x1 - x0, y1 - y0], x0 = x1, y0 = y1;
	    }
	
	    if (k === 1) arc[k++] = [0, 0]; // Each arc must be an array of two or more positions.
	
	    arc.length = k;
	  }
	
	  return arcs;
	};
	
	// Extracts the lines and rings from the specified hash of geometry objects.
	//
	// Returns an object with three properties:
	//
	// * coordinates - shared buffer of [x, y] coordinates
	// * lines - lines extracted from the hash, of the form [start, end]
	// * rings - rings extracted from the hash, of the form [start, end]
	//
	// For each ring or line, start and end represent inclusive indexes into the
	// coordinates buffer. For rings (and closed lines), coordinates[start] equals
	// coordinates[end].
	//
	// For each line or polygon geometry in the input hash, including nested
	// geometries as in geometry collections, the `coordinates` array is replaced
	// with an equivalent `arcs` array that, for each line (for line string
	// geometries) or ring (for polygon geometries), points to one of the above
	// lines or rings.
	var extract = function(objects) {
	  var index = -1,
	      lines = [],
	      rings = [],
	      coordinates = [];
	
	  function extractGeometry(geometry) {
	    if (geometry && extractGeometryType.hasOwnProperty(geometry.type)) extractGeometryType[geometry.type](geometry);
	  }
	
	  var extractGeometryType = {
	    GeometryCollection: function(o) { o.geometries.forEach(extractGeometry); },
	    LineString: function(o) { o.arcs = extractLine(o.arcs); },
	    MultiLineString: function(o) { o.arcs = o.arcs.map(extractLine); },
	    Polygon: function(o) { o.arcs = o.arcs.map(extractRing); },
	    MultiPolygon: function(o) { o.arcs = o.arcs.map(extractMultiRing); }
	  };
	
	  function extractLine(line) {
	    for (var i = 0, n = line.length; i < n; ++i) coordinates[++index] = line[i];
	    var arc = {0: index - n + 1, 1: index};
	    lines.push(arc);
	    return arc;
	  }
	
	  function extractRing(ring) {
	    for (var i = 0, n = ring.length; i < n; ++i) coordinates[++index] = ring[i];
	    var arc = {0: index - n + 1, 1: index};
	    rings.push(arc);
	    return arc;
	  }
	
	  function extractMultiRing(rings) {
	    return rings.map(extractRing);
	  }
	
	  for (var key in objects) {
	    extractGeometry(objects[key]);
	  }
	
	  return {
	    type: "Topology",
	    coordinates: coordinates,
	    lines: lines,
	    rings: rings,
	    objects: objects
	  };
	};
	
	// Given a hash of GeoJSON objects, returns a hash of GeoJSON geometry objects.
	// Any null input geometry objects are represented as {type: null} in the output.
	// Any feature.{id,properties,bbox} are transferred to the output geometry object.
	// Each output geometry object is a shallow copy of the input (e.g., properties, coordinates)!
	var geometry = function(inputs) {
	  var outputs = {}, key;
	  for (key in inputs) outputs[key] = geomifyObject(inputs[key]);
	  return outputs;
	};
	
	function geomifyObject(input) {
	  return input == null ? {type: null}
	      : (input.type === "FeatureCollection" ? geomifyFeatureCollection
	      : input.type === "Feature" ? geomifyFeature
	      : geomifyGeometry)(input);
	}
	
	function geomifyFeatureCollection(input) {
	  var output = {type: "GeometryCollection", geometries: input.features.map(geomifyFeature)};
	  if (input.bbox != null) output.bbox = input.bbox;
	  return output;
	}
	
	function geomifyFeature(input) {
	  var output = geomifyGeometry(input.geometry), key; // eslint-disable-line no-unused-vars
	  if (input.id != null) output.id = input.id;
	  if (input.bbox != null) output.bbox = input.bbox;
	  for (key in input.properties) { output.properties = input.properties; break; }
	  return output;
	}
	
	function geomifyGeometry(input) {
	  if (input == null) return {type: null};
	  var output = input.type === "GeometryCollection" ? {type: "GeometryCollection", geometries: input.geometries.map(geomifyGeometry)}
	      : input.type === "Point" || input.type === "MultiPoint" ? {type: input.type, coordinates: input.coordinates}
	      : {type: input.type, arcs: input.coordinates}; // TODO Check for unknown types?
	  if (input.bbox != null) output.bbox = input.bbox;
	  return output;
	}
	
	var prequantize = function(objects, bbox, n) {
	  var x0 = bbox[0],
	      y0 = bbox[1],
	      x1 = bbox[2],
	      y1 = bbox[3],
	      kx = x1 - x0 ? (n - 1) / (x1 - x0) : 1,
	      ky = y1 - y0 ? (n - 1) / (y1 - y0) : 1;
	
	  function quantizePoint(input) {
	    return [Math.round((input[0] - x0) * kx), Math.round((input[1] - y0) * ky)];
	  }
	
	  function quantizePoints(input, m) {
	    var i = -1,
	        j = 0,
	        n = input.length,
	        output = new Array(n), // pessimistic
	        pi,
	        px,
	        py,
	        x,
	        y;
	
	    while (++i < n) {
	      pi = input[i];
	      x = Math.round((pi[0] - x0) * kx);
	      y = Math.round((pi[1] - y0) * ky);
	      if (x !== px || y !== py) output[j++] = [px = x, py = y]; // non-coincident points
	    }
	
	    output.length = j;
	    while (j < m) j = output.push([output[0][0], output[0][1]]);
	    return output;
	  }
	
	  function quantizeLine(input) {
	    return quantizePoints(input, 2);
	  }
	
	  function quantizeRing(input) {
	    return quantizePoints(input, 4);
	  }
	
	  function quantizePolygon(input) {
	    return input.map(quantizeRing);
	  }
	
	  function quantizeGeometry(o) {
	    if (o != null && quantizeGeometryType.hasOwnProperty(o.type)) quantizeGeometryType[o.type](o);
	  }
	
	  var quantizeGeometryType = {
	    GeometryCollection: function(o) { o.geometries.forEach(quantizeGeometry); },
	    Point: function(o) { o.coordinates = quantizePoint(o.coordinates); },
	    MultiPoint: function(o) { o.coordinates = o.coordinates.map(quantizePoint); },
	    LineString: function(o) { o.arcs = quantizeLine(o.arcs); },
	    MultiLineString: function(o) { o.arcs = o.arcs.map(quantizeLine); },
	    Polygon: function(o) { o.arcs = quantizePolygon(o.arcs); },
	    MultiPolygon: function(o) { o.arcs = o.arcs.map(quantizePolygon); }
	  };
	
	  for (var key in objects) {
	    quantizeGeometry(objects[key]);
	  }
	
	  return {
	    scale: [1 / kx, 1 / ky],
	    translate: [x0, y0]
	  };
	};
	
	// Constructs the TopoJSON Topology for the specified hash of features.
	// Each object in the specified hash must be a GeoJSON object,
	// meaning FeatureCollection, a Feature or a geometry object.
	var topology = function(objects, quantization) {
	  var bbox = bounds(objects = geometry(objects)),
	      transform = quantization > 0 && bbox && prequantize(objects, bbox, quantization),
	      topology = dedup(cut(extract(objects))),
	      coordinates = topology.coordinates,
	      indexByArc = hashmap(topology.arcs.length * 1.4, hashArc, equalArc);
	
	  objects = topology.objects; // for garbage collection
	  topology.bbox = bbox;
	  topology.arcs = topology.arcs.map(function(arc, i) {
	    indexByArc.set(arc, i);
	    return coordinates.slice(arc[0], arc[1] + 1);
	  });
	
	  delete topology.coordinates;
	  coordinates = null;
	
	  function indexGeometry(geometry$$1) {
	    if (geometry$$1 && indexGeometryType.hasOwnProperty(geometry$$1.type)) indexGeometryType[geometry$$1.type](geometry$$1);
	  }
	
	  var indexGeometryType = {
	    GeometryCollection: function(o) { o.geometries.forEach(indexGeometry); },
	    LineString: function(o) { o.arcs = indexArcs(o.arcs); },
	    MultiLineString: function(o) { o.arcs = o.arcs.map(indexArcs); },
	    Polygon: function(o) { o.arcs = o.arcs.map(indexArcs); },
	    MultiPolygon: function(o) { o.arcs = o.arcs.map(indexMultiArcs); }
	  };
	
	  function indexArcs(arc) {
	    var indexes = [];
	    do {
	      var index = indexByArc.get(arc);
	      indexes.push(arc[0] < arc[1] ? index : ~index);
	    } while (arc = arc.next);
	    return indexes;
	  }
	
	  function indexMultiArcs(arcs) {
	    return arcs.map(indexArcs);
	  }
	
	  for (var key in objects) {
	    indexGeometry(objects[key]);
	  }
	
	  if (transform) {
	    topology.transform = transform;
	    topology.arcs = delta(topology.arcs);
	  }
	
	  return topology;
	};
	
	function hashArc(arc) {
	  var i = arc[0], j = arc[1], t;
	  if (j < i) t = i, i = j, j = t;
	  return i + 31 * j;
	}
	
	function equalArc(arcA, arcB) {
	  var ia = arcA[0], ja = arcA[1],
	      ib = arcB[0], jb = arcB[1], t;
	  if (ja < ia) t = ia, ia = ja, ja = t;
	  if (jb < ib) t = ib, ib = jb, jb = t;
	  return ia === ib && ja === jb;
	}
	
	var prune = function(topology) {
	  var oldObjects = topology.objects,
	      newObjects = {},
	      oldArcs = topology.arcs,
	      newArcs = [],
	      newArcIndex = -1,
	      newIndexByOldIndex = new Array(oldArcs.length),
	      key;
	
	  function pruneGeometry(input) {
	    var output;
	    switch (input.type) {
	      case "GeometryCollection": output = {type: "GeometryCollection", geometries: input.geometries.map(pruneGeometry)}; break;
	      case "LineString": output = {type: "LineString", arcs: pruneArcs(input.arcs)}; break;
	      case "MultiLineString": output = {type: "MultiLineString", arcs: input.arcs.map(pruneArcs)}; break;
	      case "Polygon": output = {type: "Polygon", arcs: input.arcs.map(pruneArcs)}; break;
	      case "MultiPolygon": output = {type: "MultiPolygon", arcs: input.arcs.map(pruneMultiArcs)}; break;
	      default: return input;
	    }
	    if (input.id != null) output.id = input.id;
	    if (input.bbox != null) output.bbox = input.bbox;
	    if (input.properties != null) output.properties = input.properties;
	    return output;
	  }
	
	  function pruneArc(oldIndex) {
	    var oldReverse = oldIndex < 0 && (oldIndex = ~oldIndex, true), newIndex;
	
	    // If this is the first instance of this arc, record it under its new index.
	    if ((newIndex = newIndexByOldIndex[oldIndex]) == null) {
	      newIndexByOldIndex[oldIndex] = newIndex = ++newArcIndex;
	      newArcs[newIndex] = oldArcs[oldIndex];
	    }
	
	    return oldReverse ? ~newIndex : newIndex;
	  }
	
	  function pruneArcs(arcs) {
	    return arcs.map(pruneArc);
	  }
	
	  function pruneMultiArcs(arcs) {
	    return arcs.map(pruneArcs);
	  }
	
	  for (key in oldObjects) {
	    newObjects[key] = pruneGeometry(oldObjects[key]);
	  }
	
	  return {
	    type: "Topology",
	    bbox: topology.bbox,
	    transform: topology.transform,
	    objects: newObjects,
	    arcs: newArcs
	  };
	};
	
	var filter = function(topology, filter) {
	  var oldObjects = topology.objects,
	      newObjects = {},
	      key;
	
	  if (filter == null) filter = filterTrue;
	
	  function filterGeometry(input) {
	    var output, arcs;
	    switch (input.type) {
	      case "Polygon": {
	        arcs = filterRings(input.arcs);
	        output = arcs ? {type: "Polygon", arcs: arcs} : {type: null};
	        break;
	      }
	      case "MultiPolygon": {
	        arcs = input.arcs.map(filterRings).filter(filterIdentity);
	        output = arcs.length ? {type: "MultiPolygon", arcs: arcs} : {type: null};
	        break;
	      }
	      case "GeometryCollection": {
	        arcs = input.geometries.map(filterGeometry).filter(filterNotNull);
	        output = arcs.length ? {type: "GeometryCollection", geometries: arcs} : {type: null};
	        break;
	      }
	      default: return input;
	    }
	    if (input.id != null) output.id = input.id;
	    if (input.bbox != null) output.bbox = input.bbox;
	    if (input.properties != null) output.properties = input.properties;
	    return output;
	  }
	
	  function filterRings(arcs) {
	    return arcs.length && filterExteriorRing(arcs[0]) // if the exterior is small, ignore any holes
	        ? [arcs[0]].concat(arcs.slice(1).filter(filterInteriorRing))
	        : null;
	  }
	
	  function filterExteriorRing(ring) {
	    return filter(ring, false);
	  }
	
	  function filterInteriorRing(ring) {
	    return filter(ring, true);
	  }
	
	  for (key in oldObjects) {
	    newObjects[key] = filterGeometry(oldObjects[key]);
	  }
	
	  return prune({
	    type: "Topology",
	    bbox: topology.bbox,
	    transform: topology.transform,
	    objects: newObjects,
	    arcs: topology.arcs
	  });
	};
	
	function filterTrue() {
	  return true;
	}
	
	function filterIdentity(x) {
	  return x;
	}
	
	function filterNotNull(geometry) {
	  return geometry.type != null;
	}
	
	var filterAttached = function(topology) {
	  var uniqueRingByArc = {}, // arc index -> index of unique associated ring, or -1 if used by multiple rings
	      ringIndex = 0,
	      name;
	
	  function testGeometry(o) {
	    switch (o.type) {
	      case "GeometryCollection": o.geometries.forEach(testGeometry); break;
	      case "Polygon": testArcs(o.arcs); break;
	      case "MultiPolygon": o.arcs.forEach(testArcs); break;
	    }
	  }
	
	  function testArcs(arcs) {
	    for (var i = 0, n = arcs.length; i < n; ++i, ++ringIndex) {
	      for (var ring = arcs[i], j = 0, m = ring.length; j < m; ++j) {
	        var arc = ring[j];
	        if (arc < 0) arc = ~arc;
	        var uniqueRing = uniqueRingByArc[arc];
	        if (uniqueRing >= 0 && uniqueRing !== ringIndex) uniqueRingByArc[arc] = -1;
	        else uniqueRingByArc[arc] = ringIndex;
	      }
	    }
	  }
	
	  for (name in topology.objects) {
	    testGeometry(topology.objects[name]);
	  }
	
	  return function(ring) {
	    for (var j = 0, m = ring.length, arc; j < m; ++j) {
	      if (arc = ring[j], uniqueRingByArc[arc < 0 ? ~arc : arc] < 0) {
	        return true;
	      }
	    }
	    return false;
	  };
	};
	
	function planarTriangleArea(triangle) {
	  var a = triangle[0], b = triangle[1], c = triangle[2];
	  return Math.abs((a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1])) / 2;
	}
	
	function planarRingArea$1(ring) {
	  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
	  while (++i < n) a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
	  return Math.abs(area) / 2;
	}
	
	var filterWeight = function(topology, minWeight, weight) {
	  minWeight = minWeight == null ? Number.MIN_VALUE : +minWeight;
	
	  if (weight == null) weight = planarRingArea$1;
	
	  return function(ring, interior) {
	    return weight(feature(topology, {type: "Polygon", arcs: [ring]}).geometry.coordinates[0], interior) >= minWeight;
	  };
	};
	
	var filterAttachedWeight = function(topology, minWeight, weight) {
	  var a = filterAttached(topology),
	      w = filterWeight(topology, minWeight, weight);
	  return function(ring, interior) {
	    return a(ring, interior) || w(ring, interior);
	  };
	};
	
	function compare(a, b) {
	  return a[1][2] - b[1][2];
	}
	
	var newHeap = function() {
	  var heap = {},
	      array = [],
	      size = 0;
	
	  heap.push = function(object) {
	    up(array[object._ = size] = object, size++);
	    return size;
	  };
	
	  heap.pop = function() {
	    if (size <= 0) return;
	    var removed = array[0], object;
	    if (--size > 0) object = array[size], down(array[object._ = 0] = object, 0);
	    return removed;
	  };
	
	  heap.remove = function(removed) {
	    var i = removed._, object;
	    if (array[i] !== removed) return; // invalid request
	    if (i !== --size) object = array[size], (compare(object, removed) < 0 ? up : down)(array[object._ = i] = object, i);
	    return i;
	  };
	
	  function up(object, i) {
	    while (i > 0) {
	      var j = ((i + 1) >> 1) - 1,
	          parent = array[j];
	      if (compare(object, parent) >= 0) break;
	      array[parent._ = i] = parent;
	      array[object._ = i = j] = object;
	    }
	  }
	
	  function down(object, i) {
	    while (true) {
	      var r = (i + 1) << 1,
	          l = r - 1,
	          j = i,
	          child = array[j];
	      if (l < size && compare(array[l], child) < 0) child = array[j = l];
	      if (r < size && compare(array[r], child) < 0) child = array[j = r];
	      if (j === i) break;
	      array[child._ = i] = child;
	      array[object._ = i = j] = object;
	    }
	  }
	
	  return heap;
	};
	
	function copy(point) {
	  return [point[0], point[1], 0];
	}
	
	var presimplify = function(topology, weight) {
	  var point = topology.transform ? transform(topology.transform) : copy,
	      heap = newHeap();
	
	  if (weight == null) weight = planarTriangleArea;
	
	  var arcs = topology.arcs.map(function(arc) {
	    var triangles = [],
	        maxWeight = 0,
	        triangle,
	        i,
	        n;
	
	    arc = arc.map(point);
	
	    for (i = 1, n = arc.length - 1; i < n; ++i) {
	      triangle = [arc[i - 1], arc[i], arc[i + 1]];
	      triangle[1][2] = weight(triangle);
	      triangles.push(triangle);
	      heap.push(triangle);
	    }
	
	    // Always keep the arc endpoints!
	    arc[0][2] = arc[n][2] = Infinity;
	
	    for (i = 0, n = triangles.length; i < n; ++i) {
	      triangle = triangles[i];
	      triangle.previous = triangles[i - 1];
	      triangle.next = triangles[i + 1];
	    }
	
	    while (triangle = heap.pop()) {
	      var previous = triangle.previous,
	          next = triangle.next;
	
	      // If the weight of the current point is less than that of the previous
	      // point to be eliminated, use the latter’s weight instead. This ensures
	      // that the current point cannot be eliminated without eliminating
	      // previously- eliminated points.
	      if (triangle[1][2] < maxWeight) triangle[1][2] = maxWeight;
	      else maxWeight = triangle[1][2];
	
	      if (previous) {
	        previous.next = next;
	        previous[2] = triangle[2];
	        update(previous);
	      }
	
	      if (next) {
	        next.previous = previous;
	        next[0] = triangle[0];
	        update(next);
	      }
	    }
	
	    return arc;
	  });
	
	  function update(triangle) {
	    heap.remove(triangle);
	    triangle[1][2] = weight(triangle);
	    heap.push(triangle);
	  }
	
	  return {
	    type: "Topology",
	    bbox: topology.bbox,
	    objects: topology.objects,
	    arcs: arcs
	  };
	};
	
	var quantile = function(topology, p) {
	  var array = [];
	
	  topology.arcs.forEach(function(arc) {
	    arc.forEach(function(point) {
	      if (isFinite(point[2])) { // Ignore endpoints, whose weight is Infinity.
	        array.push(point[2]);
	      }
	    });
	  });
	
	  return array.length && quantile$1(array.sort(descending), p);
	};
	
	function quantile$1(array, p) {
	  if (!(n = array.length)) return;
	  if ((p = +p) <= 0 || n < 2) return array[0];
	  if (p >= 1) return array[n - 1];
	  var n,
	      h = (n - 1) * p,
	      i = Math.floor(h),
	      a = array[i],
	      b = array[i + 1];
	  return a + (b - a) * (h - i);
	}
	
	function descending(a, b) {
	  return b - a;
	}
	
	var simplify = function(topology, minWeight) {
	  minWeight = minWeight == null ? Number.MIN_VALUE : +minWeight;
	
	  // Remove points whose weight is less than the minimum weight.
	  var arcs = topology.arcs.map(function(input) {
	    var i = -1,
	        j = 0,
	        n = input.length,
	        output = new Array(n), // pessimistic
	        point;
	
	    while (++i < n) {
	      if ((point = input[i])[2] >= minWeight) {
	        output[j++] = [point[0], point[1]];
	      }
	    }
	
	    output.length = j;
	    return output;
	  });
	
	  return {
	    type: "Topology",
	    transform: topology.transform,
	    bbox: topology.bbox,
	    objects: topology.objects,
	    arcs: arcs
	  };
	};
	
	var pi = Math.PI;
	var tau = 2 * pi;
	var quarterPi = pi / 4;
	var radians = pi / 180;
	var atan2 = Math.atan2;
	var cos = Math.cos;
	var sin = Math.sin;
	
	function halfArea(ring, closed) {
	  var i = 0,
	      n = ring.length,
	      sum = 0,
	      point = ring[closed ? i++ : n - 1],
	      lambda0, lambda1 = point[0] * radians,
	      phi1 = (point[1] * radians) / 2 + quarterPi,
	      cosPhi0, cosPhi1 = cos(phi1),
	      sinPhi0, sinPhi1 = sin(phi1);
	
	  for (; i < n; ++i) {
	    point = ring[i];
	    lambda0 = lambda1, lambda1 = point[0] * radians;
	    phi1 = (point[1] * radians) / 2 + quarterPi;
	    cosPhi0 = cosPhi1, cosPhi1 = cos(phi1);
	    sinPhi0 = sinPhi1, sinPhi1 = sin(phi1);
	
	    // Spherical excess E for a spherical triangle with vertices: south pole,
	    // previous point, current point.  Uses a formula derived from Cagnoli’s
	    // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
	    // See https://github.com/d3/d3-geo/blob/master/README.md#geoArea
	    var dLambda = lambda1 - lambda0,
	        sdLambda = dLambda >= 0 ? 1 : -1,
	        adLambda = sdLambda * dLambda,
	        k = sinPhi0 * sinPhi1,
	        u = cosPhi0 * cosPhi1 + k * cos(adLambda),
	        v = k * sdLambda * sin(adLambda);
	    sum += atan2(v, u);
	  }
	
	  return sum;
	}
	
	function sphericalRingArea(ring, interior) {
	  var sum = halfArea(ring, true);
	  if (interior) sum *= -1;
	  return (sum < 0 ? tau + sum : sum) * 2;
	}
	
	function sphericalTriangleArea(t) {
	  var sum = halfArea(t, false);
	  return (sum < 0 ? tau + sum : sum) * 2;
	}
	
	exports.bbox = bbox;
	exports.feature = feature;
	exports.mesh = mesh;
	exports.meshArcs = meshArcs;
	exports.merge = merge;
	exports.mergeArcs = mergeArcs;
	exports.neighbors = neighbors;
	exports.quantize = quantize;
	exports.transform = transform;
	exports.untransform = untransform;
	exports.topology = topology;
	exports.filter = filter;
	exports.filterAttached = filterAttached;
	exports.filterAttachedWeight = filterAttachedWeight;
	exports.filterWeight = filterWeight;
	exports.planarRingArea = planarRingArea$1;
	exports.planarTriangleArea = planarTriangleArea;
	exports.presimplify = presimplify;
	exports.quantile = quantile;
	exports.simplify = simplify;
	exports.sphericalRingArea = sphericalRingArea;
	exports.sphericalTriangleArea = sphericalTriangleArea;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));


/***/ }),
/* 48 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = {
	    charges: [[51.18291, -0.63098, 0.3, 0.05], [51.00283, -2.41825, 0.3, 0.05], [52.30522, -2.37574, 0.9, 0.16], [51.8344, 0.91066, 0.3, 0.05], [52.17955, -2.00817, 0.2, 0.03], [51.78, 0.28172, 1.1, 0.19], [51.77815, 0.27685, 0.6, 0.1], [50.88896, -3.22276, 0.1, 0.02], [52.33104, -3.38988, 0.4, 0.07], [51.84615, -2.19922, 0.3, 0.05], [53.33603, -1.51011, 0.7, 0.12], [52.3117, -1.92659, 1.7, 0.3], [53.32291, -1.52539, 0.7, 0.12], [51.96946, -2.89607, 1.7, 0.3], [52.34412, -1.58043, 0.9, 0.16], [51.88336, 0.8973, 1.9, 0.33], [52.3449, -1.58497, 0.1, 0.02], [50.77278, -3.00118, 0.6, 0.1], [52.89393, -2.73475, 2.1, 0.37], [53.11713, -2.03283, 2.4, 0.42], [53.46514, -2.15963, 0.6, 0.1], [55.95738, -3.1697, 1.5, 0.26], [53.03506, -2.14002, 1.1, 0.19], [51.39692, -0.49929, 1.6, 0.28], [51.60084, -1.79642, 4.8, 0.84], [56.06989, -3.46159, 1.2, 0.21], [55.84934, -2.38104, 3.8, 0.66], [53.98364, -2.66703, 3.6, 0.63], [54.84466, -3.2897, 4.7, 0.82], [53.70007, -2.54594, 5.51, 0.96], [51.49083, 0.10803, 1.7, 0.3], [54.95903, -3.97713, 1.8, 0.31], [55.40936, -2.61892, 2.6, 0.45], [50.89745, -4.29936, 0.9, 0.16], [52.81719, -1.87725, 1.7, 0.3], [50.53296, -3.61246, 4.4, 0.77], [50.66559, -2.59953, 2.5, 0.44], [50.97296, -0.14434, 5.1, 0.89], [51.01613, -4.24738, 1.4, 0.24], [51.61351, -2.45223, 2.1, 0.37], [50.50767, -3.61335, 5.1, 0.89], [51.70577, -0.41754, 2.5, 0.44], [51.46071, -2.6664, 1.6, 0.28], [52.19323, -0.20294, 0.6, 0.1], [54.11594, -3.20135, 5.5, 0.96], [53.20672, -2.90149, 3.3, 0.58], [53.20112, -2.90716, 1.2, 0.21], [52.19399, -1.96037, 1.3, 0.23], [52.3872, -0.19329, 1.6, 0.28], [52.15082, -1.90108, 3.1, 0.54], [51.10725, -1.19707, 3, 0.52], [51.00926, -1.4866, 3.2, 0.56], [51.25201, -0.55628, 3.5, 0.61], [52.14157, -2.16338, 0.86, 0.15], [51.09132, -1.29097, 1.3, 0.23], [51.19068, -1.5314, 4.1, 0.72], [51.07494, -1.31359, 4, 0.7], [52.40201, -2.89624, 3.5, 0.61], [52.4734, -2.62848, 2, 0.35], [53.48143, -1.34598, 5.8, 1.01], [51.85366, -2.4809, 4.7, 0.82], [52.11315, -4.22539, 4.4, 0.77], [51.88376, -3.30157, 3.8, 0.66], [52.24226, -4.25925, 4.4, 0.77], [51.70173, -3.42969, 2.1, 0.37], [52.67812, -3.7116, 1.7, 0.3], [52.03596, -4.45692, 11.3, 1.97], [56.95353, -4.50913, 5.2, 0.91], [56.3269, -3.35753, 0.5, 0.09], [52.25011, -4.2282, 1.1, 0.19], [51.59331, -3.80199, 1.8, 0.31], [52.04967, -4.39876, 2.5, 0.44], [51.69369, -3.22416, 5.1, 0.89], [52.53735, -3.27475, 0.1, 0.02], [51.71028, -3.14801, 0.5, 0.09], [51.95603, -3.47962, 7.6, 1.33], [51.72359, -3.36443, 3.2, 0.56], [51.64734, -3.13475, 5, 0.87], [51.9582, -5.12466, 5.8, 1.01], [52.60032, -3.76894, 1.5, 0.26], [57.09339, -4.74371, 10.3, 1.8], [57.56028, -2.62878, 9.4, 1.64], [51.69447, -3.89984, 1.9, 0.33], [55.99415, -3.47281, 2.5, 0.44], [51.7998, -3.71722, 3, 0.52], [51.65629, -3.66362, 10, 1.75], [56.21573, -2.77899, 4.5, 0.79], [51.68971, -3.41103, 11.6, 2.02], [52.03871, -4.555, 0.2, 0.03], [51.64611, -3.32849, 1, 0.17], [52.72773, -3.67705, 4.8, 0.84], [56.36552, -3.49262, 2, 0.35], [51.71356, -3.44778, 6, 1.05], [52.81058, -4.70736, 2.2, 0.38], [57.14985, -2.09376, 2.1, 0.37], [53.03608, -4.34901, 0.9, 0.16], [56.05372, -3.30185, 4.4, 0.77], [52.54395, -4.04434, 6.6, 1.15], [51.68154, -3.77478, 4.4, 0.77], [52.11716, -3.34692, 1.2, 0.21]]
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = gridmap;
	
	var _d = __webpack_require__(46);
	
	var d3 = _interopRequireWildcard(_d);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function flat(type, arr) {
	    var m = void 0;
	    var polygon = void 0;
	
	    var flatten = function flatten(polygon1) {
	        return polygon1.reduce(function (a, b) {
	            return a.concat([[0, 0]].concat(b));
	        });
	    };
	
	    switch (type) {
	        case 'Polygon':
	            m = flatten(arr);
	            break;
	        case 'MultiPolygon':
	            m = flatten(function multiPolygon() {
	                var iInt = void 0;
	                var lenInt = void 0;
	                var resultsInt = [];
	                for (iInt = 0, lenInt = arr.length; iInt < lenInt; iInt += 1) {
	                    polygon = arr[iInt];
	                    resultsInt.push(flatten(polygon));
	                }
	                return resultsInt;
	            }());
	            break;
	        default:
	            m = flatten(arr);
	    }
	
	    return [[0, 0]].concat(m.concat([[0, 0]]));
	} /* Slightly adapted from https://github.com/riccardoscalco/gridmap to work with ES6 and new version of d3.js */
	
	function subGrid(box, side) {
	    var i = void 0;
	    var j = void 0;
	    var x = 1 + Math.floor(box[0][0] / side);
	    var y = 1 + Math.floor(box[0][1] / side);
	    var x1 = Math.floor(box[1][0] / side);
	    var y1 = Math.floor(box[1][1] / side);
	
	    if (x1 >= x && y1 >= y) {
	        return function () {
	            var iInt = void 0;
	            var resultsInt = [];
	
	            /* eslint no-loop-func: "off" */
	            for (iInt = y, j = iInt; y <= y1 ? iInt <= y1 : iInt >= y1; j = y <= y1 ? iInt += 1 : iInt -= 1) {
	                resultsInt.push(function pushToResults() {
	                    var jInt = void 0;
	                    var resultsInt1 = [];
	                    for (jInt = x, i = jInt; x <= x1 ? jInt <= x1 : jInt >= x1; i = x <= x1 ? jInt += 1 : jInt -= 1) {
	                        resultsInt1.push([i, j]);
	                    }
	                    return resultsInt1;
	                }());
	            }
	
	            return resultsInt;
	        }().reduce(function (a, b) {
	            return a.concat(b);
	        });
	    }
	
	    return [];
	}
	
	function isInside(point, vs) {
	    var i = void 0;
	    var inside = void 0;
	    var intersect = void 0;
	    var j = void 0;
	    var xi = void 0;
	    var xj = void 0;
	    var yi = void 0;
	    var yj = void 0;
	    var iInt = void 0;
	    var refInt = void 0;
	    var x = point[0];
	    var y = point[1];
	    inside = false;
	    j = vs.length - 1;
	
	    /* eslint yoda: "off" */
	    for (iInt = 0, i = iInt, refInt = vs.length - 1; refInt >= 0 ? iInt <= refInt : iInt >= refInt; i = 0 <= refInt ? iInt += 1 : iInt -= 1) {
	        xi = vs[i][0];
	        yi = vs[i][1];
	        xj = vs[j][0];
	        yj = vs[j][1];
	        intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
	        if (intersect) {
	            inside = !inside;
	        }
	        j = i;
	    }
	
	    return inside;
	}
	
	function gridmap() {
	    /* eslint no-unused-vars: ["error", { "varsIgnorePattern": "data" }] */
	    var data = 0;
	    var features = 0;
	    var fill = '#CCCCCC';
	    var height = 500;
	    var key = 'id';
	    var projection = 0;
	    var side = 10;
	    var width = 500;
	    var grid = d3.map();
	
	    var chart = function chart(selection) {
	        var box = void 0;
	        var c = void 0;
	        var coords = void 0;
	        var f = void 0;
	        var g = void 0;
	        var i = void 0;
	        var ii = void 0;
	        var j = void 0;
	        var k = void 0;
	        var points = void 0;
	        var polygon = void 0;
	        var value = void 0;
	        var x = void 0;
	        var y = void 0;
	        var iInt = void 0;
	        var jInt = void 0;
	        var kInt = void 0;
	        var lenInt = void 0;
	        var lenInt1 = void 0;
	        var lenInt2 = void 0;
	        var refInt = void 0;
	        var refInt1 = void 0;
	
	        var w = width;
	        var h = height;
	        var path = d3.geoPath().projection(projection);
	        var radius = d3.scaleLinear().range([0, side / 2 * 0.9]);
	        var area = d3.map();
	        var centroid = d3.map();
	
	        for (iInt = 0, lenInt = features.length; iInt < lenInt; iInt += 1) {
	            f = features[iInt];
	            area.set(f[key], path.area(f) / (w * h));
	        }
	
	        var svg = selection.append('svg').attr('width', w).attr('height', h).attr('viewBox', '0 0 ' + w + ' ' + h);
	        var map = svg.append('g');
	
	        map.selectAll('path').data(features).enter().append('path').style('opacity', 0).attr('d', path);
	
	        for (jInt = 0, lenInt1 = features.length; jInt < lenInt1; jInt += 1) {
	            f = features[jInt];
	            g = f.geometry;
	            refInt = g.type;
	
	            if (refInt === 'Polygon' || refInt === 'MultiPolygon') {
	                box = path.bounds(f);
	                points = subGrid(box, side);
	                value = [f[key]];
	
	                if (points.length) {
	                    polygon = flat(g.type, g.coordinates);
	
	                    for (kInt = 0, lenInt2 = points.length; kInt < lenInt2; kInt += 1) {
	                        refInt1 = points[kInt];
	                        i = refInt1[0];
	                        j = refInt1[1];
	                        x = side * i;
	                        y = side * j;
	                        coords = projection.invert([x, y]);
	                        ii = isInside(coords, polygon);
	
	                        if (ii) {
	                            grid.set(i + ',' + j, {
	                                keys: value,
	                                x: x,
	                                y: y
	                            });
	                        }
	                    }
	                } else {
	                    c = path.centroid(f);
	                    if (c) {
	                        centroid.set(f[key], c);
	                    }
	                }
	            }
	        }
	        Array.from(centroid).forEach(function (k2, v) {
	            i = Math.floor(v[0] / side);
	            j = Math.floor(v[1] / side);
	
	            return grid.get(i + ',' + j).keys.push(k2);
	        });
	
	        var dataGrid = function () {
	            var lInt = void 0;
	            var lenInt3 = void 0;
	            var refInt2 = grid.values();
	            var resultsInt = [];
	
	            for (lInt = 0, lenInt3 = refInt2.length; lInt < lenInt3; lInt += 1) {
	                k = refInt2[lInt];
	
	                if (k.keys.length) {
	                    resultsInt.push({
	                        value: 5,
	                        x: k.x,
	                        y: k.y
	                    });
	                }
	            }
	
	            return resultsInt;
	        }();
	
	        var dots = map.selectAll('.gridmap-dot').data(dataGrid);
	
	        radius.domain([0, d3.max(dataGrid, function (d) {
	            return Math.sqrt(d.value);
	        })]);
	
	        return dots.enter().append('circle').attr('class', 'gridmap-dot').attr('cx', function (d) {
	            return d.x;
	        }).attr('cy', function (d) {
	            return d.y;
	        }).attr('r', function (d) {
	            return radius(Math.sqrt(d.value));
	        }).style('fill', fill);
	    };
	
	    chart.width = function (_) {
	        width = _;
	        return chart;
	    };
	    chart.height = function (_) {
	        height = _;
	        return chart;
	    };
	    chart.side = function (_) {
	        side = _;
	        return chart;
	    };
	    chart.key = function (_) {
	        key = _;
	        return chart;
	    };
	    chart.data = function (_) {
	        data = _;
	        return chart;
	    };
	    chart.features = function (_) {
	        features = _;
	        return chart;
	    };
	    chart.projection = function (_) {
	        projection = _;
	        return chart;
	    };
	    chart.fill = function (_) {
	        fill = _;
	        return chart;
	    };
	    return chart;
	}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _utilities = __webpack_require__(9);
	
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

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	"use strict";
	
	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 1.1.20150312
	 *
	 * By Eli Grey, http://eligrey.com
	 * License: Dedicated to the public domain.
	 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
	 */
	
	/*global self, document, DOMException */
	
	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
	
	if ("document" in self) {
	
		// Full polyfill for browsers with no classList support
		// Including IE < Edge missing SVGElement.classList
		if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
	
			(function (view) {
	
				"use strict";
	
				if (!('Element' in view)) return;
	
				var classListProp = "classList",
				    protoProp = "prototype",
				    elemCtrProto = view.Element[protoProp],
				    objCtr = Object,
				    strTrim = String[protoProp].trim || function () {
					return this.replace(/^\s+|\s+$/g, "");
				},
				    arrIndexOf = Array[protoProp].indexOf || function (item) {
					var i = 0,
					    len = this.length;
					for (; i < len; i++) {
						if (i in this && this[i] === item) {
							return i;
						}
					}
					return -1;
				}
				// Vendors: please allow content code to instantiate DOMExceptions
				,
				    DOMEx = function DOMEx(type, message) {
					this.name = type;
					this.code = DOMException[type];
					this.message = message;
				},
				    checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
					if (token === "") {
						throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
					}
					if (/\s/.test(token)) {
						throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
					}
					return arrIndexOf.call(classList, token);
				},
				    ClassList = function ClassList(elem) {
					var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
					    classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
					    i = 0,
					    len = classes.length;
					for (; i < len; i++) {
						this.push(classes[i]);
					}
					this._updateClassName = function () {
						elem.setAttribute("class", this.toString());
					};
				},
				    classListProto = ClassList[protoProp] = [],
				    classListGetter = function classListGetter() {
					return new ClassList(this);
				};
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
					var tokens = arguments,
					    i = 0,
					    l = tokens.length,
					    token,
					    updated = false;
					do {
						token = tokens[i] + "";
						if (checkTokenAndGetIndex(this, token) === -1) {
							this.push(token);
							updated = true;
						}
					} while (++i < l);
	
					if (updated) {
						this._updateClassName();
					}
				};
				classListProto.remove = function () {
					var tokens = arguments,
					    i = 0,
					    l = tokens.length,
					    token,
					    updated = false,
					    index;
					do {
						token = tokens[i] + "";
						index = checkTokenAndGetIndex(this, token);
						while (index !== -1) {
							this.splice(index, 1);
							updated = true;
							index = checkTokenAndGetIndex(this, token);
						}
					} while (++i < l);
	
					if (updated) {
						this._updateClassName();
					}
				};
				classListProto.toggle = function (token, force) {
					token += "";
	
					var result = this.contains(token),
					    method = result ? force !== true && "remove" : force !== false && "add";
	
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
						get: classListGetter,
						enumerable: true,
						configurable: true
					};
					try {
						objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
					} catch (ex) {
						// IE 8 doesn't support enumerable:true
						if (ex.number === -0x7FF5EC54) {
							classListPropDesc.enumerable = false;
							objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
						}
					}
				} else if (objCtr[protoProp].__defineGetter__) {
					elemCtrProto.__defineGetter__(classListProp, classListGetter);
				}
			})(self);
		} else {
			// There is full or partial native classList support, so just check if we need
			// to normalize the add/remove and toggle APIs.
	
			(function () {
				"use strict";
	
				var testElement = document.createElement("_");
	
				testElement.classList.add("c1", "c2");
	
				// Polyfill for IE 10/11 and Firefox <26, where classList.add and
				// classList.remove exist but support only one argument at a time.
				if (!testElement.classList.contains("c2")) {
					var createMethod = function createMethod(method) {
						var original = DOMTokenList.prototype[method];
	
						DOMTokenList.prototype[method] = function (token) {
							var i,
							    len = arguments.length;
	
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
	
					DOMTokenList.prototype.toggle = function (token, force) {
						if (1 in arguments && !this.contains(token) === !force) {
							return force;
						} else {
							return _toggle.call(this, token);
						}
					};
				}
	
				testElement = null;
			})();
		}
	}

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map