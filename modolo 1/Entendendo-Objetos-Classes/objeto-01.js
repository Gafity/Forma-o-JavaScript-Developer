// para declarar um objeto, batas usar chaves na atribuição. Exemplo

// Objeto literal
const dado = {
    nome : "Gabriel Gama", 
    idade : 23,
    formacao : "Engenheiro de software",
    mostrarNomeIdade : function(){
        console.log(`Meu nome é: ${this.nome} e idade ${this.idade}`)
    } 
};

console.log(dado.nome);
console.log(dado.idade);

dado.altura = 1.80;

console.log(dado.altura);

delete dado.formacao;

dado.mostrarNomeIdade();

// metodo para acessar dinamicamente os atributos dos objetos
const atributoIdade = "idade"
console.log(dado[atributoIdade])

