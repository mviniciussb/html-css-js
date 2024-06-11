import state from "./state.js"
import * as elements from "./elements.js"
import { countDownTime } from "./countdown.js"

export function play(){
    state.isRunning = true
    countDownTime(state.minutes, state.seconds)
}

export function stop(){
    state.isRunning = false
}

export function addTime(){
    state.minutes += 5
    elements.minutes.textContent = state.minutes
}

export function subTime(){
    state.minutes -= 5
    elements.minutes.textContent = state.minutes
}