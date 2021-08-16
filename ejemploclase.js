
/*
Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.
El usuario deberá ingresar un string con varias palabras separadas por 
coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]). 
Mostrar en consola dicho resultado.
De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, 
muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.*/


var aleatorio=[];
console.log(Math.floor(Math.random()*100));
console.log(Math.floor(Math.random()*100));
console.log(Math.floor(Math.random()*100));
console.log(Math.floor(Math.random()*100));
console.log(Math.floor(Math.random()*100));
console.log(Math.floor(Math.random()*100));
console.log(Math.floor(Math.random()*100));
console.log(Math.floor(Math.random()*100));
console.log(Math.floor(Math.random()*100));
console.log(Math.floor(Math.random()*100));
console.log(aleatorio)



var letras = prompt("Ingresar un conjunto de letras separadas  por coma")

var arregloletras = letras.split(',');
arregloletras;

var array=[10,40,30,20,15,5];
array.sort();