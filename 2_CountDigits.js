/**
 * Given a number n, the task is to return the count of digits in this number.
 * 
 * nput: n = 1567
Output: 4
Explanation: There are 4 digits in 1567, which are 1, 5, 6 and 7.

Input: n = 255
Output: 3
Explanation: The are 3 digits in 256, which are 2, 5 and 5.

Input: n = 58964
Output: 5
Explanation: There are 5 digits in 58964, which are 5, 8, 9, 6 and 4.
 * 
 */

class Solution {
    countDigit(n) {
        let count=0
        while (n!==0) {
            count++;
            n = Math.floor(n/10)
        }
        return count
    }

}

/**
 * Counting digits using log base 10 function
 */

class Solution2 {
    countDigit(n) {
        return Math.floor(Math.log10(n)+1)
    }
}
const n=58964;
const solution2=new Solution2()
console.log(solution2.countDigit(n));


/**
 * Converting Number to String
 */

class Solution3 {
    countDigit(n) {
        let str=new String(n)
        return str.length
    }
}

const solution3=new Solution3()
console.log(solution3.countDigit(n));
