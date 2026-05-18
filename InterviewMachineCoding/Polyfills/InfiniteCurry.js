function sum(a) {
    let value=0

    // handle first argument safely (including 0)
    if (arguments.length>0) {
        value+=a
    }

    function innerFun(b) {
        // if no arguments → just return same function (don’t break chain)
        if (arguments.length===0) {
            return innerFun
        }

        // accumulate value
        value+=b

        return innerFun
    }

    // expose final value when needed
    innerFun.valueOf=function () {
        return value
    }

    innerFun.toString=function () {
        return String(value)
    }

    return innerFun
}

const result=sum(1)(2)()(3)()()()
console.log("result>>>>>", String(result))