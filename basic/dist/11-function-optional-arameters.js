"use strict";
// [name]?: type
function getMethods1(methods) {
    var nMethods = methods || 'GET';
    return nMethods;
}
// [name]: type = defaultValue
function getMethods2(methods) {
    if (methods === void 0) { methods = 'GET'; }
    return methods;
}
// 回调函数中的可选参数
function myForEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        // callback(arr[i], i)
        callback(arr[i]);
    }
}
// index 为可选参数, i.toFixed报错
myForEach([1, 2, 3], function (a, i) {
    // i.toFixed() // 报错
    // i?.toFixed()
});
// 结论：回调函数尽可能不要使用可选参数。除非打算在不传递该参数下来调用这个函数。
