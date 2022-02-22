/*
pode recebe um ou mais valores numericos, 
deve retornar um unico numero,
deve gerar um erro se receber um parametro nao numerico,
deve retornar zero caso nao receba nem um paramertro,
EX:. calcularMedia ()               0   - IF
EX:. calcularMedia (2,6)            4   -
EX:. calcularMedia (2,6,1,1,2,6)    3   -
EX:. calcularMedia ('2','6')        ERROR IF
*/
(function (){
    function calcularMedia (arguments) {
        if (arguments === 0 || arguments === ' ' || arguments === undefined) {
            console.log('ERROR')
        }
    
        tot1 = 0
        for (let c = 0; c < arguments.length; c++) {
            tot1 += arguments[c]
        }
    
        let resp = tot1 / arguments.length
        console.log(`A média é ${resp}`)
    }
    calcularMedia([1,2,3,4,5,6])
})()














