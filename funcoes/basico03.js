// Arrow function - Foco em sintaxe
// Ela é anonima
const felizNatal = () => console.log("Feliz Natal !")
felizNatal()

// Nao pode colocar a palavra RETURN em uma arrow function, somente se a função na estiver com as {}
// Se tiver somente um parametro os () podem ser retirados
const saudacao  = nome => `Fala ${nome} !!!!`
console.log(saudacao("Naldo"))
// O operador (...) acessa todos os parametros passados na chamada da função, tornando-os uma array
const somar = (...numeros)=>{
    console.log(Array.isArray(numeros))
    let total = 0
    for(let n of numeros){
        total += n
    }
    return total
}

console.log(somar(1,2,3))
console.log(somar(1,2,3,4,5,6))
console.log(somar(1,2,3,4,5,6,7,8,9,10))
console.log("--------------------------------------------")
const potencia =  base => expo => Math.pow(base,expo)

const valor = potencia(2)(2)

console.log(valor)

const calcular = x => y => fn => fn(x,y)

const multiplicar = (a,b) => a * b
const subtrair = (a,b) => a - b

const sub = calcular(10)(5)(subtrair)
const multi = calcular(10)(5)(multiplicar)
console.log(sub, multi)

const media = n1 => n2 => fn => fn(n1,n2)

function calcularMedia(a,b){
    return (a + b) / arguments.length
}

const valorMedia = media(10)(5)(calcularMedia)
console.log(valorMedia)

//this - Ele referencia valores dentro de uma array - Tem haver com OO (programação Orientada a Objeto) - Nao funcionna com Arrow
//Array.prototype - Voce cria uma função que pode ser utlizada em sua array
Array.prototype.log = function (){
    console.log(this)
}
Array.prototype.ultimo = function(){
    console.log(this[this.length -1])
}

const numbers = [1,2,3]
numbers.log()

numbers.ultimo()

