/**
 * Created by twy on 2017/5/31.
 */
define(['app'],function (app) {
    app.registerController('home',function ($scope,deps) {
        $scope.who='angular';
        console.log(deps);
    })
});