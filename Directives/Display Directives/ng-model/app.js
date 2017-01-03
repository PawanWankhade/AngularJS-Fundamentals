var app = angular.module("myApp",[]);

app.controller("MainController",function($scope){
	$scope.user={
		firstName:'',
		lastName:'',
		email:'',
		optIn:false,
		selectedColor:'White'
		
	};
	$scope.colors =[
	{name:'White',value:'white'},
	{name:'Yellow',value:'yellow'},
	{name:'Blue',value:'blue'},
	{name:'Red',value:'red'},
	{name:'Green',value:'green'},
	{name:'Purple',value:'purple'}
	];
});