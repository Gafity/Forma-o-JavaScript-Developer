/* 
Formula do IMC: peso / (altura * altura)

- IMC em adultos:
- Abaixo de 18.5 -> abaixo do peso
- Entre 18.5 e 25 -> peso normal
- Entre 25 e 30 -> Acima do peso
- Entre 30 e 40 -> Obeso
- Acima de 40 -> Obesidade Grave
*/

let peso = 80;
let altura = 1.70;
let imc = peso / Math.pow(altura, 2);

if (imc < 18.5){
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25){
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30){
    console.log('Acima do peso')
} else if (imc >= 30 && imc < 40){
    console.log('Obeso');
} else {
    console.log('Obesidade grave');
}