const {Observable } = require('rxjs')
const promise = new Promise(resolve =>{
    resolve('Promise executada')
})

promise.then(console.log)

const obs = new Observable(subscriber =>{
    subscriber.next('Observer executado 1')
    subscriber.next('Observer executado 2')
    setTimeout(() => {
        subscriber.next('Observer executado 3')
        subscriber.complete
    }, 2000);
})

obs.subscribe(console.log)