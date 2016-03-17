/**
 * Created by dulin on 2015/12/8.
 */
define([
    'angular',
    'route'
], function () {

    console.log('app');

    var app = angular.module('app', [
        'ngRoute'
    ]);

    angular
        .module('app')
        .config(config);

    config.$inject = ['$routeProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide'];

    function config($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

        app.controllerProvider = $controllerProvider;
        app.compileProvider = $compileProvider;
        app.routeProvider = $routeProvider;
        app.filterProvider = $filterProvider;
        app.provide = $provide;

        $routeProvider
            .when('/', {
                templateUrl: './home/home.tpl.html',
                resolve: {
                    deps: ['$q', '$rootScope', function($q, $rootScope) {
                        var deferred = $q.defer();

                        require(['homeController', 'homeService'], function() {
                            $rootScope.$apply(function() {
                                deferred.resolve();
                            });
                        });

                        return deferred.promise;
                    }]
                },
                controller: 'HomeController as home'
            })
            .when('/contact', {
                templateUrl: './contact/contact.tpl.html',
                resolve: {
                    deps: ['$q', '$rootScope', function($q, $rootScope) {
                        var deferred = $q.defer();

                        require([
                            'contactController',
                            'directives/nova.alert'
                        ], function() {
                            $rootScope.$apply(function() {
                                deferred.resolve();
                            });
                        });

                        return deferred.promise;
                    }]
                },
                controller: 'ContactController'
            })
            .when('/about', {
                templateUrl: './about/about.tpl.html',
                resolve: {
                    deps: ['$q', '$rootScope', function($q, $rootScope) {
                        var deferred = $q.defer();

                        require(['aboutController'], function() {
                            $rootScope.$apply(function() {
                                deferred.resolve();
                            });
                        });

                        return deferred.promise;
                    }]
                },
                controller: 'AboutController'
            })
            .otherwise({
                redirectTo: '/'
            })

    }

    return app;

});
