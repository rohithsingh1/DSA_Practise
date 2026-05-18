function MyPromise(executor) {
    let state='pending'
    let value=null
    let error=null
    let onFulfilledHandlers=[]
    let onRejectedHandlers=[]

    function resolve(val) {
        if (state!=="pending") {
            return;
        }
        state='fulfilled'
        value=val

        queueMicrotask(() => {
            onFulfilledHandlers.forEach((handler) => handler(value))
        })
    }

    function reject(err) {
        if (state!=="pending") {
            return;
        }
        state='rejected'
        error=err

        queueMicrotask(() => {
            onRejectedHandlers.forEach((handler) => handler(error))
        })
    }

    this.then=function (onFullfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            const handleFullFilled=(val) => {
                try {
                    if (typeof onFullfilled!=="function") {
                        resolve(val)
                    } else {
                        resolve(onFullfilled(val))
                    }
                } catch (error) {
                    reject(error)
                }
            }

            const handleRejected=(err) => {
                try {
                    if (typeof onRejected!=="function") {
                        reject(err)
                    } else {
                        reject(onRejected(err))
                    }
                } catch (error) {
                    reject(error)
                }
            }

            if (state==="pending") {
                onFulfilledHandlers.push(handleFullFilled)
                onRejectedHandlers.push(handleRejected)
            } else if (state==="fulfilled") {
                queueMicrotask(() => handleFullFilled(value))
            } else if (state==="rejected") {
                queueMicrotask(() => handleRejected(value))
            }
        })
    }

    this.catch=function (onRejected) {
        return this.then(null, onRejected)
    }

    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

const p1=new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 promise resolced>>>')
    }, 1000)
})

p1.then((value) => {
    console.log('value>>>>>>', value)
})