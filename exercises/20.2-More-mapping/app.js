

let myNumbers = [23,234,345,4356234,243,43,56,2];

function myFunction(x) {
    return x * 3;
}

let newArray = myNumbers.map(x => {
    return myFunction(x)
});
console.log(newArray);