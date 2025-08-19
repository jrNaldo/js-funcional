const x =3

function fora(){
    const x = 5
    function somar(){
    return x + 3
    }
    return somar
}
module.exports = fora()