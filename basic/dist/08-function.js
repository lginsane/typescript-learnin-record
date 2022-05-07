"use strict";
function greeter(fn) {
    fn('hello world');
}
var getStr = function (str) {
    console.log(str);
};
greeter(getStr);
function doSomething(fn) {
    console.log(fn.description + '-' + fn(6));
}
function fn1(n) {
    return true;
}
fn1.description = 'description';
doSomething(fn1);
// 构造签名
