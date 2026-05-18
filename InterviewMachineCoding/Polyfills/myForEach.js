// Array.prototype.forEach

Array.prototype.myForEach=function (callbackFn, thisRef) {
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

// let result=[];
// [1, 2, 3].myForEach(x => result.push(x*2))
// console.log('result>>>>>>', result)

// let sum=0;
// [1, 2, 3].myForEach(x => sum+=x)

// console.log('result>>>>>>', sum)

// let res=[];
// [10, 20, 30].myForEach((val, idx) => res.push(idx))
// console.log('result>>>>>>', res)

// const arr=[1, 2, 3];

// arr.myForEach((x, i, a) => {
//     a[i]=x*10
// })

// console.log('result>>>>>>', arr)

// const context={total: 0};

// [1, 2, 3].myForEach(function (x) {
//     this.total+=x
// }, context)

// console.log('result>>>>>>', context.total)


// const context={total: 0};

// [1, 2, 3].myForEach((x) => {
//     this.total+=x
// }, context)

// console.log('result>>>>>>', context.total)



const obj={
    0: 'a',
    1: 'b',
    length: 2
}

let res=[]
Array.prototype.myForEach.call(obj, x => res.push(x))
console.log('result>>>>>>', res)