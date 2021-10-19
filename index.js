//Móldulos core de Node.js

//http (Crear un servidor o para poder hacer peticiones aotros servidores)
//fs (Manejo de archivos)
//path (Construccion de rrutas hacia los archivos)
//events (Manejo de eventos)

//Importar un modulo en Node.js
//CONST MODULO = REQUIRE('MODULO')

const fs = require('fs');


//leer un archivo con fs
fs.readFile("./saludo.txt", {encoding: "utf8"}, (err, data) =>  {      //Asincrono
    if(!err) {
        console.log(data)
    }else {
        console.log(err)
    }
});


const data = fs.readFileSync("./saludo.txt", {encoding: "utf8"})       //Sincrono
console.log(data)


//Sobreescribir en un archivo
fs.writeFile("saludo.txt", "hello world", (err) => {
    if(err) {
        console.log(err)
    }else {
        console.log("se ha escrito el archivo")
    }
})


//Agregar texto a un archivo
fs.appendFile("saludo.txt", "\nAgregamos un texto", (err) => {
    if(err){
        console.log(err)
    }else {
        console.log("se añadio el contenido")
    }
})