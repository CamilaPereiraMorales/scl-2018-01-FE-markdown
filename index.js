#!/usr/bin/env node
 //permite que puedas poner solo md links y te lea el archivo JS

const traer = require('./md-links.js')
const [, , ...args] = process.argv; //es el arreglo donde se guarda lo que el usuario ponga
// console.log(args[0]);
// console.log(args[1]);

//traer.rutaAbsoluta(args[0]);
// console.log(args);