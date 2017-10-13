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

var TypeAhead = function () {

    /**
     * TypeAheadSelect constructor.
     *
     * @param {Object} select The select html element to bind to
     *
     * @return {void}
     */
    function TypeAhead(select) {
        _classCallCheck(this, TypeAhead);

        this.select = select;

        var defaultOption = this.select.dataset.default || '';
        var disabled = this.select.getAttribute('disabled') || false;
        var _select$dataset = this.select.dataset,
            _select$dataset$conta = _select$dataset.containerClass,
            containerClass = _select$dataset$conta === undefined ? 'type-ahead form__field' : _select$dataset$conta,
            _select$dataset$selec = _select$dataset.selectClass,
            selectClass = _select$dataset$selec === undefined ? 'form__control' : _select$dataset$selec,
            _select$dataset$dropd = _select$dataset.dropdownClass,
            dropdownClass = _select$dataset$dropd === undefined ? 'form__control type-ahead__list type-ahead__list--dropdown' : _select$dataset$dropd;


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
                containerOuter: containerClass,
                containerInner: selectClass,
                list: 'type-ahead__list',
                listDropdown: dropdownClass,
                listSingle: 'type-ahead__list--single',
                groupHeading: 'type-ahead__list--heading',
                openState: 'type-ahead--is-open',
                input: 'type-ahead__input',
                item: 'type-ahead__item',
                itemSelectable: 'type-ahead__item--selectable',
                activeState: 'is-active'
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


    _createClass(TypeAhead, [{
        key: 'destroy',
        value: function destroy() {
            this.choices.destroy();
        }
    }]);

    return TypeAhead;
}();

exports.default = {
    init: function init(select) {
        instances.push(new TypeAhead(select));
    },
    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.destroy();
        });
        instances = [];
    }
};