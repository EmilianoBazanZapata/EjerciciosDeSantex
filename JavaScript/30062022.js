//escribir una funcion que invierta un string
//ejemplo
//"32243" -> deberia retornar "34223"
//"hola" -> deberia retonrar "aloh"

function invertir (cadena){
    let resultado = "";
    for(let i=cadena.length-1; i=0; i--){
        resultado += cadena[i];
    }
    console.log(resultado);
}
function invertir2 (){
    const dividida = cadena.split("");
    const invertir = dividida.reverse();
    const juntar = invertir.join("");
    console.log(juntar);
}
// // 2. Escribir una funcion que detecte la palabra mas larga dentro de un string
// // Ejemplo
// // palabraMasLarga('Hola como estan') --> 'estan'
// // palabraMasLarga('Fantasticamente bien') --> 'Fantasticamente'
// // palabraMasLarga('si hay empate retorno el primero') --> 'retorno'en
function palabraMasLarga(cadena){
    const dividida = cadena.split(" ");
    resultado = "";
    for(let i=0; i<dividida.length; i++){
        if(dividida[i].length > resultado.length){
            resultado = dividida[i];
        }
    }
    return resultado;
}
// // 3. Escribir una funcion que cuente la cantidad de vocales que hay en un string
// // Ejemplo
// // cantidadVocales("Supercalifragilisticoespialidoso") -> 15
// // cantidadVocales("zzzzzz") -> 0
function contarVocales(cadena){
    let contador = 0;
    for(let i=0; i<cadena.length; i++){
        if(cadena[i] == "a" || cadena[i] == "e" || cadena[i] == "i" || cadena[i] == "o" || cadena[i] == "u"){
            contador++;
        }
    }
    return "la cadena tiene "+contador+" vocales";
}
// // 4. Escribir una funcion que identifique si un string es palindromo (se lee igual de izquierda a derecha, como de derecha a izquierda)
// // Ejemplo
// // esPalindromo('hola') --> false
// // esPalindromo('neuquen') --> true
// // esPalindromo('radar') --> true
// // esPalindromo('reconocer') --> true
// // esPalindromo('anita lava la tina') --> true
function identificadorDePalindromo(cadena){
    let resultado = "";
    for(let i=cadena.length-1; i=0; i--){
        resultado += cadena[i];
    }
    if(cadena == resultado){
        return "es un palindromo";
    }else{
        return "no es un palindromo";
    }
}




// // 1. Escribir las funciones para poder hacer lo siguiente
// // ​
// // alMenos2([1, 2, 3, 4, 5], sonPositivos);    --> true
// // alMenos2([2, -4, 6], sonNegativos);         --> false
// // alMenos2([1, 2, 3, 4, 5], sonMayoresQue2);  --> true

function alMenos2 (array, predicado){
    let contador = 0;
    
    for(let i=0; i<array.length; i++){
        if(predicado(array[i])){
            contador++;
        }
    }
    return contador;
}
const sonPositivos = (a) => a%2==0;
const sonNegativos = (a) => a<0;
const sonMayoresQue2 = (a) => a>2;


console.log(alMenos2([1, 2, 3, 4, 5], sonMayoresQue2));

/*2. Escribir la funcion agruparPor (agrupar) que agrupe elementos de un arreglo y determinado por una callback function.
Ejemplo
const arreglo = [
    {
      nombre: 'Franco',
      anoNacimiento: 1988,
      lugarNacimiento: 'Cordoba',
    },
    {
      nombre: 'Gaston',
      anoNacimiento: 1963,
      lugarNacimiento: 'Buenos Aires',
    },
    {
      nombre: 'Franco',
      anoNacimiento: 1980,
      lugarNacimiento: 'Cordoba',
    },
  ];
​
agruparPor(arreglo, x => x.nombre);
Deberia retornar
{
    Franco: [
      {
        nombre: 'Franco',
        anoNacimiento: 1988,
        lugarNacimiento: 'Cordoba',
      },
      {
        nombre: 'Franco',
        anoNacimiento: 1980,
        lugarNacimiento: 'Cordoba',
      }
    ],
    Gaston: [
      {
        nombre: 'Gaston',
        anoNacimiento: 1963,
        lugarNacimiento: 'Buenos Aires',
      }
    ]
  }
​
​
Otro ejemplo
agruparPor(arreglo, x => esImpar(t.anoNacimiento));
​
deberia retornar
{
    false: [
      {
        nombre: 'Franco',
        anoNacimiento: 1988,
        lugarNacimiento: 'Cordoba',
      },
      {
        nombre: 'Franco',
        anoNacimiento: 1980,
        lugarNacimiento: 'Cordoba',
      }
    ],
    true: [
      {
        nombre: 'Gaston',
        anoNacimiento: 1963,
        lugarNacimiento: 'Buenos Aires',
      }
    ]
  }
}*/

 
function agruparPor(array, predicado){
    let resultado = {};
    for(let i=0; i<array.length; i++){
        if(resultado[predicado(array[i])] == undefined){
            resultado[predicado(array[i])] = [];
        }
        resultado[predicado(array[i])].push(array[i]);
    }
    return resultado;
}