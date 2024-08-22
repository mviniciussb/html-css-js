const routes = {
    "/": "./pages/home.html",
    "/contact": "./pages/contact.html",
    "/about": "./pages/sobre.html",
    404: "./pages/404.html"
};


const links = document.querySelectorAll("a")

links.forEach((link) => {
    link.addEventListener("click", (evt) => {
        evt.preventDefault()

        window.history.pushState({}, "", evt.target.href)
        let pathname = window.location.pathname
        
        let route = routes[pathname] || routes[404]

        fetch(route).then(dado => dado.text()).then(dadoText => {
            document.querySelector("main").innerHTML = dadoText
        })
     })
})





