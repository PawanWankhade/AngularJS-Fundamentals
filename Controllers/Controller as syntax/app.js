var app= angular.module('myApp',[]);

app.controller('ParentController',function($scope){
    $scope.parentMessage = 'Hello from Parent Contoller';
   
});


app.controller('FirstChild',function($scope){
    $scope.firstMessage = 'Hello from first child';
   
});

app.controller('SecondChild',function($scope){
      $scope.secondMessage = 'Hello from second child';
});








