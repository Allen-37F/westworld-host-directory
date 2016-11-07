(function() {
  'use strict';

  angular
    .module('myApp.components.maintenance', [])
    .controller('maintenanceController', maintenanceController);

  maintenanceController.$inject = [];

  function maintenanceController() {
    /*jshint validthis: true */
    const vm = this;
    vm.test = 'Maintenance controller is wired up';
    console.log(vm.test);
  }

})();
