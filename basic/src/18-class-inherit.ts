// 类继承
// implements 类继承接口
interface Pingable {
    ping() : void
}
interface Pingable1 {
    pong() : void
}
class Sonnar implements Pingable  {
    ping() {}
}
class Sonnar2 implements Pingable,Pingable1  {
    ping() {}
    pong() {}
}
// 可选属性，类里面同样可选实现
interface Q {
    x: number
    y?: number
}
class QClass implements Q {
    x = 1
    // y = 1
}

// extends 类继承类
// 子类可以使用父类的属性和方法
class W {
    move() {
        console.log('W-move')
    }
}
class E extends W {
    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log(`woof${i}`) 
        }
    }
}
const e = new E()
e.move()
e.woof(2)

// 重写类方法
// super指向父类
class Base{ 
    greet() {
        console.log('base greet')
    }
}
class Derived extends Base {
    greet(str?: string) {
        if (str === undefined) {
            super.greet()
        } else {
            console.log('derived greet')
        }
    }
}
const d11 = new Derived()
d11.greet()
d11.greet('123')

// 类初始化顺序
// 1.基类的属性初始化
// 2.基类的构造函数执行
// 3.派生类的属性初始化
// 4.派生类的构造函数执行
class Order {
    name = 'order'
    constructor() {
        console.log(this.name) // order
    }
}
class Order1 extends Order {
    name = 'order1'
}
let o = new Order1()
console.log(o.name) // order1

// 继承内置类型
class MsgError extends Error {
    constructor(msg: string) {
        super(msg)
        // 明确的设置类型
        // 不设置类型在es5环境下，报错 msgError.sayHello is not a function
        Object.setPrototypeOf(this, MsgError.prototype)
    }
    sayHello () {
        return `hello ${this.message}`
    }
}
const msgError = new MsgError('world')
console.log(msgError.sayHello())

// 明确的设置类型为true，否则为false
console.log(msgError instanceof MsgError)
