"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类的可见性修饰符
// public 任意可见
// protected 当前类和子类可见，派生类不可见
// private 当前类可见，子类和派生类不可见
var Greeter300 = /** @class */ (function () {
    function Greeter300() {
    }
    Greeter300.prototype.greet = function () {
        console.log('public');
    };
    Greeter300.prototype.sayHello = function () {
        this.greet();
        this.getName();
        this.getId();
    };
    Greeter300.prototype.getName = function () {
        console.log('protected');
    };
    Greeter300.prototype.getId = function () {
        console.log('private');
    };
    return Greeter300;
}());
var c300 = new Greeter300();
c300.greet();
c300.sayHello();
// c300.getName() // 报错，protected 派生类不可见
// c300.getId() // 报错，private 派生类不可见
var GreeterChild = /** @class */ (function (_super) {
    __extends(GreeterChild, _super);
    function GreeterChild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GreeterChild.prototype.cGreet = function () {
        _super.prototype.greet.call(this);
        _super.prototype.getName.call(this);
        // super.getId() // 报错，private 子类不可见
    };
    return GreeterChild;
}(Greeter300));
var gC = new GreeterChild();
gC.cGreet();
// 参数属性
var Params = /** @class */ (function () {
    function Params(x) {
        this.x = x;
    }
    return Params;
}());
var p = new Params(1);
console.log(p.x);
