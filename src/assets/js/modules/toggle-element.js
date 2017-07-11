import { nodesToArray } from '@pod-point/dom-ops';

let instances = [];
const IS_OPEN = 'fade-in';

class ToggleElement {

    /**
     * Creates a new toggle element
     *
     * @param {element}
     */
    constructor(element) {
        this.element = element;
        this.elementId = element.getAttribute('id');

        const toggleButtonsSelector = `[data-toggle-el="${this.elementId}"]`;
        const openButtonsSelector = `[data-open-el="${this.elementId}"]`;
        const closeButtonsSelector = `[data-close-el="${this.elementId}"]`;
        const allElementsSelector = '[data-js-module="toggleElement"]';

        this.toggleButtons = nodesToArray(document.querySelectorAll(toggleButtonsSelector)) || [];
        this.openButtons = nodesToArray(document.querySelectorAll(openButtonsSelector)) || [];
        this.closeButtons = nodesToArray(document.querySelectorAll(closeButtonsSelector)) || [];

        this.allElements = nodesToArray(document.querySelectorAll(allElementsSelector));

        this.elementIsVisible = false;

        this.bindEvents();
    }

    /**
     * Binds the event listeners from the elements
     */
    bindEvents() {
        this.toggleButtons.forEach(toggleButton => {
            toggleButton.addEventListener('click', event => {
                event.preventDefault();
                this.toggleElement();
            });
        });

        this.openButtons.forEach(openButton => {
            openButton.addEventListener('click', event => {
                event.preventDefault();
                this.openElement();
            });
        });

        this.closeButtons.forEach(closeButton => {
            closeButton.addEventListener('click', event => {
                event.preventDefault();
                this.closeElement();
            });
        });
    }

    /**
     * Unbinds the event listeners from the elements
     */
    unbindEvents() {
        this.toggleListeners.forEach(toggleListener => toggleListener.destroy());
        this.openListeners.forEach(openListener => openListener.destroy());
        this.closeListeners.forEach(closeListener => closeListener.destroy());
    }

    /**
     * Toggle element depending if already open or not
     */
    toggleElement() {
        if (this.elementIsVisible) {
            this.closeElement();
        } else {
            this.openElement();
        }
    }

    /**
     * Handle the element opening
     */
    openElement() {
        this.closeAllElements();
        this.elementIsVisible = true;
        this.element.classList.remove('hidden');
        this.element.classList.add(IS_OPEN);
    }

    /**
     * Handle the element closing
     */
    closeElement() {
        this.element.classList.add('hidden');
        this.element.classList.remove(IS_OPEN);
        this.elementIsVisible = false;
    }

    /**
     * Handle the closing of all other elements
     */
    closeAllElements() {
        this.allElements.forEach(el => {
            el.classList.add('hidden');
            el.classList.remove(IS_OPEN);
        });
        this.elementIsVisible = false;
    }
}

export default {
    init: element => {
        instances.push(new ToggleElement(element));
    },

    destroy: () => {
        instances.forEach(instance => instance.unbindEvents());
        instances = [];
    },
};
