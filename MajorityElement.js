// const majorityElement=(A=[]) => {
//     const len=A.length
//     let first=-1
//     let second=-1
//     let count1=0
//     let count2=0
//     for (let i=0;i<len;i++) {
//         if (count1!==0&&count2!==0&&A[i]!==first&&A[i]!==second) {
//             count1--
//             count2--
//         }
//         else if (count1===0) {
//             first=A[i]
//             count1=1
//         }
//         else if (A[i]===first) {
//             count1++
//         }
//         else if (count2===0) {
//             second=A[i]
//             count2=1
//         }
//         else if (A[i]===second) {
//             count2++
//         }
//     }
//     count1=0
//     count2=0
//     for (let i=0;i<len;i++) {
//         if (A[i]===first) {
//             count1++
//         }
//         if (A[i]===second) {
//             count2++
//         }
//     }
//     const maxMajority=Math.floor(len/3)
//     console.log("count1,count2,first,second,maxMajority>>>>>>", count1, count2, first, second, maxMajority);

//     if (count1>maxMajority) {
//         return first
//     }
//     else if (count2>maxMajority) {
//         return second
//     }
//     else {
//         return -1
//     }
// }

// const A=[1000727, 1000727, 1000641, 1000517, 1000212, 1000532, 1000727, 1001000, 1000254, 1000106, 1000405, 1000100, 1000736, 1000727, 1000727, 1000787, 1000105, 1000713, 1000727, 1000333, 1000069, 1000727, 1000877, 1000222, 1000727, 1000505, 1000641, 1000533, 1000727, 1000727, 1000727, 1000508, 1000475, 1000727, 1000573, 1000727, 1000618, 1000727, 1000309, 1000486, 1000792, 1000727, 1000727, 1000426, 1000547, 1000727, 1000972, 1000575, 1000303, 1000727, 1000533, 1000669, 1000489, 1000727, 1000329, 1000727, 1000050, 1000209, 1000109]

// const res=majorityElement(A)
// console.log("res>>>>>", res);

/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter=function (callbackFn, thisArg) {
    const arrayRef=this
    const newArr=[]
    for (let i=0;i<arrayRef.length;i++) {
        if (i in arrayRef) {
            if (thisArg&&callbackFn(thisArg, arrayRef[i], i, arrayRef)) {
                newArr.push(arrayRef[i])
            }
            else if (callbackFn(arrayRef[i], i, arrayRef)) {
                newArr.push(arrayRef[i])
            }
        }
    }
    return newArr
};

// const isThisProductEven=function (this, element) {
//     return (element*this)%2===0;
// };

const arr=[1, 2, 3, 4]
// console.log(arr.myFilter(isThisProductEven, 10));
// console.log(arr.myFilter((value) => value<3));

const array=Array.from({length: 4}, (_, i) => i)
console.log("array>>>>>", array);
