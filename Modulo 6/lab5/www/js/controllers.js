angular.module('app.controllers', ['ngCordova'])
  
.controller('pageCtrl', ['$scope', '$stateParams', '$cordovaDeviceMotion', 
	function ($scope, $stateParams, $cordovaDeviceMotion) {
		$scope.getCurrentDeviceMotion = function(){ 
			$cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
				$scope.x = result.x;
				$scope.y = result.y;
				$scope.z = result.z;
				$scope.timeStamp = result.timestamp;
	    }, function(err) {
	       $scope.timeStamp ="Sucedio un error";
	    });
	}

}])
