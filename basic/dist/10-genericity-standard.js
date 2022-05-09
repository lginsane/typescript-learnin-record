"use strict";
// 定义泛型准则
// 1.在可能的情况下，尽量使用T本身, 而不是对其约束
// ✅
function firstElement1(arr) {
    return arr[0];
}
// ❌
function firstElement2(arr) {
    return arr[0];
}
// e1: number
var e1 = firstElement1([1, 2, 3]);
// e2: any
var e2 = firstElement2([1, 2, 3]);
// 2.尽可能少的适用类型参数
// ✅
function filters1(arr, func) {
    return arr.filter(func);
}
// ❌
function filters2(arr, func) {
    return arr.filter(func);
}
// 3.如果一个类型参数只出现一次，考虑是否真的需要类型参数
// ✅
function greet1(str) {
    console.log(str);
}
// ❌
function greet2(str) {
    console.log(str);
}
