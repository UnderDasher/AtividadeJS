//Carrega o modulo HTTP
var fs = require('fs');
var http = require('http');
var url = require('url');

//funcao para ler um arquivo e escreve-lo na response
function readFile(response,file){
    //faz a leitura do arquivo de forma assincrona
    fs.readFile(file,function(err,data){
        //quando ler, escreve na response o conteudo do arquivo JSON
        response.end(data);
    });
}

// funcao de callback para o servidor HTTP
var callback = function(request, response) {

    // define o cabeçalho (header) com o tipo de resposta
    response.writeHead(200, {"content-type": "application/json; charset=utf-8"});

    // faz o parse da URL separando o caminho (rota)
    var parts = url.parse(request.url);
    var path = parts.path;


    //verifica a rota
    if (parts.path == '/rota1/cadastro') {
        readFile(response, "cadastro.json");
    } else if (parts.path == '/rota1/catalogo') {
        readFile(response, "catalogo.json");
    } else if (parts.path == '/rota1/dados') {
        readFile(response, "dados.json");
    } else {
        response.end("Rota Não Mapeada: " + parts.path);
    }
};
// servidor HTTP
var server = http.createServer(callback);

// porta que o servidor vai escutar
server.listen(3000);

//mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");
