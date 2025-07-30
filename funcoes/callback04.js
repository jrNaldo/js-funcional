const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]
//A função filter serve para filtrar um array de acordo com um função de callback que retorna true ou false, que respectivamente mantem o item na array original e o outro exclui ele da sua array
const getNome = item => item.nome
const getPreco = item => item.preco
const maiorQueZero = item => item.qtde > 0

const nomesProdutosValidos = carrinho.filter(maiorQueZero).map(getNome)
console.log(nomesProdutosValidos)

Array.prototype.meuFilter = function(fn){
    const novoArray = []
    
    for(let i = 0; i < this.length; i++){
        if(fn(this[i], i, this)){
            novoArray.push(this[i])
        }  
    }
    return novoArray
}
const arr1 = [6,5,3,7,9,10]
const cb = el => el >= 7
console.log(arr1.meuFilter(cb))