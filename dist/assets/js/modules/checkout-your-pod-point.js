'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _domOps = require('@pod-point/dom-ops');

var _utilities = require('./../utilities');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = [];

var CheckoutYourPodPoint = function () {

    /**
     * Creates a new form element.
     *
     * @param element
     */
    function CheckoutYourPodPoint(element) {
        _classCallCheck(this, CheckoutYourPodPoint);

        this.element = element;

        this.selectEvMake = this.element.querySelector('#selectEvMake');
        this.selectEvModel = this.element.querySelector('#selectEvModel');
        this.carImage = this.element.querySelector('#carImage');

        this.productEls = (0, _domOps.nodesToArray)(document.querySelectorAll('.product'));
        this.basketObj = (0, _utilities.readItemFromCookie)('basketObj');
        if (this.basketObj) {
            this.preselectFields();
        }

        this.bindEvents();
    }

    /**
     * Binds the event listeners from the elements.
     */


    _createClass(CheckoutYourPodPoint, [{
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;

            this.selectEVMakeListener = new _domDelegate.Delegate(this.selectEvMake);

            this.selectEVMakeListener.on('change', function (event, element) {
                // needs to enable the select 'this.selectEvModel'
            });

            this.selectEVModelListener = new _domDelegate.Delegate(this.selectEvModel);

            this.selectEVModelListener.on('change', function (event, element) {
                _this.carImage.src = "assets/img/content/cars/nissan.png";
            });
        }

        /**
         * Dynamically checks product checkboxes and rados, based on basket object in cookie.
         */

    }, {
        key: 'preselectFields',
        value: function preselectFields() {
            var podPointUnitId = this.basketObj.podPoint.id;
            var connector = this.basketObj.podPoint.connector;
            var accessories = this.basketObj.accessories;

            if (podPointUnitId) {
                this.element.querySelector('[value="' + podPointUnitId + '"]').checked = true;
                (0, _utilities.openPanel)(this.element.querySelector('#connectors'));
            };
            if (connector) {
                this.element.querySelector('[value="' + connector.id + '"]').checked = true;
            };

            if (Object.keys(accessories).length > 0) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = Object.entries(this.basketObj.accessories)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var _step$value = _slicedToArray(_step.value, 2),
                            key = _step$value[0],
                            value = _step$value[1];

                        this.element.querySelector('[value="' + key + '"]').checked = true;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }

        /**
         * Unbinds the event listeners from the elements.
         */

    }, {
        key: 'unbindEvents',
        value: function unbindEvents() {
            this.selectEVMakeListener.destroy();
            this.selectEVModelListener.destroy();
        }
    }]);

    return CheckoutYourPodPoint;
}();

exports.default = {
    init: function init(element) {
        instances.push(new CheckoutYourPodPoint(element));
    },

    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.unbindEvents();
        });
        instances = [];
    }
};