import { Delegate } from 'dom-delegate';
import { addClass, removeClass, select, nodesToArray } from '@pod-point/dom-ops';

const HAS_CONTENT = 'has-content';
const HAS_ERROR = 'has-error';
const HAS_FOCUS = 'has-focus';

class FormFields {

    constructor(root = document.body) {
        FormFields.bindEvents(root);
        FormFields.checkAllFieldsForContent();
    }

    static checkAllFieldsForContent() {
        const inputs = nodesToArray(select('input'));

        if (inputs.length) {
            inputs.forEach(input => FormFields.checkForContent(input));
        }
    }

    static checkForContent(element) {
        const container = FormFields.getInputContainer(element);
        const callback = (element.value) ? addClass : removeClass;

        callback(container, HAS_CONTENT);
    }

    static checkForErrors(element) {
        removeClass(FormFields.getInputContainer(element), HAS_ERROR);
    }

    static bindEvents(root) {
        const listener = new Delegate(root);

        // Listen to change because of password managers etc
        listener.on('change', 'input, textarea', (event, element) => {
            FormFields.checkForContent(element);
            FormFields.checkForErrors(element);
            FormFields.giveFocus(element);
        });

        // Text input focus handler
        listener.on('focus', 'input, textarea', (event, element) => FormFields.giveFocus(element));

        // Text input focusout handler
        listener.on('focusout', 'input, textarea', (event, element) => {
            FormFields.checkForContent(element);
            FormFields.checkForErrors(element);
            FormFields.removeFocus(element);
        });

        listener.on('input', 'textarea', (event, element) => {
            const scrollHeight = element.scrollHeight;
            const formEl = element;

            if (scrollHeight > parseInt(window.getComputedStyle(formEl, null).height, 0)) {
                formEl.style.height = `${scrollHeight}px`;
            }
        });
    }

    static getInputContainer(element) {
        return element.parentNode;
    }

    static removeFocus(element) {
        removeClass(FormFields.getInputContainer(element), HAS_FOCUS);
    }

    static giveFocus(element) {
        addClass(FormFields.getInputContainer(element), HAS_FOCUS);
    }
}

export default {
    init: () => {
        new FormFields(); // eslint-disable-line no-new
    },
};
