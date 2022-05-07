// in 操作符类型缩小
// 判断属性是否存在于某个对象
type Fish = {
    swim: () => void
}
type Bird = {
    fly: () => void
}
type Human = {
    swim?: () => void
    fly?: () => void
}
function move1(animal: Fish | Bird) {
    if ('swim' in animal) {
        animal.swim()
    } else {
        animal.fly()
    }
}
function move2(animal: Fish | Bird | Human) {
    if ('swim' in animal) {
        (animal as Fish).swim()
    } else {
        (animal as Bird).fly()
    }
}
