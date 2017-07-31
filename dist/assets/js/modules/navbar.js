'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domOps = require('@pod-point/dom-ops');

var _domDelegate = require('dom-delegate');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = [];

var NAV_OPEN = 'nav-open';
var SUBNAV_OPEN = 'sub-nav-open';

var navIsOpen = false;

var Navbar = function () {

    /**
     * Creates a new navbar element
     *
     * @param element
     */
    function Navbar(element) {
        _classCallCheck(this, Navbar);

        this.element = element;
        this.navicon = this.element.querySelector('.navicon');
        this.nav = this.element.querySelector('.navbar__nav');
        this.navOverlay = document.querySelector('.navbar-overlay');

        this.bindEvents();
    }

    /**
     * Binds the event listeners from the elements
     */


    _createClass(Navbar, [{
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;

            this.naviconListener = new _domDelegate.Delegate(this.navicon);

            this.naviconListener.on('click', function (event) {
                _this.toggleNav(event);
            });

            this.navListener = new _domDelegate.Delegate(this.nav);

            this.navListener.on('click', '.has-sub-nav > .navbar__link', function (event, clickedElement) {
                _this.toggleSubNav(event, clickedElement);
            });

            this.navOverlayListener = new _domDelegate.Delegate(this.navOverlay);

            this.navOverlayListener.on('click', function () {
                _this.closeSubNavs();
            });
        }

        /**
         * Toggles the nav
         *
         * @param {event}
         */

    }, {
        key: 'toggleNav',
        value: function toggleNav(event) {
            event.preventDefault();

            if (navIsOpen) {
                navIsOpen = false;
                (0, _domOps.removeClass)(this.element, NAV_OPEN);
            } else {
                navIsOpen = true;
                (0, _domOps.addClass)(this.element, NAV_OPEN);
            }
        }

        /**
         * Closes all sub navs
         */

    }, {
        key: 'closeSubNavs',
        value: function closeSubNavs() {
            var openSubNavs = (0, _domOps.nodesToArray)((0, _domOps.select)('.has-sub-nav.sub-nav-open'));
            if (openSubNavs.length) {
                openSubNavs.forEach(function (openSubNav) {
                    (0, _domOps.removeClass)(openSubNav, SUBNAV_OPEN);
                });
                this.showOverlay(false);
            }
        }

        /**
         * Toggles the sub nav
         *
         * @param {event} the click
         * @param {element} the clicked element
         */

    }, {
        key: 'toggleSubNav',
        value: function toggleSubNav(event, clickedElement) {
            event.preventDefault();
            var subNavLi = (0, _domOps.closest)(clickedElement, 'li');
            var subNavIsOpen = (0, _domOps.closest)(clickedElement, '.has-sub-nav.sub-nav-open');
            if (subNavIsOpen == null) {
                this.closeSubNavs();
                (0, _domOps.addClass)(subNavLi, SUBNAV_OPEN);
                this.showOverlay(true);
            } else {
                (0, _domOps.removeClass)(subNavLi, SUBNAV_OPEN);
                this.showOverlay(false);
            }
        }

        /**
         * Shows the overlays if it's desktop size
         *
         * @param {boolean} show overlays
         */

    }, {
        key: 'showOverlay',
        value: function showOverlay(_showOverlay) {
            if (window.isMobileSize) return;

            if (_showOverlay) {
                (0, _domOps.addClass)(this.element, NAV_OPEN);
                (0, _domOps.addClass)(this.navOverlay, NAV_OPEN);
                (0, _domOps.addClass)(document.documentElement, 'is-nav-open');
            } else {
                (0, _domOps.removeClass)(this.element, NAV_OPEN);
                (0, _domOps.removeClass)(this.navOverlay, NAV_OPEN);
                (0, _domOps.removeClass)(document.documentElement, 'is-nav-open');
            }
        }

        /**
         * Unbinds the event listeners from the elements
         */

    }, {
        key: 'unbindEvents',
        value: function unbindEvents() {
            this.naviconListener.destroy();
            this.navListener.destroy();
        }
    }]);

    return Navbar;
}();

exports.default = {
    init: function init(element) {
        instances.push(new Navbar(element));
    },

    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.unbindEvents();
        });
        instances = [];
    }
};