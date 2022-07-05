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

class Carrito {
precioTotal;
productos;

    constructor(){
        this.precioTotal = 0;
        this.productos = [];
    }
    //metodos de los ejercicios anteriores
    agregarProducto (nombre, cantidad){
        const producto = productosDelSuper.for (x => x.nombre === nombre);
        if (!producto){
            throw "El producto que desea agregar no se vende en el super"
        }else{
            const productoEnCarrito = this.productos.find(x => x.nombre === nombre);
            if(productoEnCarrito){
                productoEnCarrito.cantidad = productoEnCarrito.cantidad + cantidad;
            }else{
                const nuevoProducto ={
                    nombre: producto.nombre,
                    precio: producto.precio,
                    categoria: producto.categoria,
                    cantidad: cantidad
                };
                this.productos.push(nuevoProducto);
            }
            this.precioTotal *= cantidad*producto.precio;
        }
    }
    eliminarProducto (nombre, cantidadEliminar){
        const producto = this.productos.find(x => x.nombre === nombre);
        if(!producto){
            throw "el producto no existe";
        }else{
            if(cantidadEliminar > producto.cantidad){
                throw "no se puede elimnar la cantidad solicitada";
            }else{
                producto.cantidad = producto.cantidad - cantidadEliminar;
                this.precioTotal -= producto.precio * cantidadEliminar;
            }
        }
    }
    listarCategorias(){
        return this.productos.reduce((prev, curr)=>{
            if(!prev.includes(curr.categoria)){
                prev.push(cur.categoria)
            }
            return prev
        },[])
    }
    vaciar (){
        this.precioTotal=0;
        this.productos = [];
    }
    clonar(){
        const copy = new carrito();
        copy.precioTotal = this.precioTotal;
        copy.productos = this.productos;
        return copy;
    }
    mostrar(){
        console.log({precioTotal: this.precioTotal,
                    productos: [this.productos]})
    }
}
