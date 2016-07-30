angular.module('initial_spi.controllers', [])
	.controller('mobileController', function($scope, $http){
		var url = "js/data-mobile.json";
  		$http.get(url).success(function(response){
      		console.log(response);
      		$scope.mobiles = response;
  		});
	})
	.controller('smartphoneController', function($scope, $http){
		var url = "js/data-smartphone.json";
  		$http.get(url).success(function(response){
      		console.log(response);
      		$scope.smartphones = response;
  		});
	})
  .controller('formController', function($scope){
    $scope.form_message = 'Datos personales';

    $scope.reset = function(){
        $scope.firstName = '';
        $scope.email = "";
        $scope.age = "";
    }

    $scope.reset();
  });