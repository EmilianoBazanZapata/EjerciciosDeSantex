let carrito = {
    total: 10,
    productos: [
        {
            nombre: 'leche',
            precio: 2,
            unidades: 5
        }
    ]
}

let ingresarArticulo = true;

function agregarProducto(nombre, precio, unidades) {
    carrito.productos.push(
        {
            nombre,
            precio,
            unidades 
        });
    carrito.total ++;
}


while (agregarProducto) {

    let nombre = prompt("ingrese un articulo");

    let precio =  parseInt(prompt("ingrese el precio de " + nombre));
    
    let cantidad = parseInt(prompt("ingrese la cantidad de " + nombre));


    agregarProducto(nombre,precio,cantidad);

    agregarProducto =  confirm("Desea continuar?");
    
}

console.log(carrito);