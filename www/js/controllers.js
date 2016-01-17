/**
 * Created by Dave on 1/16/16.
 */

var app = angular.module('caffeinehit.controllers', []);

app.controller('YelpCtrl', function ($scope, YelpService) {
  $scope.yelp = YelpService;
});
