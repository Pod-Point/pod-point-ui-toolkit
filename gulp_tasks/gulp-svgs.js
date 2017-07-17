const gulp = require('gulp');
const config = require('../config');
const svgmin = require('gulp-svgmin');
const rename = require("gulp-rename");


// Minify and copy svgs to dist assets
gulp.task('copy-svgs', () => {

    // Minify icons
    gulp.src(config.src.icons+'**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest(config.dist.icons));

    // Minify other svgs
    gulp.src(config.src.img + '**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest(config.dist.img));
});

gulp.task('inline-svgs', () => {

    // Minify icons and make them hbs partials
    gulp.src(config.src.icons+'**/*.svg')
        .pipe(svgmin())
        .pipe(rename({
            prefix: "icon-",
            extname: ".hbs"
        }))
        .pipe(gulp.dest(config.src.svgIconPartials));

    // Minify svgs and make them hbs partials
    gulp.src(config.src.inlineSvgs + '**/*.svg')
        .pipe(svgmin())
        .pipe(rename({
            extname: ".hbs"
        }))
        .pipe(gulp.dest(config.src.svgPartials));
});

gulp.task('svgs', ['copy-svgs', 'inline-svgs']);
