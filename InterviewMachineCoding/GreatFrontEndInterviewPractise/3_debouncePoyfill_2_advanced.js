function debounce(callback, delay) {
    let timer=null;
    let argsToRun=null;
    let context=null
    function innerFunc(...args) {
        argsToRun=args;
        if (timer) {
            clearTimeout(timer);
            timer=null;
        }

        context=this

        timer=setTimeout(() => {
            if (!timer) {
                return
            }
            callback.apply(this, args);
            clearTimeout(timer);
            timer=null;
        }, delay);
    }

    innerFunc.cancel=function () {
        clearTimeout(timer);
        timer=null;
    };

    innerFunc.flush=function () {
        console.log("this in flush method>>>>>>>", this);
        console.log("context>>>>>>", context);

        if (timer) {
            callback.apply(context, argsToRun);
        }
        clearTimeout(timer);
        timer=null;
    };

    return innerFunc;
}

const increment=debounce(function (delta) {
    this.val+=delta;
}, 10);

const obj={
    val: 2,
    increment,
};

console.log("obj.val>>>>>111111", obj.val);
obj.increment(3);
console.log("obj.val>>>>>2222222", obj.val);
obj.increment.flush();
console.log("obj.val>>>>>3333333", obj.val);

setTimeout(() => {
    console.log("obj.val>>>>>4444444", obj.val);
}, 100);

// let i=0;
// const increment=debounce(() => {
//     i++;
// }, 10);

// console.log("i>>>>>11111", i);
// increment();
// console.log("i>>>>>22222", i);

// setTimeout(() => {
//     console.log("i>>>>>33333", i);
// }, 20);

// setTimeout(() => {
//     console.log("i>>>>>444444", i);
//     increment.flush();
//     console.log("i>>>>>555555", i);
//     // Add a longer delay because the browser timer is unreliable.
// }, 100);