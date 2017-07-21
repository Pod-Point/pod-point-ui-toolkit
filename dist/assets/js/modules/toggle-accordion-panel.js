'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

            this.toggleButtons.forEach(function (toggleButton) {
                toggleButton.addEventListener('click', function (event) {
                    event.preventDefault();
                    _this.togglePanel();
                });
            });

            this.openButtons.forEach(function (openButton) {
                openButton.addEventListener('click', function (event) {
                    event.preventDefault();
                    (0, _utilities.openPanel)(_this.panel);
                });
            });

            this.closeButtons.forEach(function (closeButton) {
                closeButton.addEventListener('click', function (event) {
                    event.preventDefault();
                    (0, _utilities.closePanel)(_this.panel);
                });
            });

            this.radioOpenButtons.forEach(function (radioOpenButton) {
                radioOpenButton.addEventListener('change', function (event) {
                    event.preventDefault();
                    (0, _utilities.openPanel)(_this.panel);
                });
            });

            this.radioCloseButtons.forEach(function (radioCloseButton) {
                radioCloseButton.addEventListener('change', function (event) {
                    event.preventDefault();
                    (0, _utilities.closePanel)(_this.panel);
                });
            });

            this.inputOpenButtons.forEach(function (inputOpenButton) {
                inputOpenButton.addEventListener('focus', function () {
                    return (0, _utilities.openPanel)(_this.panel);
                });
            });

            this.selectToggleButtons.forEach(function (selectToggleButton) {
                selectToggleButton.addEventListener('change', function (event, element) {
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
            this.toggleButtons.forEach(function (toggleButton) {
                return toggleButton.destroy();
            });
            this.openButtons.forEach(function (openButton) {
                return openButton.destroy();
            });
            this.closeButtons.forEach(function (closeButton) {
                return closeButton.destroy();
            });
            this.radioOpenButtons.forEach(function (radioOpenButton) {
                return radioOpenButton.destroy();
            });
            this.radioCloseButtons.forEach(function (radioCloseButton) {
                return radioCloseButton.destroy();
            });
            this.inputOpenButtons.forEach(function (inputOpenButton) {
                return inputOpenButton.destroy();
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