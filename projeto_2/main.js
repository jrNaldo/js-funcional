const path = require('path')
const fn = require('./functions')
const fs = require('fs')
const _ = require('lodash')
const { toArray, map} = require('rxjs/operators')
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
        toArray(),
        fn.agruparElementos(),
        map(array => _.sortBy(array, el => -el.qtde))
    )
.subscribe(console.log)
