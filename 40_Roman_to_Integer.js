/**
 * @param {string} s
 * @return {number}
 */
var romanToInt=function (s) {
    const len=s.length
    const romanMap=new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let i=0;
    let value=0
    while (i<len) {
        if ((i+1)<len) {
            const currentValue=romanMap.get(s[i])
            const nextValue=romanMap.get(s[i+1])
            if (currentValue<nextValue) {
                value=value+(nextValue-currentValue)
                i=i+2
            } else if (currentValue>=nextValue) {
                value=value+currentValue
                i++
            }
        } else {
            value=value+romanMap.get(s[i])
            i++
        }
    }
    return value
};

const testCases=[
    {
        nums: "III"
    },
    {
        nums: "LVIII"
    },
    {
        nums: "MCMXCIV"
    }
]

testCases.forEach((testCase) => {
    const integerValue=romanToInt(testCase.nums)
    console.log(`integerValue11 == ${integerValue}`)
    console.log("=========================end========================")
})