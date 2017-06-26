import { nodesToArray } from '@pod-point/dom-ops';

const IS_OPEN = 'is-open';

/**
 * Remove hidden class from element, showing it via CSS
 *
 * @param {element}
 */
export function show(element) {
    element.classList.remove('hidden');
}

/**
 * Apply hidden class to element, hiding it via CSS
 *
 * @param {element}
 */
export function hide(element) {
    element.classList.add('hidden');
}

/**
 * Check if an element is hidden (by CSS)
 *
 * @param {element}
 * @returns {boolean} is hidden
 */
export function isHidden(element) {
    return element.classList.contains('hidden');
}

/**
 * Check if an element is visible (isn't hidden by CSS)
 *
 * @param {element}
 * @returns {boolean} is visible
 */
export function isVisible(element) {
    return !isHidden(element);
}

/**
 * Disable or enable button element
 *
 * @param {element} button
 * @param {boolean} disable
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
 * Add item to cookie
 *
 * @param {string} name of cookie
 * @param {obj} value of cookie
 */
export function addItemToCookie(name, value) {
    const cookie = [`${name}=${JSON.stringify(value)}`];
    document.cookie = cookie;
}

/**
 * Read item from cookie
 *
 * @param {string} name of cookie
 * @returns {obj} result
 */
export function readItemFromCookie(name) {
    let result = document.cookie.match(new RegExp(`${name}=([^;]+)`));
    if (result) result = JSON.parse(result[1]);
    return result;
}

/**
 * Delete item from cookie
 *
 * @param {string} name of cookie
 */
export function deleteItemFromCookie(name) {
    const domain = window.location.host.toString();
    const expiry = '01-Jan-1970 00:00:01 GMT';
    document.cookie = `${name}=; expires=${expiry}; path=/; domain=.${domain}`;
}

/**
 * Open panel
 *
 * @param {element} panel
 */
export function openPanel(panel) {
    const panelId = panel.getAttribute('id');
    const toggleIcon = document.querySelector(`[data-toggle-icon="${panelId}"]`);

    panel.classList.add(IS_OPEN);
    if (toggleIcon) { toggleIcon.classList.add('rotate'); }
}

/**
 * Close panel
 *
 * @param {element} panel
 */
export function closePanel(panel) {
    const panelId = panel.getAttribute('id');
    const toggleIcon = document.querySelector(`[data-toggle-icon="${panelId}"]`);

    panel.classList.remove(IS_OPEN);
    if (toggleIcon) { toggleIcon.classList.remove('rotate'); }
}

/**
 * All radios selected
 *
 * @param {nodeList} radio wrap elements
 * @return {boolean} all radios have been selected
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
 * A radio contains a class
 *
 * @param {nodeList} radios
 * @param {string} the class
 * @return {boolean} a radio contains the specified class
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
 * Get random integar
 *
 * @param {integar} min
 * @param {integar} max
 * @return {integar} a random integar between the specified min and max
 */
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

/**
 * Round number to
 *
 * @param {integar} number
 * @param {integar} number to round to
 * @return {integar} a number rounded to the specified number
 */
export function roundNumberTo(num, roundTo) {
    const resto = num % roundTo;
    return resto <= (roundTo / 2) ? (num - resto) : ((num + roundTo) - resto);
}

/**
 * Load or destroy video by replacing the src from the data-src
 *
 * @param {element} video
 * @param {boolean} load video
 */
export function loadVideo(videoEl, load) {
    const videoSrc = videoEl.getAttribute('data-src');

    if (load) {
        videoEl.setAttribute('src', videoSrc);
    } else {
        videoEl.setAttribute('src', '');
    }
}
