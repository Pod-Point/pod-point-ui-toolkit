const gulp = require('gulp');
const config = require('../config');
const browserSync = require('browser-sync');
const notify = require('gulp-notify');

gulp.task('watch', ['browser-sync'], () => {
	global.waitingWatch = false;
	console.log(global.waitingWatch);
	// Watch for css changes
	gulp.watch(config.src.scss + '**/*', ['sass']);
	// Watch for html changes
	gulp.watch([config.src.templates + '**/*', config.src.data + '**/*'], ['assembleHtml']);
	// Watch for js changes
	gulp.watch(config.src.js + '**/*', ['js']);
	// Watch for new images
	gulp.watch(config.src.img + '**/*.*', ['copyImages']);
	// Watch for new icons
	gulp.watch(config.src.icons + '**/*.svg', ['svgSprite']);

	// Refresh browser
	gulp.watch([config.dist.root + '**/*', '!'+ config.dist.css + '**/*']).on('change', browserSync.reload);

	notify({
		message: 'Changes have been applied!'
	});
});
