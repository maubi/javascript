const mahasiswa = {
  //key-value pair = property
  nama: "Miftahul Maubi",
  nim: "1702206",
  umur: 17,
};
console.log(mahasiswa.nama);
console.log(mahasiswa.nim);

mahasiswa["alamat"] = "Griya Kondang Asri";
mahasiswa["sapa"] = function () {
  console.log("Halo nama saya " + mahasiswa.nama);
};
console.log(typeof mahasiswa);
console.log(mahasiswa.sapa());

const siswaBLK = [
  {
    nama: "Miftahul Maubi",
    alamat: "Griya Kondang Asri",
    umur: 17,
  },
  {
    nama: "Kim Tehyung",
    alamat: "Bandung",
    umur: 36,
  },
];

console.log(
  "Halo, nama saya " +
    siswaBLK[1].nama +
    ", alamat di " +
    siswaBLK[1].alamat +
    ", umur saya " +
    siswaBLK[1].umur
);
