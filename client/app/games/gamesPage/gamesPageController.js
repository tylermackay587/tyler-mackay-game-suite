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
        description: 'rock-paper-scissors game description',
        route: 'rock-paper-scissors'
      },
      {
        title: 'scrabble',
        description: 'scrabble game desciption',
        route: 'scrabble'
      },
      {
        title: 'Typing Tank',
        description: 'Typing Tank game description',
        route: 'typing-tank'
      },
      {
        title: 'keno',
        description: 'keno game description',
        route: 'keno'
      },
      {
        title: 'memory',
        description: 'memory game description',
        route: 'memory'
      }
    ];
    $scope.changeLocation = function(gameRoute) {
      $location.path('/games/' + gameRoute);
    };
});