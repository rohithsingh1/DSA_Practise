/**
 * @param {Array<any>} iterable
 * @param {Function} callbackFn
 *
 * @return {Promise}
 */
export default function mapAsync(iterable, callbackFn) {
    return new Promise((resolve, reject) => {
        const len=iterable.length
        const resolvedPromises=new Array(len).fill(false)

        if (len===0) {
            return resolve([])
        }

        iterable.map((ele, index) => {
            Promise.resolve(callbackFn(ele)).then((res) => {
                resolvedPromises[index]=res
                if (resolvedPromises.filter(Boolean).length===len) {
                    return resolve(resolvedPromises)
                }
            }).catch((error) => {
                return reject(error)
            })
        })
    })
}

export default function mapAsync(iterable, callbackFn) {
    return Promise.all(iterable.map(callbackFn))
}

const asyncDouble=(x) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(x*2);
        }, 10);
    });

const doubled=await mapAsync([1, 2], asyncDouble);
console.log(doubled); // [2, 4]