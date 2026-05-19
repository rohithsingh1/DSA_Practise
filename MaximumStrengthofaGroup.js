/**
 * @param {number[]} nums
 * @return {number}
 */
var maxStrength=function (nums) {
    const len=nums.length
    if (len===1) {
        return nums[0]
    }
    let largestNegativeNumber=Number.MIN_SAFE_INTEGER
    let largestNumber=Number.MIN_SAFE_INTEGER
    let negativeNumCount=0
    let product=1
    for (let i=0;i<len;i++) {
        if (nums[i]<0) {
            negativeNumCount++
            largestNegativeNumber=Math.max(largestNegativeNumber, nums[i])
        }
        largestNumber=Math.max(largestNumber, nums[i])
        if (nums[i]) {
            product=product*nums[i]
        }
    }

    if (largestNumber===0&&negativeNumCount===1||largestNumber===0&&negativeNumCount===0) {
        return 0
    }
    else if (negativeNumCount%2===1) {
        return Math.floor(product/largestNegativeNumber)
    }
    return product
};

const testCases=[
    {
        nums: [3, -1, -5, 2, 5, -9],
        output: 1350
    },
    {
        nums: [-4, -5, -4],
        output: 20
    },
    {
        nums: [-1, 0],
        output: 0
    },
    {
        nums: [-1],
        output: -1
    },
    {
        nums: [0, 2],
        output: 2
    },
    {
        nums: [-1, 0, 0, 0, 0],
        output: 0
    },
    {
        nums: [0, 0, 0, 2, 0],
        output: 2
    },
    {
        nums: [-2, -4],
        output: 8
    },
    {
        nums: [0, 0, 0, 0, 0],
        output: 0
    },
    {
        nums: [0, -4, -7],
        output: 28
    },

]









