const { from, Observable, subscribeOn} = require('rxjs')

function createPipeableOperator(operator){
    return function(source){
        return new Observable(subscriber =>{
            const sub = (operator(subscriber))
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete
            })
        })    
    }
}
function primeiro(){
    return createPipeableOperator(subscriber => ({
        next(v){
            subscriber.next(v)
            subscriber.complete()
        },
        complete(){

        }
    }))
}
function nenhum(){
    return createPipeableOperator(subscriber => ({
        next(v){
            subscriber.complete()
        }
    }))
}
function ultimo(){
    let ultimo
    return createPipeableOperator(subscriber => ({
        next(v){
            ultimo = v
        },
        complete(){
            if(ultimo !== undefined){
                subscriber.next(ultimo)
            }
            subscriber.complete()
        }
    }))
}

from([1,2,3,4,5,6])
.pipe(nenhum())
.subscribe(console.log)
from([1,2,3,4,5,6])
.pipe(primeiro())
.subscribe(console.log)
from([1,2,3,4,5,6])
.pipe(ultimo())
.subscribe(console.log)
