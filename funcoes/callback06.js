const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 6 },
    { nome: "Clara", nota: 9 },
    { nome: "Bruno", nota: 5 }
]
const nota = n => n.nota >= 7
const getNota = n => n.nota
const aprovados = alunos.filter(nota).map(getNota)
const soma = aprovados.reduce((acc,el)=> acc + el,0)
const media = soma / aprovados.length

console.log(`A medía é: ${media}`)