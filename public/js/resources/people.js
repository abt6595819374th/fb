define(['../../bower_components/angularjs/angular',
  'angular-resource'
], function (angular) {
  return angular.module('resources.people', [
    'ngResource'
  ]).service('peopleResource', [
    '$resource',
    function ($resource) {
      return $resource('/people', {}, {

        })
      ;
    }]);
});
