/**
 * Created by dulin on 2015/12/8.
 */
define([
    'app',
    'angular'
], function() {

    angular
        .module('app')
        .provide.provider('HomeService', HomeService);

    function HomeService() {

        this.$get = $get;

        $get.$inject = ['$timeout', '$http'];

        function $get($timeout, $http) {


            var service = {
                getName: getName
            };
            return service;

            function getName() {
                return $timeout(function() {
                    return 'novaline';
                }, 1000);
            }
        }
    }
});