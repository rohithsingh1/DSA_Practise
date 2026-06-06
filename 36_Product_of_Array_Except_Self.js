/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf=function (nums) {
    const len=nums.length
    const prefixA=new Array(len).fill(-1)
    prefixA[0]=nums[0]
    for (let i=1;i<len;i++) {
        prefixA[i]=prefixA[i-1]*nums[i]
    }
    const suffixA=new Array(len).fill(-1)
    suffixA[len-1]=nums[len-1]
    for (let i=len-2;i>=0;i--) {
        suffixA[i]=suffixA[i+1]*nums[i]
    }
    let result=new Array(len).fill(0)
    for (let i=0;i<len;i++) {
        if (i===0) {
            result[i]=suffixA[i+1]
        } else if (i===len-1) {
            result[i]=prefixA[i-1]
        } else {
            result[i]=prefixA[i-1]*suffixA[i+1]
        }
    }
    return result
};

const testCases=[
    // {
    //     nums: [1, 2, 3, 4]
    // },
    // {
    //     nums: [-1, 1, 0, -3, 3]
    // },
    {
        nums: [4, 3, 2, 1, 2]
    },
]

testCases.forEach((testCase) => {
    const value=productExceptSelf(testCase.nums)
    console.log(`value == ${value}`)
    console.log("=========================end========================")
})