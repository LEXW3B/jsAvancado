//o metodo for of - percore e mostra todos os elementos da array
//o metodo for in - faz um loop do objeto

const arr= [1,2,3]
const obj = {
    nome: 'Maria',
    idade: '28',
    email: 'maria@serv.com'
}
for (let prop in obj){
    console.log(prop)
    console.log(obj [prop])
    console.log('-=-=-=-=-=-=-')
}
for(n of arr){
    console.log(n)
}















