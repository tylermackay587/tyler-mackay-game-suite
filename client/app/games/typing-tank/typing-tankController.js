angular.module('gameSuite')
.controller('typing-tankController', function($scope) {
  $(document).on('click', '.spaceShip', function(){
    console.log(this);
    $(this).animate({right: '0%'}, 10000)
    .promise()
    .done(function(){
      console.log('done');
    })
  })
})