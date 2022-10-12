import {animals, colors} from "./data.js"

function getRandomColor() {
    return getRandomItemFromArray(colors)
}

function getRandomAnimal() {
    return getRandomItemFromArray(animals)
}

function getRandomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)]
}

export {
    getRandomColor,
    getRandomAnimal,
    getRandomItemFromArray,
}