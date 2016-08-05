angular.module('lab1c', [])
	.controller('lab1cController', function($scope){
	$scope.link_image = "http://dummyimage.com/200x200/000/34ffddaa";

	$scope.clickFunction = function() {
        $scope.link_image = "http://dummyimage.com/400x400/000/34ffddaa";
    }

	});