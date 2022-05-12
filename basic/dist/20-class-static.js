"use strict";
// static 类的静态成员
// 1.特殊的静态名称不安全，如name、length、call等
// 2.typescript没有静态类的概念，因为有函数和普通对象代替它
var MyClass1 = /** @class */ (function () {
    function MyClass1() {
    }
    MyClass1.printX = function () {
        console.log(MyClass1.x);
    };
    MyClass1.x = 10;
    return MyClass1;
}());
console.log(MyClass1.x);
MyClass1.printX();
// 1.特殊的静态名称不安全，如name、length、call等
var S1 = /** @class */ (function () {
    function S1() {
    }
    return S1;
}());
// 2.typescript没有静态类的概念，因为有函数和普通对象代替它
var MyStaticClass = /** @class */ (function () {
    function MyStaticClass() {
    }
    MyStaticClass.doSomething = function () { };
    return MyStaticClass;
}());
// 函数和普通对象代替
function doSomething() { }
var myObject = {
    doSomething: function () { }
};
// static 区块
// ECMAScript2015 之上版本可使用
// class Foo {
//     static #count = 0
//     get count() {
//         return Foo.#count
//     }
// }
// 泛型类，不能为静态成员使用泛型类型
var MyStaticClass1 = /** @class */ (function () {
    function MyStaticClass1() {
    }
    return MyStaticClass1;
}());
