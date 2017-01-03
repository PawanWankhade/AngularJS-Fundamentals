var app = angular.module("myApp",[]);

app.controller("MainController",function($scope){
	$scope.foodList = 
	[
	{name:'Apples',price:1.99},
	{name:'Beans',price:2.56},
	{name:'Bread',price:1.99},
	{name:'Carrots',price:1.99},
	{name:'Cheese',price:3.99},
	{name:'Chicken',price:5.99},
	{name:'Mango',price:1.93},
	{name:'Eggs',price:1.00}
	];
});