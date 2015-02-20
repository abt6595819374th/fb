define([
  '../../bower_components/angularjs/angular',
  '../resources/people'
], function (angular) {
  "use strict";
  return angular.module('list', ['ui.router', 'resources.people'])
    .config(['$stateProvider', function ($stateProvider) {
      return $stateProvider
        .state('home', {
          url: '/',
          controller: 'ListController',
          templateUrl: 'js/list/list.html'
        });
    }]);
});