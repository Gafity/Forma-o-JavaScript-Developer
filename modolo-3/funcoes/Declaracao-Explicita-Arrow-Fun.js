function function1(){
    console.log(this)
}


// Arrow functions não tem contexto
const function2 = () =>{
    console.log(this)
}

const renan = {
    nome: 'Renan',
    function1,
    function2
}

renan.function1()
renan.function2()

