/*global angular*/
var app = angular.module('myApp', []);

app.directive('yoYo', function () {
  'use strict';
  return {
    template: '<strong>Yo!</strong>',
    restrict: 'E'
  };
});