let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

function deletePerson(str) {
    let newArr = people.filter((element) => element !== str) 
    return newArr;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
