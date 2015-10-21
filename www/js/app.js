// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform, RequestsService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    var push = PushNotification.init({ "android": {"senderID": "510791354931"}});

    push.on('registration', function(data){
      alert(data.registrationId);
      RequestsService.register(data.registrationId).then(function(response) {
          alert('Registered!');
      });
    });

    push.on('notification', function(data){
      alert(data.message);
    });

    push.on('error', function(e){
      alert('Error Occured\n' + e.message);
    });

  });


})
