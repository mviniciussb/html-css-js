import state from "./state.js"
import * as timer from "./timer.js"

export function play() {
    state.isRunning = true
    timer.countdown()
}

export function reset() {
    state.isRunning = false
    state.minutes = 0
    state.seconds = 0
}

export function addTime() {
    if (state.isRunning == true) {
        state.minutes += 5
    }
}

export function subTime() {
    if (state.isRunning == true) {
        state.minutes -= 5
    }
}