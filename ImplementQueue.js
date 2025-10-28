class Queue {
    constructor() {
        this.leftArr=[]
        this.rightArr=[]
        this.rightIndx=0
        this.queueLength=0
    }

    enqueue(value) {
        this.leftArr.push(value)
        this.rightIndx=this.leftArr.length-1
    }

    getQueueLength() {
        return this.leftArr.length+this.rightArr.length
    }

    getRightIndex() {
        return this.leftArr.length-1
    }

    dequeue() {
        while (this.leftArr.length!==0) {
            this.rightArr.push(this.leftArr.pop())
        }
        return this.rightArr.pop()
    }
}

const queue=new Queue()
const arr=[1, 2, 3, 4, 5, 6]
const result=[]

arr.forEach((ele) => {
    queue.enqueue(ele)
})

if (queue.getQueueLength()>0) {
    while (queue.getQueueLength()>0) {
        result.push(queue.dequeue())
    }
}

console.log("result>>>>>>", result);

