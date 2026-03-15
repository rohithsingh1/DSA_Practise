/**
 * @param {...(any|Object|Array<any|Object|Array>|Function)} args
 * @return {string}
 */
export default function classNames(...args) {
    let uniqueClassNames=new Set()
    args.forEach((ele) => {
        if (typeof ele==="string"&&ele.length>0) {
            if (!uniqueClassNames.has(ele)) {
                if (Number(ele)===1) {
                    uniqueClassNames.add(Number(ele))
                } else {
                    uniqueClassNames.add(ele)
                }
            }
        }
        else if (typeof ele==="object"&&!Array.isArray(ele)) {
            for (const key in ele) {
                if (uniqueClassNames.has(Number(key))) {
                    if (!ele[key]) {
                        uniqueClassNames.delete(Number(key))
                    }
                }
                else if (uniqueClassNames.has(key)) {
                    if (!ele[key]) {
                        uniqueClassNames.delete(key)
                    }
                } else {
                    if (ele[key]) {
                        uniqueClassNames.add(key)
                    }
                }
            }
        }
        else if (typeof ele==="object"&&Array.isArray(ele)) {
            const flattenArray=ele.flat(Infinity)
            flattenArray.forEach((arrEle) => {
                if (typeof arrEle==="string"&&arrEle.length>0) {
                    if (!uniqueClassNames.has(arrEle)) {
                        uniqueClassNames.add(arrEle)
                    }
                }
                else if (typeof arrEle==="object"&&!Array.isArray(arrEle)) {
                    for (const key in arrEle) {
                        if (uniqueClassNames.has(key)) {
                            if (!arrEle[key]) {
                                uniqueClassNames.delete(key)
                            }
                        } else {
                            if (arrEle[key]) {
                                uniqueClassNames.add(key)
                            }
                        }
                    }
                }
                else if (typeof arrEle==="function") {
                    const returnedFunValue=arrEle()
                    if (!uniqueClassNames.has(returnedFunValue)) {
                        if (Number(returnedFunValue)===1) {
                            uniqueClassNames.add(Number(returnedFunValue))
                        } else {
                            uniqueClassNames.add(returnedFunValue)
                        }
                    }
                }
            })
        }
        else if (typeof ele==="function") {
            const returnedFunValue=ele()
            if (!uniqueClassNames.has(returnedFunValue)) {
                if (Number(returnedFunValue)===1) {
                    uniqueClassNames.add(Number(returnedFunValue))
                } else {
                    uniqueClassNames.add(returnedFunValue)
                }
            }
        }
        else if (ele) {
            if (!uniqueClassNames.has(ele)) {
                uniqueClassNames.add(ele)
            }
        }
    })

    return Array.from(uniqueClassNames.keys()).join(' ')
}

const result1=classNames('foo', 'foo'); // 'foo'
console.log('result1>>>>>>>>', result1);

const result2=classNames({foo: true}, {foo: true}); // 'foo'
console.log('result2>>>>>>>>', result2);
const result3=classNames({foo: true, bar: true}, {foo: false}); // 'bar'
console.log('result3>>>>>>>>', result3);
const result4=classNames('foo', () => 'bar'); // 'foo bar'
console.log('result4>>>>>>>>', result4);
const result5=classNames('foo', () => 'foo'); // 'foo'
console.log('result5>>>>>>>>', result5);