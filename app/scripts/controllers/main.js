'use strict';

/**
 * @ngdoc function
 * @name mmDtFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mmDtFrontendApp
 */
angular.module('mmDtFrontendApp')
  .controller('MainCtrl', function ($scope, socket, $interval) {

    $scope.messageFromServer ="";

    socket.on('step',function(msg){
      console.log(msg);
      $scope.messageFromServer = msg;
    });

    /*
    $scope.step = 0;

    $scope.sequence = [
      {
        "step": 1,
        "message": "Nehme den roten Legostein",
        "image": "images/red.png"
      },
      {
        "step": 2,
        "message": "Nehme den blauen Legostein",
        "image": "images/blue.png"
      },
      {
        "step": 3,
        "message": "Nehme den gelben Legostein",
        "image": "images/yellow.png"
      },
      {
        "step": 4,
        "message": "Toll gemacht",
        "image": "images/sun.png"
      },
      {
        "step": 1,
        "message": "Nehme den roten Legostein",
        "image": "images/red.png"
      },
      {
        "step": 2,
        "message": "Nehme den blauen Legostein",
        "image": "images/blue.png"
      },
      {
        "step": 3,
        "message": "Nehme den gelben Legostein",
        "image": "images/yellow.png"
      },
      {
        "step": 4,
        "message": "Fehler zurück",
        "image": "images/error.png"
      },
      {
        "step": 1,
        "message": "Nehme den roten Legostein",
        "image": "images/red.png"
      },
      {
        "step": 2,
        "message": "Nehme den blauen Legostein",
        "image": "images/blue.png"
      },
      {
        "step": 4,
        "message": "Toll gemacht",
        "image": "images/sun.png"
      }
    ];


    $interval(setData, 1000 * 20);

    function setData() {
      $scope.step++;
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    */
  })
;
