var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
	browserify('./src/js/index.js')
	.transform('reactify')
	.transform('envify')
	.bundle()
	.pipe(source('index.js'))
	.pipe(gulp.dest('./static/js'));
});

gulp.task('copy', function() {
	gulp.src(['./src/**/*.*', '!./src/js/**/*.*'])
	.pipe(gulp.dest('./static'));
});

gulp.task('build', ['browserify', 'copy']);

gulp.task('watch', function() {
	gulp.watch('./src/**/*.*', ['build'])
});

gulp.task('default', ['build', 'watch']);
