let p = new Promise(function(resolve){
    resolve(['Naldo','Bruna','Shophia','Jessica'])
})

const primeiroElemento = el => el[0]
const letraMinuscula = el => el.toLowerCase() 
p.then(primeiroElemento)
 .then(primeiroElemento)
 .then(letraMinuscula)
 .then(console.log) 