'use strict';

/**
 * @ngdoc function
 * @name busReservationApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the busReservationApp
 */
angular.module('busReservationApp')
  .controller('UserCtrl', function ($http,$scope,$location) {
    $scope.check=true;
    $http.get("https://3ca4d5f2-9a4c-464a-aed3-d9727e59936e.mock.pstmn.io/user/get")
  .then(function(response) {
    $scope.fromget = response.data;
  });
  $scope.fromget ={
    "username": "manideep",
    "password":"1234"
}
  $scope.login=function(){
    if($scope.fromget.username==$scope.username && $scope.fromget.password==$scope.password)
    {
      $scope.check=true;
      alert("welcome "+$scope.fromget.username);
      // $location.url("views/userPage");
      $location.path("/userPage");
    }
    else
    {
      $scope.check=false;
      alert("Wrong credentials")
      // $window.location.href = '../views/userPage.html';
      // $location.path("/userPage");
    }
  }
  
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
