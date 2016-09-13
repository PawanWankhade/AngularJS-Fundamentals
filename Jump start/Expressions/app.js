var app= angular.module('myApp',[]);
app.controller('MainController',function($scope,$interval){
  
    $scope.fruits = ["apple","banana","mango","chikoo"];
    $scope.randomNumber = -999;

    $scope.number1 = 5.4;
    $scope.number2 = 4;
    
    $scope.pWidth = 10;    
    
    $interval(function(){
        $scope.randomNumber = Math.round(Math.random()*1000000);
    },2000);
});








