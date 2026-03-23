Object.myCreate=function (proto) {
    if (proto!==null&&typeof proto!=="object") {
        throw new TypeError("Prototype must be an object or null")
    }
    if (proto===null) {
        return {__proto__: null}
    }
    function F() {
    }
    F.prototype=proto
    return new F()
}

const animal={
    speak() {
        console.log("Animal speaks");
    }
};

const dog=Object.myCreate(null);

dog.speak=function () {
    console.log("animal speaks");

}

console.log(dog);


