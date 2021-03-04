'use strict';

/**
 * @ngdoc function
 * @name busReservationApp.controller:InputCtrl
 * @description
 * # AdminCtrl
 * Controller of the busReservationApp
 */
angular.module('busReservationApp')
  .controller('InputCtrl', function ($http,$scope,$location,myService) {
      $scope.ticket=function(){
          alert ("hi")
          $location.path('/ticket')
      }
    // $scope.desiredLocation = myService.get();
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });