const scoresById={1: 10, 2: 20, 3: 30};
function fetchScore(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve(scoresById[id]??0), Math.random()*60+20);
    });
}
async function getTotalScore(ids) {
    let total=0;
    return new Promise((resolve) => {
        ids.map(async (id) => {
            const score=await fetchScore(id)
            console.log("score>>>>>", score);
            total=total+score
        });
        return resolve(total)
    })
    // return Promise.resolve().then(() => {
    //     ids.map(async (id) => {
    //         const score=await fetchScore(id)
    //         console.log("score>>>>>", score);
    //         total=total+score
    //     });
    //     return total;
    // });
}
getTotalScore([1, 2, 3]).then(total => {
    console.log('total:', total);
    console.log('Expected total:', 60);
});