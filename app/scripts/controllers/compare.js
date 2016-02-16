'use strict';

/**
 * @ngdoc function
 * @name sppApp.controller:CompareCtrl
 * @description
 * # CompareCtrl
 * Controller of the sppApp
 */
angular.module('sppApp')
  .controller('CompareCtrl', function ($scope, $routeParams, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.v1 = $routeParams.v1;
    $scope.v2 = $routeParams.v2;
    $scope.book = $routeParams.book;
    $scope.chapter = $routeParams.chapter;
    $scope.verse = $routeParams.verse;

    var url = 'http://getbible.net/json?passage=' + $scope.book + $scope.chapter + ':' + $scope.verse;
    console.log(url);

    $http.get(url + '&v=' + $scope.v1).then(function success(res) {
    	console.log(res);
    	var verse = res.data.replace('(', '');
    	verse = verse.replace(')', '');
    	verse = verse.replace(/;/g, '');
    	verse = JSON.parse(verse);
    	$scope.ver1 = verse.book[0].chapter[$scope.verse].verse;
    	console.log($scope.ver1);
    	//$scope.verseVal = res.book.chapter.verse;
    });

    $http.get(url + '&v=' + $scope.v2).then(function success(res) {
    	console.log(res);
    	var verse = res.data.replace('(', '');
    	verse = verse.replace(')', '');
    	verse = verse.replace(/;/g, '');
    	verse = JSON.parse(verse);
    	$scope.ver2 = verse.book[0].chapter[$scope.verse].verse;
    	console.log($scope.ver2);
    });



  });
