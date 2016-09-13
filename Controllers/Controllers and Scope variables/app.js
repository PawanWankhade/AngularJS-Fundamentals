var app= angular.module('myApp',[]);
app.controller('ParentController',function($scope){
    $scope.model = {
        name:'Sachin Tendulkar'
    };
});

app.controller('ChildController',function($scope){
    
});

app.controller('TempController',function($scope){
    $scope.model = {
        name:'Ajinkya Rahane'
    };
});







