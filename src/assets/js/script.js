import 'classlist-polyfill';
import loadModules from '@pod-point/module-loader';
import combineDomModules from '@pod-point/dom-module-loader';
import * as dom from '@pod-point/dom-ops';
import './modules/cookie-notice';

import { accordion, toggleElement, typeahead } from './index';

dom.whenReady(() => {
    loadModules({
        domModules: combineDomModules({
            toggleElement,
            accordion,
            typeahead,
        }),
    });
});
