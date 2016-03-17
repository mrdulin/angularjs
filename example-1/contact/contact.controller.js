/**
 * Created by dulin on 2015/12/8.
 */
define([
    'app',
    'angular'
], function() {

    angular.module('app').controllerProvider.register('ContactController', ContactController);

    ContactController.$inject = ['$log', '$scope'];

    function ContactController($log, $scope) {

        $scope.vm = {};
        $scope.vm.content = 'This is contact page';


    }
});