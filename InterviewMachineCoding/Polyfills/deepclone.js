function deepClone(obj) {
    if (typeof obj==="number"||typeof obj==="string"||obj===null||obj===undefined) {
        return obj
    }

    else if (obj instanceof Date) {
        const newDate=new Date()
        return newDate
    }

    else if (Array.isArray(obj)) {
        return obj.map((ele) => {
            return deepClone(ele)
        })
    }

    else if (typeof obj==="object"&&!Array.isArray(obj)) {
        return Object.fromEntries(Object.entries(obj).map(([key, value]) => {
            return [key, deepClone(value)]
        }))
    }
}

// const obj={a: {b: {c: 1}}}

// const clone=deepClone(obj)

// obj.a.b.c=3

// console.log("clone>>>>>>", clone, obj!==clone)

// const arr=[1, 2, 3]

// const clone=deepClone(arr)

// arr[2]=100
// console.log("clone>>>>>>", clone, arr!==clone)

// const arr=[1, [2, [3]]]

// const clone=deepClone(arr)

// arr[1][1]=4
// console.log("clone>>>>>>", clone, arr!==clone)


// const obj={a: [1, {b: 2}]}

// const clone=deepClone(obj)

// console.log("clone>>>>>>", clone, obj!==clone)


const date=new Date()

const clone=deepClone(date)

console.log(clone!==date)              // true
console.log(clone.getTime()===date.getTime()) // true