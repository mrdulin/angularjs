define([
    'angular',
    'app',
    './router'
], function(angular) {

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
    });

});