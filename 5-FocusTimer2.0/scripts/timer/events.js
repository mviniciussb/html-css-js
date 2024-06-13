import * as elements from "./elements.js"
import * as actions from "./actions.js"

export function registerControls(event) {

    elements.controls.addEventListener("click", (event) => {
        const action = event.target.dataset.action

        if (action == undefined) {
            return
        }

        console.log(actions["play"]())
    })

}