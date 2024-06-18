export const home = document.querySelector("li:nth-child(1)")
export const oUniverso = document.querySelector("li:nth-child(2)")
export const explorar = document.querySelector("li:nth-child(3)")


home.addEventListener("click", (event) => {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    handle()
})



oUniverso.addEventListener("click", (event) => {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)
    handle()
})



explorar.addEventListener("click", (event) => {
    event = event || window.event
    event.preventDefault()
    
    window.history.pushState({}, "", event.target.href)
    handle()
})




const routes = {
    "/": "../pages/home.html",
    "/ouniverso": "../pages/universo.html",
    "/explorar": "../pages/explorar.html",
    404: "../pages/404.html"
}

function handle() {
    const {pathname} = window.location
}