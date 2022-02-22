/* REQUESITOS PARA CALCULAR O IMC
- formula é IMC = peso/altura²
deve retornar um unico numero
deve gerar um erro se receber um parametro não número
deve retornar erro caso nao receba os dois parametro
     depois vem a classificação
     -muito abaixo do peso    :    16 a 16,9      kg/m²
     abaixo do peso           :    17 a 18,4      kg/m²
     peso normal              :    18,5 a 24,9    kg/m²
     acima do peso            :    25 a 29,9      kg/m²
     obesidade grau 1         :    30 a 34,9      kg/m²
     obesidade grau 2         :    35 a 40        kg/m²
     obesidade grau 3         :    maior que 40   kg/m² 
*/
let peso = 98
let altura = 1.69
    
function calculoIMC (n1, n2) {
    'use strict'
    if (peso === undefined || altura === undefined) {
        throw Error('Preencha os dados acima.')
    }

    let imc = n1/(n2*n2)
    console.log(imc)

    if (imc <= 16.9) {
        console.log('Muito abaixo do peso.')
    } else if (imc <=18.4) {
        console.log('Abaixo do peso.')
    } else if (imc <= 24.9) {
        console.log('Peso normal.')
    } else if (imc <= 29.9) {
        console.log('Acima do peso.')
    } else if (imc <= 34.9) {
        console.log('Obesidade grau 1')
    } else if (imc <= 40) {
        console.log('Obesidade grau 2')
    } else {
        console.log('Obesidade grau 3')
    }
               
}
calculoIMC(peso, altura)
//n1 = peso
//n2 = altura





















