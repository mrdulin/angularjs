/**
 * Created by Administrator on 2016/4/24.
 */
angular.module('demo', ['ngFileUpload']);

(function () {
    angular
        .module('demo')
        .controller('DemoController', DemoController);

    DemoController.$inject = ['$log'];

    function DemoController($log) {

        var vm = this;

        angular.extend(vm, {
            upload: upload
        });

        function upload($file) {
            $log.info($file);
        }
    }
})();