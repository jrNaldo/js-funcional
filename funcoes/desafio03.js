const alunos = [
  { nome: "Carlos", nota: 7 },
  { nome: "Amanda", nota: 4 },
  { nome: "Beatriz", nota: 5.5 },
  { nome: "Daniel", nota: 8 }
]

const reprovados = alunos.filter(a => a.nota < 6)
console.log(reprovados)

const pacientes = [
  { nome: "Marcos", peso: 90, altura: 1.8 },
  { nome: "Ana", peso: 55, altura: 1.6 },
  { nome: "João", peso: 80, altura: 1.7 }
]

const imc = pacientes
    .filter(p =>{
        const imc = p.peso / (p.altura**2)
        return imc >= 25
    })
    .map(p => p.nome)
console.log(imc)
const livros = [
  { titulo: "Dom Casmurro", estoque: 3 },
  { titulo: "1984", estoque: 0 },
  { titulo: "O Cortiço", estoque: 0 },
  { titulo: "A Moreninha", estoque: 1 }
];

const zeroUnidades = livros
    .filter(e => e.estoque === 0)
    .map(e => e.titulo)
console.log(zeroUnidades)

const acessos = [
  { user: "Ana", status: "ok" },
  { user: "João", status: "erro" },
  { user: "Lucas", status: "erro" },
  { user: "Maria", status: "ok" }
]

const erros = acessos.filter(el => el.status === "erro")
console.log(erros)

const carrinho = [
  { produto: "Leite", preco: 5, qtd: 2 },
  { produto: "Pão", preco: 3, qtd: 5 },
  { produto: "Queijo", preco: 10, qtd: 1 }
]

const total =  carrinho.reduce((acc, el) => acc + el.preco * el.qtd,0)
console.log(total) 

const produtos = [
    {nome:"Fones de Ouvido", avaliacoes:[4,5,4,3,5]},
    {nome:"Mouse Gamer", avaliacoes:[2,3,1]},
    {nome: "Monitor", avaliacoes: [5,5,5,4]}
]
const resultados = produtos.map(produto => {
    const totalAvaliacoes = produto.avaliacoes.reduce((a,b) => a+b)
    const qtd = produto.avaliacoes.length
    const media = totalAvaliacoes / qtd
    let classificacao = "";
    if (media < 3) classificacao = "Ruim";
    else if (media <= 4) classificacao = "Boa";
    else classificacao = "Excelente";
    return{
      nome: produto.nome,media,quantidade: qtd,classificacao
    }
})
console.log(resultados)

console.log("---------------------------------------")

const funcionarios = [
  {nome: "Ana",salario: 3000,bonus: [200, 150],descontos: [100, 50]},
  {nome: "João",salario: 2500,bonus: [300],descontos: [100, 150, 100]},
  {nome: "Clara",salario: 4000,bonus: [],descontos: [500]}
]

const salarioFinal = funcionarios.map(funcionario => {
  const totalBonus = funcionario.bonus.reduce((a,b)=>a+b,0)
  const totalDescontos = funcionario.descontos.reduce((a,b)=> a+b,0)
  const descontoSalario = (totalBonus - totalDescontos) + funcionario.salario
  return{
    nome: funcionario.nome, Bônus: totalBonus, Descontos: totalDescontos, Salario: descontoSalario
  }
})
console.log(salarioFinal)