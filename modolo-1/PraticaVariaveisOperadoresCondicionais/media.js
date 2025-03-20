/* Faça um algoritmo que dado 3 notas tiradas por um aluno em um semestre da faculdade calcule 
e imprima sua média e sua classificacao conforme a tabela a baixo

- menor que 5 = reprovado
- entre 5 e 7 = recuperacao
- media maior que 7 = aprovado
*/

// Notas do semestre
const primeiraNota = 10;
const segundaNota = 4;
const terceiraNota = 8;

// Media do semestre
const mediaSemestre = (primeiraNota + segundaNota + terceiraNota) / 3

if (mediaSemestre > 7){
    console.log(`Parabéns, você foi aprovado! | Media: ${mediaSemestre.toFixed(2)}`);
} else if(mediaSemestre >= 5 && mediaSemestre < 7){
    console.log(`Se esforce mais, voce esta de recuperacao! | Media: ${mediaSemestre.toFixed(2)}`);
} else {
    console.log('Lamentamos, mas voce foi reprovado!');
}