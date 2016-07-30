angular.module('app.controllers', [])
  
.controller('mainCtrl', function($scope) {

})
   
.controller('page1Ctrl', function($scope) {

})
   
.controller('page2Ctrl', function($scope) {

})
   
.controller('page3Ctrl', function($scope) {

})
 
.controller('page4Ctrl', function($scope) {
	$scope.list = ["1", "3", "5", "7", "9"];
})

.controller('page5Ctrl', function($scope) {
	$scope.clickFunction = function(_email, _password) {
        localStorage.setItem('email', _email);
        localStorage.setItem('password', _password);
    }
})

.controller('page6Ctrl', function($scope) {
	$scope.email = localStorage.getItem('email');
	$scope.password = localStorage.getItem('password');	
})