// If statement
/*
const total_belanja = 20000;

if (total_belanja > 100000) {
  console.log("Selamat Anda mendapatkan hadiah!");
}
console.log("Terimakasih sudah berbelanja.");
*/

//If....else statement
/*
const total_belanja = prompt("Masukkan total belanja: ");
if (total_belanja > 100000) {
  console.log("Selamat Anda mendapatkan Piring Cantik!");
} else {
  console.log("Mohon Maaf Anda belum mendapatkan hadiah.");
}

console.log("Terimakasih sudah berbelanja!");
*/
//Login
const password = "legendofaang";
if (password === "legendofaang") {
  console.log("Silahkan masuk, Aang!");
} else {
  console.log("Password salah, silahkan coba lagi!");
}

//If...else IF... else statement

const nilai = prompt("Masukkan nilai Anda: ");
if (nilai >= 80) {
  console.log("Nilai Anda berpredikat BAIK");
} else if (nilai >= 65) {
  console.log("Nilai Anda berpredikat CUKUP");
} else if (nilai >= 50) {
  console.log("Nilai Anda berpredikat BURUK");
} else if (nilai <= 50) {
  console.log("Nilai Anda berpredikat SANGAT BURUK");
}

//Switch statement

const warna = "merah";
let pesan = "";
switch (warna) {
  case "merah":
    pesan = "Anda memilih warna merah";
    break;
  case "biru":
    pesan = "Anda memilih warna biru";
    break;
  case "orange":
    pesan = "Anda memilih warna orange";
    break;
  default:
    pesan = "Warna yang Anda pilih tidak ada";
    break;
}
console.log(pesan);
