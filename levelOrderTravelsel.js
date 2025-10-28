
const levelOrderTraversal=(root) => {
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

        getRightIndexElement() {
            return this.leftArr[this.leftArr.length-1]
        }

        dequeue() {
            if (this.rightArr.length>0) {
                return this.rightArr.pop()
            }
            while (this.leftArr.length!==0) {
                this.rightArr.push(this.leftArr.pop())
            }
            return this.rightArr.pop()
        }
    }

    const result=[]
    const queue=new Queue()
    queue.enqueue(root)
    while (queue.getQueueLength()>0) {
        const tempRight=queue.getRightIndex()
        result.push(queue.getRightIndexElement())
        for (let i=0;i<=tempRight;i++) {
            const node=queue.dequeue()
            if (node.left) {
                queue.enqueue(node.left)
            }
            if (node.right) {
                queue.enqueue(node.right)
            }
        }
    }
    return result
}

const arr=Array(13).fill(0).map((_, index) => index+1)

const arr1=Array.from({length: 13}, (_, index) => index+1).slice(10, 15)
console.log("arrr>>>>>>", arr);
console.log("arrr1>>>>>>", arr1, arr1.length, Math.ceil(13/5), 13/5);
