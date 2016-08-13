angular.module('app.services', ['ngResource'])

	.factory('BlankFactory', [function(){

	}])

	.service('BlankService', [function(){

	}])

	.service('productService', ['$resource', function($resource){
	 	this.item_list = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/list');
	}]);