import { addClass, removeClass } from '@pod-point/dom-ops';
import { isVisible, show, hide, loadVideo } from './../utilities';

let instances = [];
const MODAL_OPEN = 'is-modal-open';

class Modal {

    /**
     * Creates a new modal window
     *
     * @param {element}
     */
    constructor(element) {
        this.openButton = element;
        const modalID = this.openButton.getAttribute('data-modal');
        this.modal = document.querySelector(`#${modalID}`);
        this.closeButton = this.modal.querySelector('.modal-close');
        this.video = this.modal.querySelector('.video-wrapper iframe');

        this.bindEvents();
    }

    /**
     * Binds the event listeners from the elements
     */
    bindEvents() {
        this.openButton.addEventListener('click', () => {
            this.openModal();
        });

        this.closeButton.addEventListener('click', event => {
            event.preventDefault();
            this.closeModal();
        });

        this.modal.addEventListener('click', event => {
            if (event.target === this.modal) {
                this.closeModal();
            }
        });

        document.body.addEventListener('keyup', event => {
            if (event.keyCode === 27) {
                this.closeModal();
            }
        });
    }

    /**
     * Handle the modal opening
     *
     * @param {event}
     */
    doModal(event) {
        event.preventDefault();

        if (isVisible(this.modal)) {
            this.closeModal();
        } else {
            this.openModal();
        }
    }

    /**
     * Handle the modal opening
     */
    openModal() {
        addClass(document.documentElement, MODAL_OPEN);
        show(this.modal);

        if (this.video) { loadVideo(this.video, true); }

        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        document.body.appendChild(overlay);
    }

    /**
     * Handle the modal closing
     */
    closeModal() {
        removeClass(document.documentElement, MODAL_OPEN);
        hide(this.modal);

        if (this.video) { loadVideo(this.video, false); }

        const overlay = document.querySelector('.modal-overlay');
        if (overlay !== null) { document.body.removeChild(overlay); }
    }

    /**
     * Unbinds the event listeners from the elements
     */
    unbindEvents() {
        this.openListener.destroy();
        this.closeListener.destroy();
        this.overlayListener.destroy();
        this.windowListener.destroy();
    }
}

export default {
    init: element => {
        instances.push(new Modal(element));
    },

    destroy: () => {
        instances.forEach(instance => instance.unbindEvents());
        instances = [];
    },
};
