'use strict';

/**
 * @ngdoc function
 * @name busReservationApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the busReservationApp
 */
angular.module('busReservationApp')
  .controller('AdminCtrl', function ($http,$scope,$location) {
    $scope.check=true;
    $http.get("https://3ca4d5f2-9a4c-464a-aed3-d9727e59936e.mock.pstmn.io/admin/get")
  .then(function(response) {
    $scope.fromget = response.data;
  });
  $scope.fromget ={
    "username":"prabhas",
    "password":"1234"
}
  $scope.login=function(){
    if($scope.fromget.username==$scope.username && $scope.fromget.password==$scope.password)
    {
      $scope.check=true;
      alert("welcome "+$scope.fromget.username);
      $location.path('/adminPage')
    }
    else
    {
      $scope.check=false;
      alert("Wrong credentials")
    }
  }
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
