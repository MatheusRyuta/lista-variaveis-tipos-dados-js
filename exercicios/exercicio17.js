// === compara valor e tipo; == compara só o valor
let a = 10;
let b = "10";
console.log(a === b); // false (number e string)
console.log(a == b);  // true (o texto é convertido em número)
