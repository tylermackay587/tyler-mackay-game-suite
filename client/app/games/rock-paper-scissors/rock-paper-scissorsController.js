angular.module('gameSuite')
.controller('rock-paper-scissorsController', function($scope) {
    $scope.text = "This is where the rock-paper-scissors game will be!";
    $scope.aler = function(){
      alert();
    }
});