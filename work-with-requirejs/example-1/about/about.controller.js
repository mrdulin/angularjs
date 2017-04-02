/**
 * Created by dulin on 2015/12/8.
 */
define([
    'app'
], function() {

    angular.module('app').controllerProvider.register('AboutController', AboutController);

    AboutController.$inject = ['$log', '$scope'];

    function AboutController($log, $scope) {

        $scope.vm = {};
        $scope.vm.content = 'This is about page';

    }
});