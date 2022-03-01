//o metodo filter vai ser usado quando quiser filtrar uma array por exemplo so numeros.
//esse metodo nao altera a array original, mas gera uma nova array
const arr = [1,5,10,'ola',true]

const arr1 = arr.filter(function(el, i, _arr){

    return typeof el === 'number'
})
console.log(arr)
console.log(arr1)













