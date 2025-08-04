function login(email,senha){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if(email === "naldo" && senha === 1234){
                resolve(101)
            }else{
                reject("Usuario ou senha invalido")
            }
        }, 1000)
    })
}
function buscarPerfil(id){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            if(id === 101){
            resolve({ 
                nome: "naldo",
                idade: 30,
                cidade: "Uberaba"
            })
        }else{
            reject("Erro de id de usuário")
        }
    }, 2000)
    })
}
login("naldo",1234)
    .then( n => buscarPerfil(n))
    .then( perfil => console.log(`Bem vindo ${perfil.nome} de ${perfil.cidade}`))
    .catch(err => console.log(err))

function verificarAgenda(dia){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            if(dia === "segunda" || dia === "quarta"){
            resolve(`Consulta disponível para ${dia}`)
        }else{
            reject("Sem horários disponíveis nesse dia")
        }
        }, 3000)
    })
}
verificarAgenda("quarta")
        .then(msg => console.log(msg))
        .catch(msg => console.log(msg))


function enviarEmail(email){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            if(email.includes("@") && email.endsWith(".com") ){
                resolve(`Email enviado para ${email}`)
            }else{
                reject("Email invalido")
            }
        },2000)
    })
}

function gerarEmail(){
    return Promise.all([
        enviarEmail("naldo@email.com"),
        enviarEmail("naldoemail.com"),
        enviarEmail("naldo@emailcom")    
    ])
}
gerarEmail().then(msg => console.log(msg))
            .catch(msg => console.log(msg))