/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseRace(iterable) {
    return new Promise((resolve, reject) => {
        for (const ele of iterable) {
            Promise.resolve(ele).catch((error) => {
                return reject(error)
            }).then((res) => {
                return resolve(res)
            })
        }
    })
}