// 展开运算符 ...

// 函数形参
function multiply(n: number, ...m: number[]) {
    return m.map(x => n * x)
}

multiply(10, 1, 2, 3, 4) // [10, 20, 30, 40]

// 数组实惨
let arr11: number[] = [1, 2, 3]
let arr12: number[] = [4, 5, 6]
arr11.push(...arr12) // [1, 2, 3, 4, 5, 6]


const args1 = [8, 5]
const args2: [number,  number] = [8, 5] // 元组
const args3 = [8, 5] as const
// Math.atan2(...args1) // 报错
Math.atan2(...args2)
Math.atan2(...args3)


// 参数结构
type ABC = { a:number, b:number, c:number }
function sum({ a, b, c }: ABC): number {
    return a + b + c
}
sum({
    a: 10,
    b: 9,
    c: 8
})
