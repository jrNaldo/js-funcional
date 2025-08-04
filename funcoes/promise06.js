function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve,reject) =>{
        try{
            // con.log('temp')
            if(Math.random() < chanceErro){
                reject('Ocorreu erro')
            }else{
                resolve(valor)
            }
        }catch(e){
            reject(e)
        }
    })
}
// O catch fica sempre por ultimo

funcionarOuNao('O valor gerado foi maior que a chance de erro', 0.6)
                            .then(v => `valor: ${v}`)
                            .then(
                                v => consol.log(v),
                                err => console.log(`Erro especifico -  ${err}`)
                            )
                            .catch(err => console.log(`Erro Geral: ${err}`))
                            .then(()=>console.log("FIM"))