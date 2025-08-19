const fs = require('fs')
const path = require('path')
function lerDiretorio(caminho){
    return new Promise((resolve, reject)=>{
        try{
            const  arquivos = fs.readdirSync(caminho)
            const arquivosCompletos = arquivos.map(arquivo => path.join(caminho,arquivo))
            resolve(arquivosCompletos)
        }catch(e){
            reject(e)
        }
    })
}
function composicao(...fns){
    return function(valor){
        return fns.reduce(async(acc,fn)=>{
            if(Promise.resolve(acc)=== acc){
                return fn(await acc)
            }else{
                return fn(acc)
            }
        },valor)
    }
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
            return simbolos.reduce((acc,el)=>{
                return  acc.split(el).join('')
            }, el)
        })
    }
}

function mesclarConteudos(array){
    return array.join(' ')
}

function separarTextoPor(simbolo){
    return function(texto){
        return texto.split(simbolo)
    }
}

function ordenarPorAtributoNumerico(attr){
    return function(array){
        const desc =(o1,o2) => o2[attr] - o1[attr]
        return array.sort(desc)
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
    removerSimbolos,
    separarTextoPor,
    mesclarConteudos,
    ordenarPorAtributoNumerico,
    composicao
}