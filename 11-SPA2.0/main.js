const routes = {
    "/": "./pages/home.html",
    "/contact": "./pages/contact.html",
    "/about": "./pages/sobre.html",
    404: "./pages/404.html"
};


const links = document.querySelectorAll("a")
const main = document.querySelector("main")
main.innerHTML = `
    <h1>Inicio</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia animi nulla quis aliquid minus iusto, non enim! Error at voluptas eaque libero totam eos delectus atque, aut architecto quidem veritatis!</p>
    `

links.forEach((link) => {
    link.addEventListener("click", (evt) => {
        evt.preventDefault()

        const url = evt.target.href

        window.history.pushState({}, "", url)

        loadContent(window.location.pathname)
    })
})

function loadContent(url) {
    
    let route = routes[url] || routes["/404"]
    fetch(route).then(dado => dado.text()).then(dadoText => {
        main.innerHTML = dadoText
    })
}


window.onpopstate =  () => loadContent(window.location.pathname)






