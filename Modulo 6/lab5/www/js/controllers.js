angular.module('app.controllers', ['ngCordova'])
  
.controller('pageCtrl', ['$scope', '$stateParams', '$cordovaDeviceMotion', 
	function ($scope, $stateParams, $cordovaDeviceMotion) {

	document.addEventListener("deviceready", function () {

	    $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
	      $scope.x = result.x;
	      $scope.y = result.y;
	      $scope.z = result.z;
	      $scope.timeStamp = result.timestamp;
	    }, function(err) {
	      $scope.timeStamp ="Sucedio un error";
	    });

	}, false); // fin deviceready


    $scope.watchAcceleration = function () {
   	var options = { frequency: 1000 };  
   	
  	$cordovaDeviceMotion.watchAcceleration(options).then(
    	function() { },  
    	function(err) {
    		 $scope.timeStamp ="Sucedio un error";
    	},
		function(result) {
	      	$scope.x = result.x;
	      	$scope.y = result.y;
	      	$scope.z = result.z;
	      	$scope.timeStamp = result.timestamp;
	     }
     );
   };

	} // fin function function ($scope, $stateParams, $cordovaDeviceMotion) {

])
