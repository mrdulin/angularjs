/**
 * Created by dulin on 2015/11/3.
 */

(function (require) {

    var config = {

        baseUrl: '../example-2',
        urlArgs: "bust=" + (new Date()).getTime(),
        waitSecond: 15,

        paths: {

            angular: "../bower_components/angular/angular",
            route: '../bower_components/angular-route/angular-route'

        },


        shim: {

            angular: {
                exports: 'angular'
            },
            route: ['angular']
        },

        deps: [
            './bootstrap'
        ]
    };


    require.config(config);

})(require);



