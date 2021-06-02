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
                if (upPressed || downPressed || leftPressed || rightPressed) {
                    this.character.updateDirection();
                    this.character.state = CharacterState.MOVE;
                } else {
                    this.character.state = CharacterState.IDLE;
                }
            }
        }
        //else check if player is inputting new action
        else {
            //check interact input
            if (spacePressed) {
                if(Date.now() - this.interactTimer >= 200) {
                   this.character.interact(level);
                   this.interactTimer = Date.now();
                }
            }
            //check move input
            else if (upPressed || downPressed || leftPressed || rightPressed) {
                this.character.updateDirection();
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