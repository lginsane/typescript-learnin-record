// 对象
// 基本定义方法
interface Person1 {
    name: string
    age: number
}
type Person2 = {
    name: string
    age: number
}
const person1: Person1 = {
    name: '',
    age: 10
}
const person2: Person2 = {
    name: '',
    age: 10
}
const person3: {
    name: string
    age: number
} = {
    name: '',
    age: 10
}


// 可选属性 [key] ?: type
interface PaintOption {
    xPos?: number
    yPos?: number
}
function paintShape({ xPos = 0, yPos = 0 }: PaintOption) {
    console.log(xPos)
    console.log(yPos)
}
paintShape({xPos: 100})
paintShape({yPos: 100})
paintShape({xPos: 100, yPos: 100})


// 只读属性 readonly
interface Teacher {
    readonly name: string
    age: number
}
let teacher: Teacher = {
    name: 'xx',
    age: 19
}
// teacher.name = '' // 报错，只读属性无法修改
teacher.age++


// 索引签名
// interface StringArray {
//     [index: number]: string
// }
// let myArray: StringArray = ['1', '2']

interface StringArray1 {
    [index: number]: string
}
let myArray: StringArray1 = ['1', '2']
let value = myArray[0]

// 扩展 extends
interface BasicAddress {
    name: string
    postalCode: string
}
// ✅
interface AddressWidthUnit extends BasicAddress {
    unit: string
}
// ❌
// interface AddressWidthUnit {
//     name: string
//     postalCode: string
//     unit: string
// }
let address1: BasicAddress = {
    name: '',
    postalCode: ''
}
let address2: AddressWidthUnit = {
    name: '',
    postalCode: '',
    unit: ''
}

// 继承多个, 用逗号隔开
interface Color1 {
    name1: string
}
interface Color2 {
    name2: string
}
interface Color3 extends Color1, Color2 {
    name3: string
}
let c: Color3 = {
    name1: '1',
    name2: '2',
    name3: '3'
}
