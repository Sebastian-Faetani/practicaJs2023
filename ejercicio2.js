//- Ingresar tres valores e indicar cual es el mayor y cual el menor.

let num1 = 42;
let num2 = 24;
let num3 = 06;

if(num1>num2 && num1>num3){
    console.log(num1 + " es el mayor");
}else if(num2>num1 && num2>num3){
    console.log(num2 + " es el mayor");
}else if(num3>num1 && num3>num2){
    console.log(num3 + " es el mayor")
}

if(num1<num2 && num1<num3){
    console.log(num1 + " es el menor");
}else if(num2<num1 && num2<num3){
    console.log(num2 + " es el menor");
}else if(num3<num1 && num3<num2){
    console.log(num3 + " es el menor")
}