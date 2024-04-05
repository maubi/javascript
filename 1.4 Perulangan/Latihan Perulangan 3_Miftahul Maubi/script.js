const n = parseInt(prompt("Masukkan jumlah anak ayam: "));
console.log("Anak ayam turun " + n);

for (let i = n; i >= 1; i--) {
  if (i > 1) {
    console.log("Anak ayam turun " + i + ", mati satu tinggal " + (i - 1));
  } else {
    console.log("Anak ayam turun " + i + ", mati satu tinggal induknya");
  }
}
