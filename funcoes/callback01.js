// A ideia do callback é passar uma função como parametro para outra funcao, e depois ela vai ser chamada de volta
const exec = (fn,x,y) => fn(x,y)

const subtrairTerminal = (a,b) => console.log(a-b)
const somarTerminal = (a,b) => console.log(a+b)

exec(somarTerminal,4,2)

exec(subtrairTerminal,4,2)

//Executa de forma repetida
setInterval(() => console.log("exec 2"), 500)

const fn  = () => console.log("Exec 3...")
setInterval(fn, 1000)