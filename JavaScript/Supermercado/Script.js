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

function AgregarProducto(nombreProducto, unidades) {

    if (nombreProducto == undefined || nombreProducto == null) {
        throw new Error("Debe ingresar el nombre del Producto");
    }

    let productoSeleccionado = productosDelSuper.find(ps => ps.nombre == nombreProducto);

    if (productoSeleccionado == undefined || productoSeleccionado == null) {
        throw new Error("El producto no se encuentra al el listado de Productos vendidos por el SuperMercado");
    }

    if (carrito.productos.some(c => c.nombre == nombreProducto)) {

        let index = carrito.productos.findIndex(c => c.nombre == nombreProducto);
        carrito.productos[index].unidades++;
    }
    else {

        productoSeleccionado.unidades = unidades;
        carrito.productos.push(productoSeleccionado);
    }
}

function EliminarProducto(nombreProducto) {
    if (nombreProducto == undefined || nombreProducto == null) {
        throw new Error("Debe ingresar el nombre del Producto");
    }

    let productoSeleccionado = productosDelSuper.find(ps => ps.nombre == nombreProducto);

    if (productoSeleccionado == undefined || productoSeleccionado == null) {
        throw new Error("El producto no se encuentra al el listado de Productos vendidos por el SuperMercado");
    }

    let index = carrito.productos.findIndex(c => c.nombre == nombreProducto);

    if (carrito.productos[index].unidades == 0) {
        throw new Error("El producto ya no cuenta con unidades disponibles");
    }

    //carrito.productos.splice(index, 1);
    carrito.productos[index].unidades--;
}

function listarCategorias() {
    const categorias = [];
    for (let index = 0; index < carrito.productos.length; index++) {
        const categoria = carrito.productos[index].categoria;
        if (!categorias.includes(categoria)) {
            categorias.push(categoria);
        }
    }
    return categorias;
}
