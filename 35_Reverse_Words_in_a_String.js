/**
 * @param {string} s
 * @return {string}
 */
var reverseWords=function (s) {
    const strArr=s.trim().split(' ').filter((ele) => ele!=='').reverse().join(' ')
    return strArr
};

const testCases=[
    {
        s: "the sky is blue"
    },
    {
        s: "  hello world  "
    },
    {
        s: "a good   example"
    },
]

testCases.forEach((testCase) => {
    const reveredStr=reverseWords(testCase.s)
    console.log(`reveredStr == ${reveredStr}`)
    console.log("=========================end========================")
})