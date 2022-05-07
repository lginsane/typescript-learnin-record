// 基本用法
interface Point {
  x: number
  y: number
}

function printPoint(pt: Point) {
  console.log(pt.x)
  console.log(pt.y)
}
printPoint({
  x: 1,
  y: 2
})

// 可选属性 ?
interface UserInfo1 {
  name: string
  avatar?: string
}
let userInfo: UserInfo1 = {
  name: ''
  // avatar: ''
}

// 只读属性 readonly
interface UserInfo2 {
  readonly name: string
}
let userInfo2: UserInfo2 = {
  name: ''
}
// userInfo2.name = '1' // 报错，只读属性不可修改

// 额外的属性检查
interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}
let squareConfig: SquareConfig = {
  color: '',
  width: 10,
  other: false
}

// 函数类型接口的定义
interface TestFn {
  (x: number, y: number): boolean
}
const testFn: TestFn = function (x: number, y: number): boolean {
  return x + y > 1
}
testFn(1, 2)

// 可索引的类型
interface StringArray {
  [index: number]: string
}
let arr: StringArray = ['1', '2']

// 继承 extends
interface parent {
  name: string
}
interface children extends parent {
  age: number
}
const parentObj: parent = {
  name: '父亲'
}
const childrenObj: children = {
  name: '儿子',
  age: 1
}
