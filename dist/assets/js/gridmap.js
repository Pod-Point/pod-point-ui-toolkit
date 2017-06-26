'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = gridmap;

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function flat(type, arr) {
    var m = void 0;
    var polygon = void 0;

    var flatten = function flatten(polygon1) {
        return polygon1.reduce(function (a, b) {
            return a.concat([[0, 0]].concat(b));
        });
    };

    switch (type) {
        case 'Polygon':
            m = flatten(arr);
            break;
        case 'MultiPolygon':
            m = flatten(function multiPolygon() {
                var iInt = void 0;
                var lenInt = void 0;
                var resultsInt = [];
                for (iInt = 0, lenInt = arr.length; iInt < lenInt; iInt += 1) {
                    polygon = arr[iInt];
                    resultsInt.push(flatten(polygon));
                }
                return resultsInt;
            }());
            break;
        default:
            m = flatten(arr);
    }

    return [[0, 0]].concat(m.concat([[0, 0]]));
} /* Slightly adapted from https://github.com/riccardoscalco/gridmap to work with ES6 and new version of d3.js */

function subGrid(box, side) {
    var i = void 0;
    var j = void 0;
    var x = 1 + Math.floor(box[0][0] / side);
    var y = 1 + Math.floor(box[0][1] / side);
    var x1 = Math.floor(box[1][0] / side);
    var y1 = Math.floor(box[1][1] / side);

    if (x1 >= x && y1 >= y) {
        return function () {
            var iInt = void 0;
            var resultsInt = [];

            /* eslint no-loop-func: "off" */
            for (iInt = y, j = iInt; y <= y1 ? iInt <= y1 : iInt >= y1; j = y <= y1 ? iInt += 1 : iInt -= 1) {
                resultsInt.push(function pushToResults() {
                    var jInt = void 0;
                    var resultsInt1 = [];
                    for (jInt = x, i = jInt; x <= x1 ? jInt <= x1 : jInt >= x1; i = x <= x1 ? jInt += 1 : jInt -= 1) {
                        resultsInt1.push([i, j]);
                    }
                    return resultsInt1;
                }());
            }

            return resultsInt;
        }().reduce(function (a, b) {
            return a.concat(b);
        });
    }

    return [];
}

function isInside(point, vs) {
    var i = void 0;
    var inside = void 0;
    var intersect = void 0;
    var j = void 0;
    var xi = void 0;
    var xj = void 0;
    var yi = void 0;
    var yj = void 0;
    var iInt = void 0;
    var refInt = void 0;
    var x = point[0];
    var y = point[1];
    inside = false;
    j = vs.length - 1;

    /* eslint yoda: "off" */
    for (iInt = 0, i = iInt, refInt = vs.length - 1; refInt >= 0 ? iInt <= refInt : iInt >= refInt; i = 0 <= refInt ? iInt += 1 : iInt -= 1) {
        xi = vs[i][0];
        yi = vs[i][1];
        xj = vs[j][0];
        yj = vs[j][1];
        intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect) {
            inside = !inside;
        }
        j = i;
    }

    return inside;
}

function gridmap() {
    /* eslint no-unused-vars: ["error", { "varsIgnorePattern": "data" }] */
    var data = 0;
    var features = 0;
    var fill = '#CCCCCC';
    var height = 500;
    var key = 'id';
    var projection = 0;
    var side = 10;
    var width = 500;
    var grid = d3.map();

    var chart = function chart(selection) {
        var box = void 0;
        var c = void 0;
        var coords = void 0;
        var f = void 0;
        var g = void 0;
        var i = void 0;
        var ii = void 0;
        var j = void 0;
        var k = void 0;
        var points = void 0;
        var polygon = void 0;
        var value = void 0;
        var x = void 0;
        var y = void 0;
        var iInt = void 0;
        var jInt = void 0;
        var kInt = void 0;
        var lenInt = void 0;
        var lenInt1 = void 0;
        var lenInt2 = void 0;
        var refInt = void 0;
        var refInt1 = void 0;

        var w = width;
        var h = height;
        var path = d3.geoPath().projection(projection);
        var radius = d3.scaleLinear().range([0, side / 2 * 0.9]);
        var area = d3.map();
        var centroid = d3.map();

        for (iInt = 0, lenInt = features.length; iInt < lenInt; iInt += 1) {
            f = features[iInt];
            area.set(f[key], path.area(f) / (w * h));
        }

        var svg = selection.append('svg').attr('width', w).attr('height', h).attr('viewBox', '0 0 ' + w + ' ' + h);
        var map = svg.append('g');

        map.selectAll('path').data(features).enter().append('path').style('opacity', 0).attr('d', path);

        for (jInt = 0, lenInt1 = features.length; jInt < lenInt1; jInt += 1) {
            f = features[jInt];
            g = f.geometry;
            refInt = g.type;

            if (refInt === 'Polygon' || refInt === 'MultiPolygon') {
                box = path.bounds(f);
                points = subGrid(box, side);
                value = [f[key]];

                if (points.length) {
                    polygon = flat(g.type, g.coordinates);

                    for (kInt = 0, lenInt2 = points.length; kInt < lenInt2; kInt += 1) {
                        refInt1 = points[kInt];
                        i = refInt1[0];
                        j = refInt1[1];
                        x = side * i;
                        y = side * j;
                        coords = projection.invert([x, y]);
                        ii = isInside(coords, polygon);

                        if (ii) {
                            grid.set(i + ',' + j, {
                                keys: value,
                                x: x,
                                y: y
                            });
                        }
                    }
                } else {
                    c = path.centroid(f);
                    if (c) {
                        centroid.set(f[key], c);
                    }
                }
            }
        }
        Array.from(centroid).forEach(function (k2, v) {
            i = Math.floor(v[0] / side);
            j = Math.floor(v[1] / side);

            return grid.get(i + ',' + j).keys.push(k2);
        });

        var dataGrid = function () {
            var lInt = void 0;
            var lenInt3 = void 0;
            var refInt2 = grid.values();
            var resultsInt = [];

            for (lInt = 0, lenInt3 = refInt2.length; lInt < lenInt3; lInt += 1) {
                k = refInt2[lInt];

                if (k.keys.length) {
                    resultsInt.push({
                        value: 5,
                        x: k.x,
                        y: k.y
                    });
                }
            }

            return resultsInt;
        }();

        var dots = map.selectAll('.gridmap-dot').data(dataGrid);

        radius.domain([0, d3.max(dataGrid, function (d) {
            return Math.sqrt(d.value);
        })]);

        return dots.enter().append('circle').attr('class', 'gridmap-dot').attr('cx', function (d) {
            return d.x;
        }).attr('cy', function (d) {
            return d.y;
        }).attr('r', function (d) {
            return radius(Math.sqrt(d.value));
        }).style('fill', fill);
    };

    chart.width = function (_) {
        width = _;
        return chart;
    };
    chart.height = function (_) {
        height = _;
        return chart;
    };
    chart.side = function (_) {
        side = _;
        return chart;
    };
    chart.key = function (_) {
        key = _;
        return chart;
    };
    chart.data = function (_) {
        data = _;
        return chart;
    };
    chart.features = function (_) {
        features = _;
        return chart;
    };
    chart.projection = function (_) {
        projection = _;
        return chart;
    };
    chart.fill = function (_) {
        fill = _;
        return chart;
    };
    return chart;
}