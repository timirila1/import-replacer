var gulp = require('gulp');
var typescript = require('gulp-typescript');
var concat = require('gulp-concat');

var replacer = require('../src/import-replacer');

gulp.task('typescript', function() {
	return gulp.src('*.ts')
		// .pipe(replacer())
		.pipe(typescript({
			module: "amd",
			out: "app.js"
		}))
		.pipe(gulp.dest('built'));
});

gulp.task('default', ['typescript'], function() {
	return gulp.src('built/*.js')
		.pipe(concat('app.js'));
})