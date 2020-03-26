'use strict';


// dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const merge = require('merge-stream');


var SCSS_SRC = './src/assets/scss/**/*.scss';
var SCSS_DEST = './src/assets/css';


// Compile SCSS
gulp.task('compile_scss', function() {
    const reset = gulp.src('node_modules/normalize-scss/sass')
        .pipe(sass().on('error', sass.logError));
    const scss = gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError));
    return merge(reset, scss)
        .pipe(minifyCSS())
        .pipe(concat('default.min.css'))
        .pipe(gulp.dest(SCSS_DEST));
});

//Watch SCSS
gulp.task('watch_scss', function() {
    return gulp.watch(SCSS_SRC, gulp.series('compile_scss'));
});

//Run tasks
gulp.task('default', gulp.series('watch_scss'));
