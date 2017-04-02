/**
 * Created by dulin on 2015/12/8.
 */
define([
    'angular',
    'app'
], function() {
    console.log('bootstrap');

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
    });

});