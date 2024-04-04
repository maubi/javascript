const n = parseInt(prompt("Silahkan masukkan nilai N: "));

let jumlah = 0;
for (let i = 0; i <= n; i++) {
  jumlah += i;
}
console.log("Jumlah deret angka");
console.log("antara 1 sampai " + n + " adalah = " + jumlah);
