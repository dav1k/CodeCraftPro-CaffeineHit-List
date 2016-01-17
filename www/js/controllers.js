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

  // loadMore function
  $scope.loadMore = function() {
    console.log("loadMore");

    if (!$scope.yelp.isLoading && $scope.yelp.hasMore) {
      $scope.yelp.next().then(function() {
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    }
  };

  // getDirections(cafe) function
  $scope.getDirections = function(cafe) {
    console.log("getting directions for cafe")
  }

  // openMap(cafe) function
  $scope.openMap = function(cafe) {
    console.log("Opening map, centered on Cafe")
  }

});
