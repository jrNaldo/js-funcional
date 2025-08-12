// Uma função pura é uma função em que o valor
// de retorno é determinado APENAS por seus valores
// de entrada, sem efeitos colaterais observáveis


//Impura - PI é um valor externo
function areaCirc(raio){
    return raio**2 * Math.PI // Estável
}
// Função Pura
console.log(areaCirc(10).toFixed(2))
function areaCircPura(raio, pi){
    return raio **2 * pi
}
console.log(areaCircPura(10,3.14).toFixed(2))