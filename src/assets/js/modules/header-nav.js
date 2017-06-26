import { select, addClass, removeClass, nodesToArray } from '@pod-point/dom-ops';
import { Delegate } from 'dom-delegate';

let instances = [];

const NAV_OPEN = 'nav-open';
const SUBNAV_OPEN = 'sub-nav-open';

let navIsOpen = false;

class HeaderNav {

    /**
     * Creates a new header nav element
     *
     * @param element
     */
    constructor(element) {
        this.element = element;
        this.navicon = this.element.querySelector('.navicon');
        this.nav = this.element.querySelector('.global-nav');
        this.navOverlay = document.querySelector('.global-nav-overlay');

        this.bindEvents();
    }

    /**
     * Binds the event listeners from the elements
     */
    bindEvents() {
        this.naviconListener = new Delegate(this.navicon);

        this.naviconListener.on('click', event => {
            this.toggleNav(event);
        });

        this.navListener = new Delegate(this.nav);

        this.navListener.on('click', '.has-sub-nav > a', (event, clickedElement) => {
            this.toggleSubNav(event, clickedElement);
        });

        this.navOverlayListener = new Delegate(this.navOverlay);

        this.navOverlayListener.on('click', () => {
            this.closeSubNavs();
        });
    }

    /**
     * Toggles the nav
     *
     * @param {event}
     */
    toggleNav(event) {
        event.preventDefault();

        if (navIsOpen) {
            navIsOpen = false;
            removeClass(this.element, NAV_OPEN);
        } else {
            navIsOpen = true;
            addClass(this.element, NAV_OPEN);
        }
    }

    /**
     * Closes all sub navs
     */
    closeSubNavs() {
        const openSubNavs = nodesToArray(select('.has-sub-nav.sub-nav-open'));
        if (openSubNavs.length) {
            openSubNavs.forEach(openSubNav => {
                removeClass(openSubNav, SUBNAV_OPEN);
            });
            this.showOverlay(false);
        }
    }

    /**
     * Toggles the sub nav
     *
     * @param {event} the click
     * @param {element} the clicked element
     */
    toggleSubNav(event, clickedElement) {
        event.preventDefault();
        const subNavLi = clickedElement.closest('li');
        const subNavIsOpen = clickedElement.closest('.has-sub-nav.sub-nav-open');
        if (subNavIsOpen == null) {
            this.closeSubNavs();
            addClass(subNavLi, SUBNAV_OPEN);
            this.showOverlay(true);
        } else {
            removeClass(subNavLi, SUBNAV_OPEN);
            this.showOverlay(false);
        }
    }

    /**
     * Shows the overlay if it's desktop size
     *
     * @param {boolean} show overlay
     */
    showOverlay(showOverlay) {
        if (window.isMobileSize) return;

        if (showOverlay) {
            addClass(this.navOverlay, NAV_OPEN);
            addClass(document.documentElement, 'is-nav-open');
        } else {
            removeClass(this.navOverlay, NAV_OPEN);
            removeClass(document.documentElement, 'is-nav-open');
        }
    }

    /**
     * Unbinds the event listeners from the elements
     */
    unbindEvents() {
        this.naviconListener.destroy();
        this.navListener.destroy();
    }
}

export default {
    init: element => {
        instances.push(new HeaderNav(element));
    },

    destroy: () => {
        instances.forEach(instance => instance.unbindEvents());
        instances = [];
    },
};
