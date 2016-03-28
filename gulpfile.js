'use strict';
   // this function is strict...

var gulp            = require('gulp'),
    merge           = require('merge-stream'),
    concat          = require('gulp-concat'),
    rename          = require('gulp-rename'),
    uglify          = require('gulp-uglify'),
    sourcemaps      = require('gulp-sourcemaps'),
    notify          = require('gulp-notify');

// import the variables for the tasks and files, etc

var TASKS           = require('./helpers/tasks'),
    FILES           = require('./helpers/files'),
    helpers         = require('./helpers/helpers');
// deveolpment style tasks
// --------------------------------------------------------
gulp.task(TASKS.dev.style, function () {
  // compile main css wp style file
  return helpers.cssPipe(FILES.css.main, FILES.css.dest);
});

// deveolpment style tasks
// --------------------------------------------------------
gulp.task(TASKS.dev.styleDeps, function () {
  // compile main css wp style file
  return helpers.cssDepPipe(FILES.css.dependencies, FILES.css.dest)
});

// build js
// --- minifies and concats js src files ---
// --------------------------------------------------------
gulp.task(TASKS.build.js, function(){
  let build = gulp.src(FILES.js.all)
    .pipe( rename({suffix: '.min'}) )
    .pipe( uglify({mangle: false}) )
    .pipe( concat('build.min.js') )
    .pipe( gulp.dest(FILES.js.dest) );

  let dependencies = gulp.src(FILES.js.dependencies, {base: "./"})
    .pipe( rename({suffix: '.min'}) )
    .pipe( uglify({mangle: false}) )
    .pipe( gulp.dest('.') );

  return merge(build, dependencies);
});

// watch css
// --------------------------------------------------------
gulp.task(TASKS.watch.css, function () {
  gulp.watch( FILES.css.all, [TASKS.dev.style]);
});

// watch all
// --------------------------------------------------------
gulp.task(TASKS.watch.all, function () {
  gulp.watch( FILES.css.all, [TASKS.dev.style]);
  gulp.watch( FILES.js.all, [TASKS.build.js]);
});

// default
// --------------------------------------------------------
gulp.task(TASKS.default, [TASKS.dev.style, TASKS.watch.css]);