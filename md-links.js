//funcion para que vuelva ruta absoluta, la ruta que entrega user
const path = require("path");




function rutaAbsoluta(ruta) {
    return new Promise((resolve, reject) => {
        if (ruta === "") reject("ingresa algun archivo");
        if (resolve)

            rutaLista = path.resolve(ruta);
        console.log(rutaLista);
        return verificar(rutaLista);
    })
};


function verificar(rutaLista) {
    const patron = ".md";
    const rutaVerificada = (rutaLista.substring(rutaLista.lastIndexOf("."))).toLowerCase();
    if (rutaVerificada === patron) {
        console.log("si, esta ok")
    } else {
        console.log("no, esta mal");

    }
};

function leerArchivo(rutaVerificada) {

}



module.exports = {
    rutaAbsoluta,
    suma,
    resta
};