'use strict';

/**
 * @ngdoc function
 * @name mmDtFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mmDtFrontendApp
 */
angular.module('mmDtFrontendApp')
  .controller('testControlCtrl', function ($scope, $timeout, socket) {

    $scope.blue =  {
      "name": "blue",
      "message": "Nehme den blauen Legostein",
      "image": "images/blue.png"
    };

    $scope.red =  {
      "name": "red",
      "message": "Nehme den roten Legostein",
      "image": "images/red.png"
    };

    $scope.yellow =  {
      "name": "yellow",
      "message": "Nehme den gelben Legostein",
      "image": "images/yellow.png"
    };

    $scope.green =  {
      "name": "green",
      "message": "Nehme den grünen Legostein",
      "image": "images/green.png"
    };

    $scope.orange =  {
      "name": "orange",
      "message": "Nehme den orangenen Legostein",
      "image": "images/orange.png"
    };

    $scope.white =  {
      "name": "white",
      "message": "Nehme den weißen Legostein",
      "image": "images/white.png"
    };

    $scope.sun =  {
      "name":"sun",
      "message": "Toll gemacht",
      "image": "images/sun.png"
    };

    $scope.wrong =  {
      "message": "Achtung flasch",
      "image": "images/error.png"
    };

    $scope.correct =  {
      "message": "Sehr gut",
      "image": "images/correct.png"
    };

    $scope.message = "";

    $scope.messageFromServer ="";

    $scope.sendMessage = function() {
      socket.emit('step', $scope.message);
    };

    $scope.sendObject = function(a) {
      socket.emit('step', a);
    };

    socket.on('step',function(msg){
      console.log(msg);
      $scope.messageFromServer = msg;
    });

    $scope.walker = 0;

    $scope.sequenceTest = [
      $scope.red,
      $scope.yellow
    ];

    $scope.sequenceOld = [
      $scope.red,
      $scope.red,
      $scope.yellow,
      $scope.orange,
      $scope.yellow,
      $scope.green,
      $scope.green,
      $scope.white,
      $scope.green,
      $scope.white,
      $scope.white,
      $scope.blue,
      $scope.blue,
      $scope.yellow,
      $scope.blue,
      $scope.green,
      $scope.white,
      $scope.white,
      $scope.orange,
      $scope.white,
      $scope.blue,
      $scope.blue,
      $scope.orange,
      $scope.red,
      $scope.orange,
      $scope.red,
      $scope.yellow
    ];

    $scope.sequenceNEw = [
      $scope.orange,
      $scope.red,
      $scope.red,
      $scope.orange,
      $scope.red,
      $scope.yellow,
      $scope.red,
      $scope.orange,
      $scope.yellow,
      $scope.red,
      $scope.yellow,
      $scope.orange,
      $scope.yellow,
      $scope.orange,
      $scope.red,
      $scope.orange,
      $scope.orange,
      $scope.yellow,
      $scope.red,
      $scope.orange
    ];

   $scope.sequence = [
      $scope.orange,
      $scope.red,
      $scope.yellow,
      $scope.orange,
      $scope.orange,
      $scope.red,
      $scope.orange,
      $scope.yellow,
      $scope.orange,
      $scope.yellow,
      $scope.red,
      $scope.yellow,
      $scope.orange,
      $scope.red,
      $scope.yellow,
      $scope.red,
      $scope.orange,
      $scope.red,
      $scope.red,
      $scope.orange,
    ];

    $scope.play = function() {
      $scope.sendObject($scope.sequence[0]);
    };

    $scope.next = function() {
      console.log('next');
      if($scope.walker < $scope.sequence.length) {
        $scope.sendObject($scope.correct);
        $scope.walker ++;
        $timeout(function() {
          $scope.sendObject($scope.sequence[$scope.walker]);
        }, 1000);
      } else {
        $scope.sendObject($scope.sun);
      }
    };

    $scope.restart = function() {
      $scope.walker = 0;
      $scope.sendObject($scope.sequence[$scope.walker]);
    };

    $scope.prev = function() {
      if($scope.walker >= 1) {
        $scope.sendObject($scope.wrong);
        $scope.walker --;
        $timeout(function() {
          $scope.sendObject($scope.sequence[$scope.walker]);
        }, 200);
      }
    };


  })
  .factory('socket', ['$rootScope', function ($rootScope) {
  var socket = io.connect('http://10.183.108.10:3000');

  return {
    on: function (eventName, callback) {
      function wrapper() {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      }

      socket.on(eventName, wrapper);

      return function () {
        socket.removeListener(eventName, wrapper);
      };
    },

    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if(callback) {
            callback.apply(socket, args);
          }
        });
      });
    }
  };
}]);
