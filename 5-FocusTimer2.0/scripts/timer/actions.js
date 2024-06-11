import * as events from "./events.js"


export function setControlFunction() {
    controls.addEventListener("click", (event) => {
        console.log(event.target.dataset.action)
    })
}