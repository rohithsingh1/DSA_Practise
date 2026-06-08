/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord=function (s) {
    s=s.trim().split(' ')
    const len=s.length
    return s[len-1].length
};

const testCases=[
    {
        nums: "Hello World"
    },
    {
        nums: "   fly me   to   the moon  "
    },
    {
        nums: "luffy is still joyboy"
    }
]

testCases.forEach((testCase) => {
    const maxLength=lengthOfLastWord(testCase.nums)
    console.log(`maxLength == ${maxLength}`)
    console.log("=========================end========================")
})