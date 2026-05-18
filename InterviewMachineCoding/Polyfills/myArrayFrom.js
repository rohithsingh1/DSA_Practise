// Array.prototype.from

Array.prototype.myFrom=function (items, mapFn, thisArg) {
    let newArr=[]
    const arrayRef=this
    if (typeof items==="string") {
        newArr.push(...items.split(''))
    }
    else if (items instanceof Map||items instanceof Set) {
        const tempArr=[]
        for (const key of items) {
            newArr.push(key)
        }
    } else if (!Array.isArray(items)&&typeof items==="object") {
        if (Object.hasOwn(items, 'length')) {
            newArr=new Array(Math.floor(items.length)).fill(undefined)

            Object.entries(items).forEach(([key, value]) => {
                if (!isNaN(key)) {
                    newArr[Number(key)]=value
                }
            })
        }
    } else if (Array.isArray(items)) {
        newArr=[...items]
    }
    return newArr.map((value, index) => {
        if (mapFn) {
            return mapFn?.call(thisArg, value, index)
        } else {
            return value
        }
    })
}

// const map=new Map([
//     [1, 2],
//     [2, 4],
//     [4, 8],
// ]);
// const result=Array.prototype.myFrom(map);
// console.log('result>>>>>>', result)

// const set=new Set([1, 2, 3])
// const result=Array.prototype.myFrom(set);
// console.log('result>>>>>>', result)

// const obj={
//     0: 'a',
//     2: 'c',
//     length: 3
// }
// const result=Array.prototype.myFrom(obj);
// console.log('result>>>>>>', result)

// const obj={
//     0: 'a',
//     1: 'b',
//     length: 2
// }
// const result=Array.prototype.myFrom(obj);
// console.log('result>>>>>>', result)


// const result=Array.prototype.myFrom('foo');
// console.log('result>>>>>>', result)

// const result=Array.prototype.myFrom([1, 2, 3])
// console.log('result>>>>>>', result)

// const result=[1, 2, 3].myFilter(x => x>10)
// console.log('result>>>>>>', result)

// const result=[].myFilter(x => true)
// console.log('result>>>>>>', result)

// const result=[1, 2, 3].myFilter((val, idx, arr) => val+arr.length>4)
// console.log('result>>>>>>', result)

// const result=[0, 1, false, true, '', 'hello'].myFilter(Boolean)
// console.log('result>>>>>>', result)

// const context={mul: 2}
// const result=Array.prototype.myFrom([1, 2], function (x) {
//     return x*this.mul
// }, context)

// console.log('result>>>>>>', result)

const result=Array.prototype.myFrom({length: 2.7, 0: 'a', 1: 'b', 2: 'c'})
console.log('result>>>>>>', result)

// const obj={
//     0: 'a',
//     1: 'b',
//     length: 2
// }

// const result=Array.prototype.myFilter.call(obj, x => x==='a')
// console.log('result>>>>>>', result)

// const result=[1, '2', null, undefined].myFilter(x => x)
// console.log('result>>>>>>', result)