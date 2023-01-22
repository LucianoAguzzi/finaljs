const formularioValidacion = document.querySelector("#formulario")
formularioValidacion.onsubmit = () => {
    //validar nombre tenga mas de dos caracteres
    const usernameInput = document.querySelector("#username")
    if (usernameInput.value.length <= 2) {
        alert("El usuario requiere más de dos caracteres")
        return false
    }
    //validar que el email tenga un arroba
    const mailInput = document.querySelector("#emailadress")
    if (!mailInput.value.includes("@")) {
        alert("El email requiere un arroba")
        return false
    }
}