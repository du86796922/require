/**
 * Created by twj94 on 2017/5/31.
 */

define("app", ['angular','angular-ui-router'], function (e) {
    return e.module('app',[]);
});

define("test", ["angular","app"], function (e) {
    console.log(6);
    e.element(document).ready(function () {
        e.bootstrap(document, ["app"])
    })
});

require(['test'], function (b) {

});