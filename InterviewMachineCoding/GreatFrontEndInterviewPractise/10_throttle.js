/**
 * @callback cb
 * @param {number} delay
 * @return {Function}
 */
export default function throttle(cb, delay) {
    let waiting=false
    return function (...args) {
        if (!waiting) {
            cb.apply(this, [...args])
            waiting=true

            setTimeout(() => {
                waiting=false
            }, delay)
        }
    }
}