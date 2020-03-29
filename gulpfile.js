'use strict';


// dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const merge = require('merge-stream');
const imagemin = require('gulp-imagemin');
const webp = require('imagemin-webp');
const extReplace = require('gulp-ext-replace');


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


var IMG_SRC = './src/assets/images/**/*';
var IMG_BASE = './src/assets/images/';
var IMG_DEST = './src/assets/img';

//Compress IMG
gulp.task('compress_img', function() {
    return gulp.src([IMG_SRC], {base: IMG_BASE})
        .pipe(imagemin([webp({quality: 75})]))
        .pipe(extReplace(".webp"))
        .pipe(gulp.dest(IMG_DEST));
});


//Run tasks
gulp.task('default', gulp.series('watch_scss'));

gulp.task('img', gulp.series('compress_img'));
