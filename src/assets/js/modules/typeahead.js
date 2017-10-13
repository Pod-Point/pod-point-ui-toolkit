import Choices from 'choices.js';

let instances = [];

class Typeahead {

    /**
     * Typeahead constructor.
     *
     * @param {Object} select The select html element to bind to
     *
     * @return {void}
     */
    constructor(select) {
        this.select = select;

        const defaultOption = this.select.dataset.default || '';
        const disabled = this.select.getAttribute('disabled') || false;
        const {
            containerClass = 'typeahead form__field',
            selectedClass = 'form__control',
            dropdownClass = 'typeahead__list--dropdown form__control',
        } = this.select.dataset;

        let options;
        try {
            options = JSON.parse(this.select.dataset.options);
        } catch (e) {
            options = [];
        }

        this.choices = new Choices(this.select, {
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
                activeState: 'is-active',
            },
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
    destroy() {
        this.choices.destroy();
    }
}

export default {
    init(select) {
        instances.push(new Typeahead(select));
    },
    destroy() {
        instances.forEach(instance => instance.destroy());
        instances = [];
    },
};
