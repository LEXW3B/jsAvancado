//fazer verificação em cada elemento com o metodo every me retorna um boolean (true ou false)
//se todos dentro da array e alguma determinada coisa
const arr = [1,5,10,'ola',true]

let sohNumeros = arr.every(function(el){
    return typeof el === Number
})
console.log(sohNumeros)


















