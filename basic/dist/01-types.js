"use strict";
// 字符串
var str = 'hello typescript';
// 数字
var num = 10;
// 布尔
var bool = true;
// 数组
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// null
var n = null;
// undefined
var un = undefined;
// void
function func() { }
// 元组Tuple
var t = [0, ''];
// 枚举enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
// 任意值any
var notSure = 4;
notSure = false;
// 永不存在的值Never
function error(message) {
    throw new Error(message);
}
// 类型断言：
var someValue = "this is a string";
var strLength1 = someValue.length;
// or
var strLength2 = someValue.length; // 推荐
// 唯一类型symbol
var firstName = Symbol('name');
// unknown 任意值 和 any 类似，不同的是unknown无法操作
function safeParse(s) {
    return JSON.parse(s);
}
var obj = safeParse(JSON.stringify([1]));
// obj.join('-') // 报错， 无法操作unknown类型的值
