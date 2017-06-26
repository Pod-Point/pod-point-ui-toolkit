'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _domOps = require('@pod-point/dom-ops');

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