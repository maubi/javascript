const angka = [1, 3, 5, 7, 9];
console.log(angka);

// cara menampilkan isi array

console.log(angka[0]); //1
console.log(angka[1]); //3

// part 2

for (let i = 0; i < angka.length; i++) {
  console.log("Index ke- " + i + " = " + angka[i]);
}
// cara menambahkan isi ke dalam array
let angka2 = [5];

angka2[0] = 5;
angka2[1] = 6;
angka2[2] = 7;
angka2[3] = 8;

// cara menghapus elemen
angka[2] = undefined;

delete angka[1];

const arr = [3, 5, 7, 9, 11];
// length = menampilkan jumlah isi array
console.log(arr.length); // 5
// join = menggabungkan isi array menjadi sebuah string
const word = ["K", "A", "T", "A", "K"];
console.log(word.join("-"));
// push = menambahkan elemen array di bagian terakhir
arr.push(13, 15, 17);
// pop = menghapus elemen terakhir array
arr.pop();
// unshift = menambahkan elemen di awal array
arr.unshift(1);
// shift = menghapus elemen pertama di awal array
word.shift();
// slice (indexAwal, indexAkhir)
const siswa = ["Miftahul", "Adeh", "Ratna", "Jannah", "Fikih"];
const siswa2 = siswa.slice(0, 2);
// splice = menyisipkan elemen di index tertentu
// splice (indexAwal, mau dihapus berapa, elemenbaru 1, elemenbaru 2,...)
siswa.splice(1, 0, "Paul", "Kim");
// foreach = sama kayak perulangan "for"
const nilai = [70, 75, 82, 65, 58];
nilai.forEach(function (e, i) {
  console.log("Index ke-" + i + "= " + e);
});
// sort = mengurutkan array
nilai.sort();
// map
const dikaliDua = nilai.map(function (e) {
  return e * 2;
});
console.log(dikaliDua);

// filter & find
const bilanganBulat = [2, 3, 1, 7, 6, 9, 11, 8];
const bilbul = bilanganBulat.filter(function (e) {
  return e > 5;
});

const bilbul2 = bilanganBulat.find(function (e) {
  return e > 5;
});
