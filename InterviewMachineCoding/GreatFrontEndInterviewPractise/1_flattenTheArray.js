function flatten(A=[], level=Infinity) {
    let count=0
    for (let i=0;i<A.length;i++) {
        while (Array.isArray(A[i])&&count<level) {
            const nestedArr=A[i];
            A.splice(i, 1, ...nestedArr);
            count++
        }
    }
    return A;
}

const inputA=[1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]

const result=flatten(inputA, 5)

console.log("eresult>>>>", result);