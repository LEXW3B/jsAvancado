(function(){
    let nomeUsuario = 'Alexandre'
    let top = document.querySelector('.top-bar p')
    function trocarNome () {
        if (nomeUsuario) {
            top.innerHTML = `Bem-vindo(a), ${nomeUsuario}`
        } else {
            top.parentElement.style.display = 'none'
        }   
    }
    trocarNome()
})()
