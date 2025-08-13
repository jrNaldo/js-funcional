// o .sort( ) modifica o array, porem nessa função ele é inserido
// de forma que não ocorre efeito colateral, tornando-se uma função pura
function ordenar(arr){
    return [...arr].sort()
}
// O Object.freeze, torna o dado imutável
const nums = Object.freeze([3,1,7,9,4,6])
console.log(ordenar(nums))
console.log(nums)
const parteArray = nums.slice(2)
console.log(nums, parteArray)