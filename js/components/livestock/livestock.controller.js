(function() {
  'use strict';

  angular
    .module('myApp.components.livestock', [])
    .controller('livestockController', livestockController);

  livestockController.$inject = ['hostService'];

  function livestockController(hostService) {
    /*jshint validthis: true */
    const vm = this;
    vm.test = 'hello world!';
    vm.showHosts = true;
    // vm.singleHost = {};

    vm.testFn = function() {
      console.log('test function on livestock controller successful');
    };

    vm.locateHost = function(xLoc, yLoc) {
      console.log(xLoc, yLoc);
    };

    vm.getOneHost = function(id) {
      return hostService.getOneHost(id)
      .then((data) => {
        vm.singleHost = data.data.data;
        console.log(vm.singleHost._id);
        vm.showHosts = !vm.showHosts;
        return vm.singleHost;
      })
      .catch((err) => {console.log(err);});
    };

    hostService.getAllHosts()
    .then((data) => {
      vm.host = data.data.data;
    })
    .catch((err) => {console.log(err);});

  }

})();
