function nombre (){
    const pepe = 5; 
}

function esMayor (valor1, valor2) {
    if (valor1 > valor2){
        return true;
    } else {
        return false;
    }
}

const nombreFuncion = () => {

}

const esMenor = (valor1, valor2) => {
    if(valor1 < valor2){
        return true;
    } 
    return false;
}

const esMenorOIgual = (valor1, valor2) => valor1 <= valor2;

const numeros = [20, 50, 25, 3];
for (let i = 0; i < numeros.length; i++){
    const resultado = esMayor(numeros[i], 5);
    console.log("Es " + numeros[i] + " mayor " + resultado);
}