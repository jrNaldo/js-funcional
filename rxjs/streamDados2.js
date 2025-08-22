const numeros = [1,2,3,4,5,6,7,8,9,10]

function gerarElementos(arr){
    return{
        iniciar(fn){
            let indice = 0
            const i = setInterval(()=>{
                if(indice >= arr.length){ 
                    clearInterval(i)
                }else{
                    fn(arr[indice])
                    indice++
                }
            },1000)
            return{
                parar(){
                    clearInterval(i)
                }
            }
        }
    }
}

const temp1 = gerarElementos(numeros)
const exec1 = temp1.iniciar(num => {
    console.log(Math.pow(2,num))
})
setTimeout(() =>{
    exec1.parar()
}, 4000)
gerarElementos([['Ana','Bia','Carlos'],['Dani','Ju'],[1,2,3,4,5]])
        .iniciar(console.log)