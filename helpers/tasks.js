// tasks names
'use strict';

let TASKS = {
    dev: {
      style: 'css',
      styleDeps: 'css:dependencies'
    },
    build: {
      js: 'js'
    },
    watch: {
      all: 'watch:all',
      css: 'watch:css'
    },
    default: 'default'
};

module.exports = TASKS;
