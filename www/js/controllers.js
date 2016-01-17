/**
 * Created by Dave on 1/16/16.
 */

var app = angular.module('caffeinehit.controllers', []);

app.controller('YelpCtrl', function ($scope, YelpService) {
  $scope.yelp = YelpService;

  // doRefresh function
  $scope.doRefresh = function () {
    if (!$scope.yelp.isLoading) {
      $scope.yelp.refresh().then(function () {
        $scope.$broadcast('scroll.refreshComplete');
      });
    }
  };
});
