/*
* Dependencias
*/
var gulp = require('gulp'),    /* definir las depedencias */
	concat = require('gulp-concat'), /* instalar los paquetes local */
	uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('concat-files', function(){
	gulp.src('src/*.js')
		.pipe(concat('lab1.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build/'))
});