/* global io */
(function(){
'use strict';

  /**
   * Socket service
   */
  angular.module('votesApp.services')
    .factory('socket', socket);

    function socket(socketFactory) {
      var voterFrontSocker = io.connect('localhost:2768');
      return socketFactory({ioSocket: voterFrontSocker});
    }
})();
