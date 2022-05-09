"use strict";
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
var d1 = makeDate(1212424);
var d2 = makeDate(5, 8, 2022);
// const d3 = makeDate(5, 8) // 报错
//  准则
// 在可能的情况下，总是倾向于使用联合类型的参数而不是重载参数
// ✅
function len1(x) {
    return x.length;
}
len1(Math.random() > 0.5 ? 'hello' : [1, 2, 3]);
function len(x) {
    return x.length;
}
var db = {
    filterUsers: function (filter) {
        var user1 = {
            admin: true
        };
        var user2 = {
            admin: false
        };
        return [user1, user2];
    }
};
db.filterUsers(function () {
    console.log(this);
    return this.admin;
});
