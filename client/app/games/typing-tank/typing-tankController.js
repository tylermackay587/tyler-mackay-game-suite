angular.module('gameSuite')
.controller('typing-tankController', function($scope) {
  $scope.moving = false;

  $(document).on('click', '.planet', function(){
    console.log($('.planet').height());
    if($scope.moving){
      $('.spaceShip').stop();
      $scope.moving = false;
    } else {
      let top = $('.planet').position().top - ($('.planet').height()/4);
      let left = $('.planet').position().left - ($('.planet').width()/4);
      $scope.moving = true;
      $('.spaceShip').animate({top: top, left: left}, {
        duration: 10000,
        complete: function(){alert('done')},
      })
    }
  })
})