

function sum () {
    //const numbers = Array.from(arguments)  ou
    const numbers = [...arguments]
    //console.log(numbers)
    //console.log(numbers.reduce)
    return numbers.reduce( function(soma, atual){
        return soma + atual
    }, 0 )
}
function avarege () {
    return sum(...arguments) / arguments.length
}
//sum(1,2,3,4,5)
let soma = sum(1,2,3,4,5)
console.log(soma)
let media = avarege(1,2,3,4,5)
console.log(media)

















