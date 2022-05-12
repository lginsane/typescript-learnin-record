// 类运行时的this
class MyClass10 {
    name: string = 'MyClass'
    getName() {
        console.log(this)
        return this.name
    }
}
let myC = new MyClass10()
console.log('myC: ', myC.getName())

const nObj = {
    name: 'obj',
    getName: myC.getName
}
console.log('obj:', nObj.getName())

// 基于类型守卫(is)的this
class Box10<T> {
    value?: T
    hasValue(): this is { value: T } {
        return this.value !== undefined
    }
}
const box10 = new Box10()
box10.value = 1
console.log(box10.hasValue()) // true
