angular.module('app.controllers', ['app.services'])
  
.controller('restCtrl', ['$scope', '$stateParams', 'productService', 
	function ($scope, $stateParams, productService) {

		$scope.getProductList = function(){
			productService.item_list.query(function(data){
				$scope.list = data;
				$scope.revelDiv = false;
				console.log($scope.list);
		    });
		}
	
		$scope.getProductDetail = function(_id){
			productService.item_detail.get({id: _id}, function(data){
	        	$scope.detail = data;
	        	$scope.revelDiv = true;
	        	console.log($scope.detail);
			});
		}

	}
]) 