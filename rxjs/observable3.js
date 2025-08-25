const {Observable} = require('rxjs')
function entre(min, max){
    return new Observable(subscribe =>{
        Array(max-min).fill().map((_, i) => {
            subscribe.next(min + i)
        })
        subscribe.complete()
    })
}
entre(4,15)
    .subscribe(
        num => console.log(`num = ${num}`)
    )