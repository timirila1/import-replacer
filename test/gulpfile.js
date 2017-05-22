var gulp = require('gulp');
var replacer = require('../src/import-replacer');

gulp.task('default', function() {
	return gulp.src('index.ts')
		.pipe(replacer())
});