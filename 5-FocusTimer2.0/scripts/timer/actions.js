import state from "./state.js"
import * as timer from "./timer.js"
import * as elements from "./elements.js"

export function play() {
    state.isRunning = true
    timer.countdown()
}

export function reset() {
    state.isRunning = false
    timer.updateDisplay()
}

export function addTime() {

    if(state.isRunning == true){
        
    }
}

export function subTime() {
   
}