//Carrega o modulo HTTP
const http = require('http');

//Cria um servidor HTTP no qual envia uma msg
var callback = function(request, response) {

    // define o cabeçalho (header) com o tipo de resposta
    response.writeHead(200, {"content-type": "text/plain"});

    // envia a mensagem de retorno
    response.end("Hello World\n");
};
// servidor HTTP
var server = http.createServer(callback);

// porta que o servidor vai escutar
server.listen(5000);

//mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:5000/");
