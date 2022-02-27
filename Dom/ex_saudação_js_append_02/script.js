(function(){
    const nomeUsuario = 'Alexandre'

    if (nomeUsuario) {
        const topBarElement = document.createElement('div')//isso cria uma div.
        topBarElement.className = 'top-bar'//isso da class a div que foi criada.
        topBarElement.innerHTML = `<p>Bem vindo(a), ${nomeUsuario}</p>`//isso deixa visivel a div criada.

        const elementFather = document.querySelector('.hero')
        elementFather.insertBefore(topBarElement, elementFather.firstElementChild)//isso inseri a DIV criada entre o elemento pai e o primeiro elemento filho para assim ser visualizado.
    }    
})()

