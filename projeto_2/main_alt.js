const path = require('path')
const fn = require('./functions')
const fs = require('fs')
const _ = require('lodash')
const { toArray, map, groupBy, mergeMap, reduce} = require('rxjs/operators')
const caminho = path.join(__dirname,'..', 'dados', 'legendas')
const simbolos = [
    '.','?','-',',','"','♪',"_",'<i>','</i>','\r', '[',']','(',')','!',":"
]

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerSeVazio(),
        fn.removerElementosSeIniciarComNum(),
        fn.removerSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerSeVazio(),
        fn.removerElementosSeIniciarComNum(),
        groupBy(el => el),
        mergeMap(grupo => grupo.pipe(toArray())),
        map(palavras => ({Elemento: palavras[0], qtde: palavras.length})),
        toArray(),
        map(array => _.sortBy(array, el => -el.qtde))
    )
.subscribe(console.log)
