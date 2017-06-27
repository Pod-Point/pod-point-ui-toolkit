'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.show = show;
exports.hide = hide;
exports.isHidden = isHidden;
exports.isVisible = isVisible;
exports.disableOrEnableButton = disableOrEnableButton;
exports.addItemToCookie = addItemToCookie;
exports.readItemFromCookie = readItemFromCookie;
exports.deleteItemFromCookie = deleteItemFromCookie;
exports.openPanel = openPanel;
exports.closePanel = closePanel;
exports.allRadiosSelected = allRadiosSelected;
exports.aRadioContains = aRadioContains;
exports.getRandomInt = getRandomInt;
exports.roundNumberTo = roundNumberTo;
exports.loadVideo = loadVideo;
exports.scrollTo = scrollTo;

var _domOps = require('@pod-point/dom-ops');

var IS_OPEN = 'is-open';

/**
 * Remove hidden class from element, showing it via CSS
 *
 * @param {element}
 */
function show(element) {
    element.classList.remove('hidden');
}

/**
 * Apply hidden class to element, hiding it via CSS
 *
 * @param {element}
 */
function hide(element) {
    element.classList.add('hidden');
}

/**
 * Check if an element is hidden (by CSS)
 *
 * @param {element}
 * @returns {boolean} is hidden
 */
function isHidden(element) {
    return element.classList.contains('hidden');
}

/**
 * Check if an element is visible (isn't hidden by CSS)
 *
 * @param {element}
 * @returns {boolean} is visible
 */
function isVisible(element) {
    return !isHidden(element);
}

/**
 * Disable or enable button element
 *
 * @param {element} button
 * @param {boolean} disable
 */
function disableOrEnableButton(element, disable) {
    var button = element;
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
function addItemToCookie(name, value) {
    var cookie = [name + '=' + JSON.stringify(value)];
    document.cookie = cookie;
}

/**
 * Read item from cookie
 *
 * @param {string} name of cookie
 * @returns {obj} result
 */
function readItemFromCookie(name) {
    var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
    if (result) result = JSON.parse(result[1]);
    return result;
}

/**
 * Delete item from cookie
 *
 * @param {string} name of cookie
 */
function deleteItemFromCookie(name) {
    var domain = window.location.host.toString();
    var expiry = '01-Jan-1970 00:00:01 GMT';
    document.cookie = name + '=; expires=' + expiry + '; path=/; domain=.' + domain;
}

/**
 * Open panel
 *
 * @param {element} panel
 */
function openPanel(panel) {
    var panelId = panel.getAttribute('id');
    var toggleIcon = document.querySelector('[data-toggle-icon="' + panelId + '"]');

    panel.classList.add(IS_OPEN);
    if (toggleIcon) {
        toggleIcon.classList.add('rotate');
    }
}

/**
 * Close panel
 *
 * @param {element} panel
 */
function closePanel(panel) {
    var panelId = panel.getAttribute('id');
    var toggleIcon = document.querySelector('[data-toggle-icon="' + panelId + '"]');

    panel.classList.remove(IS_OPEN);
    if (toggleIcon) {
        toggleIcon.classList.remove('rotate');
    }
}

/**
 * All radios selected
 *
 * @param {nodeList} radio wrap elements
 * @return {boolean} all radios have been selected
 */
function allRadiosSelected(radiosWraps) {
    var numberOfRadioGroups = (0, _domOps.nodesToArray)(radiosWraps).length;
    var numberOfRadiosSelected = 0;

    radiosWraps.forEach(function (radiosWrap) {
        var checkedRadios = (0, _domOps.nodesToArray)(radiosWrap.querySelectorAll('input[type="radio"]:checked'));
        if (checkedRadios.length === 1) {
            numberOfRadiosSelected += 1;
        }
    });
    return numberOfRadioGroups === numberOfRadiosSelected;
}

/**
 * A radio contains a class
 *
 * @param {nodeList} radios
 * @param {string} the class
 * @return {boolean} a radio contains the specified class
 */
function aRadioContains(radios, specifiedClass) {
    var containsClass = false;
    radios.forEach(function (radio) {
        if (radio.checked) {
            if (radio.classList.contains(specifiedClass)) {
                containsClass = true;
            }
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
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Round number to
 *
 * @param {integar} number
 * @param {integar} number to round to
 * @return {integar} a number rounded to the specified number
 */
function roundNumberTo(num, roundTo) {
    var resto = num % roundTo;
    return resto <= roundTo / 2 ? num - resto : num + roundTo - resto;
}

/**
 * Load or destroy video by replacing the src from the data-src
 *
 * @param {element} video
 * @param {boolean} load video
 */
function loadVideo(videoEl, load) {
    var videoSrc = videoEl.getAttribute('data-src');

    if (load) {
        videoEl.setAttribute('src', videoSrc);
    } else {
        videoEl.setAttribute('src', '');
    }
}

/**
 * Scroll to element
 * (default params are set so that it defaults to scrolling to top of page)
 *
 * @param {element} element to scroll to (default is document.body)
 * @param {integar} to (default is 0)
 * @param {integar} duration (default is 100)
 * @param {integar} timeout (default is 10)
 */
function scrollTo() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
    var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

    if (duration < 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 2;

    setTimeout(function () {
        element.scrollTop = element.scrollTop + perTick;
        scrollTo(element, to, duration - 2);
    }, timeout);
}