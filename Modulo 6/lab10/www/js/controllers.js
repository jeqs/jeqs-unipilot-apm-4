angular.module('app.controllers', ['ngCordova'])
  
.controller('dialogCtrl', ['$scope', '$stateParams','$cordovaDialogs',
	function ($scope, $stateParams, $cordovaDialogs) {

		// Dialog Alert
		$scope.getDialogAlert = function(){
			$cordovaDialogs.alert('Mensaje de alerta', 'Alert', 'Ok').then(
				function() {
					localStorage.setItem('opcion', 'Dialog Alert');
		      		console.log('Dialog Alert');
		    	}
		    );
		};

		// Dialog Confirm
		$scope.getDialogConfirm = function(){
			$cordovaDialogs.confirm('Desea continuar: ', 'Continuar', ['Ok', 'Cancel'] ).then(
				function(buttonIndex) {
		      		var btnIndex = buttonIndex; // no button = 0, 'OK' = 1, 'Cancel' = 2
		      		localStorage.setItem('opcion', 'Dialog Confirm');
		      		console.log(btnIndex);
    			}				
		    );
		};

		// Dialog Promtp
		$scope.getDialogPromtp = function(){

			var msj = 'Usuario selecciono la opcion: ' + localStorage.getItem('opcion');

			$cordovaDialogs.prompt(msj, 'Prompt', ['Ok', 'Cancel'] ).then(
				function(result) {
		      		$scope.mensajeUsuario = result.input1; // no button = 0, 'OK' = 1, 'Cancel' = 2
		      		var btnIndex = result.buttonIndex;
		      		console.log(input, btnIndex);
    			}
		    );
		};

	}
])
 