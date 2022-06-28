let primerArrayDeObjetos = [];

let segundoArrayDeObjetosDos = [];

let arrayResultadoDeComparacion = [];

let cargarPrimerArray = true;

let cargarSegundoArray = false;

alert("ingrese varios nombres al azar para cargar la lista, luego ingrese : 0 para cargar la segunda lista");

while (cargarPrimerArray) {
    let objeto = prompt("ingrese el nombre de un objeto");

    if(objeto != "0")
    {
        primerArrayDeObjetos.push(objeto);
    }
    else
    {
        cargarPrimerArray = false;
        cargarSegundoArray = true;
    }
}

alert("ingrese varios nombres al azar para cargar la segunda lista, luego ingrese : 0 para comparar las dos listas");

while (cargarSegundoArray) {

    let objeto = prompt("ingrese el nombre de un objeto");

    if(objeto != "0")
    {
        segundoArrayDeObjetosDos.push(objeto);
    }
    else
    {
        cargarSegundoArray = false;   
    }
}

//Se ordenan ambos arreglos
primerArrayDeObjetos.sort();
segundoArrayDeObjetosDos.sort();

//comparo los dos arrays
let posicionesRecorridas = 0;
while (posicionesRecorridas < primerArrayDeObjetos.length) {
    
    if(primerArrayDeObjetos[posicionesRecorridas] === segundoArrayDeObjetosDos[posicionesRecorridas])
    {
        arrayResultadoDeComparacion.push(primerArrayDeObjetos[posicionesRecorridas]);
    }
    posicionesRecorridas ++;
}

alert("los elemento iguales de cada array son: " + arrayResultadoDeComparacion);