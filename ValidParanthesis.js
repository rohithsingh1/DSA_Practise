const validParanteseis=(N) => {
    const result=[]

    function printAllValidParantesis(N, open, close, str) {
        if ((open===N)&&(close===N)&&(open===close)) {
            result.push(str)
            return
        }
        if ((open<N)&&(open>=close)) {
            printAllValidParantesis(N, open+1, close, str+'(')
        }
        if (close<open) {
            printAllValidParantesis(N, open, close+1, str+')')
        }

    }

    printAllValidParantesis(N, 0, 0, '')

    return result
}

const testCases=[5]

testCases.forEach((ele) => {
    const res=validParanteseis(ele)
    console.log("res>>>>>>", res);
})