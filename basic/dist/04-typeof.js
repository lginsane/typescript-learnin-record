"use strict";
// typeof 判断基础类型
// object、string、number、bigint、boolean、symbol、undefined、function
function padLeft(padding, input) {
    if (typeof padding === 'object') {
        return padding.join(',') + input;
    }
    else {
        return padding + input;
    }
}
// null 为 object
function printAll(strings) {
    if (strings && typeof strings === 'object') {
        for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
            var s = strings_1[_i];
            console.log(s);
        }
    }
    else if (typeof strings === 'string') {
        console.log(strings);
    }
    else {
        // ...
    }
}
