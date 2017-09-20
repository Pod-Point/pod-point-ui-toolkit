# pod-point-ui-toolkit
[![npm](https://img.shields.io/npm/v/@pod-point/pod-point-ui-toolkit.svg)](https://www.npmjs.com/package/@pod-point/pod-point-ui-toolkit) [![Build Status](https://travis-ci.com/Pod-Point/pod-point-ui-toolkit.svg?token=F7wj2GWZpNRsZSDUXLya&branch=master)](https://travis-ci.com/Pod-Point/pod-point-ui-toolkit)

The POD Point frontend framework is a library of base styles and components designed for rapid prototyping.

## Installation

First, install all of the Node modules needed:

```bash
git clone git@github.com:Pod-Point/pod-point-ui-toolkit.git
cd pod-point-ui-toolkit
npm install
```

## Versioning

Use NPM to create a new version in your PR branch:

```bash
npm version [major | minor | patch]
```

Then you need to push the version commit and the tags up:

```bash
git push && git push --tags
```

Once your version change in `package.json` is merged into master travis will deploy this to NPM for you.

## Gulp tasks

Gulp and gulp dev - compiles pages, assets and creates Sass sourcemaps

```bash
gulp
```

```bash
gulp dev
```

Gulp watch - compiles pages and assets and spins up a new development server at [http://localhost:3000](http://localhost:3000) with `/dist` as the document root.

```bash
gulp watch
```

Gulp prod - compiles pages and assets, minifies CSS and JS and creates SASS sourcemaps

```bash
gulp prod
```

## Documentation

See full docs [here](https://pod-point.github.io/pod-point-ui-toolkit/dist/index.html)
