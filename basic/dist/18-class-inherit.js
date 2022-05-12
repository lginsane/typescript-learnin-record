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
var Sonnar = /** @class */ (function () {
    function Sonnar() {
    }
    Sonnar.prototype.ping = function () { };
    return Sonnar;
}());
var Sonnar2 = /** @class */ (function () {
    function Sonnar2() {
    }
    Sonnar2.prototype.ping = function () { };
    Sonnar2.prototype.pong = function () { };
    return Sonnar2;
}());
var QClass = /** @class */ (function () {
    function QClass() {
        this.x = 1;
        // y = 1
    }
    return QClass;
}());
// extends 类继承类
// 子类可以使用父类的属性和方法
var W = /** @class */ (function () {
    function W() {
    }
    W.prototype.move = function () {
        console.log('W-move');
    };
    return W;
}());
var E = /** @class */ (function (_super) {
    __extends(E, _super);
    function E() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    E.prototype.woof = function (times) {
        for (var i = 0; i < times; i++) {
            console.log("woof" + i);
        }
    };
    return E;
}(W));
var e = new E();
e.move();
e.woof(2);
// 重写类方法
// super指向父类
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.greet = function () {
        console.log('base greet');
    };
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived.prototype.greet = function (str) {
        if (str === undefined) {
            _super.prototype.greet.call(this);
        }
        else {
            console.log('derived greet');
        }
    };
    return Derived;
}(Base));
var d11 = new Derived();
d11.greet();
d11.greet('123');
// 类初始化顺序
// 1.基类的属性初始化
// 2.基类的构造函数执行
// 3.派生类的属性初始化
// 4.派生类的构造函数执行
var Order = /** @class */ (function () {
    function Order() {
        this.name = 'order';
        console.log(this.name); // order
    }
    return Order;
}());
var Order1 = /** @class */ (function (_super) {
    __extends(Order1, _super);
    function Order1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'order1';
        return _this;
    }
    return Order1;
}(Order));
var o = new Order1();
console.log(o.name); // order1
// 继承内置类型
var MsgError = /** @class */ (function (_super) {
    __extends(MsgError, _super);
    function MsgError(msg) {
        var _this = _super.call(this, msg) || this;
        // 明确的设置类型
        // 不设置类型在es5环境下，报错 msgError.sayHello is not a function
        Object.setPrototypeOf(_this, MsgError.prototype);
        return _this;
    }
    MsgError.prototype.sayHello = function () {
        return "hello " + this.message;
    };
    return MsgError;
}(Error));
var msgError = new MsgError('world');
console.log(msgError.sayHello());
// 明确的设置类型为true，否则为false
console.log(msgError instanceof MsgError);
