// Array.prototype.find

Array.prototype.myFind=function (callbackFn, thisRef) {
    const arrayRef=this
    if (typeof callbackFn!=="function") {
        throw new Error('callbackfn should be a function')
    }
    for (let i=0;i<arrayRef.length;i++) {
        const value=callbackFn.call(thisRef, arrayRef[i], i, arrayRef)
        if (value) {
            return arrayRef[i]
        }
    }
    return undefined
}

// const result=[1, 2, 3, 4].myFind(x => x>2)
// console.log('result>>>>>>', result)

// const result=[1, 2, 3].myFind(x => x>10)
// console.log('result>>>>>>', result)

// const result=[1, 2, 3].myFind((val, idx, arr) => val+arr.length===5)
// console.log('result>>>>>>', result)

// const arr=[1, 2, 3]

// const result=arr.myFind((x, i, a) => {
//     a[i]=x*10
//     return x===2
// })
// console.log('result>>>>>>', result, arr)


// const context={limit: 2}

// const result=[1, 2, 3].myFind(function (x) {
//     return x>this.limit
// }, context)
// console.log('result>>>>>>', result)

const obj={
    0: 'a',
    1: 'b',
    length: 2
}

const result=Array.prototype.myFind.call(obj, x => x==='b')
console.log('result>>>>>>', result)
