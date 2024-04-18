const length = parseInt(prompt("Masukkan panjang array:"));
const angka = [];

for (let n = 0; n < length; n++) {
  angka[n] = parseInt(prompt("Masukkan angka ke " + (n + 1) + ":"));
}

function hitung_jumlah(angka) {
  let jumlah = 0;
  for (let n = 0; n < angka.length; n++) {
    jumlah += angka[n];
  }
  return jumlah;
}

function rata_rata(angka) {
  const jumlah = hitung_jumlah(angka);
  return jumlah / angka.length;
}

console.log("Array: " + angka);
console.log("Jumlah: " + hitung_jumlah(angka));
console.log("Rata-rata: " + rata_rata(angka));
