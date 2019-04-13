//G43389-Julien Beghain - B111


//génère un nombre aléatoire entre min et max
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
