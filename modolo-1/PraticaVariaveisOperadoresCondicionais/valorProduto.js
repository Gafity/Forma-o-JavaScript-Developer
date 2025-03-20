/* 
Código de condição de pagamaento

A vista Debito, recebe 10% de desconto
A vista dinheiro ou Pix, recebe 15% de desconto
Em duas 2x, preço normal de etiqueta sem juros
Acima de 2x, preço normal de etiqueta com 10% de juros
*/

let precoProduto = 499.99;
let formaDePagamento = 1;
let pagamento;

if (formaDePagamento === 1){
    pagamento = precoProduto - (precoProduto * 0.10)
    console.log(pagamento.toFixed(2))
}else if (formaDePagamento === 2){
    pagamento = precoProduto - (precoProduto * 0.15)
    console.log(pagamento.toFixed(2))
}else if (formaDePagamento === 3){
    pagamento =  precoProduto / 2
    console.log(pagamento.toFixed(2))
}else{
    pagamento = precoProduto + (precoProduto * 0.10)
    console.log(pagamento.toFixed(2))
}
