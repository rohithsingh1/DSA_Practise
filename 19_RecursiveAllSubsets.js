const RecursiveAllSubsets=(A) => {
    const result=[]
    function allSubsetsHandler(A, index, subset) {
        if (index>=A.length) {
            result.push(subset)
            return
        }

        allSubsetsHandler(A, index+1, [...subset, A[index]])
        allSubsetsHandler(A, index+1, [...subset])
    }
    allSubsetsHandler(A, 0, [])
    return result
}


const A=[1, 2]

const res=RecursiveAllSubsets(A)

console.log("res>>>>", res);
