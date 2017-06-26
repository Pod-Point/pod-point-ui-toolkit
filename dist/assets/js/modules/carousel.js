'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _flickity = require('flickity');

var _flickity2 = _interopRequireDefault(_flickity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = [];

var Carousel = function () {

    /**
     * Create a new carousel element
     *
     * @param {element} select wrapper
     */
    function Carousel(element) {
        _classCallCheck(this, Carousel);

        this.element = element;
        this.initFlickity();
    }

    /**
     * Initialise a Flickity carousel
     */


    _createClass(Carousel, [{
        key: 'initFlickity',
        value: function initFlickity() {
            this.carousel = new _flickity2.default(this.element, {
                contain: true
            });
        }

        /**
         * Destroy Flickity carousel
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.carousel.destroy();
        }
    }]);

    return Carousel;
}();

exports.default = {
    init: function init(element) {
        instances.push(new Carousel(element));
    },

    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.destroy();
        });
        instances = [];
    }
};