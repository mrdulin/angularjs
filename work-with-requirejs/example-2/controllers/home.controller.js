/**
 * Created by dulin on 2015/11/4.
 */
define([
    './module'
], function() {
    angular
        .module('app.controllers')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log'];

    function HomeController($log) {

        var vm = this;

        vm.content = 'home';
    }
});