export const getRandomIntInDiapasone = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export const getRandomIntFromZeroToMax = (max) => {
    return Math.floor(Math.random() * max);
}