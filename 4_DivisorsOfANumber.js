/**
 * Given a natural number n, print all distinct divisors of it.

Examples: 

 Input : n = 10       
 Output: 1 2 5 10

 Input:  n = 100
 Output: 1 2 4 5 10 20 25 50 100

 Input:  n = 125
 Output: 1 5 25 125 
 */

function DivisorsOfNumber(n) {
    const sqrtOfN=Math.floor(Math.sqrt(n))
    const divisorsList=[]
    for (let i=1;i<=sqrtOfN;i++){
        if (n%i===0) {
            divisorsList.push(i)
        }
    }
    for (let i = sqrtOfN-1;i>=1; i--) {
        if (n%i===0) {
            divisorsList.push(Math.floor(n/i))
        }
    }
    return divisorsList
}

const testCases = [
    {
        n:10
    },
    {
        n:100
    },
    {
        n:125
    },
    {
        n:25
    }
]

testCases.forEach((ele) => {
    const result=DivisorsOfNumber(ele.n)
    console.log(`DIvisors of ${ele.n} ==== ${result}`);
    
})