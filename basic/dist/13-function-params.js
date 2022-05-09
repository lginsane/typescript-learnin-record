"use strict";
// 展开运算符 ...
// 函数形参
function multiply(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (x) { return n * x; });
}
multiply(10, 1, 2, 3, 4); // [10, 20, 30, 40]
// 数组实惨
var arr11 = [1, 2, 3];
var arr12 = [4, 5, 6];
arr11.push.apply(arr11, arr12); // [1, 2, 3, 4, 5, 6]
var args1 = [8, 5];
var args2 = [8, 5]; // 元组
var args3 = [8, 5];
// Math.atan2(...args1) // 报错
Math.atan2.apply(Math, args2);
Math.atan2.apply(Math, args3);
function sum(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
sum({
    a: 10,
    b: 9,
    c: 8
});
