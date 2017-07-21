'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domOps = require('@pod-point/dom-ops');

var _utilities = require('./../utilities');

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

        this.eventsArray = [];
        this.bindEvents();
    }

    /**
     * Binds the event listeners from the elements
     */


    _createClass(ToggleElement, [{
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;

            var clickEvent = 'click';

            this.toggleButtons.forEach(function (toggleButton) {
                var handler = _this.toggleHandler.bind(_this);
                toggleButton.addEventListener(clickEvent, handler);
                (0, _utilities.registerEvent)(_this.eventsArray, toggleButton, clickEvent, handler);
            });

            this.openButtons.forEach(function (openButton) {
                var handler = _this.openHandler.bind(_this);
                openButton.addEventListener(clickEvent, handler);
                (0, _utilities.registerEvent)(_this.eventsArray, openButton, clickEvent, handler);
            });

            this.closeButtons.forEach(function (closeButton) {
                var handler = _this.closeHandler.bind(_this);
                closeButton.addEventListener(clickEvent, handler);
                (0, _utilities.registerEvent)(_this.eventsArray, closeButton, clickEvent, handler);
            });
        }

        /**
         * Toggle handler for click event
         * @param {event}
         */

    }, {
        key: 'toggleHandler',
        value: function toggleHandler(event) {
            event.preventDefault();
            this.toggleElement();
        }

        /**
         * Open handler for click event
         * @param {event}
         */

    }, {
        key: 'openHandler',
        value: function openHandler(event) {
            event.preventDefault();
            this.openElement();
        }

        /**
         * close handler for click event
         * @param {event}
         */

    }, {
        key: 'closeHandler',
        value: function closeHandler(event) {
            event.preventDefault();
            this.closeElement();
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

        /**
         * Unbinds the event listeners from the elements
         */

    }, {
        key: 'unbindEvents',
        value: function unbindEvents() {
            (0, _utilities.removeEvents)(this.eventsArray);
            this.eventsArray = [];
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