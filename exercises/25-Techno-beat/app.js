/*
function lyricsGenerator(arr) {
    let finalStr = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            finalStr += "Boom ";
        } else if (arr[i] === 1) {
            if (arr[i+1] === 1 && arr[i+2] === 1) {
                finalStr += '!!!Break the base!!! ';
            } else if (arr[i+1] === 1 && arr[i+2] === 0) {
                finalStr += 'Drop the base ';
            } 
        }
    }
    return finalStr;
}
*/

function lyricsGenerator(arr){
    let finalStr = "";
    let oneCounter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0){
            finalStr = finalStr + "Boom "
            oneCounter = 0
        } else if (arr[i] == 1){
            finalStr = finalStr + "Drop the base "
            oneCounter++;
            if (oneCounter === 3) {
                finalStr = finalStr + "!!!Break the base!!! "
            }
        }
    }
    return finalStr
}

// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]));

console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))

console.log(lyricsGenerator([0,0,0]))

console.log(lyricsGenerator([1,0,1]))

console.log(lyricsGenerator([1,1,1]))
