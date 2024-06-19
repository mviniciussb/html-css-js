import * as el from "./elements.js"
import * as action from "./actions.js"

export function start() {
    el.cookieClick.addEventListener("click", action.luckyPhrase)
    el.openNewCookie.addEventListener("click", action.openNewCokie)

    
    document.addEventListener("keydown", function (key) {
        if (key.key == "Enter" && el.screenOne.classList.contains("hide")) {
            el.openNewCokie()
        }
    })
}