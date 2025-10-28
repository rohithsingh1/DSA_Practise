const firstMissingNaturalNumber=(A) => {
    const len=A.length
    for (let i=0;i<len;i++) {
        while ((A[i]!==(i+1))&&(A[i]<=len)&&(A[i]>0)&&(A[A[i]-1]!==A[i])) {
            const temp=A[i]
            A[i]=A[temp-1]
            A[temp-1]=temp
        }
    }
    for (let i=0;i<len;i++) {
        if (A[i]!==(i+1)) {
            return i+1
        }
    }
    return len
}

const testCases=[
    // {
    //     arr: [1, 2, 0]
    // },
    // {
    //     arr: [3, 4, -1, 1]
    // },
    // {
    //     arr: [-8, -7, -6]
    // },
    // {
    //     arr: [3, 5, 8, 7, 2, 1, 4, 6]
    // },
    // {
    //     arr: [2, 3, 1, 2]
    // },
    {
        arr: [1]
    }
]

testCases.forEach((ele) => {
    const {arr}=ele
    const res=firstMissingNaturalNumber(arr)
    console.log(`result of ${arr} is>>>>> ${res}`);

})