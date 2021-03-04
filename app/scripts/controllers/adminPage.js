'use strict';

/**
 * @ngdoc function
 * @name busReservationApp.controller:AdminPageCtrl
 * @description
 * # adminPageCtrl
 * Controller of the busReservationApp
 */
angular.module('busReservationApp')

  .controller('AdminPageCtrl', function ($scope,$window) {
    
    $scope.registrations=[
          {
            "name":"manideep",
              "busname":"Green Line",
              "depttime":"10:00pm",
              "coachtype":"Non AC",
              "noofseats":"6",
              "fare":"1000"
          },
          {
            "name":"manideep",
              "busname":"Green Line",
              "depttime":"11:00pm",
              "coachtype":"Non AC",
              "noofseats":"8",
              "fare":"1000"
          },
          {
            "name":"manideep",
              "busname":"Green Line",
              "depttime":"12:00pm",
              "coachtype":"AC",
              "noofseats":"10",
              "fare":"1300"
          },
          {
            "name":"manideep",
              "busname":"Venkatadri Express",
              "depttime":"12:00pm",
              "coachtype":"Non AC",
              "noofseats":"9",
              "fare":"600"
          }
  
      ]
      
      
      $scope.save1=function(){
        
        var reg={};
        reg.name=$scope.name;
        reg.busname=$scope.busname;
        reg.depttime=$scope.depttime;
        reg.coachtype=$scope.coachtype;
        reg.noofseats=$scope.noofseats;
        reg.fare=$scope.fare;

        
        console.log(reg)
        $scope.registrations.push(reg)
        console.log($scope.registrations)
      }
      $scope.Remove = function (index) {
        //Find the record using Index from Array.
        var name = $scope.registrations[index].name;
        if ($window.confirm("Do you want to delete: " + name)) {
            //Remove the item from Array using Index.
            $scope.registrations.splice(index, 1);
        }
    }
      
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
