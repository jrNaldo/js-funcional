const {Observable} = require('rxjs')

const obs = new Observable(subscribe =>{
    subscribe.next('Rxjs')
    subscribe.next('E bem poderoso')
    if(Math.random() > 0.5){
        subscribe.complete()
    }else{
        subscribe.error("Erro")
    }
})
obs.subscribe({
    next(valor){
        console.log(`Valor: ${valor}`)
    },
    complete(){
        console.log('Fim !!')
    },
    error(msg){
        console.log(`Erro: ${msg}`)
    }
})