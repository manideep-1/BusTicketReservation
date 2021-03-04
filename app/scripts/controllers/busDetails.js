'use strict';

/**
 * @ngdoc function
 * @name busReservationApp.controller:BusDetailsCtrl
 * @description
 * # UserPageCtrl
 * Controller of the busReservationApp
 */
angular.module('busReservationApp')

  .controller('BusDetailsCtrl', function ($scope,$location,$http,myService) {
    $scope.busdetails1=[]
    $http.get("https://3ca4d5f2-9a4c-464a-aed3-d9727e59936e.mock.pstmn.io/busdetails/get")
    .then(function(response) {
        $scope.busdetails1 = response.data;
        console.log($scope.busdetails1)
    });
    $scope.busdetails1=[
      {
          "busname": "Red Line",
          "depttime": "10:00pm",
          "coachtype": "Non AC",
          "noofseats": "20",
          "fare": "1000"
      },
      {
          "busname": "Green Line",
          "depttime": "11:00pm",
          "coachtype": "Non AC",
          "noofseats": "20",
          "fare": "1000"
      },
      {
          "busname": "Green Line",
          "depttime": "12:00pm",
          "coachtype": "AC",
          "noofseats": "20",
          "fare": "1000"
      },
      {
          "busname": "Venkatadri Express",
          "depttime": "12:00pm",
          "coachtype": "Non AC",
          "noofseats": "20",
          "fare": "1000"
      }
  ]
    $scope.desiredLocation = myService.get();
    
    $scope.select={
      "a1":0,"a2":0,"a3":0,"a4":0,
      "b1":0,"b2":0,"b3":0,"b4":0,
      "c1":0,"c2":0,"c3":0,"c4":0,
      "d1":0,"d2":0,"d3":0,"d4":0,
      "e1":0,"e2":0,"e3":0,"e4":0,
  }
  $scope.fare=0
    $scope.details=function(event){
      var k=event.target.id
      if($scope.select[k]==0){
        $scope.select[k]=1;
        $scope.fare+=(1000)
      }
      else{
        $scope.select[k]=0;
        $scope.fare-=(1000)
      }
      console.log($scope.select)
    } 
    myService.set({"select":$scope.select,"fare":$scope.fare,"fromto":$scope.desiredLocation});
    console.log({"select":$scope.select,"fare":$scope.fare,"fromto":$scope.desiredLocation})
    $scope.confirm=function(){
      myService.set({"select":$scope.select,"fare":$scope.fare,"fromto":$scope.desiredLocation});
      $location.path('/ticket')
    }
    
    // for (let [key, value] of Object.entries(select)) {
    //   console.log(`${key}: ${value}`);
    // }
    
    // var obj={
        
    // }
    // $scope.removeByAttr = function(arr, attr, value){
    //     var i = arr.length;
    //     while(i--){
    //        if( arr[i] 
    //            && arr[i].hasOwnProperty(attr) 
    //            && (arguments.length > 2 && arr[i][attr] === value ) ){ 
    
    //            arr.splice(i,1);
    
    //        }
    //     }
    //     return arr;
    // }
    // $scope.selectedmap={}
    // const countOccurrences = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
    // $scope.details=function(event){
    //     console.log(event.target.id);
    //     $scope.selected.push(event.target.id);
    //     console.log($scope.selected);
    //     obj.color= event.target.style.color;
    //     obj.fare=1000;
    //     obj.id=event.target.id;
    //     console.log(obj.color)
    //     if(obj.color!='#0275d8'){
    //       console.log($scope.seats);
    //         $scope.seats.push(obj);
    //         console.log("kaeth"+countOccurrences(selected))
    //     }
    //     else{
    //       console.log($scope.seats);
    //         $scope.removeByAttr(seats,'id',event.target.id);
    //     }
        
    //     // console.log($scope.seats);
    // }

    

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
