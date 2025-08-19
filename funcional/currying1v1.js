// Voçê cria versões parciais da sua função
function textoComTamanhoEntre(min,max,err,texto){
    const tamanho =  (texto || '').trim().length

    if(tamanho < min || tamanho > max){
        throw err
    }
}

const p1 = { nome: 'A', preco: 15.00, desc: 0.25}
textoComTamanhoEntre(4,255,'Nome: Invalido', p1.nome)