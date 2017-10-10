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

var Typeahead = function () {

    /**
     * Typeahead constructor.
     *
     * @param {Object} select The select html element to bind to
     *
     * @return {void}
     */
    function Typeahead(select) {
        _classCallCheck(this, Typeahead);

        this.select = select;

        var defaultOption = this.select.dataset.default || '';
        var disabled = this.select.getAttribute('disabled') || false;
        var _select$dataset = this.select.dataset,
            _select$dataset$conta = _select$dataset.containerClass,
            containerClass = _select$dataset$conta === undefined ? 'typeahead form__field' : _select$dataset$conta,
            _select$dataset$selec = _select$dataset.selectedClass,
            selectedClass = _select$dataset$selec === undefined ? 'form__control' : _select$dataset$selec,
            _select$dataset$dropd = _select$dataset.dropdownClass,
            dropdownClass = _select$dataset$dropd === undefined ? 'typeahead__list typeahead__list--dropdown form__control' : _select$dataset$dropd;


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
                containerInner: selectedClass,
                listDropdown: dropdownClass,
                list: 'typeahead__list',
                listSingle: 'typeahead__list--single',
                groupHeading: 'typeahead__list--heading',
                openState: 'typeahead--is-open',
                input: 'typeahead__input',
                item: 'typeahead__item',
                itemSelectable: 'typeahead__item--selectable',
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


    _createClass(Typeahead, [{
        key: 'destroy',
        value: function destroy() {
            this.choices.destroy();
        }
    }]);

    return Typeahead;
}();

exports.default = {
    init: function init(select) {
        instances.push(new Typeahead(select));
    },
    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.destroy();
        });
        instances = [];
    }
};