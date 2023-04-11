const numero = 314;
let numeroVariable = 5;
numeroVariable = 15 + numero;
console.log(numero);
console.log(numeroVariable);


const a = 3;
const b = 10;

const c = a + b;
console.log("Suma de const = " + c)

let va = 15;
let vb = 20;
let vc = va + vb;

console.log("Suma de let = " + vc)

vc = vc + 100;

console.log("Suma vc = " + vc)

vc++;

console.log("vc = " + vc)

console.log("-------------------------")

nuevaVariable = 100;
otraVariable = 200;

sumaVariable = nuevaVariable + otraVariable;
console.log("Suma de variables = " + sumaVariable);





const arr = [10, 20, 30, 40, 50]; // tiene 5 posiciones, pero empieza desde 0 
/*
tambien se puede comentar asi
*/


console.log(arr);
console.log(arr[2]); // tenes que poner el numero ara la posicion

arr[100] = 100;
console.log(arr[100]);


console.log(2**(1/3));
console.log("dos al cubo " + Math.pow(2,3));

2 == "2" // igualdad no restrictiba. Ej: son iguales
2 === "2" // igualdad restrictiba. Ej: No son iguales

2 !== 3// no igual

console.log("hola" === "ola");
console.log("ola" === "ola");
console.log(2  >3);
console.log("comparando number y string " + (2 == "2"));
console.log("comparando number y string " + (2 === "2"));
console.log("comparando number y string " + (2 > "2"));

// Condicionales
if (va === 5){
    console.log("son iguales")
} else {
    console.log(va + " y 5 son distintos")
}