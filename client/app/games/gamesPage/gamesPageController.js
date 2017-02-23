angular.module('gameSuite')
.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/games/rock-paper-scissors', {
    templateUrl: 'app/games/rock-paper-scissors/rock-paper-scissors.html',
    controller: 'rock-paper-scissorsController'
  })
})
.controller('gamesPageController', function($scope, $location) {
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
    $scope.changeLocation = function(game) {
      $location.path('/games/' + game);
    };
});