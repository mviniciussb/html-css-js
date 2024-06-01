import { modal, closePopUp } from "../javascript/modal.js"
import {errorModule} from "../javascript/alert-error.js"
import {imCalc, notNumber} from "../javascript/utils.js"

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

    const showAlertError = notNumber(inputWeigth) || notNumber(inputHeigth)

    if (showAlertError) {
        errorModule.open()
        return
    }
        errorModule.close()
        const IMC = imCalc(inputWeigth, inputHeigth)
        modal.message.innerText = `Seu IMC é de ${IMC}`
        modal.open()

}
