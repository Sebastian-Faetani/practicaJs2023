/*const arr = [];
for(let i = 0; 1 < 10; i++){

}

for (let i = 10; i >= 0; i--) {
    if (i%2===0) {
        console.log("El numero " + i + " es par");
    } else {
        console.log("El numero " + i + " es impar");
    }
    
}
*/

const cubo6 = {
    caras: 6,
    colores: 6,
    nombre: "rubik"
};

console.log(cubo6)
console.log(cubo6.nombre + " tiene " + cubo6.colores + " colores y " + cubo6.caras + " caras")

const auto = {
    ruedas: 4,
    color: "red",
    usable: true,
    armas: [
        "pistola",
        "minigun",
        "misiles"
    ],
    conductor: {
        nombre: "javier",
        edad: 11
    }

}

console.log("Mis armas son: ")
auto.armas.forEach(element => {
    console.log(element)
});