// instanceof 操作符类型缩小
// instanceof 判断是否为某个对象的实例
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString())
    } else {
        console.log(x.toUpperCase())
    }
}
