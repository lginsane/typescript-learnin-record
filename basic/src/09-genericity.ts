// 泛型函数

// 单个变量
function firstElement<T>(arr: T[]): T | undefined {
    return arr[0]
}

// firstElement<string>(['a', 'b', 'c'])
firstElement(['a', 'b', 'c'])
// firstElement<number>([1, 2, 3])
firstElement([1, 2, 3])
// firstElement<undefined>([])
firstElement([])

// 多个变量
function mapParseInt<T1, T2>(arr: T1[], func: (arg: T1) => T2): T2[] {
    return arr.map(func)
}

// mapParseInt<string, number>(['1', '2', '3'], (arg: string): number => parseInt(arg))
mapParseInt(['1', '2', '3'], (arg) => parseInt(arg))


// 泛型约束 限制条件 extends 限制属性
function longest<T extends { length: number }> (a: T, b: T): T {
    if (a.length > b.length) {
        return a
    } else {
        return b
    }
}
const longestArray = longest([1, 2], [1, 2, 3])
const longestStr = longest('123', '1234')
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
function combine<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2)
}

combine(['1'], ['2'])
combine([1], [2])
// 指定 T 为 string 或 number
combine<string | number>(['1'], [2])


// 泛型对象
interface Box<T> {
    content: T
}
let b1: Box<string> = {
    content: ''
}
let b2: Box<number> = {
    content: 10
}

interface AppleBox {
    name: string
}
let b3: Box<AppleBox> = {
    content: {
        name: ''
    }
}

// 扩展
type OrNull<T> = T | null
let nString1: OrNull<string> = ''
let nString2: OrNull<string> = null

type OneOrMany<T> = T | T[]
let number1: OneOrMany<number> = 1
let numberArray1: OneOrMany<number> = [1]

type OneOrManyOrNull<T> = OrNull<OneOrMany<T>>
let bool1: OneOrManyOrNull<boolean> = null
let bool2: OneOrManyOrNull<boolean> = true
let bool3: OneOrManyOrNull<boolean> = [true]

// 泛型函数多种定义方法
function identity<T>(arg: T): T {
    return arg
}

let myIdentity1: <T>(arg: T) => T = identity
let myIdentity2: <I>(arg: I) => I = identity
let myIdentity3: { <T>(arg: T): T } = identity

interface GenericIdentityFn1 {
    <T>(arg: T): T
}
interface GenericIdentityFn2<T> {
    (arg: T): T
}
let myIdentity4: GenericIdentityFn1 = identity
let myIdentity5: GenericIdentityFn2<string> = identity


// 泛型类
class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
}

let myGeneric1 = new GenericNumber<number>()
myGeneric1.zeroValue = 10
myGeneric1.add = (x, y) => {
    return x + y
}

let myGeneric2 = new GenericNumber<string>()
myGeneric2.zeroValue = '10'
myGeneric2.add = (x, y) => {
    return x + y
}

// 泛型约束 keyof 约束属于对象的属性
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}
let x = {
    a: 1,
    b: 2
}
getProperty(x, 'a')
// getProperty(x, 'c') // 报错

// 泛型类类型
// function create<T>(c: { new (): T }): T {
//     return new c()
// }

class BeeKeeper {
    hasMask: boolean = true
}
class ZooKeeper {
    nameTag: string = 'Mikle'
}
class Animal {
    numLength: number = 4
}
class Ben extends Animal {
    keeper: BeeKeeper = new BeeKeeper()
}
class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper()
}
type C<T> = {
    new (): T
}
function createInstance<T extends Animal>(c: C<T>): T {
    return new c()
}
createInstance(Lion).keeper.nameTag
createInstance(Ben).keeper.hasMask
// createInstance(BeeKeeper) // 报错
 