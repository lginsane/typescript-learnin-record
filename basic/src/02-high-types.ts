// 交叉类型

// 联合类型
let union: number | string = 1
union = ''

// 类型别名
type ID = number | string
function printId(id: ID) {
    console.log(id)
}
printId(1)
printId('1')

type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n
    }
    else {
        return n()
    }
}

