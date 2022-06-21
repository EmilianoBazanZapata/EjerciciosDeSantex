const piramideDeNumerosRepetidos = document.getElementById("arbolDeNumerosRepetidos");
for(var i = 1 ; i<= 6;i++){


    for (var j  = 1; j <= i; j++) {
        piramideDeNumerosRepetidos.innerHTML += i;
    }
    
    piramideDeNumerosRepetidos.innerHTML+= "<br>";

}

const piramideConsecutiva = document.getElementById("arbolDeNumerosConsecutivos");

for (x = 0; x <= 6; x++) {
    for (let i = 1; i <= x; i++) 
    {
        piramideConsecutiva.innerHTML += i;
    }
    piramideConsecutiva.innerHTML+= "<br>"
}