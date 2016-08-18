angular.module('app.controllers', ['app.services'])
  
.controller('restCtrl', ['$scope', '$stateParams', 'productService', 
	function ($scope, $stateParams, productService) {

		$scope.getProductList = function(){
				productService.item_list.query(function(data){
				$scope.list = data;
				console.log($scope.list);
		    });
		}
	}])
 