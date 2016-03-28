'use strict';
var gulp            = require('gulp'),
    sourcemaps      = require('gulp-sourcemaps'),
    notify          = require('gulp-notify'),
    rename          = require('gulp-rename'),
    concatCss       = require('gulp-concat-css'),
    // Style plugins
    sass            = require('gulp-sass'),
    postcss         = require('gulp-postcss'),
    csswring        = require('csswring'),
    rucksack        = require('gulp-rucksack');

// --- exports ---
module.exports = {
    notifyCb,
    cssPipe,
    cssDepPipe
};

/**
 * Callback for the notify plugin
 */
function notifyCb(err) {
    notify({ title: 'CSS Task' }).write(err.line + ': ' + err.message);
    return this.emit('end');
}

/**
 * CSS pipe
 *
 * @parma {mixed} src files
 * @parma {mixed} dest folders
 * @return {obj} gulp pipe
 */
function cssPipe(src, dest) {
  return gulp.src(src)
    .pipe( sourcemaps.init() )
    .pipe( sass().on('error', notifyCb))
    .pipe( rucksack({autoprefixer: true, fallbacks: false }) )
    .pipe( rename({suffix: '.min'}) )
    .pipe( postcss([csswring]) )
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest(dest) );
}

/**
 * CSS dependencies pipe
 *
 * @parma {mixed} src files
 * @parma {mixed} dest folders
 * @return {obj} gulp pipe
 */
function cssDepPipe(src, dest) {
  return gulp.src(src)
    .pipe( concatCss("dependenciesBundle.min.css") )
    .pipe( postcss([csswring]) )
    .pipe( gulp.dest(dest) );
}