import state from "./state.js"
import * as elements from "./elements.js"

export function toggleRunning(){
    // trabalhar aqui
}

export function addTime(){
    state.minutes += 5
    elements.minutes.textContent = state.minutes
}

export function subTime(){
    state.minutes -= 5
    elements.minutes.textContent = state.minutes
}