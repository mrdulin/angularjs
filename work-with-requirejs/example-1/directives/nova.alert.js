/**
 * Created by dulin on 2015/12/8.
 */
define([
    'app',
    'angular'
], function() {

    angular
        .module('app')
        .compileProvider.directive('alert', alert);

    alert.$inject = ['$log', '$window'];

    function alert($log, $window) {

        return {
            restrict: 'EA',
            replace: true,
            template: '<button ng-click="alert()">alert</button>',
            link: link
        };

        function link(scope, element, attr) {

            scope.alert = function() {
                $window.alert('angular + requirejs');
            }
        }
    }
});