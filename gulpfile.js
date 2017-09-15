const gulp = require('gulp');
const requireDir = require('require-dir');
const browserSync = require('browser-sync');
const gulpSequence = require('gulp-sequence');

global.waitingWatch = true;
require('es6-promise').polyfill();
requireDir('gulp_tasks', { recurse: true } );

// Short tasks
gulp.task('set-env-dev', () => { global.env = 'dev' });
gulp.task('set-env-prod', () => { global.env = 'prod' });

// Global tasks
gulp.task('build', ['assembleHtml', 'copyAll', 'svgs', 'js', 'sass']);
gulp.task('fresh-build', gulpSequence('clean', 'build'));

// Watch task
gulp.task('watch', [
    'set-env-dev',
    'build',
    'browser-sync',
    'watch-files'
]);

// Dev task
gulp.task('dev', [
    'set-env-dev',
    'fresh-build'
]);

// Prod task
gulp.task('prod', [
    'set-env-prod',
    'fresh-build'
]);

gulp.task('default', ['dev']);
