// Variaveis
let randomNumberPhrase = Math.round(Math.random() * 10)
const cookieClick = document.querySelector("#cookieClick")
const screenOne = document.querySelector("#screenOne")
const screenTwo = document.querySelector("#screenTwo")
const openNewCookie = document.querySelector("#openNewCookie")
const phrasesList = [
"Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
"A vida trará coisas boas se tiver paciência.",
"Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
"Não compense na ira o que lhe falta na razão.",
"Defeitos e virtudes são apenas dois lados da mesma moeda.", 
"A maior de todas as torres começa no solo.", 
"Não há que ser forte. Há que ser flexível.", 
"Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?", 
"Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.", 
"A juventude não é uma época da vida, é um estado de espírito."]
let phrase

// Eventos
cookieClick.addEventListener("click", luckyPhrase)
openNewCookie.addEventListener("click", openNewCokie)
document.addEventListener("keydown", function(key){
    if(key.key == "Enter" && screenOne.classList.contains("hide")){
        openNewCokie()
    }
})

// Funções
function luckyPhrase(){
    toggleScreen()

    phrase = phrasesList[randomNumberPhrase]

    screenTwo.querySelector("p").innerText = phrase
}

function toggleScreen(){
    screenOne.classList.toggle("hide")
    screenTwo.classList.toggle("hide")
}

function openNewCokie(){
    toggleScreen()
    randomNumberPhrase = Math.round(Math.random() * 10)
}
