angular.module('app.controllers', ['app.services'])
  
.controller('pageCtrl', ['$scope', '$stateParams', 'productService', //$ es cuando extiende Angular
	function ($scope, $stateParams, productService) {

		$scope.getProductList = function(){
			productService.item_list.query(function(data){
        		$scope.list = data;
        		console.log($scope.list);
    		});
		}
	}
])
 