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
    state.minutes = 0
    state.seconds = 0
    state.isRunning = false
    document.querySelector("html").classList.toggle("running")
}

export function toggleMusic(){
    state.isMute = document.querySelector("html").classList.toggle("music-on")
}