
//tipagem dinamica 
let x = 10
x = 'uma string'
console.log(x) 
//aspas simples e duplas
let msg = 'uma string'
console.log(msg)
//NaN 
console.log('ola'*2)
//this dinamico
function teste () {
    console.log(this)
}
teste()
const obj = {
    n: 0,
    teste2: teste
}
obj.teste2()

















