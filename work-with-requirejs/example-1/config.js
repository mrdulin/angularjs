/**
 * Created by dulin on 2015/12/8.
 */
(function(require) {

    require.config({

        urlArgs: "bust=" + (new Date()).getTime(),
        baseUrl: '../example-1',
        waitSeconds: 15,

        paths: {

            //lib
            angular: '../bower_components/angular/angular',
            route:  '../bower_components/angular-route/angular-route',
            text: '../bower_components/text/text',

            //app script
            app: 'app',
            aboutController: './about/about.controller',
            aboutService: './about/about.service',
            contactController: './contact/contact.controller',
            contactService: './contact/contact.service',
            homeController: './home/home.controller',
            homeService: './home/home.service',

            //common module dir
            directives: './directives',
            services: './services'

        },

        shim: {

            angular: {
                exports: 'angular'
            },

            route: {
                deps: ['angular']
            }

        },

        deps: [
            'bootstrap'
        ]

    });

}) (require);
