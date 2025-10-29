const SubArrayWithDecreasingWeights=(A) => {
    let maxV=0
    let sum=0
    const len=A.length
    for (let i=0;i<len;i++) {
        sum=sum+A[i]
        maxV=Math.max(maxV, sum)
        if (((i+1)<len)&&(A[i]<=A[i+1])) {
            sum=0
        }
    }
    return maxV
}


const testCases=[
    {
        arr: [3, 3, 5, 4, 3, 2, 1, 0, 1]
    },
    {
        arr: [3, 2, 1]
    },
    {
        arr: [1, 2, 3]
    }
]

testCases.forEach((ele) => {
    const res=SubArrayWithDecreasingWeights(ele.arr)
    console.log("res>>>>>", res);

})