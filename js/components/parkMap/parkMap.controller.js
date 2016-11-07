(function() {
  'use strict';

  angular
    .module('myApp.components.parkMap', [])
    .controller('parkMapController', parkMapController);

  parkMapController.$inject = [];

  function parkMapController() {
    /*jshint validthis: true */
    const vm = this;
    vm.test = 'hello world!';
  }

})();
