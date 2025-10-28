// polyfill for map
// const arr=[1, 2, 3, 4, 5, 6]

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

// const arr1=arr.map((ele) => ele*ele)
// const arr2=arr.myMap((ele) => ele*ele)
// console.log(arr1, arr2);


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

// const value=arr.reduce((prev, curr) => {
//     prev=prev+curr
//     return prev
// }, arr[0])
// const value1=arr.myReduce((prev, curr) => {
//     prev=prev+curr
//     return prev
// }, arr[0])
// console.log(value, value1);


// polyfill for call method
// let car1={
//     color: 'red',
//     company: 'ferrari'
// }

// function purchaseCar(currency, price) {
//     return `I have purchased the ${this.color} - ${this.company} car for ${currency} ${price}`
// }

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

// const bindFun=purchaseCar.myBind(car1, '₹')
// console.log(bindFun(500000));



// Implement the once

// let i=1;
// function incrementBy(value) {
//     i+=value;
//     return i;
// }

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


// function expensiveCalculation(value1, value2) {
//     for (let i=0;i<9999999999;i++) { }
//     return value1*value2
// }

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
    setTimeout(() => {
        return resolve('resolve')
    }, 1)
    // return reject('reject')
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

const s1=Student('piyush')

s1.getName()
