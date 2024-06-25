import * as el from "./elements.js"



export function update(){


    
}

export function removeUser(e){
    el.removeUser.addEventListener("click", (e) => {
        e.preventDefault()

        document.querySelector("tbody tr").remove()
    })
}
