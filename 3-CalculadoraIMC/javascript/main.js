import { modal, closePopUp } from "../javascript/modal.js"
import { errorModule, inputCloseError } from "../javascript/alert-error.js"
import { imCalc, notNumber } from "../javascript/utils.js"

const formButton = document.querySelector("#formButton")
let weight = document.querySelector("#weight")
let height = document.querySelector("#height")



formButton.addEventListener("click", handleForm)
modal.buttonClose.addEventListener("click", closePopUp)

function handleForm(event) {
    event.preventDefault()

    const inputWeigth = weight.value
    const inputHeigth = height.value

    const showAlertError = notNumber(inputWeigth) || notNumber(inputHeigth)

    if (showAlertError) {
        errorModule.open()
        return
    }
    const imcResult = imCalc(inputWeigth, inputHeigth)
    messageImcCalc(imcResult)
}

function messageImcCalc(result) {
    const message = `Seu IMC é de ${result}`

    modal.message.innerText = message
    modal.open()
}

document.addEventListener("input", inputCloseError)

