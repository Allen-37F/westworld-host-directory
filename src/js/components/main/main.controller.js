(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'hostService'];

  function mainController($scope, hostService) {
    /*jshint validthis: true */
    this.greeting = 'Delos Administrative Server';

  }

})();
