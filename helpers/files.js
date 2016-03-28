'use strict';
let FILES = {
    css: {
      main: 'sass/index.scss',
      dependencies: [ ],
      all: 'sass/**/*.scss',
      dest: 'public/styles'
    },
    js: {
      all: [
        'public/app/**/*.js',
        '!public/app/**/*.min.js',
      ],
      dependencies: [],
      dest: 'public/app'
    }
};

module.exports = FILES;
