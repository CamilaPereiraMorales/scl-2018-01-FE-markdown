#!/usr/bin/env node
 //permite que puedas poner solo md links y te lea el archivo JS

const mdLinks = require('./md-links').mdLinks
const [, , ...args] = process.argv; //es el arreglo donde se guarda lo que el usuario ponga
//console.log(args);

let options = {};
if (args[1] === "--validate") { //para hacer funcionar el argumento validate
    options = { validate: true }

    mdLinks(args[0]).then((value) => { //args en 0 es la ruta que me entregue el user, value me retorna el objeto con los datos que necesito.
        value.forEach((linkFinal) => {
            console.log(linkFinal.linea + " : " + linkFinal.href.substring(0.50) + " " + linkFinal.text.substring(0, 50));
        })
    }).catch((error) => {
        console.error("Error >" + error);
    });
    // } else {
    //     options = { validate : false }
    //     mdLinks.mdLinks(args[0], options.then())
}