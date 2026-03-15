class EventEmitter {
    constructor() {
        this.emitters=new Map();
    }

    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    on(eventName, listener) {
        debugger
        if (this.emitters.has(eventName)) {
            const listeners=this.emitters.get(eventName)
            this.emitters.set(eventName, [...listeners, listener])
        } else {
            this.emitters.set(eventName, [listener])
        }

        return this
    }

    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    off(eventName, listener) {
        debugger
        if (this.emitters.has(eventName)) {
            const listeners=this.emitters.get(eventName)
            const lastListenerIndex=listeners.findLastIndex((ele) => {
                return ele===listener
            })
            if (lastListenerIndex>-1) {
                listeners.splice(lastListenerIndex, 1)
            }
            this.emitters.set(eventName, listeners)
        }
        return this
    }

    /**
     * @param {string} eventName
     * @param  {...any} args
     * @returns {boolean}
     */
    emit(eventName, ...args) {
        debugger
        if (this.emitters.has(eventName)) {
            const listeners=this.emitters.get(eventName)
            if (listeners.length>0) {
                listeners.forEach((event) => {
                    event.apply(this, args)
                })
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
}

const emitter=new EventEmitter();

let sum=0;
function addTwoNumbers(a, b) {
    sum=a+b;
}
emitter.on('foo', addTwoNumbers);

const result1=emitter.emit('foo', 2, 5)
console.log("result1111,sum>>>>>>", result1, sum);

emitter.off('foo', addTwoNumbers);
const result2=emitter.emit('foo', -3, 9)
console.log("result22222,sum>>>>>>", result2, sum);
