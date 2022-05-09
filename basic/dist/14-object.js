"use strict";
var person1 = {
    name: '',
    age: 10
};
var person2 = {
    name: '',
    age: 10
};
var person3 = {
    name: '',
    age: 10
};
function paintShape(_a) {
    var _b = _a.xPos, xPos = _b === void 0 ? 0 : _b, _c = _a.yPos, yPos = _c === void 0 ? 0 : _c;
    console.log(xPos);
    console.log(yPos);
}
paintShape({ xPos: 100 });
paintShape({ yPos: 100 });
paintShape({ xPos: 100, yPos: 100 });
var teacher = {
    name: 'xx',
    age: 19
};
// teacher.name = '' // 报错，只读属性无法修改
teacher.age++;
var myArray = ['1', '2'];
var value = myArray[0];
// ❌
// interface AddressWidthUnit {
//     name: string
//     postalCode: string
//     unit: string
// }
var address1 = {
    name: '',
    postalCode: ''
};
var address2 = {
    name: '',
    postalCode: '',
    unit: ''
};
var c = {
    name1: '1',
    name2: '2',
    name3: '3'
};
