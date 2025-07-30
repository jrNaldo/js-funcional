const getTotal = item => item.qtde * item.preco
const somar = (a,b) => a+b
const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

const totalGeral = carrinho.map(getTotal).reduce(somar)

console.log(`O preço total dos items do carrinho é de: R$${totalGeral}`)
