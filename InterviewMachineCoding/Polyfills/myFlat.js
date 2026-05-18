// Array.prototype.flat

Array.prototype.myFlat=function (depth=1) {
    const arrayRef=this
    const newArr=[]
    let count=0
    for (let i=0;i<arrayRef.length;i++) {
        while (Array.isArray(arrayRef[i])&&count<depth) {
            const nestedArr=[...arrayRef[i]]
            arrayRef.splice(i, 1, ...nestedArr)
            count++
        }
        newArr.push(arrayRef[i])
    }
    return newArr
}

// const result=[1, {a: 1}, [2]].myFlat()
// console.log('result>>>>>>', result)

// const result=[1, [2, 3]].myFlat(-1)
// console.log('result>>>>>>', result)

// const result=[1, [], [[], [2]]].myFlat(Infinity)
// console.log('result>>>>>>', result)

const result=[[[[[[1]]]]]].myFlat(Infinity)
console.log('result>>>>>>', result)

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

// const obj={
//     0: 'a',
//     1: 'b',
//     length: 2
// }

// const result=Array.prototype.myFind.call(obj, x => x==='b')
// console.log('result>>>>>>', result)
