// PLANT MUSIC

const plantButton = document.querySelector(".plantButton")
const plantSound = new Audio("./assets/plant.wav")
plantSound.loop

plantButton.addEventListener("click", () => {
    plantSound.play()
})

// CLOUD MUSIC

const cloudButton = document.querySelector(".cloudButton")
const cloudSound = new Audio("./assets/cloud-rain.wav")
cloudSound.loop

cloudButton.addEventListener("click", () => {
    cloudSound.play()
})


// COFFEE

const coffeeButton = document.querySelector(".coffeeButton")
const coffeeSound = new Audio("./assets/coffee.wav")
cloudSound.loop

coffeeButton.addEventListener("click", () => {
    coffeeSound.play()
})


// CAMPFIRE

const campfireButton = document.querySelector(".campfireButton")
const campfireSound = new Audio("./assets/campfire.wav")
cloudSound.loop

campfireButton.addEventListener("click", () => {
    campfireSound.play()
})
