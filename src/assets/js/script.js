import 'classlist-polyfill';
import loadModules from '@pod-point/module-loader';
import combineDomModules from '@pod-point/dom-module-loader';
import * as dom from '@pod-point/dom-ops';
import './modules/base';

import modal from './modules/modal';
import ajaxForm from './modules/ajax-form';
import formFields from './modules/form-fields';
import toggleAccordionPanel from './modules/toggle-accordion-panel';
import toggleElement from './modules/toggle-element';
import accordion from './modules/accordion';
import navbar from './modules/navbar';

dom.whenReady(() => {
    loadModules({
        formFields,
        domModules: combineDomModules({
            modal,
            ajaxForm,
            toggleAccordionPanel,
            toggleElement,
            navbar,
            accordion
        }),
    });
});
