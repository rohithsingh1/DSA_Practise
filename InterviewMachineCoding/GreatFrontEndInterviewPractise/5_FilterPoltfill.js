/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter=function (callbackFn, thisArg) {
    let j=0
    const arrRef=this
    for (let i=0;i<arrRef.length;i++) {
        if (callbackFn.call(thisArg, arrRef[i], i, arrRef)) {
            arrRef[j]=arrRef[i]
            j++
        }
    }

    return arrRef.slice(0, j)
};

const isThisProductEven=function (element) {
    return (element*this)%2===0;
};

// const A=[1, 2, 3, 4, , 5, , 6]

// const result=A.myFilter((value) => value%2==0);
// console.log("result>>>>>>", result);


const result=[1, 2, 3, 4].myFilter(isThisProductEven, 10)
console.log("result>>>>>>", result);