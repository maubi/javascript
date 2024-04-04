const nilai1 = prompt("Masukkan nilai Anda: ");
if (nilai1 >= 85 && nilai1 <= 100) {
  console.log("Nilai Anda berpredikat A");
} else if (nilai1 >= 75 && nilai1 < 85) {
  console.log("Nilai Anda berpredikat B");
} else if (nilai1 >= 65 && nilai1 < 75) {
  console.log("Nilai Anda berpredikat C");
} else if (nilai1 >= 55 && nilai1 < 65) {
  console.log("Nilai Anda berpredikat D");
} else if (nilai1 < 55) {
  console.log("Nilai Anda berpredikat E");
}
