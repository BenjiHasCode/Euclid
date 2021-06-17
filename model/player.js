class Player {
    constructor(character) {
        this.character = character;
        this.interactTimer = Date.now() - 200; //to prevent the player from interacting with the door 5000 times a second
    }

    update(level) {
        //check if not idle
        if(this.character.state != CharacterState.IDLE) {
            //continue current action
            const finishedAction = this.character.update(level);

            if(finishedAction) {
                // if character has finished action - set to idle
                this.character.state = CharacterState.IDLE;
            }
        }

        // if character is idle, check for input
        if (this.character.state == CharacterState.IDLE){
            //check interaction
            if (spacePressed) {
                if(Date.now() - this.interactTimer >= 200) {
                   this.character.interact(level);
                   this.interactTimer = Date.now();
                }
            }
            //check move
            else if (upPressed || downPressed || leftPressed || rightPressed) {
                if(upPressed){
                    this.character.updateDirection(Direction.UP);
                }else if(downPressed){
                    this.character.updateDirection(Direction.DOWN);
                }else if(leftPressed){
                    this.character.updateDirection(Direction.LEFT);
                }else if(rightPressed){
                    this.character.updateDirection(Direction.RIGHT);
                }
                this.character.state = CharacterState.MOVE;
            }
        }
    }


    render(ctx, camera) {
        //render character
        this.character.render(ctx, camera);    
    }

    getX() {
        return this.character.getX();
    }

    getY() {
        return this.character.getY();
    }

    setX(x) {
        this.character.setX(x);
    }

    setY(y) {
        this.character.setY(y);
    }
}