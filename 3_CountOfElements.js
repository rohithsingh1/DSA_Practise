const CountOfElements=(A=[]) => {
    const len=A.length
    let subArrays=[]
    for (let i=0;i<len;i++) {
        let tempArr=[]
        for (let j=i;j<len;j++) {
            tempArr.push(A[j])
            subArrays.push([...tempArr])
        }
    }
    return subArrays
}

// const arr=[1, 2, 3, 4, 5]
// const res=CountOfElements(arr)
// console.log("res>>>>", res);


const faqs=[
    {
        question: "What is this app about?",
        answer: "This app helps users track and improve their daily habits.",
    },
    {
        question: "How do I reset my password?",
        answer:
            "Click on 'Forgot Password' on the login screen and follow instructions.",
    },
    {
        question: "Can I use this app offline?",
        answer: "Yes, some features are available offline after the initial setup.",
    },
];

const obj=faqs.reduce((accur, curr, index) => {
    if (!accur.hasOwnProperty(index)) {
        accur[index]=false;
    }
    return accur
}, {});
console.log("obj>>>>>", obj);
