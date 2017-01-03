var app = angular.module('myApp',[]);
app.controller("MainController",function($scope){
	$scope.user = {
		name:''
	};
	$scope.message='';
	$scope.sayHello = function(){
		$scope.message = 'Hello, Please enter your name!';
		
	};
	
	$scope.sayGoodbye = function(){
		if(!$scope.user.name||$scope.user.name.length==0){
			$scope.message = "Awww,you didn't entered your name!";
		}
		else
		{
			$scope.message = "Thanks for entering name "+$scope.user.name;
			
		}
		
	};
	

});