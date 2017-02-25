angular.module('gameSuite')
.controller('rock-paper-scissorsController', function($scope, $timeout) {
  $scope.text = "This is where the rock-paper-scissors game will be!";
  $scope.choices = ['Rock', 'Paper', 'Scissors'];
  $scope.choosePlay = function(color, piece) {
    $scope.play = color + piece;
      $scope.chooseEnemyPlay(color);
  }
  $scope.chooseEnemyPlay = function(color) {
    if (color === 'red') {
      color = 'blue';
    } else if (color === 'blue') {
      color = 'red';
    }
    var choice = $scope.choices[$scope.getRandomInit(0, 3)];
    console.log(color + choice);
    $timeout(function() {
    $scope.enemyPlay = color + choice;
    }, 500)
  }
  $scope.getRandomInit = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
});

