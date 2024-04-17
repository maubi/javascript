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
