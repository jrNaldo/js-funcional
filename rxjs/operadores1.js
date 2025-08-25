// 1. Operadores de criação - Gera uma stream de dados
const {from} = require('rxjs')

// 2. Operadores Encadeáveis(Pipeable Op.) - Transformam esses dados
const {last,map} = require('rxjs/operators')

from([1,2,'ana', false,'ultimo'])
    .pipe( 
        last(),
        map(v => v[0]),
        map(v => `A letra encontrada foi: ${v}`)
    )
    .subscribe(function(valor){
        console.log(valor )
    })

from([1,2,'ana', false,'ultimo'])
    last()
    map(v => v[0])
    .subscribe(function(valor){
        console.log(valor )
    })
    