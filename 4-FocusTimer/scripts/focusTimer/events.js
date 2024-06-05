import { controlsPlay } from "./elements.js"

export function registerControls() {
    controlsPlay.addEventListener("click", (event) => {
        const action = event.target.dataset.action

        if(action === undefined){
            return
        }

        console.log(action)
    })
}