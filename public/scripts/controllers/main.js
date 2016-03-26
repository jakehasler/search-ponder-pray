'use strict';

/**
 * @ngdoc function
 * @name sppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sppApp
 */
angular.module('sppApp')
  .controller('MainCtrl', function ($scope, $http, $location, $mdDialog) {
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

    $scope.version1 = $scope.versionsObj[0].option;

    $scope.getVersionName = function() {
      var v1;
      var v2;
      $scope.versionsObj.forEach(function(version) {
        if(version.value == $scope.version1) {
          v1 = version.option;
        } else if(version.value == $scope.version2) {
          v2 = version.option;
        }

      });
      $scope.versionString = "You selected the " + v1 + " and " + v2 + "."
      console.log($scope.versionString);
    }



    // TODO: Selected Versions to option
    // TODO: Validation for "GO" Button - DONE
    // TODO: Split New Testament & Old Testament - DONE
    // TODO: Share/Save Comparison Button
    // TODO: Differences highlighted between two verses
    // TODO: Improve Styling - Add some images? Change Fonts?


    var BIBLIA_KEY = '659e75ea18d73db9a183c49008b26300';

    var BASE_URL = 'http://getbible.net/json?';

    //http://bibliaapi.com/docs/Table_of_Contents
    //https://getbible.net/api

    var getBooksAndChapters = function() {
      var url = 'https://api.biblia.com/v1/bible/contents/KJV1900';
      var key = "?key=" + BIBLIA_KEY;

      $http.get(url + key).then(function success(res) {
        $scope.books = res.data.books;
        $scope.otBooks = [];
        $scope.ntBooks = [];
        for (var i = 0; i < $scope.books.length; i++) {
          if(i < 39) $scope.otBooks.push($scope.books[i]);
          else $scope.ntBooks.push($scope.books[i]);
        }
      });
    }

    // https://api.biblia.com/v1/bible/content/KJV1900.txt?style=oneVersePerLine&passage=John5&key=659e75ea18d73db9a183c49008b26300
    $scope.getVerses = function(book, chapter) {
      var url = "https://api.biblia.com/v1/bible/content/KJV1900.txt?style=oneVersePerLine&passage=";
      var key = "&key=" + BIBLIA_KEY;
      $http.get(url + book + chapter + key).then(function success(res) {
        $scope.currVerses = res;
        // console.log(res.data);
        var lines = res.data.split('\n');
        $scope.verses = [];
        for (var i = 0; i < lines.length; i++) {
          $scope.verses.push(i);
        }
      })

    }

    getBooksAndChapters();

    $scope.getChapters = function(book) {
      for (var i = 0; i < $scope.books.length; i++) {
        if($scope.books[i].passage === book) {
            $scope.chapters = $scope.books[i].chapters;
        }
      };

      $scope.chapterNums = [];
      for (var i = 1; i < $scope.chapters.length; i++) {
        $scope.chapterNums.push(i);
      };

    };

    $scope.compareView = function(ev) {
      if($scope.version1 && $scope.version2 && $scope.book && $scope.chapter && $scope.verse) {   
        var url = '/compare/' + $scope.version1 + '/' + $scope.version2 + '/' + $scope.book + '/' + $scope.chapter + '/' + $scope.verse;
        console.log(url);
        $location.path(url).replace();
      }
      else {
        $scope.showAlert(ev);
      }
    }

    $scope.showAlert = function(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application
      // to prevent interaction outside of dialog
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('Not Quite!')
          .textContent('Please select all the options.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')
          .targetEvent(ev)
      );
    };


  });
