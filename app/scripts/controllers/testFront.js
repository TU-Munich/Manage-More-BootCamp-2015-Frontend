'use strict';

/**
 * @ngdoc function
 * @name mmDtFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mmDtFrontendApp
 */
angular.module('mmDtFrontendApp')
  .controller('testFrontCtrl', function ($scope, socket) {

    $scope.messageFromServer ="";

    socket.on('step',function(msg){
      console.log(msg);
      $scope.messageFromServer = msg;
    });



  });
