import 'classlist-polyfill';
import loadModules from '@pod-point/module-loader';
import combineDomModules from '@pod-point/dom-module-loader';
import * as dom from '@pod-point/dom-ops';
import './modules/base';

import toggleElement from './modules/toggle-element';
import accordion from './modules/accordion';
import typeAhead from './modules/typeahead';

dom.whenReady(() => {
    loadModules({
        domModules: combineDomModules({
            toggleElement,
            accordion,
            typeAhead,
        }),
    });
});
