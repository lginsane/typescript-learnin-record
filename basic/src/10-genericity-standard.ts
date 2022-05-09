// 定义泛型准则
// 1.在可能的情况下，尽量使用T本身, 而不是对其约束
// ✅
function firstElement1<T>(arr: T[]) {
    return arr[0]
}
// ❌
function firstElement2<T extends any[]>(arr: T) {
    return arr[0]
}
// e1: number
const e1 = firstElement1([1, 2, 3])
// e2: any
const e2 = firstElement2([1, 2, 3])


// 2.尽可能少的适用类型参数
// ✅
function filters1<T>(arr: T[], func: (arg: T) => boolean) {
    return arr.filter(func)
}
// ❌
function filters2<T, Func extends (arg: T) => boolean>(
    arr: T[],
    func: Func
) {
    return arr.filter(func)
}


// 3.如果一个类型参数只出现一次，考虑是否真的需要类型参数
// ✅
function greet1(str: string) {
    console.log(str)
}
// ❌
function greet2<T extends string>(str: T) {
    console.log(str)
}
