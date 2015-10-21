(function(){

    angular.module('starter')
        .service('RequestsService', ['$http', '$q', '$ionicLoading',  RequestsService]);

    function RequestsService($http, $q, $ionicLoading){

        var base_url = '172.16.2.84:3000';  // 'http://{YOUR SERVER}';

        function register(device_token){

            var deferred = $q.defer();
            $ionicLoading.show();

            $http.post(base_url + '/users/signup', {
                'name': "Michael", 
                'email': "michaelfahmy1@gmail.com", 
                'device_token': device_token
            })
                .success(function(response){

                    $ionicLoading.hide();
                    deferred.resolve(response);
                })
                .error(function(data){
                    
                    deferred.reject();
                    alert("Failed Registration");
                });


            return deferred.promise;

        };


        return {
            register: register
        };
    }
})();