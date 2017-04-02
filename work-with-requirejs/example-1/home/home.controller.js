/**
 * Created by dulin on 2015/12/8.
 */
define([
    'app',
    'angular',
    'services/user.service'
], function() {

    angular
        .module('app')
        .controllerProvider.register('HomeController', HomeController);

    HomeController.$inject = ['$log', 'HomeService', 'UserService'];

    function HomeController($log, HomeService, UserService) {


        var vm = this;
        vm.content = 'This is home page';
        vm.name = '';
        vm.isLogin = UserService.isLogin;
        vm.getName = getName;

        vm.getName();
        function getName() {
            HomeService.getName().then(function(data) {
                vm.name = data;
            });
        }

    }
});