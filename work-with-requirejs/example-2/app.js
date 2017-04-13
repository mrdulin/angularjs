define([
    'angular',
    'route',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (angular) {

    return angular.module('app', [
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services',
        'ngRoute'
    ]);

});