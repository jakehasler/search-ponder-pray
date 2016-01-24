'use strict';

/**
 * @ngdoc function
 * @name sppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sppApp
 */
angular.module('sppApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.versions = [
    	"King James",
    	"New World"
    ];

    $scope.versions2 = [
    	"New World",
    	"King James"
    ];


    $scope.bible = {
    	books: [ 'Matthew', 'Mark', 'Luke', 'John'],
    	chapters: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    	verses: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }


  });
