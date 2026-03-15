// polyfill for map
const arr=[1, 2, 3, 4, 5, 6]

// // here iam adding the myMap method to the existing
// // Array methods or Array object
// Array.prototype.myMap=function (cb) {
//     const arr=this
//     const newArr=[]
//     arr.forEach((ele) => {
//         newArr.push(cb(ele))
//     })
//     return newArr
// }


// polyfill for filter
// const arr=[1, 2, 3, 4, 5, 6]

// Array.prototype.myFilter=function (cb) {
//     const arr=this
//     let j=0
//     for (let i=0;i<arr.length;i++) {
//         if (cb(arr[i])) {
//             arr[j]=arr[i]
//             j++
//         }
//     }
//     return arr.slice(0, j)
// }

// const arr1=arr.filter((ele) => ele%2==0)
// const arr2=arr.myFilter((ele) => ele%2==0)
// console.log(arr1, arr2);


// polyfill for reduce
// const arr=[1, 2, 3, 4, 5, 6]

// Array.prototype.myReduce=function (cb, initialValue) {
//     const arr=this
//     let value
//     if (initialValue) {
//         value=initialValue
//     } else {
//         value=arr[0]
//     }
//     for (let i=initialValue? 0:1;i<arr.length;i++) {
//         value=cb(value, arr[i])
//     }
//     return value
// }

// Array.prototype.myReduce=function (cb, initialValue) {
//     const arr=this
//     let value=initialValue? initialValue:arr[0]
//     for (let i=initialValue? 0:1;i<arr.length;i++) {
//         value=cb(value, arr[i])
//     }
//     return value
// }

// const value111=arr.reduce((prev, curr) => {
//     prev=prev+curr
//     return prev
// }, arr[0])
// const value12222=arr.myReduce((prev, curr) => {
//     prev=prev+curr
//     return prev
// }, arr[0])
// console.log(value12222, value111);


// polyfill for call method
let car1={
    color: 'red',
    company: 'ferrari'
}

function purchaseCar(currency, price) {
    return `I have purchased the ${this.color} - ${this.company} car for ${currency} ${price}`
}

Function.prototype.myCall=function (context, ...args) {
    const func=this
    context.fun1=func
    return context.fun1(...args)
}

// Function.prototype.myCall=function (context, ...args) {
//     const func=this
//     context.myfunc=func
//     return context.myfunc(...args)
// }

// const value=purchaseCar.call(car1, '₹', 5000000)
// const value1=purchaseCar.myCall(car1, '₹', 5000000)
// console.log(value, value1);




// polyfill for apply method

// let car1={
//     color: 'red',
//     company: 'ferrari'
// }

// function purchaseCar(currency, price) {
//     return `I have purchased the ${this.color} - ${this.company} car for ${currency} ${price}`
// }

Function.prototype.myApply=function (context, args) {
    const func=this
    context.myFunc=func
    return context.myFunc(...args)
}

// Function.prototype.myApply=function (context, args) {
//     const func=this
//     context.myfunc=func
//     return context.myfunc(...args)
// }

// const value=purchaseCar.myApply(car1, ['₹', 5000000])
// console.log(value);



// polyfill for bind

// let car1={
//     color: 'red',
//     company: 'ferrari'
// }

// function purchaseCar(currency, price) {
//     return `I have purchased the ${this.color} - ${this.company} car for ${currency} ${price}`
// }

// Function.prototype.myBind=function (context, ...args) {
//     const func=this
//     context.myfunc=func
//     return (...args1) => {
//         return context.myfunc(...args, ...args1)
//     }
// }

Function.prototype.myBind=function (context, ...args) {
    const func=this
    context.fun1=func
    return (...args1) => {
        return context.fun1(...args, ...args1)
    }
}

// const bindFun=purchaseCar.myBind(car1, '₹')
// console.log(bindFun(500000));



// Implement the once

let i=1;
function incrementBy(value) {
    i+=value;
    return i;
}

// function once(cb) {
//     let isCalledOnce;
//     let value
//     return function (...args) {
//         if (!isCalledOnce) {
//             isCalledOnce=true
//             value=cb.call(this, ...args)
//         }
//         return value
//     }
// }

function once(cb) {
    let isCalledOnce
    let value
    return function (...args) {
        if (!isCalledOnce) {
            isCalledOnce=true
            value=cb.call(this, ...args)
        }
        return value
    }
}

// const onced=once(function (val) {
//     debugger
//     return this.multiplier*val
// })

// const onced=once(function (val) {
//     return this.multiplier*val;
// });
// const obj={multiplier: 5, mul: onced};
// console.log(obj.mul(7));

// const incrementByOnce=once(incrementBy);
// console.log(
//     incrementByOnce(2)); // i is now 3; The function returns 3.
// console.log(
//     incrementByOnce(3)); // i is still 3; The function returns the result of the first invocation, which is 3.
// i=4;
// console.log(
//     incrementByOnce(2))


// memoise the function


// function memoize(cb) {
//     let memoizeObj={}
//     return (...args) => {
//         const str=JSON.stringify(args)
//         if (!memoizeObj[str]) {
//             memoizeObj[str]=cb(...args)
//         }
//         return memoizeObj[str]
//     }
// }

function memoize(cb) {
    let memoizeObj={}
    return (...args) => {
        const str=JSON.stringify(args)
        console.log("str>>>>>>>", str);
        if (!memoizeObj[str]) {
            memoizeObj[str]=cb(...args)
        }
        return memoizeObj
    }
}


function expensiveCalculation(value1, value2) {
    for (let i=0;i<9999999999;i++) { }
    return value1*value2
}

// const callbackFun=memoize(expensiveCalculation)

// console.time('first')
// console.log(
//     callbackFun(545, 452))
// console.timeEnd('first')

// console.time('second')
// console.log(
//     callbackFun(545, 452))
// console.timeEnd('second')



function MyPromiseConstructor(executor) {

    let onResolve, onReject, isFullfilled=false, isRejected=false, value;

    this.then=function (cb) {
        onResolve=cb

        if (isFullfilled) {
            onResolve(value)
        }
        return this
    }

    this.catch=function (cb) {
        onReject=cb
        if (isRejected) {
            onReject(value)
        }
        return this
    }

    function resolveFun(val) {
        isFullfilled=true
        value=val
        if (typeof onResolve==='function') {
            onResolve(val)
        }
        return this
    }

    function rejectFun(val) {
        isRejected=true
        value=val
        if (typeof onReject==='function') {
            onReject(val)
        }
        return this
    }

    executor(resolveFun, rejectFun)
}



const myPromise=new MyPromiseConstructor((resolve, reject) => {
    // setTimeout(() => {
    //     return resolve('resolve111111₹')
    // }, 1000)
    return reject('rejectvvvvv')
})

// myPromise.then((res) => {
//     console.log("res>>>>", res);
// }).catch((err) => {
//     console.log("error>>>>>>", err);
// })

// const promise1=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return resolve('promise 1 resolved')
//     }, 1000)
// })

// const promise2=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve('promise 2 resolved')
//         return reject('promise 2 rejected')
//     }, 200)
// })

// const promise3=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return resolve('promise 3 resolved')
//     }, 300)
// })

// Promise.prototype.myAll=function (promisesList=[]) {
//     return new Promise((resolve, reject) => {
//         const promisesListLength=promisesList.length
//         let count=0
//         const resolvedPromises=[]
//         promisesList.forEach((ele) => {
//             Promise.resolve(ele).then((res) => {
//                 count++
//                 resolvedPromises.push(res)
//                 if (count===promisesListLength) {
//                     return resolve(resolvedPromises)
//                 }
//             }).catch((error) => {
//                 return reject(error)
//             })
//         })
//     })
// }

// const promise1=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return reject('promise 1 reject')
//     }, 1000)
// })

// const promise2=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return resolve('promise 2 resolved')
//     }, 2000)
// })

// const promise3=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return resolve('promise 3 resolved')
//     }, 3000)
// })

// Promise.prototype.myAll=function (promisesList) {
//     return new Promise((resolve, reject) => {
//         const resolvedPromises=[]
//         promisesList.forEach((ele) => {
//             Promise.resolve(ele).then((res) => {
//                 resolvedPromises.push(res)
//                 if (resolvedPromises.length===promisesList.length) {
//                     return resolve(resolvedPromises)
//                 }
//             }).catch((error) => {
//                 return reject(error)
//             })
//         })
//     })
// }

// const allpromises=Promise.prototype.myAll([promise1, promise2, promise3])

// allpromises.then((res) => {
//     console.log("res>>>>>>>>", res);
// }).catch((error) => {
//     console.log("error>>>>", error);
// })

// Promise.prototype.myRace=function (promisesList) {
//     return new Promise((resolve, reject) => {
//         promisesList.forEach((ele) => {
//             Promise.resolve(ele).then((res) => {
//                 return resolve(res)
//             }).catch((error) => {
//                 return reject(error)
//             })
//         })
//     })
// }

// const firstPromise=Promise.prototype.myRace([promise1, promise2, promise3])

// firstPromise.then((res) => {
//     console.log("res>>>>>>>>", res);
// }).catch((error) => {
//     console.log("error>>>>>>", error);
// })

// Promise.prototype.myRace=function (promisesList=[]) {
//     return new Promise((resolve, reject) => {
//         promisesList.forEach((ele) => {
//             Promise.resolve(ele).then((res) => {
//                 return resolve(res)
//             }).catch((error) => {
//                 return reject(error)
//             })
//         })
//     })
// }

// const allPromises=Promise.prototype.myAll([promise1, promise2, promise3])

// const firstPromise=Promise.prototype.myRace([promise1, promise2, promise3])

// const firstPromise=Promise.race([promise1, promise2, promise3])

// allPromises.then((res) => {
//     console.log("res>>>>>>>", res);
// }).catch((error) => {
//     console.log("error>>>>>>>", error);
// })

// firstPromise.then((res) => {
//     console.log("res>>>>>>>", res);
// }).catch((error) => {
//     console.log("error>>>>>>>", error);
// })


// const p1={
//     fname: 'thakur',
//     lName: 'rohith'
// }

// const p2=Object.create(p1)

// console.log("p2>>>>>>", p2);

class Student {
    constructor(name) {
        this.name=name
    }

    getName() {
        return this.name
    }
}

// const s1=Student('piyush')

// s1.getName()


// const flattenTheArray=(A) => {
//     const arr=[]

//     const flatTheArray=(A) => {
//         if (Array.isArray(A)) {
//             A.forEach((ele) => {
//                 if (Array.isArray(ele)) {
//                     flatTheArray(ele)
//                 } else {
//                     arr.push(ele)
//                 }
//             })
//         }
//     }

//     flatTheArray(A)
//     return arr
// }

// const A=[1, [2, 3, 4, [5, 6, 7, [8, 9, 10, 11, 12]]]]

// const res=flattenTheArray(A)

// console.log("res>>>>>>", res);


// Using forEach (does not wait for async operations)
async function processItemsForEach(items) {
    items.forEach(async (item) => {
        await someAsyncOperation(item); // This await only pauses the callback, not the forEach loop
        console.log(`Processed (forEach): ${item}`);
    });
    console.log("forEach loop finished (but async operations might still be pending)");
}

// Using map and Promise.all (waits for all async operations)
async function processItemsMapPromiseAll(items) {
    const promises=items.map(async (item) => {
        await someAsyncOperation(item);
        console.log(`Processed (map/Promise.all): ${item}`);
    });
    await Promise.all(promises); // Waits for all promises to resolve
    console.log("map/Promise.all finished");
}

// // Using for...of (waits for each async operation sequentially)
async function processItemsForOf(items) {
    for (const item of items) {
        await someAsyncOperation(item); // Waits for each operation to complete before moving to the next
        console.log(`Processed (for...of): ${item}`);
    }
    console.log("for...of loop finished");
}

async function someAsyncOperation(item) {
    return new Promise(resolve => setTimeout(() => resolve(), 100)); // Simulate async work
}

const data=[1, 2, 3];
// processItemsForEach(data);
// processItemsMapPromiseAll(data);
// processItemsForOf(data);


/// Pipe

const getName=(person) => {
    return person.name
}

const uppercase=(string="") => {
    return string.toUpperCase()
}

const get6Characters=(string="") => {
    return string.slice(0, 6)
}

const reverseString=(string="") => {
    return string.split("").reverse().join('')
}

const value=reverseString(get6Characters(uppercase(getName({name: "Buckethead"}))))

const pipe=(...functions) => {
    return (...args) => {
        return functions.reduce((currentValue, currentFunction) => {
            return currentFunction(currentValue)
        }, ...args)
    }
}

const compose=(...functions) => {
    return (...args) => {
        return functions.reduceRight((currentValue, currentFunction) => {
            return currentFunction(currentValue)
        }, ...args)
    }
}

// const num111=[1, 2, 3, 4, 5, 6]
// const reduceRightValue=num111.reduceRight((prevValue, currentValue) => {
//     debugger
//     prevValue=prevValue+currentValue
//     return prevValue
// }, 0)

// console.log("reduceRightValue>>>>>>", reduceRightValue);


const value1=pipe(
    getName,
    uppercase,
    get6Characters,
    reverseString
);
const value2=value1({name: 'Buckethead'})

const value3=compose(
    reverseString,
    get6Characters,
    uppercase,
    getName
);

const value4=value3({name: 'Buckethead'})

// console.log("value>>>>>>", value, value2, value4);


function flattenObject(obj) {
    const result={}

    function rescursiveFlattenObject(obj, parentKey) {
        for (let key in obj) {
            const newKey=parentKey? `${parentKey}.${key}`:key

            if (typeof obj[key]==="object"&&!Array.isArray(obj[key])) {
                rescursiveFlattenObject(obj[key], newKey)
            } else {
                result[newKey]=obj[key]
            }
        }
    }
    rescursiveFlattenObject(obj, '')

    return result
}

const obj={
    name: "Rohith",
    address: {
        city: "Hyderabad",
        location: {
            pincode: 500001,
        },
        favortitePlaces: ["Hyderabad", "bangalore"]
    }
};

const input={
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};


// const result=flattenObject(input)
// console.log(result);


function nthtermRecurssion(n) {
    if (n<=1) {
        return 1
    } else if (n===2) {
        return 2
    } else if (n===3) {
        return 3
    } else {
        return nthtermRecurssion(n-1)+nthtermRecurssion(n-2)+nthtermRecurssion(n-3)
    }
}

// const result=nthtermRecurssion(5)
// console.log("result>>>>>", result);

function reverseArray(A) {
    const len=A.length
    let j=len-1
    for (let i=0;i<Math.floor(len/2);i++) {
        let temp=A[i]
        A[i]=A[j]
        A[j]=temp
        j--
    }
    return A
}

// const result=reverseArray([1, 2, 3, 4, 5])
// console.log("result>>>>>", result);

function maxRepeating(A) {
    let char=''
    let maxCount=0
    let i=0
    while (i<A.length) {
        let j=i
        let count=0
        while (A[i]===A[j]) {
            count++
            j++
        }
        if (count>maxCount) {
            maxCount=count
            char=A[i]
        }
        i=j
    }
    return char
}

const str='abcde'
// const result=maxRepeating(str)
// console.log("result>>>>", result);


// JavaScript program to convert number into words by Mapping Key Numeric Values
// with English Words

// function convertToWordsRec(n, values, words) {
//     let res="";

//     // Iterating over all key Numeric values
//     for (let i=0;i<values.length;i++) {
//         debugger
//         let value=values[i];
//         let word=words[i];

//         // If the number is greater than or equal to the current numeric value
//         if (n>=value) {

//             // Append the quotient part
//             // If the number is greater than or equal to 100
//             // then only we need to handle that
//             if (n>=100)
//                 res+=convertToWordsRec(Math.floor(n/value), values, words)+" ";

//             // Append the word for numeric value
//             res+=word;

//             // Append the remainder part
//             if (n%value>0)
//                 res+=" "+convertToWordsRec(n%value, values, words);

//             return res;
//         }
//     }

//     return res;
// }

// function convertToWords(n) {
//     if (n===0)
//         return "Zero";

//     // Key Numeric values and their corresponding English words
//     const values=[1000000000, 1000000, 1000, 100, 90, 80, 70,
//         60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 14,
//         13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

//     const words=["Billion", "Million", "Thousand", "Hundred",
//         "Ninety", "Eighty", "Seventy", "Sixty", "Fifty",
//         "Forty", "Thirty", "Twenty", "Nineteen",
//         "Eighteen", "Seventeen", "Sixteen", "Fifteen",
//         "Fourteen", "Thirteen", "Twelve", "Eleven",
//         "Ten", "Nine", "Eight", "Seven", "Six", "Five",
//         "Four", "Three", "Two", "One"];

//     debugger

//     const res=convertToWordsRec(n, values, words);

//     debugger

//     return res
// }

// let n=2147483647;
// console.log(convertToWords(n));


// JavaScript program to convert number into words by breaking 
// it into groups of three

function convertToWords(n) {
    if (n===0)
        return "Zero";

    // Words for numbers 0 to 19
    const units=[
        "", "One", "Two", "Three",
        "Four", "Five", "Six", "Seven",
        "Eight", "Nine", "Ten", "Eleven",
        "Twelve", "Thirteen", "Fourteen", "Fifteen",
        "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];

    // Words for numbers multiple of 10        
    const tens=[
        "", "", "Twenty", "Thirty", "Forty",
        "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];

    const multiplier=["", "Thousand", "Million", "Billion"];

    let res="";
    let group=0;

    // Process number in group of 1000s
    while (n>0) {
        debugger
        if (n%1000!==0) {

            let value=n%1000;
            let temp="";

            // Handle 3 digit number
            if (value>=100) {
                temp=units[Math.floor(value/100)]+" Hundred ";
                value%=100;
            }

            // Handle 2 digit number
            if (value>=20) {
                temp+=tens[Math.floor(value/10)]+" ";
                value%=10;
            }

            // Handle unit number
            if (value>0) {
                temp+=units[value]+" ";
            }

            // Add the multiplier according to the group
            temp+=multiplier[group]+" ";

            // Add the result of this group to overall result
            res=temp+res;
        }
        n=Math.floor(n/1000);
        group++;
    }

    // Remove trailing space
    return res.trim();
}

// const n=2147483647;
// console.log(convertToWords(n));

// JavaScript program to convert number into Indian words

// function convertToIndianWords(n) {
//     if (n===0) return "Zero";

//     const units=[
//         "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
//         "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
//         "Seventeen", "Eighteen", "Nineteen"
//     ];

//     const tens=[
//         "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
//     ];

//     // Indian multipliers after hundreds/thousands/lakh/crore
//     const multipliers=["", "Thousand", "Lakh", "Crore", "Arab"];

//     function twoDigitToWords(num) {
//         debugger
//         if (num<20) return units[num];
//         const t=tens[Math.floor(num/10)];
//         const u=units[num%10];
//         const res=(t+(u? " "+u:"")).trim();
//         return res
//     }

//     function threeDigitToWords(num) {
//         debugger
//         let out="";
//         if (num>=100) {
//             out+=units[Math.floor(num/100)]+" Hundred";
//             num%=100;
//             if (num) out+=" ";
//         }
//         if (num) out+=twoDigitToWords(num);
//         const res=out.trim();
//         return res
//     }

//     let res=[];

//     // Last 3 digits
//     let lastThree=n%1000;
//     if (lastThree) res.unshift(threeDigitToWords(lastThree));

//     n=Math.floor(n/1000);
//     let group=1; // Thousand onwards, each group is 2 digits

//     while (n>0) {
//         const part=n%100; // 2-digit group
//         if (part) {
//             res.unshift(`${twoDigitToWords(part)} ${multipliers[group]}`.trim());
//         }
//         n=Math.floor(n/100);
//         group++;
//     }

//     return res.join(" ").trim();
// }

// function convertToIndianWords(num) {
//     if (num===0) {
//         return "Zero"
//     }

//     const units=['', 'One', "Two", "Three", 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', "Eleven", "Tweleve", "Thirteen", "Fourteen", "Fiftheen", "Sixteen", "Seventeen", 'Eighteen', 'Nineteen']

//     const tens=['', "", 'Twenty', "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighthy", "Ninty"]

//     const multipler=['', 'Thousands', 'Lakhs', 'Cores', 'Arabs']

//     function twoDigitToWords(num) {
//         if (num<20) {
//             return units[num]
//         }

//         return `${tens[Math.floor(num/10)]} ${units[num%10]}`
//     }

//     function threeDigitToWords(num) {
//         let str=''
//         if (num>=100) {
//             str=str+units[Math.floor(num/100)]+" Hundred"
//             num=num%100
//         }

//         if (num>=0) {
//             str=str+" "+twoDigitToWords(num)
//         }

//         return str.trim()
//     }

//     const result=[]

//     let firstThreeDigits=num%1000
//     if (firstThreeDigits) {
//         const str=threeDigitToWords(firstThreeDigits)
//         result.push(str)
//     }

//     num=Math.floor(num/1000)
//     let group=1

//     while (num>0) {
//         let twoDigitNumber=num%100
//         let str=`${twoDigitToWords(twoDigitNumber)} ${multipler[group]}`
//         result.push(str)
//         num=Math.floor(num/100)
//         group++
//     }

//     return result.reverse().join(' ')
// }

// const n=2147483647;
// console.log(convertToIndianWords(n));
// Two Arab Fourteen Crore Seventy Four Lakh Eighty Three Thousand Six Hundred Forty Seven


function createLinkedList(N) {
    class Node {
        constructor(data) {
            this.data=data
            this.next=null
        }
    }

    let prevNode=null
    let head=null
    for (let i=0;i<N;i++) {
        if (i===0) {
            head=new Node(i+1)
            prevNode=head
        } else {
            const currentNode=new Node(i+1)
            prevNode.next=currentNode
            prevNode=currentNode
        }
    }

    return head
}

const result=createLinkedList(5)
// console.log("result>>>>>>", result);


const flattenTheArray=(A=[]) => {
    for (let i=0;i<A.length;i++) {
        while (Array.isArray(A[i])) {
            const nestedArr=A[i]
            A.splice(i, 1, ...nestedArr)
        }
    }
    return A
}

const arr1=[1, 2, 3, [4, [5, 6, [7, 8, 9]]], [10, 11, [12, [13]]]]
// console.log("result>>>>>>", flattenTheArray(arr1));

function debounce(callback, delay) {
    let timer=null;
    let argsToRun=null;
    function innerFunc(...args) {
        argsToRun=args;
        if (timer) {
            clearTimeout(timer);
            timer=null;
        }

        timer=setTimeout(() => {
            if (!timer) {
                return
            }
            callback.apply(this, args);
        }, delay);
    }

    innerFunc.cancel=function () {
        clearTimeout(timer);
        timer=null;
    };

    innerFunc.flush=() => {
        callback.apply(this, argsToRun);
        clearTimeout(timer);
        timer=null;
    };

    return innerFunc;
}


const increment=debounce(function (context, delta) {
    console.log("context>>>>>>>", context);
    console.log("delta>>>>>", delta);
    context.val+=delta;
}, 10);

const obj123={
    val: 2,
    increment,
};

console.log('obj123>>>>>>>>val1111', obj123.val);
obj123.increment(3);
console.log('obj123>>>>>>>>val22222', obj123.val);

setTimeout(() => {
    console.log('obj123>>>>>>>>val33333', obj123.val);
}, 20)
