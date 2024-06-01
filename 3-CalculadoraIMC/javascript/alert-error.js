export const errorModule = {
    messageError: document.querySelector(".error"),
    open() {
        errorModule.messageError.classList.add("hide")
    },
    close() {
        errorModule.messageError.classList.remove("hide")
    }
}

export function inputCloseError() {
    if (weight || height != "") {
        errorModule.close()
    }
}