const mergeOverlappingIntervals=(interval, newInterval) => {
    const len=interval.length
    const l=newInterval[0]
    const r=newInterval[1]
    let s1=interval[0][0]
    let e1=interval[0][1]
    let isSeen=false
    const result=[]
    if (r<s1) {
        isSeen=true
        result.push([l, r])
    }
    else if (l<=s1) {
        s1=Math.min(s1, l)
        e1=Math.max(e1, r)
        isSeen=true
    }
    for (let i=1;i<len;i++) {
        const [s2, e2]=interval[i]
        const [prevs1, preve1]=interval[i-1]
        if (!isSeen&&(l>=prevs1&&l<=s2)) {
            isSeen=true
            if (preve1<l) {
                result.push([prevs1, preve1])
                s1=l
                e1=r
            }
            else if (r<s2) {
                s1=Math.min(s1, prevs1, l)
                e1=Math.max(e1, preve1, r)
            }
            else if (r<=e2) {
                s1=Math.min(s1, l)
                e1=Math.max(e1, r, e2)
            } else {
                s1=Math.min(s1, l)
                e1=Math.max(e1, r)
            }
        }
        if (e1<s2) {
            result.push([s1, e1])
            s1=s2
            e1=e2
        } else {
            s1=Math.min(s1, s2)
            e1=Math.max(e1, e2)
        }
    }
    result.push([s1, e1])
    if (!isSeen) {
        result.push([l, r])
    }
    return result

}

const testCases=[
    {
        arr: [[4, 7], [10, 14], [16, 19], [21, 24], [27, 30]],
        arr2: [12, 22]
    },
    {
        arr: [[1, 3], [6, 9]],
        arr2: [2, 5]
    },
    {
        arr: [[1, 3], [6, 9]],
        arr2: [2, 6]
    },
    {
        arr: [[4, 6], [7, 10]],
        arr2: [1, 3]
    },
    {
        arr: [[1, 2], [8, 10]],
        arr2: [3, 6]
    },
    {
        arr: [[1, 2], [8, 10]],
        arr2: [11, 14]
    },
    {
        arr: [[3, 5], [8, 10]],
        arr2: [1, 12]
    },
    // {
    //     arr: [],
    //     arr2: []
    // },
    // {
    //     arr: [],
    //     arr2: []
    // },
    // {
    //     arr: [],
    //     arr2: []
    // }
]

testCases.forEach((ele) => {
    const {arr, arr2}=ele
    const result=mergeOverlappingIntervals(arr, arr2)
    console.log(`${JSON.stringify(arr)}--${JSON.stringify(arr2)} is>>>>>> ${result}`);
})
