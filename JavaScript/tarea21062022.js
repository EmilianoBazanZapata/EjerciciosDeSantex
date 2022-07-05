let string = ["hola", "mundo", "como", "estas"];
concatenacion(string);
function concatenacion(string){
    let texto = "";
    for(let i=0; i<string.length; i++){
        texto = texto + string[i];
    }
    console.log(texto);
}

let array1 =[4,3,true,"manzana"];
let array2 =["pera",3,false,true,3,true];
comparar(array1, array2);
function comparar(array1, array2){
    let array3 = [];
    let cargado = false;
    for(let i=0; i<array1.length; i++){
        for(let j=0; j<array2.length; j++){
            if(array1[i] === array2[j]){
                for(let k=0; k<array3.length; k++){
                    if(array3[k] === array1[i]){
                        cargado = true;
                    }
                    else{
                        cargado = false;
                    }
                }
                if(cargado==false){
                    array3.push(array2[j]);
                }
            }
        }
    }                    
    console.log(array3);
}
function comparar2 (array1, array2){
    const result = [];
    for(let i=0; i<array1.length; i++){
        const currentElement = array1[i];
        if(array2.indexOf(currentElement) >= 0){
            result.push(currentElement);
        }
    }
    return result;
}
function comparar3 (array1, array2){
    const result = [];
    for (let i=0; i<array1.length; i++){
        if(array2.include(array1[i])){
            result.push(array1[i]);
        }
    }
}
let carrito ={
    total: 10,
    productos: [
        {
            nombre:"leche",
            precio: 2,
            unidades: 5
        }
    ]
}
function agregarProducto (nombre, precio, unidades){
    carrito.productos.push({
        nombre: nombre,
        precio: precio,
        unidades: unidades
    });
    carrito.total += precio*unidades;
}
agregarProducto("pan", 1, 10);
console.log(carrito);
