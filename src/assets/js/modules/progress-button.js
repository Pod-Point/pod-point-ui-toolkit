import { addClass, removeClass } from '@pod-point/dom-ops';

const IS_LOADING = 'is-loading';
const IS_COMPLETE = 'is-complete';

class ProgressButton {

    /**
     * Create a new progress button
     *
     * @param {element} button
     */
    constructor(button) {
        this.button = button;
    }

    /**
     * Handle the button in a loading state
     */
    handleLoading() {
        this.button.setAttribute('disabled', true);
        addClass(this.button, IS_LOADING);
    }

    /**
     * Handle the button on success
     *
     * @param {boolean} success
     */
    handleComplete(success) {
        removeClass(this.button, IS_LOADING);

        if (success) {
            this.button.removeAttribute('disabled');
            addClass(this.button, IS_COMPLETE);
        }
    }
}

export default {
    create: button => new ProgressButton(button),
};
