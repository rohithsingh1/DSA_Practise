/**
 * @param {number[]} height
 * @return {number}
 */
var trap=function (height) {
    const len=height.length
    const preHeight=Array.from({length: len}).fill(-1)
    const postHeight=Array.from({length: len}).fill(-1)
    preHeight[0]=height[0]
    for (let i=1;i<len;i++) {
        preHeight[i]=Math.max(preHeight[i-1], height[i])
    }

    postHeight[len-1]=height[len-1]
    for (let i=len-2;i>=0;i--) {
        postHeight[i]=Math.max(postHeight[i+1], height[i])
    }

    let waterStored=0
    for (let i=0;i<len;i++) {
        waterStored=waterStored+Math.min(preHeight[i], postHeight[i])-height[i]
    }

    return waterStored
};

const testCases=[
    {
        nums: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
    },
    {
        nums: [4, 2, 0, 3, 2, 5]
    }
]


testCases.forEach((testCase) => {
    const waterStored=trap(testCase.nums)
    console.log(`waterStored == ${waterStored}`)
    console.log("=========================end========================")
})