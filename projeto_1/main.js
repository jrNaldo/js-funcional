const path = require('path')
const fn = require('./functions')
const caminho = path.join(__dirname,'..', 'dados', 'legendas')
const simbolos = [
    '.','?','-',',','"','♪',"_",'<i>','</i>','\r', '[',']','(',')','!',":"
]
fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadosCom('.srt'))
    .then(fn.lerArquivos)
    .then(conteudos => conteudos.join('\n'))
    .then(todoConteudo => todoConteudo.split('\n'))
    .then(fn.removerSeVazio)
    .then(fn.removerSeIncluir('-->'))
    .then(fn.removerNumeros)
    .then(fn.removerSimbolos(simbolos))
    .then(console.log)