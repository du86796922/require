/**
 * Created by twy on 2017/5/30.
 */
require.config({
    baseUrl:'./',
    //所有模块的查找根路径
    //不设置时默认为main.js所在路径
    //要为其设置路径，则其路径是相对于requireJS所在的HTML页面的路径而定义的
    paths:{
        //指定各个模块的加载路径
        jquery:['https://code.jquery.com/jquery-3.2.1','jquery-3.2.1'],
        //允许数组值,用以备选
        //键名jquery不可更改，因为其已经定义
        testAdd:'test1',
        testSubtract:'test1',
        test2:'test2'
    },
    shim:{
        //为那些没有使用define()来声明依赖关系、设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置
        //
        test2:{deps:['jquery']}
        // testMultiplication:{exports:'testMultiplicatio'}
    }
});

require(['test2']);
//require的是模块，不是js文件，加载js文件也只是为了找到这个模块
//可直接在数组中写路径以加载js文件