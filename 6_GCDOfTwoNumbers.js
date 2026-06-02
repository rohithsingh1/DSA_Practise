/**
 * 
 * Given two positive integers a and b, find GCD of a and b.

Note: Don't use the inbuilt gcd function

Examples:

Input: a = 3, b = 6
Output: 3
Explanation: GCD of 3 and 6 is 3
Input: a = 1, b = 1
Output: 1
Explanation: GCD of 1 and 1 is 1
 */


class Solution {
    /**
    * @param number a
    * @param number b

    * @returns number
    */
    gcd(a, b) {
        if (b===0) {
            return a;
        }
        if (a>=b) {
            return this.gcd(b, a%b);
        } else {
            return this.gcd(a,b%a)
        }
    }
}

const testCases=[
    {
        a:3,b:6
    },
    {
        a:1, b:1
    },
    {
        a:36, b:60
    },
    {
        a: 20,
        b: 28
    },
    {
        a:98,b:56
    }
]

const soln = new Solution()

testCases.forEach((ele) => {
    const {a,b} = ele
    const result=soln.gcd(a, b)
    console.log(`GCD(${a},${b}) ====> ${result}`);
    
})
