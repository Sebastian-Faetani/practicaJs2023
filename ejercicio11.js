//- Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.

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

let sumaEdades = 0;
let promedioEdades = 0;
const cantidadPersonas = people.length;

for(let i = 0; i < people.length; i++){
    console.log(people[i].nombre + " tiene " + people[i].edad + " años");
    sumaEdades = sumaEdades + people[1].edad;
}
promedioEdades = sumaEdades/cantidadPersonas;
console.log("El promedio de edades es " + promedioEdades);

let mujerMayor;

for (let i = 0; i < people.length; i++){
    const p = people[i];
    if(p.sexo === "femenino"){
        if(!mujerMayor) { // mujerMayor !== undefined
            mujerMayor = p;
        }else{
            if (p.edad > mujerMayor.edad){
                mujerMayor = p;
            }
        }
    }
} //console.log("La mujer mayor es " + JSON.stringify(mujerMayor));

console.log(mujerMayor);

const mujeres = people.filter (p => p.sexo === "femenino");
console.log(mujeres);
let mujerMayor2 = {edad: 0};

for (let i = 0; i < mujeres.length; i++) {
    if(mujeres[i].edad >mujerMayor2.edad){
        mujerMayor2 = mujeres[i];
    }
}

console.log("La mujer mayor es " + JSON.stringify(mujerMayor2));