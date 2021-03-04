angular.module('busReservationApp')
.factory('myService', function() {
    var savedData = {}
    function set(data) {
      savedData = data;
    }
    function get() {
     return savedData;
    }
   
    return {
     set: set,
     get: get
    }
   
   });
//    angular.module('busReservationApp')
// .factory('myService1', function() {
//     var savedData = {}
//     function set(data) {
//       savedData = data;
//     }
//     function get() {
//      return savedData;
//     }
   
//     return {
//      set: set,
//      get: get
//     }
   
//    });