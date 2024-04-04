const total_belanja = parseFloat(prompt("Masukkan total belanja: "));
console.log("Total belanja = Rp." + total_belanja);
console.log(" ")
if (total_belanja < 100000) {
  console.log("Terimakasih sudah berbelanja!");
  console.log("Total bayar = Rp." + total_belanja);
} else if (total_belanja >= 100000 && total_belanja < 500000) {
  console.log("Selamat Anda mendapatkan diskon 10%");
  console.log("Total bayar = Rp." + (total_belanja - total_belanja * 0.1));
} else if (total_belanja >= 500000 && total_belanja < 1000000) {
  console.log("Selamat Anda mendapatkan diskon 20%");
  console.log("Total bayar = Rp." + (total_belanja - total_belanja * 0.2));
} else if (total_belanja >= 1000000) {
  console.log("Selamat Anda mendapatkan diskon 30%");
  console.log("Total bayar = Rp." + (total_belanja - total_belanja * 0.3));
}
