//clase 16/06/2022
let nombre = "Juan";
console.log(nombre);

const apellido = "Perez";

//tipos de datos; 

let minombre = "Pena";

let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    direccion: "calle falsa 123",
    telefono: "123456789",
    email: "email@falso.com.ar"
}
let Array = [1,2,3,4,5,6,7,8,9,10];
let listado = ["azucar", "fresa", "manzana", "uva"];

function sumar(a,b){
    return a+b;
}
let llueve = true;
if(llueve){
    console.log("no llueve");
}

let numero = 1;
while (numero <= 10){
    console.log(numero);
    numero = numero+1;

}
let edad = prompt("ingrese su edad ");

// clase 21/06/2022
function saludar () {
    console.log("Hola mundo");
}
function saludar2 (nombre) {
    console.log("holal " + nombre);
}
function sumar (numero1, numero2){
    if(typeof numero1 ==='number' && typeof numero2==='number');{
        let resultado = numero1 + numero2;
        console.log (resultado);
    }
    if(isNaN(numero1) && isNaN(numero2)){
        console.log("Los parametros ingresados no son correctos")
    }
}
function sumar2 (n1, n2){
    return n1+n2;
}
let person = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    active : true
}

//clase 23/06/2022
const sumar = (a, b)=>{
    return a+b;
}
const sumar2 = (a, b)=> a+b; //funcion flecha, si tiene una sola linea
const imprimir = value => console.log(value(1,2)); //con un solo argumento no necesita parentesis

//callbacks function

saludar(sumar2);

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
function agregarProducto(nombre, precio, unidades, success){
    const newProducto ={nombre, precio, unidades};
    carrito.productos.push(newProducto);
    carrito.total += precio*unidades;
    success(nombre + "agregado corre correctamente");
}

agregarProducto("pan", 1, 10, alert);
agregarProducto("azucar", 1, 10, console.log);


const letras = ["a", "b", "c", "d", "e"];
const numeros = [1,2,3,4,5];

function igual(value) {
    for(let i=0; i<numeros.length; i++){
        if(esIgual(value, numeros[i])){
            return true;
        }
    }
    return false;
}
//si alguno de los elementos del array es mas chico q value
function menor (value){
    for(let i=0; i<numeros.length; i++){
        if(esMenor(value, numeros[i])){
            return true;
        }
    }
    return false;
}

function evaluarValorEnArray (value, predicado){
    for(let i=0; i<letras.length; i++){
        if(predicado(value, letras[i])){
            return true;
        }
    }
    return false;
}

const esIgual = (a, b) => a===b;
const esMenor = (a, b) => a<b;

console.log(evaluarValorEnArray("a", esIgual));
console.log(evaluarValorEnArray("a", esMenor));

//find busca el primer elemnto del predicado enviado
const result = letras.find(n => n==="a");
//filter devuelve array del mismo tamaño o mas chico, incluyendo solo los elementos que coinciden con el predicado
const result2 = numero.filter(n => n>2);
//some se fija si alguno de los elementos coincide con el predicado devuele true o false
const result3 = letras.some(n => n==="a"); // true
//every se fija si todos los elementos coinciden con el predicado
const result4 = letras.every(n => n==="a"); // false
//map devuelve un array cdel mismo tamaño pero con elementos modificados
const result5 = numero.map(n => n*2); // [2,4,6,8,10]
//reduce reduce todos los elementos del array a un solo valor
const result6 = numero.reduce((actual,acumulado) => {return actual+acumulado}, 0); //actual=funcion, acumulado=valor inicial

letras.forEach(n => console.log(n));

//throw para crear errores

function divicion (a,b){
    if(B===0){
        throw new Error("No se puede dividir por cero");
    }
    return a/b;
}
try{
    divicion(1,0);
}catch (error){
        alert(error.message);
    }
    finally{
        console.log("se ejecuto"); //se pasa siempre por aca
    }
    
// 28/06/2022
class Persona {
    nombre;
    edad;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse(){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona("Hernan", 33);
const persona2 = new Persona("Juan", 30);
console.log (persona1 instanceof Persona);
console.log ({} instanceof Persona);
class Auto{
    patente;
    color;
    marca;
    constructor(patente,marca, color){
        this.patente = patente;
        this.marca = marca;
        if(color === undefined){
            this.color = "rojo";
        }else{
            this.color = color;
        }
    }
    encender (){
        console.log("encendido");
    }
}
class Alumno extends Persona{
    colegio;
    constructor(nombre, edad, colegio){
        super(nombre, edad);
        this.colegio = colegio;
    }
    presentarse(){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años y estoy en el colegio ${this.colegio}`);
    }
}

//trutyy y falsey

//otro tema, referencias, 
const original = [1,2,3,4,5];
const copy= original;
const copy2 = original.slice();
const copy3 = [...original]; //spred -> expande;
const altobug = [...original, ...copy2, 3,3];


const [a, b,] = original;

console.log(a, b); //1, 2

const [milanga] = productosDelSuper;