class Player {
    constructor(character) {
        this.character = character;
        this.canInteract = true;
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
                if(this.canInteract) {
                    this.character.interact(level);
                    this.canInteract = false;
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

            //if space isn't pressed and the player can't interact - enable player to interact          
            if(!this.canInteract && !spacePressed)
                this.canInteract = true;
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