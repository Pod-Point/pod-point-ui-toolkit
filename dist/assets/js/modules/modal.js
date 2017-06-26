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