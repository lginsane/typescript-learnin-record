// keyof 操作符
type Point10 = {
    x: number
    y: number
}

type P = keyof Point10

let p1: P = 'x'
let p2: P = 'y'
// let p3: P = 'z' // 报错

type Arrayish = {
    [k: number]: number
}

type A = keyof Arrayish

let a1: A = 0
// let a2: A = '0' // 报错

// key 为 string 时， keyof 为 string | number
type Mapish = {
    [p: string]: boolean
}
type M = keyof Mapish

let m1: M = '0'
let m2: M = 0
// let m3: M = true // 报错


// 索引访问类型
type Person = {
    name: string
    age: number
    alive: boolean
}
// type I1 = string | number
type I1 = Person['name' | 'age']

// type I2 = string | number | boolean
type I2 = Person[keyof Person]
