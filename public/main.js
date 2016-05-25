	angular.module('vacinalegal', ['ngRoute'])
	.config(function($routeProvider) {

		
		$routeProvider
		.when('/home',{
			controller:'homeCtrl',
			templateUrl:'view/home.html'
			
		});		
		$routeProvider
		.when('/unidade',{
			controller:'unidadeCtrl',
			templateUrl:'view/unidade.html'
			
		});
		$routeProvider
		.when('/cidadao',{
			controller:'loginCidadaoCtrl',
			templateUrl:'view/loginCidadao.html'
			
		});
		$routeProvider
		.when('/profissional',{
			controller:'loginProfisCtrl',
			templateUrl:'view/loginProfis.html'
			
		});
		$routeProvider
		.when('/primeiroAcesso',{
			controller:'primeiroAcessoCtrl',
			templateUrl:'view/primeiroAcesso.html'
			
		});
		$routeProvider
		.when('/duvida',{
			controller:'duvidaCtrl',
			templateUrl:'view/duvida.html'
			
		});
		$routeProvider
		.when('/calendario',{
			controller:'calendarioCtrl',
			templateUrl:'view/calendario.html'
			
		});
		$routeProvider
		.when('/reset',{
			controller:'resetSenhaCtrl',
			templateUrl:'view/resetSenha.html'
			
		});
		$routeProvider
		.otherwise({
			redirectTo:'view/home'
		});
	});


	angular.module('menuProfi', ['ngRoute'])
	.config(function($routeProvider) {

		$routeProvider
		.when('/cadastrar',{
			controller:'cadastrarCidadaoCtrl',
			templateUrl:'view/profissional/cadastrarCidadao.html'
			
		});
		$routeProvider
		.when('/atualizar',{
			controller:'atualizarCadastroCtrl',
			templateUrl:'view/profissional/atualizarCadastro.html'
			
		});
		$routeProvider
		.when('/visualizar',{
			controller:'visualizarCartaoCtrl',
			templateUrl:'view/profissional/visualizarCartao.html'
			
		});
		$routeProvider
		.when('/aplicar',{
			controller:'aplicarVacinaCtrl',
			templateUrl:'view/profissional/aplicarVacina.html'
			
		});
		$routeProvider
		.otherwise({
			redirectTo:'view/home'
		});
	});
	
