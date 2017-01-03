var app = angular.module("myApp",[]);

app.controller("MainController",function($scope){
	$scope.class1 = 'redClass';
	$scope.class2 = 'greenClass';
	
	$scope.IsSelected = false;
	
});