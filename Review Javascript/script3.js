const x = prompt("Masukkan angka: ");
console.log("Berikut tabel perkalian " + x);
console.log("");
let hasil;
for (let i = 1; i <= 10; i++) {
  hasil = x * i;
  console.log(x + " x " + i + " = " + hasil);
}
