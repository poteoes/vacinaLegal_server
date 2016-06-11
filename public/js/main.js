angular.module('vacinalegal', ['ngRoute', 'ngResource'])
.config(function($routeProvider) {
	
	//HOME PRINCIPAL
	$routeProvider
	.when('/home',{
		templateUrl:'view/home.html'
	});		
	$routeProvider
	.when('/login',{
		templateUrl:'view/login.html'
	});
	$routeProvider
	.when('/duvida',{
		templateUrl:'view/duvida.html'
	});

	// HOME PROFISSIONAL
	$routeProvider
	.when('/homeProfissional',{
		controller:'homeProfissionalCtrl',
		templateUrl:'view/profissional/homeProfissional.html'
	});
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

	// HOME CIDADÃO
	$routeProvider
	.when('/cidadao/homeCidadao',{
		controller:'homeCidadaoCtrl',
		templateUrl:'view/cidadao/homeCidadao.html'
	});
	$routeProvider
	.when('/cidadao/atualizarEndereco',{
		controller:'atualizarEnderecoCtrl',
		templateUrl:'view/cidadao/atualizarEndereco.html'
	});
	$routeProvider
	.when('/cidadao/cartaoVacina',{
		controller:'cartaoVacinaCtrl',
		templateUrl:'view/cidadao/cartaoVacina.html'
	});
	$routeProvider
	.when('/cidadao/imprimirCartao',{
		controller:'imprimirCartaoCtrl',
		templateUrl:'view/cidadao/imprimirCartao.html'
	});

	// HOME UNIDADE
	$routeProvider
	.when('/homeUnidade',{
		controller:'homeUnidadeCtrl',
		templateUrl:'view/unidade/homeUnidade.html'
	});
	$routeProvider
	.when('/cadastrarLote',{
		controller:'cadastrarLoteCtrl',
		templateUrl:'view/unidade/cadastrarLote.html'
	});
	$routeProvider
	.when('/cadastrarProf',{
		controller:'cadastrarProfCtrl',
		templateUrl:'view/unidade/cadastrarProf.html'
	});
	$routeProvider
	.when('/relatorio',{
		controller:'relatorioCtrl',
		templateUrl:'view/unidade/relatorio.html'
	});
	$routeProvider
	.when('/enviarAviso',{
		controller:'enviarAvisoCtrl',
		templateUrl:'view/unidade/enviarAviso.html'
	});
	$routeProvider
	.otherwise({
		redirectTo:'/login'
	});
});