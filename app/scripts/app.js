'use strict';

/**
 * @ngdoc overview
 * @name busReservationApp
 * @description
 * # busReservationApp
 *
 * Main module of the application.
 */
angular
  .module('busReservationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .when('/userPage', {
        templateUrl: 'views/userPage.html',
        controller: 'UserPageCtrl',
        controllerAs: 'userpage'
      })
      .when('/adminPage', {
        templateUrl: 'views/adminPage.html',
        controller: 'AdminPageCtrl',
        controllerAs: 'adminpage'
      })
      .when('/busDetails', {
        templateUrl: 'views/busDetails.html',
        controller: 'BusDetailsCtrl',
        controllerAs: 'busdetails'
      })
      .when('/payment', {
        templateUrl: 'views/payment.html',
        controller: 'PaymentCtrl',
        controllerAs: 'payment'
      })
      .when('/ticket', {
        templateUrl: 'views/ticket.html',
        controller: 'TicketCtrl',
        controllerAs: 'ticket'
      })
      .when('/input', {
        templateUrl: 'views/input.html',
        controller: 'InputCtrl',
        controllerAs: 'input'
      })
      .otherwise({
        redirectTo: '/user'
      });
  });
