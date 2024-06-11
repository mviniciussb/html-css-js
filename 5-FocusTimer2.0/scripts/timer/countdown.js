import state from "./state.js";
import * as elements from "./elements.js"

export function countDownTime(){

    let minutes = state.minutes
    let seconds = state.seconds

    console.log("antes da transformacao" + seconds)

    if(state.isRunning != true){
        return
    }

    seconds--
    
    if(seconds < 0){
        seconds = 59
    }

    setTimeout(() => countDownTime(), 1000)

}