/**
 * @param {number[]} A
 * @return {number}
 */
var maxProfit=function (A) {
    let profit=0
    let buy=A[0]
    for (let i=1;i<A.length;i++) {
        profit=Math.max(profit, A[i]-buy)
        buy=Math.min(buy, A[i])
    }
    return profit
};

const testCases=[
    {
        nums: [7, 1, 5, 3, 6, 4]
    },
    {
        nums: [7, 6, 4, 3, 1]
    },
    {
        nums: [1, 2, 3, 4, 5, 6, 7]
    },
]

testCases.forEach((testCase) => {
    const profit=maxProfit(testCase.nums)
    console.log(`profit == ${profit}`)
    console.log("=========================end========================")
})