"use strict";
function createLabel(nameOrId) {
    if (typeof nameOrId === 'number') {
        return {
            id: nameOrId
        };
    }
    else {
        return {
            name: nameOrId
        };
    }
}
// let dogContent: DogMessageContent = 'error' // 报错
var dogContent = 'error';
var sOrN1 = [1, 2];
var sOrN2 = ['1', '2'];
var sOrN4 = ['1', 2];
