/**
 * @param {string} s
 * @return {boolean}
 */
var isValid=function (s) {
    const stack=[]
    for (let i=0;i<s.length;i++) {
        if (s[i]===')'||s[i]==="]"||s[i]==="}") {
            const stackTopElement=stack.pop()
            if (stackTopElement) {
                if (s[i]===")"&&stackTopElement==="(") {
                    continue
                } else if (s[i]==="]"&&stackTopElement==='[') {
                    continue
                } else if (s[i]==="}"&&stackTopElement==="{") {
                    continue
                } else {
                    return false
                }
            } else {
                return false
            }
        }
        else if (s[i]==='('||s[i]==="["||s[i]==="{") {
            stack.push(s[i])
        }
    }

    if (stack.length>0) {
        return false
    }
    return true
};

const testCases=[
    {
        str: "()"
    },
    {
        str: "()[]{}"
    },
    {
        str: "(]"
    },
    {
        str: "([])"
    },
    {
        str: "([)]"
    }
]

testCases.forEach((testCase) => {
    const result=isValid(testCase.str)
    console.log("result>>>>", result);
})