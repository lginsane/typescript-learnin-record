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
// 类  包括类属性、readonly、构造器、方法、Getters/Setters、索引签名
// 类属性
var Point100 = /** @class */ (function () {
    function Point100() {
        this.x = 0;
        this.y = 0;
    }
    return Point100;
}());
var p11 = new Point100();
p11.x = 10;
p11.y = 10;
// 构造函数声明
var Point101 = /** @class */ (function () {
    function Point101(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point101;
}());
var p12 = new Point101(10, 10);
// readonly
// 两种声明方式。1.定义时声明初始化 2.constructor 中初始化
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.name = 'hello';
        this.name = 'world';
    }
    return Greeter;
}());
var G1 = new Greeter();
// G1.name = '' // 报错，readonly是无法修改
// 构造器1.构造函数不能有类型参数 2.构造函数不能有返回类型函数
var Point200 = /** @class */ (function () {
    // constructor(): void {} // 报错，构造函数不能有返回类型函数
    function Point200(x, y) {
        console.log(x);
        console.log(y);
    }
    return Point200;
}());
// 类方法
var Point201 = /** @class */ (function () {
    function Point201() {
        this.name = '';
    }
    Point201.prototype.updateName = function (str) {
        this.name = str;
    };
    return Point201;
}());
// Getters/Setters
// 1.如果只有get没有set，该属性自动为只读属性
// 2.如果没有指定setter参数类型，它将从getter返回类型中推断出来
// 3.访问器和设置器必须有相同的的成员可见性
var D = /** @class */ (function () {
    function D() {
        this._length = 0;
    }
    Object.defineProperty(D.prototype, "length", {
        get: function () {
            return this._length;
        },
        // val: number
        set: function (val) {
            var num = Number(val);
            // 是否为数字
            if (!Number.isFinite(num)) {
                this._length = 0;
                return;
            }
            this._length = num;
        },
        enumerable: false,
        configurable: true
    });
    return D;
}());
var d = new D();
console.log(d.length); // 0
d.length = 100;
console.log(d.length); // 100
// 索引签名
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.x = true;
    }
    MyClass.prototype.check = function (s) {
        return this[s];
    };
    return MyClass;
}());
// 类表达式
var someClass = /** @class */ (function () {
    function class_1(value) {
        this.content = value;
    }
    return class_1;
}());
var m = new someClass('hello world');
console.log(m.content);
// 抽象类 abstract
// 不能 new 抽象类
var Base4 = /** @class */ (function () {
    function Base4() {
    }
    Base4.prototype.printName = function () {
        console.log(this.getName());
    };
    return Base4;
}());
// const b = new Base4() // 报错
var Derived4 = /** @class */ (function (_super) {
    __extends(Derived4, _super);
    function Derived4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived4.prototype.getName = function () {
        return 'name';
    };
    return Derived4;
}(Base4));
var der = new Derived4();
der.getName();
der.printName();
function Derived5(ctor) {
    var instance = new ctor();
    instance.getName();
    instance.printName();
}
Derived5(Derived4);
