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
    .when('/gamesPage', {
      templateUrl: 'app/games/gamesPage/gamesPage.html',
      controller: 'gamesPageController'
    })
    .when('/leaderboard', {
      templateUrl: 'app/leaderboard/leaderboard.html',
      controller: 'leaderboardController'
    })
});