import * as elements from "./elements.js"
import * as actions from "./actions.js"



export function setControlFunction() {
    controls.addEventListener("click", (event) => {
        const registerControls = event.target.dataset.action
    })
}