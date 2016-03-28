/* global io */
(function(){
'use strict';

  /**
   * Counter controller
   */
  angular.module('votesApp.votes')
    .controller('VotesController', CounterController);

    function CounterController(socket){
      // --- view model ---
      var vm = this;

      // --- exposed properties ---
      vm.contenders = [];
      vm.selected   = {};

      // --- exposed methods ---
      vm.select = select;

      activate();
      /////////////////////////
      /**
       * Initializes the controller state
       */
      function activate(){
        socketEventHandlers();
      }

      /**
       * Set socket.io events handlers
       */
      function socketEventHandlers(){
        socket.on('current contenders', newContenders);
      }
      /**
       * Update count on socket count event
       */
      function newContenders(contenders){
        vm.contenders = JSON.parse(contenders);
        vm.selected   = {};
      }

      /**
       * Sets and item as selected
       *
       * @param {object}  item
       */
      function select(clicked){
        vm.selected = clicked;
        vote();
      }
      /**
       * Emits a vote
       */
      function vote(){
        socket.emit('vote', vm.selected.id);
      }
    }

})();
