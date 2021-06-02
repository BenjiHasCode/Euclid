let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;
let spacePressed = false;
let enterPressed = false;


//keydown
document.addEventListener("keydown", ({code})=> {
    switch(code) {
        case "KeyW":
        case "ArrowUp":
            upPressed = true;
            break;
        case "KeyS":
        case "ArrowDown":
            downPressed = true;
            break;
        case "KeyA":
        case "ArrowLeft":
            leftPressed = true;
            break;
        case "KeyD":
        case "ArrowRight":
            rightPressed = true;
            break;
        case "Space":
            spacePressed = true;
            break;
        case "Enter":
            enterPressed = true;
            break;
    }
});


//keyup
document.addEventListener("keyup", ({code})=> {
    switch(code) {
        case "KeyW":
        case "ArrowUp":
            upPressed = false;
            break;
        case "KeyS":
        case "ArrowDown":
            downPressed = false;
            break;
        case "KeyA":
        case "ArrowLeft":
            leftPressed = false;
            break;
        case "KeyD":
        case "ArrowRight":
            rightPressed = false;
            break;
        case "Space":
            spacePressed = false;
            break;
        case "Enter":
            enterPressed = false;
            break;
    }
});