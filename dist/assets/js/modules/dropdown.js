'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = [];

var DropDown = function () {

    /**
     * Creates a new drop down element
     *
     * @param {element}
     */
    function DropDown(element) {
        _classCallCheck(this, DropDown);

        this.element = element;
        this.bindEvents();
    }

    /**
     * Bind any event listeners to the elements
     */


    _createClass(DropDown, [{
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;

            this.listener = new _domDelegate.Delegate(this.element);

            this.listener.on('click', function (event, input) {
                event.preventDefault();
                _this.doDropDown(input);
            });

            this.listener.on('blur', function (event, input) {
                event.preventDefault();
                _this.closeDropDown(input);
            });
        }

        /**
         * Handle drop down opening
         *
         * @param {element} input
         */

    }, {
        key: 'doDropDown',
        value: function doDropDown(input) {
            console.log(input);
            input.parentElement.classList.toggle('open');
        }

        /**
         * Handle drop down closing
         *
         * @param {element} input
         */

    }, {
        key: 'closeDropDown',
        value: function closeDropDown(input) {
            input.parentElement.classList.remove('open');

            // Trigger the click event on the target if it not opening another menu
            if (event.relatedTarget && event.relatedTarget.getAttribute('data-js-module') !== 'dropdown') {
                event.relatedTarget.click();
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

    return DropDown;
}();

exports.default = {
    init: function init(element) {
        instances.push(new DropDown(element));
    },

    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.unbindEvents();
        });
        instances = [];
    }
};