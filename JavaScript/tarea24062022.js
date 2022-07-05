
let carrito = {
    precioTotal: 0,
    productos: [],
}
const productosDelSuper = [
    { nombre: "Queso", precio: 10, categoria: 'lacteos' },
    { nombre: "Gaseosa", precio: 5, categoria: 'bebidas' },
    { nombre: "Cerveza", precio: 20, categoria: 'bebidas' },
    { nombre: "Arroz", precio: 7, categoria: 'alimentos' },
    { nombre: "Fideos", precio: 5, categoria: 'alimentos' },
    { nombre: "Lavandina", precio: 9, categoria: 'limpieza' },
    { nombre: "Shampoo", precio: 3, categoria: 'higiene' },
    { nombre: "Jabon", precio: 4, categoria: 'higiene' },
]

function agregarProducto(nombreproducto, cantidad){

    let msn = "";
    if(nombreproducto != undefined && productosDelSuper.some(n => n.nombre==nombreproducto)){
        let producto = productosDelSuper.find(n => n.nombre==nombreproducto);
        if(carrito.productos.some(n => n.nombre = nombreproducto)){
            let index = carrito.productos.findIndex(n => n.nombre == nombreproducto);
            carrito.productos[index].unidades += cantidad;
        }
        else{
            if(cantidad != 0){
                producto.unidades = cantidad;
            }
            else
               producto.cantidad = 1;
            carrito.productos.push(producto);
        }
        carrito.precioTotal += producto.precio;
        msn = "Producto agregado al carrito";
    }else{
        msn = "Producto inexistente en el supermecado"
    }
    try {
        console.log(msn);
        
    } catch (error) {
        console.log(error);
    }
}
function eliminarProduct(nombreProducto){
    let msn = "";
    if(carrito.productos.some(n => n.nombre == nombreProducto)){
        let index = carrito.productos.findIndex(n => n.nombre == nombreProducto);
        carrito.productos[index].unidades--;
        if(carrito.productos[index].unidades == 0){
            carrito.productos.splice(index, 1);
        }
        carrito.precioTotal -= productosDelSuper.find(n => n.nombre == nombreProducto).precio;
        msn = "Producto eliminado del carrito";
    }else {
        msn = "Producto inexistente en el carrito";
        throw new Error("No hay cargado ese producto en en el carrito"); 
    }
    try {
        console.log(msn);
        
    } catch (error) {
        console.log(error);
    }
}



/*2. Desarrollar la siguiente funcion
funcion eliminarProduct(nombre){}
- Teniendo en cuenta que si intentan eliminar un producto que no existe, deberá lanzar un error

3. Escribir una funcion que devuelva un listado con todas las categorias (sin repeticiones) 
de los productos del carrito
*/

