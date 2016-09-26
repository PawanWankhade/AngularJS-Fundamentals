var app = angular.module("myApp",[]);

app.controller("MainController",function($scope,$parse){
	$scope.executeMultiply = function(){
		var part = {part : {id:124798}};
		var secondPart = {part:{id:3.141576}};
		var multiply = $parse('8*5');
		var getId = $parse('part.id');
		
		$scope.result = multiply();
		$scope.idOfPart = getId(part);
		
	};
})