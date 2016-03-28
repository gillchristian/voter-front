(function(){
'use strict';

  /**
   * Main Angular app module
   */
  angular.module('votesApp', [
    'ui.router',
    'btford.socket-io',
    'ngCookies',
    'votesApp.services',
    'votesApp.votes',
  ]);
  //'ui.bootstrap'
})();
