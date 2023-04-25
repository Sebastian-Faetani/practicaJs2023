const person = {
    nombre: "nombre",
    sexo: "sexo",
    edad: 0
}

const people = [
    {
        nombre: "Sebas",
        sexo: "masculino",
        edad: 19,
    },
    {
        nombre: "Marta",
        sexo: "femenino",
        edad: 79,
    },
    {
        nombre: "Roberto",
        sexo: "masculino",
        edad: 99,
    },
    {
        nombre: "Melissa",
        sexo: "femenino",
        edad: 20,
    }
    
];

const esMujer = (obj) => obj.sexo === "femenino";
const esHombre = (obj) => obj.sexo === "masculino";

const filtrarPor = (arr, comparador) => arr.filter(comparador); //compara el array

console.log(filtrarPor(people, esMujer));
console.log(filtrarPor(people, esHombre));