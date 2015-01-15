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
  .constant('LOOKUP_URL', 'http://dev.markitondemand.com/Api/v2/Lookup/jsonp')
  .constant('QUOTE_URL', 'http://dev.markitondemand.com/Api/v2/Quote/jsonp')
  .constant('CHART_URL', 'http://dev.markitondemand.com/Api/v2/InteractiveChart/jsonp')
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
        templateUrl: 'views/investmentView.html',
        controller: 'InvestmentViewCtrl'
      })
      .when('#/', {
        redirectTo: '/'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
