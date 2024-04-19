//No.1
const mahasiswa = [
  "Andrew",
  "Bob",
  "Clark",
  "David",
  "Ethan",
  "Fernando",
  "Gabriel",
];
console.log(mahasiswa);

//No.2
mahasiswa.push("Harold", "Iglesias", "Jackson");

console.log(mahasiswa);

//No.3
const mahasiswa_2 = [
  mahasiswa.slice(1, 2),
  mahasiswa.slice(3, 4),
  mahasiswa.slice(5, 6),
];
console.log(mahasiswa_2.join(", "));

//No.4
mahasiswa.pop();
console.log(mahasiswa);

//No.5
mahasiswa.shift();
console.log(mahasiswa);

//No.6
mahasiswa.unshift("Andy");
console.log(mahasiswa);

//No.7
mahasiswa.splice(5, 1, "Francesco");
console.log(mahasiswa);

//No.8
mahasiswa.splice(4, 1);
console.log(mahasiswa);
