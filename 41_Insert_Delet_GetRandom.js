
var RandomizedSet=function () {
    this.randomMap=new Map()
    this.list=[]
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert=function (val) {
    if (!this.randomMap.has(val)) {
        this.list.push(val)
        this.randomMap.set(val, this.list.length-1)
        return true
    }
    return false
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove=function (val) {
    if (this.randomMap.has(val)) {
        const index=this.randomMap.get(val)
        this.list[index]=this.list[this.list.length-1]
        this.randomMap.set(this.list[index], index)
        this.list.pop()
        this.randomMap.delete(val)
        return true
    }
    return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom=function () {
    const randomIndex=Math.floor(Math.random()*this.list.length)
    return this.list[randomIndex]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj=new RandomizedSet()
var param_1=obj.insert(1)
obj.remove(2)
obj.insert(2)
obj.insert(8)
obj.insert(19)
obj.getRandom()