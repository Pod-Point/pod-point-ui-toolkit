import loadModules from '@pod-point/module-loader';
import combineDomModules from '@pod-point/dom-module-loader';
import * as dom from '@pod-point/dom-ops';
import './modules/base';

import modal from './modules/modal';
import ajaxForm from './modules/ajax-form';
import formFields from './modules/form-fields';
import toggleAccordionPanel from './modules/toggle-accordion-panel';
import toggleElement from './modules/toggle-element';
import gallerySimple from './modules/gallery-simple';
import accordion from './modules/accordion';
import headerNav from './modules/header-nav';
import carousel from './modules/carousel';
import flipCounter from './modules/flip-counter';
import evMap from './modules/ev-map';
import * as addressLookup from './modules/address-lookup';

require('./shims/classList.js');

window.initAutocomplete = addressLookup.initAutocomplete;
window.geolocate = addressLookup.geolocate;
window.fillInAddress = addressLookup.fillInAddress;

dom.whenReady(() => {
    loadModules({
        formFields,
        domModules: combineDomModules({
            modal,
            ajaxForm,
            toggleAccordionPanel,
            toggleElement,
            gallerySimple,
            headerNav,
            accordion,
            carousel,
            addressLookup,
            flipCounter,
            evMap,
        }),
    });
});

let resizeId;
const evMapElement = document.querySelector('[data-js-module="evMap"]');

function doneResize() {
    if (evMapElement) {
        evMap.init(evMapElement);
    }
}

function startResize() {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResize, 500);
}

window.addEventListener('resize', startResize);

