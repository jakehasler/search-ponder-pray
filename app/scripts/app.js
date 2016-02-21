'use strict';

/**
 * @ngdoc overview
 * @name sppApp
 * @description
 * # sppApp
 *
 * Main module of the application.
 */
angular
  .module('sppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngMdIcons'
  ])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/select.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/compare/:v1/:v2/:book/:chapter/:verse', {
        templateUrl: 'views/cards.html',
        controller: 'CompareCtrl',
        conrollerAs: 'compare'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

      $httpProvider.defaults.useXDomain = true;
      $httpProvider.defaults.withCredentials = false;
      delete $httpProvider.defaults.headers.common["X-Requested-With"];
      $httpProvider.defaults.headers.common["Accept"] = "application/json";
      $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
  });
