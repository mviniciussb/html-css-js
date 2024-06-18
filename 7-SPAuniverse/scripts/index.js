import { toggleScreen } from "./events.js";
import * as routes from "./routes.js"


export function start() {
    toggleScreen()

    routes.handle()
    window.onpopstate = () => routes.handle()
}