/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum=function (nums, target) {
    const map=new Map()
    const result=[]
    for (let i=0;i<nums.length;i++) {
        if (map.has(target-nums[i])) {
            result.push(map.get(target-nums[i]))
            result.push(i)
            return result
        } else {
            map.set(nums[i], i)
        }
    }
};

const testCases=[
    {
        nums: [2, 7, 11, 15],
        target: 9
    },
    {
        nums: [3, 2, 4],
        target: 6
    },
    {
        nums: [3, 3],
        target: 6
    }
]

testCases.forEach((testCase) => {
    const result=twoSum(testCase.nums, testCase.target)
    console.log("result>>>>", result);

})