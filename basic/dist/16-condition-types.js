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
// ❌
// function createLabel(id: number): IDLabel
// function createLabel(name: string): NameLabel
// function createLabel(nameOrId: number | string): IDLabel | NameLabel {
// return 
// }
