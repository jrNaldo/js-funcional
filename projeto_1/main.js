const path = require('path')
const fn = require('./functions')
const fs = require('fs')
const caminho = path.join(__dirname,'..', 'dados', 'legendas')
const simbolos = [
    '.','?','-',',','"','♪',"_",'<i>','</i>','\r', '[',']','(',')','!',":"
]
function agruparElementos(palavras){
     return Object.values(palavras.reduce((acc,palavra)=> {
        const p = palavra.toLowerCase()
        const qtde = acc[p] ? acc[p].qtde + 1: 1
        acc[p] = {elemento : p, qtde}
        return acc
     }, {}))
}
fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadosCom('.srt'))
    .then(fn.lerArquivos)
    .then(fn.mesclarConteudos)
    .then(fn.separarTextoPor('\n'))
    .then(fn.removerSeVazio)
    .then(fn.removerSeIncluir('-->'))
    .then(fn.removerNumeros)
    .then(fn.removerSimbolos(simbolos))
    .then(fn.mesclarConteudos)
    .then(fn.separarTextoPor(' '))
    .then(fn.removerSeVazio)
    .then(fn.removerNumeros)
    .then(agruparElementos)
    .then(fn.ordenarPorAtributoNumerico('qtde'))
     .then(resultado => {
        const arquivoTXT = path.join(__dirname, 'resultado.txt')
        const texto = resultado.map(r => `${r.elemento}: ${r.qtde}`).join('\n')
        fs.writeFileSync(arquivoTXT, texto, 'utf-8')
        console.log("Conteudo enviado para arquivo txt")
    })