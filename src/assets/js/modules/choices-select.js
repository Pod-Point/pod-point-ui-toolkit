import Choices from 'choices.js';

let instances = [];

class ChoicesSelect {

    /**
     * ChoicesSelect constructor.
     * Wraps `choices.js` for a dynamic and feature rich select dropdown.
     * Binds to a typical html select dropdown.
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
            containerOuterClass,
            containerInnerClass,
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
                containerOuter: `choices choices-select ${containerOuterClass || ''}`,
                containerInner: `choices__inner ${containerInnerClass || ''}`,
                openState: 'choices-select--is-open',
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
        instances.push(new ChoicesSelect(select));
    },
    destroy() {
        instances.forEach(instance => instance.destroy());
        instances = [];
    },
};
