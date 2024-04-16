console.log(1);
for (let x = 2; x <= 100; x++) {
  let prima = true;
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      prima = false;
      break;
    }
  }
  if (prima) console.log(x + " adalah bilangan prima");
  else console.log(x);
}
