import { nodesToArray, addClass, removeClass, hasClass } from '@pod-point/dom-ops';

let instances = [];
const IS_ACTIVE = 'is-active';

class ToggleElement {
    /**
     * Creates a new toggle element.
     *
     * @param {element} element
     * @return {void}
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

        this.bindEvents();
    }

    /**
     * Binds the event listeners from the elements.
     *
     * @return {void}
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
     * Unbinds the event listeners from the elements.
     *
     * @return {void}
     */
    unbindEvents() {
        this.toggleListeners.forEach(toggleListener => toggleListener.destroy());
        this.openListeners.forEach(openListener => openListener.destroy());
        this.closeListeners.forEach(closeListener => closeListener.destroy());
    }

    /**
     * Toggle element depending if already active or not.
     *
     * @return {void}
     */
    toggleElement() {
        if (hasClass(this.element, IS_ACTIVE)) {
            this.closeElement();
        } else {
            this.openElement();
        }
    }

    /**
     * Handle the element opening.
     *
     * @return {void}
     */
    openElement() {
        addClass(this.element, IS_ACTIVE);
        this.toggleButtons.forEach(button => addClass(button, IS_ACTIVE));
        this.openButtons.forEach(button => addClass(button, IS_ACTIVE));
    }

    /**
     * Handle the element closing.
     *
     * @return {void}
     */
    closeElement() {
        removeClass(this.element, IS_ACTIVE);
        this.toggleButtons.forEach(button => removeClass(button, IS_ACTIVE));
        this.openButtons.forEach(button => removeClass(button, IS_ACTIVE));
    }

    /**
     * Handle the closing of all other elements.
     *
     * @return {void}
     */
    closeAllElements() {
        this.allElements.forEach(el => {
            removeClass(el, IS_ACTIVE);
        });
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
