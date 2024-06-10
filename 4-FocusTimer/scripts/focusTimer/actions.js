import state from "./state.js"
import * as timer from "./timer.js"

export function toggleRunning(){
    state.isRunning = document.querySelector("html").classList.toggle("running")

    timer.countDown()
}

export function set(){
    // tem que trabalhar aqui ainda
}

export function reset(){
    state.isRunning = false
    document.querySelector("html").classList.toggle("running")
    timer.updateDisplay()
}

export function toggleMusic(){
    state.isMute = document.querySelector("html").classList.toggle("music-on")
}