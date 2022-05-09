// 函数重载
// 基本用法
function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d)
    } else {
        return new Date(mOrTimestamp)
    }
}

const d1 = makeDate(1212424)
const d2 = makeDate(5, 8, 2022)
// const d3 = makeDate(5, 8) // 报错


//  准则
// 在可能的情况下，总是倾向于使用联合类型的参数而不是重载参数

// ✅
function len1(x: string | any[]): number {
    return x.length
}
len1(Math.random() > 0.5 ? 'hello' : [1, 2, 3])

// ❌
function len(s: string): number
function len(arr: any[]): number
function len(x: any): number {
    return x.length
}
// len(Math.random() > 0.5 ? 'hello' : [1, 2, 3]) // 报错


// this
interface User {
    admin: boolean
}
interface DB {
    filterUsers(filter: (this: User) => boolean): User[]
}

const db: DB = {
    filterUsers: function(filter: (this: User) => boolean): User[] {
        let user1: User = {
            admin: true
        }
        let user2: User = {
            admin: false
        }
        return [user1, user2]
    }
}
db.filterUsers(function(this: User) {
    console.log(this)
    return this.admin
})
