import hello from './hello'
hello() // hello world

import threeSum, { TYPE, sum } from './maths'
console.log(TYPE)
console.log(sum(1, 2))
console.log(threeSum(1, 2, 3))

// as 语法
import * as Maths from './maths'
console.log(Maths.sum(1, 2))
console.log(Maths.default(1, 2, 3))

import type { IDs, IDOne } from './animal'

type IdOrIds = IDs | IDOne
const id100: IdOrIds = {
    ids: [100]
}
const id200: IdOrIds = {
    id: 100
}
