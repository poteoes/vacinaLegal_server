angular.module('vacinalegal').controller("loginCidadaoCtrl", function($scope){
$scope.name = '';
	$scope.FBlogin = function(){
		FB.login(function(response){
			if (response.authResponse) {
				console.log('Welcome Fetching your informaton...');
				FB.api('/me', function(response){
					console.log('Good to see you, ' + response.name + '.');
					console.log(response);
				});
			}else {
				console.log('User cancelled login or did not fully authorize.')
			}
		});
	};

});