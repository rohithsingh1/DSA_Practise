// Array.prototype.flatMap

Array.prototype.myFlatMap=function (callbackFn, thisRef) {

    function flattenArr(newArr, depth=1) {
        console.log("newArr in flattenArr>>>>>>>", newArr)
        let count=0
        let arr1=[]
        for (let i=0;i<newArr.length;i++) {
            while (Array.isArray(newArr[i])&&count<depth) {
                const nestedArr=[...newArr[i]]
                newArr.splice(i, 1, ...nestedArr)
                count++
            }
            arr1.push(newArr[i])
        }
        return arr1
    }
    const newArr=[]
    const arrayRef=this
    if (typeof callbackFn!=="function") {
        throw new Error('callbackfn should be a function')
    }
    for (let i=0;i<arrayRef.length;i++) {
        const returnedArr=callbackFn.call(thisRef, arrayRef[i], i, arrayRef)
        console.log("returnedArr>>>>>>>", returnedArr)
        const flattenArray=flattenArr([returnedArr], 1)
        console.log("returned flattenedarray>>>>>>>", flattenArray)
        newArr.push(...flattenArray)
    }

    return newArr
}

// const result=[1, 2, 3].myFlatMap(x => [x, x*2])
// console.log('result>>>>>>', result)

// const result=[1, 2].myFlatMap(x => [[x]])
// console.log('result>>>>>>', result)

// const result=[1, [2]].myFlatMap(x => x)
// console.log('result>>>>>>', result)

// const result=[].myFlatMap(x => [x])
// console.log('result>>>>>>', result)

// const result=[1, 2].myFlatMap((val, idx, arr) => [arr.length])
// console.log('result>>>>>>', result)

// const result=[1, 2, 3].myFlatMap(x => x*2)
// console.log('result>>>>>>', result)

// const result=[1, 2, 3].myFlatMap(x => (x%2? [x]:x))
// console.log('result>>>>>>', result)

// const context={mul: 2}
// const result=[1, 2].myFlatMap(function (x) {
//     return [x*this.mul]
// }, context)

// console.log('result>>>>>>', result)

const obj={
    0: 1,
    1: 2,
    length: 2
}
const result=Array.prototype.myFlatMap.call(obj, x => [x*2])
console.log('result>>>>>>', result)

// const result=[1, '2', null, undefined].myFilter(x => x)
// console.log('result>>>>>>', result)