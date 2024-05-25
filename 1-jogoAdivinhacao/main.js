let randomNumber = Math.round(Math.random() * 10)
let attempts = 1
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")

function handTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if (Number(inputNumber.value) == randomNumber) {
        
        screenOne.classList.add("hide")
        screenTwo.classList.remove("hide")

        screenTwo.querySelector("h2").innerText = `Parabéns! Você acertou em ${attempts} tentativas.`
    }
    inputNumber.value = ""
    attempts++
}

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


btnTry.addEventListener("click", handTryClick)
btnReset.addEventListener("click", function () { 
    screenOne.classList.remove("hide")
    screenTwo.classList.add("hide")

    attempts = 1
    randomNumber = Math.round(Math.random() * 10)
})