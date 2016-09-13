var app= angular.module('myApp',[]);

app.service("SharedService",function(){
    return {name:"Sachin Tendulkar"}
});
app.controller('FirstController',function($scope,SharedService){
    $scope.model = SharedService;
   
});

app.controller('SecondController',function($scope,SharedService){
      $scope.model = SharedService;
});








