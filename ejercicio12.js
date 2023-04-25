//- Para el ejercicio anterior, generar una funcion para cada uno de los requerimientos.

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




//promedio de edad de las mujeres.
function promedioEdadMuj(edad, cantidadM) {
  for (let i = 0; i < people.length; i++) {
    const p = people[i];
    if (p.sexo === "femenino") {
      edad = edad + p.edad;
      cantidadM = cantidadM + 1;
    }
      }
    
  promedio = edad / cantidadM;
  console.log(promedio);
}

console.log(promedioEdadMuj)