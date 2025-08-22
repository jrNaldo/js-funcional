// const readline = require('readline')
// const { setTimeout } = require('timers/promises')

// function obterResposta(pergunta){
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//     })
//     return new Promise(resolve => {
//         rl.question(pergunta, resp => {
//             resolve(resp)
//         })
//     })
// }
// obterResposta('teste?')
//     .then(resp => console.log(resp))

function namorada() {
    setTimeout(() =>{
        console.log('Namorada: Apagar as Luzes')
        console.log('Namorada: Pedir silencio')
        console.log('Namorada: Surpresa !!!!!')
    }, 2000) 
}
function sindico(){
    setTimeout(() => {
        console.log('Sindico: Monitorando o barulho!')
    }, 1000)
}

function porteiro(interessados){
    interessados.forEach(obs => obs())
}
porteiro([namorada,sindico])