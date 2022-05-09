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
