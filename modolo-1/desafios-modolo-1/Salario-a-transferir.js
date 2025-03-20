/* 
3) Faça um programa que calcule e imprima o salario a ser transferido par um 
funcionario

Para realizar o calculo receba o valor bruto do salario e o adicional dos beneficiarios 
O salario a ser transferido é calculado da seguinte maneira:

valor bruto do salario - percentual  de imposto mediante a faixa salarial + adicional
dos beneficios 

Para calcular o percentual do imposto segue as liquotas 

 -R$ 0.00 a 1100.00 = 5%
 -R$ 1101.00 a 2500.00 = 10%
 -Maior que R$ 2500.00 = 15%

 Entrada 2500.00, beneficios: 250
*/
const { get, print, input} = require("../Importacao-Exportacao/funcoes-auxiliares");

let salarioDesconto = 0;
let salarioLiquido = 0;

salarioBeneficios = {"salario" : 1001.00, "beneficio" : 250};

if (salarioBeneficios["salario"] > 2500.00){
    salarioDesconto = salarioBeneficios["salario"] * 0.15;
    salarioLiquido = salarioBeneficios["salario"] - salarioDesconto + salarioBeneficios["beneficio"];

}else if(salarioBeneficios["salario"] > 1100.00 && salarioBeneficios["salario"] <= 2500.00){
    salarioDesconto = salarioBeneficios["salario"] * 0.10;
    salarioLiquido = salarioBeneficios["salario"] - salarioDesconto + salarioBeneficios["beneficio"];

}else{
    salarioDesconto = salarioBeneficios["salario"] * 0.05;
    salarioLiquido = salarioBeneficios["salario"] - salarioDesconto + salarioBeneficios["beneficio"];
}

print(salarioLiquido)
