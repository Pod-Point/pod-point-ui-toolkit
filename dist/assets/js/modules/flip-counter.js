'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tick = require('../../plugins/flip-counter/flip/tick.js');

var _tick2 = _interopRequireDefault(_tick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = [];

var FlipCounter = function () {

    /**
     * Creates a new flip counter element.
     *
     * @param element
     */
    function FlipCounter(element) {
        _classCallCheck(this, FlipCounter);

        this.element = element;

        // this.createTickCounter();
    }

    _createClass(FlipCounter, [{
        key: 'createTickCounter',
        value: function createTickCounter() {
            var element = this.element;
            var stat = parseInt(element.getAttribute('data-stat'));

            var tick = Tick.DOM.create(element, {
                value: stat,
                view: {
                    children: [{
                        root: 'div',
                        layout: 'horizontal',
                        children: [{
                            view: 'flip'
                        }]
                    }]
                }
            });

            Tick.helper.interval(function () {
                stat += Math.round(Math.random());
                tick.value = stat;
            }, 2500);
        }
    }]);

    return FlipCounter;
}();

exports.default = {
    init: function init(element) {
        instances.push(new FlipCounter(element));
    },
    handleTickInit: function handleTickInit(tick) {
        var element = document.querySelector('[data-js-module="flipCounter"]');
        var statOne = parseInt(element.getAttribute('data-stat-one'));
        var statTwo = parseInt(element.getAttribute('data-stat-two'));
        var statThree = parseInt(element.getAttribute('data-stat-three'));
        Tick.helper.interval(function () {
            statOne += Math.round(Math.random());
            statTwo += Math.round(Math.random());
            statThree += Math.round(Math.random());
            tick.value = {
                statOne: statOne,
                statTwo: statTwo,
                statThree: statThree
            };
        }, 2500);
    }
};