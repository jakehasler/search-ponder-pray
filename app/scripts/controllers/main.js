'use strict';

/**
 * @ngdoc function
 * @name sppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sppApp
 */
angular.module('sppApp')
  .controller('MainCtrl', function ($scope, $http) {
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
    };

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


    var BIBLIA_KEY = '659e75ea18d73db9a183c49008b26300';

    var BASE_URL = 'http://getbible.net/json?';



    var getBooksAndChapters = function() {
      var url = 'https://api.biblia.com/v1/bible/contents/KJV1900'
      var key = "?key=" + BIBLIA_KEY;

      $http.get(url + key).then(function success(res) {
        $scope.books = res.data.books;
      });
    }

    getBooksAndChapters();


    $scope.getChapters = function(book) {
      for (var i = 0; i < $scope.books.length; i++) {
        if($scope.books[i].passage === book) {
            $scope.chapters = $scope.books[i].chapters;
        }
      };

      $scope.chapterNums = [];
      for (var i = 0; i < $scope.chapters.length; i++) {
        $scope.chapterNums.push(i);
      };
    };



  });
