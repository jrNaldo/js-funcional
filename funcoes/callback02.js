// Callback de ler um arquivo e uma função será retornada
// fs e path é uma biblioteca do node.js
//o fn e o path são funções nativas do node, onde o fs manipula arquivos e o path ajuda a trabalhar com caminhos de arquivos
const fs = require('fs')

const path = require('path')
//__dirname - Ele pega o diretrio atual do arquivo executado
const caminho = path.join(__dirname, 'dados.txt')//Ele usou o join para contatenar os dois parametros, criando um caminho que pode ser interpretado por todos os browsers
// fs - Tem duas funções para ler arquivos, readFile e readFileSync
function exibir(err, conteudo){
    console.log(conteudo.toString())
}
// _ => Em parametros de uma função, significa que ele não será usado, está ali so para preencher um espaço necessario
// O readFile lê a função de callback de forma assincrona, é enviado para a Event Queue, depois para a stack quando ela estiver vazia
console.log("Inicio")
fs.readFile(caminho,exibir)
fs.readFile(caminho,{}, (_,conteudo) => console.log(conteudo.toString()))
console.log("Fim")
// O readFileSync lê a função de callback de forma sincrona, ele é executado na stack
console.log("Inicio Sync")
const conteudo =  fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log("Fim Sync")

