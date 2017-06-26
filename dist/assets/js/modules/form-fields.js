'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _domOps = require('@pod-point/dom-ops');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HAS_CONTENT = 'has-content';
var HAS_ERROR = 'has-error';
var HAS_FOCUS = 'has-focus';

var FormFields = function () {
    function FormFields() {
        var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;

        _classCallCheck(this, FormFields);

        FormFields.bindEvents(root);
        FormFields.checkAllFieldsForContent();
    }

    _createClass(FormFields, null, [{
        key: 'checkAllFieldsForContent',
        value: function checkAllFieldsForContent() {
            var inputs = (0, _domOps.nodesToArray)((0, _domOps.select)('input'));

            if (inputs.length) {
                inputs.forEach(function (input) {
                    return FormFields.checkForContent(input);
                });
            }
        }
    }, {
        key: 'checkForContent',
        value: function checkForContent(element) {
            var container = FormFields.getInputContainer(element);
            var callback = element.value ? _domOps.addClass : _domOps.removeClass;

            callback(container, HAS_CONTENT);
        }
    }, {
        key: 'checkForErrors',
        value: function checkForErrors(element) {
            (0, _domOps.removeClass)(FormFields.getInputContainer(element), HAS_ERROR);
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents(root) {
            var listener = new _domDelegate.Delegate(root);

            // Listen to change because of password managers etc
            listener.on('change', 'input, textarea', function (event, element) {
                FormFields.checkForContent(element);
                FormFields.checkForErrors(element);
                FormFields.giveFocus(element);
            });

            // Text input focus handler
            listener.on('focus', 'input, textarea', function (event, element) {
                return FormFields.giveFocus(element);
            });

            // Text input focusout handler
            listener.on('focusout', 'input, textarea', function (event, element) {
                FormFields.checkForContent(element);
                FormFields.checkForErrors(element);
                FormFields.removeFocus(element);
            });

            listener.on('input', 'textarea', function (event, element) {
                var scrollHeight = element.scrollHeight;
                var formEl = element;

                if (scrollHeight > parseInt(window.getComputedStyle(formEl, null).height, 0)) {
                    formEl.style.height = scrollHeight + 'px';
                }
            });
        }
    }, {
        key: 'getInputContainer',
        value: function getInputContainer(element) {
            return element.parentNode;
        }
    }, {
        key: 'removeFocus',
        value: function removeFocus(element) {
            (0, _domOps.removeClass)(FormFields.getInputContainer(element), HAS_FOCUS);
        }
    }, {
        key: 'giveFocus',
        value: function giveFocus(element) {
            (0, _domOps.addClass)(FormFields.getInputContainer(element), HAS_FOCUS);
        }
    }]);

    return FormFields;
}();

exports.default = {
    init: function init() {
        new FormFields(); // eslint-disable-line no-new
    }
};