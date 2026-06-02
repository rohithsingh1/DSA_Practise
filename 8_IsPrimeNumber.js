/**
 * Given a number A. Return 1 if A is prime and return 0 if not. 

Note : 
The value of A can cross the range of Integer.


Problem Constraints

1 <= A <= 109


Input Format

The first argument is a single integer A.


Output Format

Return 1 if A is prime else return 0.


Example Input

Input 1:
A = 5
Input 2:

A = 10


Example Output

Output 1:
1
Output 2:

0


Example Explanation

Explanation 1:
5 is a prime number.
Explanation 2:

10 is not a prime number.
 * 
 */


function isPrimeNumber(n) {
    if (n===1) {
        return false
    }
    else if (n===2||n===3||n===5||n===7) {
        return true
    }
    else if (n%2===0||n%3===0) {
        return false
    }
    else {
        const sqrtOfN=Math.floor(Math.sqrt(n))
        for (let i=5;i<=sqrtOfN;i++){
            if (n%i===0) {
                return false
            }
        }
        return true
    }
}