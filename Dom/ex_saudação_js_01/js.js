(function(){
    let nomeUsuario = 'Alexandre'
    function trocarNome () {
        let top = document.querySelector('.top-bar p')
        top.innerHTML = `Bem-vindo(a), ${nomeUsuario}`
    }
    trocarNome()
})()
