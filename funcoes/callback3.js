//A função .map(fn), ela pega um array, e com uma função de callback(e os seus parametros são o numero, o indice e a array respectivamente), retorna um novo array com o resultado da função de callback
//Ele gera um novo array, sem mudar o array original
const nums = [1,2,3,4,5]
const dobro = n => n *2

console.log(nums.map(dobro))

const nomes1 = ["Otavio","Iris"]
const primeiraLetra = nome => nome[0]
console.log(nomes1.map(primeiraLetra))

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

const getNome = item => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal )
console.log(totais)
//Como é feita uma função map
Array.prototype.meuMap = function(fn){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray
}
console.log("------------------------------------")
const arr3 = [2,4,6,8,10]
console.log(arr3.meuMap(dobro))