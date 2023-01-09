let arrayOfCelsiusValues = [-2,34,56,-10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(celsius => {
	return celsius * 9 / 5 + 32;
});

console.log(arrayOfFahrenheitValues);
console.log(arrayOfCelsiusValues);