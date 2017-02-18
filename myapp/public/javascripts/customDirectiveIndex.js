/**
*  Module
*
* Description
*/
var myApp = angular.module('customDirectiveModule', []);

myApp.controller('myController', ['$scope', function($scope){
	$scope.message="This is Directive example";
	
}]);

myApp.directive('myInfoMessage', function(){
	// Runs during compile
	return {
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		 //template: '<h1> <strong>{{message}}</strong></h1>',
		templateUrl: 'templates/directive/my-info-msg.ejs',
		transclude: true,
	};
});

myApp.controller('emp', ['$scope','empService', function($scope,empService){
	$scope.display=function(){
		empService.displayEmp($scope.searchEmpno, function(e){
			$scope.employees=e;
		});
	};
}]);

myApp.service('empService', ['$http','$log', function($http, $log){
	this.displayEmp=function(empno, callback){
		$http({
			url:'api/employees',
			method:'GET'
		}).then(function(resp){
			callback(resp.data);
		},function(resp){
			$log.error("Error is occurred");
		})
	};	
}]);


myApp.directive('empDetails', function(){
	// Runs during compile
	return {
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		  templateUrl: 'templates/directive/emp-details.ejs'
	};
});
