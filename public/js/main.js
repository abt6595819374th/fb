requirejs.config({
  paths: {
    "angular": '../bower_components/angularjs/angular',
    "angular-ui-router": '../bower_components/angular-ui-router/release/angular-ui-router',
    "angular-resource": '../bower_components/angular-resource/angular-resource'
  },
  shim: {
    angular: {
      "exports": 'angular'
    },
    "angular-ui-router": {
      "deps": [
        'angular'
      ]
    },
    "angular-resource": {
      "deps": [
        'angular'
      ]
    }
  }
});
define([
  '../bower_components/angularjs/angular',
  'angular-ui-router',
  'list/index'
], function (angular) {
  "use strict";
  var app = angular
    .module('facebook', [
      'list',
      'ui.router'
    ])
    .config(['$urlRouterProvider', function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    }]);

  angular.bootstrap(document, ['facebook']);
});