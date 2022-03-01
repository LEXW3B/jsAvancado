const txtEmail = document.getElementById("txtEmail")


function funcionarEditar () {
    txtEmail.disabled = false
    txtEmail.focus()
}
function naoFuncionarEditar () {
    txtEmail.disabled = true
}