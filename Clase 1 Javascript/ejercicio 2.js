/*
    2. Escribir un programa que, dada una nota (número), 
    imprima en consola la calificación según la nota:
    
    0-3: Muy deficiente
    3-5: Insuficiente
    5-6: Suficiente
    6-7: Bien
    7-9: Notable
    9-10: Sobresaliente
  */

const prompt = require('prompt-sync')();

let nota = parseInt(prompt('Ingrese su nota: '));

console.log("nota es : " + nota + ". tipo de dato: " + nota.typeof);

function calificación(nota) {
    switch (nota) {
        case nota >= 0 && nota <= 3:
            console.log("Muy deficiente");
            break;

        case nota >= 4 && nota <= 5:
            console.log("Insuficiente");
            break;

        case nota == 6:
            console.log("Suficiente");
            break;

        case nota == 7:
            console.log("Bien");
            break;

        case nota >= 8 && nota <= 9:
            console.log("Notable");
            break;

        case nota >= 10 && nota <= 10:
            console.log("Sobresaliente");
            break;

        default:
            console.log("Nota inválida");
            break;
    }
}
calificación(nota);