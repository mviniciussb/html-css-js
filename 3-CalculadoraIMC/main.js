// Variables
const formButton = document.querySelector("#formButton")
let weight = document.querySelector("#weight")
let height = document.querySelector("#height")

// Events
formButton.addEventListener("click", handleForm)
buttonClose.addEventListener("click", closeModal)

// Funtions
function handleForm(event) {
    event.preventDefault()

    const inputWeigth = weight.value
    const inputHeigth = height.value
}