let smallArr = [];
let bigArr = [];

/*

function matrixBuilder(num) {
    do {
        do {
        smallArr.push(Math.floor(Math.random() * 2));
    } while (smallArr.length < num);
    bigArr.push(smallArr);
    smallArr = [];
} while (bigArr.length < num);
    return bigArr;
};

*/

function matrixBuilder(num) {
    if (smallArr.length < num) {
        for (let i = 0; i < num; i++) {
            smallArr.push(Math.floor(Math.random() * 2));
        }
        for (let i = 0; i < num; i++) {
        bigArr.push(smallArr);
        }
    } else {
        smallArr = [];
    }
    return bigArr;
}



// do not change anything from this line down
console.log(matrixBuilder(5));