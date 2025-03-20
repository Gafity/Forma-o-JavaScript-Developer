const fs = require('fs')
const path = require('path')
const filePath = path.resolve(__dirname, 'tarefas.csv')



async function buscarArquivo(){
    const arquive = await fs.promises.readFile(filePath)
    buscarArquivo.toString('utf8')
    const textoDoArquivo = arquive.toString('utf8')
    console.log(textoDoArquivo)
}

buscarArquivo()