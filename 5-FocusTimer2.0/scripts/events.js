import * as elements from "./elements.js"
import * as sounds from "./sounds.js"
import state from "./state.js"

export function plantSound() {
    elements.plantButton.addEventListener("click", () => {
        sounds.plantSound.play()

    })
}

export function cloudSound() {
    elements.cloudButton.addEventListener("click", () => {
        sounds.cloudSound.play()
    })
}

export function coffeeSound() {
    elements.coffeeButton.addEventListener("click", () => {
        sounds.coffeeSound.play()
    })
}

export function campfireSound() {
    elements.campfireButton.addEventListener("click", () => {
        sounds.campfireSound.play()
    })
}