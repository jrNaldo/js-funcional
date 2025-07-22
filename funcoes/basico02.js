function bomDia(a){
    console.log("Bom dia", a )
}
const boaTarde = function (){
    console.log("Boa Tarde")
}
// 1) Passar uma funcao como parametro para outra funcao
function executarQualquerCoisa(fn){
    if(typeof fn === "function"){
       fn() 
    }
    
}

executarQualquerCoisa(boaTarde)
executarQualquerCoisa(bomDia("Naldo"))
executarQualquerCoisa(3)

//2) Retornar uma função a partir de outra função

function potencia(expo){
    return function (base){ //Anonima
        return Math.pow(base, expo)
    }
}

const potencia2 = potencia(8)

console.log(potencia2(2))

// Esse tipo de função é bom para guardar valores de variaveis 
function cumprimentar(c){
    return function (nome){
        return `Olá, ${c} ${nome}`
    }
}

const cumprimento = cumprimentar("Bom dia")

console.log(cumprimento("Naldo"))

function somador(a){
    return function(b){
        return a + b
    }
}
const num = somador(2)
const result = num(9)
console.log(result)
