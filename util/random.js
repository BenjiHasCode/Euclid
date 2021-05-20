//returns int from 0 up to max
function randomInt(max) {
    return Math.floor(Math.random() * max);
}

//returns int from min up to max
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//returns int from min up to and including max
function randomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}