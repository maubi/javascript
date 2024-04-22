console.log("=============================================================");
console.log("Kode Barang\t\t\tNama Produk\t\t\tHarga\t\t\tStock");
console.log("=============================================================");
let tambah;
do {
  const belanja = [
    {
      kode_barang: prompt("Masukkan kode barang"),
      nama_produk: prompt("Masukkan nama produk"),
      harga: prompt("Masukkan harga produk"),
      stock: prompt("Masukkan jumlah stok"),
    },
  ];

  belanja.forEach(function (produk) {
    console.log(
      produk.kode_barang +
        "\t\t\t\t\t" +
        produk.nama_produk +
        "\t\t\t" +
        produk.harga +
        "\t\t\t" +
        produk.stock
    );
  });

  tambah = prompt("Mau tambahkan yang lain? (Y/T)");
} while (tambah === "Y" || tambah === "y");
console.log("=============================================================");
