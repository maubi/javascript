/*const s1 = 8;
const s2 = 5;

const volumes1 = s1 * s1 * s1;
const volumes2 = s2 * s2 * s2;

let total = volumes1 + volumes2;

console.log(total);

function namaFungsi(a, b) {
  console.log(a + "suka" + b);
}
namaFungsi("Aku", "Kamu");*/

function penjumlahan(a, b) {
  return a + b;
}
function pengurangan(a, b) {
  return a - b;
}
// fungsi deklarasi
function perkalian(a, b) {
  return a * b;
}
// fungsi ekspresi
const pembagian = function (a, b) {
  return a / b;
};
let lanjut;
do {
  /* arrow function
const modulus = (a, b) => {
  return a % b;
};*/
  console.log("-- APLIKASI KALKULATOR SEDERHANA --");
  console.log("===================================");
  console.log("Silakan pilih menu dibawah:");
  console.log("1. Penjumlahan");
  console.log("2. Pengurangan");
  console.log("3. Perkalian");
  console.log("4. Pembagian");
  console.log("===================================");

  const menu = prompt("Pilih Menu: ");
  let a, b;
  switch (menu) {
    case "1":
      a = parseInt(prompt("Masukkan Nilai a : "));
      b = parseInt(prompt("Masukkan Nilai b : "));
      console.log(penjumlahan(a, b));
      break;
    case "2":
      a = prompt("Masukkan Nilai a : ");
      b = prompt("Masukkan Nilai b : ");
      console.log(parseInt(pengurangan(a, b)));
      break;
    case "3":
      a = prompt("Masukkan Nilai a : ");
      b = prompt("Masukkan Nilai b : ");
      console.log(parseInt(perkalian(a, b)));
      break;
    case "4":
      a = prompt("Masukkan Nilai a : ");
      b = prompt("Masukkan Nilai b : ");
      console.log(parseFloat(pembagian(a, b)));

    default:
      alert("Menu yang Anda pilih tidak tersedia");
      break;
  }
  lanjut = prompt("Mau pilih menu yang lain? (Y/T)");
} while (lanjut === "Y" || lanjut === "y");
console.log("-- PROGRAM SELESAI --");
