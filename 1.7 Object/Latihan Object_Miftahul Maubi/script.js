/*const belanja = [
  {
    kode_barang: "MIE-001",
    nama_produk: "Indomie Goreng",
    harga: 3000,
    stock: 15,
  },
  {
    kode_barang: "MIE-002",
    nama_produk: "Indomie Ayam Bawang",
    harga: 2500,
    stock: 25,
  },
  {
    kode_barang: "SHP-003",
    nama_produk: "Shampoo Clear Menthol",
    harga: 8000,
    stock: 30,
  },
  {
    kode_barang: "SBN-004",
    nama_produk: "Sabun Lifebuoy Merah",
    harga: 5000,
    stock: 50,
  },
  {
    kode_barang: "SBN-005",
    nama_produk: "Sabun Biore Ungu",
    harga: 8000,
    stock: 60,
  },
];

console.log("==============================================================");
console.log("Kode Barang\t\tNama Produk\t\t\t\t\tHarga\t\tStock");
console.log("==============================================================");
console.log(
  belanja[0].kode_barang +
    "\t\t\t" +
    belanja[0].nama_produk +
    "\t\t\t\t" +
    belanja[0].harga +
    "\t\t" +
    belanja[0].stock
);
console.log(
  belanja[1].kode_barang +
    "\t\t\t" +
    belanja[1].nama_produk +
    "\t\t\t" +
    belanja[1].harga +
    "\t\t" +
    belanja[1].stock
);
console.log(
  belanja[2].kode_barang +
    "\t\t\t" +
    belanja[2].nama_produk +
    "\t\t" +
    belanja[2].harga +
    "\t\t" +
    belanja[2].stock
);
console.log(
  belanja[3].kode_barang +
    "\t\t\t" +
    belanja[3].nama_produk +
    "\t\t" +
    belanja[3].harga +
    "\t\t" +
    belanja[3].stock
);
console.log(
  belanja[4].kode_barang +
    "\t\t\t" +
    belanja[4].nama_produk +
    "\t\t\t" +
    belanja[4].harga +
    "\t\t" +
    belanja[4].stock
);

console.log("==============================================================");*/

const belanja = [
  {
    kode_barang: "MIE-001",
    nama_produk: "Indomie Goreng\t\t",
    harga: 3000,
    stock: 15,
  },
  {
    kode_barang: "MIE-002",
    nama_produk: "Indomie Ayam Bawang\t",
    harga: 2500,
    stock: 25,
  },
  {
    kode_barang: "SHP-003",
    nama_produk: "Shampoo Clear Menthol",
    harga: 8000,
    stock: 30,
  },
  {
    kode_barang: "SBN-004",
    nama_produk: "Sabun Lifebuoy Merah",
    harga: 5000,
    stock: 50,
  },
  {
    kode_barang: "SBN-005",
    nama_produk: "Sabun Biore Ungu\t",
    harga: 8000,
    stock: 60,
  },
];

console.log("=============================================================");
console.log("Kode Barang\t\tNama Produk\t\t\t\t\tHarga\t\tStock");
console.log("=============================================================");

belanja.forEach(function (produk) {
  console.log(
    produk.kode_barang +
      "\t\t\t" +
      produk.nama_produk +
      "\t\t" +
      produk.harga +
      "\t\t" +
      produk.stock
  );
});
console.log("=============================================================");
