/* Faça um algoritmo que dado 3 notas tiradas por um aluno em um semestre da faculdade calcule 
e imprima sua média e sua classificacao conforme a tabela a baixo

- menor que 5 = reprovado
- entre 5 e 7 = recuperacao
- media maior que 7 = aprovado
*/

// Notas do semestre
let primeiraNota = 10;
let segundaNota = 4;
let terceiraNota = 8;

// Media do semestre
let mediaSemestre = (primeiraNota + segundaNota + terceiraNota) / 3

if (mediaSemestre > 7)