//- Obtener la suma de los elementos de un array.

const arr = [10, 20, 30, 40];
let sum = 0;

sum = arr.reduce((a, b) => a+b,0);

console.log(sum)