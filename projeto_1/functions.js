const fs = require('fs')
const path = require('path')
function lerDiretorio(caminho){
    return new Promise((resolve, reject)=>{
        try{
            let arquivos = fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo => path.join(caminho,arquivo))
            resolve(arquivos)
        }catch(e){
            reject(e)
        }
    })
}

function lerArquivo(caminho){
    return new Promise((resolve, reject)=>{
        try{
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8'})
            resolve(conteudo.toString())
        }catch(e){
            reject(e)
        }
    })
}
function lerArquivos(caminhos){
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}
function elementosTerminadosCom(padraoTextual){
    return function(arr){
        return arr.filter(el => el.endsWith(padraoTextual))
    }
}
function removerSeVazio(arr){
    return arr.filter(el => el.trim())
}
function removerSeIncluir(padraoTextual){
    return function (arr){
        return arr.filter(el => !el.includes(padraoTextual))
    }
}
function removerNumeros(arr){
   return arr.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
   })
}
function removerSimbolos(simbolos){
    return function(arr){
        return arr.map(el => {
            let textoSemSimbolos = el
            simbolos.forEach(simbolo => {
                textoSemSimbolos = textoSemSimbolos.split(simbolo).join('')
            })
            return textoSemSimbolos
        })
    }
}
module.exports = {
    lerDiretorio, 
    elementosTerminadosCom,     
    lerArquivo,
    lerArquivos,
    removerSeVazio,
    removerSeIncluir,
    removerNumeros,
    removerSimbolos
}