function textoComTamanhoEntre(min){
    return function(max){
        return function(err){
            return function(texto){
                const tamanho =  (texto || '').trim().length
                if(tamanho < min || tamanho > max){
                    throw err
                }
            }
        }
    }
}
const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome: Invalido')
const p1 = { nome: 'A', preco: 15.00, desc: 0.25}
console.log(forcarNomeProdutoValido(p1.nome))