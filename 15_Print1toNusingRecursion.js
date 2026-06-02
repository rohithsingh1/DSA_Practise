/**
 * 
 */

function fun(n, list) {
    if (n<=0) {
        return [...list]
    }
    return fun(n-1,[...list,n])
}

const res=fun(5,[])
console.log('res>>>>>>>',res);
