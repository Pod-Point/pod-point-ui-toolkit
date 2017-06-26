'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _domOps = require('@pod-point/dom-ops');

var _utilities = require('./../utilities');

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