/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr=function (haystack, needle) {
    return haystack.indexOf(needle)
};

const testCases=[
    {
        haystack: "sadbutsad", needle: "sad"
    },
    {
        haystack: "leetcode", needle: "leeto"
    },
]

testCases.forEach((testCase) => {
    const firstOccurence=strStr(testCase.haystack, testCase.needle)
    console.log(`firstOccurence == ${firstOccurence}`)
    console.log("=========================end========================")
})