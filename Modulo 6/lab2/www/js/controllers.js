angular.module('app.controllers', ['ngCordova'])
  
.controller('pageCtrl', ['$scope', '$stateParams', '$cordovaDevice',

function ($scope, $stateParams, $cordovaDevice) {
	$scope.getDeviceInformation = function(){
		var device = $cordovaDevice.getDevice();

    	var cordova = $cordovaDevice.getCordova();

    	var model = $cordovaDevice.getModel();

    	var platform = $cordovaDevice.getPlatform();

    	var uuid = $cordovaDevice.getUUID();

    	var version = $cordovaDevice.getVersion();

    	console.log(device, cordova, model, platform, uuid, version);
	}

}])
 