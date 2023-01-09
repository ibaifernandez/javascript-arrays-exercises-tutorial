let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

let newArr = theBools.map(x => {
    if (x === 0) {
        return "woko";
    } else {
        return "wiki";
    }
});

console.log(newArr);