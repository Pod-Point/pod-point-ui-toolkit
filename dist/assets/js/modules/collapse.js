'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _utilities = require('./../utilities');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = [];

var Collapse = function () {

    /**
     * Creates a new collapsible element
     *
     * @param {element}
     */
    function Collapse(element) {
        _classCallCheck(this, Collapse);

        this.element = element;
        this.bindEvents();
    }

    /**
     * Bind any event listeners to the elements
     */


    _createClass(Collapse, [{
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;

            this.listener = new _domDelegate.Delegate(this.element);

            this.listener.on('click', function (event, input) {
                _this.doCollapse(event, input);
            });
        }

        /**
         * Collapses the element
         *
         * @param {event}
         * @param {element} trigger
         */

    }, {
        key: 'doCollapse',
        value: function doCollapse(event, trigger) {
            event.preventDefault();

            var target = trigger.getAttribute('data-target');
            var element = trigger.parentNode.querySelector(target);

            if ((0, _utilities.isVisible)(element)) {
                (0, _utilities.hide)(element, trigger);
            } else {
                (0, _utilities.show)(element, trigger);
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
    }]);

    return Collapse;
}();

exports.default = {
    init: function init(element) {
        instances.push(new Collapse(element));
    },

    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.unbindEvents();
        });
        instances = [];
    }
};