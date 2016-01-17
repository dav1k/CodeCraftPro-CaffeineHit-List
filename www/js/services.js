/**
 * Created by Dave on 1/16/16.
 */
var app = angular.module('caffeinehit.services', []);

app.service('YelpService', function ($q, $http, $cordovaGeolocation, $ionicPopup) {
  var self = {
    'page': 1,
    'isLoading': false,
    'hasMore': true,
    'results': [],
    'lat': 51.544440,     // CodeCraftPro offices in UK
    'lon': -0.022974,
    'refresh': function () {
      self.page = 1;
      self.isLoading = false;
      self.hasMore = true;
      self.results = [];

      return self.load();
    },
    'next': function () {
      self.page += 1;

      return self.load();
    },
    'load': function () {
      self.isLoading = true;

      var deferred = $q.defer();

      ionic.Platform.ready(function () {
        $cordovaGeolocation.getCurrentPosition({timeout: 10000, enableHighAccuracy: false})
          .then(function (position) {
            self.lat = position.coords.latitude;
            self.lon = position.coords.longitude;

            var params = {
              page: self.page,
              lat: self.lat,
              lon: self.lon
            };

            $http.get('https://codecraftpro.com/api/samples/v1/coffee/', {params: params})
              .success(function (data) {
                self.isLoading = false;
                console.log(data);

                if (data.businesses.length == 0) {
                  self.hasMore = false;
                } else {
                  angular.forEach(data.businesses, function (business) {
                    self.results.push(business);
                  });
                }

                deferred.resolve();
              })
              .error(function (data, status, headers, config) {
                self.isLoading = false;
                deferred.reject(data);
              });
          }, function(err) {
            console.log("Error getting position");
            console.log(err);
            $ionicPopup.alert({
              'title':'Please enable your Geo-Location functionality on your phone',
              'template':'It seems like you have disabled geolocation for Caffeine-Hit-List.\n\nPlease switch it on by going to your application settings.'
            })
          })
      });


      return deferred.promise;
    }
  };

  self.load();

  return self;
});
