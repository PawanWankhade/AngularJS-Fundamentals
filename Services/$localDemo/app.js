var app = angular.module("myApp",[]);

app.controller("MainController",function($scope,$locale){
	$scope.currentDate = new Date();
	$scope.cost = 3232.65;
	
	$scope.formattedDate = $locale.DATETIME_FORMATS.fullDate;
	
})