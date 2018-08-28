#!/usr/bin/env node

const algo = require('./md-links.js')
const [, , ...args] = process.argv; //es el arreglo donde se guarda lo que el usuario ponga
console.log(args);

algo.suma(1, 3);
algo.resta(5, 1);