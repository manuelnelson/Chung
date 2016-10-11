// angular app reference must be a tier 1 name, non namespaced, for `ngmin` to work correctly
var app = angular.module('mama-chung', ['ngTouch','ngAnimate','ngRoute','ngSanitize','akoenig.deckgrid']).run(function ($rootScope) {
	$rootScope.currentLanguage = "english";

	$rootScope.goToUrl = function(url){
		window.location = url;
	}
});
app.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider.when('/',{
		controller:'HomeController',
		templateUrl: '/templates/work.html'
	}).
	when('/about',{
		controller:'AboutController',
		templateUrl: '/templates/about.html'
	}).
	when('/contact',{
		controller:'ContactController',
		templateUrl: '/templates/contact.html'
	});

})
