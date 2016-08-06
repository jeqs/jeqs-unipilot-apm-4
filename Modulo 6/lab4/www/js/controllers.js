angular.module('app.controllers', ['ngCordova'])
  
.controller('homeCtrl', ['$scope', '$stateParams', '$cordovaDevice',

	function ($scope, $stateParams, $cordovaDevice) {
		$scope.setDeviceInformation = function(){

			var device = $cordovaDevice.getDevice();
			localStorage.setItem('device', device);

	    	var cordova = $cordovaDevice.getCordova();
	    	localStorage.setItem('cordova', cordova);

	    	var model = $cordovaDevice.getModel();
	    	localStorage.setItem('model', model);

	    	var platform = $cordovaDevice.getPlatform();
	    	localStorage.setItem('platform', platform);

	    	var uuid = $cordovaDevice.getUUID();
	    	localStorage.setItem('uuid', uuid);

	    	var version = $cordovaDevice.getVersion();
	    	localStorage.setItem('version', version);

	    	console.log(device, cordova, model, platform, uuid, version);
		}

}])
   
.controller('deviceCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

	//$scope.device = localStorage.getItem('device');
	$scope.device = JSON.stringify(localStorage.getItem('device'));
	$scope.cordova = localStorage.getItem('cordova');
	$scope.model = localStorage.getItem('model');
	$scope.platform = localStorage.getItem('platform');
	$scope.uuid = localStorage.getItem('uuid');
	$scope.version = localStorage.getItem('version');

}])
    