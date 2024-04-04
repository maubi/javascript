console.log("KONVERSI SUHU");
let celcius = parseFloat(prompt("Masukkan suhu derajat Celcius: "));
console.log("Suhu: " + celcius + " Celcius");
const reamur = celcius * (4 / 5);
console.log(celcius + " Celcius = " + reamur + " Reamur");
const fahrenheit = celcius * (9 / 5) + 32;
console.log(celcius + " Celcius = " + fahrenheit + " Fahrenheit");
const kelvin = celcius + 273.15;
console.log(celcius + " Celcius = " + kelvin + " Kelvin");
