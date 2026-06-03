/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix=function (strs) {
    strs=strs.sort()
    const len=strs.length
    const str1=strs[0]
    const str2=strs[len-1]

    if (str1.length===0) {
        return ''
    }
    let ans=''
    let i=0
    let j=0
    while (i<str1.length&&j<str2.length) {
        if (str1[i]===str2[j]) {
            ans=ans+str1[i]
            i++
            j++
        } else {
            return ans
        }
    }
    return ans
};

const testCases=[
    {
        nums: ["flower", "flow", "flight"]
    },
    {
        nums: ["dog", "racecar", "car"]
    },
    {
        nums: ['club', 'clove', 'clap']
    },
]

testCases.forEach((testCase) => {
    const commonPrefix=longestCommonPrefix(testCase.nums)
    console.log(`commonPrefix == ${commonPrefix}`)
    console.log("=========================end========================")
})