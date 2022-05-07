// typeof 判断基础类型
// object、string、number、bigint、boolean、symbol、undefined、function
function padLeft(padding: string | string[], input: string): string {
    if (typeof padding === 'object') {
        return padding.join(',') + input
    } else {
        return padding + input
    }
}

// null 为 object
function printAll(strings: string | string[] | null) {
    if (strings && typeof strings === 'object') {
        for (const s of strings) {
            console.log(s)
        }
    } else if (typeof strings === 'string') {
        console.log(strings)
    } else {
        // ...
    }
}
