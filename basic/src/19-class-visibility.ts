// 类的可见性修饰符
// public 任意可见
// protected 当前类和子类可见，派生类不可见
// private 当前类可见，子类和派生类不可见
class Greeter300 {
    public greet() {
        console.log('public')
    }
    sayHello() {
        this.greet()
        this.getName()
        this.getId()
    }

    protected getName() {
        console.log('protected')
    }

    private getId() {
        console.log('private')
    }
}
const c300 = new Greeter300()
c300.greet()
c300.sayHello()
// c300.getName() // 报错，protected 派生类不可见
// c300.getId() // 报错，private 派生类不可见

class GreeterChild extends Greeter300 {
    cGreet() {
        super.greet()
        super.getName()
        // super.getId() // 报错，private 子类不可见
    }
}
const gC = new GreeterChild()
gC.cGreet()

// 参数属性
class Params {
    constructor(public x: number) {}
}
const p = new Params(1)
console.log(p.x)
