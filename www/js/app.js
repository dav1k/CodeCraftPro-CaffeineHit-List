/**
 * Created by Dave on 1/16/16.
 */

var app = angular.module('caffeinehit',
  [
    'ionic',    // Main dependency
    'ngCordova',  // ngCordova dependency
    'caffeinehit.controllers',    // custom controllers
    'caffeinehit.services',       // custom services
    'caffeinehit.filters'         // custom filters
  ]
);

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

app.config(function ($httpProvider) {
  // Using personally assigned token.
  $httpProvider.defaults.headers.common['Authorization'] = 'Token efe2f4e039b675e9ed4c3365b758b329f8d44759'
});
