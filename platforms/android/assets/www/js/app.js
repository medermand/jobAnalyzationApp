// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'firebase', 'starter.controllers', 'starter.services', 'ionic-modal-select'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MainPageCtrl'
      })

      .state('app.main', {
        url: '/main',
        views: {
          'menuContent': {
            templateUrl: 'templates/mainPage.html',
            controller: 'MainPageCtrl'
          }
        }
      })

      .state('app.jobs', {
        url: '/jobs',
        views: {
          'menuContent': {
            templateUrl: 'templates/jobFamily.html',
            controller: 'JobFamilyCtrl'
          }
        }
      })
      .state('app.jobUnclassified', {
        url: '/jobUnclassified',
        views: {
          'menuContent': {
            templateUrl: 'templates/jobFamilyUnclassified.html',
            controller: 'JobFamilyUnclassifiedCtrl'
          }
        }
      })

      .state('app.jobDetails', {
        url: '/jobDetails/:subFamily',
        views: {
          'menuContent': {
            templateUrl: 'templates/jobFamilyDetail.html',
            controller: 'JobFamilyDetailCtrl'
          }
        },
        params: {
          job: ""
        }
      })
      .state('app.jobDetailUnclassified', {
        url: '/jobDetailUnclassified',
        views: {
          'menuContent': {
            templateUrl: 'templates/jobFamilyDetailUnclassified.html',
            controller: 'JobFamilyDetailCtrl'
          }
        }
      })

      .state('app.experience', {
        url: '/experience',
        views: {
          'menuContent': {
            templateUrl: 'templates/experience.html',
            controller: 'ExperienceCtrl'
          }
        }
      })

      .state('app.experienceDetail', {
        url: '/experienceDetail',
        views: {
          'menuContent': {
            templateUrl: 'templates/experienceDetail.html',
            controller: 'ExperienceDetailCtrl'
          }
        }
      })
      .state('app.industrySegment', {
        url: '/industrySegment',
        views: {
          'menuContent': {
            templateUrl: 'templates/industrySegment.html',
            controller: 'IndustrySegmentCtrl'
          }
        }
      })
      .state('app.otherIndustrySegment', {
        url: '/otherIndustrySegment',
        views: {
          'menuContent': {
            templateUrl: 'templates/otherIndustrySegment.html',
            controller: 'OtherIndustrySegmentCtrl'
          }
        }
      })
      .state('app.salary', {
        url: '/salary',
        views: {
          'menuContent': {
            templateUrl: 'templates/salary.html',
            controller: 'SalaryCtrl'
          }
        }
      })
      .state('app.serverData', {
        url: '/serverData',
        views: {
          'menuContent': {
            templateUrl: 'templates/serverData.html',
          }
        }
      })

      .state('app.chart', {
        url: '/chart',
        views: {
          'menuContent': {
            templateUrl: 'templates/chart.html',
            controller: 'ChartCtrl'
          }
        }
      })

    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/main');
  });
