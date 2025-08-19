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

const palavrasMaisUsadas = fn.composicao(
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarConteudos,
    fn.separarTextoPor('\n'),
    fn.removerSeVazio,
    fn.removerSeIncluir('-->'),
    fn.removerNumeros,
    fn.removerSimbolos(simbolos),
    fn.mesclarConteudos,
    fn.separarTextoPor(' '),
    fn.removerSeVazio,
    fn.removerNumeros,
    agruparElementos,
    fn.ordenarPorAtributoNumerico('qtde'))


fn.lerDiretorio(caminho)
    .then(palavrasMaisUsadas)
     .then(resultado => {
        const arquivoTXT = path.join(__dirname, 'resultado.txt')
        const texto = resultado.map(r => `${r.elemento}: ${r.qtde}`).join('\n')
        fs.writeFileSync(arquivoTXT, texto, 'utf-8')
        console.log("Conteudo enviado para arquivo txt")
    })