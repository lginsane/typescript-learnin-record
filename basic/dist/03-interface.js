"use strict";
function printPoint(pt) {
    console.log(pt.x);
    console.log(pt.y);
}
printPoint({
    x: 1,
    y: 2
});
var userInfo = {
    name: ''
    // avatar: ''
};
var userInfo2 = {
    name: ''
};
var squareConfig = {
    color: '',
    width: 10,
    other: false
};
var testFn = function (x, y) {
    return x + y > 1;
};
testFn(1, 2);
var arr = ['1', '2'];
var parentObj = {
    name: '父亲'
};
var childrenObj = {
    name: '儿子',
    age: 1
};
