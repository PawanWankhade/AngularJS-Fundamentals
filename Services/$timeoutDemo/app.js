var app = angular.module("myApp",[]);

app.controller("MainController",function($scope,$timeout){
	$scope.delay = 2000;
	$scope.message = "No timeout has set.";
	var timeoutPromise = null;
	
	$scope.startTimeout = function(){
	
		$scope.message = "";
		$scope.cancelTimeout();
		$scope.message += "Starting a news timeout...";	
		timeoutPromise = $timeout(function(data){
			$scope.message = "Timeout complete.";
			timeoutPromise = null;
		},$scope.delay,true,{data:'testing123'});
	
	}
	//this function is use to cancel timeout on button click
	$scope.cancelTimeout = function(){
		if(timeoutPromise){
		alert(' inside cancle timeout called');		
		$timeout.cancel(timeoutPromise);
			timeoutPromise = null;
			$scope.message = 'Previous timeout was cancelled';
		}
	};
})