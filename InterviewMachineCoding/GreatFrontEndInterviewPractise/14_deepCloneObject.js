/**
 * @template T
 * @param {T} value
 * @return {T}
 */
export default function deepClone(value) {
    if (typeof value!=="object"||value===null) {
        return value
    }

    else if (Array.isArray(value)) {
        return value.map((item) => {
            return deepClone(item)
        })
    }

    return Object.fromEntries(Object.entries(value).map(([Key, value]) => {
        return [Key,deepClone(value)]
    }))
}
