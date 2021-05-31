class Player {
    constructor(character, input) {
        this.character = character;
        this.inventory = []; //should inventory be refactored into character?
        this.input = input;
        this.interactTimer = Date.now() - 200;
        /*document.addEventListener("keypress", ({key})=> {
            console.log(key);
        });*/
    }

    update(level) {
        //check if not idle
        if(this.character.state != CharacterState.IDLE) {
            //continue current action
            const finishedAction = this.character.update(level);

           // console.log(finishedAction);
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

    //returns true if itemID is found in inventory and false if not
    hasItem(itemID) {
        this.inventory.forEach(item => {
            if (item == itemID)
                return true;
        });

        return false;
        /*for (let i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i] == itemID)
                return true;
        }

        return false;*/
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