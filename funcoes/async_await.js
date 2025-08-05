function esperarPor(tempo=2000){
    return new Promise(function(resolve){
        setTimeout(()=> resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(()=> console.log('Executando promisse'))
//     .then(esperarPor)
//     .then(()=> console.log('Executando promisse'))
//     .then(esperarPor)
//     .then(()=> console.log('Executando promisse'))
function retornarValor(){
    return new Promise(resolve => {
        setTimeout(()=> resolve(10), 5000)
    })
}
async function executar(){
    let valor = await retornarValor()
    esperarPor(1500)
    console.log(`Async/Await 1 ${valor}`)   
    esperarPor(1500)
    console.log(`Async/Await 2 ${valor + 1}`)   
    esperarPor(1500)
    console.log(`Async/Await 3 ${valor + 2}`)   
    return valor + 3
}

async function executarDeVerdade() {
    const resp = await executar().then(console.log)    
}
executarDeVerdade()