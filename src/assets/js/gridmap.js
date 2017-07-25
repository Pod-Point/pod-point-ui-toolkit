import * as d3 from "d3";

// Slightly adapted from https://github.com/riccardoscalco/gridmap to work with ES6 and new version of d3.js

function flat(type, arr) {
  let flatten, m, polygon;
  flatten = function flatten(polygon) {
    return polygon.reduce(function (a, b) {
      return a.concat([[0, 0]].concat(b));
    });
  };
  switch (type) {
    case "Polygon":
      m = flatten(arr);
      break;
    case "MultiPolygon":
      m = flatten(function () {
        let _i, _len, _results;
        _results = [];
        for (_i = 0, _len = arr.length; _i < _len; _i++) {
          polygon = arr[_i];
          _results.push(flatten(polygon));
        }
        return _results;
      }());
  }
  return [[0, 0]].concat(m.concat([[0, 0]]));
};

function subGrid(box, side) {
  let i, j, x, x1, y, y1;
  x = 1 + Math.floor(box[0][0] / side);
  y = 1 + Math.floor(box[0][1] / side);
  x1 = Math.floor(box[1][0] / side);
  y1 = Math.floor(box[1][1] / side);
  if (x1 >= x && y1 >= y) {
    return function () {
      let _i, _results;
      _results = [];
      for (j = _i = y; y <= y1 ? _i <= y1 : _i >= y1; j = y <= y1 ? ++_i : --_i) {
        _results.push(function () {
          let _j, _results1;
          _results1 = [];
          for (i = _j = x; x <= x1 ? _j <= x1 : _j >= x1; i = x <= x1 ? ++_j : --_j) {
            _results1.push([i, j]);
          }
          return _results1;
        }());
      }
      return _results;
    }().reduce(function (a, b) {
      return a.concat(b);
    });
  } else {
    return [];
  }
};

function isInside(point, vs) {
  let i, inside, intersect, j, x, xi, xj, y, yi, yj, _i, _ref;
  x = point[0];
  y = point[1];
  inside = false;
  j = vs.length - 1;
  for (i = _i = 0, _ref = vs.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
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
};

export function gridmap() {
  let chart, data, features, fill, grid, height, isDensity, key, projection, side, width;
  projection = void 0;
  data = void 0;
  features = void 0;
  isDensity = void 0;
  side = 10;
  key = "id";
  width = 500;
  height = 500;
  fill = "#CCCCCC";
  grid = d3.map();
  chart = function chart(selection) {
    let area, box, c, centroid, coords, dataGrid, density, dots, f, g, h, i, ii, j, k, map, path, points, polygon, radius, svg, value, w, x, y, _i, _j, _k, _len, _len1, _len2, _ref, _ref1;
    w = width;
    h = height;
    path = d3.geoPath().projection(projection);
    radius = d3.scaleLinear().range([0, side / 2 * 0.9]);
    area = d3.map();
    centroid = d3.map();
    for (_i = 0, _len = features.length; _i < _len; _i++) {
      f = features[_i];
      area.set(f[key], path.area(f) / (w * h));
    }
    svg = selection.append("svg").attr("width", w).attr("height", h).attr("viewBox", "0 0 " + w + " " + h);
    map = svg.append("g");
    map.selectAll("path").data(features).enter().append("path").style("opacity", 0).attr("d", path);
    for (_j = 0, _len1 = features.length; _j < _len1; _j++) {
      f = features[_j];
      g = f.geometry;
      if ((_ref = g.type) === "Polygon" || _ref === "MultiPolygon") {
        box = path.bounds(f);
        points = subGrid(box, side);
        value = [f[key]];
        if (points.length) {
          polygon = flat(g.type, g.coordinates);
          for (_k = 0, _len2 = points.length; _k < _len2; _k++) {
            _ref1 = points[_k], i = _ref1[0], j = _ref1[1];
            x = side * i;
            y = side * j;
            coords = projection.invert([x, y]);
            ii = isInside(coords, polygon);
            if (ii) {
              grid.set(i + "," + j, {
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
    Array.from(centroid).forEach(function (k, v) {
      i = Math.floor(v[0] / side);
      j = Math.floor(v[1] / side);
      try {
        return grid.get(i + "," + j).keys.push(k);
      } catch (_error) { }
    });
    density = function density(a) {
      let den, num;
      if (isDensity) {
        num = d3.sum(function () {
          let _l, _len3, _results;
          _results = [];
          for (_l = 0, _len3 = a.length; _l < _len3; _l++) {
            j = a[_l];
            _results.push(data.get(j) * area.get(j));
          }
          return _results;
        }());
      } else {
        num = d3.sum(function () {
          let _l, _len3, _results;
          _results = [];
          for (_l = 0, _len3 = a.length; _l < _len3; _l++) {
            j = a[_l];
            _results.push(data.get(j));
          }
          return _results;
        }());
      }
      den = d3.sum(function () {
        let _l, _len3, _results;
        _results = [];
        for (_l = 0, _len3 = a.length; _l < _len3; _l++) {
          j = a[_l];
          _results.push(area.get(j));
        }
        return _results;
      }());
      if (den) {
        return num / den;
      } else {
        return 0;
      }
    };
    dataGrid = function () {
      let _l, _len3, _ref2, _results;
      _ref2 = grid.values();
      _results = [];
      for (_l = 0, _len3 = _ref2.length; _l < _len3; _l++) {
        k = _ref2[_l];
        if (k.keys.length) {
          _results.push({
            value: 5 /*density(k.keys)*/
            , x: k.x,
            y: k.y
          });
        }
      }
      return _results;
    }();
    dots = map.selectAll(".gridmap-dot").data(dataGrid);
    radius.domain([0, d3.max(dataGrid, function (d) {
      return Math.sqrt(d.value);
    })]);
    return dots.enter().append("circle").attr("class", "gridmap-dot").attr("cx", function (d) {
      return d.x;
    }).attr("cy", function (d) {
      return d.y;
    }).attr("r", function (d) {
      return radius(Math.sqrt(d.value));
    }).style("fill", fill);
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
  chart.isDensity = function (_) {
    isDensity = _;
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
};