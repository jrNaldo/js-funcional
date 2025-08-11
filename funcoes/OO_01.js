// Função Construtora
function produto(nome,preco, desc = 0.15){
    this.nome = nome
    this.preco =preco
    this.desc = desc

    this.precoFinal = function(){
        return this.preco * (1 - this.desc)
    }
}
const p1 = new produto('Caneta',8)
const p2 = new produto('Geladeira', 3000)

console.log(p1,p2)
console.log(p2.precoFinal())