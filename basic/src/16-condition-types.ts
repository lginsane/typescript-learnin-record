// 条件类型 ? : 
interface Animal {
    live(): void
}
interface Dog extends Animal {
    woof(): void
}
interface Cat {}
// Example1: number
type Example1 = Dog extends Animal ? number : string

// Example2: string
type Example2 = Cat extends Animal ? number : string

interface IDLabel {
    id: number
}
interface NameLabel {
    name: string
}

// ✅
type NameOrId<T extends number | string> = T extends number ? IDLabel : NameLabel
type S = NameOrId<number>

function createLabel<T extends number | string>(nameOrId: T) {
    if (typeof nameOrId === 'number') {
        return {
            id: nameOrId
        }
    } else {
        return {
            name: nameOrId
        }
    }
}
// ❌
// function createLabel(id: number): IDLabel
// function createLabel(name: string): NameLabel
// function createLabel(nameOrId: number | string): IDLabel | NameLabel {
    // return 
// }


// 条件类型约束
// type MessageOf<T> = T['message'] // 报错
type MessageOf1<T extends { message: unknown }> = T['message']
type MessageOf2<T> = T extends { message: unknown } ? T['message'] : never
interface Email {
    message: string
}
interface Dog {
    bark(): void
}
// type EmailMessageContent = MessageOf1<Email>
// EmailMessageContent: string
type EmailMessageContent = MessageOf2<Email>
// DogMessageContent: never
type DogMessageContent = MessageOf2<Dog>

// let dogContent: DogMessageContent = 'error' // 报错
let dogContent: DogMessageContent = 'error' as never


// T[number] 
// 数组中每一项的key为number类型
// T[number] 代表数组中每一项的类型
type Flatter<T> = T extends any[] ? T[number] : T

// Str: string
type Str = Flatter<string[]>
// Num: number
type Num = Flatter<number>


// infer 条件类型内推理
type GetReturnType<T> = T extends (...args: never[]) => infer Return ? Return : never

// String1: string
type String1 = GetReturnType<() => string>
// Number1: number
type Number1 = GetReturnType<() => number>

// 分布式条件类型
type ToArray<T> = T extends any ? T[] : never
// StrOrNumArray: string[] | number[]
type StrOrNumArray = ToArray<string | number>

let sOrN1:StrOrNumArray = [1, 2]
let sOrN2:StrOrNumArray = ['1', '2']
// let sOrN3:StrOrNumArray = ['1', 2] // 报错

// 将T当作新的类型别名
type ToArray1<T> = [T] extends [any] ? T[] : never
// StrOrNumArray1: (string | number)[]
type StrOrNumArray1 = ToArray1<string | number>
let sOrN4: StrOrNumArray1 = ['1', 2]
