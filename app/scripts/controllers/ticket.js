'use strict';

/**
 * @ngdoc function
 * @name busReservationApp.controller:TicketCtrl
 * @description
 * # AdminCtrl
 * Controller of the busReservationApp
 */
angular.module('busReservationApp')
  .controller('TicketCtrl', function ($http,$scope,$location,myService) {
    $scope.desiredLocation = myService.get();
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
