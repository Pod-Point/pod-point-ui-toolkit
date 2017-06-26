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

var LOCAL_KEY = 'toggle-state-';
var HIDDEN = 'hidden';
var VISIBLE = 'visible';

var Toggle = function () {

    /**
     * Creates a new toggle element
     *
     * @param {element}
     */
    function Toggle(element) {
        _classCallCheck(this, Toggle);

        this.element = element;
        this.action = element.dataset.hasOwnProperty('action') ? element.dataset.action : 'click';

        this.shouldHide = element.getAttribute('data-hide');
        this.shouldShow = element.getAttribute('data-show') ? element.dataset.show : null;

        this.storageKey = null;

        if (element.getAttribute('data-persist')) {
            this.storageKey = LOCAL_KEY + element.getAttribute('id');

            this.initialVisibility = localStorage.getItem(this.storageKey);

            if (this.initialVisibility === HIDDEN) {
                (0, _utilities.hide)((0, _domOps.selectFirst)(this.shouldHide));
            } else {
                (0, _utilities.show)((0, _domOps.selectFirst)(this.shouldHide));
            }
        }

        this.bindEvents();
    }

    /**
     * Binds the event listeners from the elements
     */


    _createClass(Toggle, [{
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;

            this.listener = new _domDelegate.Delegate(this.element);

            this.listener.on(this.action, function (event) {
                _this.doToggle(event);
            });
        }

        /**
         * Toggles the elements
         *
         * @param {event}
         */

    }, {
        key: 'doToggle',
        value: function doToggle(event) {
            event.preventDefault();

            var hideElement = this.shouldHide ? (0, _domOps.selectFirst)(this.shouldHide) : null;
            var showElement = this.shouldShow ? (0, _domOps.selectFirst)(this.shouldShow) : null;

            if (this.storageKey) {
                localStorage.setItem(this.storageKey, (0, _utilities.isVisible)(hideElement) ? HIDDEN : VISIBLE);
            }

            if (this.shouldShow) {
                if ((0, _utilities.isVisible)(showElement)) {
                    (0, _utilities.hide)(showElement);
                } else {
                    (0, _utilities.show)(showElement);
                }
            }

            if (this.shouldHide) {
                if ((0, _utilities.isVisible)(hideElement)) {
                    (0, _utilities.hide)(hideElement);
                } else {
                    (0, _utilities.show)(hideElement);
                }
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

    return Toggle;
}();

exports.default = {
    init: function init(element) {
        instances.push(new Toggle(element));
    },

    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.unbindEvents();
        });
        instances = [];
    }
};