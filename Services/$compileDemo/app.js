var app = angular.module("myApp",[]);

app.controller("MainController",function($scope,$compile){
	
	$scope.addNewField = function(htmlMarkup){
		var newElement = $compile(htmlMarkup)($scope);
		var parentElement = angular.element("#myDiv");
	
		parentElement.append(newElement);
	};
	
})