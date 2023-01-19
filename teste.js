class Pessoa {
    constructor(){
        this.nome = "João";
    }
    hello(){
        return "hello pessoa";
    }
}
function objeto4(){
    var pessoa = new Pessoa();

    
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());        
    
}
objeto4();