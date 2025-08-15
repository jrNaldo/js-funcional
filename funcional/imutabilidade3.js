const pessoa = Object.freeze({
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end:Object.freeze({
        rua: 'Felix'
    })
})
// Passagem por referencia - Impura
function alteraPessoa(pessoa){
    const novaPessoa = { ...pessoa}
    novaPessoa.nome = 'Joao'
    novaPessoa.cidade = 'Uberlandia'
    novaPessoa.altura ='1.94'
    novaPessoa.end.rua = 'ACB'
    return novaPessoa
}
const novaPessoa = alteraPessoa(pessoa)
console.log(novaPessoa)
console.log(pessoa)