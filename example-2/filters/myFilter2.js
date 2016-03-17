/**
 * Created by dulin on 2015/11/4.
 */
define([
    './module'
], function(filterModule) {
    filterModule.filter('myFilter2', [function() {

        return function() {

        }
    }])
});