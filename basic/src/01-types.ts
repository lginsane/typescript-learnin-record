// 字符串
let str: string = 'hello typescript'
// 数字
let num: number = 10
// 布尔
let bool: boolean = true
// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
// null
let n: null = null
// undefined
let un: undefined = undefined
// void
function fn(): void {}
// 元组Tuple
let t: [number, string] = [0, '']
// 枚举enum
enum Color {
    Red = 1,
    Green,
    Blue
}
// 任意值any
let notSure: any = 4
notSure = false
// 永不存在的值Never
function error(message: string): never {
    throw new Error(message)
}
// 类型断言：
let someValue: any = "this is a string";

let strLength1: number = (<string>someValue).length;
// or
let strLength2: number = (someValue as string).length;// 推荐


// 唯一类型symbol
let firstName: symbol = Symbol('name')
