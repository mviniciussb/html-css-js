import { controlsPlay } from "./elements.js"

export function registerControls() {
    controlsPlay.addEventListener("click", (event) => {
        console.log(event.target)
    })
}