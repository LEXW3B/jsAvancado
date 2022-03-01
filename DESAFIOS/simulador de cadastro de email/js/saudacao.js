const receberEmail = document.querySelector('#txtEmail')
const resp = document.querySelector('#newsletterFeedback')

function envio () {        
    let email = receberEmail.value
    resp.innerHTML = `O seu email: ${email} já foi cadastrado com sucesso.`
}
