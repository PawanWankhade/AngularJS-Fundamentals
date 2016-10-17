var app = angular.module("myApp",[])
app.controller("mainController",function($cacheFactory,$scope){
	var vm = $scope;
	vm.keys = [];
	
	vm.cache = $cacheFactory("testcache");
	
	vm.addItem = function(itemKey,itemValue){
		vm.keys.push(itemKey);
		vm.cache.put(itemKey,itemValue);
		
	};
	
	vm.getItem = function(itemKey){
		vm.currentItem = vm.cache.get(itemKey);
		
	};
	
	vm.removeItem = function(itemKey){
		vm.keys = vm.keys.filter(function(key){
			return(key != itemKey);
		});
		vm.cache.remove(itemKey);
	};
	
	
	
});