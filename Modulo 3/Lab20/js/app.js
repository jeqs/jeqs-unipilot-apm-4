angular.module('initial_spi', ['ngRoute', 'initial_spi.controllers'])
.config(['$routeProvider', function($routeProvider){
	
	$routeProvider

	.when('/mobile', {
	    templateUrl : "views/mobile.html",
	    controller: 'mobileController'
	})

	.when('/smartphone', {
		templateUrl: "views/smartphone.html",
		controller: 'smartphoneController'
	})

	.when('/form', {
		templateUrl: "views/form.html",
		controller: 'formController'
	})
	
	.otherwise({
	    redirectTo: '/',
	    templateUrl: 'views/otherwise.html'
	});
	
 }]);