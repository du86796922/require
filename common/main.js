/**
 * Created by twy on 2017/5/30.
 */
require.config({
    baseUrl: './',
    //所有模块的查找根路径
    //不设置时默认为main.js所在路径
    //要为其设置路径，则其路径是相对于requireJS所在的HTML页面的路径而定义的
    paths: {
        //指定各个模块的加载路径
        jquery: ['https://code.jquery.com/jquery-3.2.1', 'jquery-3.2.1'],
        //允许数组值,用以备选
        //键名jquery不可更改，因为其已经定义,是有主的
        //可以采用挖墙脚的方式更改为可自由命名的、无主的
        testAdd: 'test1',
        testSubtract: 'test1',
        test2: 'test2',
        test3: 'test3',
        report: 'report',
        angular: 'common/angular',
        'angular-ui-router': 'common/angular-ui-router'
    },
    shim: {
        //为那些没有使用define()来声明依赖关系的
        //并非所有的非amd规范的都要在这里配置
        //AMD规范文档：https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88)
        test2: ['jquery'],//简写
        test3: {
            exports: 'a',
            //将模块的方法导出,将不是暴露在window下的、需要使用的导出
            //只导出单一的，可直接使用exports，而名字必须是你要导出的方法名，是存在的
            init: function () {
                return {
                    mul: testMultiplication,
                    div: testDivision
                }
            }
            //如果想导出多个方法，就需要用到init，此时exports的名字可以随意，返回的对象的键名也可以随意，但键值必须是存在的你要导出的方法名
        },
        'angular-ui-router': {deps: ['angular']/*,exports:'ui-route'*/},//不可重复导出
        angular: {exports: 'angular'},
        report:['css!https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min']//动态引入方法
    },
    map: {
        //根据调用主体的不同去加载对应的模块
        '*': {
            'css': 'common/css' //第三方插件，支持css动态引入
        }
    },
    nodeIdCompat:0//在放弃加载一个脚本之前等待的秒数,设为0禁用等待超时,默认为7秒
    //中文文档http://requirejs.cn
    //官方文档http://requirejs.org
});

/*require(['test2'], function (t) {
    // console.log(t.mul(3, 9), t.div(9, 3));
    // console.log(testMultiplication(3,9));//同样能正常运行
    //require不支持按顺序加载，只保证文件加载完成之后才会执行指定的回调
});*/
//require的是模块，不是js文件，加载js文件也只是为了找到这个模块
//可直接在数组中写路径以加载js文件

require(['report']);