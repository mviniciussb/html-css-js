// Variables
const formButton = document.querySelector("#formButton")
let weight = document.querySelector("#weight")
let height = document.querySelector("#height")
const modalWrapper = document.querySelector(".modal-wrapper")
const buttonClose = document.querySelector(".close")
const  modalCard = document.querySelector(".modal-card")

// Events
formButton.addEventListener("click", handleForm)
buttonClose.addEventListener("click", closeModal)

// Funtions
function handleForm(event) {
    event.preventDefault()

    const inputWeigth = Number(weight.value)
    const inputHeigth = Number(height.value)

    const result = calcImc(inputWeigth, inputHeigth)
    
    modalCard.querySelector("h2").innerText = `Seu IMC é de ${result}`
    modalWrapper.classList.add("openPopUp")
}
function calcImc(weight, height) {
    return (weight / (height / 100) ** 2).toFixed(2)
}
function closeModal(){
    if(modalWrapper.classList.contains("openPopUp")){
        modalWrapper.classList.toggle("openPopUp")
    }
}