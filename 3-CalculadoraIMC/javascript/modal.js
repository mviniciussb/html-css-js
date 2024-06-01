export const modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal-card h2"),
    buttonClose: document.querySelector(".buttonClose"),
    open() {
        modal.wrapper.classList.add("openPopUp")
    },
    close() {
        modal.wrapper.classList.remove("openPopUp")
    }
}

function closePopUp() {
    modal.close()
}

document.addEventListener("keydown", handleKeyDown)

function handleKeyDown (event) {
    if (event.key == "Escape") {
        modal.close()
    }
}