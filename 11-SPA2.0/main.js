const links = document.querySelectorAll("a")

        links.forEach((link) => {
            link.addEventListener("click", (evt) => {
                evt.preventDefault()

                window.history.pushState({}, "", evt.target.href)

            })
        })





class Routes{
    constructor(name, link){
        this.name = name;
        this.link = link
    }
}

const link1 = new Routes("/", "./pages/home.html")
const link2 = new Routes("/contato", "./pages/contact.html")
const link3 = new Routes("/sobre", "./pages/sobre.html")
