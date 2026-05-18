// Array.prototype.every

Array.prototype.myEvery=function (callbackFn, thisRef) {
    const arrayRef=this
    if (typeof callbackFn!=="function") {
        throw new Error('callbackfn should be a function')
    }

    if (Array.isArray(arrayRef)) {
        for (let i=0;i<arrayRef.length;i++) {
            const value=callbackFn.call(thisRef, arrayRef[i], i, arrayRef)
            if (!value) {
                return false
            }
        }
        return true
    } else if (typeof arrayRef==="object") {
        for (let key in arrayRef) {
            const value=callbackFn.call(thisRef, arrayRef[key], key, arrayRef)
            if (!value) {
                return false
            }
        }
        return true
    }
}

// const result=[1, 2, 3].myEvery(x => x>2)
// console.log('result>>>>>>', result)

// let count=0

// const result=[1, 2, 3].myEvery(x => {
//     count++
//     return x<2
// })
// console.log('result>>>>>>', result, count)

// const result=[1, 2, 3].myFind((val, idx, arr) => val+arr.length===5)
// console.log('result>>>>>>', result)

// const arr=[1, 2, 3]

// const result=arr.myEvery((x, i, a) => {
//     a[i]=x*10
//     return true
// })
// console.log('result>>>>>>', result, arr)


// const context={limit: 2}

// const result=[1, 2, 3].myEvery(function (x) {
//     return x<=this.limit
// }, context)

// console.log('result>>>>>>', result)

const obj={
    0: 1,
    1: 2,
    length: 2
}

const result=Array.prototype.myEvery.call(obj, x => {
    console.log('x in callback>>>>>>>', x)
    return x>0
})
console.log('result>>>>>>', result)
