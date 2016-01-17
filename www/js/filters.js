/**
 * Created by Dave on 1/16/16.
 */

var app = angular.module('caffeinehit.filters', []);

app.filter('join', function () {
  return function (arr, sep) {
    return arr.join(sep);
  };
});
