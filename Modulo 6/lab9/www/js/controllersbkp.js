angular.module('app.controllers', ['ngCordova'])
  
.controller('pageCtrl', ['$scope', '$stateParams', '$cordovaDevice', '$cordovaNetwork', '$cordovaDeviceMotion',
	function ($scope, $stateParams, $cordovaDevice, $cordovaNetwork, $cordovaDeviceMotion) {

		// Device plugin
		$scope.infoDevice = function(){

			//$scope.item1 = $cordovaDevice.getDevice();
	    	$scope.item1 = $cordovaDevice.getCordova();

	    	$scope.item2 = $cordovaDevice.getModel();

	    	$scope.item3 = $cordovaDevice.getPlatform();

	    	$scope.item4 = $cordovaDevice.getUUID();

	    	$scope.item5 = $cordovaDevice.getVersion();

	    	$scope.item5 = "Device plugin";

		};

		// Network plugin
		$scope.infoNetwork = function(){

			document.addEventListener("deviceready", function () {
				$scope.item1 = $cordovaNetwork.getNetwork();
				$scope.item2 = $cordovaNetwork.isOnline();
				$scope.item3 = $cordovaNetwork.isOffline();

				// listen for Online event
				$rootScope.$on('$cordovaNetwork:online', function(event, networkState){
			      $scope.item4 = networkState;
			    })

			    // listen for Offline event
			    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
			      $scope.item4 = networkState;
			    })

			   $scope.item5 = "Network plugin";

	  		}, false);
  		};

  		// Device Motion plugin
	    $scope.infoMotion = function () {
	    	
	    	$scope.item5 = "Device Motion plugin";

		   	var options = { frequency: 1000 };  
		   	
		  	$cordovaDeviceMotion.watchAcceleration(options).then(
		    	function() { },  
		    	function(err) {
		    		 $scope.item4 ="Sucedio un error";
		    	},
				function(result) {
			      	$scope.item1 = result.x;
			      	$scope.item2 = result.y;
			      	$scope.item3 = result.z;
			      	$scope.item4 = result.timestamp;
			    }
		    );
	   };


	   // Device orientation plugin
		$scope.infoOrientation = function(){

			//$scope.item1 = $cordovaDevice.getDevice();
	    	$scope.item1 = $cordovaDevice.getCordova();

	    	$scope.item2 = $cordovaDevice.getModel();

	    	$scope.item3 = $cordovaDevice.getPlatform();

	    	$scope.item4 = $cordovaDevice.getUUID();

	    	$scope.item5 = $cordovaDevice.getVersion();

	    	$scope.item5 = "Device plugin";

		};
		
}])