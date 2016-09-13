var app = angular.module('myApp', []);
app.controller('MainController', function ($scope, $interval) {
    var items = ["apple", "banana", "mango", "chikoo"];
    $scope.itemIndex = null;
    $scope.currentItem = "";
    $scope.getItem = function () {
        if ($scope.itemIndex <= items.length) {
            return $scope.currentItem = items[$scope.itemIndex];
        }
        else {
            return $scope.currentItem = "Wrong input entered";

        }
    };

    $interval(function () {
        $scope.itemIndex = Math.round(Math.random() * (items.length - 1));
        $scope.getItem();

    },

      2000);


});
