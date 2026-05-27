/**
 * @param {number[]} A
 * @return {number}
 */
var removeDuplicates=function (A) {
    const len=A.length
    let i=1, j=1, count=1

    while (i<len) {
        if (A[i]===A[i-1]) {
            count++
        } else {
            count=1
        }

        if (count<=2) {
            A[j]=A[i]
            j++
        }
        i++
    }
    return j
};

const testCases=[
    {
        nums: [1, 1, 1, 2, 2, 3]
    },
    {
        nums: [0, 0, 1, 1, 1, 1, 2, 3, 3]
    },
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