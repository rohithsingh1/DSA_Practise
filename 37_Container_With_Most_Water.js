/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea=function (height) {
    const len=height.length
    let l=0
    let r=len-1
    let maxValue=0
    while (l<r) {
        const value=Math.min(height[l], height[r])*(r-l)
        maxValue=Math.max(maxValue, value)
        if (height[l]<height[r]) {
            l++
        } else if (height[r]<height[l]) {
            r--
        } else {
            l++
        }
    }
    return maxValue
};

const testCases=[
    {
        nums: [1, 8, 6, 2, 5, 4, 8, 3, 7]
    },
    {
        nums: [1, 1]
    },
]

testCases.forEach((testCase) => {
    const area=maxArea(testCase.nums)
    console.log(`area == ${area}`)
    console.log("=========================end========================")
})