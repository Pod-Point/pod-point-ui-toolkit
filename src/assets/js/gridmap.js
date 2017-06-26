/* Slightly adapted from https://github.com/riccardoscalco/gridmap to work with ES6 and new version of d3.js */

import * as d3 from 'd3';

function flat(type, arr) {
    let m;
    let polygon;

    const flatten = function flatten(polygon1) {
        return polygon1.reduce((a, b) =>
            a.concat([[0, 0]].concat(b)),
        );
    };

    switch (type) {
        case 'Polygon':
            m = flatten(arr);
            break;
        case 'MultiPolygon':
            m = flatten(function multiPolygon() {
                let iInt;
                let lenInt;
                const resultsInt = [];
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
}

function subGrid(box, side) {
    let i;
    let j;
    const x = 1 + Math.floor(box[0][0] / side);
    const y = 1 + Math.floor(box[0][1] / side);
    const x1 = Math.floor(box[1][0] / side);
    const y1 = Math.floor(box[1][1] / side);

    if (x1 >= x && y1 >= y) {
        return (() => {
            let iInt;
            const resultsInt = [];

            /* eslint no-loop-func: "off" */
            for (iInt = y, j = iInt; y <= y1 ? iInt <= y1 : iInt >= y1; j = y <= y1 ? iInt += 1 : iInt -= 1) {
                resultsInt.push(function pushToResults() {
                    let jInt;
                    const resultsInt1 = [];
                    for (jInt = x, i = jInt; x <= x1 ? jInt <= x1 : jInt >= x1; i = x <= x1 ? jInt += 1 : jInt -= 1) {
                        resultsInt1.push([i, j]);
                    }
                    return resultsInt1;
                }());
            }

            return resultsInt;
        })().reduce((a, b) =>
            a.concat(b),
        );
    }

    return [];
}

function isInside(point, vs) {
    let i;
    let inside;
    let intersect;
    let j;
    let xi;
    let xj;
    let yi;
    let yj;
    let iInt;
    let refInt;
    const x = point[0];
    const y = point[1];
    inside = false;
    j = vs.length - 1;

    /* eslint yoda: "off" */
    for (iInt = 0, i = iInt, refInt = vs.length - 1; refInt >= 0 ? iInt <= refInt
        : iInt >= refInt; i = 0 <= refInt ? iInt += 1 : iInt -= 1) {
        xi = vs[i][0];
        yi = vs[i][1];
        xj = vs[j][0];
        yj = vs[j][1];
        intersect = (yi > y) !== (yj > y) && (x < ((((xj - xi) * (y - yi)) / (yj - yi)) + xi));
        if (intersect) {
            inside = !inside;
        }
        j = i;
    }

    return inside;
}

export default function gridmap() {
    /* eslint no-unused-vars: ["error", { "varsIgnorePattern": "data" }] */
    let data = 0;
    let features = 0;
    let fill = '#CCCCCC';
    let height = 500;
    let key = 'id';
    let projection = 0;
    let side = 10;
    let width = 500;
    const grid = d3.map();

    const chart = selection => {
        let box;
        let c;
        let coords;
        let f;
        let g;
        let i;
        let ii;
        let j;
        let k;
        let points;
        let polygon;
        let value;
        let x;
        let y;
        let iInt;
        let jInt;
        let kInt;
        let lenInt;
        let lenInt1;
        let lenInt2;
        let refInt;
        let refInt1;

        const w = width;
        const h = height;
        const path = d3.geoPath().projection(projection);
        const radius = d3.scaleLinear().range([0, (side / 2) * 0.9]);
        const area = d3.map();
        const centroid = d3.map();

        for (iInt = 0, lenInt = features.length; iInt < lenInt; iInt += 1) {
            f = features[iInt];
            area.set(f[key], path.area(f) / (w * h));
        }

        const svg = selection.append('svg').attr('width', w).attr('height', h).attr('viewBox', `0 0 ${w} ${h}`);
        const map = svg.append('g');

        map.selectAll('path').data(features).enter().append('path')
            .style('opacity', 0)
            .attr('d', path);

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
                            grid.set(`${i},${j}`, {
                                keys: value,
                                x,
                                y,
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
        Array.from(centroid).forEach((k2, v) => {
            i = Math.floor(v[0] / side);
            j = Math.floor(v[1] / side);

            return grid.get(`${i},${j}`).keys.push(k2);
        });

        const dataGrid = (() => {
            let lInt;
            let lenInt3;
            const refInt2 = grid.values();
            const resultsInt = [];

            for (lInt = 0, lenInt3 = refInt2.length; lInt < lenInt3; lInt += 1) {
                k = refInt2[lInt];

                if (k.keys.length) {
                    resultsInt.push({
                        value: 5,
                        x: k.x,
                        y: k.y,
                    });
                }
            }

            return resultsInt;
        })();

        const dots = map.selectAll('.gridmap-dot').data(dataGrid);

        radius.domain([0, d3.max(dataGrid, d =>
            Math.sqrt(d.value),
        )]);

        return dots.enter().append('circle').attr('class', 'gridmap-dot').attr('cx', d =>
            d.x,
        )
        .attr('cy', d =>
            d.y,
        )
        .attr('r', d =>
            radius(Math.sqrt(d.value)),
        )
        .style('fill', fill);
    };

    chart.width = _ => {
        width = _;
        return chart;
    };
    chart.height = _ => {
        height = _;
        return chart;
    };
    chart.side = _ => {
        side = _;
        return chart;
    };
    chart.key = _ => {
        key = _;
        return chart;
    };
    chart.data = _ => {
        data = _;
        return chart;
    };
    chart.features = _ => {
        features = _;
        return chart;
    };
    chart.projection = _ => {
        projection = _;
        return chart;
    };
    chart.fill = _ => {
        fill = _;
        return chart;
    };
    return chart;
}
