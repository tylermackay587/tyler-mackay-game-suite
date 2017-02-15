angular.module('gameSuite',
  [
  'ngRoute'
  ])
.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  
  $routeProvider
    .when('/', {
      templateUrl: 'app/homepage/homepage.html',
      controller: 'homepageController'
    })
    .when('/games', {
      templateUrl: 'app/games/games.html',
      controller: 'gamesController'
    })
    .when('/leaderboard', {
      templateUrl: 'app/leaderboard/leaderboard.html',
      controller: 'leaderboardController'
    })
});