//funçoes auto invocadas - serve para nao poluir globalmente o codigo


// function init ( ) {
//     let isValid = false
//     console.log('init menu', isValid)
// }
// init()

(function () {
    let isValid = false
    console.log('menu', isValid)

    function init ( ) {
        console.log('init menu')
    }
    init()
})()





