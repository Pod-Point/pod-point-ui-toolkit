'use strict';

var _moduleLoader = require('@pod-point/module-loader');

var _moduleLoader2 = _interopRequireDefault(_moduleLoader);

var _domModuleLoader = require('@pod-point/dom-module-loader');

var _domModuleLoader2 = _interopRequireDefault(_domModuleLoader);

var _domOps = require('@pod-point/dom-ops');

var dom = _interopRequireWildcard(_domOps);

require('./modules/base');

var _modal = require('./modules/modal');

var _modal2 = _interopRequireDefault(_modal);

var _ajaxForm = require('./modules/ajax-form');

var _ajaxForm2 = _interopRequireDefault(_ajaxForm);

var _formFields = require('./modules/form-fields');

var _formFields2 = _interopRequireDefault(_formFields);

var _toggleAccordionPanel = require('./modules/toggle-accordion-panel');

var _toggleAccordionPanel2 = _interopRequireDefault(_toggleAccordionPanel);

var _toggleElement = require('./modules/toggle-element');

var _toggleElement2 = _interopRequireDefault(_toggleElement);

var _gallerySimple = require('./modules/gallery-simple');

var _gallerySimple2 = _interopRequireDefault(_gallerySimple);

var _accordion = require('./modules/accordion');

var _accordion2 = _interopRequireDefault(_accordion);

var _headerNav = require('./modules/header-nav');

var _headerNav2 = _interopRequireDefault(_headerNav);

var _carousel = require('./modules/carousel');

var _carousel2 = _interopRequireDefault(_carousel);

var _addressLookup = require('./modules/address-lookup');

var addressLookup = _interopRequireWildcard(_addressLookup);

var _video = require('./modules/video');

var _video2 = _interopRequireDefault(_video);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./shims/classList.js');

window.initAutocomplete = addressLookup.initAutocomplete;
window.geolocate = addressLookup.geolocate;
window.fillInAddress = addressLookup.fillInAddress;

dom.whenReady(function () {
    (0, _moduleLoader2.default)({
        formFields: _formFields2.default,
        domModules: (0, _domModuleLoader2.default)({
            modal: _modal2.default,
            ajaxForm: _ajaxForm2.default,
            toggleAccordionPanel: _toggleAccordionPanel2.default,
            toggleElement: _toggleElement2.default,
            gallerySimple: _gallerySimple2.default,
            headerNav: _headerNav2.default,
            accordion: _accordion2.default,
            carousel: _carousel2.default,
            addressLookup: addressLookup,
            video: _video2.default
        })
    });
});