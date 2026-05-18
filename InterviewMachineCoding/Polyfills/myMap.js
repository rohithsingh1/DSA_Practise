// Array.prototype.map

Array.prototype.myMap=function (callbackFn, thisRef) {
    const newArr=[]
    const arrayRef=this
    if (typeof callbackFn!=="function") {
        throw new Error('callbackfn should be a function')
    }
    for (let i=0;i<arrayRef.length;i++) {
        const value=callbackFn.call(thisRef, arrayRef[i], i, arrayRef)
        newArr.push(value)
    }
    return newArr
}

// const result=[1, 2, 3].myMap(x => x*2)
// console.log('result>>>>>>', result)

// const result=['a', 'b', 'c'].myMap(x => x.toUpperCase())
// console.log('result>>>>>>', result)

// const result=[10, 20, 30].myMap((val, idx) => val+idx)
// console.log('result>>>>>>', result)

// const result=[].myMap(x => x*2)
// console.log('result>>>>>>', result)

// const arr=[1, 2, 3]
// const result=arr.myMap(x => x*2)
// console.log('result,arr>>>>>>', result, arr)

// const result=[{a: 1}, {a: 2}].myMap(obj => obj.a*2)
// console.log('result>>>>>>', result)

// const context={multiplier: 3}
// const result=[1, 2, 3].myMap(function (x) {
//     return x*this.multiplier
// }, context)
// console.log('result>>>>>>', result)

// const result=[1, 2, 3].myMap(null)
// console.log('result>>>>>>', result)

// const obj={
//     0: 'a',
//     1: 'b',
//     length: 2
// }

// const result=Array.prototype.myMap.call(obj, x => x.toUpperCase())
// console.log('result>>>>>>', result)

// const result=[1, 2, 3].myMap(x => { })
// console.log('result>>>>>>', result)