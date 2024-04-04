const bulan = prompt("Masukkan nomor bulan: ");
console.log("Nomor bulan : " + bulan);
let cetak;
switch (bulan) {
  case "1":
    cetak = "Januari";
    break;
  case "2":
    cetak = "Februari";
    break;
  case "3":
    cetak = "Maret";
    break;
  case "4":
    cetak = "April";
    break;
  case "5":
    cetak = "Mei";
    break;
  case "6":
    cetak = "Juni";
    break;
  case "7":
    cetak = "Juli";
    break;
  case "8":
    cetak = "Agustus";
    break;
  case "9":
    cetak = "September";
    break;
  case "10":
    cetak = "Oktober";
    break;
  case "11":
    cetak = "November";
    break;
  case "12":
    cetak = "Desember";
    break;

  default:
    console.log("Bulan Tidak Tersedia");
    break;
}

console.log("Bulan ke " + bulan + " adalah " + cetak);
