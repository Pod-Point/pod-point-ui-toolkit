import 'classlist-polyfill';
import loadModules from '@pod-point/module-loader';
import combineDomModules from '@pod-point/dom-module-loader';
import * as dom from '@pod-point/dom-ops';
import './modules/base';

import ajaxForm from './modules/ajax-form';
import formFields from './modules/form-fields';
import toggleAccordionPanel from './modules/toggle-accordion-panel';
import toggleElement from './modules/toggle-element';
import accordion from './modules/accordion';

dom.whenReady(() => {
    loadModules({
        formFields,
        domModules: combineDomModules({
            ajaxForm,
            toggleAccordionPanel,
            toggleElement,
            accordion,
        }),
    });
});
