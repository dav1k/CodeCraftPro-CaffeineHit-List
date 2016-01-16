var app = angular.module('caffeinehit.controllers', []);

var app = function($scope, YelpService) {
  $scope.yelp = YelpService;
};
