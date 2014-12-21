var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

gulp.task('default', function() {
	var bundler = browserify({
	  entries: ['./app/core/main.js'], // Only need initial file, browserify finds the deps
	  transform: [reactify], // We want to convert JSX to normal javascript
	  debug: true, // Gives us sourcemapping
	  cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
	});
});