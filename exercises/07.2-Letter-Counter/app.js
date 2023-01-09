let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let parArr = [];

for (let i = 0; i < par.length; i++) {
    if (par[i] !== " ") {
        parArr.push(par[i])
    }
}

let counts = {};

for(let i = 0; i < parArr.length; i++) {
    if (counts[parArr[i].toLowerCase()]) {
        counts[parArr[i].toLowerCase()]++ 
    } else {
        counts[parArr[i].toLowerCase()] = 1
    }
}

console.log(counts);