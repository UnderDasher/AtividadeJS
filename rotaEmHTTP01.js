//Carrega o modulo HTTP
var http = require('http');
var url = require('url');

//Cria um servidor HTTP no qual envia uma msg
var callback = function(request, response) {

    // define o cabeçalho (header) com o tipo de resposta
    response.writeHead(200, {"content-type": "text/plain; charset=utf-8"});

    // faz o parse da URL separando o caminho (rota)
    var parts = url.parse(request.url);

    //verifica a rota
    if (parts.path == '/') {
        response.end("Site Principal");
    } else if (parts.path == '/rota1') {
        response.end("Site da Rota 1");
    } else {
        response.end("Rota Invalida: " + parts.path);
    }
};
// servidor HTTP
var server = http.createServer(callback);

// porta que o servidor vai escutar
server.listen(3000);

//mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");
