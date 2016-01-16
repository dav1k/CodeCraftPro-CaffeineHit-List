var app = angular.module('caffeinehit.filters', []);

app.filter('join', function() {
  return function (input, sep) {
    return input.join(sep);
  };
});
