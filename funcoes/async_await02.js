function gerarNumeros(min, max, numProibidos){
    if(min > max) [max, min] = [min,max]

    return new Promise((resolve,reject) =>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() *  fator) + min
        if(numProibidos.includes(aleatorio)){
            reject('Numero Repetido')
        }else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNum, qtdeTentativas = 1 ){
    try{
        const numeros = []
        for(let _ of Array(qtdeNum).fill()){
            numeros.push(await gerarNumeros(1,60, numeros))
        }
        return numeros
    }catch(e){
        if(qtdeTentativas > 10){
            throw "Não deu certo"
        }else{
            return  gerarMegaSena(qtdeNum, qtdeTentativas +1)
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)

function esperar(){
    return new Promise(resolve => {
        setTimeout(()=> resolve(), 2000)
    })
}
async function executar2(){
    console.log('Esperando...')
    const v = await esperar()
    console.log('Finalizado....')
}
executar2()
function buscarDados(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve({nome:'Naldo', Idade: '30',})
        },2000)
    })
}
async function dados(){
        const dadosEncontrados = await buscarDados()
        console.log(dadosEncontrados)
}
dados()

function login(user,senha){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(user === "admin" && senha === "123"){
                resolve("Acesso permitido")
            }else{
                reject("Acesso negado")
            }
        }, 2000)
    })
}

async function cadastro(){
    try{
        const log = await login("admin", "123")
        console.log(log)
    }catch(e){
        console.log(e)
    }
}
cadastro()