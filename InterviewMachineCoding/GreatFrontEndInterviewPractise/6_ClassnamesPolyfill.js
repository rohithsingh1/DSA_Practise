/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
    let classNameList=[]
    args.forEach((ele) => {
        if (typeof ele==="string"&&ele.length>0) {
            classNameList.push(ele)
        }
        else if (typeof ele==="object"&&!Array.isArray(ele)) {
            for (const key in ele) {
                if (ele[key]) {
                    classNameList.push(key)
                }
            }
        }
        else if (typeof ele==="object"&&Array.isArray(ele)) {
            const flattenArray=ele.flat(Infinity)
            flattenArray.forEach((arrEle) => {
                if (typeof arrEle==="string"&&arrEle.length>0) {
                    classNameList.push(arrEle)
                }
                else if (typeof arrEle==="object"&&!Array.isArray(arrEle)) {
                    for (const key in arrEle) {
                        if (arrEle[key]) {
                            classNameList.push(key)
                        }
                    }
                }
            })
        }
        else if (ele) {
            classNameList.push(ele)
        }
    })

    return classNameList.join(' ')
}

const result1=classNames('foo', 'bar'); // 'foo bar'
console.log("result1>>>>>", result1);

const result2=classNames('foo', {bar: true}); // 'foo bar'
console.log("result2>>>>>", result2);
const result3=classNames({'foo-bar': true}); // 'foo-bar'
console.log("result3>>>>>", result3);
const result4=classNames({'foo-bar': false}); // ''
console.log("result4>>>>>", result4);
const result5=classNames({foo: true}, {bar: true}); // 'foo bar'
console.log("result5>>>>>", result5);
const result6=classNames({foo: true, bar: true}); // 'foo bar'
console.log("result6>>>>>", result6);
const result7=classNames({foo: true, bar: false, qux: true}); // 'foo qux'
console.log("result7>>>>>", result7);
const result8=classNames('a', ['b', {c: true, d: false}]); // 'a b c'
console.log("result8>>>>>", result8);
const result9=classNames(
    'foo',
    {
        bar: true,
        duck: false,
    },
    'baz',
    {quux: true},
); // 'foo bar baz quux
console.log("result9>>>>>", result9);
const result10=classNames(null, false, 'bar', undefined, {baz: null}, ''); // 'bar'
console.log("result10>>>>>", result10);
