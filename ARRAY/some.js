//fazer verificação em cada elemento com o metodo some me retorna um boolean (true ou false)
//se pelo menos um elemento dentro da array e alguma determinada coisa


const arr = [1,5,10,'ola',true]

let sohNumeros = arr.some(function(el){
    return typeof el === 'number' && el > 20
})
console.log(sohNumeros)













