/**
 * @param {number[]} A
 * @param {number} val
 * @return {number}
 */
var removeElement=function (A, val) {
    const len=A.length
    if (len===0) {
        return 0
    }
    let countElements=0
    for (let i=0;i<len;i++) {
        if (A[i]!==val) {
            countElements++
        }
    }

    if (countElements===len) {
        return len
    }

    let i=0, j=0
    while ((i!==(countElements))&&j<len) {
        if (A[j]===val) {
            i=j
            let k=j+1
            while (k<len&&A[k]===val) {
                k++
            }
            const temp=A[i]
            A[i]=A[k]
            A[k]=temp
        }
        j++
    }
    return i
};

const testCases=[
    {
        nums: [3, 2, 2, 3], val: 3
    },
    {
        nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2
    },
    {
        nums: [2, 2, 2, 2, 2, 2, 4], val: 5
    }
]

testCases.forEach((testCase) => {
    const res=removeElement(testCase.nums, testCase.val)
    console.log("length>>>>>>>>", res)
    console.log("=========================end========================")
})