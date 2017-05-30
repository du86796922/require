/**
 * Created by twy on 2017/5/30.
 */

//define(id?: String, dependencies?: String[], factory: Function|Object);
//如果没有指定 dependencies，那么它的 `默认值` 是 ["require", "exports", "module"]
define('testAdd',[],function () {
    console.log(6);
    return function (a, b) {
        return a+b;
    }
});

define('testSubtract',[],function () {
    console.log(9);
    return function (a, b) {
        return a-b;
    }
});
