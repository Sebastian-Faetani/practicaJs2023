//- Sumar solo los elementos pares de un array.

const arr = [10, 20, 35, 40];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2 === 0){
        sum = sum + arr[i] ;
        
    }
}
console.log(sum);