/**
 * Created by dulin on 2015/11/3.
 */

define([
    'app'
], function() {

    angular
        .module('app')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: './views/home.tpl.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .when('/contact', {
                templateUrl: './views/contact.tpl.html',
                controller: 'ContactController',
                controllerAs: 'contact'
            })
            .when('/about', {
                templateUrl: './views/about.tpl.html',
                controller: 'AboutController',
                controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });

    }
});