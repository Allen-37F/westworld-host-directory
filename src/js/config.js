(function() {

  'use strict';

  angular
    .module('myApp.config', ['ui.router'])
    .config(appConfig);
  // .run(routeStart);

  // appConfig.$inject['$routeProvider'];

  function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('#');
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'livestockController',
        controllerAs: 'hostCtrl',
        access: true
      })
      .state('livestock', {
        url: '/livestock',
        templateUrl: 'js/components/livestock/livestock.view.html',
        controller: 'livestockController',
        controllerAs: 'hostCtrl',
        access: true
      })
      .state('livestock.all', {
        templateUrl: 'js/components/livestock/livestock.all.view.html',
        access: true
      })
      .state('livestock.single', {
        templateUrl: 'js/components/livestock/livestock.single.view.html',
        access: true
      })
      .state('livestock.inactive', {
        templateUrl: 'js/components/livestock/livestock.inactive.view.html',
        access: true
      })
      .state('livestock.new', {
        templateUrl: 'js/components/livestock/livestock.new.view.html',
        access: true
      })
      .state('livestock.intakeProtocol', {
        templateUrl: 'js/components/livestock/livestock.intakeProtocol.view.html',
        access: true
      })
      .state('corpMap', {
        url: '/corpMap',
        templateUrl: 'js/components/map/map.view.html',
        controller: 'mapController',
        controllerAs: 'mapCtrl',
        access: true
      })
      .state('parkMap', {
        url: '/parkMap',
        templateUrl: 'js/components/parkMap/parkMap.view.html',
        controller: 'parkMapController',
        controllerAs: 'parkMapCtrl',
        access: true
      })
      .state('maintenance', {
        url: '/maintenance',
        templateUrl: 'js/components/maintenance/maintenance.view.html',
        controller: 'maintenanceController',
        controllerAs: 'maintCtrl',
        access: true
      });
  }

})();
