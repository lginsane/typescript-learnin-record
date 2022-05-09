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
// 构造签名 (调用签名加new)
var Ctor = /** @class */ (function () {
    function Ctor(s) {
        this.s = s;
    }
    return Ctor;
}());
function fn(ctor) {
    return new ctor('hello');
}
var f = fn(Ctor);
console.log(f.s); // hello
function fn11(data) {
    var d = new data('2022-05-08');
    var n = data(100);
}
