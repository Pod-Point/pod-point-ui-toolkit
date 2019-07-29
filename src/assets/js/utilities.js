import { nodesToArray } from '@pod-point/dom-ops';

const IS_OPEN = 'is-open';

/**
 * Remove hidden class from element, showing it via CSS.
 *
 * @param {HTMLElement} element
 * @return {void}
 */
export function show(element) {
    element.classList.remove('hidden');
}

/**
 * Apply hidden class to element, hiding it via CSS.
 *
 * @param {HTMLElement} element
 * @return {void}
 */
export function hide(element) {
    element.classList.add('hidden');
}

/**
 * Check if an element is hidden (by CSS).
 *
 * @param {HTMLElement} element
 * @return {Boolean}
 */
export function isHidden(element) {
    return element.classList.contains('hidden');
}

/**
 * Check if an element is visible (isn't hidden by CSS).
 *
 * @param {HTMLElement} element
 * @return {Boolean}
 */
export function isVisible(element) {
    return !isHidden(element);
}

/**
 * Disable or enable button element.
 *
 * @param {HTMLElement} element
 * @param {Boolean} disable
 *
 * @return {void}
 */
export function disableOrEnableButton(element, disable) {
    const button = element;
    if (disable) {
        button.disabled = true;
        button.classList.add('is-disabled');
    } else {
        button.disabled = false;
        button.classList.remove('is-disabled');
    }
}

/**
 * Add item to cookie.
 *
 * @param {String} name of cookie
 * @param {Object} value of cookie
 * @return {void}
 */
export function addItemToCookie(name, value) {
    const cookie = [`${name}=${JSON.stringify(value)}`];
    document.cookie = cookie;
}

/**
 * Read item from cookie.
 *
 * @param {String} name of cookie
 * @return {Object}
 */
export function readItemFromCookie(name) {
    let result = document.cookie.match(new RegExp(`${name}=([^;]+)`));
    if (result) result = JSON.parse(result[1]);
    return result;
}

/**
 * Delete item from cookie.
 *
 * @param {String} name of cookie
 * @return {void}
 */
export function deleteItemFromCookie(name) {
    const domain = window.location.host.toString();
    const expiry = '01-Jan-1970 00:00:01 GMT';
    document.cookie = `${name}=; expires=${expiry}; path=/; domain=.${domain}`;
}

/**
 * Open panel.
 *
 * @param {HTMLElement} panel
 * @return {void}
 */
export function openPanel(panel) {
    const panelId = panel.getAttribute('id');
    const toggleIcon = document.querySelector(`[data-toggle-icon="${panelId}"]`);

    panel.classList.add(IS_OPEN);
    if (toggleIcon) { toggleIcon.classList.add('rotate'); }
}

/**
 * Close panel.
 *
 * @param {HTMLElement} panel
 * @return {void}
 */
export function closePanel(panel) {
    const panelId = panel.getAttribute('id');
    const toggleIcon = document.querySelector(`[data-toggle-icon="${panelId}"]`);

    panel.classList.remove(IS_OPEN);
    if (toggleIcon) { toggleIcon.classList.remove('rotate'); }
}

/**
 * All radios selected.
 *
 * @param {NodeList} radiosWraps radio wrap elements
 * @return {Boolean} all radios have been selected
 */
export function allRadiosSelected(radiosWraps) {
    const numberOfRadioGroups = nodesToArray(radiosWraps).length;
    let numberOfRadiosSelected = 0;

    radiosWraps.forEach(radiosWrap => {
        const checkedRadios = nodesToArray(radiosWrap.querySelectorAll('input[type="radio"]:checked'));
        if (checkedRadios.length === 1) { numberOfRadiosSelected += 1; }
    });
    return (numberOfRadioGroups === numberOfRadiosSelected);
}

/**
 * A radio contains a class.
 *
 * @param {NodeList} radios
 * @param {String} specifiedClass
 * @return {Boolean} a radio contains the specified class
 */
export function aRadioContains(radios, specifiedClass) {
    let containsClass = false;
    radios.forEach(radio => {
        if (radio.checked) {
            if (radio.classList.contains(specifiedClass)) { containsClass = true; }
        }
    });
    return containsClass;
}

/**
 * Get random integer.
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number} a random integar between the specified min and max
 */
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

/**
 * Round number to.
 *
 * @param {Number} num
 * @param {Number} roundTo num to round to
 * @return {Number} a number rounded to the specified number
 */
export function roundNumberTo(num, roundTo) {
    const resto = num % roundTo;
    return resto <= (roundTo / 2) ? (num - resto) : ((num + roundTo) - resto);
}

/**
 * Register an event in order to later on remove the event.
 *
 * @param {array} eventsArray
 * @param {HTMLElement} element
 * @param {String} eventName
 * @param {function} listener
 * @return {void}
 */
export function registerEvent(eventsArray, element, eventName, listener) {
    eventsArray.push({ element, eventName, listener });
}

/**
 * Remove the events from the events array.
 *
 * @param {array} eventsArray
 * @return {void}
 */
export function removeEvents(eventsArray) {
    eventsArray.forEach(eventObj => {
        const { element, eventName, listener } = eventObj;
        element.removeEventListener(eventName, listener);
    });
}
