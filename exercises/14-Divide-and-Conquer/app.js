let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

function mergeTwoList(array) {
    let even = array.filter((element) => element % 2 === 0);
    let odd = array.filter((element) => element % 2 !== 0);
    console.log(odd)
    console.log(even)
    let finalResult = [].concat(odd, even);
    return finalResult;
}

console.log(mergeTwoList(list_of_numbers))