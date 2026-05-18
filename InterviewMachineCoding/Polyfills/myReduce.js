// Array.prototype.reduce


Array.prototype.myReduce=function (callbackFn, initialValue) {
    const arrayRef=this
    if (arrayRef.length===0&&!initialValue) {
        throw new Error('Array can not be empty')
    }
    if (typeof callbackFn!=="function") {
        throw new Error('callbackfn should be a function')
    }
    let value=initialValue? initialValue:0
    for (let i=0;i<arrayRef.length;i++) {
        value=callbackFn(value, arrayRef[i], i, arrayRef)
    }
    return value
}

// const result=[1, 2, 3, 4].myReduce((acc, cur) => acc+cur, 0)
// console.log('result>>>>>>', result)

// const result=[1, 2, 3].myReduce((acc, cur) => acc*cur, 1)
// console.log('result>>>>>>', result)

// const result=[].myReduce((acc, cur) => acc+cur)
// console.log('result>>>>>>', result)

// const result=[].myReduce((acc, cur) => acc+cur, 10)
// console.log('result>>>>>>', result)

// const result=[1, 2, 3].myReduce((acc, cur, idx, arr) => acc+arr.length, 0)
// console.log('result>>>>>>', result)


// const result=[1, 2, 3].myReduce((acc, cur) => {
//     acc[cur]=cur*2
//     return acc
// }, {})
// console.log('result>>>>>>', result)


// const obj={
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3
// }

// const result=Array.prototype.myReduce.call(obj, (acc, cur) => acc+cur, 0)
// console.log('result>>>>>>', result)


const result=[1, 2, 3].myReduce((acc, cur) => { })
console.log('result>>>>>>', result)