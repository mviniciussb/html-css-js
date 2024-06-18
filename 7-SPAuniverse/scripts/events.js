import * as elements from "./elements.js"
import * as routes from "./routes.js"

export function toggleScreen() {


    elements.home.addEventListener("click", (event) => {
        event.preventDefault()

        elements.BackgroundScreen.style.backgroundImage =
            "url('./assets/mountains-universe-1.png')"

        window.history.pushState({}, "", event.target.href)
        routes.handle()
    })



    elements.oUniverso.addEventListener("click", (event) => {
        event.preventDefault()

        elements.BackgroundScreen.style.backgroundImage =
            "url('./assets/mountains-universe2.png')"

        window.history.pushState({}, "", event.target.href)
        routes.handle()
    })



    elements.explorar.addEventListener("click", (event) => {
        event.preventDefault()

        elements.BackgroundScreen.style.backgroundImage =
            "url('./assets/mountains-universe-3.png')"

        window.history.pushState({}, "", event.target.href)
        routes.handle()
    })

}