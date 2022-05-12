"use strict";
// 类运行时的this
var MyClass10 = /** @class */ (function () {
    function MyClass10() {
        this.name = 'MyClass';
    }
    MyClass10.prototype.getName = function () {
        console.log(this);
        return this.name;
    };
    return MyClass10;
}());
var myC = new MyClass10();
console.log('myC: ', myC.getName());
var nObj = {
    name: 'obj',
    getName: myC.getName
};
console.log('obj:', nObj.getName());
// 基于类型守卫(is)的this
var Box10 = /** @class */ (function () {
    function Box10() {
    }
    Box10.prototype.hasValue = function () {
        return this.value !== undefined;
    };
    return Box10;
}());
var box10 = new Box10();
box10.value = 1;
console.log(box10.hasValue()); // true
