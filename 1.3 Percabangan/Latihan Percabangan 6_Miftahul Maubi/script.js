console.log("MENU KALKULATOR SEDERHANA");
console.log("1. Penjumlahan");
console.log("2. Pengurangan");
console.log("3. Perkalian");
console.log("4. Pembagian");
console.log("5. Keluar Program");
console.log("");

let angka_pertama;
let angka_kedua;

const menu = prompt("Pilih Salah Satu: ");
if (menu <= 4) {
  angka_pertama = parseInt(prompt("Masukkan Angka Pertama: "));
  angka_kedua = parseInt(prompt("Masukkan Angka Kedua: "));
  console.log("Angka Pertama: " + angka_pertama);
  console.log("Angka Kedua: " + angka_kedua);
}

console.log("");
let hasil;
switch (menu) {
  case "1":
    hasil = angka_pertama + angka_kedua;
    console.log(
      "Hasil dari " + angka_pertama + "+" + angka_kedua + "= " + hasil
    );
    break;
  case "2":
    hasil = angka_pertama - angka_kedua;
    console.log(
      "Hasil dari " + angka_pertama + "-" + angka_kedua + "= " + hasil
    );
    break;
  case "3":
    hasil = angka_pertama * angka_kedua;
    console.log(
      "Hasil dari " + angka_pertama + "x" + angka_kedua + "= " + hasil
    );
    break;
  case "4":
    hasil = angka_pertama / angka_kedua;
    console.log(
      "Hasil dari " + angka_pertama + ":" + angka_kedua + "= " + hasil
    );
    break;

  default:
    console.log("Keluar Program. Terima Kasih");
    break;
}
