(function() {
  'use strict';

  angular
    .module('myApp.components.map', [])
    .controller('mapController', mapController);

  mapController.$inject = [];

  function mapController() {
    /*jshint validthis: true */
    const vm = this;
    vm.test = 'hello world!';
  }

})();
