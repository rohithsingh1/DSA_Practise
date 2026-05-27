/**
 * @param {number[]} A
 * @return {number}
 */
var removeDuplicates=function (A) {
    const len=A.length
    let l=1, r=1;
    while (r<len) {
        if (A[r]!==A[r-1]) {
            A[l]=A[r]
            l++
        }
        r++
    }
    return l
};

const testCases=[
    {
        nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    },
    {
        nums: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        nums: [0, 0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7]
    },
    {
        nums: [1, 1]
    }
]

testCases.forEach((testCase) => {
    const res=removeDuplicates(testCase.nums)
    console.log("length>>>>>>>>", res)
    console.log("=========================end========================")
})