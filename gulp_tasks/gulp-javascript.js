const gulp = require('gulp');
const config = require('../config');
const webpackConfig = require('../webpack.config.js');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();

gulp.task('jsModules', () => {
    return gulp.src(config.src.js + '**/*.js')
        .pipe(babel())
        .pipe(gulp.dest(config.dist.js))
        .pipe(browserSync.stream());
});

gulp.task('jsMain', () => {
    return gulp.src(config.src.js + '**.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(config.dist.js))
        .pipe(browserSync.stream());
});

gulp.task('js', ['jsModules', 'jsMain']);
