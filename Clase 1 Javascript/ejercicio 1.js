/*1. Escribir un programa que, dada una edad, imprima en consola si
la persona es mayor de 18 años y puede conducir.*/

const prompt = require('prompt-sync')();

let edad = 0;
edad = parseInt(prompt('Ingrese su edad: '));

if (edad >= 18) {
    console.log("La persona es mayor de 18 años y puede conducir.");
} else {
    console.log("La persona es menor de 18 años y no puede conducir.");
}