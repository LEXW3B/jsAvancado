//o metodo reduce = retorna a soma de todos os valores da array por meio de uma função
let arr = [1,2,3]

let soma = arr.reduce(function(acumulador, atual){
    return acumulador + atual
})
console.log(arr)
console.log(soma)


const nomes = ['alex', 'daniel', 'maria', 'joana', 'joao']
let nomesPorOrdem = nomes.reduce( function(nomes, nomeAtual){
    let primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    }else{
        nomes[primeiraLetra] = 1
    }
    return nomes
}, {})
console.log(nomesPorOrdem)








