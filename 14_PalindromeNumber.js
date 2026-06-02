/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, 
it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?

 */


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0) {
        return false
    } else {
        let tempNum=x;
        let reversedNum = 0
        while (tempNum!==0) {
            const lastDigit=tempNum%10
            reversedNum=reversedNum*10+lastDigit
            tempNum = Math.floor(tempNum/10)
        }
        return x === reversedNum
    }
};

const testCases=[
    {
        x:121
    },
    {
        x:-121
    },
    {
        x:10
    },
    {
        x:0
    },
]

testCases.forEach((ele) => {
    const result=isPalindrome(ele.x)
    console.log(`${ele.x} is isisPalindrome ${result}`);
})