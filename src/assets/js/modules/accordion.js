import { Delegate } from 'dom-delegate';
import { addClass, removeClass, nodesToArray, hasClass, closest } from '@pod-point/dom-ops';

let instances = [];

const IS_OPEN = 'is-open';
const MOBILE_ONLY = 'accordion--only-mobile';

class Accordion {
    /**
     * Creates a new accordion element.
     *
     * @param {element} element
     * @return {void}
     */
    constructor(element) {
        this.element = element;
        this.accordionIsMobileOnly = hasClass(this.element, MOBILE_ONLY);
        this.bindEvents();
    }

    /**
     * Binds the event listeners from the elements.
     *
     * @return {void}
     */
    bindEvents() {
        this.listener = new Delegate(this.element);

        this.listener.on('click', 'dt', (event, element) => {
            if ((this.accordionIsMobileOnly && window.isMobileSize) || this.accordionIsMobileOnly !== true) {
                this.toggleAccordion(element);
            }
        });
    }

    /**
     * Unbinds the event listeners from the elements.
     *
     * @return {void}
     */
    unbindEvents() {
        this.listener.destroy();
    }

    /**
     * Toggles the accordion.
     *
     * @param {element} element to toggle
     * @return {void}
     */
    toggleAccordion(element) {
        if (hasClass(element, IS_OPEN)) {
            removeClass(element, IS_OPEN);
        } else {
            const allDtEls = nodesToArray(this.element.querySelectorAll('dt'));
            allDtEls.forEach(dt => removeClass(dt, IS_OPEN));
            const closestDt = closest(element, 'dt');
            addClass(closestDt, IS_OPEN);
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
