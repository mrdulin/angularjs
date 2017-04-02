/**
 * Created by Administrator on 2016/4/24.
 */
angular.module('demo', ['ngFileUpload']);

(function () {
    angular
        .module('demo')
        .controller('DemoController', DemoController);

    DemoController.$inject = ['$log', '$scope', 'Upload', '$timeout', '$q'];

    function DemoController($log, $scope, Upload, $timeout, $q) {

        var ctrl = this;
        var width = 200;
        var uploadUrl = '../data/upload.json';

        ctrl.files = null;
        ctrl.progressPercentage = '';
        ctrl.urlMap = null;

        ctrl.submit = submit;
        ctrl.reset = reset;


        function reset() {
            ctrl.files = null;
            ctrl.progressPercentage = '';
        }

        function submit(form) {
            var fileCount = ctrl.files.length;
            if (form.file.$valid && fileCount) {
                $log.info(ctrl.files);
//                    upload(fileCount);
                loopUpload(fileCount);
            } else {
                return false;
            }
        }

        //1个上传请求
        function upload(fileCount) {
            var fileName, file;

            //HTML5的方式，可以一次将选择的所有文件发送给服务器端，如下
            Upload.upload({
                url: uploadUrl,
                data: {file: ctrl.files}
            }).then(function (resp) {

                $log.info(resp);

                if (!ctrl.urlMap) {
                    ctrl.urlMap = {};
                }

                for (var i = 0; i < fileCount; i++) {
                    width += i;
                    file = resp.config.data.file[i];
                    fileName = file.name;
                    ctrl.urlMap[fileName] = 'https://unsplash.it/' + width + '/200';
                }

                //模拟
                $timeout(function () {
                    reset();
                }, 1000);

            }, function (resp) {
                $log.log('Error status: ' + resp.status);
            }, function (evt) {
                ctrl.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            });

        }


        //3个上传请求
        //非HTML5上传方式，多个文件分别发送
        function loopUpload(fileCount) {
            var file, fileName, promises = [], promise, resp;

            for (var i = 0; i < fileCount; i++) {
                file = ctrl.files[i];

                promise = Upload.upload({
                    url: uploadUrl,
                    data: {file: file}
                });

                promises.push(promise);
            }

            var allPromise = $q.all(promises);

            allPromise.then(function (resps) {

                if (!ctrl.urlMap) {
                    ctrl.urlMap = {};
                }

                for (var j = 0; j < resps.length; j++) {
                    resp = resps[j];
                    file = resp.config.data.file;
                    width += j;
                    fileName = file.name;
                    ctrl.urlMap[fileName] = 'https://unsplash.it/' + width + '/200';
                }

                $log.info(ctrl.urlMap);

                //模拟
                $timeout(function () {
                    reset();
                }, 2000);

            }, function (resp) {
                $log.log('Error status: ' + resp.status);
            }, function (evt) {
                ctrl.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            });

        }
    }
})();