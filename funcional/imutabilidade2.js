// #1 Dados Mutaveis
const nums = [4,8,3,2,9,1,9,3]
let total = 0
for(let i = 0;i < nums.length; i++){
    total += nums[i]
}
// #2 Reduce 
const somar = (a,b) => a + b
console.log(total)

const total2 = nums.reduce(somar)
console.log(total2)

// #3 Recursividade

function somarArray(array,total =0){
    if(array.length === 0){ 
        return total
    }
    return somarArray(array.slice(1), total + array[0])
}
somarArray(nums) 