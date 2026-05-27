/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge=function (A, m, B, n) {
    if (m===0&&n===0) {
        return A
    }
    else if (m===0&&n===1) {
        A[0]=B[0]
    } else if (m===1&&n===0) {
        return A
    } else {
        const tempA=[...A]
        let i=0, j=0, k=0;
        while (i<m&&j<n) {
            if (A[i]<=B[j]) {
                tempA[k]=A[i]
                k++
                i++
            } else {
                tempA[k]=B[j]
                k++
                j++
            }
        }
        while (i<m) {
            tempA[k]=A[i]
            i++
            k++
        }
        while (j<n) {
            tempA[k]=B[j]
            k++
            j++
        }
        for (i=0;i<tempA.length;i++) {
            A[i]=tempA[i]
        }
    }
};

const testCases=[
    {
        nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3
    },
    {
        nums1: [1], m: 1, nums2: [], n: 0
    },
    {
        nums1: [0], m: 0, nums2: [1], n: 1
    }
]

testCases.forEach((testCase) => {
    const {nums1, m, nums2, n}=testCase
    merge(nums1, m, nums2, n)
    console.log('after merging num1===>', nums1)
    console.log("=========================end========================")
})