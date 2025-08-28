const { of, forkJoin, from, concat} = require('rxjs')
const {map, filter, delay, reduce, scan} = require('rxjs/operators')


of(1,2,3,4,5)
    .pipe(
        map(el => el*2),
        filter(el => el > 5)
)
    .subscribe({
        next: valorTransformado => console.log(`valor: ${valorTransformado}`)
    })

of(1,2,3,4,5,6,7,8,9,10)
    .pipe(filter(el => el % 2 === 0))
    .subscribe({
        next: v => console.log(`Valor : ${v}`)
    })

of(1,2,3,4,5,6,7,8,8,9,9,0,0,2,2,3,3,4,4,5,5,66)
    .pipe(
        reduce((acc,el) => acc + el),
        delay(1000)
    )
    .subscribe({
        next: v => console.log(`Dados: ${v}`),
        error: e => console.log(`Erro: ${e}`),
        complete: ( )=> console.log('Operação Concluida')
    })


const fluxoA = from([10,20]).pipe(delay(1000))
const fluxoB = of({nome: 'Dados', versao: '1.0'}).pipe(delay(2000))

const fluxoTotal = forkJoin({
    fA : fluxoA,
    fB : fluxoB
})
fluxoTotal.subscribe({
    next: v => {
        console.log(`Fluxo A: ${v.fA}`)
        console.log(`Fluxo B: ${v.fB.nome} ${v.fB.versao}`)
    },
    error: e => console.log(`Error: ${e}`),
    complete: () => console.log(`Operação Concluída`)
})

of('camisa','calça','bota')
    .pipe(scan((a,b) => [...a, b], []))
    .subscribe({
        next: v => console.log(v),
        complete: ( ) => console.log('Operação Concluida')
    })

const users = of({id : '101', nome: 'Alice'})
const posts = of(['Post 1', 'Post 2'])

const fluxoDeRede = concat(
    users,
    posts
)
fluxoDeRede.subscribe({
    next: v => console.log(v)
})
