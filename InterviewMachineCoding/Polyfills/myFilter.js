// Array.prototype.filter

Array.prototype.myFilter=function (callbackFn, thisRef) {
    const newArr=[]
    const arrayRef=this
    if (typeof callbackFn!=="function") {
        throw new Error('callbackfn should be a function')
    }
    for (let i=0;i<arrayRef.length;i++) {
        const value=callbackFn.call(thisRef, arrayRef[i], i, arrayRef)
        if (value) {
            newArr.push(arrayRef[i])
        }
    }
    return newArr
}

// const result=[1, 2, 3, 4].myFilter(x => x>2)
// console.log('result>>>>>>', result)

// const result=[1, 2, 3].myFilter(x => x%2===0)
// console.log('result>>>>>>', result)

// const result=[1, 2, 3].myFilter(x => x>10)
// console.log('result>>>>>>', result)

// const result=[].myFilter(x => true)
// console.log('result>>>>>>', result)

// const result=[1, 2, 3].myFilter((val, idx, arr) => val+arr.length>4)
// console.log('result>>>>>>', result)

// const result=[0, 1, false, true, '', 'hello'].myFilter(Boolean)
// console.log('result>>>>>>', result)

// const context={limit: 2}
// const result=[1, 2, 3].myFilter(function (x) {
//     return x>this.limit
// }, context)

// console.log('result>>>>>>', result)

// const obj={
//     0: 'a',
//     1: 'b',
//     length: 2
// }

// const result=Array.prototype.myFilter.call(obj, x => x==='a')
// console.log('result>>>>>>', result)

// const result=[1, '2', null, undefined].myFilter(x => x)
// console.log('result>>>>>>', result)