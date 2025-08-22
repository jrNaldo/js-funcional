// Stream Dados - Gera um conjunto de dados entregando isso para uma função
function gerarNumeros(){
    return {
        iniciar(fn,intervalo = 1000){
            let num = 0
            const i = setInterval(() => {
                fn(num++)
            }, intervalo )

            return{
                parar(){
                    clearInterval(i)
                }
            }
        }
    }
}
function dobro(numero){
    return console.log(`#1 ${numero * 2}`)
}
function dobro11(numero){
    return console.log(`#1.1 ${numero * 2}`)
}
function somarMaisCem(a){
    return console.log(`#2 ${a + 100}`)
}
const temp1 = gerarNumeros()
const exec1 = temp1.iniciar(dobro, 1000)
const exec11 = temp1.iniciar(dobro11, 500)

const temp2 = gerarNumeros()
const exec2 = temp2.iniciar(somarMaisCem, 2000)
setTimeout(() =>{
    exec1.parar()
    exec2.parar()
}, 10000)
setTimeout(()=>{
    exec11.parar()
}, 15000)