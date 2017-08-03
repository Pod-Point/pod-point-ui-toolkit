const gulp = require('gulp');
const config = require('../config');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const combineMq = require('gulp-combine-mq');
const browserSync = require('browser-sync');
const gulpif = require('gulp-if');
const minifyCss = require('gulp-minify-css');

const sassOptions = {
	quiet: true,
	imagePath: '../img/',
	precision: 4,
	outputStyle: 'nested'
};

const autoprefixerOptions = {
	browsers: ['last 2 versions', 'ie 9']
};

gulp.task('sass', () => {
	return gulp.src(config.src.scss + '**/*.scss')
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(gulpif(global.env === 'prod', combineMq()))
		.pipe(gulpif(global.env === 'prod', minifyCss()))
		.pipe(gulpif(global.env === 'prod', sourcemaps.write('./')))
		.pipe(gulp.dest(config.dist.css))
		.pipe(gulpif(global.waitingWatch === false, browserSync.stream()));
});
