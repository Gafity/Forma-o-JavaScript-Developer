const randomNumber = new Promise((resolve, reject) => {
    const number = parseInt(Math.random() * 100)
    resolve(number)
})

randomNumber
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() =>{
        console.log('Finalizou!')
    }) 