import { nodesToArray } from '@pod-point/dom-ops';
import { registerEvent, removeEvents } from './../utilities';

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

        this.eventsArray = [];
        this.bindEvents();
    }

    /**
     * Binds the event listeners from the elements
     */
    bindEvents() {
        const clickEvent = 'click';

        this.toggleButtons.forEach(toggleButton => {
            const handler = this.toggleHandler.bind(this);
            toggleButton.addEventListener(clickEvent, handler);
            registerEvent(this.eventsArray, toggleButton, clickEvent, handler);
        });

        this.openButtons.forEach(openButton => {
            const handler = this.openHandler.bind(this);
            openButton.addEventListener(clickEvent, handler);
            registerEvent(this.eventsArray, openButton, clickEvent, handler);
        });

        this.closeButtons.forEach(closeButton => {
            const handler = this.closeHandler.bind(this);
            closeButton.addEventListener(clickEvent, handler);
            registerEvent(this.eventsArray, closeButton, clickEvent, handler);
        });
    }

    /**
     * Toggle handler for click event
     * @param {event}
     */
    toggleHandler(event) {
        event.preventDefault();
        this.toggleElement();
    }

    /**
     * Open handler for click event
     * @param {event}
     */
    openHandler(event) {
        event.preventDefault();
        this.openElement();
    }

    /**
     * close handler for click event
     * @param {event}
     */
    closeHandler(event) {
        event.preventDefault();
        this.closeElement();
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

    /**
     * Unbinds the event listeners from the elements
     */
    unbindEvents() {
        removeEvents(this.eventsArray);
        this.eventsArray = [];
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
