//Volume Balok
let panjang = 10;
let lebar = 5;
let tinggi = 8;

const balok = panjang * lebar * tinggi;
console.log("Volume balok adalah " + balok);

//Volume Kubus
let sisi = 5;

const kubus = sisi * sisi * sisi;
console.log("Volume kubus adalah " + kubus);

//Volume Tabung
let r = 8;
let t = 10;
const phi = 3.14;

const tabung = phi * (r * r) * t;
console.log("Volume tabung adalah " + tabung);

//Volume Kerucut
let jari_jari = 13;
let height = 15;

const kerucut = (1 / 3) * phi * (jari_jari * jari_jari) * height;
console.log("Volume kerucut adalah " + kerucut);

//Volume Bola
let jari = 9;

const bola = (4 / 3) * phi * (jari * jari * jari);
console.log("Volume bola adalah " + bola);
