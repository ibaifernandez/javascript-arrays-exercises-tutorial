let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

let resultingNames = allNames.filter(x => {
    if (x[0] === 'R') {
        return x;
    }
});

console.log(resultingNames);