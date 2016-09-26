var app = angular.module("myApp",[]);

app.controller("MainController",function($scope,$location,$anchorScroll){
	$scope.jumpToTop = function(){
		//alert("jump to top called");
		$location.hash('topLink');
		$anchorScroll();
	};
	
	$scope.jumpToBottom = function(){
		//alert("jump to bottom called");
		$location.hash('bottomLink');
		$anchorScroll();	
	};
	
});