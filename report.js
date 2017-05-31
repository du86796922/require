/**
 * Created by twj94 on 2017/5/31.
 */
define("route",['app'],function (app) {
    app.config(function ($controllerProvider,$urlRouterProvider,$stateProvider) {
        app.registerController = $controllerProvider.register;//angular API
        app.loadJs = function (js) {
            return function ($rootScope, $q) {
                var def = $q.defer(), //使用$q的defer()方法创建一个deferred对象
                    deps = [];
                angular.isArray(js) ? (deps = js) : deps.push(js);//转成数组供require消遣
                require(deps, function () {
                    $rootScope.$apply(function () {
                        def.resolve(12);//deferred对象提供三个方法
                        // resolve()：解决,reject()：拒绝,notify()：执行状态
                    });
                });
                return def.promise;//返回promise对象
                //promise是非常好的异步实现，是es6的语法，不错的参考https://segmentfault.com/a/1190000002788733
            };
        };

        console.log(app.loadJs('home'));

        $urlRouterProvider.when('', '/home');

        $stateProvider.state('home', {
            url: '/home',
            template: '<h1>welcome {{who}}!</h1>',
            controller: 'home',
            resolve: {deps: app.loadJs('home')}//利用预加载机制：如果有promise，则必须是解决了并解析为一个值才会实例化
        })
    })
});

define("app", ['angular','angular-ui-router'], function (e) {
    return e.module('app',['ui.router']);
});

define("test", ["angular","app","route"], function (e) {
    e.element(document).ready(function () {
        e.bootstrap(document, ["app"])//bootstrap是angular下的方法，手动启动angular应用
    })
});

require(['test'], function (b) {

});
//文件虽然载入但未被require的模块代码并没有开始执行，require是唯一可使amd模块执行的命令