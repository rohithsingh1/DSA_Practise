function flatten(A=[]) {
    for (let i=0;i<A.length;i++) {
        while (Array.isArray(A[i])) {
            const nestedArr=A[i];
            A.splice(i, 1, ...nestedArr);
        }
    }
    return A;
}
