'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint class-methods-use-this: ["error", { "exceptMethods": ["ready"] }] */

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

var _topojson = require('topojson');

var topojson = _interopRequireWildcard(_topojson);

var _utilities = require('./../utilities');

var _chargeData = require('./../data/chargeData');

var _chargeData2 = _interopRequireDefault(_chargeData);

var _gridmap = require('./../gridmap');

var _gridmap2 = _interopRequireDefault(_gridmap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mapConfig = {};
var instances = [];

var EvMap = function () {

    /**
     * Create a new Map
     *
     * @param {element}
     */
    function EvMap(element) {
        _classCallCheck(this, EvMap);

        if (window.isTouchDevice || window.isMobileSize) {
            return;
        }

        mapConfig = {
            mapID: '#gridmap',
            mapWidth: 700,
            mapHeight: 553, // size of the map on the page in pixels
            mapDotStepSize: 10, // size of the map dots
            mapDotColour: '#CCCCCC', // fill colour of the dots
            mapLonLeft: -12.0, // enter the longitude in degrees on left edge of map, by comparing with Google Maps
            mapLonRight: 16.04, // enter the longitude in degrees on right edge of map
            mapLatBottom: 47.1, // enter the latitude in degrees on bottom edge of map
            timeDelay: 6000, // time in milliseconds between new charges appearing on the map
            s: 2250, // scale
            t: [300, 2350] };

        this.element = element;
        this.jsonPath = element.getAttribute('data-json-path');
        this.mapElement = document.getElementById(mapConfig.mapID);
        this.markerHolder = document.getElementById('markerHolder');
        this.markerCircleHolder = document.getElementById('markerCircleHolder');
        this.markerCircle = document.getElementById('markerCircle');
        this.kwText = document.getElementById('kw');
        this.savingText = document.getElementById('saving');
        this.lastHighlightedDot = [];

        mapConfig.projection = d3.geoAzimuthalEqualArea().scale(mapConfig.s).translate(mapConfig.t).clipAngle(180).precision(1);

        d3.queue().defer(d3.json, this.jsonPath).await(this.ready);

        this.startCharges();
    }

    /**
     * Create the map
     *
     * @param error
     * @param eu
     */


    _createClass(EvMap, [{
        key: 'ready',
        value: function ready(error, eu) {
            var features = topojson.feature(eu, eu.objects.europe).features;
            var data = d3.map();
            var j = void 0;
            var len = void 0;

            for (j = 0, len = features.length; j < len; j += 1) {
                data.set(features[j].id, (0, _utilities.getRandomInt)(1, 5));
            }

            var chart = (0, _gridmap2.default)().data(data).width(mapConfig.mapWidth).height(mapConfig.mapHeight).key('id').side(mapConfig.mapDotStepSize).projection(mapConfig.projection).features(features).fill(mapConfig.mapDotColour);

            d3.select(mapConfig.mapID).call(chart);
        }

        /**
         * Show the marker
         *
         * @param x
         * @param y
         * @param kw
         * @param saving
         */

    }, {
        key: 'showMarker',
        value: function showMarker(x, y, kw, saving) {
            this.lastHighlightedDot = [x, y];
            this.mapPoint = document.querySelector('circle[cx="' + x + '"][cy="' + y + '"]');

            if (this.mapPoint) {
                this.mapPoint.classList.add('gridmap-dot-selected');

                this.kwText.innerHTML = kw;
                this.savingText.innerHTML = saving.toFixed(2);

                this.markerHolder.style.left = x - 50 + 'px';
                this.markerHolder.style.top = y - 50 + 'px';
                this.markerHolder.classList.remove('hidden');

                this.markerCircleHolder.classList.add('ev-map-wrap__bulge-appear');
            } else {
                this.nextCharge();
            }
        }

        /**
         * Hide the marker
         */

    }, {
        key: 'hideMarker',
        value: function hideMarker() {
            if (this.lastHighlightedDot[0]) {
                this.mapPoint = document.querySelector('circle[cx="' + this.lastHighlightedDot[0] + '"][cy="' + this.lastHighlightedDot[1] + '"]');
                if (this.mapPoint) {
                    this.mapPoint.classList.remove('gridmap-dot-selected');
                }
            }

            this.markerHolder.classList.add('hidden');
            this.markerCircleHolder.classList.remove('ev-map-wrap__bulge-appear');
            /* eslint no-void: "off" */
            void this.markerHolder.offsetWidth; // force DOM reflow to result bulge class

            this.lastHighlightedDot = [];
        }

        /**
         * Convert latitude and longitude to a dot on the map
         * (adapted from http://stackoverflow.com/a/27313080)
         *
         * @param latitute
         * @param longitude
         * @param kw
         * @param saving
         */

    }, {
        key: 'showChargeOnMap',
        value: function showChargeOnMap(latitude, longitude, kw, saving) {
            var mapLonDelta = mapConfig.mapLonRight - mapConfig.mapLonLeft;
            var mapLatBottomDegree = mapConfig.mapLatBottom * Math.PI / 180;

            var x = (longitude - mapConfig.mapLonLeft) * (mapConfig.mapWidth / mapLonDelta);
            var latitudeNew = latitude * Math.PI / 180;
            var worldMapWidth = mapConfig.mapWidth / mapLonDelta * 360 / (2 * Math.PI);
            var mapOffsetY = worldMapWidth / 2 * Math.log((1 + Math.sin(mapLatBottomDegree)) / (1 - Math.sin(mapLatBottomDegree)));
            var y = mapConfig.mapHeight - (worldMapWidth / 2 * Math.log((1 + Math.sin(latitudeNew)) / (1 - Math.sin(latitudeNew))) - mapOffsetY);

            var dotX = (0, _utilities.roundNumberTo)(x, mapConfig.mapDotStepSize);
            var dotY = (0, _utilities.roundNumberTo)(y, mapConfig.mapDotStepSize);

            this.showMarker(dotX, dotY, kw, saving);
        }

        /**
         * Get the next charge
         */

    }, {
        key: 'nextCharge',
        value: function nextCharge() {
            this.hideMarker();
            var charge = _chargeData2.default.charges[Math.floor(Math.random() * _chargeData2.default.charges.length)];
            this.showChargeOnMap(charge[0], charge[1], charge[2], charge[3]);
        }

        /**
         * Start showing charges on the map
         */

    }, {
        key: 'startCharges',
        value: function startCharges() {
            this.hideMarker();
            setInterval(this.nextCharge.bind(this), mapConfig.timeDelay);
        }
    }]);

    return EvMap;
}();

exports.default = {
    init: function init(element) {
        instances.push(new EvMap(element));
    }
};