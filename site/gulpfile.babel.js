'use strict'

import gulp from 'gulp';
import browserify from 'browserify'
import reactivy from 'reactify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';

gulp.task('browserify', () => {
	browserify('./src/js/index.js')
	.transform('babelify', {presets: ['es2015', 'react']})
	.transform('envify')
	.bundle()
	.pipe(source('index.js'))
	.pipe(gulp.dest('./static/js'));
});

gulp.task('copy', () => {
	gulp.src(['./src/**/*.*', '!./src/js/**/*.*'])
	.pipe(gulp.dest('./static'));
});

gulp.task('build', ['browserify', 'copy']);

gulp.task('watch', () => {
	gulp.watch('./src/**/*.*', ['build'])
});

gulp.task('default', ['build', 'watch']);
