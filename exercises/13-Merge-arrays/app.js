let chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

/*

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    for (let i = 0; i < firstArray.length; i++) {
        newArray.push(firstArray[i])
    }
    for (let i = 0; i < secondArray.length; i++) {
        newArray.push(secondArray[i])
    }
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));

*/

function mergeArrays(array1, array2) {
    return [...array1, ...array2]
}
console.log(mergeArrays(chunk_one, chunk_two))