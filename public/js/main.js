angular.module('vacinalegal', ['ngRoute'])
.config(function($routeProvider) {
	
	//HOME PRINCIPAL
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
	.when('/duvida',{
		controller:'duvidaCtrl',
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
		redirectTo:'/home'
	});
});
window.fbAsyncInit = function() {
    FB.init({
      appId      : '128217050926502',
      xfbml      : true,
      version    : 'v2.6'
    });
 };
(function(d, s, id){
	 var js, fjs = d.getElementsByTagName(s)[0];
	 if (d.getElementById(id)) {return;}
	 js = d.createElement(s); js.id = id;
	 js.src = "//connect.facebook.net/en_US/sdk.js";
	 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
	
