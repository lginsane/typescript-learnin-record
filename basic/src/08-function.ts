// 函数类型表达式
type GreetFunction = (a: string) => void
function greeter(fn: GreetFunction) {
    fn('hello world')
}
interface FnType {
    (str: string): void
}
const getStr: FnType = function(str: string): void {
    console.log(str)
}
greeter(getStr)


// 调用签名
type DescribableFunction = {
    description: string
    (someAge: number): boolean
}
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + '-' + fn(6))
}
function fn1(n: number): boolean {
    return true
}
fn1.description = 'description'
doSomething(fn1)


// 构造签名 (调用签名加new)
class Ctor {
    s: string
    constructor(s: string) {
        this.s = s
    }
}
type SomeConstructor = {
    new (s: string): Ctor
}

function fn(ctor: SomeConstructor) {
    return new ctor('hello')
}
const f = fn(Ctor)
console.log(f.s) // hello

interface callOrConstructor {
    new (s:string): Date
    (n: number): number
}
function fn11(data: callOrConstructor) {
    let d = new data('2022-05-08')
    let n = data(100)
}

