import { modal } from "../javascript/modal.js"
// Variables
const formButton = document.querySelector("#formButton")
let weight = document.querySelector("#weight")
let height = document.querySelector("#height")


// Events
formButton.addEventListener("click", handleForm)
modal.buttonClose.addEventListener("click", closePopUp)


// Funtions
function handleForm(event) {
    event.preventDefault()

    const inputWeigth = weight.value
    const inputHeigth = height.value

    const IMC = imCalc(inputWeigth, inputHeigth)

    modal.message.innerText = `Seu IMC é de ${IMC}`
    modal.open()

}

function imCalc(weight, height) {
    return (weight / (height / 100) ** 2).toFixed(2);
}
