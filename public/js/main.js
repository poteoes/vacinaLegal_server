angular.module('vacinalegal', ['ngRoute'])
.config(function($routeProvider, $httpProvider) {
	
	$httpProvider.interceptors.push('meuInterceptor');
	
	//HOME PRINCIPAL
	$routeProvider
	.when('/home',{
		controller:'homeCtrl',
		templateUrl:'view/home.html'
	});		
	$routeProvider
	.when('/login',{
		templateUrl:'view/login.html'
	});
	
	$routeProvider
	.when('/duvida',{
		controller: 'primeroAcesso.js',
		templateUrl:'view/duvida.html'
	});

	$routeProvider
	.when('/primeiro',{
		templateUrl: 'view/primeiroAcesso.html'
	})

	// Medico
	$routeProvider
	.when('/homeMedico',{
		templateUrl: 'view/profissional/homeMedico.html'
	})
	$routeProvider
	.when('/medico',{
		templateUrl: 'view/profissional/medico.html'
	});

	// HOME PROFISSIONAL
	$routeProvider
	.when('/homeProfissional',{
		controller:'homeProfissionalCtrl',
		templateUrl:'view/profissional/homeProfissional.html'
	});
	$routeProvider
	.when('/medico',{
		controller:'medicoCtrl',
		templateUrl:'view/profissional/medico.html'
	});
	$routeProvider
	.when('/homeMedico',{
		controller:'homeMedicoCtrl',
		templateUrl:'view/profissional/homeMedico.html'
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
	.when('/aplicar',{
		controller:'aplicarVacinaCtrl',
		templateUrl:'view/profissional/aplicarVacina.html'
	});
	$routeProvider
	.when('/atualizarCartao',{
		controller:'atualizarCartaoCtrl',
		templateUrl:'view/profissional/atualizarCartao.html'
	});

	// HOME CIDADÃO
	$routeProvider
	.when('/homeCidadao',{
		controller:'homeCidadaoCtrl',
		templateUrl:'view/cidadao/homeCidadao.html'
	});
	$routeProvider
	.when('/atualizarEndereco',{
		controller:'atualizarEnderecoCtrl',
		templateUrl:'view/cidadao/atualizarEndereco.html'
	});
	$routeProvider
	.when('/cartaoVacina',{
		controller:'cartaoVacinaCtrl',
		templateUrl:'view/cidadao/cartaoVacina.html'
	});
	$routeProvider
	.when('/imprimirCartao',{
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