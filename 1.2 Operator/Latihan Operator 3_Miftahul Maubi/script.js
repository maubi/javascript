console.log("KALKULATOR BMI");
let tinggi = prompt("Masukkan Tinggi Badan: ");
let berat = prompt("Masukkan Berat Badan: ");
console.log("Tinggi Badan: " + tinggi + " cm");
console.log("Berat Badan: " + berat + " kg");
const bmi = (berat / (tinggi * tinggi)) * 10000;
console.log("Index BMI Anda: " + bmi);
