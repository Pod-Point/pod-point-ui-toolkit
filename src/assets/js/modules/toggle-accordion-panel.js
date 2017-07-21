import { nodesToArray, hasClass } from '@pod-point/dom-ops';
import { openPanel, closePanel } from './../utilities';

let instances = [];
const IS_OPEN = 'is-open';

class ToggleAccordionPanel {

    /**
     * Creates a new toggle panel
     *
     * @param {element}
     */
    constructor(element) {
        this.panel = element;
        this.panelId = element.getAttribute('id');

        const toggleIconSelector = `[data-toggle-icon="${this.panelId}"]`;
        const toggleButtonsSelector = `[data-toggle-panel="${this.panelId}"]`;
        const openButtonsSelector = `[data-open-panel="${this.panelId}"]`;
        const closeButtonsSelector = `[data-close-panel="${this.panelId}"]`;
        const radioOpenButtonsSelector = `[data-radio-open-panel="${this.panelId}"]`;
        const radioCloseButtonsSelector = `[data-radio-close-panel="${this.panelId}"]`;
        const inputOpenButtonsSelector = `[data-input-open-panel="${this.panelId}"]`;
        const selectToggleButtonsSelector = `[data-select-toggle-panel="${this.panelId}"]`;

        this.toggleIcon = document.querySelector(toggleIconSelector);
        this.toggleButtons = nodesToArray(document.querySelectorAll(toggleButtonsSelector)) || [];
        this.openButtons = nodesToArray(document.querySelectorAll(openButtonsSelector)) || [];
        this.closeButtons = nodesToArray(document.querySelectorAll(closeButtonsSelector)) || [];
        this.radioOpenButtons = nodesToArray(document.querySelectorAll(radioOpenButtonsSelector)) || [];
        this.radioCloseButtons = nodesToArray(document.querySelectorAll(radioCloseButtonsSelector)) || [];
        this.inputOpenButtons = nodesToArray(document.querySelectorAll(inputOpenButtonsSelector)) || [];

        this.selectToggleButtons = nodesToArray(document.querySelectorAll(selectToggleButtonsSelector)) || [];

        this.bindEvents();
    }

    /**
     * Binds the event listeners from the elements
     */
    bindEvents() {
        this.toggleButtons.forEach(toggleButton => {
            toggleButton.addEventListener('click', event => {
                event.preventDefault();
                this.togglePanel();
            });
        });

        this.openButtons.forEach(openButton => {
            openButton.addEventListener('click', event => {
                event.preventDefault();
                openPanel(this.panel);
            });
        });

        this.closeButtons.forEach(closeButton => {
            closeButton.addEventListener('click', event => {
                event.preventDefault();
                closePanel(this.panel);
            });
        });

        this.radioOpenButtons.forEach(radioOpenButton => {
            radioOpenButton.addEventListener('change', event => {
                event.preventDefault();
                openPanel(this.panel);
            });
        });

        this.radioCloseButtons.forEach(radioCloseButton => {
            radioCloseButton.addEventListener('change', event => {
                event.preventDefault();
                closePanel(this.panel);
            });
        });

        this.inputOpenButtons.forEach(inputOpenButton => {
            inputOpenButton.addEventListener('focus', () => openPanel(this.panel));
        });

        this.selectToggleButtons.forEach(selectToggleButton => {
            selectToggleButton.addEventListener('change', (event, element) => {
                const selectedVal = element.options[element.selectedIndex].value;

                if (selectedVal === 'other') {
                    openPanel(this.panel);
                } else {
                    closePanel(this.panel);
                }
            });
        });
    }

    /**
     * Toggle panel depending if already open or not
     */
    togglePanel() {
        const panelIsVisible = hasClass(this.panel, IS_OPEN);

        if (panelIsVisible) {
            closePanel(this.panel);
        } else {
            openPanel(this.panel);
        }
    }

    /**
     * Unbinds the event listeners from the elements
     */
    unbindEvents() {
        this.toggleButtons.forEach(toggleButton => toggleButton.destroy());
        this.openButtons.forEach(openButton => openButton.destroy());
        this.closeButtons.forEach(closeButton => closeButton.destroy());
        this.radioOpenButtons.forEach(radioOpenButton => radioOpenButton.destroy());
        this.radioCloseButtons.forEach(radioCloseButton => radioCloseButton.destroy());
        this.inputOpenButtons.forEach(inputOpenButton => inputOpenButton.destroy());
    }
}

export default {
    init: element => {
        instances.push(new ToggleAccordionPanel(element));
    },

    destroy: () => {
        instances.forEach(instance => instance.unbindEvents());
        instances = [];
    },
};
