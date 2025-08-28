const fs = require('fs')
const { Observable} = require('rxjs')
const path = require('path')
function lerDiretorio(caminho){
    return new Observable(subscriber=>{
            try{
                fs.readdirSync(caminho).forEach(arquivo =>{
                    subscriber.next(path.join(caminho,arquivo))
                })
                subscriber.complete()
            }catch(e){
                subscriber.error(e)
            }
    })
}
function lerArquivo(){
    return createPipeableOperator(subscriber => ({
        next(caminho){
            try{
                const cont = fs.readFileSync(caminho, {encoding: 'utf-8'})
                subscriber.next(cont.toString())
            }catch(e){
                subscriber.error(e)
            }
        }
    }))
}

function elementosTerminadosCom(padraoTextual){
    return createPipeableOperator(subscriber => ({
        next(texto){
            if(texto.endsWith(padraoTextual)){
                subscriber.next(texto)
            }
        }
    }))
}

function removerSeVazio(){
    return createPipeableOperator(subscriber =>({
        next(texto){
            if(texto.trim()){
                subscriber.next(texto)
            }
        }
    }))
}

function removerElementosSeIniciarComNum(){
    return createPipeableOperator(subscriber => ({
        next(texto){
            const num = parseInt(texto.trim())
            if(num !== num){
                subscriber.next(texto)
            }
        }
    }))
}

function removerSimbolos(simbolos){
    return createPipeableOperator(subscriber => ({
        next(texto){
            const textoSemSimbolo = simbolos.reduce((acc,el) => {
                return acc.split(el).join(' ')
            }, texto)
            subscriber.next(textoSemSimbolo)
        }
    }))
}

function separarTextoPor(simbolo){
    return createPipeableOperator(subscriber =>({
        next(texto){
            texto.split(simbolo).forEach(parte => {
                subscriber.next(parte)
            })
        }
    }))
}

function agruparElementos(){
    return createPipeableOperator(subscriber =>({
        next(palavras){
            const agrupado =  Object.values(palavras.reduce((acc,palavra)=> {
            const p = palavra.toLowerCase()
            const qtde = acc[p] ? acc[p].qtde + 1: 1
            acc[p] = {elemento : p, qtde}
            return acc
        }, {}))
        subscriber.next(agrupado)
        }
    }))
}

function ordenarPorAtributoNumerico(attr){
    return function(array){
        const desc =(o1,o2) => o2[attr] - o1[attr]
        return array.sort(desc)
    }
}

function createPipeableOperator(operator){
    return function(source){
        return new Observable(subscriber =>{
            const sub = (operator(subscriber))
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (() => subscriber.complete())
            })
        })    
    }
}

module.exports = {
    lerDiretorio, 
    elementosTerminadosCom,     
    lerArquivo,
    removerSeVazio,
    removerElementosSeIniciarComNum,
    removerSimbolos,
    separarTextoPor,
    ordenarPorAtributoNumerico,
    agruparElementos
}