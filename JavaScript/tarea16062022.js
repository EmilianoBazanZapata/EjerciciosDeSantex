
function conduccion(edad){
    if(!isNaN(edad)){
        if(edad >= 18){
            console.log("Puede conducir");
        }
        else{
            console.log("No puede conducir");
        }
    }
    else{
        console.log("Ingrese una edad valida");
    }
}
function calificacion (nota){
    if(!isNaN(nota)){
        if(nota > 10 || nota < 0){
            console.log("Nota invalida - Ingrese una nota valida");
        }
        else{
            if(nota>=0 && nota<3){
                console.log("Muy deficiente");
            }else if( nota >=3 && nota <5){
                console.log("Insuficiente");
            }else if(nota>=5 && nota<6){
                console.log("Suficiente");
            }else if(nota>=6 && nota<7){
                console.log("Bien");
            }else if(nota>=7 && nota<9){
                console.log("Notable");
            }else if(nota>=9 && nota<=10){
                console.log("Sobresaliente");
            }
        }
    }
    else{
        console.log("Eso no es un numero :-| - Ingrese una nota valida");
    }
}
function piramide (){
    let numero = 1;
    while(numero <= 6){
        let texto = "";
        for(i=1; i<=numero; i++){
            texto = texto+numero;
        }
        console.log(texto);
        numero = numero+1;
    }
}
function piramide2(){
    let numero = 1;
    let texto = "";
    while(numero <= 6){
        texto = texto+numero;
        numero = numero+1;
        console.log(texto);
    }
}