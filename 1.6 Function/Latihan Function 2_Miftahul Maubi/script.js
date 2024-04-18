function kubus(s) {
  return s * s * s;
}
function balok(p, l, t1) {
  return p * l * t1;
}
function tabung(r1, t2) {
  return 3.14 * (r1 * r1) * t2;
}
function bola(r2) {
  return 0.75 * 3.14 * (r2 * r2 * r2);
}
function kerucut(r3, t3) {
  return (3.14 * (r3 * r3) * t3) / 3;
}
let lanjut;
do {
  console.log("-- APLIKASI HITUNG VOLUME BANGUN RUANG --");
  console.log("===================================");
  console.log("Silakan pilih menu di bawah :");
  console.log("1. Volume Kubus");
  console.log("2. Volume Balok");
  console.log("3. Volume Tabung");
  console.log("4. Volume Bola");
  console.log("5. Volume Kerucut");
  console.log("===================================");

  const menu = prompt("Pilih Menu : ");
  let s, p, l, t1, r1, t2, r2, r3, t3;
  switch (menu) {
    case "1":
      s = prompt("Masukkan Sisi : ");
      console.log("Sisi Kubus = " + s);
      console.log("Volume Kubus adalah = " + kubus(s));
      console.log("");
      break;
    case "2":
      p = prompt("Masukkan Panjang : ");
      l = prompt("Masukkan Lebar : ");
      t1 = prompt("Masukkan Tinggi : ");
      console.log("Panjang Balok  = " + p);
      console.log("Lebar Balok  = " + l);
      console.log("Tinggi Balok  = " + t1);
      console.log("Volume Balok adalah = " + balok(p, l, t1));
      console.log("");
      break;
    case "3":
      r1 = prompt("Masukkan Jari-jari : ");
      t2 = prompt("Masukkan Tinggi : ");
      console.log("Jari-jari Tabung  = " + r1);
      console.log("Tinggi Tabung  = " + t2);
      console.log("Volume Tabung adalah = " + tabung(r1, t2));
      console.log("");
      break;
    case "4":
      r2 = prompt("Masukkan Jari-jari : ");
      console.log("Jari-jari Bola  = " + r2);
      console.log("Volume Bola adalah = " + bola(r2));
      console.log("");
      break;
    case "5":
      r3 = prompt("Masukkan Jari-jari : ");
      t3 = prompt("Masukkan Tinggi : ");
      console.log("Jari-jari Kerucut  = " + r3);
      console.log("Tinggi Kerucut  = " + t3);
      console.log("Volume Kerucut adalah = " + kerucut(r3, t3));
      console.log("");
      break;
    default:
      alert("Menu yang Anda pilih tidak tersedia");
  }
  lanjut = prompt("Mau pilih menu yang lain? (Y/T)");
} while (lanjut === "Y" || lanjut === "y");
console.log("-- PROGRAM SELESAI --");
