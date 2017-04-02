/**
 * Created by dulin on 2015/11/4.
 */
define([
    './module'
], function() {

    angular
        .module('app.controllers')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$log'];

    function ContactController($log) {

        var vm = this;

        vm.content = 'contact';
    }
});