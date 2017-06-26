'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _domOps = require('@pod-point/dom-ops');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = [];

var HIDDEN = 'hidden';

var ChangeContent = function () {

    /**
     * Creates a new content change wrapper
     *
     * @param {element}
     */
    function ChangeContent(element) {
        _classCallCheck(this, ChangeContent);

        this.wrapper = element;
        this.selectDD = this.wrapper.querySelector('select');
        this.bindEvents();
    }

    /**
     * Binds the event listeners from the elements
     */


    _createClass(ChangeContent, [{
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;

            this.selectListener = new _domDelegate.Delegate(this.selectDD);

            this.selectListener.on('change', function (event, element) {
                _this.changeContent(element);
            });
        }

        /**
         * Unbinds the event listeners from the elements
         */

    }, {
        key: 'unbindEvents',
        value: function unbindEvents() {
            this.selectListener.destroy();
        }

        /**
         * Hide/Show content
         *
         * @param {event}
         */

    }, {
        key: 'changeContent',
        value: function changeContent(element) {
            var selected = element.value;
            var allContentToShow = (0, _domOps.nodesToArray)(this.wrapper.querySelectorAll('[data-content="' + selected + '"]'));
            var allContentToHide = (0, _domOps.nodesToArray)(this.wrapper.querySelectorAll('[data-content]'));

            allContentToHide.forEach(function (item) {
                return (0, _domOps.addClass)(item, HIDDEN);
            });
            allContentToShow.forEach(function (item) {
                return (0, _domOps.removeClass)(item, HIDDEN);
            });
        }
    }]);

    return ChangeContent;
}();

exports.default = {
    init: function init(element) {
        instances.push(new ChangeContent(element));
    },

    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.unbindEvents();
        });
        instances = [];
    }
};