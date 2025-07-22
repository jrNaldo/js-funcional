function somar(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
const n1 = somar(2)
const n2 = n1(2)
const n3 = n2(2)
console.log(n3)

function calcular(x){
    return function(y){
        return function(fn){
            return fn(x,y)
        }
    }
}

function subtrair(a,b){
    return a - b
}

function multiplicar(a,b){
    return a * b
}
function dividir(a,b){
    return a / b
}
function soma(a,b){
    return a + b
}
const r1 = calcular(10)(5)(subtrair)

const r2 = calcular(10)(5)(multiplicar)
console.log(r1, r2)

const r3 = calcular(10)(5)(dividir)
const r4 = calcular(10)(5)(soma)
console.log(r3, r4)

function media(a,b){
    return function(fn){
        return `O valor da media é ${ fn(a,b)}`
    }
}

function valorMedia(a,b){
    return (a+b)/ arguments.length
}

const valor = media(2,4)(valorMedia)
console.log(valor)
