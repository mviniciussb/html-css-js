// Variaveis
const div1 = document.querySelector(".div1")
const div2 = document.querySelector(".div2")
let randomNumber = Math.round(Math.random() * 10)
const inputSubmit = document.querySelector("#inputSubmit")
const tryAgain = document.querySelector("#tryAgain")
let attempts = 1

// Eventos
inputSubmit.addEventListener("click", numberValidation)
tryAgain.addEventListener("click", playAgain)
document.addEventListener('keydown', enterFunction)

// Funções
// Função para esconder a página principal e entrar a escondida
function numberValidation(event) {
    event.preventDefault()
    let inputButton = document.querySelector("#inputButton")
    if (inputButton.value >= 0 && inputButton.value <= 10 && inputButton.value != "") {
        if (randomNumber == inputButton.value) {
            toggleScreen()

            if (attempts == "1") {
                div2.querySelector("h1").innerText = `Acertou em ${attempts} tentativa!`
            } else {
                div2.querySelector("h1").innerText = `Acertou em ${attempts} tentativas!`
            } // Verificação de plural

        } else { } //Exucação em si
        inputButton.value = ""
        attempts++
    } else {
        alert("O valor digitado deve estar entre 0 e 10")
    }
} //Verificação se está entre 0 e 10

// Função para mostrar a página principal e esconder a secundária
function playAgain() {
    toggleScreen()
    attempts = 1
    randomNumber = Math.round(Math.random() * 10)

}

function toggleScreen() {
    div1.classList.toggle("hide")
    div2.classList.toggle("hide")
}

function enterFunction(e) {
    if (e.key == 'Enter' && div1.classList.contains('hide')) {
        playAgain()
    }
}