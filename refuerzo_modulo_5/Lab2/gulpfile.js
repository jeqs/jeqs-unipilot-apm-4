/*
* Dependencias
*/
var gulp = require('gulp'),    
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	htmlmin = require('gulp-htmlmin');

/*
* Configuración
*/

/*  Min js */
gulp.task('js-min', function(){
	gulp.src(['bower_components/angular/*.js', 'bower_components/angular-route/*.js'])
		.pipe(concat('angularall.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js'))
});

/*  Min html */
gulp.task('html-min', function(){
	return gulp.src('views/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
    	.pipe(gulp.dest('views/mins'))
});

/*  default */
gulp.task('default', ['html-min', 'js-min'], function(){
	return true;
});