define(['./module'], function (module) {
  "use strict";
  module.controller('ListController', ['$scope', 'peopleResource', function ($scope, peopleResource) {
    $scope.people = peopleResource.query();
  }]);
});