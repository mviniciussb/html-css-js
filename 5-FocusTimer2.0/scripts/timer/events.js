import * as elements from "./elements.js"

export function controlsPlay() {
    controls.addEventListener("click", (event) => {
        console.log(event.target)
    })
}