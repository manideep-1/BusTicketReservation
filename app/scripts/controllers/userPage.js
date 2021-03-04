'use strict';

/**
 * @ngdoc function
 * @name busReservationApp.controller:UserPageCtrl
 * @description
 * # UserPageCtrl
 * Controller of the busReservationApp
 */
angular.module('busReservationApp')

  .controller('UserPageCtrl', function ($scope, $location,myService) {
    // console.log($scope.date);
    $scope.searchBuses=function(){
      // console.log($scope.date,$scope.from,$scope.to);
      var d={};
      d.date=$scope.date;
      d.to=$scope.to;
      d.from=$scope.from;
      myService.set(d);
      $location.path("/busDetails");
    }
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
