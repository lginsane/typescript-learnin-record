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


// 构造签名
