//funcion para que vuelva ruta absoluta, la ruta que entrega user
const path = require("path");
const fs = require('fs');
const fetch = require("node-fetch");

const route = path.resolve("./README.md"); //vuelve la ruta ingresada por el user, una ruta absoluta
console.log(route);

fs.readFile(route, 'utf-8', (err, data) => { //lee archivo
    if (err) throw err;
    markdownLinkExtractor(data);
    // console.log(data);
});


const Marked = require('marked');

// Función necesaria para extraer los links usando marked
// (tomada desde biblioteca del mismo nombre y modificada para el ejercicio)
// Recibe texto en markdown y retorna sus links en un arreglo
function markdownLinkExtractor(markdown) {
    const links = [];

    const renderer = new Marked.Renderer();

    // Taken from https://github.com/markedjs/marked/issues/1279
    const linkWithImageSizeSupport = /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?)\]\(\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?(?:\s+=(?:[\w%]+)?x(?:[\w%]+)?)?)(?:\s+("(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)))?\s*\)/;

    Marked.InlineLexer.rules.normal.link = linkWithImageSizeSupport;
    Marked.InlineLexer.rules.gfm.link = linkWithImageSizeSupport;
    Marked.InlineLexer.rules.breaks.link = linkWithImageSizeSupport;

    renderer.link = function(href, title, text) {
        links.push({
            href: href,
            text: text,
            title: title,
        });
    };
    renderer.image = function(href, title, text) {
        // Remove image size at the end, e.g. ' =20%x50'
        href = href.replace(/ =\d*%?x\d*%?$/, '');
        links.push({
            href: href,
            text: text,
            title: title,
        });
    };
    Marked(markdown, { renderer: renderer });
    // console.log(links);
    validateLinks(links)
    return links;

};

function validateLinks(links) { //valida el estado de los links
    links.forEach(element => {
        let url = element.href
        fetch(url).then(response => response).then(data => {
            console.log(data.statusText, data.status, data.url.substring(0, 50)); //trunca el link a 50 caracteres
        }).catch(error => {
            console.log(error);
        });
    })
};


// function verificarExtension(rutaLista) {
//     const patron = ".md";
//     const rutaVerificada = (rutaLista.substring(rutaLista.lastIndexOf("."))).toLowerCase();
//     if (rutaVerificada === patron) {
//         leerArchivo(rutaVerificada);
//         console.log("si, esta ok")
//     } else {
//         console.log("no, esta mal");

//     }

// };

module.exports = {

};