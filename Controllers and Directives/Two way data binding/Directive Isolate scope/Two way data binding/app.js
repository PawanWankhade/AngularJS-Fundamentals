// Code goes here
var app = angular.module("myApp",[]);

app.directive("tstVehicleView",function(){
  return{
	  scope{
		  item:'='
		},
  templateUrl:'templates/vehicle.html',
  restrict:'EA'
  };
});
app.controller("MainController",function($scope){
  
  $scope.firstItem{
	year:2012,
    model:'325i',
    make:'BMW',
    price:9754
  };
  $scope.firstItem{
	year:2016,
    model:'I5 250',
    make:'LEXUS',
    price:39468
  };
  
  
});