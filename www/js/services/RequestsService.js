(function(){

    angular.module('starter')
        .service('RequestsService', ['$http', '$q', '$ionicLoading',  RequestsService]);

    function RequestsService($http, $q, $ionicLoading){

        var base_url = 'http://172.16.2.109:3000';  // 'http://{YOUR SERVER}';

        function register(device_token){

            var deferred = $q.defer();
            $ionicLoading.show();

            $http.post(base_url + '/users/signup', {'name': "new user", 'email': "michaelfahmy", 'device_token': device_token})
                .success(function(response){

                    $ionicLoading.hide();
                    deferred.resolve(response);
                })
                .error(function(data){

                    $ionicLoading.hide();
                    deferred.reject();
                    alert("Registration Failed");
                });


            return deferred.promise;

        };


        return {
            register: register
        };
    }
})();