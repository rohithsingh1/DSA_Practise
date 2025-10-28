const PairSumDivisibleByM=(A, B) => {
    const len=A.length
    for (let i=0;i<len;i++) {
        A[i]=A[i]%B
    }
    let map1=new Map()
    let count=0
    for (let i=0;i<len;i++) {
        if ((A[i]===0&&map1.has(A[i]))||(map1.has(B-A[i]))) {
            if (A[i]===0) {
                const value=map1.get(A[i])
                count=count+value
            } else {
                const value=map1.get(B-A[i])
                count=count+value
            }
        }
        if (map1.has(A[i])) {
            const value1=map1.get(A[i])
            map1.set(A[i], value1+1)
        } else {
            map1.set(A[i], 1)
        }
    }
    return count
}


const testCases=[
    // {
    //     A: [93, 9, 46, 79, 56, 24, 10, 26, 9, 93, 31, 93, 75, 7, 4, 80, 19,
    //         67, 49, 84, 62, 100, 17, 40, 35, 84, 14, 81, 99, 31, 100, 66, 70, 2,
    //         11, 84, 60, 89, 13, 57, 47, 60, 59, 60, 42, 67, 89, 29, 85, 83, 42, 47,
    //         66, 80, 88, 85, 83, 82, 16, 23, 21, 55, 26, 2, 21, 92, 85, 26, 46, 3, 7,
    //         95, 50, 22, 84, 52, 57, 44, 4, 23, 25, 55, 41, 49],
    //     B: 37
    // },
    {
        A: [4, 3, 6, 3, 8, 12, 8, 3, 6],
        B: 6
    }
]

testCases.forEach((ele) => {
    const {A, B}=ele
    const result=PairSumDivisibleByM(A, B)
    console.log('result>>>>>>', result);

})