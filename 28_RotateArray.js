/**
 * @param {number[]} A
 * @param {number} k
 * @return {void} Do not return anything, modify A in-place instead.
 */
var rotate=function (A, k) {
    const len=A.length
    if (k===0) {
        return A
    }
    k=k%len
    A=A.reverse()
    let i=0, j=k-1;
    while (i<j) {
        const temp=A[i]
        A[i]=A[j]
        A[j]=temp
        i++
        j--
    }
    i=k
    j=len-1
    while (i<j) {
        const temp=A[i]
        A[i]=A[j]
        A[j]=temp
        i++
        j--
    }
};

const testCases=[
    {
        nums: [1, 2, 3, 4, 5, 6, 7], k: 3
    },
    {
        nums: [-1, -100, 3, 99], k: 2
    },
    {
        nums: [1, 2, 3, 4, 5, 6, 7], k: 0
    },
    {
        nums: [-1], k: 2
    }
]

testCases.forEach((testCase) => {
    const tempArray=[...testCase.nums]
    rotate(testCase.nums, testCase.k)
    console.log(`before array ${tempArray} , after Array ${testCase.nums}`)
    console.log("=========================end========================")
})