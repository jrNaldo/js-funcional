//Funções que operam em outras funções, tomando-as como argumentos ou retornando-as, são chamadas de higher-order function.

function executar(fn, ...params){
    return function(textoInicial){
        return `${textoInicial} ${fn(...params)}!`
    }
}

function somar(a,b,c){
    return a + b + c
}
function multiplicar(a,b){
    return a * b
}
console.log(executar(somar,4,5,6,7,8)('O resultado é'), executar(multiplicar, 40,5)('O resultado é '))