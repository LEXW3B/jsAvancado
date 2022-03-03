

function sum () {
    const numbers = []
    //for(let i = 0; i < arguments.length; i++) {
    //    numbers.push(arguments[i])
    //}
    //console.log(numbers)

    Array.prototype.forEach.call(arguments, function(arguments){
        numbers.push(arguments)
    })

    return numbers.reduce(function(soma, atual){
        return soma + atual
    }, 0)
}
console.log(sum(1,2,3,4,5))

function avarege() {
    const somar = sum.apply(null, arguments)
    console.log(somar)

    return somar / arguments.length
}
console.log(avarege(1,2,3,4,5))
//sum.call(null, 1,2,3,4,5)//
//sum.apply(null, [1,2,3,4])//


















