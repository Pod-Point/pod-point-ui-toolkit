import { Delegate } from 'dom-delegate';
import { addClass, removeClass, nodesToArray, hasClass } from '@pod-point/dom-ops';

let instances = [];

const IS_OPEN = 'is-open';
const MOBILE_ONLY = 'accordion--only-mobile';

class Accordion {

    /**
     * Creates a new accordion element
     *
     * @param {element}
     */
    constructor(element) {
        this.element = element;
        this.accordionIsMobileOnly = hasClass(this.element, MOBILE_ONLY);
        this.bindEvents();
    }

    /**
     * Binds the event listeners from the elements
     */
    bindEvents() {
        this.listener = new Delegate(this.element);

        if ((this.accordionIsMobileOnly && window.isMobileSize) || this.accordionIsMobileOnly !== true) {
            this.listener.on('click', 'dt', (event, element) => {
                this.toggleAccordion(element);
            });
        }
    }

    /**
     * Unbinds the event listeners from the elements
     */
    unbindEvents() {
        this.listener.destroy();
    }

    /**
     * Toggles the accordion.
     *
     * @param {element} element to toggle
     */
    toggleAccordion(element) {
        if (hasClass(element, IS_OPEN)) {
            removeClass(element, IS_OPEN);
        } else {
            const allDtEls = nodesToArray(this.element.querySelectorAll('dt'));
            allDtEls.forEach(dt => removeClass(dt, IS_OPEN));
            addClass(element.closest('dt'), IS_OPEN);
        }
    }
}

export default {
    init: element => {
        instances.push(new Accordion(element));
    },

    destroy: () => {
        instances.forEach(instance => instance.unbindEvents());
        instances = [];
    },
};
