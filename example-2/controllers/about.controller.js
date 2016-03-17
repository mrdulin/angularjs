/**
 * Created by dulin on 2015/11/4.
 */
define([
    './module'
], function() {

    angular
        .module('app.controllers')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$log'];

    function AboutController($log) {

        var vm = this;

        vm.content = 'about';
    }

});