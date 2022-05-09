"use strict";
// 泛型函数
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
// 单个变量
function firstElement(arr) {
    return arr[0];
}
// firstElement<string>(['a', 'b', 'c'])
firstElement(['a', 'b', 'c']);
// firstElement<number>([1, 2, 3])
firstElement([1, 2, 3]);
// firstElement<undefined>([])
firstElement([]);
// 多个变量
function mapParseInt(arr, func) {
    return arr.map(func);
}
// mapParseInt<string, number>(['1', '2', '3'], (arg: string): number => parseInt(arg))
mapParseInt(['1', '2', '3'], function (arg) { return parseInt(arg); });
// 泛型约束 限制条件 extends 限制属性
function longest(a, b) {
    if (a.length > b.length) {
        return a;
    }
    else {
        return b;
    }
}
var longestArray = longest([1, 2], [1, 2, 3]);
var longestStr = longest('123', '1234');
// const notOk = longest(10, 100) // 报错，原因：number 类型没有length属性
// 使用受限值 
// function minimumLength<T extends { length: number }>(obj: T, minimum: number): T {
//     if (obj.length >= minimum) {
//         return obj
//     } else {
//         return { length: minimum }
//     }
// }
// const arr = minimumLength([1, 2, 3], 6)
// arr.slice(0)
// 指定类型参数
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
combine(['1'], ['2']);
combine([1], [2]);
// 指定 T 为 string 或 number
combine(['1'], [2]);
var b1 = {
    content: ''
};
var b2 = {
    content: 10
};
var b3 = {
    content: {
        name: ''
    }
};
var nString1 = '';
var nString2 = null;
var number1 = 1;
var numberArray1 = [1];
var bool1 = null;
var bool2 = true;
var bool3 = [true];
// 泛型函数多种定义方法
function identity(arg) {
    return arg;
}
var myIdentity1 = identity;
var myIdentity2 = identity;
var myIdentity3 = identity;
var myIdentity4 = identity;
var myIdentity5 = identity;
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGeneric1 = new GenericNumber();
myGeneric1.zeroValue = 10;
myGeneric1.add = function (x, y) {
    return x + y;
};
var myGeneric2 = new GenericNumber();
myGeneric2.zeroValue = '10';
myGeneric2.add = function (x, y) {
    return x + y;
};
// 泛型约束 keyof 约束属于对象的属性
function getProperty(obj, key) {
    return obj[key];
}
var x = {
    a: 1,
    b: 2
};
getProperty(x, 'a');
// getProperty(x, 'c') // 报错
// 泛型类类型
// function create<T>(c: { new (): T }): T {
//     return new c()
// }
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
        this.hasMask = true;
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
        this.nameTag = 'Mikle';
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.numLength = 4;
    }
    return Animal;
}());
var Ben = /** @class */ (function (_super) {
    __extends(Ben, _super);
    function Ben() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keeper = new BeeKeeper();
        return _this;
    }
    return Ben;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keeper = new ZooKeeper();
        return _this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nameTag;
createInstance(Ben).keeper.hasMask;
// createInstance(BeeKeeper) // 报错
