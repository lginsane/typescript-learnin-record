// 类  包括类属性、readonly、构造器、方法、Getters/Setters、索引签名
// 类属性
class Point100 {
    x: number = 0
    y: number = 0
}
let p11 = new Point100()
p11.x = 10
p11.y = 10

// 构造函数声明
class Point101 {
    x: number
    y: number
    constructor(x:number, y: number) {
        this.x = x
        this.y = y
    }
}
let p12 = new Point101(10, 10)

// readonly
// 两种声明方式。1.定义时声明初始化 2.constructor 中初始化
class Greeter {
    readonly name: string = 'hello'
    constructor() {
        this.name = 'world'
    }
}
let G1 = new Greeter()
// G1.name = '' // 报错，readonly是无法修改


// 构造器1.构造函数不能有类型参数 2.构造函数不能有返回类型函数

class Point200 {
    x: number
    y: number
    // constructor(): void {} // 报错，构造函数不能有返回类型函数
    constructor(x: number, y: number) {
        console.log(x)
        console.log(y)
    }
}

// 类方法
class Point201 {
    name: string = ''
    constructor() {}
    updateName(str: string) {
        this.name = str
    }
}

// Getters/Setters
// 1.如果只有get没有set，该属性自动为只读属性
// 2.如果没有指定setter参数类型，它将从getter返回类型中推断出来
// 3.访问器和设置器必须有相同的的成员可见性
class D {
    _length = 0
    get length(): number {
        return this._length
    }
    // val: number
    set length(val: string | number) {
        let num = Number(val)
        // 是否为数字
        if (!Number.isFinite(num)) {
            this._length = 0
            return
        }
        this._length = num
    }
}
let d = new D()
console.log(d.length) // 0
d.length = 100
console.log(d.length) // 100


// 索引签名
class MyClass {
    [s: string]: boolean | ((s: string) => boolean)

    x = true
    check(s: string) {
        return this[s] as boolean
    }
}

// 类表达式
const someClass = class<T> {
    content: T
    constructor(value: T) {
        this.content = value
    }
}
const m = new someClass('hello world')
console.log(m.content)

// 抽象类 abstract
// 不能 new 抽象类
abstract class Base4 {
    abstract getName(): string
    printName() {
        console.log(this.getName())
    }
}
// const b = new Base4() // 报错

class Derived4 extends Base4 {
    getName() {
        return 'name'
    }
}

const der = new Derived4()
der.getName()
der.printName()

function Derived5(ctor: new() => Base4) {
    const instance = new ctor()
    instance.getName()
    instance.printName()
}
Derived5(Derived4)
