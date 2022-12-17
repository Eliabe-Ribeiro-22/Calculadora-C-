var teclado = require("./assets/js/funcoes/teclado.js");
var limpar = require("./assets/js/funcoes/deletar.js");
var formatarValor = require("./assets/js/funcoes/formatarValor.js");
var calcular = require("./assets/js/funcoes/calcular.js");

let indexFile = __dirname + "./index.html";
const fs = require("fs").promises;
const http = require("http");

const host = "localhost";
const port = 8080;

//const requestListener = function (req, res) {
//   fs.readFile(__dirname + "./index.html")
//   .then(contents => {
//     res.setHeader("Content-Type", "text/html");
//     res.writeHead(200);
//     res.end(contents);
//   })
//   .catch(err => {
//     res.writeHead(500);
//     res.end(err);
//     return;
//         });
//};

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
/*
import "./funcoes/teclado.js";
import "./funcoes/deletar.js"
import "./funcoes/formatarValor.js"
import "./funcoes/calcular.js"
*/
