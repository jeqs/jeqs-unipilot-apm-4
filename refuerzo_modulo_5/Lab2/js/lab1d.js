// Route
angular.module('lab1d', ['ngRoute', 'lab1a', 'lab1b', 'lab1c'])

.config(['$routeProvider', function($routeProvider){
	
	$routeProvider

	.when('/lab1a', {
	    templateUrl : "views/lab1a.html",
	    controller: 'lab1acontroller'
	})

	.when('/lab1b', {
		templateUrl: "views/lab1b.html",
		controller: 'lab1bController'
	})
	
	.when('/lab1c', {
		templateUrl: "views/lab1c.html",
		controller: 'lab1cController'
	});

 }]);