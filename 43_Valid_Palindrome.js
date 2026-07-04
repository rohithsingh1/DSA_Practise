/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome=function (s) {
    const newStr=s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const len=newStr.length
    let j=len-1
    for (let i=0;i<(Math.floor(len/2));i++) {
        if (newStr[i]!==newStr[j]) {
            return false
        }
        j--
    }
    return true
};

const testCases=[
    {
        s: "A man, a plan, a canal: Panama"
    },
    {
        s: "race a car"
    },
    {
        s: " "
    }
]

testCases.forEach((testCase) => {
    const isPalindromeVal=isPalindrome(testCase.s)
    console.log(`isPalindromeVal == ${isPalindromeVal}`)
    console.log("=========================end========================")
})