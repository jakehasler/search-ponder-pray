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

    var v1 = $routeParams.v1;
    var v2 = $routeParams.v2;
    $scope.book = $routeParams.book;
    $scope.chapter = $routeParams.chapter;
    $scope.verse = $routeParams.verse;

    $scope.versionsObj = [
      {
        option: 'English: King James Version',
        value: 'kjv'
      },
      {
        option: 'English: KJV Easy Read',
        value: 'akjv'
      },
      {
        option: 'English: American Standard Version',
        value: 'asv'
      },
      {
        option: 'English: Amplified Version',
        value: 'amp'
      },
      {
        option: 'English: Basic English Bible',
        value: 'basicenglish'
      },
      {
        option: 'English: New American Standard',
        value: 'nasb'
      },
      {
        option: 'English: World English Bible',
        value: 'web'
      },
      {
        option: 'English: Webster\'s Bible',
        value: 'wb'
      },
      {
        option: 'Spanish: Reina Valera',
        value: 'valera'
      },
      {
        option: 'Portuguese: Almeida Atualizada',
        value: 'almeida'
      }
    ];

    $scope.versionsObj.forEach(function(version) {
        if(v1 == version.value) {
            $scope.v1 = version.option;
        }
        else if(v2 == version.value) {
            $scope.v2 = version.option;
        }
    });


    var url = 'http://getbible.net/json?passage=' + $scope.book + $scope.chapter + ':' + $scope.verse;
    console.log(url);

    $http.get(url + '&v=' + v1).then(function success(res) {
    	var verse = res.data.replace('(', '');
    	verse = verse.replace(')', '');
    	verse = verse.replace(/;/g, '');
    	verse = JSON.parse(verse);
    	$scope.ver1 = verse.book[0].chapter[$scope.verse].verse;
      $scope.ready = true;
    });

    $http.get(url + '&v=' + v2).then(function success(res) {
    	var verse = res.data.replace('(', '');
    	verse = verse.replace(')', '');
    	verse = verse.replace(/;/g, '');
    	verse = JSON.parse(verse);
    	$scope.ver2 = verse.book[0].chapter[$scope.verse].verse;
    });

    $scope.ready = false;

  });
