'use strict';

angular.module('uiApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tpl', {
        templateUrl: 'views/tpl.html',
        controller: 'TplCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
