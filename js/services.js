(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('hostService', hostService);

  hostService.$inject = ['$http'];

  function hostService($http) {
    /*jshint validthis: true */
    var baseUrl = 'http://galvanize-student-apis.herokuapp.com/gdating/';

    this.getAllHosts = function() {
      let getAllUrl = baseUrl + 'members';
      return $http.get(getAllUrl);
    };

    this.getOneHost = function(id) {
      let getThisUrl = baseUrl + 'members/' + id;
      return $http.get(getThisUrl);
    };

  }

})();
