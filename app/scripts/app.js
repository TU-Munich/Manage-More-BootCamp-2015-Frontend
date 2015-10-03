'use strict';

/**
 * @ngdoc overview
 * @name mmDtFrontendApp
 * @description
 * # mmDtFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('mmDtFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'btford.socket-io'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/control', {
        templateUrl: 'views/testControl.html',
        controller: 'testControlCtrl',
        controllerAs: 'testCtrl'
      })
      .when('/display/:displayName', {
        templateUrl: 'views/testDisplay.html',
        controller: 'testDisplayCtrl',
        controllerAs: 'display'
      })
      .when('/tester', {
        templateUrl: 'views/test.html',
        controller: 'testFrontCtrl',
        controllerAs: 'test'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
