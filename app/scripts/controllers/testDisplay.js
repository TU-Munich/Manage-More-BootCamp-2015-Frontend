'use strict';

/**
 * @ngdoc function
 * @name mmDtFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mmDtFrontendApp
 */
angular.module('mmDtFrontendApp')
  .controller('testDisplayCtrl', function ($scope, $routeParams, socket) {

    var audio;

    $scope.routeParams = $routeParams;

    console.log($routeParams);



    $scope.messageFromServer ="";

    socket.on('step',function(msg){
      console.log(msg);
      $scope.messageFromServer = msg;

      if(msg.name === 'sun') {
        audio = new Audio('sounds/success.mp3');
        audio.play();
      } else {
        audio.pause();
      }

    });


  });
