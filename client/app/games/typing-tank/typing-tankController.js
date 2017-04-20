angular.module('gameSuite')
.controller('typing-tankController', function($scope) {
  $scope.moving = false;

  $(document).on('click', '.planet', function(){
    $('.spaceShip').stop();
    let top = $(this).position().top - ($('.planet').height()/4);
    let left = $(this).position().left - ($('.planet').width()/4);
    $scope.moving = true;
    $('.spaceShip').animate({top: top, left: left}, {
      duration: 2000,
      easing: 'linear',
      complete: function(){console.log('done')},
    })
  })
})