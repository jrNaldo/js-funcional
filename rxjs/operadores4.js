const { from, Observable} = require('rxjs')

function primeiro(){
    return function(fonte){
        return new Observable(subscriber => {
            fonte.subscribe({
                next(v){
                    subscriber.next(v)
                    subscriber.complete()
                }
            })
        })
    }
}
function nenhum(){
    return function(fonte){
        return new Observable(subscriber =>{
            fonte.subscribe({
                next(v){
                    subscriber.complete()
                }
            })
        })
    }
}
function ultimo(){
    return function(source){
        return new Observable(subscriber =>{
            let ultimo
            source.subscribe({
                next(v){
                    ultimo = v
                },
                complete(){
                    subscriber.next(ultimo)
                    subscriber.complete()
                }
            })
        })
    }
}

from([1,2,3,4,5,6])
.pipe(nenhum())
.subscribe(console.log)



















function primeiro(){
    return function(source){
        return new Observable(subscriber => {
            source.subscribe({
                next(v){
                    subscriber.next(v)
                    subscriber.complete()
                }
            })
        })
    }
}