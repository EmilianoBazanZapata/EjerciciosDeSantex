let ejecutarBucle = true;
let arrayDeStrings = [];

while (ejecutarBucle) {
    let objeto = prompt("ingrese el nombre de un objeto y si desea salir escriba : 0 ");
    
    if(objeto == "0" )
    {
        ejecutarBucle = false;
        alert(arrayDeStrings);
    }

    arrayDeStrings.push(objeto);
}