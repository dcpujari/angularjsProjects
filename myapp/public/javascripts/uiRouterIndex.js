/**
*  Module
*
* Description
*/
var app = angular.module('myApp', ['ui.router']);

app.controller('myController', ['$scope', function($scope){
	
	$scope.textValue="Dnyaneshwar";

}]);

app.controller('myController1', ['$scope', function($scope){
	
	$scope.textValue="Pujari";

}])

app.config(['$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {

	$stateProvider.state('home', {
		url: '/home',
		//template: '<h1>The Home Page : {{textValue}} </h1>',
		templateUrl: '/templates/uiRouter/test.ejs',		
		controller: 'myController'
	})
	.state('myFirst', {
		url: '/myFirst',
		templateUrl: '/templates/uiRouter/test2.ejs',		
		controller: 'myController1'
	})
	.state('noRoute', {
		url: '*path',
		templateUrl: '/templates/uiRouter/test3.ejs'
	});
	
	//$urlRouterProvider.otherwise('/');

}]);