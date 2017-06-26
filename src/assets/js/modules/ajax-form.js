import { Delegate } from 'dom-delegate';
import request from 'superagent';
import progressButton from './progress-button';

let instances = [];

class AjaxForm {

    /**
     * Create a new AJAX form
     *
     * @param {element} form
     */
    constructor(form) {
        this.form = form;
        this.button = progressButton.create(form.querySelector('button[type="submit"]'));
        this.requestInProgress = false;

        this.bindEvents();
    }

    /**
     * Handle the form submission
     */
    submitForm() {
        this.requestInProgress = true;
        this.button.handleLoading();

        request.post(this.form.action)
            .type('form')
            .send(this.form)
            .end((error, response) => {
                this.requestInProgress = false;

                if (response && response.ok) {
                    this.button.handleComplete(true);
                } else {
                    this.button.handleComplete(false);
                }
            });
    }

    /**
     * Bind any event listeners to the elements
     */
    bindEvents() {
        this.listener = new Delegate(this.form);

        this.listener.on('submit', event => {
            event.preventDefault();

            if (!this.requestInProgress) {
                this.submitForm();
            }
        });
    }

    /**
     * Unbinds the event listeners from the elements
     */
    unbindEvents() {
        this.listener.destroy();
    }
}

export default {
    init: form => {
        instances.push(new AjaxForm(form));
    },

    destroy: () => {
        instances.forEach(instance => instance.unbindEvents());
        instances = [];
    },
};
