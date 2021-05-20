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

/*
function handleInput(gameState, character) {
    switch(gameState) {
        case gameState.MENU:
            //handle menu input
            break;
        case gameState.PLAY:
            //I want it to be sort of "turn based". Fx you move a tile and while moving you can't do anything
            //this is a try at emulating the movement of early tilebased games, fx Pokemon
            if(character.state == characterState.IDLE) {
                if(upPressed){
            
                }else if(downPressed) {

                }else if(leftPressed) {
                    
                }else if(rightPressed) {
                    
                }else if(spacePressed) {
                    
                }else if(enterPressed) {
                    
                }
            }
            //handle character movement
            break;
    }
}*/