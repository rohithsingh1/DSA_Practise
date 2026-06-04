/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert=function (s, numRows) {
    if (numRows===1) {
        return s
    }
    const strArr=new Array(numRows).fill('')
    let indexInc=0
    let i=0
    const strLen=s.length
    while (i<strLen) {
        for (let j=0;j<numRows&&i<strLen;j++) {
            strArr[indexInc]=strArr[indexInc]+s[i]
            i++
            indexInc++
        }
        indexInc=indexInc-2
        for (let j=0;j<(numRows-2)&&i<strLen;j++) {
            strArr[indexInc]=strArr[indexInc]+s[i]
            i++
            indexInc--
        }
    }
    return strArr.join('')
};

const testCases=[
    {
        s: "PAYPALISHIRING", numRows: 3
    },
    {
        s: "PAYPALISHIRING", numRows: 4
    },
    {
        s: "A", numRows: 1
    },
]

testCases.forEach((testCase) => {
    const zigzagStr=convert(testCase.s, testCase.numRows)
    console.log(`zigzagStr == ${zigzagStr}`)
    console.log("=========================end========================")
})