console.log ("Hola mundo");
const fs = require("fs");
const http = require("http")
const contenido = "contenido de prueba";
fs.writeFile("prueba.txt", contenido, (err) =>{
    if(err){
        console.log(err);
    }
    return console.log("Archivo creado");
})