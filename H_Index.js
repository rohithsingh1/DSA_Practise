/**
 * @param {number[]} A
 * @return {number}
 */
var hIndex=function (A) {
    const len=A.length
    A=A.sort((a, b) => b-a)

    if (A[0]===0) {
        return 0
    }
    for (let i=0;i<len;i++) {
        if (A[i]<(i+1)) {
            return i
        }
    }
    return len
};

const testCases=[
    {
        nums: [3, 0, 6, 1, 5]
    },
    {
        nums: [1, 3, 1]
    },
    {
        nums: [5, 4, 3]
    },
    {
        nums: [4, 4, 4, 4, 4, 4, 4, 4, 3]
    }
]

testCases.forEach((testCase) => {
    const maxHValue=hIndex(testCase.nums)
    console.log(`maxHValue == ${maxHValue}`)
    console.log("=========================end========================")
})