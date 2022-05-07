"use strict";
// 交叉类型
// 联合类型
var union = 1;
union = '';
function printId(id) {
    console.log(id);
}
printId(1);
printId('1');
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
