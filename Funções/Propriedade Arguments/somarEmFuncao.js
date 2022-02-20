

//se for por array
function somar (arr) {
    let total = 0
    for(let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}
//console.log(somar([1,2,3]))    

 //se for sem array
 function somar () {
    console.log(arguments)
    let total = 0
    for(let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}
console.log(somar(1,2,3))
console.log(somar(1,2,3,4,5))
console.log(somar(1,2,3,4,5,6,7,8,9,10))










