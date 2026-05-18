function myDebounce(callbackfn, delay) {
    let timer=null
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer=setTimeout(() => {
            callbackfn.apply(this, [...args])
        })
    }
}

// let count=0
// const fn=() => count++

// const debounced=myDebounce(fn, 100)

// debounced()
// debounced()
// debounced()

// setTimeout(() => {
//     console.log(count)
// }, 200)

// // Expected: 1

// let count=0
// const fn=() => count++

// const debounced=myDebounce(fn, 100)

// debounced()

// setTimeout(debounced, 150)

// setTimeout(() => {
//     console.log(count)
// }, 300)


// let result=[]

// const fn=(val) => result.push(val)

// const debounced=myDebounce(fn, 100)

// debounced(1)
// debounced(2)
// debounced(3)

// setTimeout(() => {
//     console.log(result)
// }, 200)

// // Expected: [3]


// const obj={
//     value: 10,
//     fn() {
//         console.log(this.value)
//     }
// }

// obj.debounced=myDebounce(obj.fn, 100)

// obj.debounced()

// // Expected: 10


// let called=false

// const fn=() => called=true

// const debounced=myDebounce(fn, 100)

// debounced()

// console.log(called)

// // Expected: false