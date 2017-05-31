/**
 * Created by twy on 2017/5/30.
 */
// define(['testAdd'],function (add) {
//     $('#box1').html(add(1,5));
// });

define(function (require) {
    //像cmd一样就近加载，但只限于在定义时没有声明依赖时
    var subtract=require('testSubtract');
    $('#box2').html(subtract(9,6));
});
//只加载第一个