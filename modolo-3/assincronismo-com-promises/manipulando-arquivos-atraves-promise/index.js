const fs = require('fs')
const path = require('path')
const filePath = path.resolve(__dirname, 'tarefas.csv')

const promesaDaLeituraDoArquivo = fs.promises.readFile(filePath)

promesaDaLeituraDoArquivo.then((arquivo) => {
    console.log(arquivo.toString('utf8'))
}).catch((error) =>{
    console.log('Deu ruim!', error)
})