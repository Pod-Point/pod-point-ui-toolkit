'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _domOps = require('@pod-point/dom-ops');

var _utilities = require('./../utilities');

var _stickyJs = require('sticky-js');

var _stickyJs2 = _interopRequireDefault(_stickyJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = [];

var NAV_OPEN = 'nav-open';
var SUBNAV_OPEN = 'sub-nav-open';
var HEADER_MINFIED = 'is-minified';

var navIsOpen = false;
var subNavIsOpen = false;

var scrollPos = 0;
var headerWrap = document.querySelector('.global-header-wrap');
var stepsIndicator = document.querySelector('#stepsIndicator');

var HeaderNav = function () {

    /**
     * Creates a new header nav element.
     *
     * @param element
     */
    function HeaderNav(element) {
        _classCallCheck(this, HeaderNav);

        this.element = element;
        this.navicon = this.element.querySelector('.navicon');
        this.nav = this.element.querySelector('.global-nav');
        this.headerWrap = document.querySelector('.global-header-wrap');

        if (isMobileSize) {
            this.bindEvents();
        }
    }

    /**
     * Binds the event listeners from the elements.
     */


    _createClass(HeaderNav, [{
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;

            this.naviconListener = new _domDelegate.Delegate(this.navicon);

            this.naviconListener.on('click', function (event) {
                _this.toggleNav(event);
            });

            this.navListener = new _domDelegate.Delegate(this.nav);

            this.navListener.on('click', '.has-sub-nav > a', function (event, clickedElement) {
                _this.toggleSubNav(event, clickedElement);
            });
        }

        /**
         * Toggles the nav.
         *
         * @param {Event} event
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
         * Closes all sub navs.
         */

    }, {
        key: 'closeSubNavs',
        value: function closeSubNavs() {
            var openSubNavs = (0, _domOps.nodesToArray)((0, _domOps.select)('.has-sub-nav.sub-nav-open'));
            if (openSubNavs.length) {
                openSubNavs.forEach(function (openSubNav) {
                    (0, _domOps.removeClass)(openSubNav, SUBNAV_OPEN);
                });
            }
        }

        /**
         * Toggles the sub nav.
         *
         * @param {Event} event
         * @param {Element} element
         */

    }, {
        key: 'toggleSubNav',
        value: function toggleSubNav(event, clickedElement) {
            event.preventDefault();
            var subNavLi = clickedElement.closest('li');
            var subNavIsOpen = clickedElement.closest('.has-sub-nav.sub-nav-open');
            if (subNavIsOpen == null) {
                this.closeSubNavs();
                (0, _domOps.addClass)(subNavLi, SUBNAV_OPEN);
            } else {
                (0, _domOps.removeClass)(subNavLi, SUBNAV_OPEN);
            }
        }

        /**
         * Unbinds the event listeners from the elements.
         */

    }, {
        key: 'unbindEvents',
        value: function unbindEvents() {
            this.naviconListener.destroy();
            this.navListener.destroy();
        }
    }]);

    return HeaderNav;
}();

exports.default = {
    init: function init(element) {
        instances.push(new HeaderNav(element));
    },
    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.unbindEvents();
        });
        instances = [];
    }
};