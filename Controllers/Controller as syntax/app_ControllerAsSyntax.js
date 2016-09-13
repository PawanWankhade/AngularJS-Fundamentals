var app= angular.module('myApp',[]);

app.controller('ParentController',function(){
    this.message = 'Hello from Parent Contoller';
   
});


app.controller('FirstChild',function(){
    this.message = 'Hello from first child';
   
});

app.controller('SecondChild',function(){
      this.message = 'Hello from second child';
});








