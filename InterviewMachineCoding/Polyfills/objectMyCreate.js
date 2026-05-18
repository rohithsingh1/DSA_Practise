function myObjectCreate(obj, propObj) {
    let newObj={}
    if (obj===null) {
        newObj.__proto__=null
    } else {
        newObj.__proto__=obj
    }
    return newObj
}

// const result=myObjectCreate(null)
// console.log("result>>>>", result)

// const proto={a: 1}

// const obj=myObjectCreate(proto)

// console.log("Object.getPrototypeOf(obj) === proto>>>>>", Object.getPrototypeOf(obj)===proto)
// obj.a=3
// console.log("obj>>>>>", obj)


// const proto={greet() {return "hi"} }

// const obj=myObjectCreate(proto)

// console.log("result>>>>", obj.greet()==="hi")


// function Person() { }
// Person.prototype.sayHi=function () {return "hi"}

// const obj=myObjectCreate(Person.prototype)

// console.log('result>>>>>>', obj.sayHi()==="hi")


const grandParent={a: 1}
const parent=myObjectCreate(grandParent)
const child=myObjectCreate(parent)

console.log("result>>>>>", child.a)