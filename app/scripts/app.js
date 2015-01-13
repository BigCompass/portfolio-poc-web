/* global app:true */
/* exported app */

'use strict';

/**
 * @ngdoc overview
 * @name portfolioPocWebApp
 * @description
 * # portfolioPocWebApp
 *
 * Main module of the application.
 */
var app = angular
  .module('portfolioPocWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://bc-portfolio.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
