import state from "./state.js"
import * as elements from "./elements.js"

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutesTime //nullish coalesing operator
    seconds = seconds ?? state.secondsTime

    elements.minutesElement.textContent = minutes

    elements.minutesElement.textContent = seconds
}