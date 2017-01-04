// Code goes here
var app = angular.module("myApp",[]);

app.directive("tstGenerateNumbers",function(){
  return{
	  scope:{
		  generatorFunction:'&',//will pass dynamic function name
		  onSave:'&',//will pass dynamic function name
		  count:'=?'//optional value
		},
		template:'<p>Items : {{items}}</p><br /><button ng-click="_onSave()">Save</button>',
		restrict:'E',
		controller:function($scope){
			if($scope.generatorFunction){
				$scope.items = $scope.generatorFunction({count:$scope.count});
			}
			$scope._onSave = function(){
				if($scope.onSave){
					$scope.onSave();
				}
			}
		}


  };
});
app.controller("MainController",function($scope){
  $scope.randomNumbers=function(count){
	  var result=[];
	  count = count||10;
	  for(var counter = 0; counter < count ; counter++){
		  var item = Math.round(Math.random()*1000)+1;
		  result.push(item);
	}
	return result;
	};
	$scope.sequentialNumbers = function(count){
		var result = [];
		count = count||10;
		for(var counter = 1; counter<=count;counter++){
			result.push(counter);
		}
		return result;
	};
	
	$scope.saveFirst= function(){
			alert('The first item is saved');
	};
	
	$scope.saveSecond= function(){
			alert('The second item is saved');
	};

});