// static 类的静态成员
// 1.特殊的静态名称不安全，如name、length、call等
// 2.typescript没有静态类的概念，因为有函数和普通对象代替它
class MyClass1 {
    static x = 10
    static printX() {
        console.log(MyClass1.x)
    }
}
console.log(MyClass1.x)
MyClass1.printX()

// 1.特殊的静态名称不安全，如name、length、call等
class S1 {
    // static name = '' 报错
}

// 2.typescript没有静态类的概念，因为有函数和普通对象代替它
class MyStaticClass {
    static doSomething() {}
}
// 函数和普通对象代替
function doSomething() {}
const myObject = {
    doSomething() {}
}

// static 区块
// ECMAScript2015 之上版本可使用
// class Foo {
//     static #count = 0

//     get count() {
//         return Foo.#count
//     }
// }

// 泛型类，不能为静态成员使用泛型类型
class MyStaticClass1<T> {
    // static defaultType: T // 报错
}
