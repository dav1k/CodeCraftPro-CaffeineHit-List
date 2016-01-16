var app = angular.module('caffeinehit.services', []);

app.service('YelpService', function($q, $http) {

  var self = {
    'page': 1,
    'isLoading': false,
    'hasMore': true,
    'results': [],
    'lat': 51.544440,
    'lon': -0.022974,

    'refresh': function () {
      self.page = 1;
      self.isLoading = false;
      self.hasMore = true;
      self.results = [];

      return self.load();
    },

    'next': function () {
      self.isLoading();
       var deferred = $q.defer();

       var params = {
         page: self.page,
         lat: self.lat,
         lon: self.lon,
       };

       $http({method: 'GET', url: 'https://codecraftpro.com/api/samples/v1/coffee/'})
       .success(function(data, status, headers, config) {
         self.isLoading =  false;

        //  if (data.businesses.length == 0) {
        //    self.hasMore = false;
        //  } else {
        //    angular.forEach(data.businesses, function(value, key) {
        //      self.results.push(value);
        //    });
        //  }

         deferred.resolve();
       })
       .error(function(data, status, headers, config) {
         self.isLoading = false;
         deferred.reject(data);
       });

       return deferred.promise;
    }
  };

  self.load();

  return self;

});
