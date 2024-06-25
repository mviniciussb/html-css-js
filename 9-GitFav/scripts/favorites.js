// Classe que vai conter a lógica dos dados, ou seja, como os dados serão estruturados

export class Favorirites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [{
            login: "",
            name: "",
            public_repos: "",
            follower: ""
        },
        {
            login: "",
            name: "",
            public_repos: "",
            follower: ""
        }]
    }

    delete(user){
        // Higher-order functions (map, filter, find, reduce)
        const filteredEntries = this.entries.filter((entry) => entry.login !== user.login)
    }
}


// Classe que vai criar a visualização e eventos do HTML

export class FavoritesView extends Favorirites {
    constructor(root) {
        super(root)
        this.tbody = this.root.querySelector("table tbody")

        this.update()
    }




    update() {
        this.removeAllTr()



        this.entries.forEach(user => {
            const row = this.createRow()

            row.querySelector(".user img").src = `https://github.com/${user.login}.png`
            row.querySelector(".user img").alt = `Imagem de ${user.name}`
            row.querySelector(".user p").textContent = user.name
            row.querySelector(".user span").textContent = user.login
            row.querySelector(".repositories").textContent = user.public_repos
            row.querySelector(".user followers").textContent = user.followers


            row.querySelector(".remove").onclick = () => {
                const isOk = confirm("Tem certeza que deseja deletar este perfil?")

                if(isOk){
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })

        
    }



    createRow() {
        const tr = document.createElement("tr")

        tr.innerHTML = `
        
        <tr>
            <td class="user">
                <img src="https://github.com/mviniciussb.png" alt="Foto de Marcos Vinicius">
                <a href="https://github.com/mviniciussb" target="_blank">
                    <p>Marcos Vinicius</p>
                    <span>/mviniciussb</span>
                </a>
            </td>
    
                <td class="repositories">123</td>
                <td class="followers">1234</td>
                <td class="remove"><a href="">Remover</a></td>
        </tr>
        
        `
        return tr

    }


    removeAllTr() {
        this.tbody.querySelectorAll("tr").forEach((tr) => {
            tr.remove()
        });
    }
}