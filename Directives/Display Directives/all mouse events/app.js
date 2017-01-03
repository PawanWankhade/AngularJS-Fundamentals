var app = angular.module('myApp',[]);
app.controller("MainController",function($scope){
	$scope.mouseX = 0;
	$scope.mouseY = 0;
	$scope.mouseDownCount = 0;
	$scope.mouseUpCount = 0;
	$scope.mouseMoveCount = 0;
	$scope.mouseOverCount = 0;
	$scope.mouseLeaveCount = 0;
	$scope.mouseEnterCount = 0;
	
	$scope.doMouseDown = function(){
		$scope.mouseDownCount++;
	};
	
	$scope.doMouseUp = function(){
		$scope.mouseUpCount++;
	};
	
	$scope.doMouseMove = function(event){
		$scope.mouseMoveCount++;
		$scope.mouseX = event.offsetX;
		$scope.mouseY = event.offsetY;
	};
	$scope.doMouseEnter = function(){
		$scope.mouseEnterCount++;
	};
	$scope.doMouseLeave = function(){
		$scope.mouseLeaveCount++;
	};
	
	$scope.doMouseOver = function(){
		$scope.mouseOverCount++;
	}
	
	
	
});