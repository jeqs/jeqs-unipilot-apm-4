angular.module('app.controllers', ['ngCordova'])
  
.controller('pageCtrl', ['$scope', '$stateParams', '$cordovaNetwork', 
	function ($scope, $stateParams, $cordovaNetwork) {

		document.addEventListener("deviceready", function () {
			$scope.type = $cordovaNetwork.getNetwork();
			$scope.isOnline = $cordovaNetwork.isOnline();
			$scope.isOffline = $cordovaNetwork.isOffline();

			// listen for Online event
			$rootScope.$on('$cordovaNetwork:online', function(event, networkState){
		      $scope.netState = networkState;
		    })

		    // listen for Offline event
		    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
		      $scope.netState = networkState;
		    })
  		}, false);

}])