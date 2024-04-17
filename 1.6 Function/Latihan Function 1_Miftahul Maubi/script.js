function persegi(s) {
  return s * s;
}
function persegi_panjang(p, l) {
  return p * l;
}

function lingkaran(r) {
  return 3.14 * (r * r);
}
function segitiga(a, t) {
  return (a * t) / 2;
}
let lanjut;
do {
  console.log("-- APLIKASI HITUNG LUAS BANGUN DATAR --");
  console.log("===================================");
  console.log("Silakan pilih menu di bawah:");
  console.log("1. Luas Persegi");
  console.log("2. Luas Persegi Panjang");
  console.log("3. Luas Lingkaran");
  console.log("4. Luas Segitiga");
  console.log("===================================");

  const menu = prompt("Pilih Menu: ");
  let s, p, l, r, a, t;
  switch (menu) {
    case "1":
      s = prompt("Masukkan Sisi : ");
      console.log("Sisi Persegi = " + s);
      console.log("Luas Persegi adalah = " + persegi(s));
      break;
    case "2":
      p = prompt("Masukkan Panjang : ");
      l = prompt("Masukkan Lebar : ");
      console.log("Panjang Persegi Panjang  = " + p);
      console.log("Lebar Persegi Panjang  = " + l);
      console.log("Luas Persegi Panjang adalah = " + persegi_panjang(p, l));
      break;
    case "3":
      r = prompt("Masukkan Jari-jari : ");
      console.log("Jari-jari Lingkaran  = " + r);
      console.log("Luas Lingkaran adalah = " + lingkaran(r));
      break;
    case "4":
      a = prompt("Masukkan Alas : ");
      t = prompt("Masukkan Tinggi : ");
      console.log("Alas Segitiga  = " + a);
      console.log("Tinggi Segitiga  = " + t);
      console.log("Luas Segitiga adalah = " + segitiga(a, t));
      break;
    default:
      alert("Menu yang Anda pilih tidak tersedia");
  }
  lanjut = prompt("Mau pilih menu yang lain? (Y/T)");
} while (lanjut === "Y" || lanjut === "y");
console.log("-- PROGRAM SELESAI --");
