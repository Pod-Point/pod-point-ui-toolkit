'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _domOps = require('@pod-point/dom-ops');

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