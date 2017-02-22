angular.module('gameSuite')
.controller('gamesController', function($scope) {
    $scope.text = 'This is where the games will be!';
    $scope.games = [
      {
        title: 'rock-paper-scissors',
        description: 'rock-paper-scissors game description'
      },
      {
        title: 'scrabble',
        description: 'scrabble game desciption'
      },
      {
        title: 'keno',
        description: 'keno game description'
      },
      {
        title: 'poker',
        description: 'poker game description'
      },
      {
        title: 'memory',
        description: 'memory game description'
      }
    ];
});