import * as el from "./elements.js"

let randomNumberPhrase = Math.round(Math.random() * 10)

export function luckyPhrase(){
    toggleScreen()

    let phrase
    
    
    phrase = el.phrasesList[randomNumberPhrase]

    el.screenTwo.querySelector("p").innerText = phrase
}

export function toggleScreen(){
    el.screenOne.classList.toggle("hide")
    el.screenTwo.classList.toggle("hide")
}

export function openNewCokie(){
    toggleScreen()
    randomNumberPhrase = Math.round(Math.random() * 10)
}
