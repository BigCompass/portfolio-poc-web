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
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        resolve: {
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        resolve: {
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        resolve: {
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
      })
      .when('/portfolios/:portfolioId', {
        templateUrl: 'views/portfolioView.html',
        controller: 'PortfolioViewCtrl',
        resolve: {
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
      })
      .when('/portfolios/:portfolioId/investments/:investmentId', {
        templateUrl: 'views/investment.html',
        controller: 'investmentCtrl'
      })
      .when('#/', {
        redirectTo: '/'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
