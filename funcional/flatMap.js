const letrasAninhadas = [
    ['o',['l'],'a'],
    [' '],
    ['m',['u'],'n','d','o']
]
const letras = letrasAninhadas.flat(Infinity)
const resultado = letras 
.flatMap(l =>['letra:', l])
console.log(letras)
console.log(resultado)