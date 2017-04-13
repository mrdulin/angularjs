/**
 * Created by dulin on 2015/12/8.
 */
define([
    'app',
    'angular'
], function() {

    angular
        .module('app')
        .provide.factory('UserService', UserService);

    UserService.$inject = ['$log', '$q'];

    function UserService($log, $q) {

        var service = {
            isLogin: false
        };
        return service;
    }
});