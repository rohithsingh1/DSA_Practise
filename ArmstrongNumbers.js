/**
 * You are given a 3-digit number n, Find whether it is an Armstrong number or not.

An Armstrong number of three digits is a number such that the sum of the cubes of its digits is equal to the number itself. 371 is an Armstrong number since 33 + 73 + 13 = 371. 

Examples:

Input: n = 153
Output: true
Explanation: 153 is an Armstrong number since 13 + 53 + 33 = 153. 
Input: n = 372
Output: false
Explanation: 372 is not an Armstrong number since 33 + 73 + 23 = 378. 
Input: n = 100
Output: false
Explanation: 100 is not an Armstrong number since 13 + 03 + 03 = 1. 
 */

/**
 * @param {number} n
 * @returns {boolean}
 */

class Solution {
    armstrongNumber(n) {
        // code here
        let totalDigits=Math.floor(Math.log10(n))+1
        let sum=0;
        let temp=n 
        while (temp!==0) {
            let lastDigit=temp%10
            sum=sum+Math.pow(lastDigit, totalDigits)
            temp = Math.floor(temp/10)
        }
        return sum === n
    }
}

const testCases=[
    {
        n:153
    },
    {
        n:372
    },
    {
        n:100
    }
]

const soln = new Solution()

testCases.forEach((ele) => {
    const result=soln.armstrongNumber(ele.n)
    console.log(`result === ${result}`);
})