angular.module('lab1b', [])
	.controller('lab1bController', function($scope){
	$scope.angular_filters = ["filter", "currency", "number", "date"];

	$scope.angular_inputs = [ 
		{
			name: "text",
			lastname: "lastname"
		},
		{
			name: "date",
			lastname: "lastname"
		},
		{
			name: "datetime",
			lastname: "lastname"
		},
		{
			name: "time",
			lastname: "lastname"
		}
	];

	});