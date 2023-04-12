//- Ingresar dos valores enteros y enumerar los elementos que los separan. 

const num1 = 25;
const num2 = 5;

if(num1 < num2){
    for (let i = num1 + 1; i < num2; i++) {
        console.log(i);
        
    }
}else{
    for (let i = num1 - 1; i > num2; i--) {
        console.log(i);
        
    }
}