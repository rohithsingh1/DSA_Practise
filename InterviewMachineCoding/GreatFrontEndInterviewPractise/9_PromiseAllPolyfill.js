/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
    return new Promise((resolve, reject) => {
        const promisesLen=iterable.length
        const resolvedPromises=new Array(promisesLen).fill(false)
        if (promisesLen===0) {
            return resolve(resolvedPromises)
        }
        iterable.map((ele, index) => {
            Promise.resolve(ele).then((res) => {
                resolvedPromises[index]=res

                if (resolvedPromises.filter(Boolean).length===promisesLen) {
                    return resolve(resolvedPromises)
                }
            }).catch((error) => {
                return reject(error)
            })
        })
    })
}