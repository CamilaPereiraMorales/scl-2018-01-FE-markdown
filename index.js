#!/usr/bin/env node
 //permite que puedas poner solo md links y te lea el archivo JS

const traer = require('./md-links.js')
const [, , ...args] = process.argv; //es el arreglo donde se guarda lo que el usuario ponga
let options = {};
if (args.includes("--validate")) options.validate = true; //para hacer funcionar el argumento validate