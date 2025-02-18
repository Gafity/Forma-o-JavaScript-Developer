const { get, print, input} = require("../Importacao-Exportacao/funcoes-auxiliares")

const nota = input(5.5);
if (nota >= 7){
    print("Aluno(a): Aprovado");
}else if(nota >= 5 && nota < 7){
    print("Aluno(a): Recuperacao")
}else{
    print("Reprovado")
}