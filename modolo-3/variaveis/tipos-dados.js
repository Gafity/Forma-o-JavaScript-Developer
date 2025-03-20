/* 
    boolean
    null => ausencia
    underfined => ausencia de declaracao
    number
    string
    synbol => objeto imutavel unico
*/

// object => colecao dinamica de chave e valor
const DOCUMENTOS = { name: "Gabriel", country: "Brazil" }
DOCUMENTOS.name = "Sara"
console.log(DOCUMENTOS)
// Mesmo que DOCUMENTOS SEJA uma CONSTANTE seus atributos não são, então podem ser modificados

// tipo primitivo imutavel
var boolean1 = true
var boolean2 = false

// Objeto que representa boolean
new Boolean(true)