import { Delegate } from 'dom-delegate';

let instances = [];

class DropDown {

    /**
     * Creates a new drop down element
     *
     * @param {element}
     */
    constructor(element) {
        this.element = element;
        this.bindEvents();
    }

    /**
     * Bind any event listeners to the elements
     */
    bindEvents() {
        this.listener = new Delegate(this.element);

        this.listener.on('click', (event, input) => {
            event.preventDefault();
            this.doDropDown(input);
        });

        this.listener.on('blur', (event, input) => {
            event.preventDefault();
            this.closeDropDown(input);
        });
    }

    /**
     * Handle drop down opening
     *
     * @param {element} input
     */
    static doDropDown(input) {
        input.parentElement.classList.toggle('open');
    }

    /**
     * Handle drop down closing
     *
     * @param {element} input
     */
    static closeDropDown(input) {
        input.parentElement.classList.remove('open');

        // Trigger the click event on the target if it not opening another menu
        if (event.relatedTarget && event.relatedTarget.getAttribute('data-js-module') !== 'dropdown') {
            event.relatedTarget.click();
        }
    }

    /**
     * Unbinds the event listeners from the elements
     */
    unbindEvents() {
        this.listener.destroy();
    }
}

export default {
    init: element => {
        instances.push(new DropDown(element));
    },

    destroy: () => {
        instances.forEach(instance => instance.unbindEvents());
        instances = [];
    },
};
