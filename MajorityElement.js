/**
 * @param {number[]} A
 * @return {number}
 */
var majorityElement=function (A) {
    const len=A.length
    let count=1
    let majEle=A[0]
    for (let i=1;i<len;i++) {
        if (A[i]===majEle) {
            count++
        } else {
            count--
        }
        if (count<0) {
            majEle=A[i]
            count=1
        }
    }
    count=0
    for (let i=0;i<len;i++) {
        if (A[i]===majEle) {
            count++
        }
    }
    if (count>Math.floor(len/2)) {
        return majEle
    }
};

const testCases=[
    {
        nums: [2, 2, 1, 1, 1, 2, 2]
    },
    {
        nums: [3, 2, 3]
    }
]

testCases.forEach((testCase) => {
    const res=majorityElement(testCase.nums)
    console.log("res>>>>>>", res)
    console.log("=========================end========================")
})