const nilai = [
  36, 66, 82, 53, 76, 17, 50, 38, 93, 29, 78, 57, 22, 53, 78, 38, 20, 46, 80,
  79,
];

let index = [];

nilai.forEach(function (x) {
  if (x >= 80) {
    index.push("A");
  } else if (x >= 70) {
    index.push("B");
  } else if (x >= 55) {
    index.push("C");
  } else if (x >= 45) {
    index.push("D");
  } else {
    index.push("E");
  }
});

function print() {
  console.log("================================================");
  console.log("No\t\t\tNilai Ujian\t\t\tIndex Nilai");
  console.log("================================================");

  nilai.forEach(function (y, i) {
    console.log(i + 1 + "\t\t\t\t" + y + "\t\t\t\t\t" + index[i]);
  });
}

print();
