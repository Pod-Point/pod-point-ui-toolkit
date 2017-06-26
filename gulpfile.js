const gulp = require('gulp');
const requireDir = require('require-dir');
const browserSync = require('browser-sync');

global.waitingWatch = true;
require('es6-promise').polyfill();
requireDir('gulp_tasks', { recurse: true } );

// Short tasks
gulp.task('set-env-dev', () => { global.env = 'dev' });
gulp.task('set-env-prod', () => { global.env = 'prod' });

// Global tasks
gulp.task('common', ['copyAll', 'svgs', 'js', 'modernizr', 'sass', 'assembleHtml']);

// Dev task
gulp.task('dev', [
    'set-env-dev',
    'common',
    'browser-sync',
    'watch'
]);

// Prod task
gulp.task('prod', [
    'set-env-prod',
    'common'
]);

gulp.task('default', ['dev']);
