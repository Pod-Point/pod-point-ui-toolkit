'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global Tick */


var _domOps = require('@pod-point/dom-ops');

require('../../plugins/flip-counter/flip/tick');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = [];
var LOADED = 'loaded';

var FlipCounter = function () {

    /**
     * Creates a new flip counter element
     *
     * @param {element}
     */
    function FlipCounter(element) {
        _classCallCheck(this, FlipCounter);

        this.element = element;
        this.createTickCounter();
    }

    /**
     * Creates a new flip counter element with options
     */


    _createClass(FlipCounter, [{
        key: 'createTickCounter',
        value: function createTickCounter() {
            var element = this.element;
            var stat = parseInt(element.getAttribute('data-stat'), 0);
            var flipCounterSections = document.querySelectorAll('.flip-counter-section');

            var tick = Tick.DOM.create(element, {
                value: stat,
                view: {
                    children: [{
                        root: 'div',
                        layout: 'horizontal',
                        repeat: true,
                        children: [{
                            view: 'flip'
                        }]
                    }]
                },
                didInit: function didInit() {
                    setTimeout(function () {
                        flipCounterSections.forEach(function (item) {
                            return (0, _domOps.addClass)(item, LOADED);
                        });
                    }, 1500);
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
    }
};