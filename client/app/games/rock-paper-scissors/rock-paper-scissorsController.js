angular.module('gameSuite')
.controller('rock-paper-scissorsController', function($scope, $timeout) {

  $scope.choices = ['Rock', 'Paper', 'Scissors'];
  $scope.currentStreak = 0;
  $scope.highestStreak = 0;

  $scope.choosePlay = function(color, piece) {
    $scope.play = null;
    $scope.enemyPlay = null;
    $scope.play = color + piece;
    $scope.chooseEnemyPlay(color, piece);
  }
  $scope.chooseEnemyPlay = function(color, userPiece) {
    var enemyPiece = $scope.choices[$scope.getRandomInit(0, 3)];
    if (color === 'red') {
      color = 'blue';
    } else if (color === 'blue') {
      color = 'red';
    }
    $timeout(function() {
      $scope.enemyPlay = color + enemyPiece;
      $scope.updateScore(userPiece, enemyPiece);
    }, 100)
  }
  $scope.getRandomInit = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  $scope.updateScore = function(userPiece, enemyPiece) {
    if (userPiece === 'Rock' && enemyPiece === 'Scissors' ||
      userPiece === 'Paper' && enemyPiece === 'Rock' ||
      userPiece === 'Scissors' && enemyPiece === 'Paper') {
      $scope.currentStreak++;
    } else if (enemyPiece === 'Rock' && userPiece === 'Scissors' ||
      enemyPiece === 'Paper' && userPiece === 'Rock' ||
      enemyPiece === 'Scissors' && userPiece === 'Paper') {
      $scope.currentStreak = 0;
    }
    if ($scope.currentStreak > $scope.highestStreak) {
     $scope.highestStreak = $scope.currentStreak
    }
  }
});

