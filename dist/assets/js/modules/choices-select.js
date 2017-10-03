'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _choices = require('choices.js');

var _choices2 = _interopRequireDefault(_choices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = [];

var ChoicesSelect = function () {

    /**
     * ChoicesSelect constructor.
     * Wraps `choices.js` for a dynamic and feature rich select dropdown.
     * Binds to a typical html select dropdown.
     *
     * @param {Object} select The select html element to bind to
     *
     * @return {void}
     */
    function ChoicesSelect(select) {
        _classCallCheck(this, ChoicesSelect);

        this.select = select;

        var defaultOption = this.select.dataset.default || '';
        var disabled = this.select.getAttribute('disabled') || false;
        var _select$dataset = this.select.dataset,
            containerOuterClass = _select$dataset.containerOuterClass,
            containerInnerClass = _select$dataset.containerInnerClass;


        var options = void 0;
        try {
            options = JSON.parse(this.select.dataset.options);
        } catch (e) {
            options = [];
        }

        this.choices = new _choices2.default(this.select, {
            searchPlaceholderValue: 'Search',
            searchFields: 'customProperties.description',
            itemSelectText: '',
            classNames: {
                containerOuter: 'choices choices-select ' + (containerOuterClass || ''),
                containerInner: 'choices__inner ' + (containerInnerClass || ''),
                openState: 'choices-select--is-open'
            }
        });

        this.choices.setChoices(options, 'value', 'label', false);
        this.choices.setValueByChoice(defaultOption);

        if (disabled) {
            this.choices.disable();
        }
    }

    /**
     * Destroy the choices instance.
     *
     * @return {void}
     */


    _createClass(ChoicesSelect, [{
        key: 'destroy',
        value: function destroy() {
            this.choices.destroy();
        }
    }]);

    return ChoicesSelect;
}();

exports.default = {
    init: function init(select) {
        instances.push(new ChoicesSelect(select));
    },
    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.destroy();
        });
        instances = [];
    }
};