// Variaveis
const cookieClick = document.querySelector("#cookieClick")
const screenOne = document.querySelector("#screenOne")
const screenTwo = document.querySelector("#screenTwo")
const openNewCookie = document.querySelector("#openNewCookie")

// Eventos
cookieClick.addEventListener("click", luckyPhrase)
openNewCookie.addEventListener("click", openCokie)

// Funções
function luckyPhrase(){
    toggleScreen()
}

function toggleScreen(){
    screenOne.classList.toggle("hide")
    screenTwo.classList.toggle("hide")
}

function openCokie(){
    toggleScreen()
}