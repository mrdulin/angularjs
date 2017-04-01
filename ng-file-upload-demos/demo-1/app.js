/**
 * Created by Administrator on 2016/4/24.
 */
angular.module('demo', ['ngFileUpload']);

(function () {
    angular
        .module('demo')
        .controller('DemoController', DemoController);

    DemoController.$inject = ['$log', '$scope', 'Upload', '$timeout'];

    function DemoController($log, $scope, Upload, $timeout) {

        var ctrl = this;
        var width;

        ctrl.file = null;
        ctrl.progressPercentage = '';
        ctrl.urlMap = null;

        ctrl.submit = submit;
        ctrl.reset = reset;


        function reset() {
            ctrl.file = null;
            ctrl.progressPercentage = '';
        }

        function submit(form) {
            if (form.file.$valid && ctrl.file) {
                $log.info(ctrl.file);
                upload();
            } else {
                return false;
            }
        }

        function upload() {
            var fileName;

            Upload.upload({
                url: '../data/upload.json',
                data: {file: ctrl.file}
            }).then(function (resp) {
                $log.log('uploaded. Response: ' + resp.data.data);

                if (!ctrl.urlMap) {
                    ctrl.urlMap = {};
                }
                width = 200 + Object.keys(ctrl.urlMap).length;
                fileName = resp.config.data.file.name;

                //文件名不能重复
                ctrl.urlMap[fileName] = 'https://unsplash.it/' + width + '/200';

                $log.info(ctrl.urlMap);

                $timeout(function () {
                    reset();
                }, 1000)

            }, function (resp) {
                console.log('Error status: ' + resp.status);
            }, function (evt) {
                ctrl.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            });
        }
    }
})();