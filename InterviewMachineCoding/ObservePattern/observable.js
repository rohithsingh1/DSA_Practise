class Observable {
    constructor() {
        this.observers=[]
    }

    subscribe(fn) {
        this.observers.push(fn)
    }

    unSubscribe(fn) {
        this.observers.filter((observer) => observer!==fn)
    }

    notify(data) {
        this.observers.forEach((observer) => observer(data))
    }
}

export default new Observable()