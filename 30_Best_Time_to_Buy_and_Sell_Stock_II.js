/**
 * @param {number[]} P
 * @return {number}
 */
var maxProfit=function (P) {
    const len=P.length
    if (len===1) {
        return 0
    }
    let buy=-1
    let profit=0
    for (let i=0;i<len;i++) {
        if (i===0) {
            if (P[i+1]>=P[i]) {
                buy=P[i]
            }
        } else if (i===len-1) {
            if (buy!==-1&&(P[i-1]<P[i])) {
                profit=profit+P[i]-buy
                buy=-1
            }
        } else {
            if ((P[i-1]<=P[i])&&(P[i+1]<=P[i])) {
                if (buy!==-1) {
                    profit=profit+P[i]-buy
                    buy=-1
                }
            }

            if ((P[i-1]>=P[i])&&(P[i+1]>=P[i])) {
                buy=P[i]
            }
        }
    }

    return profit
};

const testCases=[
    {
        nums: [7, 1, 5, 3, 6, 4]
    },
    {
        nums: [1, 2, 3, 4, 5]
    },
    {
        nums: [7, 6, 4, 3, 1]
    },
    {
        nums: [1, 2]
    },
    {
        nums: [2, 1]
    },
    {
        nums: [2, 2, 5]
    }
]

testCases.forEach((testCase) => {
    const profit=maxProfit(testCase.nums)
    console.log(`profit == ${profit}`)
    console.log("=========================end========================")
})