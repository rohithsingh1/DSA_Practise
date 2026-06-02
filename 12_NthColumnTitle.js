const nthColumnTitle=(N) => {
    let coumnTitle=''
    while (N>0) {
        N=N-1
        const rem=N%26+65
        coumnTitle=String.fromCharCode(rem)+coumnTitle
        N=Math.floor(N/26)
    }
    return coumnTitle
}

const N=4
const res=nthColumnTitle(N)
console.log(res);
