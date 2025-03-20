if (true){
    var var1 = "Vaza do escopo";
    let let1 = "Se restringe a qualquer tipo de bloco"  
}

function teste1() {
    var var2 = "Não vaza do escopo"
    let let1 = "Se restringe a qualquer tipo de bloco"    
}

const const1 = 10 /*Const já altoexplicativo */

console.log(var1)
console.log(var2)