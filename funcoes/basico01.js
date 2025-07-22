//Function Declaration

function bomDia(){
    console.log("Bom dia")
}
bomDia()

//Function Expression - Função anonima dentro de uma variavel

const boaTarde = function(){
    console.log("Boa tarde")
}
boaTarde()

function somar(a = 0,b = 0){ // B = 0, significa que caso nao passem o valor dele, ele assume 0 e nao undefined
    return a + b
}
let result = somar(3,5) 
console.log(result)

result = somar(3,5,6,6,7,8) // O JS ignora os parametros que nao tem variavel de retorno na função
console.log(result)

result = somar(3) 
console.log(result)

result = somar() 
console.log(result)