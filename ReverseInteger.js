/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes 
 * the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

 * 
 */


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversedValue=0;
    let tempValue;
    if (x<0) {
        tempValue = -x
    } else {
        tempValue = x
    }
    while (tempValue!==0) {
        const lastDigit=tempValue%10
        reversedValue = reversedValue*10 + lastDigit
        tempValue = Math.floor(tempValue/10)
    }
    if (reversedValue>=-Math.pow(2, 31)&&reversedValue<=Math.pow(2, 31)-1) {
        if (x<0) {
            return -reversedValue
        } else {
            return reversedValue
        }
    } else {
        return 0
    }
};

const testCases=[
    {x: 123},
    {x: -123},
    {x: 120}
]

testCases.forEach((ele) => {
    const result=reverse(ele.x)
    console.log(`reversed value of ${ele.x} =====> ${result}`);
})